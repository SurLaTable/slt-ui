'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputLabel = exports.InputAdornment = undefined;

var _reactAsyncComponent = require('react-async-component');

exports.default = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "Input" */
  resolve: function resolve() {
    return import('./Input');
  }
});
var InputAdornment = exports.InputAdornment = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "InputAdornment" */
  resolve: function resolve() {
    return import('./InputAdornment');
  }
});

var InputLabel = exports.InputLabel = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "InputLabel" */
  resolve: function resolve() {
    return import('./InputLabel');
  }
});