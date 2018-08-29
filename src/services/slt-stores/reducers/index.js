import { createReducer } from '../../../utils/storeTools';

const initialState = {
	items: [],
	isFetching: false
};

const actionHandlers = {
	SLT_STORES_LOADING: (state) => {
		return {
			...state,
			...initialState,
			isFetching: true
		};
	},
	SET_STORE_DATA: (state, action) => {
		return {
			...state,
			isFetching: false,
			items: action.items
		};
	}
};

export default {
	//export an object to name the reducer
	storesApi: createReducer(initialState, actionHandlers)
};
