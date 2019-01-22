import { addAsyncReducers } from '../../utils/storeTools.js';
import reheat from 'redux-reheat';
import { store } from '../../StoreProvider';
import * as actionCreators from './actions';

const { reducer, actions, selectors } = reheat({
	namespace: __dirname,
	initialState: {
		data: [],
		hasLocations: false,
		isFetching: false,
		persist: [false, { data: true, hasLocations:true }]
	},
	actionCreators
});

addAsyncReducers(store, reducer);

export { actions, selectors };
