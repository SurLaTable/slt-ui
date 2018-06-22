import { createStore, applyMiddleware } from 'redux';
import sltReducers from '../reducers/sltReducers';
import thunk from 'redux-thunk';

let window = window ? window : {};
export default function(){
  return createStore(
    sltReducers,
    applyMiddleware(thunk),
    // Enable DevTools, switch to localStorage on Prod:
    (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
  );
}
