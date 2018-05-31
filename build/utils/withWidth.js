"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isWidthDown = exports.isWidthUp = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _getPrototypeOf = _interopRequireDefault(require("@babel/runtime/core-js/object/get-prototype-of"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactEventListener = _interopRequireDefault(require("react-event-listener"));

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var _wrapDisplayName = _interopRequireDefault(require("recompose/wrapDisplayName"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _withTheme = _interopRequireDefault(require("../styles/withTheme"));

var _createBreakpoints = require("../styles/createBreakpoints");

// By default, returns true if screen width is the same or greater than the given breakpoint.
var isWidthUp = function isWidthUp(breakpoint, width) {
  var inclusive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (inclusive) {
    return _createBreakpoints.keys.indexOf(breakpoint) <= _createBreakpoints.keys.indexOf(width);
  }

  return _createBreakpoints.keys.indexOf(breakpoint) < _createBreakpoints.keys.indexOf(width);
}; // By default, returns true if screen width is the same or less than the given breakpoint.


exports.isWidthUp = isWidthUp;

var isWidthDown = function isWidthDown(breakpoint, width) {
  var inclusive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (inclusive) {
    return _createBreakpoints.keys.indexOf(width) <= _createBreakpoints.keys.indexOf(breakpoint);
  }

  return _createBreakpoints.keys.indexOf(width) < _createBreakpoints.keys.indexOf(breakpoint);
};

exports.isWidthDown = isWidthDown;

var withWidth = function withWidth() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (Component) {
    var _options$resizeInterv = options.resizeInterval,
        resizeInterval = _options$resizeInterv === void 0 ? 166 : _options$resizeInterv,
        _options$withTheme = options.withTheme,
        withThemeOption = _options$withTheme === void 0 ? false : _options$withTheme;

    var WithWidth =
    /*#__PURE__*/
    function (_React$Component) {
      (0, _inherits2.default)(WithWidth, _React$Component);

      function WithWidth() {
        var _ref;

        var _temp, _this;

        (0, _classCallCheck2.default)(this, WithWidth);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = WithWidth.__proto__ || (0, _getPrototypeOf.default)(WithWidth)).call.apply(_ref, [this].concat(args))), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "state", {
          configurable: true,
          enumerable: true,
          writable: true,
          value: {
            width: undefined
          }
        }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleResize", {
          configurable: true,
          enumerable: true,
          writable: true,
          value: (0, _debounce.default)(function () {
            _this.updateWidth(window.innerWidth);
          }, resizeInterval)
        }), _temp));
      }

      (0, _createClass2.default)(WithWidth, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.updateWidth(window.innerWidth);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.handleResize.cancel();
        }
      }, {
        key: "updateWidth",
        value: function updateWidth(innerWidth) {
          var breakpoints = this.props.theme.breakpoints;
          var width = null;
          /**
           * Start with the slowest value as low end devices often have a small screen.
           *
           * innerWidth |xs      sm      md      lg      xl
           *            |-------|-------|-------|-------|------>
           * width      |  xs   |  sm   |  md   |  lg   |  xl
           */

          var index = 1;

          while (width === null && index < _createBreakpoints.keys.length) {
            var currentWidth = _createBreakpoints.keys[index]; // @media are inclusive, so reproduce the behavior here.

            if (innerWidth < breakpoints.values[currentWidth]) {
              width = _createBreakpoints.keys[index - 1];
              break;
            }

            index += 1;
          }

          width = width || 'xl';

          if (width !== this.state.width) {
            this.setState({
              width: width
            });
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _props = this.props,
              initialWidth = _props.initialWidth,
              theme = _props.theme,
              width = _props.width,
              other = (0, _objectWithoutProperties2.default)(_props, ["initialWidth", "theme", "width"]);
          var props = (0, _objectSpread2.default)({
            width: width || this.state.width || initialWidth
          }, other);
          var more = {};

          if (withThemeOption) {
            more.theme = theme;
          } // When rendering the component on the server,
          // we have no idea about the client browser screen width.
          // In order to prevent blinks and help the reconciliation of the React tree
          // we are not rendering the child component.
          //
          // An alternative is to use the `initialWidth` property.


          if (props.width === undefined) {
            return null;
          }

          return _react.default.createElement(_reactEventListener.default, {
            target: "window",
            onResize: this.handleResize
          }, _react.default.createElement(Component, (0, _extends2.default)({}, more, props)));
        }
      }]);
      return WithWidth;
    }(_react.default.Component);

    WithWidth.propTypes = process.env.NODE_ENV !== "production" ? {
      /**
       * As `window.innerWidth` is unavailable on the server,
       * we default to rendering an empty componenent during the first mount.
       * In some situation you might want to use an heristic to approximate
       * the screen width of the client browser screen width.
       *
       * For instance, you could be using the user-agent or the client-hints.
       * http://caniuse.com/#search=client%20hint
       */
      initialWidth: _propTypes.default.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),

      /**
       * @ignore
       */
      theme: _propTypes.default.object.isRequired,

      /**
       * Bypass the width calculation logic.
       */
      width: _propTypes.default.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
    } : {};

    if (process.env.NODE_ENV !== 'production') {
      WithWidth.displayName = (0, _wrapDisplayName.default)(Component, 'WithWidth');
    }

    (0, _hoistNonReactStatics.default)(WithWidth, Component);
    return (0, _withTheme.default)()(WithWidth);
  };
};

var _default = withWidth;
exports.default = _default;