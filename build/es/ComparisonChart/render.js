import React from 'react';
import { render } from 'react-dom';
import ComparisonCheckbox from './ComparisonCheckbox/ComparisonCheckbox';
import ComparisonBar from './ComparisonBar/ComparisonBar';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import sltReducers from './reducers/sltReducers';
const sltStore = createStore(sltReducers, // Enable DevTools, switch to localStorage on Prod:
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

var _ref = React.createElement(Provider, {
  store: sltStore
}, React.createElement("div", {
  style: styles
}, React.createElement(ComparisonCheckbox, {
  product: "PRO-2403251"
}), React.createElement(ComparisonCheckbox, {
  product: "PRO-1251180"
}), React.createElement(ComparisonCheckbox, {
  product: "PRO-227496"
}), React.createElement(ComparisonBar, {
  numberOfItems: 3
})));

const App = () => _ref; // export default App;


render(React.createElement(App, null), document.querySelector('.app'));