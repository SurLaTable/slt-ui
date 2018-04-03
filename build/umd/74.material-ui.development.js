webpackJsonpmaterial_ui([74],{

/***/ 333:
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
      display: 'flex',
      flexGrow: 1,
      padding: theme.spacing.unit + 'px ' + theme.spacing.unit * 3 + 'px ' + theme.spacing.unit * 3 + 'px'
    }
  };
};

function ExpansionPanelDetails(props) {
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

ExpansionPanelDetails.propTypes = {
  /**
   * The content of the expansion panel details.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiExpansionPanelDetails' })(ExpansionPanelDetails);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcRXhwYW5zaW9uUGFuZWxcXEV4cGFuc2lvblBhbmVsRGV0YWlscy5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJyb290IiwiZGlzcGxheSIsImZsZXhHcm93IiwicGFkZGluZyIsInRoZW1lIiwic3BhY2luZyIsInVuaXQiLCJFeHBhbnNpb25QYW5lbERldGFpbHMiLCJwcm9wcyIsImNsYXNzZXMiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsIm90aGVyIiwicHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJzdHJpbmciLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFTyxJQUFNQSwwQkFBUyxTQUFUQSxNQUFTO0FBQUEsU0FBVTtBQUM5QkMsVUFBTTtBQUNKQyxlQUFTLE1BREw7QUFFSkMsZ0JBQVUsQ0FGTjtBQUdKQyxlQUFZQyxNQUFNQyxPQUFOLENBQWNDLElBQTFCLFdBQW9DRixNQUFNQyxPQUFOLENBQWNDLElBQWQsR0FBcUIsQ0FBekQsV0FBZ0VGLE1BQU1DLE9BQU4sQ0FBY0MsSUFBZCxHQUFxQixDQUFyRjtBQUhJO0FBRHdCLEdBQVY7QUFBQSxDQUFmOztBQVFQLFNBQVNDLHFCQUFULENBQStCQyxLQUEvQixFQUFzQztBQUFBLE1BQzVCQyxPQUQ0QixHQUNlRCxLQURmLENBQzVCQyxPQUQ0QjtBQUFBLE1BQ25CQyxRQURtQixHQUNlRixLQURmLENBQ25CRSxRQURtQjtBQUFBLE1BQ1RDLFNBRFMsR0FDZUgsS0FEZixDQUNURyxTQURTO0FBQUEsTUFDS0MsS0FETCw0QkFDZUosS0FEZjs7QUFHcEMsU0FDRTtBQUFBO0FBQUEsZUFBSyxXQUFXLDBCQUFXQyxRQUFRVCxJQUFuQixFQUF5QlcsU0FBekIsQ0FBaEIsSUFBeURDLEtBQXpEO0FBQ0dGO0FBREgsR0FERjtBQUtEOztBQUVESCxzQkFBc0JNLFNBQXRCLEdBQWtDO0FBQ2hDOzs7QUFHQUgsWUFBVSxvQkFBVUksSUFBVixDQUFlQyxVQUpPO0FBS2hDOzs7QUFHQU4sV0FBUyxvQkFBVU8sTUFBVixDQUFpQkQsVUFSTTtBQVNoQzs7O0FBR0FKLGFBQVcsb0JBQVVNO0FBWlcsQ0FBbEM7O2tCQWVlLDBCQUFXbEIsTUFBWCxFQUFtQixFQUFFbUIsTUFBTSwwQkFBUixFQUFuQixFQUF5RFgscUJBQXpELEMiLCJmaWxlIjoiRXhwYW5zaW9uUGFuZWxEZXRhaWxzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3JtY3F1ZW4vc2x0LXVpL21hdGVyaWFsLXVpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleEdyb3c6IDEsXG4gICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZy51bml0fXB4ICR7dGhlbWUuc3BhY2luZy51bml0ICogM31weCAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDN9cHhgLFxuICB9LFxufSk7XG5cbmZ1bmN0aW9uIEV4cGFuc2lvblBhbmVsRGV0YWlscyhwcm9wcykge1xuICBjb25zdCB7IGNsYXNzZXMsIGNoaWxkcmVuLCBjbGFzc05hbWUsIC4uLm90aGVyIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX0gey4uLm90aGVyfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuRXhwYW5zaW9uUGFuZWxEZXRhaWxzLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBleHBhbnNpb24gcGFuZWwgZGV0YWlscy5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogVXNlZnVsIHRvIGV4dGVuZCB0aGUgc3R5bGUgYXBwbGllZCB0byBjb21wb25lbnRzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHsgbmFtZTogJ011aUV4cGFuc2lvblBhbmVsRGV0YWlscycgfSkoRXhwYW5zaW9uUGFuZWxEZXRhaWxzKTtcbiJdfQ==

/***/ })

});