'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _SwitchBase = require('../internal/SwitchBase');

var _SwitchBase2 = _interopRequireDefault(_SwitchBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'inline-flex',
      width: 62,
      position: 'relative',
      flexShrink: 0,
      // For correct alignment with the text.
      verticalAlign: 'middle'
    },
    bar: {
      borderRadius: 14 / 2,
      display: 'block',
      position: 'absolute',
      width: 34,
      height: 14,
      top: '50%',
      marginTop: -14 / 2,
      left: '50%',
      marginLeft: -17,
      transition: theme.transitions.create(['opacity', 'background-color'], {
        duration: theme.transitions.duration.shortest
      }),
      backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white,
      opacity: theme.palette.type === 'light' ? 0.38 : 0.3
    },
    icon: {
      boxShadow: theme.shadows[1],
      backgroundColor: 'currentColor',
      width: 20,
      height: 20,
      borderRadius: '50%'
    },
    iconChecked: {
      boxShadow: theme.shadows[2]
    },
    // For SwitchBase
    default: {
      zIndex: 1,
      color: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[400],
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    checked: {
      transform: 'translateX(14px)',
      '& + $bar': {
        opacity: 0.5
      }
    },
    checkedPrimary: {
      color: theme.palette.primary.main,
      '& + $bar': {
        backgroundColor: theme.palette.primary.main
      }
    },
    checkedSecondary: {
      color: theme.palette.secondary.main,
      '& + $bar': {
        backgroundColor: theme.palette.secondary.main
      }
    },
    disabled: {
      color: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800],
      '& + $bar': {
        backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white,
        opacity: theme.palette.type === 'light' ? 0.12 : 0.1
      },
      '& $icon': {
        boxShadow: theme.shadows[1]
      }
    }
  };
};

function Switch(props) {
  var _classNames;

  var classes = props.classes,
      className = props.className,
      color = props.color,
      other = (0, _objectWithoutProperties3.default)(props, ['classes', 'className', 'color']);

  var icon = _react2.default.createElement('span', { className: classes.icon });
  var checkedIcon = _react2.default.createElement('span', { className: (0, _classnames2.default)(classes.icon, classes.iconChecked) });
  var checkedClass = (0, _classnames2.default)(classes.checked, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.checkedPrimary, color === 'primary'), (0, _defineProperty3.default)(_classNames, classes.checkedSecondary, color === 'secondary'), _classNames));

  return _react2.default.createElement(
    'span',
    { className: (0, _classnames2.default)(classes.root, className) },
    _react2.default.createElement(_SwitchBase2.default, (0, _extends3.default)({
      icon: icon,
      classes: {
        default: classes.default,
        checked: checkedClass,
        disabled: classes.disabled
      },
      checkedIcon: checkedIcon
    }, other)),
    _react2.default.createElement('span', { className: classes.bar })
  );
}

Switch.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * If `true`, the component is checked.
   */
  checked: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes2.default.oneOf(['primary', 'secondary']),
  /**
   * @ignore
   */
  defaultChecked: _propTypes2.default.bool,
  /**
   * If `true`, the switch will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: _propTypes2.default.bool,
  /**
   * The icon to display when the component is unchecked.
   */
  icon: _propTypes2.default.node,
  /**
   * The id of the `input` element.
   */
  id: _propTypes2.default.string,
  /**
   * Properties applied to the `input` element.
   */
  inputProps: _propTypes2.default.object,
  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: _propTypes2.default.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback
   * @param {boolean} checked The `checked` value of the switch
   */
  onChange: _propTypes2.default.func,
  /**
   * The input component property `type`.
   */
  type: _propTypes2.default.string,
  /**
   * The value of the component.
   */
  value: _propTypes2.default.string
} : {};

Switch.defaultProps = {
  color: 'secondary'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiSwitch' })(Switch);