import { createReducer } from '../../../utils/storeTools';

const actionHandlers = {
	GEOCODE_LOADING: (state, action) => {
		return {
			...state,
			loading: true
		};
	},
	GEOLOCATED: (state, action) => {
		return {
			...state,
			loading: false,
			locationData: action.locationData
		};
	}
};
const initialState = {
	locationData: null
};

export default {
	//export an object to name the reducer
	googleMapsApi: createReducer(initialState, actionHandlers)
};
