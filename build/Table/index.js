'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableSortLabel = exports.TableRow = exports.TablePagination = exports.TableHead = exports.TableFooter = exports.TableCell = exports.TableBody = undefined;

var _reactAsyncComponent = require('react-async-component');

exports.default = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "Table" */
  resolve: function resolve() {
    return import('./Table');
  }
});
var TableBody = exports.TableBody = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "TableBody" */
  resolve: function resolve() {
    return import('./TableBody');
  }
});

var TableCell = exports.TableCell = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "TableCell" */
  resolve: function resolve() {
    return import('./TableCell');
  }
});

var TableFooter = exports.TableFooter = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "TableFooter" */
  resolve: function resolve() {
    return import('./TableFooter');
  }
});

var TableHead = exports.TableHead = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "TableHead" */
  resolve: function resolve() {
    return import('./TableHead');
  }
});

var TablePagination = exports.TablePagination = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "TablePagination" */
  resolve: function resolve() {
    return import('./TablePagination');
  }
});

var TableRow = exports.TableRow = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "TableRow" */
  resolve: function resolve() {
    return import('./TableRow');
  }
});

var TableSortLabel = exports.TableSortLabel = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "TableSortLabel" */
  resolve: function resolve() {
    return import('./TableSortLabel');
  }
});