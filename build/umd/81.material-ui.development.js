webpackJsonpmaterial_ui([81],{

/***/ 314:
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
    root: theme.mixins.gutters({
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      '&:last-child': {
        paddingBottom: theme.spacing.unit * 3
      }
    })
  };
};

function CardContent(props) {
  var classes = props.classes,
      className = props.className,
      Component = props.component,
      other = _objectWithoutProperties(props, ['classes', 'className', 'component']);

  return _react2.default.createElement(Component, _extends({ className: (0, _classnames2.default)(classes.root, className) }, other));
}

CardContent.propTypes = {
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
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func])
};

CardContent.defaultProps = {
  component: 'div'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiCardContent' })(CardContent);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcQ2FyZFxcQ2FyZENvbnRlbnQuanMiXSwibmFtZXMiOlsic3R5bGVzIiwicm9vdCIsInRoZW1lIiwibWl4aW5zIiwiZ3V0dGVycyIsInBhZGRpbmdUb3AiLCJzcGFjaW5nIiwidW5pdCIsInBhZGRpbmdCb3R0b20iLCJDYXJkQ29udGVudCIsInByb3BzIiwiY2xhc3NlcyIsImNsYXNzTmFtZSIsIkNvbXBvbmVudCIsImNvbXBvbmVudCIsIm90aGVyIiwicHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsIm9uZU9mVHlwZSIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFTyxJQUFNQSwwQkFBUyxTQUFUQSxNQUFTO0FBQUEsU0FBVTtBQUM5QkMsVUFBTUMsTUFBTUMsTUFBTixDQUFhQyxPQUFiLENBQXFCO0FBQ3pCQyxrQkFBWUgsTUFBTUksT0FBTixDQUFjQyxJQUFkLEdBQXFCLENBRFI7QUFFekJDLHFCQUFlTixNQUFNSSxPQUFOLENBQWNDLElBQWQsR0FBcUIsQ0FGWDtBQUd6QixzQkFBZ0I7QUFDZEMsdUJBQWVOLE1BQU1JLE9BQU4sQ0FBY0MsSUFBZCxHQUFxQjtBQUR0QjtBQUhTLEtBQXJCO0FBRHdCLEdBQVY7QUFBQSxDQUFmOztBQVVQLFNBQVNFLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQUEsTUFDbEJDLE9BRGtCLEdBQ3FDRCxLQURyQyxDQUNsQkMsT0FEa0I7QUFBQSxNQUNUQyxTQURTLEdBQ3FDRixLQURyQyxDQUNURSxTQURTO0FBQUEsTUFDYUMsU0FEYixHQUNxQ0gsS0FEckMsQ0FDRUksU0FERjtBQUFBLE1BQzJCQyxLQUQzQiw0QkFDcUNMLEtBRHJDOztBQUcxQixTQUFPLDhCQUFDLFNBQUQsYUFBVyxXQUFXLDBCQUFXQyxRQUFRVixJQUFuQixFQUF5QlcsU0FBekIsQ0FBdEIsSUFBK0RHLEtBQS9ELEVBQVA7QUFDRDs7QUFFRE4sWUFBWU8sU0FBWixHQUF3QjtBQUN0Qjs7O0FBR0FMLFdBQVMsb0JBQVVNLE1BQVYsQ0FBaUJDLFVBSko7QUFLdEI7OztBQUdBTixhQUFXLG9CQUFVTyxNQVJDO0FBU3RCOzs7O0FBSUFMLGFBQVcsb0JBQVVNLFNBQVYsQ0FBb0IsQ0FBQyxvQkFBVUQsTUFBWCxFQUFtQixvQkFBVUUsSUFBN0IsQ0FBcEI7QUFiVyxDQUF4Qjs7QUFnQkFaLFlBQVlhLFlBQVosR0FBMkI7QUFDekJSLGFBQVc7QUFEYyxDQUEzQjs7a0JBSWUsMEJBQVdkLE1BQVgsRUFBbUIsRUFBRXVCLE1BQU0sZ0JBQVIsRUFBbkIsRUFBK0NkLFdBQS9DLEMiLCJmaWxlIjoiQ2FyZENvbnRlbnQuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvcm1jcXVlbi9zbHQtdWkvbWF0ZXJpYWwtdWkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgcm9vdDogdGhlbWUubWl4aW5zLmd1dHRlcnMoe1xuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDIsXG4gICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZy51bml0ICogMixcbiAgICAnJjpsYXN0LWNoaWxkJzoge1xuICAgICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZy51bml0ICogMyxcbiAgICB9LFxuICB9KSxcbn0pO1xuXG5mdW5jdGlvbiBDYXJkQ29udGVudChwcm9wcykge1xuICBjb25zdCB7IGNsYXNzZXMsIGNsYXNzTmFtZSwgY29tcG9uZW50OiBDb21wb25lbnQsIC4uLm90aGVyIH0gPSBwcm9wcztcblxuICByZXR1cm4gPENvbXBvbmVudCBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfSB7Li4ub3RoZXJ9IC8+O1xufVxuXG5DYXJkQ29udGVudC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBVc2VmdWwgdG8gZXh0ZW5kIHRoZSBzdHlsZSBhcHBsaWVkIHRvIGNvbXBvbmVudHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSByb290IG5vZGUuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBET00gZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbn07XG5cbkNhcmRDb250ZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgY29tcG9uZW50OiAnZGl2Jyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7IG5hbWU6ICdNdWlDYXJkQ29udGVudCcgfSkoQ2FyZENvbnRlbnQpO1xuIl19

/***/ })

});