"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _sltReducers = _interopRequireDefault(require("./reducers/sltReducers"));

// import { render } from 'react-dom';
var sltStore = (0, _redux.createStore)(_sltReducers.default, // Enable DevTools, switch to localStorage on Prod:
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

var StoreProvider = function StoreProvider(props) {
  return _react.default.createElement(_reactRedux.Provider, {
    store: sltStore
  }, _react.default.createElement(_react.default.Fragment, null, props.children));
};

var _default = StoreProvider;
exports.default = _default;