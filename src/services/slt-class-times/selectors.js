import { createSelector } from 'reselect';

export const getNextClassObj = (selectors) =>
	createSelector(
		[selectors.getClassTimeData, selectors.getNextClass],
		(classTimeData, nextClass) => classTimeData?.[nextClass]?.[0]
	);
