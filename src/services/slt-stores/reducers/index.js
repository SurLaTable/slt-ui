import { createReducer } from '../../../utils/storeTools';
import utils from './utils';

const actionHandlers = {
	SLT_STORES_LOADING: (state) => {
		return {
			...state,
			loading: true
		};
	},
	SET_STORE_DATA: (state, action) => {
		return {
			...state,
			loading: false,
			storeData: utils.removeInnactiveStores(action.storeData)
		};
	},
	LATLNG_SORT_STORES: (state, action) => {
		//once I add filtering for different props, we can filter the stores before running haversineSort
		let res = utils.haversineSort(state.storeData.items, action.latlng);
		let map = {};
		let items = res.data.reduce((reducer, val) => {
			let data = {
				storeId: val.storeId,
				distance: res.distances[val.storeId]
			};
			reducer.push(data);
			map[val.storeId] = res.distances[val.storeId];
			return reducer;
		}, []);
		return {
			...state,
			closestStores: {
				byId: map,
				items: items
			}
		};
	}
};
const initialState = {
	storeData: {},
	selectedStores: []
};

export default {
	//export an object to name the reducer
	storesApi: createReducer(initialState, actionHandlers)
};
