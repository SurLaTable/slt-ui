import { addAsyncReducers } from '../../utils/storeTools';
import { store } from '../../StoreProvider';
import reducers from './reducers';
import { fetchStoreData } from './actions';

export * from './actions';
export * from './selectors';

addAsyncReducers(store, reducers);

store.dispatch(fetchStoreData());
