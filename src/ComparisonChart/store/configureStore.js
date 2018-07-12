import { compose, createStore, applyMiddleware } from 'redux';
import sltReducers from '../reducers/sltReducers';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';

export default function() {
	const store = createStore(
		sltReducers,
		compose(
			applyMiddleware(thunk),
			// Enable DevTools, switch to redux-localstorage for Production:
			global.__REDUX_DEVTOOLS_EXTENSION__
				? global.__REDUX_DEVTOOLS_EXTENSION__()
				: (x) => x
			// redux-localstorage:
			// persistState()
		)
	);
	return store;
}
