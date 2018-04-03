webpackJsonpmaterial_ui([58],{

/***/ 348:
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

var styles = exports.styles = {
  root: {
    position: 'absolute',
    right: 4,
    top: '50%',
    transform: 'translateY(-50%)'
  }
};

function ListItemSecondaryAction(props) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      other = _objectWithoutProperties(props, ['children', 'classes', 'className']);

  return _react2.default.createElement(
    'div',
    _extends({ className: (0, _classnames2.default)(classes.root, className) }, other),
    children
  );
}

ListItemSecondaryAction.propTypes = {
  /**
   * The content of the component, normally an `IconButton` or selection control.
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

ListItemSecondaryAction.muiName = 'ListItemSecondaryAction';

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiListItemSecondaryAction' })(ListItemSecondaryAction);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcTGlzdFxcTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24uanMiXSwibmFtZXMiOlsic3R5bGVzIiwicm9vdCIsInBvc2l0aW9uIiwicmlnaHQiLCJ0b3AiLCJ0cmFuc2Zvcm0iLCJMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiIsInByb3BzIiwiY2hpbGRyZW4iLCJjbGFzc2VzIiwiY2xhc3NOYW1lIiwib3RoZXIiLCJwcm9wVHlwZXMiLCJub2RlIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsIm11aU5hbWUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFTyxJQUFNQSwwQkFBUztBQUNwQkMsUUFBTTtBQUNKQyxjQUFVLFVBRE47QUFFSkMsV0FBTyxDQUZIO0FBR0pDLFNBQUssS0FIRDtBQUlKQyxlQUFXO0FBSlA7QUFEYyxDQUFmOztBQVNQLFNBQVNDLHVCQUFULENBQWlDQyxLQUFqQyxFQUF3QztBQUFBLE1BQzlCQyxRQUQ4QixHQUNhRCxLQURiLENBQzlCQyxRQUQ4QjtBQUFBLE1BQ3BCQyxPQURvQixHQUNhRixLQURiLENBQ3BCRSxPQURvQjtBQUFBLE1BQ1hDLFNBRFcsR0FDYUgsS0FEYixDQUNYRyxTQURXO0FBQUEsTUFDR0MsS0FESCw0QkFDYUosS0FEYjs7QUFHdEMsU0FDRTtBQUFBO0FBQUEsZUFBSyxXQUFXLDBCQUFXRSxRQUFRUixJQUFuQixFQUF5QlMsU0FBekIsQ0FBaEIsSUFBeURDLEtBQXpEO0FBQ0dIO0FBREgsR0FERjtBQUtEOztBQUVERix3QkFBd0JNLFNBQXhCLEdBQW9DO0FBQ2xDOzs7QUFHQUosWUFBVSxvQkFBVUssSUFKYztBQUtsQzs7O0FBR0FKLFdBQVMsb0JBQVVLLE1BQVYsQ0FBaUJDLFVBUlE7QUFTbEM7OztBQUdBTCxhQUFXLG9CQUFVTTtBQVphLENBQXBDOztBQWVBVix3QkFBd0JXLE9BQXhCLEdBQWtDLHlCQUFsQzs7a0JBRWUsMEJBQVdqQixNQUFYLEVBQW1CLEVBQUVrQixNQUFNLDRCQUFSLEVBQW5CLEVBQTJEWix1QkFBM0QsQyIsImZpbGUiOiJMaXN0SXRlbVNlY29uZGFyeUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9ybWNxdWVuL3NsdC11aS9tYXRlcmlhbC11aSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5cbmV4cG9ydCBjb25zdCBzdHlsZXMgPSB7XG4gIHJvb3Q6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICByaWdodDogNCxcbiAgICB0b3A6ICc1MCUnLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknLFxuICB9LFxufTtcblxuZnVuY3Rpb24gTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24ocHJvcHMpIHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NlcywgY2xhc3NOYW1lLCAuLi5vdGhlciB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9IHsuLi5vdGhlcn0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkxpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQsIG5vcm1hbGx5IGFuIGBJY29uQnV0dG9uYCBvciBzZWxlY3Rpb24gY29udHJvbC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIFVzZWZ1bCB0byBleHRlbmQgdGhlIHN0eWxlIGFwcGxpZWQgdG8gY29tcG9uZW50cy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbkxpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uLm11aU5hbWUgPSAnTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywgeyBuYW1lOiAnTXVpTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24nIH0pKExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uKTtcbiJdfQ==

/***/ })

});