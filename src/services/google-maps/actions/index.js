import googleMaps from '@google/maps';

// @google/maps api key
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY || global.GOOGLE_MAPS_API_KEY;

let client = googleMaps.createClient({
	key: GOOGLE_MAPS_API_KEY,
	Promise: Promise,
	retryOptions: {
		interval: 1000
	},
	rate: {
		period: 1000,
		limit: 5
	}
});

export const geocode = (options) => {
	return (dispatch) => {
		dispatch({ type: 'GEOCODE_LOADING' });
		return client
			.geocode(options, function() {
				console.log(arguments);
			})
			.asPromise()
			.then((response) => {
				console.log(response);
				return dispatch({
					type: 'GEOLOCATED',
					locationData: response.json.results
				});
			})
			.catch((err) => {
				console.log(err);
				return dispatch({
					type: 'GEOLOCATED',
					locationData: [
						{ error: err.json ? err.json.error_message : 'Something went wrong' }
					]
				});
			});
	};
};

export const reverseGeocode = (options) => {
	return (dispatch) => {
		return client
			.reverseGeocode(options)
			.asPromise()
			.then((response) => {
				console.log(response);
				return dispatch({
					type: 'GEOLOCATED',
					locationData: response.json.results
				});
			});
	};
};
