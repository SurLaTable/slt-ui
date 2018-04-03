webpackJsonpmaterial_ui([50],{

/***/ 321:
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
      display: 'inline-block',
      fill: 'currentColor',
      flexShrink: 0,
      transition: theme.transitions.create('fill', {
        duration: theme.transitions.duration.shorter
      })
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

function SvgIcon(props) {
  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      color = props.color,
      nativeColor = props.nativeColor,
      titleAccess = props.titleAccess,
      viewBox = props.viewBox,
      other = _objectWithoutProperties(props, ['children', 'classes', 'className', 'color', 'nativeColor', 'titleAccess', 'viewBox']);

  var className = (0, _classnames2.default)(classes.root, _defineProperty({}, classes['color' + (0, _helpers.capitalize)(color)], color !== 'inherit'), classNameProp);

  return _react2.default.createElement(
    'svg',
    _extends({
      className: className,
      focusable: 'false',
      viewBox: viewBox,
      color: nativeColor,
      'aria-hidden': titleAccess ? 'false' : 'true'
    }, other),
    titleAccess ? _react2.default.createElement(
      'title',
      null,
      titleAccess
    ) : null,
    children
  );
}

SvgIcon.propTypes = {
  /**
   * Node passed into the SVG element.
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
   * You can use the `nativeColor` property to apply a color attribute to the SVG element.
   */
  color: _propTypes2.default.oneOf(['action', 'disabled', 'error', 'inherit', 'primary', 'secondary']),
  /**
   * Applies a color attribute to the SVG element.
   */
  nativeColor: _propTypes2.default.string,
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: _propTypes2.default.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   */
  viewBox: _propTypes2.default.string
};

SvgIcon.defaultProps = {
  color: 'inherit',
  viewBox: '0 0 24 24'
};

SvgIcon.muiName = 'SvgIcon';

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiSvgIcon' })(SvgIcon);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcU3ZnSWNvblxcU3ZnSWNvbi5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJyb290IiwidXNlclNlbGVjdCIsImZvbnRTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwiZmlsbCIsImZsZXhTaHJpbmsiLCJ0cmFuc2l0aW9uIiwidGhlbWUiLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImR1cmF0aW9uIiwic2hvcnRlciIsImNvbG9yUHJpbWFyeSIsImNvbG9yIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwiY29sb3JTZWNvbmRhcnkiLCJzZWNvbmRhcnkiLCJjb2xvckFjdGlvbiIsImFjdGlvbiIsImFjdGl2ZSIsImNvbG9yRGlzYWJsZWQiLCJkaXNhYmxlZCIsImNvbG9yRXJyb3IiLCJlcnJvciIsIlN2Z0ljb24iLCJwcm9wcyIsImNoaWxkcmVuIiwiY2xhc3NlcyIsImNsYXNzTmFtZVByb3AiLCJjbGFzc05hbWUiLCJuYXRpdmVDb2xvciIsInRpdGxlQWNjZXNzIiwidmlld0JveCIsIm90aGVyIiwicHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJzdHJpbmciLCJvbmVPZiIsImRlZmF1bHRQcm9wcyIsIm11aU5hbWUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVPLElBQU1BLDBCQUFTLFNBQVRBLE1BQVM7QUFBQSxTQUFVO0FBQzlCQyxVQUFNO0FBQ0pDLGtCQUFZLE1BRFI7QUFFSkMsZ0JBQVUsRUFGTjtBQUdKQyxhQUFPLEtBSEg7QUFJSkMsY0FBUSxLQUpKO0FBS0pDLGVBQVMsY0FMTDtBQU1KQyxZQUFNLGNBTkY7QUFPSkMsa0JBQVksQ0FQUjtBQVFKQyxrQkFBWUMsTUFBTUMsV0FBTixDQUFrQkMsTUFBbEIsQ0FBeUIsTUFBekIsRUFBaUM7QUFDM0NDLGtCQUFVSCxNQUFNQyxXQUFOLENBQWtCRSxRQUFsQixDQUEyQkM7QUFETSxPQUFqQztBQVJSLEtBRHdCO0FBYTlCQyxrQkFBYztBQUNaQyxhQUFPTixNQUFNTyxPQUFOLENBQWNDLE9BQWQsQ0FBc0JDO0FBRGpCLEtBYmdCO0FBZ0I5QkMsb0JBQWdCO0FBQ2RKLGFBQU9OLE1BQU1PLE9BQU4sQ0FBY0ksU0FBZCxDQUF3QkY7QUFEakIsS0FoQmM7QUFtQjlCRyxpQkFBYTtBQUNYTixhQUFPTixNQUFNTyxPQUFOLENBQWNNLE1BQWQsQ0FBcUJDO0FBRGpCLEtBbkJpQjtBQXNCOUJDLG1CQUFlO0FBQ2JULGFBQU9OLE1BQU1PLE9BQU4sQ0FBY00sTUFBZCxDQUFxQkc7QUFEZixLQXRCZTtBQXlCOUJDLGdCQUFZO0FBQ1ZYLGFBQU9OLE1BQU1PLE9BQU4sQ0FBY1csS0FBZCxDQUFvQlQ7QUFEakI7QUF6QmtCLEdBQVY7QUFBQSxDQUFmOztBQThCUCxTQUFTVSxPQUFULENBQWlCQyxLQUFqQixFQUF3QjtBQUFBLE1BRXBCQyxRQUZvQixHQVVsQkQsS0FWa0IsQ0FFcEJDLFFBRm9CO0FBQUEsTUFHcEJDLE9BSG9CLEdBVWxCRixLQVZrQixDQUdwQkUsT0FIb0I7QUFBQSxNQUlUQyxhQUpTLEdBVWxCSCxLQVZrQixDQUlwQkksU0FKb0I7QUFBQSxNQUtwQmxCLEtBTG9CLEdBVWxCYyxLQVZrQixDQUtwQmQsS0FMb0I7QUFBQSxNQU1wQm1CLFdBTm9CLEdBVWxCTCxLQVZrQixDQU1wQkssV0FOb0I7QUFBQSxNQU9wQkMsV0FQb0IsR0FVbEJOLEtBVmtCLENBT3BCTSxXQVBvQjtBQUFBLE1BUXBCQyxPQVJvQixHQVVsQlAsS0FWa0IsQ0FRcEJPLE9BUm9CO0FBQUEsTUFTakJDLEtBVGlCLDRCQVVsQlIsS0FWa0I7O0FBWXRCLE1BQU1JLFlBQVksMEJBQ2hCRixRQUFRL0IsSUFEUSxzQkFHYitCLGtCQUFnQix5QkFBV2hCLEtBQVgsQ0FBaEIsQ0FIYSxFQUcwQkEsVUFBVSxTQUhwQyxHQUtoQmlCLGFBTGdCLENBQWxCOztBQVFBLFNBQ0U7QUFBQTtBQUFBO0FBQ0UsaUJBQVdDLFNBRGI7QUFFRSxpQkFBVSxPQUZaO0FBR0UsZUFBU0csT0FIWDtBQUlFLGFBQU9GLFdBSlQ7QUFLRSxxQkFBYUMsY0FBYyxPQUFkLEdBQXdCO0FBTHZDLE9BTU1FLEtBTk47QUFRR0Ysa0JBQWM7QUFBQTtBQUFBO0FBQVFBO0FBQVIsS0FBZCxHQUE2QyxJQVJoRDtBQVNHTDtBQVRILEdBREY7QUFhRDs7QUFFREYsUUFBUVUsU0FBUixHQUFvQjtBQUNsQjs7O0FBR0FSLFlBQVUsb0JBQVVTLElBQVYsQ0FBZUMsVUFKUDtBQUtsQjs7O0FBR0FULFdBQVMsb0JBQVVVLE1BQVYsQ0FBaUJELFVBUlI7QUFTbEI7OztBQUdBUCxhQUFXLG9CQUFVUyxNQVpIO0FBYWxCOzs7O0FBSUEzQixTQUFPLG9CQUFVNEIsS0FBVixDQUFnQixDQUFDLFFBQUQsRUFBVyxVQUFYLEVBQXVCLE9BQXZCLEVBQWdDLFNBQWhDLEVBQTJDLFNBQTNDLEVBQXNELFdBQXRELENBQWhCLENBakJXO0FBa0JsQjs7O0FBR0FULGVBQWEsb0JBQVVRLE1BckJMO0FBc0JsQjs7OztBQUlBUCxlQUFhLG9CQUFVTyxNQTFCTDtBQTJCbEI7Ozs7Ozs7QUFPQU4sV0FBUyxvQkFBVU07QUFsQ0QsQ0FBcEI7O0FBcUNBZCxRQUFRZ0IsWUFBUixHQUF1QjtBQUNyQjdCLFNBQU8sU0FEYztBQUVyQnFCLFdBQVM7QUFGWSxDQUF2Qjs7QUFLQVIsUUFBUWlCLE9BQVIsR0FBa0IsU0FBbEI7O2tCQUVlLDBCQUFXOUMsTUFBWCxFQUFtQixFQUFFK0MsTUFBTSxZQUFSLEVBQW5CLEVBQTJDbEIsT0FBM0MsQyIsImZpbGUiOiJTdmdJY29uLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3JtY3F1ZW4vc2x0LXVpL21hdGVyaWFsLXVpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICcuLi91dGlscy9oZWxwZXJzJztcblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgZm9udFNpemU6IDI0LFxuICAgIHdpZHRoOiAnMWVtJyxcbiAgICBoZWlnaHQ6ICcxZW0nLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdmaWxsJywge1xuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLnNob3J0ZXIsXG4gICAgfSksXG4gIH0sXG4gIGNvbG9yUHJpbWFyeToge1xuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgfSxcbiAgY29sb3JTZWNvbmRhcnk6IHtcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcbiAgfSxcbiAgY29sb3JBY3Rpb246IHtcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5hY3Rpb24uYWN0aXZlLFxuICB9LFxuICBjb2xvckRpc2FibGVkOiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuYWN0aW9uLmRpc2FibGVkLFxuICB9LFxuICBjb2xvckVycm9yOiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpbixcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBTdmdJY29uKHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBjaGlsZHJlbixcbiAgICBjbGFzc2VzLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lUHJvcCxcbiAgICBjb2xvcixcbiAgICBuYXRpdmVDb2xvcixcbiAgICB0aXRsZUFjY2VzcyxcbiAgICB2aWV3Qm94LFxuICAgIC4uLm90aGVyXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc05hbWVzKFxuICAgIGNsYXNzZXMucm9vdCxcbiAgICB7XG4gICAgICBbY2xhc3Nlc1tgY29sb3Ike2NhcGl0YWxpemUoY29sb3IpfWBdXTogY29sb3IgIT09ICdpbmhlcml0JyxcbiAgICB9LFxuICAgIGNsYXNzTmFtZVByb3AsXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICAgIHZpZXdCb3g9e3ZpZXdCb3h9XG4gICAgICBjb2xvcj17bmF0aXZlQ29sb3J9XG4gICAgICBhcmlhLWhpZGRlbj17dGl0bGVBY2Nlc3MgPyAnZmFsc2UnIDogJ3RydWUnfVxuICAgICAgey4uLm90aGVyfVxuICAgID5cbiAgICAgIHt0aXRsZUFjY2VzcyA/IDx0aXRsZT57dGl0bGVBY2Nlc3N9PC90aXRsZT4gOiBudWxsfVxuICAgICAge2NoaWxkcmVufVxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5TdmdJY29uLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIE5vZGUgcGFzc2VkIGludG8gdGhlIFNWRyBlbGVtZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBVc2VmdWwgdG8gZXh0ZW5kIHRoZSBzdHlsZSBhcHBsaWVkIHRvIGNvbXBvbmVudHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBUaGUgY29sb3Igb2YgdGhlIGNvbXBvbmVudC4gSXQgc3VwcG9ydHMgdGhvc2UgdGhlbWUgY29sb3JzIHRoYXQgbWFrZSBzZW5zZSBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqIFlvdSBjYW4gdXNlIHRoZSBgbmF0aXZlQ29sb3JgIHByb3BlcnR5IHRvIGFwcGx5IGEgY29sb3IgYXR0cmlidXRlIHRvIHRoZSBTVkcgZWxlbWVudC5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydhY3Rpb24nLCAnZGlzYWJsZWQnLCAnZXJyb3InLCAnaW5oZXJpdCcsICdwcmltYXJ5JywgJ3NlY29uZGFyeSddKSxcbiAgLyoqXG4gICAqIEFwcGxpZXMgYSBjb2xvciBhdHRyaWJ1dGUgdG8gdGhlIFNWRyBlbGVtZW50LlxuICAgKi9cbiAgbmF0aXZlQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBQcm92aWRlcyBhIGh1bWFuLXJlYWRhYmxlIHRpdGxlIGZvciB0aGUgZWxlbWVudCB0aGF0IGNvbnRhaW5zIGl0LlxuICAgKiBodHRwczovL3d3dy53My5vcmcvVFIvU1ZHLWFjY2Vzcy8jRXF1aXZhbGVudFxuICAgKi9cbiAgdGl0bGVBY2Nlc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBBbGxvd3MgeW91IHRvIHJlZGVmaW5lIHdoYXQgdGhlIGNvb3JkaW5hdGVzIHdpdGhvdXQgdW5pdHMgbWVhbiBpbnNpZGUgYW4gU1ZHIGVsZW1lbnQuXG4gICAqIEZvciBleGFtcGxlLCBpZiB0aGUgU1ZHIGVsZW1lbnQgaXMgNTAwICh3aWR0aCkgYnkgMjAwIChoZWlnaHQpLFxuICAgKiBhbmQgeW91IHBhc3Mgdmlld0JveD1cIjAgMCA1MCAyMFwiLFxuICAgKiB0aGlzIG1lYW5zIHRoYXQgdGhlIGNvb3JkaW5hdGVzIGluc2lkZSB0aGUgU1ZHIHdpbGwgZ28gZnJvbSB0aGUgdG9wIGxlZnQgY29ybmVyICgwLDApXG4gICAqIHRvIGJvdHRvbSByaWdodCAoNTAsMjApIGFuZCBlYWNoIHVuaXQgd2lsbCBiZSB3b3J0aCAxMHB4LlxuICAgKi9cbiAgdmlld0JveDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cblN2Z0ljb24uZGVmYXVsdFByb3BzID0ge1xuICBjb2xvcjogJ2luaGVyaXQnLFxuICB2aWV3Qm94OiAnMCAwIDI0IDI0Jyxcbn07XG5cblN2Z0ljb24ubXVpTmFtZSA9ICdTdmdJY29uJztcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHsgbmFtZTogJ011aVN2Z0ljb24nIH0pKFN2Z0ljb24pO1xuIl19

/***/ })

});