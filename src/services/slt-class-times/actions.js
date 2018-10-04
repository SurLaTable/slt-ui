import axios from 'axios';
// import store from 'store2';
//const SLT_APIKEY = process.env.SLT_APIKEY || global.SLT_APIKEY;

// const apiStorage = store.namespace('classes-service');

const arrayMeIfEmpty = (item) => (Array.isArray(item) ? item : []);

export const fetchClassTimes = ({ actions }, product, location) => (dispatch) =>
	axios
		.get(
			`${global.CULINARY_CLASS_TIMES_ENDPOINT ||
				process.env.CULINARY_CLASS_TIMES_ENDPOINT ||
				'https://www.surlatable.com/browse/include/culClassJSONData.jsp'}?productId=${product}`
		)
		.then((http) => {
			console.log(http.data);
			const data = http.data
				.filter((culinaryClass) => culinaryClass.storeId === location)
				.reduce((newObj, culinaryClass) => {
					const prop = new Date(culinaryClass.classStartDate).toLocaleString('en-us', {
						month: 'long',
						year: 'numeric'
					});
					newObj[prop] = arrayMeIfEmpty(newObj[prop]);
					newObj[prop].push(culinaryClass);
					return newObj;
				}, {});
			const first = Object.keys(data)[0];
			dispatch(actions.setClassTimeData(data));
			dispatch(actions.setSelectedClass(first));
		})
		.catch((e) => console.error(e));

// 	apiStorage.local && apiStorage.local({ classTimeData: http.data });
