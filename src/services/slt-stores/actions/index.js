import axios from 'axios';
import store from 'store2';
//we'll store all the stores in memory here

//const SLT_APIKEY = process.env.SLT_APIKEY || global.SLT_APIKEY;
const SLT_STORE_ENDPOINT = process.env.SLT_STORE_ENDPOINT || global.SLT_STORE_ENDPOINT;

var apiStorage = store.namespace('stores-service');

export const getStoreData = (force = false) => {
	return (dispatch) => {
		dispatch({ type: 'SLT_STORES_LOADING' });
		if (apiStorage.session.has('storeData') == false || force === true) {
			return axios.get(SLT_STORE_ENDPOINT).then((http) => {
				let data = JSON.parse(http.data.body).Items;

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

export const sortStoresByDistance = (latlng) => {
	return (dispatch) => {
		//this action is dependent on the data existing, so we also execute the action to set the data
		return dispatch(getStoreData()).then(() => {
			return Promise.resolve(dispatch({ type: 'LATLNG_SORT_STORES', latlng }));
		});
	};
};
