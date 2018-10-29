import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as googleMapsApi from '../services/google-maps';
import { store } from '../StoreProvider';
import { withStyles } from '@material-ui/core/styles';

import MyLocationIcon from '@material-ui/icons/MyLocation';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import CircularProgress from '@material-ui/core/CircularProgress';

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
	locationErrors = [
		'',
		'Permission Denied',
		'Unable to get position from browser.',
		'Timeout Exceeded'
	];
	constructor() {
		super();
		this.state = {
			locationSupported: !!navigator?.geolocation,
			error: ''
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleGeolocationError = this.handleGeolocationError.bind(this);
		this.handleGeolocationPosition = this.handleGeolocationPosition.bind(this);
	}
	handleGeolocationPosition(position) {
		store.dispatch(
			googleMapsApi.actions.fetchReverseGeocode({
				location: {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				}
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
		this.setState({ error: '' });
		if (this.state.locationSupported) {
			try {
				navigator.geolocation.getCurrentPosition(
					this.handleGeolocationPosition.bind(this),
					this.handleGeolocationError.bind(this),
					{
						enableHighAccuracy: false,
						maximumAge: 1000 * 60 * 5 // five minutes
					}
				);
			} catch (e) {
				this.handleGeolocationError(e);
			}
		}
	}
	render() {
		let { locationSupported, error } = this.state;
		let { children, disabled = locationSupported == false, classes, isFetching } = this.props;
		let message = error;
		if (locationSupported == false) {
			message = 'Geolocation is not available.';
		}
		return (
			<Tooltip
				title={message}
				placement="top"
			>
				<Button
					disabled={disabled || isFetching}
					onClick={this.handleClick}
					className={classes.button}
				>
					{isFetching ? (
						<CircularProgress
							size={24}
							style={{ marginRight: '4px' }}
						/>
					) : (
						<MyLocationIcon style={{ marginRight: '4px' }} />
					)}{' '}
					{children}
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
	children: PropTypes.node,
	isFetching: PropTypes.bool
};

export default connect((state, props) => {
	return {
		...props,
		isFetching: googleMapsApi.selectors.getIsFetching(state)
	};
})(withStyles(styles)(LocationButton));
