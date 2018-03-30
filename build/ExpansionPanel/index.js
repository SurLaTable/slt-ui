'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpansionPanelSummary = exports.ExpansionPanelDetails = exports.ExpansionPanelActions = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _reactAsyncComponent = require('react-async-component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactAsyncComponent.asyncComponent)({
  resolve: function resolve() {
    return new _promise2.default(function (resolve) {
      require.ensure([], function (require) {
        resolve(require(function () {
          return require('./ExpansionPanel');
        }));
      });
    });
  }
});
var ExpansionPanelActions = exports.ExpansionPanelActions = (0, _reactAsyncComponent.asyncComponent)({
  resolve: function resolve() {
    return new _promise2.default(function (resolve) {
      require.ensure([], function (require) {
        resolve(require(function () {
          return require('./ExpansionPanelActions');
        }));
      });
    });
  }
});

var ExpansionPanelDetails = exports.ExpansionPanelDetails = (0, _reactAsyncComponent.asyncComponent)({
  resolve: function resolve() {
    return new _promise2.default(function (resolve) {
      require.ensure([], function (require) {
        resolve(require(function () {
          return require('./ExpansionPanelDetails');
        }));
      });
    });
  }
});

var ExpansionPanelSummary = exports.ExpansionPanelSummary = (0, _reactAsyncComponent.asyncComponent)({
  resolve: function resolve() {
    return new _promise2.default(function (resolve) {
      require.ensure([], function (require) {
        resolve(require(function () {
          return require('./ExpansionPanelSummary');
        }));
      });
    });
  }
});