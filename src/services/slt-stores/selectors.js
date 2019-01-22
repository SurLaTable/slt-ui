import { createSelector } from 'reselect';
import { filterItemsById, filterItemsAlphabetically, filterItemsByCulinary } from './filters.js';

export const getKioskLocationId = () => global?.document?.cookie?.match(/(^| )kiosk_location_id=([^;]+)/)?.[2];

export const getSelectedItem = (selectors) =>
	createSelector(
		[getKioskLocationId, selectors.getSelectedItem],
		(kiosk_location_id, selectedItem) => {
			return selectedItem || kiosk_location_id;
		}
	);

export const getItemsById = (selectors) => createSelector(selectors.getItems, filterItemsById);
export const getItemsWithId = (selectors) =>
	createSelector([selectors.getItems, (state, storeId) => storeId], (items, storeId) =>
		items.filter((v) => {
			return v.storeId == storeId;
		})
	);

export const getItemsAlphabetically = (selectors) =>
	createSelector(selectors.getItems, filterItemsAlphabetically);

export const getSelectedItemObject = (selectors) =>
	createSelector(
		[getItemsById(selectors), getSelectedItem(selectors)],
		(items, selectedItem) => items[selectedItem]
	);

export const getCulinaryItemsAlphabetically = (selectors) =>
	createSelector(selectors.getItems, filterItemsByCulinary, filterItemsAlphabetically);
