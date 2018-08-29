import { createSelector } from 'reselect';

export const selectStores = (state) => state.storesApi?.items;

export const selectStoresById = createSelector(selectStores, (items = []) =>
	items.reduce((acc, item) => {
		acc[item.storeId] = item;
		s;
		return acc;
	}, {})
);

export const selectStoresAlphabetically = createSelector(selectStores, (items = []) => {
	return items.slice().sort((a, b) => {
		return a.name < b.name ? -1 : 1;
	});
});
