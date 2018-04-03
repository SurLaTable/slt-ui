'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tab = undefined;

var _reactAsyncComponent = require('react-async-component');

exports.default = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "Tabs" */
  resolve: function resolve() {
    return import('./Tabs');
  }
});
var Tab = exports.Tab = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "Tab" */
  resolve: function resolve() {
    return import('./Tab');
  }
});