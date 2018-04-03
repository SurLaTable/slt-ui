webpackJsonpmaterial_ui([69],{

/***/ 335:
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.text.secondary,
      fontSize: theme.typography.pxToRem(16),
      lineHeight: 1,
      padding: 0
    },
    focused: {
      color: theme.palette.primary[theme.palette.type === 'light' ? 'dark' : 'light']
    },
    disabled: {
      color: theme.palette.text.disabled
    },
    error: {
      color: theme.palette.error.main
    },
    asterisk: {},
    asteriskError: {
      color: theme.palette.error.main
    }
  };
};

function FormLabel(props, context) {
  var _classNames;

  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      Component = props.component,
      disabledProp = props.disabled,
      errorProp = props.error,
      focusedProp = props.focused,
      requiredProp = props.required,
      other = _objectWithoutProperties(props, ['children', 'classes', 'className', 'component', 'disabled', 'error', 'focused', 'required']);

  var muiFormControl = context.muiFormControl;


  var required = requiredProp;
  var focused = focusedProp;
  var disabled = disabledProp;
  var error = errorProp;

  if (muiFormControl) {
    if (typeof required === 'undefined') {
      required = muiFormControl.required;
    }
    if (typeof focused === 'undefined') {
      focused = muiFormControl.focused;
    }
    if (typeof disabled === 'undefined') {
      disabled = muiFormControl.disabled;
    }
    if (typeof error === 'undefined') {
      error = muiFormControl.error;
    }
  }

  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, _defineProperty(_classNames, classes.focused, focused), _defineProperty(_classNames, classes.disabled, disabled), _defineProperty(_classNames, classes.error, error), _classNames), classNameProp);

  return _react2.default.createElement(
    Component,
    _extends({ className: className }, other),
    children,
    required && _react2.default.createElement(
      'span',
      {
        className: (0, _classnames2.default)(classes.asterisk, _defineProperty({}, classes.asteriskError, error)),
        'data-mui-test': 'FormLabelAsterisk'
      },
      '\u2009*'
    )
  );
}

FormLabel.propTypes = {
  /**
   * The content of the component.
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
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If `true`, the label should be displayed in an error state.
   */
  error: _propTypes2.default.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: _propTypes2.default.bool,
  /**
   * If `true`, the label will indicate that the input is required.
   */
  required: _propTypes2.default.bool
};

FormLabel.defaultProps = {
  component: 'label'
};

FormLabel.contextTypes = {
  muiFormControl: _propTypes2.default.object
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiFormLabel' })(FormLabel);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcRm9ybVxcRm9ybUxhYmVsLmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsInJvb3QiLCJmb250RmFtaWx5IiwidGhlbWUiLCJ0eXBvZ3JhcGh5IiwiY29sb3IiLCJwYWxldHRlIiwidGV4dCIsInNlY29uZGFyeSIsImZvbnRTaXplIiwicHhUb1JlbSIsImxpbmVIZWlnaHQiLCJwYWRkaW5nIiwiZm9jdXNlZCIsInByaW1hcnkiLCJ0eXBlIiwiZGlzYWJsZWQiLCJlcnJvciIsIm1haW4iLCJhc3RlcmlzayIsImFzdGVyaXNrRXJyb3IiLCJGb3JtTGFiZWwiLCJwcm9wcyIsImNvbnRleHQiLCJjaGlsZHJlbiIsImNsYXNzZXMiLCJjbGFzc05hbWVQcm9wIiwiY2xhc3NOYW1lIiwiQ29tcG9uZW50IiwiY29tcG9uZW50IiwiZGlzYWJsZWRQcm9wIiwiZXJyb3JQcm9wIiwiZm9jdXNlZFByb3AiLCJyZXF1aXJlZFByb3AiLCJyZXF1aXJlZCIsIm90aGVyIiwibXVpRm9ybUNvbnRyb2wiLCJwcm9wVHlwZXMiLCJub2RlIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsIm9uZU9mVHlwZSIsImZ1bmMiLCJib29sIiwiZGVmYXVsdFByb3BzIiwiY29udGV4dFR5cGVzIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSwwQkFBUyxTQUFUQSxNQUFTO0FBQUEsU0FBVTtBQUM5QkMsVUFBTTtBQUNKQyxrQkFBWUMsTUFBTUMsVUFBTixDQUFpQkYsVUFEekI7QUFFSkcsYUFBT0YsTUFBTUcsT0FBTixDQUFjQyxJQUFkLENBQW1CQyxTQUZ0QjtBQUdKQyxnQkFBVU4sTUFBTUMsVUFBTixDQUFpQk0sT0FBakIsQ0FBeUIsRUFBekIsQ0FITjtBQUlKQyxrQkFBWSxDQUpSO0FBS0pDLGVBQVM7QUFMTCxLQUR3QjtBQVE5QkMsYUFBUztBQUNQUixhQUFPRixNQUFNRyxPQUFO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QXJCQTtBQXNCcEI7OztBQUdBM0IsU0FBTyxvQkFBVTJCLElBekJHO0FBMEJwQjs7O0FBR0EvQixXQUFTLG9CQUFVK0IsSUE3QkM7QUE4QnBCOzs7QUFHQVYsWUFBVSxvQkFBVVU7QUFqQ0EsQ0FBdEI7O0FBb0NBdkIsVUFBVXdCLFlBQVYsR0FBeUI7QUFDdkJoQixhQUFXO0FBRFksQ0FBekI7O0FBSUFSLFVBQVV5QixZQUFWLEdBQXlCO0FBQ3ZCVixrQkFBZ0Isb0JBQVVHO0FBREgsQ0FBekI7O2tCQUllLDBCQUFXdkMsTUFBWCxFQUFtQixFQUFFK0MsTUFBTSxjQUFSLEVBQW5CLEVBQTZDMUIsU0FBN0MsQyIsImZpbGUiOiJGb3JtTGFiZWwuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvcm1jcXVlbi9zbHQtdWkvbWF0ZXJpYWwtdWkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIGZvbnRGYW1pbHk6IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseSxcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcbiAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5weFRvUmVtKDE2KSxcbiAgICBsaW5lSGVpZ2h0OiAxLFxuICAgIHBhZGRpbmc6IDAsXG4gIH0sXG4gIGZvY3VzZWQ6IHtcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5W3RoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/ICdkYXJrJyA6ICdsaWdodCddLFxuICB9LFxuICBkaXNhYmxlZDoge1xuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuZGlzYWJsZWQsXG4gIH0sXG4gIGVycm9yOiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpbixcbiAgfSxcbiAgYXN0ZXJpc2s6IHt9LFxuICBhc3Rlcmlza0Vycm9yOiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpbixcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBGb3JtTGFiZWwocHJvcHMsIGNvbnRleHQpIHtcbiAgY29uc3Qge1xuICAgIGNoaWxkcmVuLFxuICAgIGNsYXNzZXMsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVQcm9wLFxuICAgIGNvbXBvbmVudDogQ29tcG9uZW50LFxuICAgIGRpc2FibGVkOiBkaXNhYmxlZFByb3AsXG4gICAgZXJyb3I6IGVycm9yUHJvcCxcbiAgICBmb2N1c2VkOiBmb2N1c2VkUHJvcCxcbiAgICByZXF1aXJlZDogcmVxdWlyZWRQcm9wLFxuICAgIC4uLm90aGVyXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7IG11aUZvcm1Db250cm9sIH0gPSBjb250ZXh0O1xuXG4gIGxldCByZXF1aXJlZCA9IHJlcXVpcmVkUHJvcDtcbiAgbGV0IGZvY3VzZWQgPSBmb2N1c2VkUHJvcDtcbiAgbGV0IGRpc2FibGVkID0gZGlzYWJsZWRQcm9wO1xuICBsZXQgZXJyb3IgPSBlcnJvclByb3A7XG5cbiAgaWYgKG11aUZvcm1Db250cm9sKSB7XG4gICAgaWYgKHR5cGVvZiByZXF1aXJlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJlcXVpcmVkID0gbXVpRm9ybUNvbnRyb2wucmVxdWlyZWQ7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZm9jdXNlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGZvY3VzZWQgPSBtdWlGb3JtQ29udHJvbC5mb2N1c2VkO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRpc2FibGVkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgZGlzYWJsZWQgPSBtdWlGb3JtQ29udHJvbC5kaXNhYmxlZDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBlcnJvciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGVycm9yID0gbXVpRm9ybUNvbnRyb2wuZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lcyhcbiAgICBjbGFzc2VzLnJvb3QsXG4gICAge1xuICAgICAgW2NsYXNzZXMuZm9jdXNlZF06IGZvY3VzZWQsXG4gICAgICBbY2xhc3Nlcy5kaXNhYmxlZF06IGRpc2FibGVkLFxuICAgICAgW2NsYXNzZXMuZXJyb3JdOiBlcnJvcixcbiAgICB9LFxuICAgIGNsYXNzTmFtZVByb3AsXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29tcG9uZW50IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB7Li4ub3RoZXJ9PlxuICAgICAge2NoaWxkcmVufVxuICAgICAge3JlcXVpcmVkICYmIChcbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy5hc3Rlcmlzaywge1xuICAgICAgICAgICAgW2NsYXNzZXMuYXN0ZXJpc2tFcnJvcl06IGVycm9yLFxuICAgICAgICAgIH0pfVxuICAgICAgICAgIGRhdGEtbXVpLXRlc3Q9XCJGb3JtTGFiZWxBc3Rlcmlza1wiXG4gICAgICAgID5cbiAgICAgICAgICB7J1xcdTIwMDkqJ31cbiAgICAgICAgPC9zcGFuPlxuICAgICAgKX1cbiAgICA8L0NvbXBvbmVudD5cbiAgKTtcbn1cblxuRm9ybUxhYmVsLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiBVc2VmdWwgdG8gZXh0ZW5kIHRoZSBzdHlsZSBhcHBsaWVkIHRvIGNvbXBvbmVudHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSByb290IG5vZGUuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBET00gZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGxhYmVsIHNob3VsZCBiZSBkaXNwbGF5ZWQgaW4gYSBkaXNhYmxlZCBzdGF0ZS5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGxhYmVsIHNob3VsZCBiZSBkaXNwbGF5ZWQgaW4gYW4gZXJyb3Igc3RhdGUuXG4gICAqL1xuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBpbnB1dCBvZiB0aGlzIGxhYmVsIGlzIGZvY3VzZWQgKHVzZWQgYnkgYEZvcm1Hcm91cGAgY29tcG9uZW50cykuXG4gICAqL1xuICBmb2N1c2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGxhYmVsIHdpbGwgaW5kaWNhdGUgdGhhdCB0aGUgaW5wdXQgaXMgcmVxdWlyZWQuXG4gICAqL1xuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5Gb3JtTGFiZWwuZGVmYXVsdFByb3BzID0ge1xuICBjb21wb25lbnQ6ICdsYWJlbCcsXG59O1xuXG5Gb3JtTGFiZWwuY29udGV4dFR5cGVzID0ge1xuICBtdWlGb3JtQ29udHJvbDogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7IG5hbWU6ICdNdWlGb3JtTGFiZWwnIH0pKEZvcm1MYWJlbCk7XG4iXX0=

/***/ })

});