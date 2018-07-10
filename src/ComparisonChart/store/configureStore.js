import { compose, createStore, applyMiddleware } from 'redux';
import sltReducers from '../reducers/sltReducers';
import thunk from 'redux-thunk';
// import { loadState, saveState } from './localStorage';
import persistState from 'redux-localstorage';

export default function() {
	// const persistedState = loadState();
	const store = createStore(
		sltReducers,
		compose(
			applyMiddleware(thunk),
			// persistedState
			persistState()
		)
	);
	// store.subscribe(() => {
	// 	saveState(store.getState());
	// });
	return store;
}
