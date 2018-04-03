'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withMobileDialog = exports.DialogContentText = exports.DialogContent = exports.DialogTitle = exports.DialogActions = undefined;

var _withMobileDialog = require('./withMobileDialog');

Object.defineProperty(exports, 'withMobileDialog', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_withMobileDialog).default;
  }
});

var _reactAsyncComponent = require('react-async-component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "Dialog" */
  resolve: function resolve() {
    return import('./Dialog');
  }
});
var DialogActions = exports.DialogActions = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "DialogActions" */
  resolve: function resolve() {
    return import('./DialogActions');
  }
});

var DialogTitle = exports.DialogTitle = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "DialogTitle" */
  resolve: function resolve() {
    return import('./DialogTitle');
  }
});

var DialogContent = exports.DialogContent = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "DialogContent" */
  resolve: function resolve() {
    return import('./DialogContent');
  }
});

var DialogContentText = exports.DialogContentText = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "DialogContentText" */
  resolve: function resolve() {
    return import('./DialogContentText');
  }
});