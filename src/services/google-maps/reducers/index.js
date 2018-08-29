import { createReducer } from '../../../utils/storeTools';

const initialState = {
	data: null,
	isFetching: false
};

const actionHandlers = {
	GEOCODE_LOADING: (state, action) => {
		return {
			...state,
			...initialState,
			isFetching: true
		};
	},
	GEOLOCATED: (state, action) => {
		return {
			...state,
			isFetching: false,
			data: action.data
		};
	}
};

export default {
	//export an object to name the reducer
	googleMapsApi: createReducer(initialState, actionHandlers)
};
