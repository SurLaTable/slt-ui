webpackJsonpmaterial_ui([11,87],{

/***/ 295:
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
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      width: theme.spacing.unit * 5,
      height: theme.spacing.unit * 5,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(20),
      borderRadius: '50%',
      overflow: 'hidden',
      userSelect: 'none'
    },
    colorDefault: {
      color: theme.palette.background.default,
      backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[600]
    },
    img: {
      width: '100%',
      height: '100%',
      textAlign: 'center',
      // Handle non-square image. The property isn't supported by IE11.
      objectFit: 'cover'
    }
  };
};

function Avatar(props) {
  var alt = props.alt,
      childrenProp = props.children,
      childrenClassNameProp = props.childrenClassName,
      classes = props.classes,
      classNameProp = props.className,
      Component = props.component,
      imgProps = props.imgProps,
      sizes = props.sizes,
      src = props.src,
      srcSet = props.srcSet,
      other = _objectWithoutProperties(props, ['alt', 'children', 'childrenClassName', 'classes', 'className', 'component', 'imgProps', 'sizes', 'src', 'srcSet']);

  var className = (0, _classnames2.default)(classes.root, _defineProperty({}, classes.colorDefault, childrenProp && !src && !srcSet), classNameProp);
  var children = null;

  if (childrenProp) {
    if (childrenClassNameProp && typeof childrenProp !== 'string' && _react2.default.isValidElement(childrenProp)) {
      var childrenClassName = (0, _classnames2.default)(childrenClassNameProp, childrenProp.props.className);
      children = _react2.default.cloneElement(childrenProp, { className: childrenClassName });
    } else {
      children = childrenProp;
    }
  } else if (src || srcSet) {
    children = _react2.default.createElement('img', _extends({
      alt: alt,
      src: src,
      srcSet: srcSet,
      sizes: sizes,
      className: classes.img
    }, imgProps));
  }

  return _react2.default.createElement(
    Component,
    _extends({ className: className }, other),
    children
  );
}

Avatar.propTypes = {
  /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  alt: _propTypes2.default.string,
  /**
   * Used to render icon or text elements inside the Avatar.
   * `src` and `alt` props will not be used and no `img` will
   * be rendered by default.
   *
   * This can be an element, or just a string.
   */
  children: _propTypes2.default.node,
  /**
   * @ignore
   * The className of the child element.
   * Used by Chip and ListItemIcon to style the Avatar icon.
   */
  childrenClassName: _propTypes2.default.string,
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
   * Properties applied to the `img` element when the component
   * is used to display an image.
   */
  imgProps: _propTypes2.default.object,
  /**
   * The `sizes` attribute for the `img` element.
   */
  sizes: _propTypes2.default.string,
  /**
   * The `src` attribute for the `img` element.
   */
  src: _propTypes2.default.string,
  /**
   * The `srcSet` attribute for the `img` element.
   */
  srcSet: _propTypes2.default.string
};

Avatar.defaultProps = {
  component: 'div'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiAvatar' })(Avatar);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcQXZhdGFyXFxBdmF0YXIuanMiXSwibmFtZXMiOlsic3R5bGVzIiwicm9vdCIsInBvc2l0aW9uIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhTaHJpbmsiLCJ3aWR0aCIsInRoZW1lIiwic3BhY2luZyIsInVuaXQiLCJoZWlnaHQiLCJmb250RmFtaWx5IiwidHlwb2dyYXBoeSIsImZvbnRTaXplIiwicHhUb1JlbSIsImJvcmRlclJhZGl1cyIsIm92ZXJmbG93IiwidXNlclNlbGVjdCIsImNvbG9yRGVmYXVsdCIsImNvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwiYmFja2dyb3VuZENvbG9yIiwidHlwZSIsImdyZXkiLCJpbWciLCJ0ZXh0QWxpZ24iLCJvYmplY3RGaXQiLCJBdmF0YXIiLCJwcm9wcyIsImFsdCIsImNoaWxkcmVuUHJvcCIsImNoaWxkcmVuIiwiY2hpbGRyZW5DbGFzc05hbWVQcm9wIiwiY2hpbGRyZW5DbGFzc05hbWUiLCJjbGFzc2VzIiwiY2xhc3NOYW1lUHJvcCIsImNsYXNzTmFtZSIsIkNvbXBvbmVudCIsImNvbXBvbmVudCIsImltZ1Byb3BzIiwic2l6ZXMiLCJzcmMiLCJzcmNTZXQiLCJvdGhlciIsImlzVmFsaWRFbGVtZW50IiwiY2xvbmVFbGVtZW50IiwicHJvcFR5cGVzIiwic3RyaW5nIiwibm9kZSIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJvbmVPZlR5cGUiLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSwwQkFBUyxTQUFUQSxNQUFTO0FBQUEsU0FBVTtBQUM5QkMsVUFBTTtBQUNKQyxnQkFBVSxVQUROO0FBRUpDLGVBQVMsTUFGTDtBQUdKQyxrQkFBWSxRQUhSO0FBSUpDLHNCQUFnQixRQUpaO0FBS0pDLGtCQUFZLENBTFI7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QVUsb0JBQVVpQixJQWJIO0FBY2pCOzs7OztBQUtBZixxQkFBbUIsb0JBQVVjLE1BbkJaO0FBb0JqQjs7O0FBR0FiLFdBQVMsb0JBQVVlLE1BQVYsQ0FBaUJDLFVBdkJUO0FBd0JqQjs7O0FBR0FkLGFBQVcsb0JBQVVXLE1BM0JKO0FBNEJqQjs7OztBQUlBVCxhQUFXLG9CQUFVYSxTQUFWLENBQW9CLENBQUMsb0JBQVVKLE1BQVgsRUFBbUIsb0JBQVVLLElBQTdCLENBQXBCLENBaENNO0FBaUNqQjs7OztBQUlBYixZQUFVLG9CQUFVVSxNQXJDSDtBQXNDakI7OztBQUdBVCxTQUFPLG9CQUFVTyxNQXpDQTtBQTBDakI7OztBQUdBTixPQUFLLG9CQUFVTSxNQTdDRTtBQThDakI7OztBQUdBTCxVQUFRLG9CQUFVSztBQWpERCxDQUFuQjs7QUFvREFwQixPQUFPMEIsWUFBUCxHQUFzQjtBQUNwQmYsYUFBVztBQURTLENBQXRCOztrQkFJZSwwQkFBV3pDLE1BQVgsRUFBbUIsRUFBRXlELE1BQU0sV0FBUixFQUFuQixFQUEwQzNCLE1BQTFDLEMiLCJmaWxlIjoiQXZhdGFyLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3JtY3F1ZW4vc2x0LXVpL21hdGVyaWFsLXVpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDUsXG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiA1LFxuICAgIGZvbnRGYW1pbHk6IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseSxcbiAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5weFRvUmVtKDIwKSxcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gIH0sXG4gIGNvbG9yRGVmYXVsdDoge1xuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQuZGVmYXVsdCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyB0aGVtZS5wYWxldHRlLmdyZXlbNDAwXSA6IHRoZW1lLnBhbGV0dGUuZ3JleVs2MDBdLFxuICB9LFxuICBpbWc6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgLy8gSGFuZGxlIG5vbi1zcXVhcmUgaW1hZ2UuIFRoZSBwcm9wZXJ0eSBpc24ndCBzdXBwb3J0ZWQgYnkgSUUxMS5cbiAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXG4gIH0sXG59KTtcblxuZnVuY3Rpb24gQXZhdGFyKHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBhbHQsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuUHJvcCxcbiAgICBjaGlsZHJlbkNsYXNzTmFtZTogY2hpbGRyZW5DbGFzc05hbWVQcm9wLFxuICAgIGNsYXNzZXMsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVQcm9wLFxuICAgIGNvbXBvbmVudDogQ29tcG9uZW50LFxuICAgIGltZ1Byb3BzLFxuICAgIHNpemVzLFxuICAgIHNyYyxcbiAgICBzcmNTZXQsXG4gICAgLi4ub3RoZXJcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoXG4gICAgY2xhc3Nlcy5yb290LFxuICAgIHtcbiAgICAgIFtjbGFzc2VzLmNvbG9yRGVmYXVsdF06IGNoaWxkcmVuUHJvcCAmJiAhc3JjICYmICFzcmNTZXQsXG4gICAgfSxcbiAgICBjbGFzc05hbWVQcm9wLFxuICApO1xuICBsZXQgY2hpbGRyZW4gPSBudWxsO1xuXG4gIGlmIChjaGlsZHJlblByb3ApIHtcbiAgICBpZiAoXG4gICAgICBjaGlsZHJlbkNsYXNzTmFtZVByb3AgJiZcbiAgICAgIHR5cGVvZiBjaGlsZHJlblByb3AgIT09ICdzdHJpbmcnICYmXG4gICAgICBSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZHJlblByb3ApXG4gICAgKSB7XG4gICAgICBjb25zdCBjaGlsZHJlbkNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoY2hpbGRyZW5DbGFzc05hbWVQcm9wLCBjaGlsZHJlblByb3AucHJvcHMuY2xhc3NOYW1lKTtcbiAgICAgIGNoaWxkcmVuID0gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuUHJvcCwgeyBjbGFzc05hbWU6IGNoaWxkcmVuQ2xhc3NOYW1lIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZHJlbiA9IGNoaWxkcmVuUHJvcDtcbiAgICB9XG4gIH0gZWxzZSBpZiAoc3JjIHx8IHNyY1NldCkge1xuICAgIGNoaWxkcmVuID0gKFxuICAgICAgPGltZ1xuICAgICAgICBhbHQ9e2FsdH1cbiAgICAgICAgc3JjPXtzcmN9XG4gICAgICAgIHNyY1NldD17c3JjU2V0fVxuICAgICAgICBzaXplcz17c2l6ZXN9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XG4gICAgICAgIHsuLi5pbWdQcm9wc31cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbXBvbmVudCBjbGFzc05hbWU9e2NsYXNzTmFtZX0gey4uLm90aGVyfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NvbXBvbmVudD5cbiAgKTtcbn1cblxuQXZhdGFyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFVzZWQgaW4gY29tYmluYXRpb24gd2l0aCBgc3JjYCBvciBgc3JjU2V0YCB0b1xuICAgKiBwcm92aWRlIGFuIGFsdCBhdHRyaWJ1dGUgZm9yIHRoZSByZW5kZXJlZCBgaW1nYCBlbGVtZW50LlxuICAgKi9cbiAgYWx0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogVXNlZCB0byByZW5kZXIgaWNvbiBvciB0ZXh0IGVsZW1lbnRzIGluc2lkZSB0aGUgQXZhdGFyLlxuICAgKiBgc3JjYCBhbmQgYGFsdGAgcHJvcHMgd2lsbCBub3QgYmUgdXNlZCBhbmQgbm8gYGltZ2Agd2lsbFxuICAgKiBiZSByZW5kZXJlZCBieSBkZWZhdWx0LlxuICAgKlxuICAgKiBUaGlzIGNhbiBiZSBhbiBlbGVtZW50LCBvciBqdXN0IGEgc3RyaW5nLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBUaGUgY2xhc3NOYW1lIG9mIHRoZSBjaGlsZCBlbGVtZW50LlxuICAgKiBVc2VkIGJ5IENoaXAgYW5kIExpc3RJdGVtSWNvbiB0byBzdHlsZSB0aGUgQXZhdGFyIGljb24uXG4gICAqL1xuICBjaGlsZHJlbkNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIFVzZWZ1bCB0byBleHRlbmQgdGhlIHN0eWxlIGFwcGxpZWQgdG8gY29tcG9uZW50cy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHJvb3Qgbm9kZS5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIERPTSBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAvKipcbiAgICogUHJvcGVydGllcyBhcHBsaWVkIHRvIHRoZSBgaW1nYCBlbGVtZW50IHdoZW4gdGhlIGNvbXBvbmVudFxuICAgKiBpcyB1c2VkIHRvIGRpc3BsYXkgYW4gaW1hZ2UuXG4gICAqL1xuICBpbWdQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIFRoZSBgc2l6ZXNgIGF0dHJpYnV0ZSBmb3IgdGhlIGBpbWdgIGVsZW1lbnQuXG4gICAqL1xuICBzaXplczogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIFRoZSBgc3JjYCBhdHRyaWJ1dGUgZm9yIHRoZSBgaW1nYCBlbGVtZW50LlxuICAgKi9cbiAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogVGhlIGBzcmNTZXRgIGF0dHJpYnV0ZSBmb3IgdGhlIGBpbWdgIGVsZW1lbnQuXG4gICAqL1xuICBzcmNTZXQ6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5BdmF0YXIuZGVmYXVsdFByb3BzID0ge1xuICBjb21wb25lbnQ6ICdkaXYnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHsgbmFtZTogJ011aUF2YXRhcicgfSkoQXZhdGFyKTtcbiJdfQ==

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(23);

var _classnames2 = _interopRequireDefault(_classnames);

var _keycode = __webpack_require__(61);

var _keycode2 = _interopRequireDefault(_keycode);

var _Cancel = __webpack_require__(411);

var _Cancel2 = _interopRequireDefault(_Cancel);

var _withStyles = __webpack_require__(18);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _colorManipulator = __webpack_require__(106);

__webpack_require__(295);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// So we don't have any override priority issue.

var styles = exports.styles = function styles(theme) {
  var height = 32;
  var backgroundColor = theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700];
  var deleteIconColor = (0, _colorManipulator.fade)(theme.palette.text.primary, 0.26);

  return {
    root: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(13),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: height,
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor: backgroundColor,
      borderRadius: height / 2,
      whiteSpace: 'nowrap',
      transition: theme.transitions.create(),
      // label will inherit this from root, then `clickable` class overrides this for both
      cursor: 'default',
      outline: 'none', // No outline on focused element in Chrome (as triggered by tabIndex prop)
      border: 'none', // Remove `button` border
      padding: 0 // Remove `button` padding
    },
    clickable: {
      // Remove grey highlight
      WebkitTapHighlightColor: 'transparent',
      cursor: 'pointer',
      '&:hover, &:focus': {
        backgroundColor: (0, _colorManipulator.emphasize)(backgroundColor, 0.08)
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: (0, _colorManipulator.emphasize)(backgroundColor, 0.12)
      }
    },
    deletable: {
      '&:focus': {
        backgroundColor: (0, _colorManipulator.emphasize)(backgroundColor, 0.08)
      }
    },
    avatar: {
      marginRight: -4,
      width: height,
      height: height,
      color: theme.palette.type === 'light' ? theme.palette.grey[700] : theme.palette.grey[300],
      fontSize: theme.typography.pxToRem(16)
    },
    avatarChildren: {
      width: 19,
      height: 19
    },
    label: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 12,
      paddingRight: 12,
      userSelect: 'none',
      whiteSpace: 'nowrap',
      cursor: 'inherit'
    },
    deleteIcon: {
      // Remove grey highlight
      WebkitTapHighlightColor: 'transparent',
      color: deleteIconColor,
      cursor: 'pointer',
      height: 'auto',
      margin: '0 4px 0 -8px',
      '&:hover': {
        color: (0, _colorManipulator.fade)(deleteIconColor, 0.4)
      }
    }
  };
};

/**
 * Chips represent complex entities in small blocks, such as a contact.
 */

var Chip = function (_React$Component) {
  _inherits(Chip, _React$Component);

  function Chip() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Chip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Chip.__proto__ || Object.getPrototypeOf(Chip)).call.apply(_ref, [this].concat(args))), _this), _this.chipRef = null, _this.handleDeleteIconClick = function (event) {
      // Stop the event from bubbling up to the `Chip`
      event.stopPropagation();
      var onDelete = _this.props.onDelete;

      if (onDelete) {
        onDelete(event);
      }
    }, _this.handleKeyDown = function (event) {
      // Ignore events from children of `Chip`.
      if (event.currentTarget !== event.target) {
        return;
      }

      var _this$props = _this.props,
          onClick = _this$props.onClick,
          onDelete = _this$props.onDelete,
          onKeyDown = _this$props.onKeyDown;

      var key = (0, _keycode2.default)(event);

      if (onClick && (key === 'space' || key === 'enter')) {
        event.preventDefault();
        onClick(event);
      } else if (onDelete && key === 'backspace') {
        event.preventDefault();
        onDelete(event);
      } else if (key === 'esc') {
        event.preventDefault();
        if (_this.chipRef) {
          _this.chipRef.blur();
        }
      }

      if (onKeyDown) {
        onKeyDown(event);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Chip, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          avatarProp = _props.avatar,
          classes = _props.classes,
          classNameProp = _props.className,
          Component = _props.component,
          deleteIconProp = _props.deleteIcon,
          label = _props.label,
          onClick = _props.onClick,
          onDelete = _props.onDelete,
          onKeyDown = _props.onKeyDown,
          tabIndexProp = _props.tabIndex,
          other = _objectWithoutProperties(_props, ['avatar', 'classes', 'className', 'component', 'deleteIcon', 'label', 'onClick', 'onDelete', 'onKeyDown', 'tabIndex']);

      var className = (0, _classnames2.default)(classes.root, _defineProperty({}, classes.clickable, onClick), _defineProperty({}, classes.deletable, onDelete), classNameProp);

      var deleteIcon = null;
      if (onDelete) {
        deleteIcon = deleteIconProp && _react2.default.isValidElement(deleteIconProp) ? _react2.default.cloneElement(deleteIconProp, {
          className: (0, _classnames2.default)(deleteIconProp.props.className, classes.deleteIcon),
          onClick: this.handleDeleteIconClick
        }) : _react2.default.createElement(_Cancel2.default, { className: classes.deleteIcon, onClick: this.handleDeleteIconClick });
      }

      var avatar = null;
      if (avatarProp && _react2.default.isValidElement(avatarProp)) {
        avatar = _react2.default.cloneElement(avatarProp, {
          className: (0, _classnames2.default)(classes.avatar, avatarProp.props.className),
          childrenClassName: (0, _classnames2.default)(classes.avatarChildren, avatarProp.props.childrenClassName)
        });
      }

      var tabIndex = tabIndexProp;

      if (!tabIndex) {
        tabIndex = onClick || onDelete ? 0 : -1;
      }

      return _react2.default.createElement(
        Component,
        _extends({
          role: 'button',
          className: className,
          tabIndex: tabIndex,
          onClick: onClick,
          onKeyDown: this.handleKeyDown,
          ref: function ref(node) {
            _this2.chipRef = node;
          }
        }, other),
        avatar,
        _react2.default.createElement(
          'span',
          { className: classes.label },
          label
        ),
        deleteIcon
      );
    }
  }]);

  return Chip;
}(_react2.default.Component);

Chip.propTypes = {
  /**
   * Avatar element.
   */
  avatar: _propTypes2.default.element,
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
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: _propTypes2.default.element,
  /**
   * The content of the label.
   */
  label: _propTypes2.default.node,
  /**
   * @ignore
   */
  onClick: _propTypes2.default.func,
  /**
   * Callback function fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: _propTypes2.default.func,
  /**
   * @ignore
   */
  onKeyDown: _propTypes2.default.func,
  /**
   * @ignore
   */
  tabIndex: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
};

Chip.defaultProps = {
  component: 'div'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiChip' })(Chip);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcQ2hpcFxcQ2hpcC5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aGVtZSIsInBhbGV0dGUiLCJ0eXBlIiwiZ3JleSIsImRlbGV0ZUljb25Db2xvciIsInRleHQiLCJwcmltYXJ5Iiwicm9vdCIsImZvbnRGYW1pbHkiLCJ0eXBvZ3JhcGh5IiwiZm9udFNpemUiLCJweFRvUmVtIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImNvbG9yIiwiZ2V0Q29udHJhc3RUZXh0IiwiYm9yZGVyUmFkaXVzIiwid2hpdGVTcGFjZSIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImN1cnNvciIsIm91dGxpbmUiLCJib3JkZXIiLCJwYWRkaW5nIiwiY2xpY2thYmxlIiwiV2Via2l0VGFwSGlnaGxpZ2h0Q29sb3IiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiZGVsZXRhYmxlIiwiYXZhdGFyIiwibWFyZ2luUmlnaHQiLCJ3aWR0aCIsImF2YXRhckNoaWxkcmVuIiwibGFiZWwiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsInVzZXJTZWxlY3QiLCJkZWxldGVJY29uIiwibWFyZ2luIiwiQ2hpcCIsImNoaXBSZWYiLCJoYW5kbGVEZWxldGVJY29uQ2xpY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIm9uRGVsZXRlIiwicHJvcHMiLCJoYW5kbGVLZXlEb3duIiwiY3VycmVudFRhcmdldCIsInRhcmdldCIsIm9uQ2xpY2siLCJvbktleURvd24iLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsImJsdXIiLCJhdmF0YXJQcm9wIiwiY2xhc3NlcyIsImNsYXNzTmFtZVByb3AiLCJjbGFzc05hbWUiLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJkZWxldGVJY29uUHJvcCIsInRhYkluZGV4UHJvcCIsInRhYkluZGV4Iiwib3RoZXIiLCJpc1ZhbGlkRWxlbWVudCIsImNsb25lRWxlbWVudCIsImNoaWxkcmVuQ2xhc3NOYW1lIiwibm9kZSIsInByb3BUeXBlcyIsImVsZW1lbnQiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwib25lT2ZUeXBlIiwiZnVuYyIsIm51bWJlciIsImRlZmF1bHRQcm9wcyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBQTJCOztBQUVwQixJQUFNQSwwQkFBUyxTQUFUQSxNQUFTLFFBQVM7QUFDN0IsTUFBTUMsU0FBUyxFQUFmO0FBQ0EsTUFBTUMsa0JBQ0pDLE1BQU1DLE9BQU4sQ0FBY0MsSUFBZCxLQUF1QixPQUF2QixHQUFpQ0YsTUFBTUMsT0FBTixDQUFjRSxJQUFkLENBQW1CLEdBQW5CLENBQWpDLEdBQTJESCxNQUFNQyxPQUFOLENBQWNFLElBQWQsQ0FBbUIsR0FBbkIsQ0FEN0Q7QUFFQSxNQUFNQyxrQkFBa0IsNEJBQUtKLE1BQU1DLE9BQU4sQ0FBY0ksSUFBZCxDQUFtQkMsT0FBeEIsRUFBaUMsSUFBakMsQ0FBeEI7O0FBRUEsU0FBTztBQUNMQyxVQUFNO0FBQ0pDLGtCQUFZUixNQUFNUyxVQUFOLENBQWlCRCxVQUR6QjtBQUVKRSxnQkFBVVYsTUFBTVMsVUFBTixDQUFpQkUsT0FBakIsQ0FBeUIsRUFBekIsQ0FGTjtBQUdKQyxlQUFTLGFBSEw7QUFJSkMsa0JBQVksUUFKUjtBQUtKQyxzQkFBZ0IsUUFMWjtBQU1KaEIsb0JBTkk7QUFPSmlCLGFBQU9mLE1BQU1DLE9BQU4sQ0FBY2UsZUFBZCxDQUE4QmpCLGVBQTlCLENBUEg7QUFRSkEsc0NBUkk7QUFTSmtCLG9CQUFjbkIsU0FBUyxDQVRuQjtBQVVKb0Isa0JBQVksUUFWUjtBQVdKQyxrQkFBWW5CLE1BQU1vQixXQUFOLENBQWtCQyxNQUFsQixFQVhSO0FBWUo7QUFDQUMsY0FBUSxTQWJKO0FBY0pDLGVBQVMsTUFkTCxFQWNhO0FBQ2pC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VSxvQkFBVVcsU0FBVixDQUFvQixDQUFDLG9CQUFVRSxNQUFYLEVBQW1CLG9CQUFVSCxNQUE3QixDQUFwQjtBQTFDSyxDQUFqQjs7QUE2Q0FqQyxLQUFLcUMsWUFBTCxHQUFvQjtBQUNsQmpCLGFBQVc7QUFETyxDQUFwQjs7a0JBSWUsMEJBQVdoRSxNQUFYLEVBQW1CLEVBQUVrRixNQUFNLFNBQVIsRUFBbkIsRUFBd0N0QyxJQUF4QyxDIiwiZmlsZSI6IkNoaXAuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvcm1jcXVlbi9zbHQtdWkvbWF0ZXJpYWwtdWkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IGtleWNvZGUgZnJvbSAna2V5Y29kZSc7XG5pbXBvcnQgQ2FuY2VsSWNvbiBmcm9tICcuLi9pbnRlcm5hbC9zdmctaWNvbnMvQ2FuY2VsJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCB7IGVtcGhhc2l6ZSwgZmFkZSB9IGZyb20gJy4uL3N0eWxlcy9jb2xvck1hbmlwdWxhdG9yJztcbmltcG9ydCAnLi4vQXZhdGFyL0F2YXRhcic7IC8vIFNvIHdlIGRvbid0IGhhdmUgYW55IG92ZXJyaWRlIHByaW9yaXR5IGlzc3VlLlxuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4ge1xuICBjb25zdCBoZWlnaHQgPSAzMjtcbiAgY29uc3QgYmFja2dyb3VuZENvbG9yID1cbiAgICB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyB0aGVtZS5wYWxldHRlLmdyZXlbMzAwXSA6IHRoZW1lLnBhbGV0dGUuZ3JleVs3MDBdO1xuICBjb25zdCBkZWxldGVJY29uQ29sb3IgPSBmYWRlKHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LCAwLjI2KTtcblxuICByZXR1cm4ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGZvbnRGYW1pbHk6IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseSxcbiAgICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LnB4VG9SZW0oMTMpLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgaGVpZ2h0LFxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZ2V0Q29udHJhc3RUZXh0KGJhY2tncm91bmRDb2xvciksXG4gICAgICBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBib3JkZXJSYWRpdXM6IGhlaWdodCAvIDIsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgpLFxuICAgICAgLy8gbGFiZWwgd2lsbCBpbmhlcml0IHRoaXMgZnJvbSByb290LCB0aGVuIGBjbGlja2FibGVgIGNsYXNzIG92ZXJyaWRlcyB0aGlzIGZvciBib3RoXG4gICAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgICAgIG91dGxpbmU6ICdub25lJywgLy8gTm8gb3V0bGluZSBvbiBmb2N1c2VkIGVsZW1lbnQgaW4gQ2hyb21lIChhcyB0cmlnZ2VyZWQgYnkgdGFiSW5kZXggcHJvcClcbiAgICAgIGJvcmRlcjogJ25vbmUnLCAvLyBSZW1vdmUgYGJ1dHRvbmAgYm9yZGVyXG4gICAgICBwYWRkaW5nOiAwLCAvLyBSZW1vdmUgYGJ1dHRvbmAgcGFkZGluZ1xuICAgIH0sXG4gICAgY2xpY2thYmxlOiB7XG4gICAgICAvLyBSZW1vdmUgZ3JleSBoaWdobGlnaHRcbiAgICAgIFdlYmtpdFRhcEhpZ2hsaWdodENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAnJjpob3ZlciwgJjpmb2N1cyc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBlbXBoYXNpemUoYmFja2dyb3VuZENvbG9yLCAwLjA4KSxcbiAgICAgIH0sXG4gICAgICAnJjphY3RpdmUnOiB7XG4gICAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBlbXBoYXNpemUoYmFja2dyb3VuZENvbG9yLCAwLjEyKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkZWxldGFibGU6IHtcbiAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGVtcGhhc2l6ZShiYWNrZ3JvdW5kQ29sb3IsIDAuMDgpLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGF2YXRhcjoge1xuICAgICAgbWFyZ2luUmlnaHQ6IC00LFxuICAgICAgd2lkdGg6IGhlaWdodCxcbiAgICAgIGhlaWdodCxcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyB0aGVtZS5wYWxldHRlLmdyZXlbNzAwXSA6IHRoZW1lLnBhbGV0dGUuZ3JleVszMDBdLFxuICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxNiksXG4gICAgfSxcbiAgICBhdmF0YXJDaGlsZHJlbjoge1xuICAgICAgd2lkdGg6IDE5LFxuICAgICAgaGVpZ2h0OiAxOSxcbiAgICB9LFxuICAgIGxhYmVsOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIHBhZGRpbmdMZWZ0OiAxMixcbiAgICAgIHBhZGRpbmdSaWdodDogMTIsXG4gICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIGN1cnNvcjogJ2luaGVyaXQnLFxuICAgIH0sXG4gICAgZGVsZXRlSWNvbjoge1xuICAgICAgLy8gUmVtb3ZlIGdyZXkgaGlnaGxpZ2h0XG4gICAgICBXZWJraXRUYXBIaWdobGlnaHRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGNvbG9yOiBkZWxldGVJY29uQ29sb3IsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgbWFyZ2luOiAnMCA0cHggMCAtOHB4JyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogZmFkZShkZWxldGVJY29uQ29sb3IsIDAuNCksXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59O1xuXG4vKipcbiAqIENoaXBzIHJlcHJlc2VudCBjb21wbGV4IGVudGl0aWVzIGluIHNtYWxsIGJsb2Nrcywgc3VjaCBhcyBhIGNvbnRhY3QuXG4gKi9cbmNsYXNzIENoaXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjaGlwUmVmID0gbnVsbDtcblxuICBoYW5kbGVEZWxldGVJY29uQ2xpY2sgPSBldmVudCA9PiB7XG4gICAgLy8gU3RvcCB0aGUgZXZlbnQgZnJvbSBidWJibGluZyB1cCB0byB0aGUgYENoaXBgXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgeyBvbkRlbGV0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAob25EZWxldGUpIHtcbiAgICAgIG9uRGVsZXRlKGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlS2V5RG93biA9IGV2ZW50ID0+IHtcbiAgICAvLyBJZ25vcmUgZXZlbnRzIGZyb20gY2hpbGRyZW4gb2YgYENoaXBgLlxuICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0ICE9PSBldmVudC50YXJnZXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IG9uQ2xpY2ssIG9uRGVsZXRlLCBvbktleURvd24gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qga2V5ID0ga2V5Y29kZShldmVudCk7XG5cbiAgICBpZiAob25DbGljayAmJiAoa2V5ID09PSAnc3BhY2UnIHx8IGtleSA9PT0gJ2VudGVyJykpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBvbkNsaWNrKGV2ZW50KTtcbiAgICB9IGVsc2UgaWYgKG9uRGVsZXRlICYmIGtleSA9PT0gJ2JhY2tzcGFjZScpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBvbkRlbGV0ZShldmVudCk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdlc2MnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRoaXMuY2hpcFJlZikge1xuICAgICAgICB0aGlzLmNoaXBSZWYuYmx1cigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvbktleURvd24pIHtcbiAgICAgIG9uS2V5RG93bihldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhdmF0YXI6IGF2YXRhclByb3AsXG4gICAgICBjbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVQcm9wLFxuICAgICAgY29tcG9uZW50OiBDb21wb25lbnQsXG4gICAgICBkZWxldGVJY29uOiBkZWxldGVJY29uUHJvcCxcbiAgICAgIGxhYmVsLFxuICAgICAgb25DbGljayxcbiAgICAgIG9uRGVsZXRlLFxuICAgICAgb25LZXlEb3duLFxuICAgICAgdGFiSW5kZXg6IHRhYkluZGV4UHJvcCxcbiAgICAgIC4uLm90aGVyXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc05hbWVzKFxuICAgICAgY2xhc3Nlcy5yb290LFxuICAgICAgeyBbY2xhc3Nlcy5jbGlja2FibGVdOiBvbkNsaWNrIH0sXG4gICAgICB7IFtjbGFzc2VzLmRlbGV0YWJsZV06IG9uRGVsZXRlIH0sXG4gICAgICBjbGFzc05hbWVQcm9wLFxuICAgICk7XG5cbiAgICBsZXQgZGVsZXRlSWNvbiA9IG51bGw7XG4gICAgaWYgKG9uRGVsZXRlKSB7XG4gICAgICBkZWxldGVJY29uID1cbiAgICAgICAgZGVsZXRlSWNvblByb3AgJiYgUmVhY3QuaXNWYWxpZEVsZW1lbnQoZGVsZXRlSWNvblByb3ApID8gKFxuICAgICAgICAgIFJlYWN0LmNsb25lRWxlbWVudChkZWxldGVJY29uUHJvcCwge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGRlbGV0ZUljb25Qcm9wLnByb3BzLmNsYXNzTmFtZSwgY2xhc3Nlcy5kZWxldGVJY29uKSxcbiAgICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlRGVsZXRlSWNvbkNsaWNrLFxuICAgICAgICAgIH0pXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPENhbmNlbEljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmRlbGV0ZUljb259IG9uQ2xpY2s9e3RoaXMuaGFuZGxlRGVsZXRlSWNvbkNsaWNrfSAvPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGxldCBhdmF0YXIgPSBudWxsO1xuICAgIGlmIChhdmF0YXJQcm9wICYmIFJlYWN0LmlzVmFsaWRFbGVtZW50KGF2YXRhclByb3ApKSB7XG4gICAgICBhdmF0YXIgPSBSZWFjdC5jbG9uZUVsZW1lbnQoYXZhdGFyUHJvcCwge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xhc3Nlcy5hdmF0YXIsIGF2YXRhclByb3AucHJvcHMuY2xhc3NOYW1lKSxcbiAgICAgICAgY2hpbGRyZW5DbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xhc3Nlcy5hdmF0YXJDaGlsZHJlbiwgYXZhdGFyUHJvcC5wcm9wcy5jaGlsZHJlbkNsYXNzTmFtZSksXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgdGFiSW5kZXggPSB0YWJJbmRleFByb3A7XG5cbiAgICBpZiAoIXRhYkluZGV4KSB7XG4gICAgICB0YWJJbmRleCA9IG9uQ2xpY2sgfHwgb25EZWxldGUgPyAwIDogLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICB0YWJJbmRleD17dGFiSW5kZXh9XG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlEb3dufVxuICAgICAgICByZWY9e25vZGUgPT4ge1xuICAgICAgICAgIHRoaXMuY2hpcFJlZiA9IG5vZGU7XG4gICAgICAgIH19XG4gICAgICAgIHsuLi5vdGhlcn1cbiAgICAgID5cbiAgICAgICAge2F2YXRhcn1cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmxhYmVsfT57bGFiZWx9PC9zcGFuPlxuICAgICAgICB7ZGVsZXRlSWNvbn1cbiAgICAgIDwvQ29tcG9uZW50PlxuICAgICk7XG4gIH1cbn1cblxuQ2hpcC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBBdmF0YXIgZWxlbWVudC5cbiAgICovXG4gIGF2YXRhcjogUHJvcFR5cGVzLmVsZW1lbnQsXG4gIC8qKlxuICAgKiBVc2VmdWwgdG8gZXh0ZW5kIHRoZSBzdHlsZSBhcHBsaWVkIHRvIGNvbXBvbmVudHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSByb290IG5vZGUuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBET00gZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IGRlbGV0ZSBpY29uIGVsZW1lbnQuIFNob3duIG9ubHkgaWYgYG9uRGVsZXRlYCBpcyBzZXQuXG4gICAqL1xuICBkZWxldGVJY29uOiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBsYWJlbC5cbiAgICovXG4gIGxhYmVsOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgd2hlbiB0aGUgZGVsZXRlIGljb24gaXMgY2xpY2tlZC5cbiAgICogSWYgc2V0LCB0aGUgZGVsZXRlIGljb24gd2lsbCBiZSBzaG93bi5cbiAgICovXG4gIG9uRGVsZXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICB0YWJJbmRleDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxufTtcblxuQ2hpcC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbXBvbmVudDogJ2RpdicsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywgeyBuYW1lOiAnTXVpQ2hpcCcgfSkoQ2hpcCk7XG4iXX0=

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setStatic = __webpack_require__(381);

var _setStatic2 = _interopRequireDefault(_setStatic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setDisplayName = function setDisplayName(displayName) {
  return (0, _setStatic2.default)('displayName', displayName);
};

exports.default = setDisplayName;

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _shouldUpdate = __webpack_require__(380);

var _shouldUpdate2 = _interopRequireDefault(_shouldUpdate);

var _shallowEqual = __webpack_require__(382);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _setDisplayName = __webpack_require__(377);

var _setDisplayName2 = _interopRequireDefault(_setDisplayName);

var _wrapDisplayName = __webpack_require__(35);

var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pure = function pure(BaseComponent) {
  var hoc = (0, _shouldUpdate2.default)(function (props, nextProps) {
    return !(0, _shallowEqual2.default)(props, nextProps);
  });

  if (process.env.NODE_ENV !== 'production') {
    return (0, _setDisplayName2.default)((0, _wrapDisplayName2.default)(BaseComponent, 'pure'))(hoc(BaseComponent));
  }

  return hoc(BaseComponent);
};

exports.default = pure;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _react = __webpack_require__(2);

var _setDisplayName = __webpack_require__(377);

var _setDisplayName2 = _interopRequireDefault(_setDisplayName);

var _wrapDisplayName = __webpack_require__(35);

var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var shouldUpdate = function shouldUpdate(test) {
  return function (BaseComponent) {
    var factory = (0, _react.createFactory)(BaseComponent);

    var ShouldUpdate = function (_Component) {
      _inherits(ShouldUpdate, _Component);

      function ShouldUpdate() {
        _classCallCheck(this, ShouldUpdate);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
      }

      ShouldUpdate.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return test(this.props, nextProps);
      };

      ShouldUpdate.prototype.render = function render() {
        return factory(this.props);
      };

      return ShouldUpdate;
    }(_react.Component);

    if (process.env.NODE_ENV !== 'production') {
      return (0, _setDisplayName2.default)((0, _wrapDisplayName2.default)(BaseComponent, 'shouldUpdate'))(ShouldUpdate);
    }
    return ShouldUpdate;
  };
};

exports.default = shouldUpdate;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var setStatic = function setStatic(key, value) {
  return function (BaseComponent) {
    /* eslint-disable no-param-reassign */
    BaseComponent[key] = value;
    /* eslint-enable no-param-reassign */
    return BaseComponent;
  };
};

exports.default = setStatic;

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _shallowEqual = __webpack_require__(104);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _shallowEqual2.default;

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(378);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(98);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore - internal component.
 */
var Cancel = function Cancel(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z' })
  );
};
Cancel = (0, _pure2.default)(Cancel);
Cancel.muiName = 'SvgIcon';

exports.default = Cancel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcaW50ZXJuYWxcXHN2Zy1pY29uc1xcQ2FuY2VsLmpzIl0sIm5hbWVzIjpbIkNhbmNlbCIsInByb3BzIiwibXVpTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTs7O0FBR0EsSUFBSUEsU0FBUztBQUFBLFNBQ1g7QUFBQTtBQUFhQyxTQUFiO0FBQ0UsNENBQU0sR0FBRSxpTEFBUjtBQURGLEdBRFc7QUFBQSxDQUFiO0FBS0FELFNBQVMsb0JBQUtBLE1BQUwsQ0FBVDtBQUNBQSxPQUFPRSxPQUFQLEdBQWlCLFNBQWpCOztrQkFFZUYsTSIsImZpbGUiOiJDYW5jZWwuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvcm1jcXVlbi9zbHQtdWkvbWF0ZXJpYWwtdWkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHB1cmUgZnJvbSAncmVjb21wb3NlL3B1cmUnO1xuaW1wb3J0IFN2Z0ljb24gZnJvbSAnLi4vLi4vU3ZnSWNvbic7XG5cbi8qKlxuICogQGlnbm9yZSAtIGludGVybmFsIGNvbXBvbmVudC5cbiAqL1xubGV0IENhbmNlbCA9IHByb3BzID0+IChcbiAgPFN2Z0ljb24gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTEyIDJDNi40NyAyIDIgNi40NyAyIDEyczQuNDcgMTAgMTAgMTAgMTAtNC40NyAxMC0xMFMxNy41MyAyIDEyIDJ6bTUgMTMuNTlMMTUuNTkgMTcgMTIgMTMuNDEgOC40MSAxNyA3IDE1LjU5IDEwLjU5IDEyIDcgOC40MSA4LjQxIDcgMTIgMTAuNTkgMTUuNTkgNyAxNyA4LjQxIDEzLjQxIDEyIDE3IDE1LjU5elwiIC8+XG4gIDwvU3ZnSWNvbj5cbik7XG5DYW5jZWwgPSBwdXJlKENhbmNlbCk7XG5DYW5jZWwubXVpTmFtZSA9ICdTdmdJY29uJztcblxuZXhwb3J0IGRlZmF1bHQgQ2FuY2VsO1xuIl19

/***/ })

});