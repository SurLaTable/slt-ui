webpackJsonpmaterial_ui([42],{

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(23);

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__(18);

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = exports.styles = function styles(theme) {
  return {
    root: _extends({}, theme.mixins.toolbar, {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }),
    gutters: theme.mixins.gutters()
  };
};

function Toolbar(props) {
  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      disableGutters = props.disableGutters,
      other = _objectWithoutProperties(props, ['children', 'classes', 'className', 'disableGutters']);

  var className = (0, _classnames2.default)(classes.root, _defineProperty({}, classes.gutters, !disableGutters), classNameProp);

  return _react2.default.createElement(
    'div',
    _extends({ className: className }, other),
    children
  );
}

Toolbar.propTypes = {
  /**
   * Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * If `true`, disables gutter padding.
   */
  disableGutters: _propTypes2.default.bool
};

Toolbar.defaultProps = {
  disableGutters: false
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiToolbar' })(Toolbar);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcVG9vbGJhclxcVG9vbGJhci5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJyb290IiwidGhlbWUiLCJtaXhpbnMiLCJ0b29sYmFyIiwicG9zaXRpb24iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImd1dHRlcnMiLCJUb29sYmFyIiwicHJvcHMiLCJjaGlsZHJlbiIsImNsYXNzZXMiLCJjbGFzc05hbWVQcm9wIiwiY2xhc3NOYW1lIiwiZGlzYWJsZUd1dHRlcnMiLCJvdGhlciIsInByb3BUeXBlcyIsIm5vZGUiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiYm9vbCIsImRlZmF1bHRQcm9wcyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRU8sSUFBTUEsMEJBQVMsU0FBVEEsTUFBUztBQUFBLFNBQVU7QUFDOUJDLHVCQUNLQyxNQUFNQyxNQUFOLENBQWFDLE9BRGxCO0FBRUVDLGdCQUFVLFVBRlo7QUFHRUMsZUFBUyxNQUhYO0FBSUVDLGtCQUFZO0FBSmQsTUFEOEI7QUFPOUJDLGFBQVNOLE1BQU1DLE1BQU4sQ0FBYUssT0FBYjtBQVBxQixHQUFWO0FBQUEsQ0FBZjs7QUFVUCxTQUFTQyxPQUFULENBQWlCQyxLQUFqQixFQUF3QjtBQUFBLE1BQ2RDLFFBRGMsR0FDNERELEtBRDVELENBQ2RDLFFBRGM7QUFBQSxNQUNKQyxPQURJLEdBQzRERixLQUQ1RCxDQUNKRSxPQURJO0FBQUEsTUFDZ0JDLGFBRGhCLEdBQzRESCxLQUQ1RCxDQUNLSSxTQURMO0FBQUEsTUFDK0JDLGNBRC9CLEdBQzRETCxLQUQ1RCxDQUMrQkssY0FEL0I7QUFBQSxNQUNrREMsS0FEbEQsNEJBQzRETixLQUQ1RDs7QUFHdEIsTUFBTUksWUFBWSwwQkFDaEJGLFFBQVFYLElBRFEsc0JBR2JXLFFBQVFKLE9BSEssRUFHSyxDQUFDTyxjQUhOLEdBS2hCRixhQUxnQixDQUFsQjs7QUFRQSxTQUNFO0FBQUE7QUFBQSxlQUFLLFdBQVdDLFNBQWhCLElBQStCRSxLQUEvQjtBQUNHTDtBQURILEdBREY7QUFLRDs7QUFFREYsUUFBUVEsU0FBUixHQUFvQjtBQUNsQjs7O0FBR0FOLFlBQVUsb0JBQVVPLElBSkY7QUFLbEI7OztBQUdBTixXQUFTLG9CQUFVTyxNQUFWLENBQWlCQyxVQVJSO0FBU2xCOzs7QUFHQU4sYUFBVyxvQkFBVU8sTUFaSDtBQWFsQjs7O0FBR0FOLGtCQUFnQixvQkFBVU87QUFoQlIsQ0FBcEI7O0FBbUJBYixRQUFRYyxZQUFSLEdBQXVCO0FBQ3JCUixrQkFBZ0I7QUFESyxDQUF2Qjs7a0JBSWUsMEJBQVdmLE1BQVgsRUFBbUIsRUFBRXdCLE1BQU0sWUFBUixFQUFuQixFQUEyQ2YsT0FBM0MsQyIsImZpbGUiOiJUb29sYmFyLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3JtY3F1ZW4vc2x0LXVpL21hdGVyaWFsLXVpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICAuLi50aGVtZS5taXhpbnMudG9vbGJhcixcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIH0sXG4gIGd1dHRlcnM6IHRoZW1lLm1peGlucy5ndXR0ZXJzKCksXG59KTtcblxuZnVuY3Rpb24gVG9vbGJhcihwcm9wcykge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc2VzLCBjbGFzc05hbWU6IGNsYXNzTmFtZVByb3AsIGRpc2FibGVHdXR0ZXJzLCAuLi5vdGhlciB9ID0gcHJvcHM7XG5cbiAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lcyhcbiAgICBjbGFzc2VzLnJvb3QsXG4gICAge1xuICAgICAgW2NsYXNzZXMuZ3V0dGVyc106ICFkaXNhYmxlR3V0dGVycyxcbiAgICB9LFxuICAgIGNsYXNzTmFtZVByb3AsXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB7Li4ub3RoZXJ9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5Ub29sYmFyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRvb2xiYXIgY2hpbGRyZW4sIHVzdWFsbHkgYSBtaXh0dXJlIG9mIGBJY29uQnV0dG9uYCwgYEJ1dHRvbmAgYW5kIGBUeXBvZ3JhcGh5YC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIFVzZWZ1bCB0byBleHRlbmQgdGhlIHN0eWxlIGFwcGxpZWQgdG8gY29tcG9uZW50cy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgZGlzYWJsZXMgZ3V0dGVyIHBhZGRpbmcuXG4gICAqL1xuICBkaXNhYmxlR3V0dGVyczogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5Ub29sYmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZUd1dHRlcnM6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHsgbmFtZTogJ011aVRvb2xiYXInIH0pKFRvb2xiYXIpO1xuIl19

/***/ })

});