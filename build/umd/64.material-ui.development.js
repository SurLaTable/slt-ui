webpackJsonpmaterial_ui([64],{

/***/ 337:
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      userSelect: 'none',
      fontSize: 24,
      width: '1em',
      height: '1em',
      // Chrome fix for https://bugs.chromium.org/p/chromium/issues/detail?id=820541
      // To remove at some point.
      overflow: 'hidden'
    },
    colorPrimary: {
      color: theme.palette.primary.main
    },
    colorSecondary: {
      color: theme.palette.secondary.main
    },
    colorAction: {
      color: theme.palette.action.active
    },
    colorDisabled: {
      color: theme.palette.action.disabled
    },
    colorError: {
      color: theme.palette.error.main
    }
  };
};

function Icon(props) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      color = props.color,
      other = _objectWithoutProperties(props, ['children', 'classes', 'className', 'color']);

  return _react2.default.createElement(
    'span',
    _extends({
      className: (0, _classnames2.default)('material-icons', classes.root, _defineProperty({}, classes['color' + (0, _helpers.capitalize)(color)], color !== 'inherit'), className),
      'aria-hidden': 'true'
    }, other),
    children
  );
}

Icon.propTypes = {
  /**
   * The name of the icon font ligature.
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
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes2.default.oneOf(['inherit', 'secondary', 'action', 'disabled', 'error', 'primary'])
};

Icon.defaultProps = {
  color: 'inherit'
};

Icon.muiName = 'Icon';

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiIcon' })(Icon);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcSWNvblxcSWNvbi5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJyb290IiwidXNlclNlbGVjdCIsImZvbnRTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJvdmVyZmxvdyIsImNvbG9yUHJpbWFyeSIsImNvbG9yIiwidGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJjb2xvclNlY29uZGFyeSIsInNlY29uZGFyeSIsImNvbG9yQWN0aW9uIiwiYWN0aW9uIiwiYWN0aXZlIiwiY29sb3JEaXNhYmxlZCIsImRpc2FibGVkIiwiY29sb3JFcnJvciIsImVycm9yIiwiSWNvbiIsInByb3BzIiwiY2hpbGRyZW4iLCJjbGFzc2VzIiwiY2xhc3NOYW1lIiwib3RoZXIiLCJwcm9wVHlwZXMiLCJub2RlIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwibXVpTmFtZSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRU8sSUFBTUEsMEJBQVMsU0FBVEEsTUFBUztBQUFBLFNBQVU7QUFDOUJDLFVBQU07QUFDSkMsa0JBQVksTUFEUjtBQUVKQyxnQkFBVSxFQUZOO0FBR0pDLGFBQU8sS0FISDtBQUlKQyxjQUFRLEtBSko7QUFLSjtBQUNBO0FBQ0FDLGdCQUFVO0FBUE4sS0FEd0I7QUFVOUJDLGtCQUFjO0FBQ1pDLGFBQU9DLE1BQU1DLE9BQU4sQ0FBY0MsT0FBZCxDQUFzQkM7QUFEakIsS0FWZ0I7QUFhOUJDLG9CQUFnQjtBQUNkTCxhQUFPQyxNQUFNQyxPQUFOLENBQWNJLFNBQWQsQ0FBd0JGO0FBRGpCLEtBYmM7QUFnQjlCRyxpQkFBYTtBQUNYUCxhQUFPQyxNQUFNQyxPQUFOLENBQWNNLE1BQWQsQ0FBcUJDO0FBRGpCLEtBaEJpQjtBQW1COUJDLG1CQUFlO0FBQ2JWLGFBQU9DLE1BQU1DLE9BQU4sQ0FBY00sTUFBZCxDQUFxQkc7QUFEZixLQW5CZTtBQXNCOUJDLGdCQUFZO0FBQ1ZaLGFBQU9DLE1BQU1DLE9BQU4sQ0FBY1csS0FBZCxDQUFvQlQ7QUFEakI7QUF0QmtCLEdBQVY7QUFBQSxDQUFmOztBQTJCUCxTQUFTVSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQSxNQUNYQyxRQURXLEdBQ3VDRCxLQUR2QyxDQUNYQyxRQURXO0FBQUEsTUFDREMsT0FEQyxHQUN1Q0YsS0FEdkMsQ0FDREUsT0FEQztBQUFBLE1BQ1FDLFNBRFIsR0FDdUNILEtBRHZDLENBQ1FHLFNBRFI7QUFBQSxNQUNtQmxCLEtBRG5CLEdBQ3VDZSxLQUR2QyxDQUNtQmYsS0FEbkI7QUFBQSxNQUM2Qm1CLEtBRDdCLDRCQUN1Q0osS0FEdkM7O0FBR25CLFNBQ0U7QUFBQTtBQUFBO0FBQ0UsaUJBQVcsMEJBQ1QsZ0JBRFMsRUFFVEUsUUFBUXhCLElBRkMsc0JBSU53QixrQkFBZ0IseUJBQVdqQixLQUFYLENBQWhCLENBSk0sRUFJaUNBLFVBQVUsU0FKM0MsR0FNVGtCLFNBTlMsQ0FEYjtBQVNFLHFCQUFZO0FBVGQsT0FVTUMsS0FWTjtBQVlHSDtBQVpILEdBREY7QUFnQkQ7O0FBRURGLEtBQUtNLFNBQUwsR0FBaUI7QUFDZjs7O0FBR0FKLFlBQVUsb0JBQVVLLElBSkw7QUFLZjs7O0FBR0FKLFdBQVMsb0JBQVVLLE1BQVYsQ0FBaUJDLFVBUlg7QUFTZjs7O0FBR0FMLGFBQVcsb0JBQVVNLE1BWk47QUFhZjs7O0FBR0F4QixTQUFPLG9CQUFVeUIsS0FBVixDQUFnQixDQUFDLFNBQUQsRUFBWSxXQUFaLEVBQXlCLFFBQXpCLEVBQW1DLFVBQW5DLEVBQStDLE9BQS9DLEVBQXdELFNBQXhELENBQWhCO0FBaEJRLENBQWpCOztBQW1CQVgsS0FBS1ksWUFBTCxHQUFvQjtBQUNsQjFCLFNBQU87QUFEVyxDQUFwQjs7QUFJQWMsS0FBS2EsT0FBTCxHQUFlLE1BQWY7O2tCQUVlLDBCQUFXbkMsTUFBWCxFQUFtQixFQUFFb0MsTUFBTSxTQUFSLEVBQW5CLEVBQXdDZCxJQUF4QyxDIiwiZmlsZSI6Ikljb24uanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvcm1jcXVlbi9zbHQtdWkvbWF0ZXJpYWwtdWkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcnMnO1xuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICBmb250U2l6ZTogMjQsXG4gICAgd2lkdGg6ICcxZW0nLFxuICAgIGhlaWdodDogJzFlbScsXG4gICAgLy8gQ2hyb21lIGZpeCBmb3IgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9ODIwNTQxXG4gICAgLy8gVG8gcmVtb3ZlIGF0IHNvbWUgcG9pbnQuXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB9LFxuICBjb2xvclByaW1hcnk6IHtcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gIH0sXG4gIGNvbG9yU2Vjb25kYXJ5OiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXG4gIH0sXG4gIGNvbG9yQWN0aW9uOiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuYWN0aW9uLmFjdGl2ZSxcbiAgfSxcbiAgY29sb3JEaXNhYmxlZDoge1xuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmFjdGlvbi5kaXNhYmxlZCxcbiAgfSxcbiAgY29sb3JFcnJvcjoge1xuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmVycm9yLm1haW4sXG4gIH0sXG59KTtcblxuZnVuY3Rpb24gSWNvbihwcm9wcykge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc2VzLCBjbGFzc05hbWUsIGNvbG9yLCAuLi5vdGhlciB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8c3BhblxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAnbWF0ZXJpYWwtaWNvbnMnLFxuICAgICAgICBjbGFzc2VzLnJvb3QsXG4gICAgICAgIHtcbiAgICAgICAgICBbY2xhc3Nlc1tgY29sb3Ike2NhcGl0YWxpemUoY29sb3IpfWBdXTogY29sb3IgIT09ICdpbmhlcml0JyxcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICB7Li4ub3RoZXJ9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvc3Bhbj5cbiAgKTtcbn1cblxuSWNvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgaWNvbiBmb250IGxpZ2F0dXJlLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICogVXNlZnVsIHRvIGV4dGVuZCB0aGUgc3R5bGUgYXBwbGllZCB0byBjb21wb25lbnRzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBjb21wb25lbnQuIEl0IHN1cHBvcnRzIHRob3NlIHRoZW1lIGNvbG9ycyB0aGF0IG1ha2Ugc2Vuc2UgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ2luaGVyaXQnLCAnc2Vjb25kYXJ5JywgJ2FjdGlvbicsICdkaXNhYmxlZCcsICdlcnJvcicsICdwcmltYXJ5J10pLFxufTtcblxuSWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbG9yOiAnaW5oZXJpdCcsXG59O1xuXG5JY29uLm11aU5hbWUgPSAnSWNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7IG5hbWU6ICdNdWlJY29uJyB9KShJY29uKTtcbiJdfQ==

/***/ })

});