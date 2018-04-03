'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BottomNavigationAction = undefined;

var _reactAsyncComponent = require('react-async-component');

exports.default = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "BottomNavigation" */
  resolve: function resolve() {
    return import('./BottomNavigation');
  }
});
var BottomNavigationAction = exports.BottomNavigationAction = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "BottomNavigationAction" */
  resolve: function resolve() {
    return import('./BottomNavigationAction');
  }
});