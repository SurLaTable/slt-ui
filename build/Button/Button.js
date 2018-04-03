'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _colorManipulator = require('../styles/colorManipulator');

var _ButtonBase = require('../ButtonBase');

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

var _helpers = require('../utils/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: (0, _extends3.default)({}, theme.typography.button, {
      lineHeight: '1.4em', // Improve readability for multiline button.
      boxSizing: 'border-box',
      minWidth: theme.spacing.unit * 11,
      minHeight: 36,
      padding: theme.spacing.unit + 'px ' + theme.spacing.unit * 2 + 'px',
      borderRadius: 2,
      color: theme.palette.text.primary,
      transition: theme.transitions.create(['background-color', 'box-shadow'], {
        duration: theme.transitions.duration.short
      }),
      '&:hover': {
        textDecoration: 'none',
        // Reset on mouse devices
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.text.primary, 0.12),
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        },
        '&$disabled': {
          backgroundColor: 'transparent'
        }
      }
    }),
    label: {
      width: '100%',
      display: 'inherit',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    },
    flatPrimary: {
      color: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.primary.main, 0.12),
        // Reset on mouse devices
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },
    flatSecondary: {
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.secondary.main, 0.12),
        // Reset on mouse devices
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },
    colorInherit: {
      color: 'inherit'
    },
    raised: {
      color: theme.palette.getContrastText(theme.palette.grey[300]),
      backgroundColor: theme.palette.grey[300],
      boxShadow: theme.shadows[2],
      '&$keyboardFocused': {
        boxShadow: theme.shadows[6]
      },
      '&:active': {
        boxShadow: theme.shadows[8]
      },
      '&$disabled': {
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.action.disabledBackground
      },
      '&:hover': {
        backgroundColor: theme.palette.grey.A100,
        // Reset on mouse devices
        '@media (hover: none)': {
          backgroundColor: theme.palette.grey[300]
        },
        '&$disabled': {
          backgroundColor: theme.palette.action.disabledBackground
        }
      }
    },
    keyboardFocused: {},
    raisedPrimary: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        // Reset on mouse devices
        '@media (hover: none)': {
          backgroundColor: theme.palette.primary.main
        }
      }
    },
    raisedSecondary: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
        // Reset on mouse devices
        '@media (hover: none)': {
          backgroundColor: theme.palette.secondary.main
        }
      }
    },
    disabled: {
      color: theme.palette.action.disabled
    },
    fab: {
      borderRadius: '50%',
      padding: 0,
      minWidth: 0,
      width: 56,
      fontSize: 24,
      height: 56,
      boxShadow: theme.shadows[6],
      '&:active': {
        boxShadow: theme.shadows[12]
      }
    },
    mini: {
      width: 40,
      height: 40
    },
    sizeSmall: {
      padding: theme.spacing.unit - 1 + 'px ' + theme.spacing.unit + 'px',
      minWidth: theme.spacing.unit * 8,
      minHeight: 32,
      fontSize: theme.typography.pxToRem(13)
    },
    sizeLarge: {
      padding: theme.spacing.unit + 'px ' + theme.spacing.unit * 3 + 'px',
      minWidth: theme.spacing.unit * 14,
      minHeight: 40,
      fontSize: theme.typography.pxToRem(15)
    },
    fullWidth: {
      width: '100%'
    }
  };
}; // @inheritedComponent ButtonBase

function Button(props) {
  var _classNames;

  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      color = props.color,
      disabled = props.disabled,
      disableFocusRipple = props.disableFocusRipple,
      fullWidth = props.fullWidth,
      mini = props.mini,
      size = props.size,
      variant = props.variant,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'classes', 'className', 'color', 'disabled', 'disableFocusRipple', 'fullWidth', 'mini', 'size', 'variant']);


  var fab = variant === 'fab';
  var raised = variant === 'raised';
  var flat = !raised && !fab;
  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.raised, raised || fab), (0, _defineProperty3.default)(_classNames, classes.fab, fab), (0, _defineProperty3.default)(_classNames, classes.mini, fab && mini), (0, _defineProperty3.default)(_classNames, classes.colorInherit, color === 'inherit'), (0, _defineProperty3.default)(_classNames, classes.flatPrimary, flat && color === 'primary'), (0, _defineProperty3.default)(_classNames, classes.flatSecondary, flat && color === 'secondary'), (0, _defineProperty3.default)(_classNames, classes.raisedPrimary, !flat && color === 'primary'), (0, _defineProperty3.default)(_classNames, classes.raisedSecondary, !flat && color === 'secondary'), (0, _defineProperty3.default)(_classNames, classes['size' + (0, _helpers.capitalize)(size)], size !== 'medium'), (0, _defineProperty3.default)(_classNames, classes.disabled, disabled), (0, _defineProperty3.default)(_classNames, classes.fullWidth, fullWidth), _classNames), classNameProp);

  return _react2.default.createElement(
    _ButtonBase2.default,
    (0, _extends3.default)({
      className: className,
      disabled: disabled,
      focusRipple: !disableFocusRipple,
      classes: {
        keyboardFocused: classes.keyboardFocused
      }
    }, other),
    _react2.default.createElement(
      'span',
      { className: classes.label },
      children
    )
  );
}

Button.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The content of the button.
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
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes2.default.oneOf(['default', 'inherit', 'primary', 'secondary']),
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * The default value is a `button`.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * If `true`, the button will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   * `disableRipple` must also be true.
   */
  disableFocusRipple: _propTypes2.default.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: _propTypes2.default.bool,
  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: _propTypes2.default.string,
  /**
   * If `true`, and `variant` is `'fab'`, will use mini floating action button styling.
   */
  mini: _propTypes2.default.bool,
  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
  /**
   * @ignore
   */
  type: _propTypes2.default.string,
  /**
   * The type of button.
   */
  variant: _propTypes2.default.oneOf(['flat', 'raised', 'fab'])
} : {};

Button.defaultProps = {
  color: 'default',
  disabled: false,
  disableFocusRipple: false,
  fullWidth: false,
  mini: false,
  size: 'medium',
  type: 'button',
  variant: 'flat'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiButton' })(Button);