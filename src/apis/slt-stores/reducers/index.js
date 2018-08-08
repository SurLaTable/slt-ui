import { createReducer } from '../../../utils/storeTools';
import utils from './utils';

const actionHandlers = {
	SET_STORE_DATA: (state, action) => {
		return {
			...state,
			storeData: utils.removeInnactiveStores(action.storeData)
		};
	},
	GET_CLOSEST_STORES: (state, action) => {
    //once I add filtering for different props, we can filter the stores before running haversineSort
		let res = utils.haversineSort(state.storeData, action.latlng);
		return {
			...state,
			selectedStores: res.data.slice(0, action.limit).reduce((reducer, val) => {
				reducer.push({
					storeId: val.storeId,
					distance: res.distances[val.storeId]
				});
        return reducer;
			}, [])
		};
	}
};
const initialState = {
	storeData: [],
	selectedStores: []
};

export default {
	//export an object to name the reducer
	storesApi: createReducer(initialState, actionHandlers)
};
