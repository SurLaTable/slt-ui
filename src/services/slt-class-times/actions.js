import axios from 'axios';
// import store from 'store2';
import data from './dummyData';
//const SLT_APIKEY = process.env.SLT_APIKEY || global.SLT_APIKEY;

// const apiStorage = store.namespace('classes-service');

const culinaryClassTimesEndpoint = '/browse/include/culClassJSONData.jsp?productId=';

const arrayMeIfEmpty = (item) => (Array.isArray(item) ? item : []);

export const fetchClassTimes = ({ actions, product = 'CFA-1018555', location = '004' }) => (
	dispatch
) =>
	axios.get(`${culinaryClassTimesEndpoint}${product}`).then((http) =>
		dispatch(
			actions.setClassTimeData(
				// data
				http.data
					.filter((culinaryClass) => culinaryClass.storeId === location)
					.reduce((newObj, culinaryClass) => {
						const monthProp = new Date(culinaryClass.classStartDate).getMonth();
						newObj[monthProp] = arrayMeIfEmpty(newObj[monthProp]);
						newObj[monthProp].push(culinaryClass);
						return newObj;
					}, {})
			)
		)
	);

// 	apiStorage.local && apiStorage.local({ classTimeData: http.data });
