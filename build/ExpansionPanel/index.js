'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpansionPanelSummary = exports.ExpansionPanelDetails = exports.ExpansionPanelActions = undefined;

var _reactAsyncComponent = require('react-async-component');

exports.default = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "ExpansionPanel" */
  resolve: function resolve() {
    return import('./ExpansionPanel');
  }
});
var ExpansionPanelActions = exports.ExpansionPanelActions = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "ExpansionPanelActions" */
  resolve: function resolve() {
    return import('./ExpansionPanelActions');
  }
});

var ExpansionPanelDetails = exports.ExpansionPanelDetails = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "ExpansionPanelDetails" */
  resolve: function resolve() {
    return import('./ExpansionPanelDetails');
  }
});

var ExpansionPanelSummary = exports.ExpansionPanelSummary = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "ExpansionPanelSummary" */
  resolve: function resolve() {
    return import('./ExpansionPanelSummary');
  }
});