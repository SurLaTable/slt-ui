import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import * as googleMapsApi from '../services/google-maps';

const styles = (theme) => {
	console.log(theme);
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
			flex: '1',
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
		let { classes } = this.props;
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
						helperText={error}
						value={value}
						className={classes.input}
					/>
					<div
						style={{
							alignSelf: 'flex-end',
							display: 'flex-inline'
						}}
					>
						<Button
							type="submit"
							variant="contained"
							elevation={0}
							className={classes.button}
						>
							Search
						</Button>
					</div>
				</FormControl>
			</form>
		);
	}
}

LocationField.propTypes = {
	locationData: PropTypes.object,
	dispatch: PropTypes.func,
	onLocated: PropTypes.func
};

export default connect((state, props) => {
	return {
		...props,
		locationData: googleMapsApi.selectors.getData(state)?.[0]
	};
})(withStyles(styles)(LocationField));
