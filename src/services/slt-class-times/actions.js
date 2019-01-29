import axios from 'axios';
import store from 'store2';
//const SLT_APIKEY = process.env.SLT_APIKEY || global.SLT_APIKEY;

import { parseDate } from '../../utils/time.js';

const apiStorage = store.namespace('classes-service');

const arrayMeIfEmpty = (item) => (Array.isArray(item) ? item : []);

export const fetchClassTimes = ({ actions }, product, location) => (dispatch) => {
	dispatch(actions.setIsFetching(true));
	return axios
		.get(
			`${global.CULINARY_CLASS_TIMES_ENDPOINT ||
				process.env.CULINARY_CLASS_TIMES_ENDPOINT ||
				'https://www.surlatable.com/browse/include/culClassJSONData.jsp'}?productId=${product}`
		)
		.then((http) => {
			const now = new Date();
			now.setHours(0, 0, 0, 0);
			var nextClassTime = Infinity,
				nextClass = null;
			if (!http.data) {
				dispatch(actions.setIsFetching(false));
				dispatch(actions.setNextClass(null));
				dispatch(actions.setClassTimeData({}));
				return null;
			}
			const data = http.data
				.filter((culinaryClass) => culinaryClass.storeId === location)
				.reduce((newObj, culinaryClass) => {
					var startDate = parseDate(culinaryClass.classStartDate);
					if (startDate >= now) {
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
					}
					return newObj;
				}, {});
			//apiStorage.session.set(`classTimeData-${product}-${location}`, data);

			for (let month in data) {
				data[month].sort((a, b) => new Date(a.classStartDate) - new Date(b.classStartDate));
			}
			dispatch(actions.setIsFetching(false));
			dispatch(actions.setNextClass(nextClass));
			dispatch(actions.setClassTimeData(data));
			return data && nextClass && data[nextClass][0];
		})
		.catch((e) => {
			dispatch(actions.setIsFetching(false));
			dispatch(actions.setNextClass(null));
			dispatch(actions.setClassTimeData({}));
			console.error(e);
		});
};
