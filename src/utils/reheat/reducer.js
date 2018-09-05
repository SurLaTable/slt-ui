import * as consts from './constants.js';

export const generateReducer = (namespace, initialState) => {
	const actionHandlers = {
		[`${namespace}/${consts.NULLIFY_ACTION}`]: () => null,
		[`${namespace}/${consts.TOGGLE_ACTION}`]: (state, action) => !state[action.key],
		[`${namespace}/${consts.SET_ACTION}`]: (state, action) => action.value,
		[`${namespace}/${consts.CONCAT_ACTION}`]: (state, action) =>
			state[action.key].concat(action.value),
		[`${namespace}/${consts.EXTEND_ACTION}`]: (state, action) => ({
			...state[action.key],
			...action.value
		})
	};

	const handleAction = (state, action) => {
		if (actionHandlers.hasOwnProperty(action.type) === false) {
			return state;
		}
		return { ...state, [action.key]: actionHandlers[action.type](state, action) };
	};

	return (state = initialState, action) => {
		return handleAction(state, action);
	};
};
