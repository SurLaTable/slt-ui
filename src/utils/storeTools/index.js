import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';

const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const mask = (obj, maskObj, filterDefault = true) => {
	if (typeof maskObj == 'object' && maskObj !== null && typeof obj == 'object' && obj !== null) {
		var result = new obj.constructor();
		for (let key in obj) {
			if (obj.hasOwnProperty(key) && maskObj[key] !== false) {
				result[key] = mask(obj[key], maskObj[key], filterDefault);
			}
		}
		return result;
	} else if (filterDefault === true && maskObj !== false) {
		//mask must explicitly remove
		return obj;
	} else if (filterDefault === false && maskObj === true) {
		//mask must explicitly include
		return obj;
	}
};

const merge = (a, b) => {
	if (typeof a === 'object' && a !== null && typeof b == 'object' && b !== null) {
		for (let key in b) {
			if (b.hasOwnProperty(key)) {
				a[key] = merge(a[key], b[key]);
			}
		}
	} else if (b !== undefined) {
		return b;
	}
	return a;
};

const persist =
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
					subset[key] = mask(state[key], maskObj, filterDefault);
				}
			}
			return subset;
		}
	}) || ((state) => state);

let middlware = composeEnhancers(
	applyMiddleware(thunk),
	// redux-localstorage:
	persist
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

const configureStore = (initialState, initialReducers) => {
	const store = createStore(
		initialReducers ? combineReducers({ ...initialReducers }) : (state) => state,
		initialState,
		middlware
	);
	store.asyncReducers = initialReducers ? { ...initialReducers } : {};
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
