/*import googleMaps from '@google/maps';

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
	options: {
		headers: {
			'Access-Control-Allow-Credentials': true
		}
	}
});*/
import $ from 'jquery';

const getGoogle = (function() {
	var google = null;
	return () => {
		if (google) {
			return Promise.resolve(google);
		} else {
			return new Promise((resolve, reject) => {
				$.getScript(
					`//maps.googleapis.com/maps/api/js?key=${global.GOOGLE_MAPS_API_KEY ||
						process.env.GOOGLE_MAPS_API_KEY}`,
					function() {
						setTimeout(function() {
							google = global.google;
							resolve(global.google);
						});
					}
				).fail((jqxhr, settings, exception) => reject(exception));
			});
		}
	};
})();

export const fetchGeocode = ({ actions }, query) => {
	return async (dispatch) => {
		dispatch(actions.setIsFetching(true));
		try {
			const google = await getGoogle();
			const geocoder = new google.maps.Geocoder();

			geocoder.geocode(query, function(res, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					dispatch(actions.setIsFetching(false));
					dispatch(actions.setHasLocations(true));
					return dispatch(actions.setData(res));
				} else {
					dispatch(actions.setIsFetching(false));
					dispatch(actions.setHasLocations(false));
					return dispatch(
						actions.setData([{ error: res.error_message || 'Something went wrong' }])
					);
				}
			});
			/*
			return client
				.geocode({
					...query
				})
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
				});*/
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

export const fetchReverseGeocode = ({ actions }, query) => {
	return async (dispatch) => {
		dispatch(actions.setIsFetching(true));
		try {
			const google = await getGoogle();
			const geocoder = new google.maps.Geocoder();

			geocoder.geocode(query, function(res, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					dispatch(actions.setIsFetching(false));
					dispatch(actions.setHasLocations(true));
					return dispatch(actions.setData(res));
				} else {
					dispatch(actions.setIsFetching(false));
					dispatch(actions.setHasLocations(false));
					return dispatch(
						actions.setData([{ error: res.error_message || 'Something went wrong' }])
					);
				}
			});
			/*
			return client
				.reverseGeocode({
					...query
				})
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
				});*/
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
