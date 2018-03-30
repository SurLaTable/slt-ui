'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StepLabel = exports.StepIcon = exports.StepContent = exports.StepButton = exports.Step = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _reactAsyncComponent = require('react-async-component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactAsyncComponent.asyncComponent)({
  resolve: function resolve() {
    return new _promise2.default(function (resolve) {
      require.ensure([], function (require) {
        resolve(require(function () {
          return require('./Stepper');
        }));
      });
    });
  }
});
var Step = exports.Step = (0, _reactAsyncComponent.asyncComponent)({
  resolve: function resolve() {
    return new _promise2.default(function (resolve) {
      require.ensure([], function (require) {
        resolve(require(function () {
          return require('./Step');
        }));
      });
    });
  }
});

var StepButton = exports.StepButton = (0, _reactAsyncComponent.asyncComponent)({
  resolve: function resolve() {
    return new _promise2.default(function (resolve) {
      require.ensure([], function (require) {
        resolve(require(function () {
          return require('./StepButton');
        }));
      });
    });
  }
});

var StepContent = exports.StepContent = (0, _reactAsyncComponent.asyncComponent)({
  resolve: function resolve() {
    return new _promise2.default(function (resolve) {
      require.ensure([], function (require) {
        resolve(require(function () {
          return require('./StepContent');
        }));
      });
    });
  }
});

var StepIcon = exports.StepIcon = (0, _reactAsyncComponent.asyncComponent)({
  resolve: function resolve() {
    return new _promise2.default(function (resolve) {
      require.ensure([], function (require) {
        resolve(require(function () {
          return require('./StepIcon');
        }));
      });
    });
  }
});

var StepLabel = exports.StepLabel = (0, _reactAsyncComponent.asyncComponent)({
  resolve: function resolve() {
    return new _promise2.default(function (resolve) {
      require.ensure([], function (require) {
        resolve(require(function () {
          return require('./StepLabel');
        }));
      });
    });
  }
});