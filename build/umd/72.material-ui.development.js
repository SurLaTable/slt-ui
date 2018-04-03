webpackJsonpmaterial_ui([72],{

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(23);

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__(18);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Typography = __webpack_require__(103);

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint-disable jsx-a11y/label-has-for */

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      // For correct alignment with the text.
      verticalAlign: 'middle',
      // Remove grey highlight
      WebkitTapHighlightColor: 'transparent',
      marginLeft: -14,
      marginRight: theme.spacing.unit * 2 // used for row presentation of radio/checkbox
    },
    disabled: {
      cursor: 'default'
    },
    label: {},
    labelDisabled: {
      color: theme.palette.text.disabled
    }
  };
};

/**
 * Drop in replacement of the `Radio`, `Switch` and `Checkbox` component.
 * Use this component if you want to display an extra label.
 */
function FormControlLabel(props, context) {
  var checked = props.checked,
      classes = props.classes,
      classNameProp = props.className,
      control = props.control,
      disabledProp = props.disabled,
      inputRef = props.inputRef,
      label = props.label,
      name = props.name,
      onChange = props.onChange,
      value = props.value,
      other = _objectWithoutProperties(props, ['checked', 'classes', 'className', 'control', 'disabled', 'inputRef', 'label', 'name', 'onChange', 'value']);

  var muiFormControl = context.muiFormControl;

  var disabled = disabledProp;

  if (typeof control.props.disabled !== 'undefined') {
    if (typeof disabled === 'undefined') {
      disabled = control.props.disabled;
    }
  }

  if (muiFormControl) {
    if (typeof disabled === 'undefined') {
      disabled = muiFormControl.disabled;
    }
  }

  var className = (0, _classnames2.default)(classes.root, _defineProperty({}, classes.disabled, disabled), classNameProp);

  return _react2.default.createElement(
    'label',
    _extends({ className: className }, other),
    _react2.default.cloneElement(control, {
      disabled: disabled,
      checked: typeof control.props.checked === 'undefined' ? checked : control.props.checked,
      name: control.props.name || name,
      onChange: control.props.onChange || onChange,
      value: control.props.value || value,
      inputRef: control.props.inputRef || inputRef
    }),
    _react2.default.createElement(
      _Typography2.default,
      {
        component: 'span',
        className: (0, _classnames2.default)(classes.label, _defineProperty({}, classes.labelDisabled, disabled))
      },
      label
    )
  );
}

FormControlLabel.propTypes = {
  /**
   * If `true`, the component appears selected.
   */
  checked: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * A control element. For instance, it can be be a `Radio`, a `Switch` or a `Checkbox`.
   */
  control: _propTypes2.default.element,
  /**
   * If `true`, the control will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: _propTypes2.default.func,
  /**
   * The text to be used in an enclosing label element.
   */
  label: _propTypes2.default.node,
  /*
   * @ignore
   */
  name: _propTypes2.default.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.checked`.
   * @param {boolean} checked The `checked` value of the switch
   */
  onChange: _propTypes2.default.func,
  /**
   * The value of the component.
   */
  value: _propTypes2.default.string
};

FormControlLabel.contextTypes = {
  muiFormControl: _propTypes2.default.object
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiFormControlLabel' })(FormControlLabel);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcRm9ybVxcRm9ybUNvbnRyb2xMYWJlbC5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJyb290IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJjdXJzb3IiLCJ2ZXJ0aWNhbEFsaWduIiwiV2Via2l0VGFwSGlnaGxpZ2h0Q29sb3IiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJ0aGVtZSIsInNwYWNpbmciLCJ1bml0IiwiZGlzYWJsZWQiLCJsYWJlbCIsImxhYmVsRGlzYWJsZWQiLCJjb2xvciIsInBhbGV0dGUiLCJ0ZXh0IiwiRm9ybUNvbnRyb2xMYWJlbCIsInByb3BzIiwiY29udGV4dCIsImNoZWNrZWQiLCJjbGFzc2VzIiwiY2xhc3NOYW1lUHJvcCIsImNsYXNzTmFtZSIsImNvbnRyb2wiLCJkaXNhYmxlZFByb3AiLCJpbnB1dFJlZiIsIm5hbWUiLCJvbkNoYW5nZSIsInZhbHVlIiwib3RoZXIiLCJtdWlGb3JtQ29udHJvbCIsImNsb25lRWxlbWVudCIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsImJvb2wiLCJzdHJpbmciLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZWxlbWVudCIsImZ1bmMiLCJub2RlIiwiY29udGV4dFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs2TkFOQTs7QUFRTyxJQUFNQSwwQkFBUyxTQUFUQSxNQUFTO0FBQUEsU0FBVTtBQUM5QkMsVUFBTTtBQUNKQyxlQUFTLGFBREw7QUFFSkMsa0JBQVksUUFGUjtBQUdKQyxjQUFRLFNBSEo7QUFJSjtBQUNBQyxxQkFBZSxRQUxYO0FBTUo7QUFDQUMsK0JBQXlCLGFBUHJCO0FBUUpDLGtCQUFZLENBQUMsRUFSVDtBQVNKQyxtQkFBYUMsTUFBTUMsT0FBTixDQUFjQyxJQUFkLEdBQXFCLENBVDlCLENBU2lDO0FBVGpDLEtBRHdCO0FBWTlCQyxjQUFVO0FBQ1JSLGNBQVE7QUFEQSxLQVpvQjtBQWU5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QixJQXBCTztBQXFCM0I7OztBQUdBVCxZQUFVLG9CQUFVYyxJQXhCTztBQXlCM0I7OztBQUdBNUIsU0FBTyxvQkFBVTZCLElBNUJVO0FBNkIzQjs7O0FBR0FkLFFBQU0sb0JBQVVTLE1BaENXO0FBaUMzQjs7Ozs7OztBQU9BUixZQUFVLG9CQUFVWSxJQXhDTztBQXlDM0I7OztBQUdBWCxTQUFPLG9CQUFVTztBQTVDVSxDQUE3Qjs7QUErQ0FuQixpQkFBaUJ5QixZQUFqQixHQUFnQztBQUM5Qlgsa0JBQWdCLG9CQUFVTTtBQURJLENBQWhDOztrQkFJZSwwQkFBV3RDLE1BQVgsRUFBbUIsRUFBRTRCLE1BQU0scUJBQVIsRUFBbkIsRUFBb0RWLGdCQUFwRCxDIiwiZmlsZSI6IkZvcm1Db250cm9sTGFiZWwuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvcm1jcXVlbi9zbHQtdWkvbWF0ZXJpYWwtdWkiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9sYWJlbC1oYXMtZm9yICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICcuLi9UeXBvZ3JhcGh5JztcblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIC8vIEZvciBjb3JyZWN0IGFsaWdubWVudCB3aXRoIHRoZSB0ZXh0LlxuICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgIC8vIFJlbW92ZSBncmV5IGhpZ2hsaWdodFxuICAgIFdlYmtpdFRhcEhpZ2hsaWdodENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgIG1hcmdpbkxlZnQ6IC0xNCxcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy51bml0ICogMiwgLy8gdXNlZCBmb3Igcm93IHByZXNlbnRhdGlvbiBvZiByYWRpby9jaGVja2JveFxuICB9LFxuICBkaXNhYmxlZDoge1xuICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxuICB9LFxuICBsYWJlbDoge30sXG4gIGxhYmVsRGlzYWJsZWQ6IHtcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LmRpc2FibGVkLFxuICB9LFxufSk7XG5cbi8qKlxuICogRHJvcCBpbiByZXBsYWNlbWVudCBvZiB0aGUgYFJhZGlvYCwgYFN3aXRjaGAgYW5kIGBDaGVja2JveGAgY29tcG9uZW50LlxuICogVXNlIHRoaXMgY29tcG9uZW50IGlmIHlvdSB3YW50IHRvIGRpc3BsYXkgYW4gZXh0cmEgbGFiZWwuXG4gKi9cbmZ1bmN0aW9uIEZvcm1Db250cm9sTGFiZWwocHJvcHMsIGNvbnRleHQpIHtcbiAgY29uc3Qge1xuICAgIGNoZWNrZWQsXG4gICAgY2xhc3NlcyxcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVByb3AsXG4gICAgY29udHJvbCxcbiAgICBkaXNhYmxlZDogZGlzYWJsZWRQcm9wLFxuICAgIGlucHV0UmVmLFxuICAgIGxhYmVsLFxuICAgIG5hbWUsXG4gICAgb25DaGFuZ2UsXG4gICAgdmFsdWUsXG4gICAgLi4ub3RoZXJcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHsgbXVpRm9ybUNvbnRyb2wgfSA9IGNvbnRleHQ7XG4gIGxldCBkaXNhYmxlZCA9IGRpc2FibGVkUHJvcDtcblxuICBpZiAodHlwZW9mIGNvbnRyb2wucHJvcHMuZGlzYWJsZWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBkaXNhYmxlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGRpc2FibGVkID0gY29udHJvbC5wcm9wcy5kaXNhYmxlZDtcbiAgICB9XG4gIH1cblxuICBpZiAobXVpRm9ybUNvbnRyb2wpIHtcbiAgICBpZiAodHlwZW9mIGRpc2FibGVkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgZGlzYWJsZWQgPSBtdWlGb3JtQ29udHJvbC5kaXNhYmxlZDtcbiAgICB9XG4gIH1cblxuICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc05hbWVzKFxuICAgIGNsYXNzZXMucm9vdCxcbiAgICB7XG4gICAgICBbY2xhc3Nlcy5kaXNhYmxlZF06IGRpc2FibGVkLFxuICAgIH0sXG4gICAgY2xhc3NOYW1lUHJvcCxcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxsYWJlbCBjbGFzc05hbWU9e2NsYXNzTmFtZX0gey4uLm90aGVyfT5cbiAgICAgIHtSZWFjdC5jbG9uZUVsZW1lbnQoY29udHJvbCwge1xuICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgY2hlY2tlZDogdHlwZW9mIGNvbnRyb2wucHJvcHMuY2hlY2tlZCA9PT0gJ3VuZGVmaW5lZCcgPyBjaGVja2VkIDogY29udHJvbC5wcm9wcy5jaGVja2VkLFxuICAgICAgICBuYW1lOiBjb250cm9sLnByb3BzLm5hbWUgfHwgbmFtZSxcbiAgICAgICAgb25DaGFuZ2U6IGNvbnRyb2wucHJvcHMub25DaGFuZ2UgfHwgb25DaGFuZ2UsXG4gICAgICAgIHZhbHVlOiBjb250cm9sLnByb3BzLnZhbHVlIHx8IHZhbHVlLFxuICAgICAgICBpbnB1dFJlZjogY29udHJvbC5wcm9wcy5pbnB1dFJlZiB8fCBpbnB1dFJlZixcbiAgICAgIH0pfVxuICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc2VzLmxhYmVsLCB7IFtjbGFzc2VzLmxhYmVsRGlzYWJsZWRdOiBkaXNhYmxlZCB9KX1cbiAgICAgID5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgIDwvbGFiZWw+XG4gICk7XG59XG5cbkZvcm1Db250cm9sTGFiZWwucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgY29tcG9uZW50IGFwcGVhcnMgc2VsZWN0ZWQuXG4gICAqL1xuICBjaGVja2VkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICAvKipcbiAgICogVXNlZnVsIHRvIGV4dGVuZCB0aGUgc3R5bGUgYXBwbGllZCB0byBjb21wb25lbnRzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogQSBjb250cm9sIGVsZW1lbnQuIEZvciBpbnN0YW5jZSwgaXQgY2FuIGJlIGJlIGEgYFJhZGlvYCwgYSBgU3dpdGNoYCBvciBhIGBDaGVja2JveGAuXG4gICAqL1xuICBjb250cm9sOiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGNvbnRyb2wgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIFVzZSB0aGF0IHByb3BlcnR5IHRvIHBhc3MgYSByZWYgY2FsbGJhY2sgdG8gdGhlIG5hdGl2ZSBpbnB1dCBjb21wb25lbnQuXG4gICAqL1xuICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBUaGUgdGV4dCB0byBiZSB1c2VkIGluIGFuIGVuY2xvc2luZyBsYWJlbCBlbGVtZW50LlxuICAgKi9cbiAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLFxuICAvKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgc3RhdGUgaXMgY2hhbmdlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKiBZb3UgY2FuIHB1bGwgb3V0IHRoZSBuZXcgdmFsdWUgYnkgYWNjZXNzaW5nIGBldmVudC50YXJnZXQuY2hlY2tlZGAuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gY2hlY2tlZCBUaGUgYGNoZWNrZWRgIHZhbHVlIG9mIHRoZSBzd2l0Y2hcbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5Gb3JtQ29udHJvbExhYmVsLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpRm9ybUNvbnRyb2w6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywgeyBuYW1lOiAnTXVpRm9ybUNvbnRyb2xMYWJlbCcgfSkoRm9ybUNvbnRyb2xMYWJlbCk7XG4iXX0=

/***/ })

});