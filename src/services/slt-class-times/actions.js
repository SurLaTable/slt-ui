// import axios from 'axios';
// import store from 'store2';
import data from './dummyData';
//const SLT_APIKEY = process.env.SLT_APIKEY || global.SLT_APIKEY;

// const apiStorage = store.namespace('classes-service');
//
// const culinaryClassTimesEndpoint =
// 	'https://www.surlatable.com/browse/include/culClassJSONData.jsp?productId=';

const arrayMeIfEmpty = (item) => (Array.isArray(item) ? item : []);

export const fetchClassTimes = ({ actions /*, product, location*/ }) => (dispatch) =>
	dispatch(
		actions.setClassTimeData(
			data.reduce((newObj, culinaryClass) => {
				const monthProp = `month_${new Date(culinaryClass.classStartDate).getMonth()}`;
				newObj[monthProp] = arrayMeIfEmpty(newObj[monthProp]);
				newObj[monthProp].push(culinaryClass);
				return newObj;
			}, {})
		)
	);
// return axios.get(`${culinaryClassTimesEndpoint}${'CFA-1018555'}`).then((http) => {
// 	// console.log(data, apiStorage, apiStorage.local);
// 	// For some reason `store2` is not working as
// 	// expected here:
//
// 	apiStorage.local && apiStorage.local({ classTimeData: http.data });
// 	return dispatch({ type: 'SET_CLASS_TIME_DATA', classTimeData: http.data });
// });
