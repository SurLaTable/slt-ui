'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StepLabel = exports.StepIcon = exports.StepContent = exports.StepButton = exports.Step = undefined;

var _reactAsyncComponent = require('react-async-component');

exports.default = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "Stepper" */
  resolve: function resolve() {
    return import('./Stepper');
  }
});
var Step = exports.Step = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "Step" */
  resolve: function resolve() {
    return import('./Step');
  }
});

var StepButton = exports.StepButton = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "StepButton" */
  resolve: function resolve() {
    return import('./StepButton');
  }
});

var StepContent = exports.StepContent = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "StepContent" */
  resolve: function resolve() {
    return import('./StepContent');
  }
});

var StepIcon = exports.StepIcon = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "StepIcon" */
  resolve: function resolve() {
    return import('./StepIcon');
  }
});

var StepLabel = exports.StepLabel = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "StepLabel" */
  resolve: function resolve() {
    return import('./StepLabel');
  }
});