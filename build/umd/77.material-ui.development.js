webpackJsonpmaterial_ui([77],{

/***/ 329:
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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // @inheritedComponent Typography

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      color: theme.palette.text.secondary
    }
  };
};

function DialogContentText(props) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      other = _objectWithoutProperties(props, ['children', 'classes', 'className']);

  return _react2.default.createElement(
    _Typography2.default,
    _extends({
      component: 'p',
      variant: 'subheading',
      className: (0, _classnames2.default)(classes.root, className)
    }, other),
    children
  );
}

DialogContentText.propTypes = {
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiDialogContentText' })(DialogContentText);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcRGlhbG9nXFxEaWFsb2dDb250ZW50VGV4dC5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJyb290IiwiY29sb3IiLCJ0aGVtZSIsInBhbGV0dGUiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwiRGlhbG9nQ29udGVudFRleHQiLCJwcm9wcyIsImNoaWxkcmVuIiwiY2xhc3NlcyIsImNsYXNzTmFtZSIsIm90aGVyIiwicHJvcFR5cGVzIiwibm9kZSIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Nk5BTkE7O0FBUU8sSUFBTUEsMEJBQVMsU0FBVEEsTUFBUztBQUFBLFNBQVU7QUFDOUJDLFVBQU07QUFDSkMsYUFBT0MsTUFBTUMsT0FBTixDQUFjQyxJQUFkLENBQW1CQztBQUR0QjtBQUR3QixHQUFWO0FBQUEsQ0FBZjs7QUFNUCxTQUFTQyxpQkFBVCxDQUEyQkMsS0FBM0IsRUFBa0M7QUFBQSxNQUN4QkMsUUFEd0IsR0FDbUJELEtBRG5CLENBQ3hCQyxRQUR3QjtBQUFBLE1BQ2RDLE9BRGMsR0FDbUJGLEtBRG5CLENBQ2RFLE9BRGM7QUFBQSxNQUNMQyxTQURLLEdBQ21CSCxLQURuQixDQUNMRyxTQURLO0FBQUEsTUFDU0MsS0FEVCw0QkFDbUJKLEtBRG5COztBQUdoQyxTQUNFO0FBQUE7QUFBQTtBQUNFLGlCQUFVLEdBRFo7QUFFRSxlQUFRLFlBRlY7QUFHRSxpQkFBVywwQkFBV0UsUUFBUVQsSUFBbkIsRUFBeUJVLFNBQXpCO0FBSGIsT0FJTUMsS0FKTjtBQU1HSDtBQU5ILEdBREY7QUFVRDs7QUFFREYsa0JBQWtCTSxTQUFsQixHQUE4QjtBQUM1Qjs7O0FBR0FKLFlBQVUsb0JBQVVLLElBSlE7QUFLNUI7OztBQUdBSixXQUFTLG9CQUFVSyxNQUFWLENBQWlCQyxVQVJFO0FBUzVCOzs7QUFHQUwsYUFBVyxvQkFBVU07QUFaTyxDQUE5Qjs7a0JBZWUsMEJBQVdqQixNQUFYLEVBQW1CLEVBQUVrQixNQUFNLHNCQUFSLEVBQW5CLEVBQXFEWCxpQkFBckQsQyIsImZpbGUiOiJEaWFsb2dDb250ZW50VGV4dC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9ybWNxdWVuL3NsdC11aS9tYXRlcmlhbC11aSIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBpbmhlcml0ZWRDb21wb25lbnQgVHlwb2dyYXBoeVxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnLi4vVHlwb2dyYXBoeSc7XG5cbmV4cG9ydCBjb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gIH0sXG59KTtcblxuZnVuY3Rpb24gRGlhbG9nQ29udGVudFRleHQocHJvcHMpIHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NlcywgY2xhc3NOYW1lLCAuLi5vdGhlciB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8VHlwb2dyYXBoeVxuICAgICAgY29tcG9uZW50PVwicFwiXG4gICAgICB2YXJpYW50PVwic3ViaGVhZGluZ1wiXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfVxuICAgICAgey4uLm90aGVyfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1R5cG9ncmFwaHk+XG4gICk7XG59XG5cbkRpYWxvZ0NvbnRlbnRUZXh0LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiBVc2VmdWwgdG8gZXh0ZW5kIHRoZSBzdHlsZSBhcHBsaWVkIHRvIGNvbXBvbmVudHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywgeyBuYW1lOiAnTXVpRGlhbG9nQ29udGVudFRleHQnIH0pKERpYWxvZ0NvbnRlbnRUZXh0KTtcbiJdfQ==

/***/ })

});