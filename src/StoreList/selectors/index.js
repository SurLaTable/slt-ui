import { createSelector } from 'reselect';

import * as sltStoresApi from '../../services/slt-stores';
import {
	filterItemsAlphabetically,
	filterItemsByCulinary
} from '../../services/slt-stores/filters.js';
import * as googleMapsApi from '../../services/google-maps';

function haversineDistance(lat1, lon1, lat2, lon2, unit) {
	var radlat1 = (Math.PI * lat1) / 180;
	var radlat2 = (Math.PI * lat2) / 180;
	var theta = lon1 - lon2;
	var radtheta = (Math.PI * theta) / 180;
	var dist =
		Math.sin(radlat1) * Math.sin(radlat2) +
		Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	dist = Math.acos(dist);
	dist = (dist * 180) / Math.PI;
	dist = dist * 60 * 1.1515;
	if (unit == 'K') {
		dist = dist * 1.609344;
	}
	if (unit == 'N') {
		dist = dist * 0.8684;
	}
	return dist;
}
function haversineSort(items = [], latlng = {}) {
	return items
		.map((item) => {
			return {
				...item,
				distance: haversineDistance(
					latlng.lat,
					latlng.lng,
					item.location.lat,
					item.location.lng
				)
			};
		})
		.sort((a, b) => a.distance - b.distance);
}
export const getClosestStores = createSelector(
	[sltStoresApi.selectors.getItems, googleMapsApi.selectors.getData],
	(items = [], locationData) => {
		if (locationData?.[0]?.geometry?.location) {
			return haversineSort(items, locationData?.[0]?.geometry?.location);
		} else {
			return filterItemsAlphabetically(items);
		}
	}
);

export const getClosestCulinaryStores = createSelector(getClosestStores, filterItemsByCulinary);
