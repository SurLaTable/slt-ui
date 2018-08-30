const dateTimeReducer = (state = {}, action) => {
	console.log(state);
	let data = state.classTimeData || {};

	switch (action.type) {
		case 'SET_CLASS_TIME_DATA':
			return {
				...state,
				classTimeData: {
					...data,
					...action.data
				}
			};

		default:
			return {
				...state
			};
	}
};

export default dateTimeReducer;
