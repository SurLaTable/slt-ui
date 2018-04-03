webpackJsonpmaterial_ui([60],{

/***/ 345:
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

var _warning = __webpack_require__(3);

var _warning2 = _interopRequireDefault(_warning);

var _withStyles = __webpack_require__(18);

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      width: 36,
      height: 36,
      fontSize: theme.typography.pxToRem(18),
      marginRight: 4
    },
    icon: {
      width: 20,
      height: 20,
      fontSize: theme.typography.pxToRem(20)
    }
  };
};

/**
 * It's a simple wrapper to apply the `dense` mode styles to `Avatar`.
 */
function ListItemAvatar(props, context) {
  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      other = _objectWithoutProperties(props, ['children', 'classes', 'className']);

  if (context.dense === undefined) {
    (0, _warning2.default)(false, 'Material-UI: <ListItemAvatar> is a simple wrapper to apply the dense styles\n      to <Avatar>. You do not need it unless you are controlling the <List> dense property.');
    return props.children;
  }

  return _react2.default.cloneElement(children, _extends({
    className: (0, _classnames2.default)(_defineProperty({}, classes.root, context.dense), classNameProp, children.props.className),
    childrenClassName: (0, _classnames2.default)(_defineProperty({}, classes.icon, context.dense), children.props.childrenClassName)
  }, other));
}

ListItemAvatar.propTypes = {
  /**
   * The content of the component, normally `Avatar`.
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

ListItemAvatar.contextTypes = {
  dense: _propTypes2.default.bool
};

ListItemAvatar.muiName = 'ListItemAvatar';

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiListItemAvatar' })(ListItemAvatar);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcTGlzdFxcTGlzdEl0ZW1BdmF0YXIuanMiXSwibmFtZXMiOlsic3R5bGVzIiwicm9vdCIsIndpZHRoIiwiaGVpZ2h0IiwiZm9udFNpemUiLCJ0aGVtZSIsInR5cG9ncmFwaHkiLCJweFRvUmVtIiwibWFyZ2luUmlnaHQiLCJpY29uIiwiTGlzdEl0ZW1BdmF0YXIiLCJwcm9wcyIsImNvbnRleHQiLCJjaGlsZHJlbiIsImNsYXNzZXMiLCJjbGFzc05hbWVQcm9wIiwiY2xhc3NOYW1lIiwib3RoZXIiLCJkZW5zZSIsInVuZGVmaW5lZCIsImNsb25lRWxlbWVudCIsImNoaWxkcmVuQ2xhc3NOYW1lIiwicHJvcFR5cGVzIiwiZWxlbWVudCIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJzdHJpbmciLCJjb250ZXh0VHlwZXMiLCJib29sIiwibXVpTmFtZSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSwwQkFBUyxTQUFUQSxNQUFTO0FBQUEsU0FBVTtBQUM5QkMsVUFBTTtBQUNKQyxhQUFPLEVBREg7QUFFSkMsY0FBUSxFQUZKO0FBR0pDLGdCQUFVQyxNQUFNQyxVQUFOLENBQWlCQyxPQUFqQixDQUF5QixFQUF6QixDQUhOO0FBSUpDLG1CQUFhO0FBSlQsS0FEd0I7QUFPOUJDLFVBQU07QUFDSlAsYUFBTyxFQURIO0FBRUpDLGNBQVEsRUFGSjtBQUdKQyxnQkFBVUMsTUFBTUMsVUFBTixDQUFpQkMsT0FBakIsQ0FBeUIsRUFBekI7QUFITjtBQVB3QixHQUFWO0FBQUEsQ0FBZjs7QUFjUDs7O0FBR0EsU0FBU0csY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0JDLE9BQS9CLEVBQXdDO0FBQUEsTUFDOUJDLFFBRDhCLEdBQzRCRixLQUQ1QixDQUM5QkUsUUFEOEI7QUFBQSxNQUNwQkMsT0FEb0IsR0FDNEJILEtBRDVCLENBQ3BCRyxPQURvQjtBQUFBLE1BQ0FDLGFBREEsR0FDNEJKLEtBRDVCLENBQ1hLLFNBRFc7QUFBQSxNQUNrQkMsS0FEbEIsNEJBQzRCTixLQUQ1Qjs7QUFHdEMsTUFBSUMsUUFBUU0sS0FBUixLQUFrQkMsU0FBdEIsRUFBaUM7QUFDL0IsMkJBQ0UsS0FERjtBQUtBLFdBQU9SLE1BQU1FLFFBQWI7QUFDRDs7QUFFRCxTQUFPLGdCQUFNTyxZQUFOLENBQW1CUCxRQUFuQjtBQUNMRyxlQUFXLDhDQUNORixRQUFRYixJQURGLEVBQ1NXLFFBQVFNLEtBRGpCLEdBRVRILGFBRlMsRUFHVEYsU0FBU0YsS0FBVCxDQUFlSyxTQUhOLENBRE47QUFNTEssdUJBQW1CLDhDQUNkUCxRQUFRTCxJQURNLEVBQ0NHLFFBQVFNLEtBRFQsR0FFakJMLFNBQVNGLEtBQVQsQ0FBZVUsaUJBRkU7QUFOZCxLQVVGSixLQVZFLEVBQVA7QUFZRDs7QUFFRFAsZUFBZVksU0FBZixHQUEyQjtBQUN6Qjs7O0FBR0FULFlBQVUsb0JBQVVVLE9BQVYsQ0FBa0JDLFVBSkg7QUFLekI7OztBQUdBVixXQUFTLG9CQUFVVyxNQUFWLENBQWlCRCxVQVJEO0FBU3pCOzs7QUFHQVIsYUFBVyxvQkFBVVU7QUFaSSxDQUEzQjs7QUFlQWhCLGVBQWVpQixZQUFmLEdBQThCO0FBQzVCVCxTQUFPLG9CQUFVVTtBQURXLENBQTlCOztBQUlBbEIsZUFBZW1CLE9BQWYsR0FBeUIsZ0JBQXpCOztrQkFFZSwwQkFBVzdCLE1BQVgsRUFBbUIsRUFBRThCLE1BQU0sbUJBQVIsRUFBbkIsRUFBa0RwQixjQUFsRCxDIiwiZmlsZSI6Ikxpc3RJdGVtQXZhdGFyLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3JtY3F1ZW4vc2x0LXVpL21hdGVyaWFsLXVpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3YXJuaW5nIGZyb20gJ3dhcm5pbmcnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIHdpZHRoOiAzNixcbiAgICBoZWlnaHQ6IDM2LFxuICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LnB4VG9SZW0oMTgpLFxuICAgIG1hcmdpblJpZ2h0OiA0LFxuICB9LFxuICBpY29uOiB7XG4gICAgd2lkdGg6IDIwLFxuICAgIGhlaWdodDogMjAsXG4gICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgyMCksXG4gIH0sXG59KTtcblxuLyoqXG4gKiBJdCdzIGEgc2ltcGxlIHdyYXBwZXIgdG8gYXBwbHkgdGhlIGBkZW5zZWAgbW9kZSBzdHlsZXMgdG8gYEF2YXRhcmAuXG4gKi9cbmZ1bmN0aW9uIExpc3RJdGVtQXZhdGFyKHByb3BzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGNsYXNzZXMsIGNsYXNzTmFtZTogY2xhc3NOYW1lUHJvcCwgLi4ub3RoZXIgfSA9IHByb3BzO1xuXG4gIGlmIChjb250ZXh0LmRlbnNlID09PSB1bmRlZmluZWQpIHtcbiAgICB3YXJuaW5nKFxuICAgICAgZmFsc2UsXG4gICAgICBgTWF0ZXJpYWwtVUk6IDxMaXN0SXRlbUF2YXRhcj4gaXMgYSBzaW1wbGUgd3JhcHBlciB0byBhcHBseSB0aGUgZGVuc2Ugc3R5bGVzXG4gICAgICB0byA8QXZhdGFyPi4gWW91IGRvIG5vdCBuZWVkIGl0IHVubGVzcyB5b3UgYXJlIGNvbnRyb2xsaW5nIHRoZSA8TGlzdD4gZGVuc2UgcHJvcGVydHkuYCxcbiAgICApO1xuICAgIHJldHVybiBwcm9wcy5jaGlsZHJlbjtcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoXG4gICAgICB7IFtjbGFzc2VzLnJvb3RdOiBjb250ZXh0LmRlbnNlIH0sXG4gICAgICBjbGFzc05hbWVQcm9wLFxuICAgICAgY2hpbGRyZW4ucHJvcHMuY2xhc3NOYW1lLFxuICAgICksXG4gICAgY2hpbGRyZW5DbGFzc05hbWU6IGNsYXNzTmFtZXMoXG4gICAgICB7IFtjbGFzc2VzLmljb25dOiBjb250ZXh0LmRlbnNlIH0sXG4gICAgICBjaGlsZHJlbi5wcm9wcy5jaGlsZHJlbkNsYXNzTmFtZSxcbiAgICApLFxuICAgIC4uLm90aGVyLFxuICB9KTtcbn1cblxuTGlzdEl0ZW1BdmF0YXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudCwgbm9ybWFsbHkgYEF2YXRhcmAuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIFVzZWZ1bCB0byBleHRlbmQgdGhlIHN0eWxlIGFwcGxpZWQgdG8gY29tcG9uZW50cy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbkxpc3RJdGVtQXZhdGFyLmNvbnRleHRUeXBlcyA9IHtcbiAgZGVuc2U6IFByb3BUeXBlcy5ib29sLFxufTtcblxuTGlzdEl0ZW1BdmF0YXIubXVpTmFtZSA9ICdMaXN0SXRlbUF2YXRhcic7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7IG5hbWU6ICdNdWlMaXN0SXRlbUF2YXRhcicgfSkoTGlzdEl0ZW1BdmF0YXIpO1xuIl19

/***/ })

});