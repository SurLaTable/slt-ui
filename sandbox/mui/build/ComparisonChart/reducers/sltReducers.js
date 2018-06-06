"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _productComparisonReducer = _interopRequireDefault(require("./productComparisonReducer"));

// This combines all reducers, so they can be modular:
var sltReducers = (0, _redux.combineReducers)({
  productComparisonReducer: _productComparisonReducer.default
});
var _default = sltReducers;
exports.default = _default;