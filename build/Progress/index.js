'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinearProgress = exports.CircularProgress = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _reactAsyncComponent = require('react-async-component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CircularProgress = exports.CircularProgress = (0, _reactAsyncComponent.asyncComponent)({
  resolve: function resolve() {
    return new _promise2.default(function (resolve) {
      require.ensure([], function (require) {
        resolve(require(function () {
          return require('./CircularProgress');
        }));
      });
    });
  }
});

var LinearProgress = exports.LinearProgress = (0, _reactAsyncComponent.asyncComponent)({
  resolve: function resolve() {
    return new _promise2.default(function (resolve) {
      require.ensure([], function (require) {
        resolve(require(function () {
          return require('./LinearProgress');
        }));
      });
    });
  }
});