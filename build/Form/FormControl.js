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

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Input = require('../Input/Input');

var _helpers = require('../utils/helpers');

var _reactHelpers = require('../utils/reactHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'inline-flex',
      flexDirection: 'column',
      position: 'relative',
      // Reset fieldset default style
      minWidth: 0,
      padding: 0,
      margin: 0,
      border: 0
    },
    marginNormal: {
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit
    },
    marginDense: {
      marginTop: theme.spacing.unit,
      marginBottom: theme.spacing.unit / 2
    },
    fullWidth: {
      width: '100%'
    }
  };
};

/**
 * Provides context such as filled/focused/error/required for form inputs.
 * Relying on the context provides high flexibilty and ensures that the state always stay
 * consitent across the children of the `FormControl`.
 * This context is used by the following components:
 *  - FormLabel
 *  - FormHelperText
 *  - Input
 *  - InputLabel
 */

var FormControl = function (_React$Component) {
  (0, _inherits3.default)(FormControl, _React$Component);

  function FormControl(props, context) {
    (0, _classCallCheck3.default)(this, FormControl);

    // We need to iterate through the children and find the Input in order
    // to fully support server side rendering.
    var _this = (0, _possibleConstructorReturn3.default)(this, (FormControl.__proto__ || (0, _getPrototypeOf2.default)(FormControl)).call(this, props, context));

    _this.state = {
      adornedStart: false,
      filled: false,
      focused: false
    };

    _this.handleFocus = function (event) {
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
      _this.setState(function (state) {
        return !state.focused ? { focused: true } : null;
      });
    };

    _this.handleBlur = function (event) {
      // The event might be undefined.
      // For instance, a child component might call this hook
      // when an input is disabled but still having the focus.
      if (_this.props.onBlur && event) {
        _this.props.onBlur(event);
      }
      _this.setState(function (state) {
        return state.focused ? { focused: false } : null;
      });
    };

    _this.handleDirty = function () {
      if (!_this.state.filled) {
        _this.setState({ filled: true });
      }
    };

    _this.handleClean = function () {
      if (_this.state.filled) {
        _this.setState({ filled: false });
      }
    };

    var children = _this.props.children;

    if (children) {
      _react2.default.Children.forEach(children, function (child) {
        if (!(0, _reactHelpers.isMuiElement)(child, ['Input', 'Select'])) {
          return;
        }

        if ((0, _Input.isFilled)(child.props, true)) {
          _this.state.filled = true;
        }

        var input = (0, _reactHelpers.isMuiElement)(child, ['Select']) ? child.props.input : child;

        if (input && (0, _Input.isAdornedStart)(input.props)) {
          _this.state.adornedStart = true;
        }
      });
    }
    return _this;
  }

  (0, _createClass3.default)(FormControl, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _props = this.props,
          disabled = _props.disabled,
          error = _props.error,
          required = _props.required,
          margin = _props.margin;
      var _state = this.state,
          adornedStart = _state.adornedStart,
          filled = _state.filled,
          focused = _state.focused;


      return {
        muiFormControl: {
          adornedStart: adornedStart,
          disabled: disabled,
          error: error,
          filled: filled,
          focused: focused,
          margin: margin,
          onBlur: this.handleBlur,
          onEmpty: this.handleClean,
          onFilled: this.handleDirty,
          onFocus: this.handleFocus,
          required: required
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props2 = this.props,
          classes = _props2.classes,
          className = _props2.className,
          Component = _props2.component,
          disabled = _props2.disabled,
          error = _props2.error,
          fullWidth = _props2.fullWidth,
          margin = _props2.margin,
          required = _props2.required,
          other = (0, _objectWithoutProperties3.default)(_props2, ['classes', 'className', 'component', 'disabled', 'error', 'fullWidth', 'margin', 'required']);


      return _react2.default.createElement(Component, (0, _extends3.default)({
        className: (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes['margin' + (0, _helpers.capitalize)(margin)], margin !== 'none'), (0, _defineProperty3.default)(_classNames, classes.fullWidth, fullWidth), _classNames), className)
      }, other, {
        onFocus: this.handleFocus,
        onBlur: this.handleBlur
      }));
    }
  }]);
  return FormControl;
}(_react2.default.Component);

FormControl.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The contents of the form control.
   */
  children: _propTypes2.default.node,
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
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If `true`, the label should be displayed in an error state.
   */
  error: _propTypes2.default.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   */
  margin: _propTypes2.default.oneOf(['none', 'dense', 'normal']),
  /**
   * @ignore
   */
  onBlur: _propTypes2.default.func,
  /**
   * @ignore
   */
  onFocus: _propTypes2.default.func,
  /**
   * If `true`, the label will indicate that the input is required.
   */
  required: _propTypes2.default.bool
} : {};

FormControl.defaultProps = {
  component: 'div',
  disabled: false,
  error: false,
  fullWidth: false,
  margin: 'none',
  required: false
};

FormControl.childContextTypes = {
  muiFormControl: _propTypes2.default.object
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiFormControl' })(FormControl);