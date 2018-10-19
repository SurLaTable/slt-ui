import axios from 'axios';
import store from 'store2';
//const SLT_APIKEY = process.env.SLT_APIKEY || global.SLT_APIKEY;

const apiStorage = store.namespace('classes-service');

const arrayMeIfEmpty = (item) => (Array.isArray(item) ? item : []);

export const fetchClassTimes = ({ actions }, product, location) => (dispatch) => {
	if (apiStorage.session.has(`classTimeData-${product}-${location}`)) {
		return Promise.resolve(
			dispatch(
				actions.setClassTimeData(
					apiStorage.session.get(`classTimeData-${product}-${location}`)
				)
			)
		);
	}
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
			const data = http.data
				.filter((culinaryClass) => culinaryClass.storeId === location)
				.reduce((newObj, culinaryClass) => {
					var startDate = new Date(culinaryClass.classStartDate);
					if (startDate >= now) {
						const prop = startDate.toLocaleString('en-us', {
							month: 'long',
							year: 'numeric'
						});
						newObj[prop] = arrayMeIfEmpty(newObj[prop]);
						newObj[prop].push(culinaryClass);
					}
					return newObj;
				}, {});
			apiStorage.session.set(`classTimeData-${product}-${location}`, data);
			dispatch(actions.setClassTimeData(data));
		})
		.catch((e) => console.error(e));
};
