"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _SwitchBase = _interopRequireDefault(require("../internal/SwitchBase"));

var _CheckBoxOutlineBlank = _interopRequireDefault(require("../internal/svg-icons/CheckBoxOutlineBlank"));

var _CheckBox = _interopRequireDefault(require("../internal/svg-icons/CheckBox"));

var _IndeterminateCheckBox = _interopRequireDefault(require("../internal/svg-icons/IndeterminateCheckBox"));

var _helpers = require("../utils/helpers");

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var styles = function styles(theme) {
  return {
    root: {
      color: theme.palette.text.secondary
    },
    checked: {},
    disabled: {},
    colorPrimary: {
      '&$checked': {
        color: theme.palette.primary.main
      },
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    },
    colorSecondary: {
      '&$checked': {
        color: theme.palette.secondary.main
      },
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    }
  };
};

exports.styles = styles;

function Checkbox(props) {
  var checkedIcon = props.checkedIcon,
      classes = props.classes,
      color = props.color,
      icon = props.icon,
      indeterminate = props.indeterminate,
      indeterminateIcon = props.indeterminateIcon,
      other = (0, _objectWithoutProperties2.default)(props, ["checkedIcon", "classes", "color", "icon", "indeterminate", "indeterminateIcon"]);
  return _react.default.createElement(_SwitchBase.default, (0, _extends2.default)({
    checkedIcon: indeterminate ? indeterminateIcon : checkedIcon,
    classes: {
      root: (0, _classnames.default)(classes.root, classes["color".concat((0, _helpers.capitalize)(color))]),
      checked: classes.checked,
      disabled: classes.disabled
    },
    icon: indeterminate ? indeterminateIcon : icon
  }, other));
}

Checkbox.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * If `true`, the component is checked.
   */
  checked: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string]),

  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: _propTypes.default.node,

  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes.default.oneOf(['primary', 'secondary', 'default']),

  /**
   * If `true`, the switch will be disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: _propTypes.default.bool,

  /**
   * The icon to display when the component is unchecked.
   */
  icon: _propTypes.default.node,

  /**
   * The id of the `input` element.
   */
  id: _propTypes.default.string,

  /**
   * If `true`, the component appears indeterminate.
   */
  indeterminate: _propTypes.default.bool,

  /**
   * The icon to display when the component is indeterminate.
   */
  indeterminateIcon: _propTypes.default.node,

  /**
   * Properties applied to the `input` element.
   */
  inputProps: _propTypes.default.object,

  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: _propTypes.default.func,

  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.checked`.
   * @param {boolean} checked The `checked` value of the switch
   */
  onChange: _propTypes.default.func,

  /**
   * The input component property `type`.
   */
  type: _propTypes.default.string,

  /**
   * The value of the component.
   */
  value: _propTypes.default.string
} : {};
Checkbox.defaultProps = {
  checkedIcon: _react.default.createElement(_CheckBox.default, null),
  color: 'secondary',
  icon: _react.default.createElement(_CheckBoxOutlineBlank.default, null),
  indeterminate: false,
  indeterminateIcon: _react.default.createElement(_IndeterminateCheckBox.default, null)
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiCheckbox'
})(Checkbox);

exports.default = _default;