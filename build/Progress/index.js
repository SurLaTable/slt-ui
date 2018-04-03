'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinearProgress = exports.CircularProgress = undefined;

var _reactAsyncComponent = require('react-async-component');

var CircularProgress = exports.CircularProgress = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "CircularProgress" */
  resolve: function resolve() {
    return import('./CircularProgress');
  }
});

var LinearProgress = exports.LinearProgress = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "LinearProgress" */
  resolve: function resolve() {
    return import('./LinearProgress');
  }
});