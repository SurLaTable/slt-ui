webpackJsonpmaterial_ui([62],{

/***/ 339:
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

var _Form = __webpack_require__(124);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // @inheritedComponent FormLabel

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      transformOrigin: 'top left'
    },
    formControl: {
      position: 'absolute',
      left: 0,
      top: 0,
      // slight alteration to spec spacing to match visual spec result
      transform: 'translate(0, ' + theme.spacing.unit * 3 + 'px) scale(1)'
    },
    marginDense: {
      // Compensation for the `Input.inputDense` style.
      transform: 'translate(0, ' + (theme.spacing.unit * 2.5 + 1) + 'px) scale(1)'
    },
    shrink: {
      transform: 'translate(0, 1.5px) scale(0.75)',
      transformOrigin: 'top left'
    },
    animated: {
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      })
    }
  };
};

function InputLabel(props, context) {
  var _classNames;

  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      disableAnimation = props.disableAnimation,
      FormLabelClasses = props.FormLabelClasses,
      marginProp = props.margin,
      shrinkProp = props.shrink,
      other = _objectWithoutProperties(props, ['children', 'classes', 'className', 'disableAnimation', 'FormLabelClasses', 'margin', 'shrink']);

  var muiFormControl = context.muiFormControl;

  var shrink = shrinkProp;

  if (typeof shrink === 'undefined' && muiFormControl) {
    shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart;
  }

  var margin = marginProp;
  if (typeof margin === 'undefined' && muiFormControl) {
    margin = muiFormControl.margin;
  }

  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, _defineProperty(_classNames, classes.formControl, muiFormControl), _defineProperty(_classNames, classes.animated, !disableAnimation), _defineProperty(_classNames, classes.shrink, shrink), _defineProperty(_classNames, classes.marginDense, margin === 'dense'), _classNames), classNameProp);

  return _react2.default.createElement(
    _Form.FormLabel,
    _extends({ 'data-shrink': shrink, className: className, classes: FormLabelClasses }, other),
    children
  );
}

InputLabel.propTypes = {
  /**
   * The contents of the `InputLabel`.
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
   * If `true`, the transition animation is disabled.
   */
  disableAnimation: _propTypes2.default.bool,
  /**
   * If `true`, apply disabled class.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If `true`, the label will be displayed in an error state.
   */
  error: _propTypes2.default.bool,
  /**
   * If `true`, the input of this label is focused.
   */
  focused: _propTypes2.default.bool,
  /**
   * `classes` property applied to the `FormLabel` element.
   */
  FormLabelClasses: _propTypes2.default.object,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: _propTypes2.default.oneOf(['dense']),
  /**
   * if `true`, the label will indicate that the input is required.
   */
  required: _propTypes2.default.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: _propTypes2.default.bool
};

InputLabel.defaultProps = {
  disableAnimation: false
};

InputLabel.contextTypes = {
  muiFormControl: _propTypes2.default.object
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiInputLabel' })(InputLabel);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcSW5wdXRcXElucHV0TGFiZWwuanMiXSwibmFtZXMiOlsic3R5bGVzIiwicm9vdCIsInRyYW5zZm9ybU9yaWdpbiIsImZvcm1Db250cm9sIiwicG9zaXRpb24iLCJsZWZ0IiwidG9wIiwidHJhbnNmb3JtIiwidGhlbWUiLCJzcGFjaW5nIiwidW5pdCIsIm1hcmdpbkRlbnNlIiwic2hyaW5rIiwiYW5pbWF0ZWQiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJkdXJhdGlvbiIsInNob3J0ZXIiLCJlYXNpbmciLCJlYXNlT3V0IiwiSW5wdXRMYWJlbCIsInByb3BzIiwiY29udGV4dCIsImNoaWxkcmVuIiwiY2xhc3NlcyIsImNsYXNzTmFtZVByb3AiLCJjbGFzc05hbWUiLCJkaXNhYmxlQW5pbWF0aW9uIiwiRm9ybUxhYmVsQ2xhc3NlcyIsIm1hcmdpblByb3AiLCJtYXJnaW4iLCJzaHJpbmtQcm9wIiwib3RoZXIiLCJtdWlGb3JtQ29udHJvbCIsImZpbGxlZCIsImZvY3VzZWQiLCJhZG9ybmVkU3RhcnQiLCJwcm9wVHlwZXMiLCJub2RlIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImJvb2wiLCJkaXNhYmxlZCIsImVycm9yIiwib25lT2YiLCJyZXF1aXJlZCIsImRlZmF1bHRQcm9wcyIsImNvbnRleHRUeXBlcyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs2TkFOQTs7QUFRTyxJQUFNQSwwQkFBUyxTQUFUQSxNQUFTO0FBQUEsU0FBVTtBQUM5QkMsVUFBTTtBQUNKQyx1QkFBaUI7QUFEYixLQUR3QjtBQUk5QkMsaUJBQWE7QUFDWEMsZ0JBQVUsVUFEQztBQUVYQyxZQUFNLENBRks7QUFHWEMsV0FBSyxDQUhNO0FBSVg7QUFDQUMsbUNBQTJCQyxNQUFNQyxPQUFOLENBQWNDLElBQWQsR0FBcUIsQ0FBaEQ7QUFMVyxLQUppQjtBQVc5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eEJwQixvQkFBa0I7QUFETSxDQUExQjs7QUFJQVAsV0FBVzRCLFlBQVgsR0FBMEI7QUFDeEJmLGtCQUFnQixvQkFBVU07QUFERixDQUExQjs7a0JBSWUsMEJBQVd4QyxNQUFYLEVBQW1CLEVBQUVrRCxNQUFNLGVBQVIsRUFBbkIsRUFBOEM3QixVQUE5QyxDIiwiZmlsZSI6IklucHV0TGFiZWwuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvcm1jcXVlbi9zbHQtdWkvbWF0ZXJpYWwtdWkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAaW5oZXJpdGVkQ29tcG9uZW50IEZvcm1MYWJlbFxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHsgRm9ybUxhYmVsIH0gZnJvbSAnLi4vRm9ybSc7XG5cbmV4cG9ydCBjb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgdHJhbnNmb3JtT3JpZ2luOiAndG9wIGxlZnQnLFxuICB9LFxuICBmb3JtQ29udHJvbDoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6IDAsXG4gICAgdG9wOiAwLFxuICAgIC8vIHNsaWdodCBhbHRlcmF0aW9uIHRvIHNwZWMgc3BhY2luZyB0byBtYXRjaCB2aXN1YWwgc3BlYyByZXN1bHRcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoMCwgJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAzfXB4KSBzY2FsZSgxKWAsXG4gIH0sXG4gIG1hcmdpbkRlbnNlOiB7XG4gICAgLy8gQ29tcGVuc2F0aW9uIGZvciB0aGUgYElucHV0LmlucHV0RGVuc2VgIHN0eWxlLlxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgwLCAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDIuNSArIDF9cHgpIHNjYWxlKDEpYCxcbiAgfSxcbiAgc2hyaW5rOiB7XG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDAsIDEuNXB4KSBzY2FsZSgwLjc1KScsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAndG9wIGxlZnQnLFxuICB9LFxuICBhbmltYXRlZDoge1xuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgndHJhbnNmb3JtJywge1xuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLnNob3J0ZXIsXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5lYXNlT3V0LFxuICAgIH0pLFxuICB9LFxufSk7XG5cbmZ1bmN0aW9uIElucHV0TGFiZWwocHJvcHMsIGNvbnRleHQpIHtcbiAgY29uc3Qge1xuICAgIGNoaWxkcmVuLFxuICAgIGNsYXNzZXMsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVQcm9wLFxuICAgIGRpc2FibGVBbmltYXRpb24sXG4gICAgRm9ybUxhYmVsQ2xhc3NlcyxcbiAgICBtYXJnaW46IG1hcmdpblByb3AsXG4gICAgc2hyaW5rOiBzaHJpbmtQcm9wLFxuICAgIC4uLm90aGVyXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7IG11aUZvcm1Db250cm9sIH0gPSBjb250ZXh0O1xuICBsZXQgc2hyaW5rID0gc2hyaW5rUHJvcDtcblxuICBpZiAodHlwZW9mIHNocmluayA9PT0gJ3VuZGVmaW5lZCcgJiYgbXVpRm9ybUNvbnRyb2wpIHtcbiAgICBzaHJpbmsgPSBtdWlGb3JtQ29udHJvbC5maWxsZWQgfHwgbXVpRm9ybUNvbnRyb2wuZm9jdXNlZCB8fCBtdWlGb3JtQ29udHJvbC5hZG9ybmVkU3RhcnQ7XG4gIH1cblxuICBsZXQgbWFyZ2luID0gbWFyZ2luUHJvcDtcbiAgaWYgKHR5cGVvZiBtYXJnaW4gPT09ICd1bmRlZmluZWQnICYmIG11aUZvcm1Db250cm9sKSB7XG4gICAgbWFyZ2luID0gbXVpRm9ybUNvbnRyb2wubWFyZ2luO1xuICB9XG5cbiAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lcyhcbiAgICBjbGFzc2VzLnJvb3QsXG4gICAge1xuICAgICAgW2NsYXNzZXMuZm9ybUNvbnRyb2xdOiBtdWlGb3JtQ29udHJvbCxcbiAgICAgIFtjbGFzc2VzLmFuaW1hdGVkXTogIWRpc2FibGVBbmltYXRpb24sXG4gICAgICBbY2xhc3Nlcy5zaHJpbmtdOiBzaHJpbmssXG4gICAgICBbY2xhc3Nlcy5tYXJnaW5EZW5zZV06IG1hcmdpbiA9PT0gJ2RlbnNlJyxcbiAgICB9LFxuICAgIGNsYXNzTmFtZVByb3AsXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybUxhYmVsIGRhdGEtc2hyaW5rPXtzaHJpbmt9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBjbGFzc2VzPXtGb3JtTGFiZWxDbGFzc2VzfSB7Li4ub3RoZXJ9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvRm9ybUxhYmVsPlxuICApO1xufVxuXG5JbnB1dExhYmVsLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBjb250ZW50cyBvZiB0aGUgYElucHV0TGFiZWxgLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICogVXNlZnVsIHRvIGV4dGVuZCB0aGUgc3R5bGUgYXBwbGllZCB0byBjb21wb25lbnRzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgdHJhbnNpdGlvbiBhbmltYXRpb24gaXMgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlQW5pbWF0aW9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgYXBwbHkgZGlzYWJsZWQgY2xhc3MuXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBsYWJlbCB3aWxsIGJlIGRpc3BsYXllZCBpbiBhbiBlcnJvciBzdGF0ZS5cbiAgICovXG4gIGVycm9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGlucHV0IG9mIHRoaXMgbGFiZWwgaXMgZm9jdXNlZC5cbiAgICovXG4gIGZvY3VzZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICogYGNsYXNzZXNgIHByb3BlcnR5IGFwcGxpZWQgdG8gdGhlIGBGb3JtTGFiZWxgIGVsZW1lbnQuXG4gICAqL1xuICBGb3JtTGFiZWxDbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICogSWYgYGRlbnNlYCwgd2lsbCBhZGp1c3QgdmVydGljYWwgc3BhY2luZy4gVGhpcyBpcyBub3JtYWxseSBvYnRhaW5lZCB2aWEgY29udGV4dCBmcm9tXG4gICAqIEZvcm1Db250cm9sLlxuICAgKi9cbiAgbWFyZ2luOiBQcm9wVHlwZXMub25lT2YoWydkZW5zZSddKSxcbiAgLyoqXG4gICAqIGlmIGB0cnVlYCwgdGhlIGxhYmVsIHdpbGwgaW5kaWNhdGUgdGhhdCB0aGUgaW5wdXQgaXMgcmVxdWlyZWQuXG4gICAqL1xuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBsYWJlbCBpcyBzaHJ1bmsuXG4gICAqL1xuICBzaHJpbms6IFByb3BUeXBlcy5ib29sLFxufTtcblxuSW5wdXRMYWJlbC5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpc2FibGVBbmltYXRpb246IGZhbHNlLFxufTtcblxuSW5wdXRMYWJlbC5jb250ZXh0VHlwZXMgPSB7XG4gIG11aUZvcm1Db250cm9sOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHsgbmFtZTogJ011aUlucHV0TGFiZWwnIH0pKElucHV0TGFiZWwpO1xuIl19

/***/ })

});