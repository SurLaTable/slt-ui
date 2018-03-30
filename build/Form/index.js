'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormControlLabel = exports.FormHelperText = exports.FormControl = exports.FormLabel = exports.FormGroup = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _reactAsyncComponent = require('react-async-component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormGroup = exports.FormGroup = (0, _reactAsyncComponent.asyncComponent)({
  resolve: function resolve() {
    return new _promise2.default(function (resolve) {
      require.ensure([], function (require) {
        resolve(require(function () {
          return require('./FormGroup');
        }));
      });
    });
  }
});

var FormLabel = exports.FormLabel = (0, _reactAsyncComponent.asyncComponent)({
  resolve: function resolve() {
    return new _promise2.default(function (resolve) {
      require.ensure([], function (require) {
        resolve(require(function () {
          return require('./FormLabel');
        }));
      });
    });
  }
});

var FormControl = exports.FormControl = (0, _reactAsyncComponent.asyncComponent)({
  resolve: function resolve() {
    return new _promise2.default(function (resolve) {
      require.ensure([], function (require) {
        resolve(require(function () {
          return require('./FormControl');
        }));
      });
    });
  }
});

var FormHelperText = exports.FormHelperText = (0, _reactAsyncComponent.asyncComponent)({
  resolve: function resolve() {
    return new _promise2.default(function (resolve) {
      require.ensure([], function (require) {
        resolve(require(function () {
          return require('./FormHelperText');
        }));
      });
    });
  }
});

var FormControlLabel = exports.FormControlLabel = (0, _reactAsyncComponent.asyncComponent)({
  resolve: function resolve() {
    return new _promise2.default(function (resolve) {
      require.ensure([], function (require) {
        resolve(require(function () {
          return require('./FormControlLabel');
        }));
      });
    });
  }
});