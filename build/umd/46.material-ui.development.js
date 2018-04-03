webpackJsonpmaterial_ui([46],{

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableFooter = function (_React$Component) {
  _inherits(TableFooter, _React$Component);

  function TableFooter() {
    _classCallCheck(this, TableFooter);

    return _possibleConstructorReturn(this, (TableFooter.__proto__ || Object.getPrototypeOf(TableFooter)).apply(this, arguments));
  }

  _createClass(TableFooter, [{
    key: 'getChildContext',
    value: function getChildContext() {
      // eslint-disable-line class-methods-use-this
      return {
        table: {
          footer: true
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          Component = _props.component,
          other = _objectWithoutProperties(_props, ['component']);

      return _react2.default.createElement(Component, other);
    }
  }]);

  return TableFooter;
}(_react2.default.Component);

TableFooter.propTypes = {
  /**
   * The content of the component, normally `TableRow`.
   */
  children: _propTypes2.default.node,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func])
};

TableFooter.defaultProps = {
  component: 'tfoot'
};

TableFooter.childContextTypes = {
  table: _propTypes2.default.object
};

exports.default = TableFooter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcVGFibGVcXFRhYmxlRm9vdGVyLmpzIl0sIm5hbWVzIjpbIlRhYmxlRm9vdGVyIiwidGFibGUiLCJmb290ZXIiLCJwcm9wcyIsIkNvbXBvbmVudCIsImNvbXBvbmVudCIsIm90aGVyIiwicHJvcFR5cGVzIiwiY2hpbGRyZW4iLCJub2RlIiwib25lT2ZUeXBlIiwic3RyaW5nIiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsImNoaWxkQ29udGV4dFR5cGVzIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFc7Ozs7Ozs7Ozs7O3NDQUNjO0FBQ2hCO0FBQ0EsYUFBTztBQUNMQyxlQUFPO0FBQ0xDLGtCQUFRO0FBREg7QUFERixPQUFQO0FBS0Q7Ozs2QkFFUTtBQUFBLG1CQUNvQyxLQUFLQyxLQUR6QztBQUFBLFVBQ1lDLFNBRFosVUFDQ0MsU0FERDtBQUFBLFVBQzBCQyxLQUQxQjs7QUFHUCxhQUFPLDhCQUFDLFNBQUQsRUFBZUEsS0FBZixDQUFQO0FBQ0Q7Ozs7RUFkdUIsZ0JBQU1GLFM7O0FBaUJoQ0osWUFBWU8sU0FBWixHQUF3QjtBQUN0Qjs7O0FBR0FDLFlBQVUsb0JBQVVDLElBSkU7QUFLdEI7Ozs7QUFJQUosYUFBVyxvQkFBVUssU0FBVixDQUFvQixDQUFDLG9CQUFVQyxNQUFYLEVBQW1CLG9CQUFVQyxJQUE3QixDQUFwQjtBQVRXLENBQXhCOztBQVlBWixZQUFZYSxZQUFaLEdBQTJCO0FBQ3pCUixhQUFXO0FBRGMsQ0FBM0I7O0FBSUFMLFlBQVljLGlCQUFaLEdBQWdDO0FBQzlCYixTQUFPLG9CQUFVYztBQURhLENBQWhDOztrQkFJZWYsVyIsImZpbGUiOiJUYWJsZUZvb3Rlci5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9ybWNxdWVuL3NsdC11aS9tYXRlcmlhbC11aSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBUYWJsZUZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgICByZXR1cm4ge1xuICAgICAgdGFibGU6IHtcbiAgICAgICAgZm9vdGVyOiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29tcG9uZW50OiBDb21wb25lbnQsIC4uLm90aGVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLm90aGVyfSAvPjtcbiAgfVxufVxuXG5UYWJsZUZvb3Rlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LCBub3JtYWxseSBgVGFibGVSb3dgLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgRE9NIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBjb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG59O1xuXG5UYWJsZUZvb3Rlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbXBvbmVudDogJ3Rmb290Jyxcbn07XG5cblRhYmxlRm9vdGVyLmNoaWxkQ29udGV4dFR5cGVzID0ge1xuICB0YWJsZTogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlRm9vdGVyO1xuIl19

/***/ })

});