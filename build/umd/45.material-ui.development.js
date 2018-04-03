webpackJsonpmaterial_ui([45],{

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var styles = {
  root: {
    display: 'table-header-group'
  }
};

var TableHead = function (_React$Component) {
  _inherits(TableHead, _React$Component);

  function TableHead() {
    _classCallCheck(this, TableHead);

    return _possibleConstructorReturn(this, (TableHead.__proto__ || Object.getPrototypeOf(TableHead)).apply(this, arguments));
  }

  _createClass(TableHead, [{
    key: 'getChildContext',
    value: function getChildContext() {
      // eslint-disable-line class-methods-use-this
      return {
        table: {
          head: true
        }
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

  return TableHead;
}(_react2.default.Component);

TableHead.propTypes = {
  /**
   * The content of the component, normally `TableRow`.
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

TableHead.defaultProps = {
  component: 'thead'
};

TableHead.childContextTypes = {
  table: _propTypes2.default.object
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiTableHead' })(TableHead);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcVGFibGVcXFRhYmxlSGVhZC5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJyb290IiwiZGlzcGxheSIsIlRhYmxlSGVhZCIsInRhYmxlIiwiaGVhZCIsInByb3BzIiwiY2xhc3NlcyIsImNsYXNzTmFtZVByb3AiLCJjbGFzc05hbWUiLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJvdGhlciIsInByb3BUeXBlcyIsImNoaWxkcmVuIiwibm9kZSIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwiY2hpbGRDb250ZXh0VHlwZXMiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUztBQUNiQyxRQUFNO0FBQ0pDLGFBQVM7QUFETDtBQURPLENBQWY7O0lBTU1DLFM7Ozs7Ozs7Ozs7O3NDQUNjO0FBQ2hCO0FBQ0EsYUFBTztBQUNMQyxlQUFPO0FBQ0xDLGdCQUFNO0FBREQ7QUFERixPQUFQO0FBS0Q7Ozs2QkFFUTtBQUFBLG1CQUN1RSxLQUFLQyxLQUQ1RTtBQUFBLFVBQ0NDLE9BREQsVUFDQ0EsT0FERDtBQUFBLFVBQ3FCQyxhQURyQixVQUNVQyxTQURWO0FBQUEsVUFDK0NDLFNBRC9DLFVBQ29DQyxTQURwQztBQUFBLFVBQzZEQyxLQUQ3RDs7QUFHUCxhQUFPLDhCQUFDLFNBQUQsYUFBVyxXQUFXLDBCQUFXTCxRQUFRTixJQUFuQixFQUF5Qk8sYUFBekIsQ0FBdEIsSUFBbUVJLEtBQW5FLEVBQVA7QUFDRDs7OztFQWRxQixnQkFBTUYsUzs7QUFpQjlCUCxVQUFVVSxTQUFWLEdBQXNCO0FBQ3BCOzs7QUFHQUMsWUFBVSxvQkFBVUMsSUFBVixDQUFlQyxVQUpMO0FBS3BCOzs7QUFHQVQsV0FBUyxvQkFBVVUsTUFBVixDQUFpQkQsVUFSTjtBQVNwQjs7O0FBR0FQLGFBQVcsb0JBQVVTLE1BWkQ7QUFhcEI7Ozs7QUFJQVAsYUFBVyxvQkFBVVEsU0FBVixDQUFvQixDQUFDLG9CQUFVRCxNQUFYLEVBQW1CLG9CQUFVRSxJQUE3QixDQUFwQjtBQWpCUyxDQUF0Qjs7QUFvQkFqQixVQUFVa0IsWUFBVixHQUF5QjtBQUN2QlYsYUFBVztBQURZLENBQXpCOztBQUlBUixVQUFVbUIsaUJBQVYsR0FBOEI7QUFDNUJsQixTQUFPLG9CQUFVYTtBQURXLENBQTlCOztrQkFJZSwwQkFBV2pCLE1BQVgsRUFBbUIsRUFBRXVCLE1BQU0sY0FBUixFQUFuQixFQUE2Q3BCLFNBQTdDLEMiLCJmaWxlIjoiVGFibGVIZWFkLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3JtY3F1ZW4vc2x0LXVpL21hdGVyaWFsLXVpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcblxuY29uc3Qgc3R5bGVzID0ge1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ3RhYmxlLWhlYWRlci1ncm91cCcsXG4gIH0sXG59O1xuXG5jbGFzcyBUYWJsZUhlYWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gICAgcmV0dXJuIHtcbiAgICAgIHRhYmxlOiB7XG4gICAgICAgIGhlYWQ6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzLCBjbGFzc05hbWU6IGNsYXNzTmFtZVByb3AsIGNvbXBvbmVudDogQ29tcG9uZW50LCAuLi5vdGhlciB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiA8Q29tcG9uZW50IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZVByb3ApfSB7Li4ub3RoZXJ9IC8+O1xuICB9XG59XG5cblRhYmxlSGVhZC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LCBub3JtYWxseSBgVGFibGVSb3dgLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBVc2VmdWwgdG8gZXh0ZW5kIHRoZSBzdHlsZSBhcHBsaWVkIHRvIGNvbXBvbmVudHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSByb290IG5vZGUuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBET00gZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbn07XG5cblRhYmxlSGVhZC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbXBvbmVudDogJ3RoZWFkJyxcbn07XG5cblRhYmxlSGVhZC5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgdGFibGU6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywgeyBuYW1lOiAnTXVpVGFibGVIZWFkJyB9KShUYWJsZUhlYWQpO1xuIl19

/***/ })

});