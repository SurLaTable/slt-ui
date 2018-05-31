"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _getPrototypeOf = _interopRequireDefault(require("@babel/runtime/core-js/object/get-prototype-of"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _ButtonBase = _interopRequireDefault(require("../ButtonBase"));

// @inheritedComponent ButtonBase
var styles = function styles(theme) {
  return {
    root: {
      transition: theme.transitions.create(['color', 'padding-top'], {
        duration: theme.transitions.duration.short
      }),
      paddingTop: theme.spacing.unit,
      paddingBottom: 10,
      paddingLeft: 12,
      paddingRight: 12,
      minWidth: 80,
      maxWidth: 168,
      color: theme.palette.text.secondary,
      flex: '1',
      '&$iconOnly': {
        paddingTop: theme.spacing.unit * 2
      },
      '&$selected': {
        paddingTop: 6,
        color: theme.palette.primary.main
      }
    },
    selected: {},
    iconOnly: {},
    wrapper: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      flexDirection: 'column'
    },
    label: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(12),
      opacity: 1,
      transition: 'font-size 0.2s, opacity 0.2s',
      transitionDelay: '0.1s',
      '&$iconOnly': {
        opacity: 0,
        transitionDelay: '0s'
      },
      '&$selected': {
        fontSize: theme.typography.pxToRem(14)
      }
    }
  };
};

exports.styles = styles;

var BottomNavigationAction =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(BottomNavigationAction, _React$Component);

  function BottomNavigationAction() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, BottomNavigationAction);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = BottomNavigationAction.__proto__ || (0, _getPrototypeOf.default)(BottomNavigationAction)).call.apply(_ref, [this].concat(args))), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        var _this$props = _this.props,
            onChange = _this$props.onChange,
            value = _this$props.value,
            onClick = _this$props.onClick;

        if (onChange) {
          onChange(event, value);
        }

        if (onClick) {
          onClick(event);
        }
      }
    }), _temp));
  }

  (0, _createClass2.default)(BottomNavigationAction, [{
    key: "render",
    value: function render() {
      var _classNames, _classNames2;

      var _props = this.props,
          classes = _props.classes,
          classNameProp = _props.className,
          icon = _props.icon,
          label = _props.label,
          onChange = _props.onChange,
          onClick = _props.onClick,
          selected = _props.selected,
          showLabelProp = _props.showLabel,
          value = _props.value,
          other = (0, _objectWithoutProperties2.default)(_props, ["classes", "className", "icon", "label", "onChange", "onClick", "selected", "showLabel", "value"]);
      var className = (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.selected, selected), (0, _defineProperty2.default)(_classNames, classes.iconOnly, !showLabelProp && !selected), _classNames), classNameProp);
      var labelClassName = (0, _classnames.default)(classes.label, (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, classes.selected, selected), (0, _defineProperty2.default)(_classNames2, classes.iconOnly, !showLabelProp && !selected), _classNames2));
      return _react.default.createElement(_ButtonBase.default, (0, _extends2.default)({
        className: className,
        focusRipple: true,
        onClick: this.handleChange
      }, other), _react.default.createElement("span", {
        className: classes.wrapper
      }, icon, _react.default.createElement("span", {
        className: labelClassName
      }, label)));
    }
  }]);
  return BottomNavigationAction;
}(_react.default.Component);

BottomNavigationAction.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The icon element.
   */
  icon: _propTypes.default.node,

  /**
   * The label element.
   */
  label: _propTypes.default.node,

  /**
   * @ignore
   */
  onChange: _propTypes.default.func,

  /**
   * @ignore
   */
  onClick: _propTypes.default.func,

  /**
   * @ignore
   */
  selected: _propTypes.default.bool,

  /**
   * If `true`, the BottomNavigationAction will show its label.
   */
  showLabel: _propTypes.default.bool,

  /**
   * You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value: _propTypes.default.any
} : {};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiBottomNavigationAction'
})(BottomNavigationAction);

exports.default = _default;