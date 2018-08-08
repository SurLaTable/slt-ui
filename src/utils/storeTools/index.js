import { compose, createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';

let middlware = compose(
  applyMiddleware(thunk),
  // Enable DevTools, switch to redux-localstorage for Production:
  // global.__REDUX_DEVTOOLS_EXTENSION__
  // 	? global.__REDUX_DEVTOOLS_EXTENSION__()
  // 	: (x) => x
  // redux-localstorage:
  persistState()
);

export default function configureStore(initialState,initialReducers) {

	const store = createStore(initialReducers ? combineReducers({
    ...initialReducers
  },middlware) : state => state,initialState);
  store.asyncReducers = initialReducers ? {...initialReducers} : {};
	return store;
}

export function createReducer(initialState, actionHandlers) {
  return (state = initialState, action) => {
    if (actionHandlers.hasOwnProperty(action.type)) {
      return actionHandlers[action.type](state, action)
    } else {
      return state
    }
  }
}

export function addAsyncReducers(store,asyncReducers = {}){
  store.asyncReducers = {
    ...store.asyncReducers,
    ...asyncReducers
  };
  store.replaceReducer(combineReducers(store.asyncReducers,middlware));
}

export function removeAsyncReducers(store,asyncReducerNames = []){
  for(let i = 0; i < asyncReducerNames.length; i++){
    delete store.asyncReducers[asyncReducerNames[i]];
  }
  store.replaceReducer(combineReducers(store.asyncReducers,middlware));
}
