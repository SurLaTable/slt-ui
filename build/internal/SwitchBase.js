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

var _CheckBoxOutlineBlank = require('../internal/svg-icons/CheckBoxOutlineBlank');

var _CheckBoxOutlineBlank2 = _interopRequireDefault(_CheckBoxOutlineBlank);

var _CheckBox = require('../internal/svg-icons/CheckBox');

var _CheckBox2 = _interopRequireDefault(_CheckBox);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _IconButton = require('../IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = {
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    transition: 'none'
  },
  input: {
    cursor: 'inherit',
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0
  },
  default: {},
  checked: {},
  disabled: {}
};

/**
 * @ignore - internal component.
 */
// @inheritedComponent IconButton

var SwitchBase = function (_React$Component) {
  (0, _inherits3.default)(SwitchBase, _React$Component);

  function SwitchBase(props, context) {
    (0, _classCallCheck3.default)(this, SwitchBase);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SwitchBase.__proto__ || (0, _getPrototypeOf2.default)(SwitchBase)).call(this, props, context));

    _this.state = {};
    _this.input = null;
    _this.isControlled = null;

    _this.handleInputChange = function (event) {
      var checked = event.target.checked;

      if (!_this.isControlled) {
        _this.setState({ checked: checked });
      }

      if (_this.props.onChange) {
        _this.props.onChange(event, checked);
      }
    };

    _this.isControlled = props.checked != null;
    if (!_this.isControlled) {
      // not controlled, use internal state
      _this.state.checked = props.defaultChecked !== undefined ? props.defaultChecked : false;
    }
    return _this;
  }

  (0, _createClass3.default)(SwitchBase, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          checkedProp = _props.checked,
          checkedIcon = _props.checkedIcon,
          classes = _props.classes,
          classNameProp = _props.className,
          disabledProp = _props.disabled,
          iconProp = _props.icon,
          id = _props.id,
          inputProps = _props.inputProps,
          inputRef = _props.inputRef,
          name = _props.name,
          onChange = _props.onChange,
          tabIndex = _props.tabIndex,
          type = _props.type,
          value = _props.value,
          other = (0, _objectWithoutProperties3.default)(_props, ['checked', 'checkedIcon', 'classes', 'className', 'disabled', 'icon', 'id', 'inputProps', 'inputRef', 'name', 'onChange', 'tabIndex', 'type', 'value']);
      var muiFormControl = this.context.muiFormControl;

      var disabled = disabledProp;

      if (muiFormControl) {
        if (typeof disabled === 'undefined') {
          disabled = muiFormControl.disabled;
        }
      }

      var checked = this.isControlled ? checkedProp : this.state.checked;
      var className = (0, _classnames2.default)(classes.root, classes.default, classNameProp, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.checked, checked), (0, _defineProperty3.default)(_classNames, classes.disabled, disabled), _classNames));

      var icon = checked ? checkedIcon : iconProp;

      var hasLabelFor = type === 'checkbox' || type === 'radio';

      return _react2.default.createElement(
        _IconButton2.default,
        (0, _extends3.default)({
          component: 'span',
          className: className,
          disabled: disabled,
          tabIndex: null,
          role: undefined
        }, other),
        icon,
        _react2.default.createElement('input', (0, _extends3.default)({
          id: hasLabelFor && id,
          type: type,
          name: name,
          checked: checked,
          onChange: this.handleInputChange,
          className: classes.input,
          disabled: disabled,
          tabIndex: tabIndex,
          value: value,
          ref: inputRef
        }, inputProps))
      );
    }
  }]);
  return SwitchBase;
}(_react2.default.Component);

// NB: If changed, please update Checkbox, Switch and Radio
// so that the API documentation is updated.


SwitchBase.propTypes = process.env.NODE_ENV !== "production" ? {
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
   * If `true`, the component appears indeterminate.
   */
  indeterminate: _propTypes2.default.bool,
  /**
   * The icon to display when the component is indeterminate.
   */
  indeterminateIcon: _propTypes2.default.node,
  /**
   * Properties applied to the `input` element.
   */
  inputProps: _propTypes2.default.object,
  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: _propTypes2.default.func,
  /*
   * @ignore
   */
  name: _propTypes2.default.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback
   * @param {boolean} checked The `checked` value of the switch
   */
  onChange: _propTypes2.default.func,
  /**
   * @ignore
   */
  tabIndex: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  /**
   * The input component property `type`.
   */
  type: _propTypes2.default.string,
  /**
   * The value of the component.
   */
  value: _propTypes2.default.string
} : {};

SwitchBase.defaultProps = {
  checkedIcon: _react2.default.createElement(_CheckBox2.default, null),
  icon: _react2.default.createElement(_CheckBoxOutlineBlank2.default, null),
  type: 'checkbox'
};

SwitchBase.contextTypes = {
  muiFormControl: _propTypes2.default.object
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiSwitchBase' })(SwitchBase);