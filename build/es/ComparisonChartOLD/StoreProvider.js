import React from 'react'; // import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import sltReducers from './reducers/sltReducers';
const sltStore = createStore(sltReducers, // Enable DevTools, switch to localStorage on Prod:
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const StoreProvider = props => React.createElement(Provider, {
  store: sltStore
}, React.createElement(React.Fragment, null, props.children));

export default StoreProvider;