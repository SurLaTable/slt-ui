import googleMaps from '@google/maps';
import { GOOGLE_MAPS_API_KEY } from '../../api.config.js';

let client = googleMaps.createClient({
	key: GOOGLE_MAPS_API_KEY
});

export const geocode = (options) => {
	return (dispatch) => {
		return client
			.geocode(options)
			.asPromise()
			.then((response) => {
				return dispatch({
					type: 'GEOLOCATED',
					locationData: response.json.results
				});
			});
	};
};
