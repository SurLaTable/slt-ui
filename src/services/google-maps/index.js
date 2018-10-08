import { addAsyncReducers } from '../../utils/storeTools';
import reheat from 'redux-reheat';
import { store } from '../../StoreProvider';
import * as actionCreators from './actions';

const { reducer, actions, selectors } = reheat({
	namespace: __dirname,
	initialState: {
		data: [],
		hasLocations: false,
		isFetching: false
	},
	actionCreators
});

addAsyncReducers(store, reducer);

export { actions, selectors };
