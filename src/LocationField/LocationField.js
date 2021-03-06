import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import CircularProgress from '@material-ui/core/CircularProgress';

import * as googleMapsApi from '../services/google-maps';

const styles = (theme) => {
	return {
		button: {
			borderRadius: 0,
			minHeight: theme.typography.pxToRem(theme.typography.fontSize),
			lineHeight: theme.typography.pxToRem(theme.typography.fontSize),
			boxShadow: theme.shadows[0],
			'&:active': {
				boxShadow: theme.shadows[0]
			}
		},
		formControl: {
			display: 'flex',
			flexDirection: 'row',
			marginLeft: '4px',
			marginRight: '4px',
			marginTop: '8px',
			marginBottom: '6px'
		},
		input: {
			flex: '1 1 auto',
			margin: 0
		}
	};
};

class LocationField extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: '',
			address: '',
			value: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleSubmit(event) {
		let { dispatch } = this.props;
		event.preventDefault();
		if (this.state.value) {
			dispatch(
				googleMapsApi.actions.fetchGeocode({
					address: this.state.value
				})
			);
		}
	}
	handleChange(event) {
		const { value } = event.target;
		this.setState({ error: '', value });
	}
	static getDerivedStateFromProps(props, state) {
		const address = props.locationData?.formatted_address;
		const newState = {};
		if (address != state.address) {
			if (address) {
				newState.value = address;
			}
			newState.address = address;
		}

		if (props.locationData?.error != state.error) {
			newState.error = props.locationData?.error;
		}
		return newState;
	}

	render() {
		let { classes, isFetching } = this.props;
		let { error, address, value } = this.state;
		return (
			<form onSubmit={this.handleSubmit}>
				<FormControl className={classes.formControl}>
					<TextField
						name="location"
						label="City, State or Zip Code"
						placeholder="Seattle, Wa"
						margin="normal"
						error={Boolean(error)}
						onChange={this.handleChange}
						value={value}
						className={classes.input}
						disabled={isFetching}
					/>
					<div
						style={{
							alignSelf: 'flex-end',
							display: 'flex-inline',
							position: 'relative'
						}}
					>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							elevation={0}
							className={classes.button}
							disabled={isFetching}
						>
							Search
						</Button>
						{isFetching && (
							<CircularProgress
								size={12}
								style={{
									position: 'absolute',
									top: 'calc(50% - 6px)',
									left: 'calc(50% - 6px)'
								}}
							/>
						)}
					</div>
				</FormControl>
				{error && <Typography color="error">{error}</Typography>}
			</form>
		);
	}
}

LocationField.propTypes = {
	locationData: PropTypes.object,
	dispatch: PropTypes.func,
	onLocated: PropTypes.func,
	isFetching: PropTypes.bool
};

export default connect((state, props) => {
	return {
		...props,
		isFetching: googleMapsApi.selectors.getIsFetching(state),
		locationData: googleMapsApi.selectors.getData(state)?.[0]
	};
})(withStyles(styles)(LocationField));
