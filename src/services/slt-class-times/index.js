import { addAsyncReducers } from '../../utils/storeTools.js';
import { store } from '../../StoreProvider';
import * as actionCreators from './actions';
import * as selectorCreators from './selectors';
import reheat from 'redux-reheat';

const { actions, reducer, selectors } = reheat({
	namespace: __dirname,
	initialState: {
		classTimeData: {},
		nextClass: null,
		isFetching: false,
		persist: [false, {}]
	},
	actionCreators,
	selectorCreators
});

addAsyncReducers(store, reducer);

export { actions, selectors };
