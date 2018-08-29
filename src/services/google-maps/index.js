import { addAsyncReducers } from '../../utils/storeTools';
import { store } from '../../StoreProvider';
import reducers from './reducers';

addAsyncReducers(store, reducers);

export * from './actions';
export * from './selectors';
