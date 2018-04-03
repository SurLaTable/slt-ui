webpackJsonpmaterial_ui([76],{

/***/ 327:
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

var _Typography = __webpack_require__(103);

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      margin: 0,
      padding: theme.spacing.unit * 3 + 'px ' + theme.spacing.unit * 3 + 'px       20px ' + theme.spacing.unit * 3 + 'px',
      flex: '0 0 auto'
    }
  };
};

function DialogTitle(props) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      disableTypography = props.disableTypography,
      other = _objectWithoutProperties(props, ['children', 'classes', 'className', 'disableTypography']);

  return _react2.default.createElement(
    'div',
    _extends({ 'data-mui-test': 'DialogTitle', className: (0, _classnames2.default)(classes.root, className) }, other),
    disableTypography ? children : _react2.default.createElement(
      _Typography2.default,
      { variant: 'title' },
      children
    )
  );
}

DialogTitle.propTypes = {
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * If `true`, the children won't be wrapped by a typography component.
   * For instance, this can be useful to render an h4 instead of the default h2.
   */
  disableTypography: _propTypes2.default.bool
};

DialogTitle.defaultProps = {
  disableTypography: false
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiDialogTitle' })(DialogTitle);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcRGlhbG9nXFxEaWFsb2dUaXRsZS5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJyb290IiwibWFyZ2luIiwicGFkZGluZyIsInRoZW1lIiwic3BhY2luZyIsInVuaXQiLCJmbGV4IiwiRGlhbG9nVGl0bGUiLCJwcm9wcyIsImNoaWxkcmVuIiwiY2xhc3NlcyIsImNsYXNzTmFtZSIsImRpc2FibGVUeXBvZ3JhcGh5Iiwib3RoZXIiLCJwcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsInN0cmluZyIsImJvb2wiLCJkZWZhdWx0UHJvcHMiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVPLElBQU1BLDBCQUFTLFNBQVRBLE1BQVM7QUFBQSxTQUFVO0FBQzlCQyxVQUFNO0FBQ0pDLGNBQVEsQ0FESjtBQUVKQyxlQUFZQyxNQUFNQyxPQUFOLENBQWNDLElBQWQsR0FBcUIsQ0FBakMsV0FBd0NGLE1BQU1DLE9BQU4sQ0FBY0MsSUFBZCxHQUFxQixDQUE3RCxzQkFDU0YsTUFBTUMsT0FBTixDQUFjQyxJQUFkLEdBQXFCLENBRDlCLE9BRkk7QUFJSkMsWUFBTTtBQUpGO0FBRHdCLEdBQVY7QUFBQSxDQUFmOztBQVNQLFNBQVNDLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQUEsTUFDbEJDLFFBRGtCLEdBQzRDRCxLQUQ1QyxDQUNsQkMsUUFEa0I7QUFBQSxNQUNSQyxPQURRLEdBQzRDRixLQUQ1QyxDQUNSRSxPQURRO0FBQUEsTUFDQ0MsU0FERCxHQUM0Q0gsS0FENUMsQ0FDQ0csU0FERDtBQUFBLE1BQ1lDLGlCQURaLEdBQzRDSixLQUQ1QyxDQUNZSSxpQkFEWjtBQUFBLE1BQ2tDQyxLQURsQyw0QkFDNENMLEtBRDVDOztBQUcxQixTQUNFO0FBQUE7QUFBQSxlQUFLLGlCQUFjLGFBQW5CLEVBQWlDLFdBQVcsMEJBQVdFLFFBQVFWLElBQW5CLEVBQXlCVyxTQUF6QixDQUE1QyxJQUFxRkUsS0FBckY7QUFDR0Qsd0JBQW9CSCxRQUFwQixHQUErQjtBQUFBO0FBQUEsUUFBWSxTQUFRLE9BQXBCO0FBQTZCQTtBQUE3QjtBQURsQyxHQURGO0FBS0Q7O0FBRURGLFlBQVlPLFNBQVosR0FBd0I7QUFDdEI7OztBQUdBTCxZQUFVLG9CQUFVTSxJQUFWLENBQWVDLFVBSkg7QUFLdEI7OztBQUdBTixXQUFTLG9CQUFVTyxNQUFWLENBQWlCRCxVQVJKO0FBU3RCOzs7QUFHQUwsYUFBVyxvQkFBVU8sTUFaQztBQWF0Qjs7OztBQUlBTixxQkFBbUIsb0JBQVVPO0FBakJQLENBQXhCOztBQW9CQVosWUFBWWEsWUFBWixHQUEyQjtBQUN6QlIscUJBQW1CO0FBRE0sQ0FBM0I7O2tCQUllLDBCQUFXYixNQUFYLEVBQW1CLEVBQUVzQixNQUFNLGdCQUFSLEVBQW5CLEVBQStDZCxXQUEvQyxDIiwiZmlsZSI6IkRpYWxvZ1RpdGxlLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3JtY3F1ZW4vc2x0LXVpL21hdGVyaWFsLXVpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJy4uL1R5cG9ncmFwaHknO1xuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIG1hcmdpbjogMCxcbiAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAzfXB4ICR7dGhlbWUuc3BhY2luZy51bml0ICogM31weCBcXFxuICAgICAgMjBweCAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDN9cHhgLFxuICAgIGZsZXg6ICcwIDAgYXV0bycsXG4gIH0sXG59KTtcblxuZnVuY3Rpb24gRGlhbG9nVGl0bGUocHJvcHMpIHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NlcywgY2xhc3NOYW1lLCBkaXNhYmxlVHlwb2dyYXBoeSwgLi4ub3RoZXIgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBkYXRhLW11aS10ZXN0PVwiRGlhbG9nVGl0bGVcIiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfSB7Li4ub3RoZXJ9PlxuICAgICAge2Rpc2FibGVUeXBvZ3JhcGh5ID8gY2hpbGRyZW4gOiA8VHlwb2dyYXBoeSB2YXJpYW50PVwidGl0bGVcIj57Y2hpbGRyZW59PC9UeXBvZ3JhcGh5Pn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuRGlhbG9nVGl0bGUucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogVXNlZnVsIHRvIGV4dGVuZCB0aGUgc3R5bGUgYXBwbGllZCB0byBjb21wb25lbnRzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgY2hpbGRyZW4gd29uJ3QgYmUgd3JhcHBlZCBieSBhIHR5cG9ncmFwaHkgY29tcG9uZW50LlxuICAgKiBGb3IgaW5zdGFuY2UsIHRoaXMgY2FuIGJlIHVzZWZ1bCB0byByZW5kZXIgYW4gaDQgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCBoMi5cbiAgICovXG4gIGRpc2FibGVUeXBvZ3JhcGh5OiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbkRpYWxvZ1RpdGxlLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZVR5cG9ncmFwaHk6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHsgbmFtZTogJ011aURpYWxvZ1RpdGxlJyB9KShEaWFsb2dUaXRsZSk7XG4iXX0=

/***/ })

});