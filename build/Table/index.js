'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableSortLabel = exports.TableRow = exports.TablePagination = exports.TableHead = exports.TableFooter = exports.TableCell = exports.TableBody = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _reactAsyncComponent = require('react-async-component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactAsyncComponent.asyncComponent)({
  resolve: function resolve() {
    return new _promise2.default(function (resolve) {
      require.ensure([], function (require) {
        resolve(require(function () {
          return require('./Table');
        }));
      });
    });
  }
});
var TableBody = exports.TableBody = (0, _reactAsyncComponent.asyncComponent)({
  resolve: function resolve() {
    return new _promise2.default(function (resolve) {
      require.ensure([], function (require) {
        resolve(require(function () {
          return require('./TableBody');
        }));
      });
    });
  }
});

var TableCell = exports.TableCell = (0, _reactAsyncComponent.asyncComponent)({
  resolve: function resolve() {
    return new _promise2.default(function (resolve) {
      require.ensure([], function (require) {
        resolve(require(function () {
          return require('./TableCell');
        }));
      });
    });
  }
});

var TableFooter = exports.TableFooter = (0, _reactAsyncComponent.asyncComponent)({
  resolve: function resolve() {
    return new _promise2.default(function (resolve) {
      require.ensure([], function (require) {
        resolve(require(function () {
          return require('./TableFooter');
        }));
      });
    });
  }
});

var TableHead = exports.TableHead = (0, _reactAsyncComponent.asyncComponent)({
  resolve: function resolve() {
    return new _promise2.default(function (resolve) {
      require.ensure([], function (require) {
        resolve(require(function () {
          return require('./TableHead');
        }));
      });
    });
  }
});

var TablePagination = exports.TablePagination = (0, _reactAsyncComponent.asyncComponent)({
  resolve: function resolve() {
    return new _promise2.default(function (resolve) {
      require.ensure([], function (require) {
        resolve(require(function () {
          return require('./TablePagination');
        }));
      });
    });
  }
});

var TableRow = exports.TableRow = (0, _reactAsyncComponent.asyncComponent)({
  resolve: function resolve() {
    return new _promise2.default(function (resolve) {
      require.ensure([], function (require) {
        resolve(require(function () {
          return require('./TableRow');
        }));
      });
    });
  }
});

var TableSortLabel = exports.TableSortLabel = (0, _reactAsyncComponent.asyncComponent)({
  resolve: function resolve() {
    return new _promise2.default(function (resolve) {
      require.ensure([], function (require) {
        resolve(require(function () {
          return require('./TableSortLabel');
        }));
      });
    });
  }
});