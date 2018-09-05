import * as consts from './constants.js';
import { cameleize } from './utils.js';

const buildAction = (type, key) => (value) => ({
	type,
	key,
	value
});

const buildActionName = (name, key) => cameleize([name, key]);

const addAction = (opts) => {
	const { namespace, actions, name, key, type } = opts;
	actions[buildActionName(name, key)] = buildAction(`${namespace}/${type}`, key);
};

export const generateActions = (namespace, initialState) => {
	const actions = {};

	Object.keys(initialState).forEach((key) => {
		const value = initialState[key];
		if (typeof value == 'boolean') {
			addAction({ name: consts.TOGGLE, type: consts.TOGGLE_ACTION, key, actions, namespace });
		} else if (Array.isArray(value)) {
			addAction({ name: consts.CONCAT, type: consts.CONCAT_ACTION, key, actions, namespace });
		} else if (value !== null && typeof value == 'object') {
			addAction({ name: consts.EXTEND, type: consts.EXTEND_ACTION, key, actions, namespace });
		}

		addAction({ name: consts.SET, type: consts.SET_ACTION, key, actions, namespace });
		addAction({ name: consts.NULLIFY, type: consts.NULLIFY_ACTION, key, actions, namespace });
	});

	return actions;
};
