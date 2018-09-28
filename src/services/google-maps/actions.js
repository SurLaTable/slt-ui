import googleMaps from '@google/maps';
import { likeString } from '../../utils/hacks.js';

// @google/maps api key
const client = googleMaps.createClient({
	key: likeString(() => global.GOOGLE_MAPS_API_KEY || process.env.GOOGLE_MAPS_API_KEY),
	Promise: Promise,
	retryOptions: {
		interval: 1000
	},
	rate: {
		period: 1000,
		limit: 5
	}
});

export const fetchGeocode = ({ actions }, options) => {
	return (dispatch) => {
		dispatch(actions.setIsFetching(true));

		return client
			.geocode(options)
			.asPromise()
			.then((response) => {
				dispatch(actions.setIsFetching(false));
				return dispatch(actions.setData(response.json.results));
			})
			.catch((err) => {
				dispatch(actions.setIsFetching(false));
				return dispatch(
					actions.setData([
						{ error: err.json ? err.json.error_message : 'Something went wrong' }
					])
				);
			});
	};
};

export const fetchReverseGeocode = ({ actions }, options) => {
	return (dispatch) => {
		dispatch(actions.setIsFetching(true));
		return client
			.reverseGeocode(options)
			.asPromise()
			.then((response) => {
				dispatch(actions.setIsFetching(false));
				return dispatch(actions.setData(response.json.results));
			})
			.catch((e) => console.error(e));
	};
};
