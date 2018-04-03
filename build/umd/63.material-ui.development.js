webpackJsonpmaterial_ui([63],{

/***/ 338:
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

var _Typography = __webpack_require__(103);

var _Typography2 = _interopRequireDefault(_Typography);

var _withStyles = __webpack_require__(18);

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      maxHeight: '2em',
      alignItems: 'center'
    },
    positionStart: {
      marginRight: theme.spacing.unit
    },
    positionEnd: {
      marginLeft: theme.spacing.unit
    }
  };
};

function InputAdornment(props) {
  var _classNames;

  var children = props.children,
      Component = props.component,
      classes = props.classes,
      className = props.className,
      disableTypography = props.disableTypography,
      position = props.position,
      other = _objectWithoutProperties(props, ['children', 'component', 'classes', 'className', 'disableTypography', 'position']);

  return _react2.default.createElement(
    Component,
    _extends({
      className: (0, _classnames2.default)(classes.root, (_classNames = {}, _defineProperty(_classNames, classes.positionStart, position === 'start'), _defineProperty(_classNames, classes.positionEnd, position === 'end'), _classNames), className)
    }, other),
    typeof children === 'string' && !disableTypography ? _react2.default.createElement(
      _Typography2.default,
      { color: 'textSecondary' },
      children
    ) : children
  );
}

InputAdornment.propTypes = {
  /**
   * The content of the component, normally an `IconButton` or string.
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
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * If children is a string then disable wrapping in a Typography component.
   */
  disableTypography: _propTypes2.default.bool,
  /**
   * The position this adornment should appear relative to the `Input`.
   */
  position: _propTypes2.default.oneOf(['start', 'end'])
};

InputAdornment.defaultProps = {
  component: 'div',
  disableTypography: false
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiInputAdornment' })(InputAdornment);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcSW5wdXRcXElucHV0QWRvcm5tZW50LmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwibWF4SGVpZ2h0IiwiYWxpZ25JdGVtcyIsInBvc2l0aW9uU3RhcnQiLCJtYXJnaW5SaWdodCIsInRoZW1lIiwic3BhY2luZyIsInVuaXQiLCJwb3NpdGlvbkVuZCIsIm1hcmdpbkxlZnQiLCJJbnB1dEFkb3JubWVudCIsInByb3BzIiwiY2hpbGRyZW4iLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJjbGFzc2VzIiwiY2xhc3NOYW1lIiwiZGlzYWJsZVR5cG9ncmFwaHkiLCJwb3NpdGlvbiIsIm90aGVyIiwicHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJmdW5jIiwiYm9vbCIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVPLElBQU1BLDBCQUFTLFNBQVRBLE1BQVM7QUFBQSxTQUFVO0FBQzlCQyxVQUFNO0FBQ0pDLGVBQVMsTUFETDtBQUVKQyxpQkFBVyxLQUZQO0FBR0pDLGtCQUFZO0FBSFIsS0FEd0I7QUFNOUJDLG1CQUFlO0FBQ2JDLG1CQUFhQyxNQUFNQyxPQUFOLENBQWNDO0FBRGQsS0FOZTtBQVM5QkMsaUJBQWE7QUFDWEMsa0JBQVlKLE1BQU1DLE9BQU4sQ0FBY0M7QUFEZjtBQVRpQixHQUFWO0FBQUEsQ0FBZjs7QUFjUCxTQUFTRyxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUFBOztBQUFBLE1BRTNCQyxRQUYyQixHQVN6QkQsS0FUeUIsQ0FFM0JDLFFBRjJCO0FBQUEsTUFHaEJDLFNBSGdCLEdBU3pCRixLQVR5QixDQUczQkcsU0FIMkI7QUFBQSxNQUkzQkMsT0FKMkIsR0FTekJKLEtBVHlCLENBSTNCSSxPQUoyQjtBQUFBLE1BSzNCQyxTQUwyQixHQVN6QkwsS0FUeUIsQ0FLM0JLLFNBTDJCO0FBQUEsTUFNM0JDLGlCQU4yQixHQVN6Qk4sS0FUeUIsQ0FNM0JNLGlCQU4yQjtBQUFBLE1BTzNCQyxRQVAyQixHQVN6QlAsS0FUeUIsQ0FPM0JPLFFBUDJCO0FBQUEsTUFReEJDLEtBUndCLDRCQVN6QlIsS0FUeUI7O0FBVzdCLFNBQ0U7QUFBQyxhQUFEO0FBQUE7QUFDRSxpQkFBVywwQkFDVEksUUFBUWhCLElBREMsa0RBR05nQixRQUFRWixhQUhGLEVBR2tCZSxhQUFhLE9BSC9CLGdDQUlOSCxRQUFRUCxXQUpGLEVBSWdCVSxhQUFhLEtBSjdCLGlCQU1URixTQU5TO0FBRGIsT0FTTUcsS0FUTjtBQVdHLFdBQU9QLFFBQVAsS0FBb0IsUUFBcEIsSUFBZ0MsQ0FBQ0ssaUJBQWpDLEdBQ0M7QUFBQTtBQUFBLFFBQVksT0FBTSxlQUFsQjtBQUFtQ0w7QUFBbkMsS0FERCxHQUdDQTtBQWRKLEdBREY7QUFtQkQ7O0FBRURGLGVBQWVVLFNBQWYsR0FBMkI7QUFDekI7OztBQUdBUixZQUFVLG9CQUFVUyxJQUFWLENBQWVDLFVBSkE7QUFLekI7OztBQUdBUCxXQUFTLG9CQUFVUSxNQUFWLENBQWlCRCxVQVJEO0FBU3pCOzs7QUFHQU4sYUFBVyxvQkFBVVEsTUFaSTtBQWF6Qjs7OztBQUlBVixhQUFXLG9CQUFVVyxTQUFWLENBQW9CLENBQUMsb0JBQVVELE1BQVgsRUFBbUIsb0JBQVVFLElBQTdCLENBQXBCLENBakJjO0FBa0J6Qjs7O0FBR0FULHFCQUFtQixvQkFBVVUsSUFyQko7QUFzQnpCOzs7QUFHQVQsWUFBVSxvQkFBVVUsS0FBVixDQUFnQixDQUFDLE9BQUQsRUFBVSxLQUFWLENBQWhCO0FBekJlLENBQTNCOztBQTRCQWxCLGVBQWVtQixZQUFmLEdBQThCO0FBQzVCZixhQUFXLEtBRGlCO0FBRTVCRyxxQkFBbUI7QUFGUyxDQUE5Qjs7a0JBS2UsMEJBQVduQixNQUFYLEVBQW1CLEVBQUVnQyxNQUFNLG1CQUFSLEVBQW5CLEVBQWtEcEIsY0FBbEQsQyIsImZpbGUiOiJJbnB1dEFkb3JubWVudC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9ybWNxdWVuL3NsdC11aS9tYXRlcmlhbC11aSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICcuLi9UeXBvZ3JhcGh5JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgbWF4SGVpZ2h0OiAnMmVtJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgfSxcbiAgcG9zaXRpb25TdGFydDoge1xuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnVuaXQsXG4gIH0sXG4gIHBvc2l0aW9uRW5kOiB7XG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZy51bml0LFxuICB9LFxufSk7XG5cbmZ1bmN0aW9uIElucHV0QWRvcm5tZW50KHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBjaGlsZHJlbixcbiAgICBjb21wb25lbnQ6IENvbXBvbmVudCxcbiAgICBjbGFzc2VzLFxuICAgIGNsYXNzTmFtZSxcbiAgICBkaXNhYmxlVHlwb2dyYXBoeSxcbiAgICBwb3NpdGlvbixcbiAgICAuLi5vdGhlclxuICB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29tcG9uZW50XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgIGNsYXNzZXMucm9vdCxcbiAgICAgICAge1xuICAgICAgICAgIFtjbGFzc2VzLnBvc2l0aW9uU3RhcnRdOiBwb3NpdGlvbiA9PT0gJ3N0YXJ0JyxcbiAgICAgICAgICBbY2xhc3Nlcy5wb3NpdGlvbkVuZF06IHBvc2l0aW9uID09PSAnZW5kJyxcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICAgIHsuLi5vdGhlcn1cbiAgICA+XG4gICAgICB7dHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJyAmJiAhZGlzYWJsZVR5cG9ncmFwaHkgPyAoXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPntjaGlsZHJlbn08L1R5cG9ncmFwaHk+XG4gICAgICApIDogKFxuICAgICAgICBjaGlsZHJlblxuICAgICAgKX1cbiAgICA8L0NvbXBvbmVudD5cbiAgKTtcbn1cblxuSW5wdXRBZG9ybm1lbnQucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudCwgbm9ybWFsbHkgYW4gYEljb25CdXR0b25gIG9yIHN0cmluZy5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogVXNlZnVsIHRvIGV4dGVuZCB0aGUgc3R5bGUgYXBwbGllZCB0byBjb21wb25lbnRzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgRE9NIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBjb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gIC8qKlxuICAgKiBJZiBjaGlsZHJlbiBpcyBhIHN0cmluZyB0aGVuIGRpc2FibGUgd3JhcHBpbmcgaW4gYSBUeXBvZ3JhcGh5IGNvbXBvbmVudC5cbiAgICovXG4gIGRpc2FibGVUeXBvZ3JhcGh5OiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIFRoZSBwb3NpdGlvbiB0aGlzIGFkb3JubWVudCBzaG91bGQgYXBwZWFyIHJlbGF0aXZlIHRvIHRoZSBgSW5wdXRgLlxuICAgKi9cbiAgcG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbJ3N0YXJ0JywgJ2VuZCddKSxcbn07XG5cbklucHV0QWRvcm5tZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgY29tcG9uZW50OiAnZGl2JyxcbiAgZGlzYWJsZVR5cG9ncmFwaHk6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHsgbmFtZTogJ011aUlucHV0QWRvcm5tZW50JyB9KShJbnB1dEFkb3JubWVudCk7XG4iXX0=

/***/ })

});