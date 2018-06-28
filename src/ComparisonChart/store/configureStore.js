import { createStore, applyMiddleware, compose } from 'redux';
import sltReducers from '../reducers/sltReducers';
import thunk from 'redux-thunk';

export default function(){
  return createStore(
    sltReducers,
    compose(
      applyMiddleware(thunk),
      // Enable DevTools, switch to localStorage on Prod:
      (global.__REDUX_DEVTOOLS_EXTENSION__ ? global.__REDUX_DEVTOOLS_EXTENSION__() : (f)=>f)
    ),
  );
}
