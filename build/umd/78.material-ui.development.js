webpackJsonpmaterial_ui([78],{

/***/ 328:
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
  var spacing = theme.spacing.unit * 3;
  return {
    root: {
      flex: '1 1 auto',
      overflowY: 'auto',
      padding: '0 ' + spacing + 'px ' + spacing + 'px ' + spacing + 'px',
      '&:first-child': {
        paddingTop: spacing
      }
    }
  };
};

function DialogContent(props) {
  var classes = props.classes,
      children = props.children,
      className = props.className,
      other = _objectWithoutProperties(props, ['classes', 'children', 'className']);

  return _react2.default.createElement(
    'div',
    _extends({ className: (0, _classnames2.default)(classes.root, className) }, other),
    children
  );
}

DialogContent.propTypes = {
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

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiDialogContent' })(DialogContent);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcRGlhbG9nXFxEaWFsb2dDb250ZW50LmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsInNwYWNpbmciLCJ0aGVtZSIsInVuaXQiLCJyb290IiwiZmxleCIsIm92ZXJmbG93WSIsInBhZGRpbmciLCJwYWRkaW5nVG9wIiwiRGlhbG9nQ29udGVudCIsInByb3BzIiwiY2xhc3NlcyIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwib3RoZXIiLCJwcm9wVHlwZXMiLCJub2RlIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVPLElBQU1BLDBCQUFTLFNBQVRBLE1BQVMsUUFBUztBQUM3QixNQUFNQyxVQUFVQyxNQUFNRCxPQUFOLENBQWNFLElBQWQsR0FBcUIsQ0FBckM7QUFDQSxTQUFPO0FBQ0xDLFVBQU07QUFDSkMsWUFBTSxVQURGO0FBRUpDLGlCQUFXLE1BRlA7QUFHSkMsc0JBQWNOLE9BQWQsV0FBMkJBLE9BQTNCLFdBQXdDQSxPQUF4QyxPQUhJO0FBSUosdUJBQWlCO0FBQ2ZPLG9CQUFZUDtBQURHO0FBSmI7QUFERCxHQUFQO0FBVUQsQ0FaTTs7QUFjUCxTQUFTUSxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUFBLE1BQ3BCQyxPQURvQixHQUN1QkQsS0FEdkIsQ0FDcEJDLE9BRG9CO0FBQUEsTUFDWEMsUUFEVyxHQUN1QkYsS0FEdkIsQ0FDWEUsUUFEVztBQUFBLE1BQ0RDLFNBREMsR0FDdUJILEtBRHZCLENBQ0RHLFNBREM7QUFBQSxNQUNhQyxLQURiLDRCQUN1QkosS0FEdkI7O0FBRzVCLFNBQ0U7QUFBQTtBQUFBLGVBQUssV0FBVywwQkFBV0MsUUFBUVAsSUFBbkIsRUFBeUJTLFNBQXpCLENBQWhCLElBQXlEQyxLQUF6RDtBQUNHRjtBQURILEdBREY7QUFLRDs7QUFFREgsY0FBY00sU0FBZCxHQUEwQjtBQUN4Qjs7O0FBR0FILFlBQVUsb0JBQVVJLElBSkk7QUFLeEI7OztBQUdBTCxXQUFTLG9CQUFVTSxNQUFWLENBQWlCQyxVQVJGO0FBU3hCOzs7QUFHQUwsYUFBVyxvQkFBVU07QUFaRyxDQUExQjs7a0JBZWUsMEJBQVduQixNQUFYLEVBQW1CLEVBQUVvQixNQUFNLGtCQUFSLEVBQW5CLEVBQWlEWCxhQUFqRCxDIiwiZmlsZSI6IkRpYWxvZ0NvbnRlbnQuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvcm1jcXVlbi9zbHQtdWkvbWF0ZXJpYWwtdWkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4ge1xuICBjb25zdCBzcGFjaW5nID0gdGhlbWUuc3BhY2luZy51bml0ICogMztcbiAgcmV0dXJuIHtcbiAgICByb290OiB7XG4gICAgICBmbGV4OiAnMSAxIGF1dG8nLFxuICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgICBwYWRkaW5nOiBgMCAke3NwYWNpbmd9cHggJHtzcGFjaW5nfXB4ICR7c3BhY2luZ31weGAsXG4gICAgICAnJjpmaXJzdC1jaGlsZCc6IHtcbiAgICAgICAgcGFkZGluZ1RvcDogc3BhY2luZyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIERpYWxvZ0NvbnRlbnQocHJvcHMpIHtcbiAgY29uc3QgeyBjbGFzc2VzLCBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5vdGhlciB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9IHsuLi5vdGhlcn0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkRpYWxvZ0NvbnRlbnQucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIFVzZWZ1bCB0byBleHRlbmQgdGhlIHN0eWxlIGFwcGxpZWQgdG8gY29tcG9uZW50cy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7IG5hbWU6ICdNdWlEaWFsb2dDb250ZW50JyB9KShEaWFsb2dDb250ZW50KTtcbiJdfQ==

/***/ })

});