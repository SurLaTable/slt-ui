'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SelectInput = require('./SelectInput');

var _SelectInput2 = _interopRequireDefault(_SelectInput);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Input = require('../Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import to enforce the CSS injection order

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      position: 'relative',
      width: '100%'
    },
    select: {
      '-moz-appearance': 'none', // Reset
      '-webkit-appearance': 'none', // Reset
      // When interacting quickly, the text can end up selected.
      // Native select can't be selected either.
      userSelect: 'none',
      paddingRight: theme.spacing.unit * 4,
      width: 'calc(100% - ' + theme.spacing.unit * 4 + 'px)',
      minWidth: theme.spacing.unit * 2, // So it doesn't collapse.
      cursor: 'pointer',
      '&:focus': {
        // Show that it's not an text input
        background: theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)',
        borderRadius: 0 // Reset Chrome style
      },
      // Remove Firefox focus border
      '&:-moz-focusring': {
        color: 'transparent',
        textShadow: '0 0 0 #000'
      },
      // Remove IE11 arrow
      '&::-ms-expand': {
        display: 'none'
      }
    },
    selectMenu: {
      width: 'auto', // Fix Safari textOverflow
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      minHeight: '1.1875em' // Reset (19px), match the native input line-height
    },
    disabled: {
      cursor: 'default'
    },
    icon: {
      // We use a position absolute over a flexbox in order to forward the pointer events
      // to the input.
      position: 'absolute',
      right: 0,
      top: 'calc(50% - 12px)', // Center vertically
      color: theme.palette.action.active,
      'pointer-events': 'none' // Don't block pointer events on the select under the icon.
    }
  };
}; // @inheritedComponent Input

function Select(props) {
  var autoWidth = props.autoWidth,
      children = props.children,
      classes = props.classes,
      displayEmpty = props.displayEmpty,
      input = props.input,
      inputProps = props.inputProps,
      MenuProps = props.MenuProps,
      multiple = props.multiple,
      native = props.native,
      onClose = props.onClose,
      onOpen = props.onOpen,
      open = props.open,
      renderValue = props.renderValue,
      SelectDisplayProps = props.SelectDisplayProps,
      other = (0, _objectWithoutProperties3.default)(props, ['autoWidth', 'children', 'classes', 'displayEmpty', 'input', 'inputProps', 'MenuProps', 'multiple', 'native', 'onClose', 'onOpen', 'open', 'renderValue', 'SelectDisplayProps']);


  return _react2.default.cloneElement(input, (0, _extends3.default)({
    // Most of the logic is implemented in `SelectInput`.
    // The `Select` component is a simple API wrapper to expose something better to play with.
    inputComponent: _SelectInput2.default,
    inputProps: (0, _extends3.default)({
      autoWidth: autoWidth,
      children: children,
      classes: classes,
      displayEmpty: displayEmpty,
      MenuProps: MenuProps,
      multiple: multiple,
      native: native,
      onClose: onClose,
      onOpen: onOpen,
      open: open,
      renderValue: renderValue,
      SelectDisplayProps: SelectDisplayProps,
      type: undefined }, inputProps, input ? input.props.inputProps : {})
  }, other));
}

Select.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * If true, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: _propTypes2.default.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   * You can only use it when the `native` property is `false` (default).
   */
  displayEmpty: _propTypes2.default.bool,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: _propTypes2.default.element,
  /**
   * Properties applied to the `input` element.
   * When `native` is `true`, the properties are applied on the `select` element.
   */
  inputProps: _propTypes2.default.object,
  /**
   * Properties applied to the `Menu` element.
   */
  MenuProps: _propTypes2.default.object,
  /**
   * If true, `value` must be an array and the menu will support multiple selections.
   * You can only use it when the `native` property is `false` (default).
   */
  multiple: _propTypes2.default.bool,
  /**
   * If `true`, the component will be using a native `select` element.
   */
  native: _propTypes2.default.bool,
  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: _propTypes2.default.func,
  /**
   * Callback fired when the component requests to be closed.
   * Useful in controlled mode (see open).
   *
   * @param {object} event The event source of the callback
   */
  onClose: _propTypes2.default.func,
  /**
   * Callback fired when the component requests to be opened.
   * Useful in controlled mode (see open).
   *
   * @param {object} event The event source of the callback
   */
  onOpen: _propTypes2.default.func,
  /**
   * Control `select` open state.
   * You can only use it when the `native` property is `false` (default).
   */
  open: _propTypes2.default.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` property is `false` (default).
   *
   * @param {*} value The `value` provided to the component.
   * @returns {ReactElement}
   */
  renderValue: _propTypes2.default.func,
  /**
   * Properties applied to the clickable div element.
   */
  SelectDisplayProps: _propTypes2.default.object,
  /**
   * The input value.
   * This property is required when the `native` property is `false` (default).
   */
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]))])
} : {};

Select.defaultProps = {
  autoWidth: false,
  displayEmpty: false,
  input: _react2.default.createElement(_Input2.default, null),
  multiple: false,
  native: false
};

Select.muiName = 'Select';

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiSelect' })(Select);