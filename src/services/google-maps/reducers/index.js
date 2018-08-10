import { createReducer } from '../../../utils/storeTools';

const actionHandlers = {
	GEOLOCATED: (state, action) => {
		return {
			...state,
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
