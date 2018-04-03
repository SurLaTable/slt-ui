'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardHeader = exports.CardMedia = exports.CardActions = exports.CardContent = undefined;

var _reactAsyncComponent = require('react-async-component');

exports.default = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "Card" */
  resolve: function resolve() {
    return import('./Card');
  }
});
var CardContent = exports.CardContent = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "CardContent" */
  resolve: function resolve() {
    return import('./CardContent');
  }
});

var CardActions = exports.CardActions = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "CardActions" */
  resolve: function resolve() {
    return import('./CardActions');
  }
});

var CardMedia = exports.CardMedia = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "CardMedia" */
  resolve: function resolve() {
    return import('./CardMedia');
  }
});

var CardHeader = exports.CardHeader = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "CardHeader" */
  resolve: function resolve() {
    return import('./CardHeader');
  }
});