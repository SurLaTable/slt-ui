'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SnackbarContent = undefined;

var _reactAsyncComponent = require('react-async-component');

exports.default = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "Snackbar" */
  resolve: function resolve() {
    return import('./Snackbar');
  }
});
var SnackbarContent = exports.SnackbarContent = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "SnackbarContent" */
  resolve: function resolve() {
    return import('./SnackbarContent');
  }
});