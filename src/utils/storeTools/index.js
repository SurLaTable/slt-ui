import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';

const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persist = global.localStore ? persistState() : (state) => state;

let middlware = composeEnhancers(
	applyMiddleware(thunk),
	// redux-localstorage:
	persist
);

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
