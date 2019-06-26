import axios from 'axios';
import store from 'store2';
//const SLT_APIKEY = process.env.SLT_APIKEY || global.SLT_APIKEY;

import { parseDate } from '../../utils/time.js';

const apiStorage = store.namespace('classes-service');

const arrayMeIfEmpty = (item) => (Array.isArray(item) ? item : []);

export const fetchClassTimes = ({ actions }, product, location) => (dispatch) => {
	actions.setIsFetching(true);
	return axios
		.get(
			`${global.CULINARY_CLASS_TIMES_ENDPOINT ||
				process.env.CULINARY_CLASS_TIMES_ENDPOINT ||
				'https://www.surlatable.com/browse/include/culClassJSONData.jsp'}?productId=${product}`
		)
		.then((http) => {
			const now = new Date();
			actions.setIsFetching(false);
			var nextClassTime = Infinity,
				nextClass = null;

			const data = http.data
				.filter((culinaryClass) => {
					var sameLocation = culinaryClass.storeId === location;
					var notCSA = !culinaryClass.sku.includes("CSA-");

					var startDate = parseDate(culinaryClass.classStartDate);

					return sameLocation && notCSA && startDate >= now;
				})
				.reduce((newObj, culinaryClass) => {
					var startDate = parseDate(culinaryClass.classStartDate);
					const prop = startDate.toLocaleString('en-us', {
						month: 'long',
						year: 'numeric'
					});
					newObj[prop] = arrayMeIfEmpty(newObj[prop]);
					newObj[prop].push(culinaryClass);
					if (startDate <= nextClassTime) {
						nextClassTime = startDate;
						nextClass = prop;
					}
					return newObj;
				}, {});
			
			for (let month in data) {
				data[month].sort((a, b) => {
					return parseDate(a.classStartDate) - parseDate(b.classStartDate)
				});
			}
			
			dispatch(actions.setNextClass(nextClass));
			dispatch(actions.setClassTimeData(data));
			return data && nextClass && data[nextClass][0];
		})
		.catch((e) => console.error(e));
};
