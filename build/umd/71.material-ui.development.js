webpackJsonpmaterial_ui([71],{

/***/ 299:
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

var styles = exports.styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  row: {
    flexDirection: 'row'
  }
};

/**
 * `FormGroup` wraps controls such as `Checkbox` and `Switch`.
 * It provides compact row layout.
 * For the `Radio`, you should be using the `RadioGroup` component instead of this one.
 */
function FormGroup(props) {
  var classes = props.classes,
      className = props.className,
      children = props.children,
      row = props.row,
      other = _objectWithoutProperties(props, ['classes', 'className', 'children', 'row']);

  return _react2.default.createElement(
    'div',
    _extends({
      className: (0, _classnames2.default)(classes.root, _defineProperty({}, classes.row, row), className)
    }, other),
    children
  );
}

FormGroup.propTypes = {
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
  className: _propTypes2.default.string,
  /**
   * Display group of elements in a compact row.
   */
  row: _propTypes2.default.bool
};

FormGroup.defaultProps = {
  row: false
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiFormGroup' })(FormGroup);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcRm9ybVxcRm9ybUdyb3VwLmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImZsZXhXcmFwIiwicm93IiwiRm9ybUdyb3VwIiwicHJvcHMiLCJjbGFzc2VzIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJvdGhlciIsInByb3BUeXBlcyIsIm5vZGUiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiYm9vbCIsImRlZmF1bHRQcm9wcyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRU8sSUFBTUEsMEJBQVM7QUFDcEJDLFFBQU07QUFDSkMsYUFBUyxNQURMO0FBRUpDLG1CQUFlLFFBRlg7QUFHSkMsY0FBVTtBQUhOLEdBRGM7QUFNcEJDLE9BQUs7QUFDSEYsbUJBQWU7QUFEWjtBQU5lLENBQWY7O0FBV1A7Ozs7O0FBS0EsU0FBU0csU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFBQSxNQUNoQkMsT0FEZ0IsR0FDZ0NELEtBRGhDLENBQ2hCQyxPQURnQjtBQUFBLE1BQ1BDLFNBRE8sR0FDZ0NGLEtBRGhDLENBQ1BFLFNBRE87QUFBQSxNQUNJQyxRQURKLEdBQ2dDSCxLQURoQyxDQUNJRyxRQURKO0FBQUEsTUFDY0wsR0FEZCxHQUNnQ0UsS0FEaEMsQ0FDY0YsR0FEZDtBQUFBLE1BQ3NCTSxLQUR0Qiw0QkFDZ0NKLEtBRGhDOztBQUd4QixTQUNFO0FBQUE7QUFBQTtBQUNFLGlCQUFXLDBCQUNUQyxRQUFRUCxJQURDLHNCQUdOTyxRQUFRSCxHQUhGLEVBR1FBLEdBSFIsR0FLVEksU0FMUztBQURiLE9BUU1FLEtBUk47QUFVR0Q7QUFWSCxHQURGO0FBY0Q7O0FBRURKLFVBQVVNLFNBQVYsR0FBc0I7QUFDcEI7OztBQUdBRixZQUFVLG9CQUFVRyxJQUpBO0FBS3BCOzs7QUFHQUwsV0FBUyxvQkFBVU0sTUFBVixDQUFpQkMsVUFSTjtBQVNwQjs7O0FBR0FOLGFBQVcsb0JBQVVPLE1BWkQ7QUFhcEI7OztBQUdBWCxPQUFLLG9CQUFVWTtBQWhCSyxDQUF0Qjs7QUFtQkFYLFVBQVVZLFlBQVYsR0FBeUI7QUFDdkJiLE9BQUs7QUFEa0IsQ0FBekI7O2tCQUllLDBCQUFXTCxNQUFYLEVBQW1CLEVBQUVtQixNQUFNLGNBQVIsRUFBbkIsRUFBNkNiLFNBQTdDLEMiLCJmaWxlIjoiRm9ybUdyb3VwLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3JtY3F1ZW4vc2x0LXVpL21hdGVyaWFsLXVpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICB9LFxuICByb3c6IHtcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgfSxcbn07XG5cbi8qKlxuICogYEZvcm1Hcm91cGAgd3JhcHMgY29udHJvbHMgc3VjaCBhcyBgQ2hlY2tib3hgIGFuZCBgU3dpdGNoYC5cbiAqIEl0IHByb3ZpZGVzIGNvbXBhY3Qgcm93IGxheW91dC5cbiAqIEZvciB0aGUgYFJhZGlvYCwgeW91IHNob3VsZCBiZSB1c2luZyB0aGUgYFJhZGlvR3JvdXBgIGNvbXBvbmVudCBpbnN0ZWFkIG9mIHRoaXMgb25lLlxuICovXG5mdW5jdGlvbiBGb3JtR3JvdXAocHJvcHMpIHtcbiAgY29uc3QgeyBjbGFzc2VzLCBjbGFzc05hbWUsIGNoaWxkcmVuLCByb3csIC4uLm90aGVyIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgY2xhc3Nlcy5yb290LFxuICAgICAgICB7XG4gICAgICAgICAgW2NsYXNzZXMucm93XTogcm93LFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICApfVxuICAgICAgey4uLm90aGVyfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuRm9ybUdyb3VwLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiBVc2VmdWwgdG8gZXh0ZW5kIHRoZSBzdHlsZSBhcHBsaWVkIHRvIGNvbXBvbmVudHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBEaXNwbGF5IGdyb3VwIG9mIGVsZW1lbnRzIGluIGEgY29tcGFjdCByb3cuXG4gICAqL1xuICByb3c6IFByb3BUeXBlcy5ib29sLFxufTtcblxuRm9ybUdyb3VwLmRlZmF1bHRQcm9wcyA9IHtcbiAgcm93OiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7IG5hbWU6ICdNdWlGb3JtR3JvdXAnIH0pKEZvcm1Hcm91cCk7XG4iXX0=

/***/ })

});