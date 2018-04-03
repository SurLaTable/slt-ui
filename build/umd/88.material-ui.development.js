webpackJsonpmaterial_ui([88],{

/***/ 308:
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

var _helpers = __webpack_require__(97);

var _Paper = __webpack_require__(102);

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // @inheritedComponent Paper

var styles = exports.styles = function styles(theme) {
  var backgroundColorDefault = theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[900];

  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      boxSizing: 'border-box', // Prevent padding issue with the Modal and fixed positioned AppBar.
      zIndex: theme.zIndex.appBar,
      flexShrink: 0
    },
    positionFixed: {
      position: 'fixed',
      top: 0,
      left: 'auto',
      right: 0
    },
    positionAbsolute: {
      position: 'absolute',
      top: 0,
      left: 'auto',
      right: 0
    },
    positionSticky: {
      position: 'sticky',
      top: 0,
      left: 'auto',
      right: 0
    },
    positionStatic: {
      position: 'static'
    },
    colorDefault: {
      backgroundColor: backgroundColorDefault,
      color: theme.palette.getContrastText(backgroundColorDefault)
    },
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    }
  };
};

function AppBar(props) {
  var _classNames;

  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      color = props.color,
      position = props.position,
      other = _objectWithoutProperties(props, ['children', 'classes', 'className', 'color', 'position']);

  var className = (0, _classnames2.default)(classes.root, classes['position' + (0, _helpers.capitalize)(position)], (_classNames = {}, _defineProperty(_classNames, classes['color' + (0, _helpers.capitalize)(color)], color !== 'inherit'), _defineProperty(_classNames, 'mui-fixed', position === 'fixed'), _classNames), classNameProp);

  return _react2.default.createElement(
    _Paper2.default,
    _extends({ square: true, component: 'header', elevation: 4, className: className }, other),
    children
  );
}

AppBar.propTypes = {
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
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes2.default.oneOf(['inherit', 'primary', 'secondary', 'default']),
  /**
   * The positioning type. The behavior of the different options is described
   * [here](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning).
   * Note: `sticky` is not universally supported and will fall back to `static` when unavailable.
   */
  position: _propTypes2.default.oneOf(['fixed', 'absolute', 'sticky', 'static'])
};

AppBar.defaultProps = {
  color: 'primary',
  position: 'fixed'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiAppBar' })(AppBar);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcQXBwQmFyXFxBcHBCYXIuanMiXSwibmFtZXMiOlsic3R5bGVzIiwiYmFja2dyb3VuZENvbG9yRGVmYXVsdCIsInRoZW1lIiwicGFsZXR0ZSIsInR5cGUiLCJncmV5Iiwicm9vdCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwid2lkdGgiLCJib3hTaXppbmciLCJ6SW5kZXgiLCJhcHBCYXIiLCJmbGV4U2hyaW5rIiwicG9zaXRpb25GaXhlZCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInJpZ2h0IiwicG9zaXRpb25BYnNvbHV0ZSIsInBvc2l0aW9uU3RpY2t5IiwicG9zaXRpb25TdGF0aWMiLCJjb2xvckRlZmF1bHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImdldENvbnRyYXN0VGV4dCIsImNvbG9yUHJpbWFyeSIsInByaW1hcnkiLCJtYWluIiwiY29udHJhc3RUZXh0IiwiY29sb3JTZWNvbmRhcnkiLCJzZWNvbmRhcnkiLCJBcHBCYXIiLCJwcm9wcyIsImNoaWxkcmVuIiwiY2xhc3NlcyIsImNsYXNzTmFtZVByb3AiLCJjbGFzc05hbWUiLCJvdGhlciIsInByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwib2JqZWN0Iiwic3RyaW5nIiwib25lT2YiLCJkZWZhdWx0UHJvcHMiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs2TkFQQTs7QUFTTyxJQUFNQSwwQkFBUyxTQUFUQSxNQUFTLFFBQVM7QUFDN0IsTUFBTUMseUJBQ0pDLE1BQU1DLE9BQU4sQ0FBY0MsSUFBZCxLQUF1QixPQUF2QixHQUFpQ0YsTUFBTUMsT0FBTixDQUFjRSxJQUFkLENBQW1CLEdBQW5CLENBQWpDLEdBQTJESCxNQUFNQyxPQUFOLENBQWNFLElBQWQsQ0FBbUIsR0FBbkIsQ0FEN0Q7O0FBR0EsU0FBTztBQUNMQyxVQUFNO0FBQ0pDLGVBQVMsTUFETDtBQUVK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LE1BQTFDLEMiLCJmaWxlIjoiQXBwQmFyLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3JtY3F1ZW4vc2x0LXVpL21hdGVyaWFsLXVpIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGluaGVyaXRlZENvbXBvbmVudCBQYXBlclxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcnMnO1xuaW1wb3J0IFBhcGVyIGZyb20gJy4uL1BhcGVyJztcblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IHRoZW1lID0+IHtcbiAgY29uc3QgYmFja2dyb3VuZENvbG9yRGVmYXVsdCA9XG4gICAgdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gdGhlbWUucGFsZXR0ZS5ncmV5WzEwMF0gOiB0aGVtZS5wYWxldHRlLmdyZXlbOTAwXTtcblxuICByZXR1cm4ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLCAvLyBQcmV2ZW50IHBhZGRpbmcgaXNzdWUgd2l0aCB0aGUgTW9kYWwgYW5kIGZpeGVkIHBvc2l0aW9uZWQgQXBwQmFyLlxuICAgICAgekluZGV4OiB0aGVtZS56SW5kZXguYXBwQmFyLFxuICAgICAgZmxleFNocmluazogMCxcbiAgICB9LFxuICAgIHBvc2l0aW9uRml4ZWQ6IHtcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogJ2F1dG8nLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgfSxcbiAgICBwb3NpdGlvbkFic29sdXRlOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6ICdhdXRvJyxcbiAgICAgIHJpZ2h0OiAwLFxuICAgIH0sXG4gICAgcG9zaXRpb25TdGlja3k6IHtcbiAgICAgIHBvc2l0aW9uOiAnc3RpY2t5JyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6ICdhdXRvJyxcbiAgICAgIHJpZ2h0OiAwLFxuICAgIH0sXG4gICAgcG9zaXRpb25TdGF0aWM6IHtcbiAgICAgIHBvc2l0aW9uOiAnc3RhdGljJyxcbiAgICB9LFxuICAgIGNvbG9yRGVmYXVsdDoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3JEZWZhdWx0LFxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZ2V0Q29udHJhc3RUZXh0KGJhY2tncm91bmRDb2xvckRlZmF1bHQpLFxuICAgIH0sXG4gICAgY29sb3JQcmltYXJ5OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5jb250cmFzdFRleHQsXG4gICAgfSxcbiAgICBjb2xvclNlY29uZGFyeToge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmNvbnRyYXN0VGV4dCxcbiAgICB9LFxuICB9O1xufTtcblxuZnVuY3Rpb24gQXBwQmFyKHByb3BzKSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGNsYXNzZXMsIGNsYXNzTmFtZTogY2xhc3NOYW1lUHJvcCwgY29sb3IsIHBvc2l0aW9uLCAuLi5vdGhlciB9ID0gcHJvcHM7XG5cbiAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lcyhcbiAgICBjbGFzc2VzLnJvb3QsXG4gICAgY2xhc3Nlc1tgcG9zaXRpb24ke2NhcGl0YWxpemUocG9zaXRpb24pfWBdLFxuICAgIHtcbiAgICAgIFtjbGFzc2VzW2Bjb2xvciR7Y2FwaXRhbGl6ZShjb2xvcil9YF1dOiBjb2xvciAhPT0gJ2luaGVyaXQnLFxuICAgICAgJ211aS1maXhlZCc6IHBvc2l0aW9uID09PSAnZml4ZWQnLCAvLyBVc2VmdWwgZm9yIHRoZSBEaWFsb2dcbiAgICB9LFxuICAgIGNsYXNzTmFtZVByb3AsXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFwZXIgc3F1YXJlIGNvbXBvbmVudD1cImhlYWRlclwiIGVsZXZhdGlvbj17NH0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IHsuLi5vdGhlcn0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9QYXBlcj5cbiAgKTtcbn1cblxuQXBwQmFyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIFVzZWZ1bCB0byBleHRlbmQgdGhlIHN0eWxlIGFwcGxpZWQgdG8gY29tcG9uZW50cy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgY29tcG9uZW50LiBJdCBzdXBwb3J0cyB0aG9zZSB0aGVtZSBjb2xvcnMgdGhhdCBtYWtlIHNlbnNlIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydpbmhlcml0JywgJ3ByaW1hcnknLCAnc2Vjb25kYXJ5JywgJ2RlZmF1bHQnXSksXG4gIC8qKlxuICAgKiBUaGUgcG9zaXRpb25pbmcgdHlwZS4gVGhlIGJlaGF2aW9yIG9mIHRoZSBkaWZmZXJlbnQgb3B0aW9ucyBpcyBkZXNjcmliZWRcbiAgICogW2hlcmVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvTGVhcm4vQ1NTL0NTU19sYXlvdXQvUG9zaXRpb25pbmcpLlxuICAgKiBOb3RlOiBgc3RpY2t5YCBpcyBub3QgdW5pdmVyc2FsbHkgc3VwcG9ydGVkIGFuZCB3aWxsIGZhbGwgYmFjayB0byBgc3RhdGljYCB3aGVuIHVuYXZhaWxhYmxlLlxuICAgKi9cbiAgcG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbJ2ZpeGVkJywgJ2Fic29sdXRlJywgJ3N0aWNreScsICdzdGF0aWMnXSksXG59O1xuXG5BcHBCYXIuZGVmYXVsdFByb3BzID0ge1xuICBjb2xvcjogJ3ByaW1hcnknLFxuICBwb3NpdGlvbjogJ2ZpeGVkJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7IG5hbWU6ICdNdWlBcHBCYXInIH0pKEFwcEJhcik7XG4iXX0=

/***/ })

});