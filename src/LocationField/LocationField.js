import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { geocode } from '../services/google-maps';

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
		console.log(this.state.value);
		if (this.state.value) {
			console.log('dispatch');
			dispatch(
				geocode({
					address: this.state.value
				})
			).then(() => {
				console.log('hey');
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
			console.log(formatted_address, this.state.value);
			if (formatted_address && formatted_address !== this.state.value) {
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
		let { dispatch } = this.props;

		return (
			<form onSubmit={this.handleSubmit}>
				<FormControl>
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
				</FormControl>
			</form>
		);
	}
}

LocationField.propTypes = {
	locationData: PropTypes.object,
	dispatch: PropTypes.func
};

export default connect((state, props, c, d) => {
	let locationData = state.googleMapsApi.locationData
		? state.googleMapsApi.locationData[0]
		: null;
	return {
		...props,
		locationData
	};
})(LocationField);
