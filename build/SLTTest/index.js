"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Checkbox = require("../Checkbox");

var _reactRedux = require("react-redux");

// Test
var SLTTest = function SLTTest(props) {
  return React.createElement(React.Fragment, null, React.createElement(_Checkbox.Checkbox, {
    onClick: function onClick(event, checked) {
      return props.dispatch(function (event, checked) {
        console.log('Redux was here:', checked);
      });
    }
  }, "Hey"));
};

SLTTest = (0, _reactRedux.connect)()(SLTTest);
var _default = SLTTest;
exports.default = _default;