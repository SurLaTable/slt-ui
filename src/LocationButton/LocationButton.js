import React from 'react';
import PropTypes from 'prop-types';
import * as googleMapsApi from '../services/google-maps';
import { store } from '../StoreProvider';
import { withStyles } from '@material-ui/core/styles';

import MyLocationIcon from '@material-ui/icons/MyLocation';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

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

class LocationButton extends React.Component {
	locationErrors = ['', 'Permission Denied', 'Internal Error', 'Timeout Exceeded'];
	constructor() {
		super();
		this.state = {
			locationSupported: !!navigator?.geolocation
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleGeolocationError = this.handleGeolocationError.bind(this);
		this.handleGeolocationPosition = this.handleGeolocationPosition.bind(this);
	}
	handleGeolocationPosition(position) {
		store.dispatch(
			googleMapsApi.actions.fetchReverseGeocode({
				latlng: [position.coords.latitude, position.coords.longitude]
			})
		);
	}
	handleGeolocationError(err) {
		this.setState({ error: this.locationErrors[err.code] });
	}
	handleClick() {
		//Ask for location permission
		//geocode with google api using latlng
		//store.dispatch(geocode())
		this.setState({ error: null });
		if (this.state.locationSupported) {
			navigator.geolocation.getCurrentPosition(
				this.handleGeolocationPosition,
				this.handleGeolocationError,
				{
					enableHighAccuracy: false,
					maximumAge: 1000 * 60 * 5 // five minutes
				}
			);
		}
	}
	render() {
		let { locationSupported, error } = this.state;
		let { children, disabled = locationSupported == false, classes } = this.props;
		let message = '';
		if (locationSupported == false) {
			message = 'Geolocation is not available.';
		}
		return (
			<Tooltip title={message}>
				<Button
					disabled={disabled}
					onClick={this.handleClick}
					className={classes.button}
				>
					<MyLocationIcon style={{ marginRight: '4px' }} /> {children}
				</Button>
			</Tooltip>
		);
	}
}

LocationButton.defaultProps = {
	disabled: false
};
LocationButton.propTypes = {
	disabled: PropTypes.bool,
	children: PropTypes.node
};

export default withStyles(styles)(LocationButton);
