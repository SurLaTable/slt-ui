import { addAsyncReducers } from '../../utils/storeTools.js';
import { store } from '../../StoreProvider';
import reheat from 'redux-reheat';

import * as actionCreators from './actions.js';
import * as selectorCreators from './selectors.js';

const { reducer, actions, selectors } = reheat({
	namespace: __dirname,
	initialState: {
		items: [],
		isFetching: false,
		selectedItem: null,
		persist: [false, { items: true, selectedItem: true }]
	},
	actionCreators,
	selectorCreators
});

addAsyncReducers(store, reducer);
store.dispatch(actions.fetchItems());

export { actions, selectors };
