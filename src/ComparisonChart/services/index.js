//this is our global store from our global StoreProvider
import { store } from '../../StoreProvider';
//this is the file that helps construct our global store, but specifically we're just adding reducers to the already existing global store
import { addAsyncReducers } from '../../utils/storeTools.js';
import reducers from './reducers/';
addAsyncReducers(store, reducers); //using this object syntax creates {sltReducers:sltReducers}

export * from './actions';
