import * as storeTools from './storeTools';

export * from '@material-ui/core';
export * from './ComparisonChart';
export {default as StoreProvider, store} from './StoreProvider';
export {storeTools};

if (process.env.NODE_ENV === 'development') {
	console.warn('Using development version of slt-ui');
}
