'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalManager = exports.Backdrop = undefined;

var _reactAsyncComponent = require('react-async-component');

exports.default = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "Modal" */
  resolve: function resolve() {
    return import('./Modal');
  }
});
var Backdrop = exports.Backdrop = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "Backdrop" */
  resolve: function resolve() {
    return import('./Backdrop');
  }
});

var ModalManager = exports.ModalManager = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "ModalManager" */
  resolve: function resolve() {
    return import('./ModalManager');
  }
});