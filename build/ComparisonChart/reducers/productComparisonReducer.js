"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _data = _interopRequireDefault(require("../data"));

var productComparisonReducer = function productComparisonReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var selection = state.selection ? state.selection.slice() : [];

  switch (action.type) {
    case 'REMOVE_ALL':
      return (0, _objectSpread2.default)({}, state, {
        selection: []
      });

    case 'REMOVE_PRODUCT':
      for (var i = selection.length - 1; i >= 0; i--) {
        if (selection[i].id == action.productId) {
          selection.splice(i, 1);
          break;
        }
      }

      return (0, _objectSpread2.default)({}, state, {
        selection: selection
      });

    case 'TOGGLE_PRODUCT':
      if (action.checked) {
        selection.push(_data.default[action.productId]);
      } else {
        for (var _i = selection.length - 1; _i >= 0; _i--) {
          if (selection[_i].id == action.productId) {
            selection.splice(_i, 1);
            break;
          }
        }
      }

      return (0, _objectSpread2.default)({}, state, {
        selection: selection
      });

    case 'SET_PRODUCTS':
      return (0, _objectSpread2.default)({}, state, {
        selection: action.selection.slice()
      });

    default:
      return (0, _objectSpread2.default)({
        selection: selection
      }, state);
  }
};

var _default = productComparisonReducer;
exports.default = _default;