import { addAsyncReducers } from '../../utils/storeTools';
import reheat from 'redux-reheat';
import { store } from '../../StoreProvider';
import * as actionCreators from './actions';

const { reducer, actions, selectors } = reheat({
	namespace: 'googleMapsApi',
	initialState: {
		data: [],
		isFetching: false
	},
	actionCreators
});

addAsyncReducers(store, reducer);

export { actions, selectors };
