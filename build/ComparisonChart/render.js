"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _ComparisonCheckbox = _interopRequireDefault(require("./ComparisonCheckbox/ComparisonCheckbox"));

var _ComparisonBar = _interopRequireDefault(require("./ComparisonBar/ComparisonBar"));

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _sltReducers = _interopRequireDefault(require("./reducers/sltReducers"));

var sltStore = (0, _redux.createStore)(_sltReducers.default, // Enable DevTools, switch to localStorage on Prod:
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
var styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

var _ref = _react.default.createElement(_reactRedux.Provider, {
  store: sltStore
}, _react.default.createElement("div", {
  style: styles
}, _react.default.createElement(_ComparisonCheckbox.default, {
  product: "PRO-2403251"
}), _react.default.createElement(_ComparisonCheckbox.default, {
  product: "PRO-1251180"
}), _react.default.createElement(_ComparisonCheckbox.default, {
  product: "PRO-227496"
}), _react.default.createElement(_ComparisonBar.default, {
  numberOfItems: 3
})));

var App = function App() {
  return _ref;
}; // export default App;


(0, _reactDom.render)(_react.default.createElement(App, null), document.querySelector('.app'));