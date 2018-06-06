"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _pure = _interopRequireDefault(require("recompose/pure"));

var _SvgIcon = _interopRequireDefault(require("../SvgIcon"));

var SvgIconCustom = typeof global !== 'undefined' && global.__MUI_SvgIcon__ || _SvgIcon.default;

function createSvgIcon(path, displayName) {
  var Icon = function Icon(props) {
    return _react.default.createElement(SvgIconCustom, props, path);
  };

  Icon.displayName = displayName;
  Icon = (0, _pure.default)(Icon);
  Icon.muiName = 'SvgIcon';
  return Icon;
}

var _default = createSvgIcon;
exports.default = _default;