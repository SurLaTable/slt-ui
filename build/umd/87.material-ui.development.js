webpackJsonpmaterial_ui([87],{

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

/***/ })

});