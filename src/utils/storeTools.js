import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';
import { mask, merge } from './object.js';
import store from 'store2';

const versionKey = 'slt-ui-version';
const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let middlware = composeEnhancers(
	applyMiddleware(thunk),
	// redux-localstorage:
	persistState(null, {
		merge: merge,
		slicer: () => (state) => {
			let subset = {};
			for (let key in state) {
				if (state?.[key]?.persist) {
					let maskObj = state[key].persist,
						filterDefault = true;
					if (Array.isArray(maskObj)) {
						filterDefault = maskObj[0];
						maskObj = maskObj[1];
					}
					subset[key] = mask(state[key], { ...maskObj, persist: true }, filterDefault);
				}
			}

			return subset;
		}
	})
);

const combineReducers = (reducers) => {
	var reducerKeys = Object.keys(reducers);
	var finalReducers = {};
	var i, key;
	for (i = 0; i < reducerKeys.length; i++) {
		key = reducerKeys[i];

		if (process.env.NODE_ENV !== 'production') {
			if (typeof reducers[key] === 'undefined') {
				console.warn('No reducer provided for key "' + key + '"');
			}
		}

		if (typeof reducers[key] === 'function') {
			finalReducers[key] = reducers[key];
		}
	}
	var finalReducerKeys = Object.keys(finalReducers);

	return function() {
		var state = arguments[0] !== undefined ? arguments[0] : {};
		var action = arguments[1];

		var hasChanged = false;
		//console.log(state);
		var nextState = { ...state };
		for (i = 0; i < finalReducerKeys.length; i++) {
			key = finalReducerKeys[i];
			var reducer = finalReducers[key];
			var previousStateForKey = state?.[key] || undefined;
			var nextStateForKey = reducer(previousStateForKey, action);
			if (typeof nextStateForKey === 'undefined') {
				throw new Error('State can not be undefined');
			}
			nextState[key] = nextStateForKey;
			hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
		}
		return hasChanged ? nextState : state;
	};
};

const configureStore = () => {
	const store = createStore((state) => state, null, middlware);
	store.asyncReducers = {};
	return store;
};
export default configureStore;

export function addAsyncReducers(store, asyncReducers = {}) {
	store.asyncReducers = {
		...store.asyncReducers,
		...asyncReducers
	};

	store.replaceReducer(combineReducers(store.asyncReducers));
}

export function removeAsyncReducers(store, asyncReducerNames = []) {
	for (let i = 0; i < asyncReducerNames.length; i++) {
		delete store.asyncReducers[asyncReducerNames[i]];
	}
	store.replaceReducer(combineReducers(store.asyncReducers));
}
