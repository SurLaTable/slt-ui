import { addAsyncReducers } from '../../utils/storeTools';
import { store } from '../../StoreProvider';
import reducers from './reducers';
import { getStoreData } from './actions';

export * from './actions';

addAsyncReducers(store, reducers);

store.dispatch(getStoreData());
