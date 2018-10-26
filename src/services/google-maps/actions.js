import googleMaps from '@google/maps';

const client = googleMaps.createClient({
	key: global.GOOGLE_MAPS_API_KEY || process.env.GOOGLE_MAPS_API_KEY,
	Promise: Promise,
	retryOptions: {
		interval: 200
	},
	timeout: 15 * 1000,
	rate: {
		period: 1000,
		limit: 5
	},
	headers: {
		'Access-Control-Allow-Credentials': true
	}
});

export const fetchGeocode = ({ actions }, options) => {
	return (dispatch) => {
		dispatch(actions.setIsFetching(true));
		try {
			return client
				.geocode(options)
				.asPromise()
				.then((response) => {
					dispatch(actions.setIsFetching(false));
					dispatch(actions.setHasLocations(true));
					return dispatch(actions.setData(response.json.results));
				})
				.catch((err) => {
					dispatch(actions.setIsFetching(false));
					dispatch(actions.setHasLocations(false));
					return dispatch(
						actions.setData([
							{ error: err.json ? err.json.error_message : 'Something went wrong' }
						])
					);
				});
		} catch (err) {
			dispatch(actions.setIsFetching(false));
			dispatch(actions.setHasLocations(false));
			return dispatch(
				actions.setData([
					{ error: typeof err == 'string' ? err : err.message || 'Something went wrong' }
				])
			);
		}
	};
};

export const fetchReverseGeocode = ({ actions }, options) => {
	return (dispatch) => {
		dispatch(actions.setIsFetching(true));
		try {
			return client
				.reverseGeocode(options)
				.asPromise()
				.then((response) => {
					dispatch(actions.setIsFetching(false));
					dispatch(actions.setHasLocations(true));
					return dispatch(actions.setData(response.json.results));
				})
				.catch((err) => {
					dispatch(actions.setIsFetching(false));
					dispatch(actions.setHasLocations(false));
					return dispatch(
						actions.setData([
							{ error: err.json ? err.json.error_message : 'Something went wrong' }
						])
					);
				});
		} catch (err) {
			dispatch(actions.setIsFetching(false));
			dispatch(actions.setHasLocations(false));
			return dispatch(
				actions.setData([
					{ error: typeof err == 'string' ? err : err.message || 'Something went wrong' }
				])
			);
		}
	};
};
