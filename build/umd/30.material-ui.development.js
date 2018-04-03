webpackJsonpmaterial_ui([30],{

/***/ 323:
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

var _warning = __webpack_require__(3);

var _warning2 = _interopRequireDefault(_warning);

var _brcast = __webpack_require__(412);

var _brcast2 = _interopRequireDefault(_brcast);

var _themeListener = __webpack_require__(63);

var _themeListener2 = _interopRequireDefault(_themeListener);

var _exactProp = __webpack_require__(26);

var _exactProp2 = _interopRequireDefault(_exactProp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This component takes a `theme` property.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */
var MuiThemeProvider = function (_React$Component) {
  _inherits(MuiThemeProvider, _React$Component);

  function MuiThemeProvider(props, context) {
    _classCallCheck(this, MuiThemeProvider);

    // Get the outer theme from the context, can be null
    var _this = _possibleConstructorReturn(this, (MuiThemeProvider.__proto__ || Object.getPrototypeOf(MuiThemeProvider)).call(this, props, context));

    _this.broadcast = (0, _brcast2.default)();
    _this.unsubscribeId = null;
    _this.outerTheme = null;
    _this.outerTheme = _themeListener2.default.initial(context);
    // Propagate the theme so it can be accessed by the children
    _this.broadcast.setState(_this.mergeOuterLocalTheme(_this.props.theme));
    return _this;
  }

  _createClass(MuiThemeProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _ref;

      var _props = this.props,
          sheetsManager = _props.sheetsManager,
          disableStylesGeneration = _props.disableStylesGeneration;

      var muiThemeProviderOptions = this.context.muiThemeProviderOptions || {};

      if (sheetsManager !== undefined) {
        muiThemeProviderOptions.sheetsManager = sheetsManager;
      }

      if (disableStylesGeneration !== undefined) {
        muiThemeProviderOptions.disableStylesGeneration = disableStylesGeneration;
      }

      return _ref = {}, _defineProperty(_ref, _themeListener.CHANNEL, this.broadcast), _defineProperty(_ref, 'muiThemeProviderOptions', muiThemeProviderOptions), _ref;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // Subscribe on the outer theme, if present
      this.unsubscribeId = _themeListener2.default.subscribe(this.context, function (outerTheme) {
        _this2.outerTheme = outerTheme;
        // Forward the parent theme update to the children
        _this2.broadcast.setState(_this2.mergeOuterLocalTheme(_this2.props.theme));
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      // Propagate a local theme update
      if (this.props.theme !== prevProps.theme) {
        this.broadcast.setState(this.mergeOuterLocalTheme(this.props.theme));
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.unsubscribeId !== null) {
        _themeListener2.default.unsubscribe(this.context, this.unsubscribeId);
      }
    }
    // We are not using the React state in order to avoid unnecessary rerender.

  }, {
    key: 'mergeOuterLocalTheme',


    // Simple merge between the outer theme and the local theme
    value: function mergeOuterLocalTheme(localTheme) {
      // To support composition of theme.
      if (typeof localTheme === 'function') {
        (0, _warning2.default)(this.outerTheme, ['Material-UI: you are providing a theme function property ' + 'to the MuiThemeProvider component:', '<MuiThemeProvider theme={outerTheme => outerTheme} />', '', 'However, no outer theme is present.', 'Make sure a theme is already injected higher in the React tree ' + 'or provide a theme object.'].join('\n'));
        return localTheme(this.outerTheme);
      }

      if (!this.outerTheme) {
        return localTheme;
      }

      return _extends({}, this.outerTheme, localTheme);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return MuiThemeProvider;
}(_react2.default.Component);

MuiThemeProvider.propTypes = {
  /**
   * You can only provide a single element with react@15, a node with react@16.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * You can disable the generation of the styles with this option.
   * It can be useful when traversing the React tree outside of the HTML
   * rendering step on the server.
   * Let's say you are using react-apollo to extract all
   * the queries made by the interface server side.
   * You can significantly speed up the traversal with this property.
   */
  disableStylesGeneration: _propTypes2.default.bool,
  /**
   * The sheetsManager is used to deduplicate style sheet injection in the page.
   * It's deduplicating using the (theme, styles) couple.
   * On the server, you should provide a new instance for each request.
   */
  sheetsManager: _propTypes2.default.object,
  /**
   * A theme object.
   */
  theme: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]).isRequired
};

MuiThemeProvider.propTypes = (0, _exactProp2.default)(MuiThemeProvider.propTypes, 'MuiThemeProvider');

MuiThemeProvider.childContextTypes = _extends({}, _themeListener2.default.contextTypes, {
  muiThemeProviderOptions: _propTypes2.default.object
});

MuiThemeProvider.contextTypes = _extends({}, _themeListener2.default.contextTypes, {
  muiThemeProviderOptions: _propTypes2.default.object
});

exports.default = MuiThemeProvider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcc3R5bGVzXFxNdWlUaGVtZVByb3ZpZGVyLmpzIl0sIm5hbWVzIjpbIk11aVRoZW1lUHJvdmlkZXIiLCJwcm9wcyIsImNvbnRleHQiLCJicm9hZGNhc3QiLCJ1bnN1YnNjcmliZUlkIiwib3V0ZXJUaGVtZSIsImluaXRpYWwiLCJzZXRTdGF0ZSIsIm1lcmdlT3V0ZXJMb2NhbFRoZW1lIiwidGhlbWUiLCJzaGVldHNNYW5hZ2VyIiwiZGlzYWJsZVN0eWxlc0dlbmVyYXRpb24iLCJtdWlUaGVtZVByb3ZpZGVyT3B0aW9ucyIsInVuZGVmaW5lZCIsInN1YnNjcmliZSIsInByZXZQcm9wcyIsInVuc3Vic2NyaWJlIiwibG9jYWxUaGVtZSIsImpvaW4iLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwiYm9vbCIsIm9iamVjdCIsIm9uZU9mVHlwZSIsImZ1bmMiLCJjaGlsZENvbnRleHRUeXBlcyIsImNvbnRleHRUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7SUFLTUEsZ0I7OztBQUNKLDRCQUFZQyxLQUFaLEVBQW1CQyxPQUFuQixFQUE0QjtBQUFBOztBQUcxQjtBQUgwQixvSUFDcEJELEtBRG9CLEVBQ2JDLE9BRGE7O0FBQUEsVUFpRDVCQyxTQWpENEIsR0FpRGhCLHVCQWpEZ0I7QUFBQSxVQWtENUJDLGFBbEQ0QixHQWtEWixJQWxEWTtBQUFBLFVBb0Q1QkMsVUFwRDRCLEdBb0RmLElBcERlO0FBSTFCLFVBQUtBLFVBQUwsR0FBa0Isd0JBQWNDLE9BQWQsQ0FBc0JKLE9BQXRCLENBQWxCO0FBQ0E7QUFDQSxVQUFLQyxTQUFMLENBQWVJLFFBQWYsQ0FBd0IsTUFBS0Msb0JBQUwsQ0FBMEIsTUFBS1AsS0FBTCxDQUFXUSxLQUFyQyxDQUF4QjtBQU4wQjtBQU8zQjs7OztzQ0FFaUI7QUFBQTs7QUFBQSxtQkFDbUMsS0FBS1IsS0FEeEM7QUFBQSxVQUNSUyxhQURRLFVBQ1JBLGFBRFE7QUFBQSxVQUNPQyx1QkFEUCxVQUNPQSx1QkFEUDs7QUFFaEIsVUFBTUMsMEJBQTBCLEtBQUtWLE9BQUwsQ0FBYVUsdUJBQWIsSUFBd0MsRUFBeEU7O0FBRUEsVUFBSUYsa0JBQWtCRyxTQUF0QixFQUFpQztBQUMvQkQsZ0NBQXdCRixhQUF4QixHQUF3Q0EsYUFBeEM7QUFDRDs7QUFFRCxVQUFJQyw0QkFBNEJFLFNBQWhDLEVBQTJDO0FBQ3pDRCxnQ0FBd0JELHVCQUF4QixHQUFrREEsdUJBQWxEO0FBQ0Q7O0FBRUQsc0VBQ2EsS0FBS1IsU0FEbEIsb0RBRUVTLHVCQUZGO0FBSUQ7Ozt3Q0FFbUI7QUFBQTs7QUFDbEI7QUFDQSxXQUFLUixhQUFMLEdBQXFCLHdCQUFjVSxTQUFkLENBQXdCLEtBQUtaLE9BQTdCLEVBQXNDLHNCQUFjO0FBQ3ZFLGVBQUtHLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0E7QUFDQSxlQUFLRixTQUFMLENBQWVJLFFBQWYsQ0FBd0IsT0FBS0Msb0JBQUwsQ0FBMEIsT0FBS1AsS0FBTCxDQUFXUSxLQUFyQyxDQUF4QjtBQUNELE9BSm9CLENBQXJCO0FBS0Q7Ozt1Q0FFa0JNLFMsRUFBVztBQUM1QjtBQUNBLFVBQUksS0FBS2QsS0FBTCxDQUFXUSxLQUFYLEtBQXFCTSxVQUFVTixLQUFuQyxFQUEwQztBQUN4QyxhQUFLTixTQUFMLENBQWVJLFFBQWYsQ0FBd0IsS0FBS0Msb0JBQUwsQ0FBMEIsS0FBS1AsS0FBTCxDQUFXUSxLQUFyQyxDQUF4QjtBQUNEO0FBQ0Y7OzsyQ0FFc0I7QUFDckIsVUFBSSxLQUFLTCxhQUFMLEtBQXVCLElBQTNCLEVBQWlDO0FBQy9CLGdDQUFjWSxXQUFkLENBQTBCLEtBQUtkLE9BQS9CLEVBQXdDLEtBQUtFLGFBQTdDO0FBQ0Q7QUFDRjtBQUlEOzs7Ozs7QUFHQTt5Q0FDcUJhLFUsRUFBWTtBQUMvQjtBQUNBLFVBQUksT0FBT0EsVUFBUCxLQUFzQixVQUExQixFQUFzQztBQUNwQywrQkFDRSxLQUFLWixVQURQLEVBRUUsQ0FDRSw4REFDRSxvQ0FGSixFQUdFLHVEQUhGLEVBSUUsRUFKRixFQUtFLHFDQUxGLEVBTUUsb0VBQ0UsNEJBUEosRUFRRWEsSUFSRixDQVFPLElBUlAsQ0FGRjtBQVlBLGVBQU9ELFdBQVcsS0FBS1osVUFBaEIsQ0FBUDtBQUNEOztBQUVELFVBQUksQ0FBQyxLQUFLQSxVQUFWLEVBQXNCO0FBQ3BCLGVBQU9ZLFVBQVA7QUFDRDs7QUFFRCwwQkFBWSxLQUFLWixVQUFqQixFQUFnQ1ksVUFBaEM7QUFDRDs7OzZCQUVRO0FBQ1AsYUFBTyxLQUFLaEIsS0FBTCxDQUFXa0IsUUFBbEI7QUFDRDs7OztFQW5GNEIsZ0JBQU1DLFM7O0FBc0ZyQ3BCLGlCQUFpQnFCLFNBQWpCLEdBQTZCO0FBQzNCOzs7QUFHQUYsWUFBVSxvQkFBVUcsSUFBVixDQUFlQyxVQUpFO0FBSzNCOzs7Ozs7OztBQVFBWiwyQkFBeUIsb0JBQVVhLElBYlI7QUFjM0I7Ozs7O0FBS0FkLGlCQUFlLG9CQUFVZSxNQW5CRTtBQW9CM0I7OztBQUdBaEIsU0FBTyxvQkFBVWlCLFNBQVYsQ0FBb0IsQ0FBQyxvQkFBVUQsTUFBWCxFQUFtQixvQkFBVUUsSUFBN0IsQ0FBcEIsRUFBd0RKO0FBdkJwQyxDQUE3Qjs7QUEwQkF2QixpQkFBaUJxQixTQUFqQixHQUE2Qix5QkFBVXJCLGlCQUFpQnFCLFNBQTNCLEVBQXNDLGtCQUF0QyxDQUE3Qjs7QUFFQXJCLGlCQUFpQjRCLGlCQUFqQixnQkFDSyx3QkFBY0MsWUFEbkI7QUFFRWpCLDJCQUF5QixvQkFBVWE7QUFGckM7O0FBS0F6QixpQkFBaUI2QixZQUFqQixnQkFDSyx3QkFBY0EsWUFEbkI7QUFFRWpCLDJCQUF5QixvQkFBVWE7QUFGckM7O2tCQUtlekIsZ0IiLCJmaWxlIjoiTXVpVGhlbWVQcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9ybWNxdWVuL3NsdC11aS9tYXRlcmlhbC11aSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnd2FybmluZyc7XG5pbXBvcnQgY3JlYXRlQnJvYWRjYXN0IGZyb20gJ2JyY2FzdCc7XG5pbXBvcnQgdGhlbWVMaXN0ZW5lciwgeyBDSEFOTkVMIH0gZnJvbSAnLi90aGVtZUxpc3RlbmVyJztcbmltcG9ydCBleGFjdFByb3AgZnJvbSAnLi4vdXRpbHMvZXhhY3RQcm9wJztcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCB0YWtlcyBhIGB0aGVtZWAgcHJvcGVydHkuXG4gKiBJdCBtYWtlcyB0aGUgYHRoZW1lYCBhdmFpbGFibGUgZG93biB0aGUgUmVhY3QgdHJlZSB0aGFua3MgdG8gUmVhY3QgY29udGV4dC5cbiAqIFRoaXMgY29tcG9uZW50IHNob3VsZCBwcmVmZXJhYmx5IGJlIHVzZWQgYXQgKip0aGUgcm9vdCBvZiB5b3VyIGNvbXBvbmVudCB0cmVlKiouXG4gKi9cbmNsYXNzIE11aVRoZW1lUHJvdmlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgIC8vIEdldCB0aGUgb3V0ZXIgdGhlbWUgZnJvbSB0aGUgY29udGV4dCwgY2FuIGJlIG51bGxcbiAgICB0aGlzLm91dGVyVGhlbWUgPSB0aGVtZUxpc3RlbmVyLmluaXRpYWwoY29udGV4dCk7XG4gICAgLy8gUHJvcGFnYXRlIHRoZSB0aGVtZSBzbyBpdCBjYW4gYmUgYWNjZXNzZWQgYnkgdGhlIGNoaWxkcmVuXG4gICAgdGhpcy5icm9hZGNhc3Quc2V0U3RhdGUodGhpcy5tZXJnZU91dGVyTG9jYWxUaGVtZSh0aGlzLnByb3BzLnRoZW1lKSk7XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgY29uc3QgeyBzaGVldHNNYW5hZ2VyLCBkaXNhYmxlU3R5bGVzR2VuZXJhdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBtdWlUaGVtZVByb3ZpZGVyT3B0aW9ucyA9IHRoaXMuY29udGV4dC5tdWlUaGVtZVByb3ZpZGVyT3B0aW9ucyB8fCB7fTtcblxuICAgIGlmIChzaGVldHNNYW5hZ2VyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG11aVRoZW1lUHJvdmlkZXJPcHRpb25zLnNoZWV0c01hbmFnZXIgPSBzaGVldHNNYW5hZ2VyO1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlU3R5bGVzR2VuZXJhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBtdWlUaGVtZVByb3ZpZGVyT3B0aW9ucy5kaXNhYmxlU3R5bGVzR2VuZXJhdGlvbiA9IGRpc2FibGVTdHlsZXNHZW5lcmF0aW9uO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBbQ0hBTk5FTF06IHRoaXMuYnJvYWRjYXN0LFxuICAgICAgbXVpVGhlbWVQcm92aWRlck9wdGlvbnMsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIFN1YnNjcmliZSBvbiB0aGUgb3V0ZXIgdGhlbWUsIGlmIHByZXNlbnRcbiAgICB0aGlzLnVuc3Vic2NyaWJlSWQgPSB0aGVtZUxpc3RlbmVyLnN1YnNjcmliZSh0aGlzLmNvbnRleHQsIG91dGVyVGhlbWUgPT4ge1xuICAgICAgdGhpcy5vdXRlclRoZW1lID0gb3V0ZXJUaGVtZTtcbiAgICAgIC8vIEZvcndhcmQgdGhlIHBhcmVudCB0aGVtZSB1cGRhdGUgdG8gdGhlIGNoaWxkcmVuXG4gICAgICB0aGlzLmJyb2FkY2FzdC5zZXRTdGF0ZSh0aGlzLm1lcmdlT3V0ZXJMb2NhbFRoZW1lKHRoaXMucHJvcHMudGhlbWUpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAvLyBQcm9wYWdhdGUgYSBsb2NhbCB0aGVtZSB1cGRhdGVcbiAgICBpZiAodGhpcy5wcm9wcy50aGVtZSAhPT0gcHJldlByb3BzLnRoZW1lKSB7XG4gICAgICB0aGlzLmJyb2FkY2FzdC5zZXRTdGF0ZSh0aGlzLm1lcmdlT3V0ZXJMb2NhbFRoZW1lKHRoaXMucHJvcHMudGhlbWUpKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy51bnN1YnNjcmliZUlkICE9PSBudWxsKSB7XG4gICAgICB0aGVtZUxpc3RlbmVyLnVuc3Vic2NyaWJlKHRoaXMuY29udGV4dCwgdGhpcy51bnN1YnNjcmliZUlkKTtcbiAgICB9XG4gIH1cblxuICBicm9hZGNhc3QgPSBjcmVhdGVCcm9hZGNhc3QoKTtcbiAgdW5zdWJzY3JpYmVJZCA9IG51bGw7XG4gIC8vIFdlIGFyZSBub3QgdXNpbmcgdGhlIFJlYWN0IHN0YXRlIGluIG9yZGVyIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHJlcmVuZGVyLlxuICBvdXRlclRoZW1lID0gbnVsbDtcblxuICAvLyBTaW1wbGUgbWVyZ2UgYmV0d2VlbiB0aGUgb3V0ZXIgdGhlbWUgYW5kIHRoZSBsb2NhbCB0aGVtZVxuICBtZXJnZU91dGVyTG9jYWxUaGVtZShsb2NhbFRoZW1lKSB7XG4gICAgLy8gVG8gc3VwcG9ydCBjb21wb3NpdGlvbiBvZiB0aGVtZS5cbiAgICBpZiAodHlwZW9mIGxvY2FsVGhlbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHdhcm5pbmcoXG4gICAgICAgIHRoaXMub3V0ZXJUaGVtZSxcbiAgICAgICAgW1xuICAgICAgICAgICdNYXRlcmlhbC1VSTogeW91IGFyZSBwcm92aWRpbmcgYSB0aGVtZSBmdW5jdGlvbiBwcm9wZXJ0eSAnICtcbiAgICAgICAgICAgICd0byB0aGUgTXVpVGhlbWVQcm92aWRlciBjb21wb25lbnQ6JyxcbiAgICAgICAgICAnPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e291dGVyVGhlbWUgPT4gb3V0ZXJUaGVtZX0gLz4nLFxuICAgICAgICAgICcnLFxuICAgICAgICAgICdIb3dldmVyLCBubyBvdXRlciB0aGVtZSBpcyBwcmVzZW50LicsXG4gICAgICAgICAgJ01ha2Ugc3VyZSBhIHRoZW1lIGlzIGFscmVhZHkgaW5qZWN0ZWQgaGlnaGVyIGluIHRoZSBSZWFjdCB0cmVlICcgK1xuICAgICAgICAgICAgJ29yIHByb3ZpZGUgYSB0aGVtZSBvYmplY3QuJyxcbiAgICAgICAgXS5qb2luKCdcXG4nKSxcbiAgICAgICk7XG4gICAgICByZXR1cm4gbG9jYWxUaGVtZSh0aGlzLm91dGVyVGhlbWUpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5vdXRlclRoZW1lKSB7XG4gICAgICByZXR1cm4gbG9jYWxUaGVtZTtcbiAgICB9XG5cbiAgICByZXR1cm4geyAuLi50aGlzLm91dGVyVGhlbWUsIC4uLmxvY2FsVGhlbWUgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgfVxufVxuXG5NdWlUaGVtZVByb3ZpZGVyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFlvdSBjYW4gb25seSBwcm92aWRlIGEgc2luZ2xlIGVsZW1lbnQgd2l0aCByZWFjdEAxNSwgYSBub2RlIHdpdGggcmVhY3RAMTYuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIFlvdSBjYW4gZGlzYWJsZSB0aGUgZ2VuZXJhdGlvbiBvZiB0aGUgc3R5bGVzIHdpdGggdGhpcyBvcHRpb24uXG4gICAqIEl0IGNhbiBiZSB1c2VmdWwgd2hlbiB0cmF2ZXJzaW5nIHRoZSBSZWFjdCB0cmVlIG91dHNpZGUgb2YgdGhlIEhUTUxcbiAgICogcmVuZGVyaW5nIHN0ZXAgb24gdGhlIHNlcnZlci5cbiAgICogTGV0J3Mgc2F5IHlvdSBhcmUgdXNpbmcgcmVhY3QtYXBvbGxvIHRvIGV4dHJhY3QgYWxsXG4gICAqIHRoZSBxdWVyaWVzIG1hZGUgYnkgdGhlIGludGVyZmFjZSBzZXJ2ZXIgc2lkZS5cbiAgICogWW91IGNhbiBzaWduaWZpY2FudGx5IHNwZWVkIHVwIHRoZSB0cmF2ZXJzYWwgd2l0aCB0aGlzIHByb3BlcnR5LlxuICAgKi9cbiAgZGlzYWJsZVN0eWxlc0dlbmVyYXRpb246IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICogVGhlIHNoZWV0c01hbmFnZXIgaXMgdXNlZCB0byBkZWR1cGxpY2F0ZSBzdHlsZSBzaGVldCBpbmplY3Rpb24gaW4gdGhlIHBhZ2UuXG4gICAqIEl0J3MgZGVkdXBsaWNhdGluZyB1c2luZyB0aGUgKHRoZW1lLCBzdHlsZXMpIGNvdXBsZS5cbiAgICogT24gdGhlIHNlcnZlciwgeW91IHNob3VsZCBwcm92aWRlIGEgbmV3IGluc3RhbmNlIGZvciBlYWNoIHJlcXVlc3QuXG4gICAqL1xuICBzaGVldHNNYW5hZ2VyOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICogQSB0aGVtZSBvYmplY3QuXG4gICAqL1xuICB0aGVtZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKS5pc1JlcXVpcmVkLFxufTtcblxuTXVpVGhlbWVQcm92aWRlci5wcm9wVHlwZXMgPSBleGFjdFByb3AoTXVpVGhlbWVQcm92aWRlci5wcm9wVHlwZXMsICdNdWlUaGVtZVByb3ZpZGVyJyk7XG5cbk11aVRoZW1lUHJvdmlkZXIuY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gIC4uLnRoZW1lTGlzdGVuZXIuY29udGV4dFR5cGVzLFxuICBtdWlUaGVtZVByb3ZpZGVyT3B0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbk11aVRoZW1lUHJvdmlkZXIuY29udGV4dFR5cGVzID0ge1xuICAuLi50aGVtZUxpc3RlbmVyLmNvbnRleHRUeXBlcyxcbiAgbXVpVGhlbWVQcm92aWRlck9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNdWlUaGVtZVByb3ZpZGVyO1xuIl19

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function createBroadcast (initialState) {
  var listeners = {};
  var id = 1;
  var _state = initialState;

  function getState () {
    return _state
  }

  function setState (state) {
    _state = state;
    var keys = Object.keys(listeners);
    var i = 0;
    var len = keys.length;
    for (; i < len; i++) {
      // if a listener gets unsubscribed during setState we just skip it
      if (listeners[keys[i]]) { listeners[keys[i]](state); }
    }
  }

  // subscribe to changes and return the subscriptionId
  function subscribe (listener) {
    if (typeof listener !== 'function') {
      throw new Error('listener must be a function.')
    }
    var currentId = id;
    listeners[currentId] = listener;
    id += 1;
    return currentId
  }

  // remove subscription by removing the listener function
  function unsubscribe (id) {
    listeners[id] = undefined;
  }

  return { getState: getState, setState: setState, subscribe: subscribe, unsubscribe: unsubscribe }
}

/* harmony default export */ __webpack_exports__["default"] = (createBroadcast);


/***/ })

});