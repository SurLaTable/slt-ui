
/*
  This loads the reducers when they may not be needed, it might be a good idea
  to have this imported on each smaller component and only have it do something
  if it's not already registered.
*/

//this is our global store from our global StoreProvider
import {store} from '../StoreProvider';
//this is the file that helps construct our global store, but specifically we're just adding reducers to the already existing global store
import {addAsyncReducers} from '../utils/storeTools';
import sltReducers from './reducers/sltReducers';
addAsyncReducers(store,{sltReducers}); //using this object syntax creates {sltReducers:sltReducers}

export { default as ComparisonCheckbox } from './ComparisonCheckbox/ComparisonCheckbox.js';
export { default as ComparisonTable } from './ComparisonTable/ComparisonTable.js';
export { default as ComparisonBar } from './ComparisonBar/ComparisonBar.js';
