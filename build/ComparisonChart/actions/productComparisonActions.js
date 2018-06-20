"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actionSetProducts = exports.actionToggleProductSelection = exports.actionRemoveProduct = exports.actionRemoveAll = void 0;

var actionRemoveAll = function actionRemoveAll() {
  return {
    type: 'REMOVE_ALL'
  };
};

exports.actionRemoveAll = actionRemoveAll;

var actionRemoveProduct = function actionRemoveProduct(productId) {
  return {
    type: 'REMOVE_PRODUCT',
    productId: productId
  };
};

exports.actionRemoveProduct = actionRemoveProduct;

var actionToggleProductSelection = function actionToggleProductSelection(productId, checked) {
  return {
    type: 'TOGGLE_PRODUCT',
    checked: checked,
    productId: productId
  };
};

exports.actionToggleProductSelection = actionToggleProductSelection;

var actionSetProducts = function actionSetProducts(selection) {
  return {
    type: 'SET_PRODUCTS',
    selection: selection
  };
};

exports.actionSetProducts = actionSetProducts;