import { addAsyncReducers } from '../../utils/storeTools';
import { store } from '../../StoreProvider';
import * as actionCreators from './actions';
import reheat from 'redux-reheat';

const { actions, reducer, selectors } = reheat({
	namespace: __dirname.split('/').pop(),
	initialState: {
		classTimeData: {},
		selectedClass: null
	},
	actionCreators
});

addAsyncReducers(store, reducer);

export { actions, selectors };
