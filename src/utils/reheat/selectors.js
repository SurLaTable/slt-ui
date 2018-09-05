import { cameleize } from './utils.js';

const buildName = (key) => cameleize(['get', key]);

export const generateSelectors = (namespace, initialState) => {
	const selectors = {};
	Object.keys(initialState).forEach((key) => {
		selectors[buildName(key)] = (state) => state[namespace][key];
	});
	return selectors;
};
