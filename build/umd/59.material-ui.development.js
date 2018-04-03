webpackJsonpmaterial_ui([59],{

/***/ 347:
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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      height: 24,
      marginRight: theme.spacing.unit * 2,
      width: 24,
      color: theme.palette.action.active,
      flexShrink: 0
    }
  };
};

/**
 * A simple wrapper to apply `List` styles to an `Icon` or `SvgIcon`.
 */
function ListItemIcon(props) {
  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      other = _objectWithoutProperties(props, ['children', 'classes', 'className']);

  return _react2.default.cloneElement(children, _extends({
    className: (0, _classnames2.default)(classes.root, classNameProp, children.props.className)
  }, other));
}

ListItemIcon.propTypes = {
  /**
   * The content of the component, normally `Icon`, `SvgIcon`,
   * or a `material-ui-icons` SVG icon element.
   */
  children: _propTypes2.default.element.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiListItemIcon' })(ListItemIcon);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcTGlzdFxcTGlzdEl0ZW1JY29uLmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsInJvb3QiLCJoZWlnaHQiLCJtYXJnaW5SaWdodCIsInRoZW1lIiwic3BhY2luZyIsInVuaXQiLCJ3aWR0aCIsImNvbG9yIiwicGFsZXR0ZSIsImFjdGlvbiIsImFjdGl2ZSIsImZsZXhTaHJpbmsiLCJMaXN0SXRlbUljb24iLCJwcm9wcyIsImNoaWxkcmVuIiwiY2xhc3NlcyIsImNsYXNzTmFtZVByb3AiLCJjbGFzc05hbWUiLCJvdGhlciIsImNsb25lRWxlbWVudCIsInByb3BUeXBlcyIsImVsZW1lbnQiLCJpc1JlcXVpcmVkIiwib2JqZWN0Iiwic3RyaW5nIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRU8sSUFBTUEsMEJBQVMsU0FBVEEsTUFBUztBQUFBLFNBQVU7QUFDOUJDLFVBQU07QUFDSkMsY0FBUSxFQURKO0FBRUpDLG1CQUFhQyxNQUFNQyxPQUFOLENBQWNDLElBQWQsR0FBcUIsQ0FGOUI7QUFHSkMsYUFBTyxFQUhIO0FBSUpDLGFBQU9KLE1BQU1LLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQkMsTUFKeEI7QUFLSkMsa0JBQVk7QUFMUjtBQUR3QixHQUFWO0FBQUEsQ0FBZjs7QUFVUDs7O0FBR0EsU0FBU0MsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFBQSxNQUNuQkMsUUFEbUIsR0FDdUNELEtBRHZDLENBQ25CQyxRQURtQjtBQUFBLE1BQ1RDLE9BRFMsR0FDdUNGLEtBRHZDLENBQ1RFLE9BRFM7QUFBQSxNQUNXQyxhQURYLEdBQ3VDSCxLQUR2QyxDQUNBSSxTQURBO0FBQUEsTUFDNkJDLEtBRDdCLDRCQUN1Q0wsS0FEdkM7O0FBRzNCLFNBQU8sZ0JBQU1NLFlBQU4sQ0FBbUJMLFFBQW5CO0FBQ0xHLGVBQVcsMEJBQVdGLFFBQVFmLElBQW5CLEVBQXlCZ0IsYUFBekIsRUFBd0NGLFNBQVNELEtBQVQsQ0FBZUksU0FBdkQ7QUFETixLQUVGQyxLQUZFLEVBQVA7QUFJRDs7QUFFRE4sYUFBYVEsU0FBYixHQUF5QjtBQUN2Qjs7OztBQUlBTixZQUFVLG9CQUFVTyxPQUFWLENBQWtCQyxVQUxMO0FBTXZCOzs7QUFHQVAsV0FBUyxvQkFBVVEsTUFBVixDQUFpQkQsVUFUSDtBQVV2Qjs7O0FBR0FMLGFBQVcsb0JBQVVPO0FBYkUsQ0FBekI7O2tCQWdCZSwwQkFBV3pCLE1BQVgsRUFBbUIsRUFBRTBCLE1BQU0saUJBQVIsRUFBbkIsRUFBZ0RiLFlBQWhELEMiLCJmaWxlIjoiTGlzdEl0ZW1JY29uLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3JtY3F1ZW4vc2x0LXVpL21hdGVyaWFsLXVpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBoZWlnaHQ6IDI0LFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAyLFxuICAgIHdpZHRoOiAyNCxcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5hY3Rpb24uYWN0aXZlLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gIH0sXG59KTtcblxuLyoqXG4gKiBBIHNpbXBsZSB3cmFwcGVyIHRvIGFwcGx5IGBMaXN0YCBzdHlsZXMgdG8gYW4gYEljb25gIG9yIGBTdmdJY29uYC5cbiAqL1xuZnVuY3Rpb24gTGlzdEl0ZW1JY29uKHByb3BzKSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGNsYXNzZXMsIGNsYXNzTmFtZTogY2xhc3NOYW1lUHJvcCwgLi4ub3RoZXIgfSA9IHByb3BzO1xuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xhc3Nlcy5yb290LCBjbGFzc05hbWVQcm9wLCBjaGlsZHJlbi5wcm9wcy5jbGFzc05hbWUpLFxuICAgIC4uLm90aGVyLFxuICB9KTtcbn1cblxuTGlzdEl0ZW1JY29uLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQsIG5vcm1hbGx5IGBJY29uYCwgYFN2Z0ljb25gLFxuICAgKiBvciBhIGBtYXRlcmlhbC11aS1pY29uc2AgU1ZHIGljb24gZWxlbWVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogVXNlZnVsIHRvIGV4dGVuZCB0aGUgc3R5bGUgYXBwbGllZCB0byBjb21wb25lbnRzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHsgbmFtZTogJ011aUxpc3RJdGVtSWNvbicgfSkoTGlzdEl0ZW1JY29uKTtcbiJdfQ==

/***/ })

});