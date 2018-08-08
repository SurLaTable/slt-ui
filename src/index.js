import * as utils from './utils';

export * from '@material-ui/core';
export * from './ComparisonChart';
export { default as StoreProvider, store } from './StoreProvider';
export { utils };

if (process.env.NODE_ENV === 'development') {
	console.warn('Using development version of slt-ui');
}
