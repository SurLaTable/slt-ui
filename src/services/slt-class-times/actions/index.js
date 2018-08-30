import axios from 'axios';
import store from 'store2';

//const SLT_APIKEY = process.env.SLT_APIKEY || global.SLT_APIKEY;

const apiStorage = store.namespace('classes-service');

const culinaryClassTimesEndpoint =
	'https://seattle-dev2.surlatable.com/browse/include/culClassJSONData.jsp?productId=';

export const actionGetClassTimes = (product, location) => {
	return (dispatch) => {
		return axios.get(`${culinaryClassTimesEndpoint}${'CFA-1018555'}`).then((http) => {
			// console.log(data, apiStorage, apiStorage.local);
			// For some reason `store2` is not working as
			// expected here:
			apiStorage.local && apiStorage.local({ classTimeData: http.data });
			return dispatch({ type: 'SET_CLASS_TIME_DATA', classTimeData: http.data });
		});
	};
};
