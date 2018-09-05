import { generateActions } from './actions.js';
import { generateSelectors } from './selectors.js';
import { generateReducer } from './reducer.js';
import { objectMap, objectFilter } from './utils.js';

const isFunction = (val) => typeof val === 'function';

const duck = (opts) => {
	let { namespace, initialState, actionCreators = {}, selectorCreators = {} } = opts;
	if (!initialState) {
		throw new Error('Needs initialState');
	}

	actionCreators = objectFilter(actionCreators, isFunction);
	selectorCreators = objectFilter(selectorCreators, isFunction);

	const reducer = { [namespace]: generateReducer(namespace, initialState) };
	const gen_selectors = generateSelectors(namespace, initialState);

	const selectors = {
		...gen_selectors,
		...objectMap(selectorCreators, (selectorCreator) => selectorCreator(gen_selectors))
	};

	const gen_actions = generateActions(namespace, initialState);
	const actions = {
		...gen_actions,
		...objectMap(actionCreators, (actionCreator) => actionCreator.bind(null, gen_actions))
	};

	return {
		reducer,
		actions,
		selectors
	};
};

export default duck;
