webpackJsonpmaterial_ui([49],{

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'table',
      fontFamily: theme.typography.fontFamily,
      width: '100%',
      borderCollapse: 'collapse',
      borderSpacing: 0,
      overflow: 'hidden'
    }
  };
};

var Table = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table() {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
  }

  _createClass(Table, [{
    key: 'getChildContext',
    value: function getChildContext() {
      // eslint-disable-line class-methods-use-this
      return {
        table: {}
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          classNameProp = _props.className,
          Component = _props.component,
          other = _objectWithoutProperties(_props, ['classes', 'className', 'component']);

      return _react2.default.createElement(Component, _extends({ className: (0, _classnames2.default)(classes.root, classNameProp) }, other));
    }
  }]);

  return Table;
}(_react2.default.Component);

Table.propTypes = {
  /**
   * The content of the table, normally `TableHeader` and `TableBody`.
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
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func])
};

Table.defaultProps = {
  component: 'table'
};

Table.childContextTypes = {
  table: _propTypes2.default.object
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiTable' })(Table);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcVGFibGVcXFRhYmxlLmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwiZm9udEZhbWlseSIsInRoZW1lIiwidHlwb2dyYXBoeSIsIndpZHRoIiwiYm9yZGVyQ29sbGFwc2UiLCJib3JkZXJTcGFjaW5nIiwib3ZlcmZsb3ciLCJUYWJsZSIsInRhYmxlIiwicHJvcHMiLCJjbGFzc2VzIiwiY2xhc3NOYW1lUHJvcCIsImNsYXNzTmFtZSIsIkNvbXBvbmVudCIsImNvbXBvbmVudCIsIm90aGVyIiwicHJvcFR5cGVzIiwiY2hpbGRyZW4iLCJub2RlIiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsInN0cmluZyIsIm9uZU9mVHlwZSIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJjaGlsZENvbnRleHRUeXBlcyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsMEJBQVMsU0FBVEEsTUFBUztBQUFBLFNBQVU7QUFDOUJDLFVBQU07QUFDSkMsZUFBUyxPQURMO0FBRUpDLGtCQUFZQyxNQUFNQyxVQUFOLENBQWlCRixVQUZ6QjtBQUdKRyxhQUFPLE1BSEg7QUFJSkMsc0JBQWdCLFVBSlo7QUFLSkMscUJBQWUsQ0FMWDtBQU1KQyxnQkFBVTtBQU5OO0FBRHdCLEdBQVY7QUFBQSxDQUFmOztJQVdEQyxLOzs7Ozs7Ozs7OztzQ0FDYztBQUNoQjtBQUNBLGFBQU87QUFDTEMsZUFBTztBQURGLE9BQVA7QUFHRDs7OzZCQUVRO0FBQUEsbUJBQ3VFLEtBQUtDLEtBRDVFO0FBQUEsVUFDQ0MsT0FERCxVQUNDQSxPQUREO0FBQUEsVUFDcUJDLGFBRHJCLFVBQ1VDLFNBRFY7QUFBQSxVQUMrQ0MsU0FEL0MsVUFDb0NDLFNBRHBDO0FBQUEsVUFDNkRDLEtBRDdEOztBQUdQLGFBQU8sOEJBQUMsU0FBRCxhQUFXLFdBQVcsMEJBQVdMLFFBQVFaLElBQW5CLEVBQXlCYSxhQUF6QixDQUF0QixJQUFtRUksS0FBbkUsRUFBUDtBQUNEOzs7O0VBWmlCLGdCQUFNRixTOztBQWUxQk4sTUFBTVMsU0FBTixHQUFrQjtBQUNoQjs7O0FBR0FDLFlBQVUsb0JBQVVDLElBQVYsQ0FBZUMsVUFKVDtBQUtoQjs7O0FBR0FULFdBQVMsb0JBQVVVLE1BQVYsQ0FBaUJELFVBUlY7QUFTaEI7OztBQUdBUCxhQUFXLG9CQUFVUyxNQVpMO0FBYWhCOzs7O0FBSUFQLGFBQVcsb0JBQVVRLFNBQVYsQ0FBb0IsQ0FBQyxvQkFBVUQsTUFBWCxFQUFtQixvQkFBVUUsSUFBN0IsQ0FBcEI7QUFqQkssQ0FBbEI7O0FBb0JBaEIsTUFBTWlCLFlBQU4sR0FBcUI7QUFDbkJWLGFBQVc7QUFEUSxDQUFyQjs7QUFJQVAsTUFBTWtCLGlCQUFOLEdBQTBCO0FBQ3hCakIsU0FBTyxvQkFBVVk7QUFETyxDQUExQjs7a0JBSWUsMEJBQVd2QixNQUFYLEVBQW1CLEVBQUU2QixNQUFNLFVBQVIsRUFBbkIsRUFBeUNuQixLQUF6QyxDIiwiZmlsZSI6IlRhYmxlLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3JtY3F1ZW4vc2x0LXVpL21hdGVyaWFsLXVpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAndGFibGUnLFxuICAgIGZvbnRGYW1pbHk6IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseSxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGJvcmRlckNvbGxhcHNlOiAnY29sbGFwc2UnLFxuICAgIGJvcmRlclNwYWNpbmc6IDAsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB9LFxufSk7XG5cbmNsYXNzIFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICAgIHJldHVybiB7XG4gICAgICB0YWJsZToge30sXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMsIGNsYXNzTmFtZTogY2xhc3NOYW1lUHJvcCwgY29tcG9uZW50OiBDb21wb25lbnQsIC4uLm90aGVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIDxDb21wb25lbnQgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lUHJvcCl9IHsuLi5vdGhlcn0gLz47XG4gIH1cbn1cblxuVGFibGUucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIHRhYmxlLCBub3JtYWxseSBgVGFibGVIZWFkZXJgIGFuZCBgVGFibGVCb2R5YC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogVXNlZnVsIHRvIGV4dGVuZCB0aGUgc3R5bGUgYXBwbGllZCB0byBjb21wb25lbnRzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgRE9NIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBjb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG59O1xuXG5UYWJsZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbXBvbmVudDogJ3RhYmxlJyxcbn07XG5cblRhYmxlLmNoaWxkQ29udGV4dFR5cGVzID0ge1xuICB0YWJsZTogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7IG5hbWU6ICdNdWlUYWJsZScgfSkoVGFibGUpO1xuIl19

/***/ })

});