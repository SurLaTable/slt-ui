import { createSelector } from 'reselect';

export const getItemsById = (selectors) =>
	createSelector(selectors.getItems, (items = []) =>
		items.reduce((acc, item) => {
			acc[item.storeId] = item;
			return acc;
		}, {})
	);

export const getItemsAlphabetically = (selectors) =>
	createSelector(selectors.getItems, (items = []) => {
		return items.slice().sort((a, b) => {
			return a.name < b.name ? -1 : 1;
		});
	});
