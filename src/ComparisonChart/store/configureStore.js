import { createStore, applyMiddleware, compose } from 'redux';
import sltReducers from '../reducers/sltReducers';
import thunk from 'redux-thunk';
import { loadState, saveState } from './localStorage';

export default function() {
	const persistedState = loadState();
	const store = createStore(
		sltReducers,
		compose(
			applyMiddleware(thunk),
			persistedState
		)
	);
	store.subscribe(() => {
		saveState(store.getState());
	});
	return store;
}
