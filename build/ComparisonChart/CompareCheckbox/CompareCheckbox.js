"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _Checkbox = _interopRequireDefault(require("../../Checkbox"));

var _Form = require("../../Form");

var _productComparisonActions = require("../actions/productComparisonActions");

// TEMP:
// Once the image is removed, this import can be removed,
// since it exists on the reducer.
var CompareCheckbox = function CompareCheckbox(props) {
  return _react.default.createElement("div", null, _react.default.createElement(_Form.FormControlLabel, {
    control: _react.default.createElement(_Checkbox.default, {
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

CompareCheckbox = (0, _reactRedux.connect)(function (state, props) {
  var selection = state.productComparisonReducer ? state.productComparisonReducer.selection : [];
  var checked = false;

  for (var i = 0; i < selection.length; i++) {
    if (selection[i].id == props.product) {
      checked = true;
      break;
    }
  }

  var disabled = checked == false && selection.length > 2;
  return (0, _objectSpread2.default)({}, props, {
    checked: checked,
    disabled: disabled
  });
})(CompareCheckbox);
var _default = CompareCheckbox;
exports.default = _default;