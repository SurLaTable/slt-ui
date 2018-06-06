"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _getPrototypeOf = _interopRequireDefault(require("@babel/runtime/core-js/object/get-prototype-of"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _react = _interopRequireDefault(require("react"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _wrapDisplayName = _interopRequireDefault(require("recompose/wrapDisplayName"));

var _createMuiTheme = _interopRequireDefault(require("./createMuiTheme"));

var _themeListener = _interopRequireDefault(require("./themeListener"));

var defaultTheme;

function getDefaultTheme() {
  if (defaultTheme) {
    return defaultTheme;
  }

  defaultTheme = (0, _createMuiTheme.default)();
  return defaultTheme;
} // Provide the theme object as a property to the input component.


var withTheme = function withTheme() {
  return function (Component) {
    var WithTheme =
    /*#__PURE__*/
    function (_React$Component) {
      (0, _inherits2.default)(WithTheme, _React$Component);

      function WithTheme(props, context) {
        var _this;

        (0, _classCallCheck2.default)(this, WithTheme);
        _this = (0, _possibleConstructorReturn2.default)(this, (WithTheme.__proto__ || (0, _getPrototypeOf.default)(WithTheme)).call(this, props, context));
        Object.defineProperty((0, _assertThisInitialized2.default)(_this), "state", {
          configurable: true,
          enumerable: true,
          writable: true,
          value: {}
        });
        Object.defineProperty((0, _assertThisInitialized2.default)(_this), "unsubscribeId", {
          configurable: true,
          enumerable: true,
          writable: true,
          value: null
        });
        _this.state = {
          // We use || as the function call is lazy evaluated.
          theme: _themeListener.default.initial(context) || getDefaultTheme()
        };
        return _this;
      }

      (0, _createClass2.default)(WithTheme, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          this.unsubscribeId = _themeListener.default.subscribe(this.context, function (theme) {
            _this2.setState({
              theme: theme
            });
          });
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (this.unsubscribeId !== null) {
            _themeListener.default.unsubscribe(this.context, this.unsubscribeId);
          }
        }
      }, {
        key: "render",
        value: function render() {
          return _react.default.createElement(Component, (0, _extends2.default)({
            theme: this.state.theme
          }, this.props));
        }
      }]);
      return WithTheme;
    }(_react.default.Component);

    WithTheme.contextTypes = _themeListener.default.contextTypes;

    if (process.env.NODE_ENV !== 'production') {
      WithTheme.displayName = (0, _wrapDisplayName.default)(Component, 'WithTheme');
    }

    (0, _hoistNonReactStatics.default)(WithTheme, Component);

    if (process.env.NODE_ENV !== 'production') {
      // Exposed for test purposes.
      WithTheme.Naked = Component;
    }

    return WithTheme;
  };
};

var _default = withTheme;
exports.default = _default;