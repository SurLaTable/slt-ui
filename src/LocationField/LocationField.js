import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { geocode } from '../services/google-maps';

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
			update: false,
			value: '',
			address: ''
		};
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
			).then(() => {
				this.setState({
					update: true
				});
			});
		}
	}
	handleChange(event) {
		this.setState({ error: '', value: event.target.value });
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.props.locationData === null) {
			return;
		}
		var formatted_address = this.props.locationData.formatted_address;
		if (this.state.update) {
			if (formatted_address && formatted_address !== this.state.value) {
				if (typeof this.props.onLocated == 'function') {
					this.props.onLocated(this.props.locationData);
				}
				this.setState({
					update: false,
					address: formatted_address,
					value: formatted_address
				});
			}

			if (
				this.props.locationData.error &&
				this.state.error != this.props.locationData.error
			) {
				this.setState({
					update: false,
					error: this.props.locationData.error
				});
			}
		}
	}

	render() {
		let { classes } = this.props;
		return (
			<form onSubmit={this.handleSubmit}>
				<FormControl>
					<div>
						<TextField
							name="location"
							label="City, State or Zip Code"
							placeholder="Seattle, Wa"
							margin="normal"
							error={Boolean(this.state.error)}
							onChange={this.handleChange}
							helperText={this.state.error}
							value={this.state.value}
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
	let locationData = state.googleMapsApi.locationData
		? state.googleMapsApi.locationData[0]
		: null;
	return {
		...props,
		locationData
	};
})(withStyles(styles)(LocationField));
