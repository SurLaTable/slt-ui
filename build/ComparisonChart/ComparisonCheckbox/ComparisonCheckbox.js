"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _index = require("../../index.js");

var _productComparisonActions = require("../actions/productComparisonActions");

// import { FormControlLabel } from '../../Form';
// import { Checkbox, FormControlLabel } from '@material-ui/core';
var ComparisonCheckbox = function ComparisonCheckbox(props) {
  return _react.default.createElement("div", null, _react.default.createElement(_index.FormControlLabel, {
    control: _react.default.createElement(_index.Checkbox, {
      onChange: function onChange(event, checked) {
        props.dispatch((0, _productComparisonActions.actionToggleProductSelection)(props.product, checked));
      },
      disabled: props.disabled,
      checked: props.checked,
      "data-product": props.product
    }),
    label: props.checked ? 'Added' : 'Compare'
  }));
};

ComparisonCheckbox = (0, _reactRedux.connect)(function (state, props) {
  var selection = state.productComparisonReducer ? state.productComparisonReducer.selection : [];
  var checked = false; // TODO: Figure out why `selection` is populated with `undefined`.

  if (selection.length) {
    for (var i = 0; i < selection.length; i++) {
      if (selection[i].id == props.product) {
        checked = true;
        break;
      }
    }
  }

  var disabled = !checked && selection.length > 2;
  return (0, _objectSpread2.default)({}, props, {
    checked: checked,
    disabled: disabled
  });
})(ComparisonCheckbox);
var _default = ComparisonCheckbox;
exports.default = _default;