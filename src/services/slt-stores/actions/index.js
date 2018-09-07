import axios from 'axios';
import store from 'store2';
//we'll store all the stores in memory here

//const SLT_APIKEY = process.env.SLT_APIKEY || global.SLT_APIKEY;
const SLT_STORE_ENDPOINT = process.env.SLT_STORE_ENDPOINT || global.SLT_STORE_ENDPOINT;

var apiStorage = store.namespace('slt-stores-service');

function removeInactiveStores(storeData) {
	let items = storeData.filter(function(val) {
		//remove invalid data
		if (val.location && val.location.address1 && val.location.lat && val.location.long) {
			val.location.lat = +val.location.lat;
			val.location.long = +val.location.long;
			val.location.lng = val.location.long;

			//mapping
			//TODO I'd prefer removing the store prefix
			val.storeName = val.name;

			var storeId = String(val.id).padStart(3, '0');
			val.storeId = storeId;
			val.culinary.cookingClasses = val.culinary.cookingClasses.toLowerCase() === 'yes';
			//TODO I think the result is better than the spec for this
			val.culinary.cookingPhoneNumber = val.culinary.phoneNumber;
			return true;
		}
		return false;
	});
	return items;
}

export const fetchStoreData = ({ actions }, force = false) => {
	return (dispatch) => {
		dispatch({ type: 'SLT_STORES_LOADING' });
		if (apiStorage.session.has('items') == false || force === true) {
			return axios.get(SLT_STORE_ENDPOINT).then((http) => {
				let data = removeInactiveStores(JSON.parse(http.data.body).Items);

				apiStorage.session.set('items', data);
				return dispatch({ type: 'SET_STORE_DATA', items: data });
			});
		} else {
			return Promise.resolve(
				dispatch({ type: 'SET_STORE_DATA', items: apiStorage.session.get('items') })
			);
		}
	};
};
