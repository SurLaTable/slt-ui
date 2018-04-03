webpackJsonpmaterial_ui([55],{

/***/ 352:
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

var _Paper = __webpack_require__(102);

var _Paper2 = _interopRequireDefault(_Paper);

var _helpers = __webpack_require__(97);

var _Progress = __webpack_require__(127);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // @inheritedComponent Paper

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: theme.palette.background.default,
      padding: theme.spacing.unit
    },
    positionBottom: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: theme.zIndex.mobileStepper
    },
    positionTop: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: theme.zIndex.mobileStepper
    },
    positionStatic: {},
    dots: {
      display: 'flex',
      flexDirection: 'row'
    },
    dot: {
      backgroundColor: theme.palette.action.disabled,
      borderRadius: '50%',
      width: theme.spacing.unit,
      height: theme.spacing.unit,
      margin: '0 2px'
    },
    dotActive: {
      backgroundColor: theme.palette.primary.main
    },
    progress: {
      width: '50%'
    }
  };
};

function MobileStepper(props) {
  var activeStep = props.activeStep,
      backButton = props.backButton,
      classes = props.classes,
      classNameProp = props.className,
      nextButton = props.nextButton,
      position = props.position,
      steps = props.steps,
      variant = props.variant,
      other = _objectWithoutProperties(props, ['activeStep', 'backButton', 'classes', 'className', 'nextButton', 'position', 'steps', 'variant']);

  var className = (0, _classnames2.default)(classes.root, classes['position' + (0, _helpers.capitalize)(position)], classNameProp);

  return _react2.default.createElement(
    _Paper2.default,
    _extends({ square: true, elevation: 0, className: className }, other),
    backButton,
    variant === 'dots' && _react2.default.createElement(
      'div',
      { className: classes.dots },
      [].concat(_toConsumableArray(new Array(steps))).map(function (_, step) {
        var dotClassName = (0, _classnames2.default)(classes.dot, _defineProperty({}, classes.dotActive, step === activeStep));
        // eslint-disable-next-line react/no-array-index-key
        return _react2.default.createElement('div', { key: step, className: dotClassName });
      })
    ),
    variant === 'progress' && _react2.default.createElement(_Progress.LinearProgress, {
      className: classes.progress,
      variant: 'determinate',
      value: Math.ceil(activeStep / (steps - 1) * 100)
    }),
    nextButton
  );
}

MobileStepper.propTypes = {
  /**
   * Set the active step (zero based index).
   * Defines which dot is highlighted when the variant is 'dots'.
   */
  activeStep: _propTypes2.default.number,
  /**
   * A back button element. For instance, it can be be a `Button` or a `IconButton`.
   */
  backButton: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * A next button element. For instance, it can be be a `Button` or a `IconButton`.
   */
  nextButton: _propTypes2.default.node,
  /**
   * Set the positioning type.
   */
  position: _propTypes2.default.oneOf(['bottom', 'top', 'static']),
  /**
   * The total steps.
   */
  steps: _propTypes2.default.number.isRequired,
  /**
   * The type of mobile stepper to use.
   */
  variant: _propTypes2.default.oneOf(['text', 'dots', 'progress'])
};

MobileStepper.defaultProps = {
  activeStep: 0,
  position: 'bottom',
  variant: 'dots'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiMobileStepper' })(MobileStepper);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcTW9iaWxlU3RlcHBlclxcTW9iaWxlU3RlcHBlci5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJyb290IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJiYWNrZ3JvdW5kIiwidGhlbWUiLCJwYWxldHRlIiwiZGVmYXVsdCIsInBhZGRpbmciLCJzcGFjaW5nIiwidW5pdCIsInBvc2l0aW9uQm90dG9tIiwicG9zaXRpb24iLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJ6SW5kZXgiLCJtb2JpbGVTdGVwcGVyIiwicG9zaXRpb25Ub3AiLCJ0b3AiLCJwb3NpdGlvblN0YXRpYyIsImRvdHMiLCJkb3QiLCJiYWNrZ3JvdW5kQ29sb3IiLCJhY3Rpb24iLCJkaXNhYmxlZCIsImJvcmRlclJhZGl1cyIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luIiwiZG90QWN0aXZlIiwicHJpbWFyeSIsIm1haW4iLCJwcm9ncmVzcyIsIk1vYmlsZVN0ZXBwZXIiLCJwcm9wcyIsImFjdGl2ZVN0ZXAiLCJiYWNrQnV0dG9uIiwiY2xhc3NlcyIsImNsYXNzTmFtZVByb3AiLCJjbGFzc05hbWUiLCJuZXh0QnV0dG9uIiwic3RlcHMiLCJ2YXJpYW50Iiwib3RoZXIiLCJBcnJheSIsIm1hcCIsIl8iLCJzdGVwIiwiZG90Q2xhc3NOYW1lIiwiTWF0aCIsImNlaWwiLCJwcm9wVHlwZXMiLCJudW1iZXIiLCJub2RlIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs2TkFSQTs7QUFVTyxJQUFNQSwwQkFBUyxTQUFUQSxNQUFTO0FBQUEsU0FBVTtBQUM5QkMsVUFBTTtBQUNKQyxlQUFTLE1BREw7QUFFSkMscUJBQWUsS0FGWDtB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RURQLGNBQWNrQixTQUFkLEdBQTBCO0FBQ3hCOzs7O0FBSUFoQixjQUFZLG9CQUFVaUIsTUFMRTtBQU14Qjs7O0FBR0FoQixjQUFZLG9CQUFVaUIsSUFURTtBQVV4Qjs7O0FBR0FoQixXQUFTLG9CQUFVaUIsTUFBVixDQUFpQkMsVUFiRjtBQWN4Qjs7O0FBR0FoQixhQUFXLG9CQUFVaUIsTUFqQkc7QUFrQnhCOzs7QUFHQWhCLGNBQVksb0JBQVVhLElBckJFO0FBc0J4Qjs7O0FBR0ExQyxZQUFVLG9CQUFVOEMsS0FBVixDQUFnQixDQUFDLFFBQUQsRUFBVyxLQUFYLEVBQWtCLFFBQWxCLENBQWhCLENBekJjO0FBMEJ4Qjs7O0FBR0FoQixTQUFPLG9CQUFVVyxNQUFWLENBQWlCRyxVQTdCQTtBQThCeEI7OztBQUdBYixXQUFTLG9CQUFVZSxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsVUFBakIsQ0FBaEI7QUFqQ2UsQ0FBMUI7O0FBb0NBeEIsY0FBY3lCLFlBQWQsR0FBNkI7QUFDM0J2QixjQUFZLENBRGU7QUFFM0J4QixZQUFVLFFBRmlCO0FBRzNCK0IsV0FBUztBQUhrQixDQUE3Qjs7a0JBTWUsMEJBQVc3QyxNQUFYLEVBQW1CLEVBQUU4RCxNQUFNLGtCQUFSLEVBQW5CLEVBQWlEMUIsYUFBakQsQyIsImZpbGUiOiJNb2JpbGVTdGVwcGVyLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3JtY3F1ZW4vc2x0LXVpL21hdGVyaWFsLXVpIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGluaGVyaXRlZENvbXBvbmVudCBQYXBlclxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IFBhcGVyIGZyb20gJy4uL1BhcGVyJztcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICcuLi91dGlscy9oZWxwZXJzJztcbmltcG9ydCB7IExpbmVhclByb2dyZXNzIH0gZnJvbSAnLi4vUHJvZ3Jlc3MnO1xuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0LFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcudW5pdCxcbiAgfSxcbiAgcG9zaXRpb25Cb3R0b206IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5tb2JpbGVTdGVwcGVyLFxuICB9LFxuICBwb3NpdGlvblRvcDoge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIHpJbmRleDogdGhlbWUuekluZGV4Lm1vYmlsZVN0ZXBwZXIsXG4gIH0sXG4gIHBvc2l0aW9uU3RhdGljOiB7fSxcbiAgZG90czoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgfSxcbiAgZG90OiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmFjdGlvbi5kaXNhYmxlZCxcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nLnVuaXQsXG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nLnVuaXQsXG4gICAgbWFyZ2luOiAnMCAycHgnLFxuICB9LFxuICBkb3RBY3RpdmU6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICB9LFxuICBwcm9ncmVzczoge1xuICAgIHdpZHRoOiAnNTAlJyxcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBNb2JpbGVTdGVwcGVyKHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBhY3RpdmVTdGVwLFxuICAgIGJhY2tCdXR0b24sXG4gICAgY2xhc3NlcyxcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVByb3AsXG4gICAgbmV4dEJ1dHRvbixcbiAgICBwb3NpdGlvbixcbiAgICBzdGVwcyxcbiAgICB2YXJpYW50LFxuICAgIC4uLm90aGVyXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc05hbWVzKFxuICAgIGNsYXNzZXMucm9vdCxcbiAgICBjbGFzc2VzW2Bwb3NpdGlvbiR7Y2FwaXRhbGl6ZShwb3NpdGlvbil9YF0sXG4gICAgY2xhc3NOYW1lUHJvcCxcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxQYXBlciBzcXVhcmUgZWxldmF0aW9uPXswfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gey4uLm90aGVyfT5cbiAgICAgIHtiYWNrQnV0dG9ufVxuICAgICAge3ZhcmlhbnQgPT09ICdkb3RzJyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRvdHN9PlxuICAgICAgICAgIHtbLi4ubmV3IEFycmF5KHN0ZXBzKV0ubWFwKChfLCBzdGVwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkb3RDbGFzc05hbWUgPSBjbGFzc05hbWVzKGNsYXNzZXMuZG90LCB7XG4gICAgICAgICAgICAgIFtjbGFzc2VzLmRvdEFjdGl2ZV06IHN0ZXAgPT09IGFjdGl2ZVN0ZXAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXlcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17c3RlcH0gY2xhc3NOYW1lPXtkb3RDbGFzc05hbWV9IC8+O1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7dmFyaWFudCA9PT0gJ3Byb2dyZXNzJyAmJiAoXG4gICAgICAgIDxMaW5lYXJQcm9ncmVzc1xuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9ncmVzc31cbiAgICAgICAgICB2YXJpYW50PVwiZGV0ZXJtaW5hdGVcIlxuICAgICAgICAgIHZhbHVlPXtNYXRoLmNlaWwoYWN0aXZlU3RlcCAvIChzdGVwcyAtIDEpICogMTAwKX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7bmV4dEJ1dHRvbn1cbiAgICA8L1BhcGVyPlxuICApO1xufVxuXG5Nb2JpbGVTdGVwcGVyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFNldCB0aGUgYWN0aXZlIHN0ZXAgKHplcm8gYmFzZWQgaW5kZXgpLlxuICAgKiBEZWZpbmVzIHdoaWNoIGRvdCBpcyBoaWdobGlnaHRlZCB3aGVuIHRoZSB2YXJpYW50IGlzICdkb3RzJy5cbiAgICovXG4gIGFjdGl2ZVN0ZXA6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBBIGJhY2sgYnV0dG9uIGVsZW1lbnQuIEZvciBpbnN0YW5jZSwgaXQgY2FuIGJlIGJlIGEgYEJ1dHRvbmAgb3IgYSBgSWNvbkJ1dHRvbmAuXG4gICAqL1xuICBiYWNrQnV0dG9uOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIFVzZWZ1bCB0byBleHRlbmQgdGhlIHN0eWxlIGFwcGxpZWQgdG8gY29tcG9uZW50cy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIEEgbmV4dCBidXR0b24gZWxlbWVudC4gRm9yIGluc3RhbmNlLCBpdCBjYW4gYmUgYmUgYSBgQnV0dG9uYCBvciBhIGBJY29uQnV0dG9uYC5cbiAgICovXG4gIG5leHRCdXR0b246IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICogU2V0IHRoZSBwb3NpdGlvbmluZyB0eXBlLlxuICAgKi9cbiAgcG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbJ2JvdHRvbScsICd0b3AnLCAnc3RhdGljJ10pLFxuICAvKipcbiAgICogVGhlIHRvdGFsIHN0ZXBzLlxuICAgKi9cbiAgc3RlcHM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIFRoZSB0eXBlIG9mIG1vYmlsZSBzdGVwcGVyIHRvIHVzZS5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ3RleHQnLCAnZG90cycsICdwcm9ncmVzcyddKSxcbn07XG5cbk1vYmlsZVN0ZXBwZXIuZGVmYXVsdFByb3BzID0ge1xuICBhY3RpdmVTdGVwOiAwLFxuICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gIHZhcmlhbnQ6ICdkb3RzJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7IG5hbWU6ICdNdWlNb2JpbGVTdGVwcGVyJyB9KShNb2JpbGVTdGVwcGVyKTtcbiJdfQ==

/***/ })

});