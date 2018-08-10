import { SLT_STORE_ENDPOINT } from '../../services.config.js';
import axios from 'axios';
import store from 'store2';
//we'll store all the stores in memory here

var apiStorage = store.namespace('stores-service');

export const getStoreData = (force = false) => {
	//regular endpoint with no params
	let endpoint = SLT_STORE_ENDPOINT();
	return (dispatch) => {
		if (apiStorage.session.has('storeData') == false || force === true) {
			return axios.get(endpoint.toString()).then((data) => {
				apiStorage.session.set('storeData', data);
				return dispatch({ type: 'SET_STORE_DATA', storeData: data });
			});
		} else {
			return Promise.resolve(
				dispatch({ type: 'SET_STORE_DATA', storeData: apiStorage.session.get('storeData') })
			);
		}
	};
};

export const getClosestStores = (latlng, limit = Infinity) => {
	return (dispatch) => {
		//this action is dependent on the data existing, so we also execute the action to set the data
		return dispatch(getStoreData()).then(() => {
			return Promise.resolve(dispatch({ type: 'GET_CLOSEST_STORES', latlng, limit }));
		});
	};
};
