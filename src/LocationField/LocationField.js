import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { geocode, selectLocationData } from '../services/google-maps';

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
		this.inputRef = React.createRef();
		this.textFieldRef = React.createRef();
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleSubmit(event) {
		let { dispatch } = this.props;
		event.preventDefault();
		if (this.state.value) {
			dispatch(
				geocode({
					address: this.state.value
				})
			);
		}
	}
	handleChange(event) {
		const { value } = event.target;
		this.setState({ error: '', value });
	}
	componentDidUpdate(prevProps, prevState) {
		let address = this.props.locationData?.formatted_address;

		if (address != this.state.address) {
			if (address) {
				this.setState({ value: address });
			}
			this.setState({
				address: address
			});
		}

		if (this.props.locationData?.error != this.state.error) {
			this.setState({
				error: this.props.locationData?.error
			});
		}
	}

	render() {
		let { classes } = this.props;
		let { error, address, value } = this.state;
		return (
			<form onSubmit={this.handleSubmit}>
				<FormControl>
					<div>
						<TextField
							name="location"
							label="City, State or Zip Code"
							placeholder="Seattle, Wa"
							margin="normal"
							error={Boolean(error)}
							onChange={this.handleChange}
							helperText={error}
							value={value}
						/>
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
		locationData: selectLocationData(state)?.[0]
	};
})(withStyles(styles)(LocationField));
