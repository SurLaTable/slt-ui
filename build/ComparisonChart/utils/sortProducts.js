"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _keys = _interopRequireDefault(require("@babel/runtime/core-js/object/keys"));

var sortProducts = function sortProducts(productData) {
  return productData && (0, _keys.default)(productData).sort(function (x, y) {
    return productData[x].timeAdded - productData[y].timeAdded;
  }) || [];
};

var _default = sortProducts;
exports.default = _default;