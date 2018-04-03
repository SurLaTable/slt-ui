'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuItem = exports.MenuList = undefined;

var _reactAsyncComponent = require('react-async-component');

exports.default = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "Menu" */
  resolve: function resolve() {
    return import('./Menu');
  }
});
var MenuList = exports.MenuList = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "MenuList" */
  resolve: function resolve() {
    return import('./MenuList');
  }
});

var MenuItem = exports.MenuItem = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "MenuItem" */
  resolve: function resolve() {
    return import('./MenuItem');
  }
});