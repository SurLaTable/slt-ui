'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Zoom = exports.Collapse = exports.Fade = exports.Grow = exports.Slide = undefined;

var _reactAsyncComponent = require('react-async-component');

var Slide = exports.Slide = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "Slide" */
  resolve: function resolve() {
    return import('./Slide');
  }
});

var Grow = exports.Grow = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "Grow" */
  resolve: function resolve() {
    return import('./Grow');
  }
});

var Fade = exports.Fade = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "Fade" */
  resolve: function resolve() {
    return import('./Fade');
  }
});

var Collapse = exports.Collapse = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "Collapse" */
  resolve: function resolve() {
    return import('./Collapse');
  }
});

var Zoom = exports.Zoom = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "Zoom" */
  resolve: function resolve() {
    return import('./Zoom');
  }
});