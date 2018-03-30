'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withMobileDialog = exports.DialogContentText = exports.DialogContent = exports.DialogTitle = exports.DialogActions = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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
  resolve: function resolve() {
    return new _promise2.default(function (resolve) {
      require.ensure([], function (require) {
        resolve(require(function () {
          return require('./Dialog');
        }));
      });
    });
  }
});
var DialogActions = exports.DialogActions = (0, _reactAsyncComponent.asyncComponent)({
  resolve: function resolve() {
    return new _promise2.default(function (resolve) {
      require.ensure([], function (require) {
        resolve(require(function () {
          return require('./DialogActions');
        }));
      });
    });
  }
});

var DialogTitle = exports.DialogTitle = (0, _reactAsyncComponent.asyncComponent)({
  resolve: function resolve() {
    return new _promise2.default(function (resolve) {
      require.ensure([], function (require) {
        resolve(require(function () {
          return require('./DialogTitle');
        }));
      });
    });
  }
});

var DialogContent = exports.DialogContent = (0, _reactAsyncComponent.asyncComponent)({
  resolve: function resolve() {
    return new _promise2.default(function (resolve) {
      require.ensure([], function (require) {
        resolve(require(function () {
          return require('./DialogContent');
        }));
      });
    });
  }
});

var DialogContentText = exports.DialogContentText = (0, _reactAsyncComponent.asyncComponent)({
  resolve: function resolve() {
    return new _promise2.default(function (resolve) {
      require.ensure([], function (require) {
        resolve(require(function () {
          return require('./DialogContentText');
        }));
      });
    });
  }
});