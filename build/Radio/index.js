'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioGroup = undefined;

var _reactAsyncComponent = require('react-async-component');

exports.default = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "Radio" */
  resolve: function resolve() {
    return import('./Radio');
  }
});
var RadioGroup = exports.RadioGroup = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "RadioGroup" */
  resolve: function resolve() {
    return import('./RadioGroup');
  }
});