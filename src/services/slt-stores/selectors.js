import { createSelector } from 'reselect';
import { filterItemsById, filterItemsAlphabetically, filterItemsByCulinary } from './filters.js';

export const getItemsById = (selectors) => createSelector(selectors.getItems, filterItemsById);

export const getItemsAlphabetically = (selectors) =>
	createSelector(selectors.getItems, filterItemsAlphabetically);

export const getSelectedItemObject = (selectors) =>
	createSelector(
		[getItemsById(selectors), selectors.getSelectedItem],
		(items, selectedItem) => items[selectedItem]
	);

export const getCulinaryItemsAlphabetically = (selectors) =>
	createSelector(selectors.getItems, filterItemsByCulinary, filterItemsAlphabetically);
