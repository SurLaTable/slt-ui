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

var _keycode = _interopRequireDefault(require("keycode"));

var _Cancel = _interopRequireDefault(require("../internal/svg-icons/Cancel"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _colorManipulator = require("../styles/colorManipulator");

require("../Avatar/Avatar");

// So we don't have any override priority issue.
var styles = function styles(theme) {
  var height = 32;
  var backgroundColor = theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700];
  var deleteIconColor = (0, _colorManipulator.fade)(theme.palette.text.primary, 0.26);
  return {
    root: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(13),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: height,
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor: backgroundColor,
      borderRadius: height / 2,
      whiteSpace: 'nowrap',
      transition: theme.transitions.create(['background-color', 'box-shadow']),
      // label will inherit this from root, then `clickable` class overrides this for both
      cursor: 'default',
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 'none',
      border: 'none',
      // Remove `button` border
      padding: 0 // Remove `button` padding

    },
    clickable: {
      // Remove grey highlight
      WebkitTapHighlightColor: 'transparent',
      cursor: 'pointer',
      '&:hover, &:focus': {
        backgroundColor: (0, _colorManipulator.emphasize)(backgroundColor, 0.08)
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: (0, _colorManipulator.emphasize)(backgroundColor, 0.12)
      }
    },
    deletable: {
      '&:focus': {
        backgroundColor: (0, _colorManipulator.emphasize)(backgroundColor, 0.08)
      }
    },
    avatar: {
      marginRight: -4,
      width: height,
      height: height,
      color: theme.palette.type === 'light' ? theme.palette.grey[700] : theme.palette.grey[300],
      fontSize: theme.typography.pxToRem(16)
    },
    avatarChildren: {
      width: 19,
      height: 19
    },
    label: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 12,
      paddingRight: 12,
      userSelect: 'none',
      whiteSpace: 'nowrap',
      cursor: 'inherit'
    },
    deleteIcon: {
      // Remove grey highlight
      WebkitTapHighlightColor: 'transparent',
      color: deleteIconColor,
      cursor: 'pointer',
      height: 'auto',
      margin: '0 4px 0 -8px',
      '&:hover': {
        color: (0, _colorManipulator.fade)(deleteIconColor, 0.4)
      }
    }
  };
};
/**
 * Chips represent complex entities in small blocks, such as a contact.
 */


exports.styles = styles;

var Chip =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Chip, _React$Component);

  function Chip() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, Chip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = Chip.__proto__ || (0, _getPrototypeOf.default)(Chip)).call.apply(_ref, [this].concat(args))), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "chipRef", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: null
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleDeleteIconClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        // Stop the event from bubbling up to the `Chip`
        event.stopPropagation();
        var onDelete = _this.props.onDelete;

        if (onDelete) {
          onDelete(event);
        }
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleKeyDown", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        // Ignore events from children of `Chip`.
        if (event.currentTarget !== event.target) {
          return;
        }

        var _this$props = _this.props,
            onClick = _this$props.onClick,
            onDelete = _this$props.onDelete,
            onKeyDown = _this$props.onKeyDown;
        var key = (0, _keycode.default)(event);

        if (onClick && (key === 'space' || key === 'enter')) {
          event.preventDefault();
          onClick(event);
        } else if (onDelete && key === 'backspace') {
          event.preventDefault();
          onDelete(event);
        } else if (key === 'esc') {
          event.preventDefault();

          if (_this.chipRef) {
            _this.chipRef.blur();
          }
        }

        if (onKeyDown) {
          onKeyDown(event);
        }
      }
    }), _temp));
  }

  (0, _createClass2.default)(Chip, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          avatarProp = _props.avatar,
          classes = _props.classes,
          classNameProp = _props.className,
          Component = _props.component,
          deleteIconProp = _props.deleteIcon,
          label = _props.label,
          onClick = _props.onClick,
          onDelete = _props.onDelete,
          onKeyDown = _props.onKeyDown,
          tabIndexProp = _props.tabIndex,
          other = (0, _objectWithoutProperties2.default)(_props, ["avatar", "classes", "className", "component", "deleteIcon", "label", "onClick", "onDelete", "onKeyDown", "tabIndex"]);
      var className = (0, _classnames.default)(classes.root, (0, _defineProperty2.default)({}, classes.clickable, onClick), (0, _defineProperty2.default)({}, classes.deletable, onDelete), classNameProp);
      var deleteIcon = null;

      if (onDelete) {
        deleteIcon = deleteIconProp && _react.default.isValidElement(deleteIconProp) ? _react.default.cloneElement(deleteIconProp, {
          className: (0, _classnames.default)(deleteIconProp.props.className, classes.deleteIcon),
          onClick: this.handleDeleteIconClick
        }) : _react.default.createElement(_Cancel.default, {
          className: classes.deleteIcon,
          onClick: this.handleDeleteIconClick
        });
      }

      var avatar = null;

      if (avatarProp && _react.default.isValidElement(avatarProp)) {
        avatar = _react.default.cloneElement(avatarProp, {
          className: (0, _classnames.default)(classes.avatar, avatarProp.props.className),
          childrenClassName: (0, _classnames.default)(classes.avatarChildren, avatarProp.props.childrenClassName)
        });
      }

      var tabIndex = tabIndexProp;

      if (!tabIndex) {
        tabIndex = onClick || onDelete ? 0 : -1;
      }

      return _react.default.createElement(Component, (0, _extends2.default)({
        role: "button",
        className: className,
        tabIndex: tabIndex,
        onClick: onClick,
        onKeyDown: this.handleKeyDown,
        ref: function ref(node) {
          _this2.chipRef = node;
        }
      }, other), avatar, _react.default.createElement("span", {
        className: classes.label
      }, label), deleteIcon);
    }
  }]);
  return Chip;
}(_react.default.Component);

Chip.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Avatar element.
   */
  avatar: _propTypes.default.element,

  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),

  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: _propTypes.default.element,

  /**
   * The content of the label.
   */
  label: _propTypes.default.node,

  /**
   * @ignore
   */
  onClick: _propTypes.default.func,

  /**
   * Callback function fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: _propTypes.default.func,

  /**
   * @ignore
   */
  onKeyDown: _propTypes.default.func,

  /**
   * @ignore
   */
  tabIndex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
} : {};
Chip.defaultProps = {
  component: 'div'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiChip'
})(Chip);

exports.default = _default;