import axios from 'axios';
import store from 'store2';

const apiStorage = store.namespace('slt-stores-service');

const options = {
	get endpoint() {
		return global.SLT_STORE_ENDPOINT || process.env.SLT_STORE_ENDPOINT;
	}
};

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

export const fetchItems = ({ actions }, force = false) => {
	return (dispatch) => {
		dispatch(actions.setIsFetching(true));
		if (apiStorage.session.has('items') == false || force === true) {
			dispatch(actions.setIsFetching(true));
			return axios.get(options.endpoint).then((http) => {
				let data = removeInactiveStores(JSON.parse(http.data.body).Items);

				apiStorage.session.set('items', data);
				dispatch(actions.setIsFetching(false));
				return dispatch(actions.setItems(data));
			});
		} else {
			return Promise.resolve(dispatch(actions.setItems(apiStorage.session.get('items'))));
		}
	};
};
