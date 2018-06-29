export * from '@material-ui/core';
export * from './ComparisonChart';

if (process.env.NODE_ENV === 'development') {
	console.warn('Using development version of slt-ui');
}
