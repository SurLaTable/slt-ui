webpackJsonpmaterial_ui([54],{

/***/ 353:
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

var _helpers = __webpack_require__(97);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SIZE = 50;

function getRelativeValue(value, min, max) {
  var clampedValue = Math.min(Math.max(min, value), max);
  return (clampedValue - min) / (max - min);
}

function easeOut(t) {
  t = getRelativeValue(t, 0, 1);
  // https://gist.github.com/gre/1650294
  t = (t -= 1) * t * t + 1;
  return t;
}

function easeIn(t) {
  return t * t;
}

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'inline-block'
    },
    colorPrimary: {
      color: theme.palette.primary.main
    },
    colorSecondary: {
      color: theme.palette.secondary.main
    },
    svg: {},
    svgIndeterminate: {
      animation: 'mui-progress-circular-rotate 1.4s linear infinite'
    },
    circle: {
      stroke: 'currentColor',
      strokeLinecap: 'round'
    },
    circleIndeterminate: {
      animation: 'mui-progress-circular-dash 1.4s ease-in-out infinite',
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: '80px, 200px',
      strokeDashoffset: '0px' // Add the unit to fix a Edge 16 and below bug.
    },
    '@keyframes mui-progress-circular-rotate': {
      '100%': {
        transform: 'rotate(360deg)'
      }
    },
    '@keyframes mui-progress-circular-dash': {
      '0%': {
        strokeDasharray: '1px, 200px',
        strokeDashoffset: '0px'
      },
      '50%': {
        strokeDasharray: '100px, 200px',
        strokeDashoffset: '-15px'
      },
      '100%': {
        strokeDasharray: '100px, 200px',
        strokeDashoffset: '-120px'
      }
    }
  };
};

/**
 * ## ARIA
 *
 * If the progress bar is describing the loading progress of a particular region of a page,
 * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
 * attribute to `true` on that region until it has finished loading.
 */
function CircularProgress(props) {
  var _classNames2;

  var classes = props.classes,
      className = props.className,
      color = props.color,
      max = props.max,
      min = props.min,
      size = props.size,
      style = props.style,
      thickness = props.thickness,
      value = props.value,
      variant = props.variant,
      other = _objectWithoutProperties(props, ['classes', 'className', 'color', 'max', 'min', 'size', 'style', 'thickness', 'value', 'variant']);

  var circleStyle = {};
  var rootStyle = {};
  var rootProps = {};

  if (variant === 'determinate' || variant === 'static') {
    var relVal = getRelativeValue(value, min, max) * 100;
    var circumference = 2 * Math.PI * (SIZE / 2 - 5);
    circleStyle.strokeDasharray = circumference.toFixed(3);
    rootProps['aria-valuenow'] = Math.round(relVal);

    if (variant === 'static') {
      circleStyle.strokeDashoffset = ((100 - relVal) / 100 * circumference).toFixed(3) + 'px';
      rootStyle.transform = 'rotate(-90deg)';
    } else {
      circleStyle.strokeDashoffset = (easeIn((100 - relVal) / 100) * circumference).toFixed(3) + 'px';
      rootStyle.transform = 'rotate(' + (easeOut(relVal / 70) * 270).toFixed(3) + 'deg)';
    }
  }

  return _react2.default.createElement(
    'div',
    _extends({
      className: (0, _classnames2.default)(classes.root, _defineProperty({}, classes['color' + (0, _helpers.capitalize)(color)], color !== 'inherit'), className),
      style: _extends({ width: size, height: size }, rootStyle, style),
      role: 'progressbar'
    }, rootProps, other),
    _react2.default.createElement(
      'svg',
      {
        className: (0, _classnames2.default)(classes.svg, (_classNames2 = {}, _defineProperty(_classNames2, classes.svgIndeterminate, variant === 'indeterminate'), _defineProperty(_classNames2, classes.svgStatic, variant === 'static'), _classNames2)),
        viewBox: '0 0 ' + SIZE + ' ' + SIZE
      },
      _react2.default.createElement('circle', {
        className: (0, _classnames2.default)(classes.circle, _defineProperty({}, classes.circleIndeterminate, variant === 'indeterminate')),
        style: circleStyle,
        cx: SIZE / 2,
        cy: SIZE / 2,
        r: SIZE / 2 - 5,
        fill: 'none',
        strokeWidth: thickness
      })
    )
  );
}

CircularProgress.propTypes = {
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
  color: _propTypes2.default.oneOf(['primary', 'secondary', 'inherit']),
  /**
   * The max value of progress in determinate variant.
   */
  max: _propTypes2.default.number,
  /**
   * The min value of progress in determinate variant.
   */
  min: _propTypes2.default.number,
  /**
   * The size of the circle.
   */
  size: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  /**
   * @ignore
   */
  style: _propTypes2.default.object,
  /**
   * The thickness of the circle.
   */
  thickness: _propTypes2.default.number,
  /**
   * The value of the progress indicator for the determinate and static variants.
   * Value between 0 and 100.
   */
  value: _propTypes2.default.number,
  /**
   * The variant of progress indicator. Use indeterminate
   * when there is no progress value.
   */
  variant: _propTypes2.default.oneOf(['determinate', 'indeterminate', 'static'])
};

CircularProgress.defaultProps = {
  color: 'primary',
  max: 100,
  min: 0,
  size: 40,
  thickness: 3.6,
  value: 0,
  variant: 'indeterminate'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiCircularProgress', flip: false })(CircularProgress);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcUHJvZ3Jlc3NcXENpcmN1bGFyUHJvZ3Jlc3MuanMiXSwibmFtZXMiOlsiU0laRSIsImdldFJlbGF0aXZlVmFsdWUiLCJ2YWx1ZSIsIm1pbiIsIm1heCIsImNsYW1wZWRWYWx1ZSIsIk1hdGgiLCJlYXNlT3V0IiwidCIsImVhc2VJbiIsInN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwiY29sb3JQcmltYXJ5IiwiY29sb3IiLCJ0aGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsImNvbG9yU2Vjb25kYXJ5Iiwic2Vjb25kYXJ5Iiwic3ZnIiwic3ZnSW5kZXRlcm1pbmF0ZSIsImFuaW1hdGlvbiIsImNpcmNsZSIsInN0cm9rZSIsInN0cm9rZUxpbmVjYXAiLCJjaXJjbGVJbmRldGVybWluYXRlIiwic3Ryb2tlRGFzaGFycmF5Iiwic3Ryb2tlRGFzaG9mZnNldCIsInRyYW5zZm9ybSIsIkNpcmN1bGFyUHJvZ3Jlc3MiLCJwcm9wcyIsImNsYXNzZXMiLCJjbGFzc05hbWUiLCJzaXplIiwic3R5bGUiLCJ0aGlja25lc3MiLCJ2YXJpYW50Iiwib3RoZXIiLCJjaXJjbGVTdHlsZSIsInJvb3RTdHlsZSIsInJvb3RQcm9wcyIsInJlbFZhbCIsImNpcmN1bWZlcmVuY2UiLCJQSSIsInRvRml4ZWQiLCJyb3VuZCIsIndpZHRoIiwiaGVpZ2h0Iiwic3ZnU3RhdGljIiwicHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsIm9uZU9mIiwibnVtYmVyIiwib25lT2ZUeXBlIiwiZGVmYXVsdFByb3BzIiwibmFtZSIsImZsaXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBTyxFQUFiOztBQUVBLFNBQVNDLGdCQUFULENBQTBCQyxLQUExQixFQUFpQ0MsR0FBakMsRUFBc0NDLEdBQXRDLEVBQTJDO0FBQ3pDLE1BQU1DLGVBQWVDLEtBQUtI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O0FBTTlCbkMsU0FBTyxDQU51QjtBQU85Qm9DLFdBQVM7QUFQcUIsQ0FBaEM7O2tCQVVlLDBCQUFXNUIsTUFBWCxFQUFtQixFQUFFaUQsTUFBTSxxQkFBUixFQUErQkMsTUFBTSxLQUFyQyxFQUFuQixFQUFpRTdCLGdCQUFqRSxDIiwiZmlsZSI6IkNpcmN1bGFyUHJvZ3Jlc3MuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvcm1jcXVlbi9zbHQtdWkvbWF0ZXJpYWwtdWkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcnMnO1xuXG5jb25zdCBTSVpFID0gNTA7XG5cbmZ1bmN0aW9uIGdldFJlbGF0aXZlVmFsdWUodmFsdWUsIG1pbiwgbWF4KSB7XG4gIGNvbnN0IGNsYW1wZWRWYWx1ZSA9IE1hdGgubWluKE1hdGgubWF4KG1pbiwgdmFsdWUpLCBtYXgpO1xuICByZXR1cm4gKGNsYW1wZWRWYWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKTtcbn1cblxuZnVuY3Rpb24gZWFzZU91dCh0KSB7XG4gIHQgPSBnZXRSZWxhdGl2ZVZhbHVlKHQsIDAsIDEpO1xuICAvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9ncmUvMTY1MDI5NFxuICB0ID0gKHQgLT0gMSkgKiB0ICogdCArIDE7XG4gIHJldHVybiB0O1xufVxuXG5mdW5jdGlvbiBlYXNlSW4odCkge1xuICByZXR1cm4gdCAqIHQ7XG59XG5cbmV4cG9ydCBjb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gIH0sXG4gIGNvbG9yUHJpbWFyeToge1xuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgfSxcbiAgY29sb3JTZWNvbmRhcnk6IHtcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcbiAgfSxcbiAgc3ZnOiB7fSxcbiAgc3ZnSW5kZXRlcm1pbmF0ZToge1xuICAgIGFuaW1hdGlvbjogJ211aS1wcm9ncmVzcy1jaXJjdWxhci1yb3RhdGUgMS40cyBsaW5lYXIgaW5maW5pdGUnLFxuICB9LFxuICBjaXJjbGU6IHtcbiAgICBzdHJva2U6ICdjdXJyZW50Q29sb3InLFxuICAgIHN0cm9rZUxpbmVjYXA6ICdyb3VuZCcsXG4gIH0sXG4gIGNpcmNsZUluZGV0ZXJtaW5hdGU6IHtcbiAgICBhbmltYXRpb246ICdtdWktcHJvZ3Jlc3MtY2lyY3VsYXItZGFzaCAxLjRzIGVhc2UtaW4tb3V0IGluZmluaXRlJyxcbiAgICAvLyBTb21lIGRlZmF1bHQgdmFsdWUgdGhhdCBsb29rcyBmaW5lIHdhaXRpbmcgZm9yIHRoZSBhbmltYXRpb24gdG8ga2lja3MgaW4uXG4gICAgc3Ryb2tlRGFzaGFycmF5OiAnODBweCwgMjAwcHgnLFxuICAgIHN0cm9rZURhc2hvZmZzZXQ6ICcwcHgnLCAvLyBBZGQgdGhlIHVuaXQgdG8gZml4IGEgRWRnZSAxNiBhbmQgYmVsb3cgYnVnLlxuICB9LFxuICAnQGtleWZyYW1lcyBtdWktcHJvZ3Jlc3MtY2lyY3VsYXItcm90YXRlJzoge1xuICAgICcxMDAlJzoge1xuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDM2MGRlZyknLFxuICAgIH0sXG4gIH0sXG4gICdAa2V5ZnJhbWVzIG11aS1wcm9ncmVzcy1jaXJjdWxhci1kYXNoJzoge1xuICAgICcwJSc6IHtcbiAgICAgIHN0cm9rZURhc2hhcnJheTogJzFweCwgMjAwcHgnLFxuICAgICAgc3Ryb2tlRGFzaG9mZnNldDogJzBweCcsXG4gICAgfSxcbiAgICAnNTAlJzoge1xuICAgICAgc3Ryb2tlRGFzaGFycmF5OiAnMTAwcHgsIDIwMHB4JyxcbiAgICAgIHN0cm9rZURhc2hvZmZzZXQ6ICctMTVweCcsXG4gICAgfSxcbiAgICAnMTAwJSc6IHtcbiAgICAgIHN0cm9rZURhc2hhcnJheTogJzEwMHB4LCAyMDBweCcsXG4gICAgICBzdHJva2VEYXNob2Zmc2V0OiAnLTEyMHB4JyxcbiAgICB9LFxuICB9LFxufSk7XG5cbi8qKlxuICogIyMgQVJJQVxuICpcbiAqIElmIHRoZSBwcm9ncmVzcyBiYXIgaXMgZGVzY3JpYmluZyB0aGUgbG9hZGluZyBwcm9ncmVzcyBvZiBhIHBhcnRpY3VsYXIgcmVnaW9uIG9mIGEgcGFnZSxcbiAqIHlvdSBzaG91bGQgdXNlIGBhcmlhLWRlc2NyaWJlZGJ5YCB0byBwb2ludCB0byB0aGUgcHJvZ3Jlc3MgYmFyLCBhbmQgc2V0IHRoZSBgYXJpYS1idXN5YFxuICogYXR0cmlidXRlIHRvIGB0cnVlYCBvbiB0aGF0IHJlZ2lvbiB1bnRpbCBpdCBoYXMgZmluaXNoZWQgbG9hZGluZy5cbiAqL1xuZnVuY3Rpb24gQ2lyY3VsYXJQcm9ncmVzcyhwcm9wcykge1xuICBjb25zdCB7XG4gICAgY2xhc3NlcyxcbiAgICBjbGFzc05hbWUsXG4gICAgY29sb3IsXG4gICAgbWF4LFxuICAgIG1pbixcbiAgICBzaXplLFxuICAgIHN0eWxlLFxuICAgIHRoaWNrbmVzcyxcbiAgICB2YWx1ZSxcbiAgICB2YXJpYW50LFxuICAgIC4uLm90aGVyXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBjaXJjbGVTdHlsZSA9IHt9O1xuICBjb25zdCByb290U3R5bGUgPSB7fTtcbiAgY29uc3Qgcm9vdFByb3BzID0ge307XG5cbiAgaWYgKHZhcmlhbnQgPT09ICdkZXRlcm1pbmF0ZScgfHwgdmFyaWFudCA9PT0gJ3N0YXRpYycpIHtcbiAgICBjb25zdCByZWxWYWwgPSBnZXRSZWxhdGl2ZVZhbHVlKHZhbHVlLCBtaW4sIG1heCkgKiAxMDA7XG4gICAgY29uc3QgY2lyY3VtZmVyZW5jZSA9IDIgKiBNYXRoLlBJICogKFNJWkUgLyAyIC0gNSk7XG4gICAgY2lyY2xlU3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gY2lyY3VtZmVyZW5jZS50b0ZpeGVkKDMpO1xuICAgIHJvb3RQcm9wc1snYXJpYS12YWx1ZW5vdyddID0gTWF0aC5yb3VuZChyZWxWYWwpO1xuXG4gICAgaWYgKHZhcmlhbnQgPT09ICdzdGF0aWMnKSB7XG4gICAgICBjaXJjbGVTdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gYCR7KCgxMDAgLSByZWxWYWwpIC8gMTAwICogY2lyY3VtZmVyZW5jZSkudG9GaXhlZCgzKX1weGA7XG4gICAgICByb290U3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgtOTBkZWcpJztcbiAgICB9IGVsc2Uge1xuICAgICAgY2lyY2xlU3R5bGUuc3Ryb2tlRGFzaG9mZnNldCA9IGAkeyhlYXNlSW4oKDEwMCAtIHJlbFZhbCkgLyAxMDApICogY2lyY3VtZmVyZW5jZSkudG9GaXhlZChcbiAgICAgICAgMyxcbiAgICAgICl9cHhgO1xuICAgICAgcm9vdFN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHsoZWFzZU91dChyZWxWYWwgLyA3MCkgKiAyNzApLnRvRml4ZWQoMyl9ZGVnKWA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgIGNsYXNzZXMucm9vdCxcbiAgICAgICAge1xuICAgICAgICAgIFtjbGFzc2VzW2Bjb2xvciR7Y2FwaXRhbGl6ZShjb2xvcil9YF1dOiBjb2xvciAhPT0gJ2luaGVyaXQnLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICApfVxuICAgICAgc3R5bGU9e3sgd2lkdGg6IHNpemUsIGhlaWdodDogc2l6ZSwgLi4ucm9vdFN0eWxlLCAuLi5zdHlsZSB9fVxuICAgICAgcm9sZT1cInByb2dyZXNzYmFyXCJcbiAgICAgIHsuLi5yb290UHJvcHN9XG4gICAgICB7Li4ub3RoZXJ9XG4gICAgPlxuICAgICAgPHN2Z1xuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy5zdmcsIHtcbiAgICAgICAgICBbY2xhc3Nlcy5zdmdJbmRldGVybWluYXRlXTogdmFyaWFudCA9PT0gJ2luZGV0ZXJtaW5hdGUnLFxuICAgICAgICAgIFtjbGFzc2VzLnN2Z1N0YXRpY106IHZhcmlhbnQgPT09ICdzdGF0aWMnLFxuICAgICAgICB9KX1cbiAgICAgICAgdmlld0JveD17YDAgMCAke1NJWkV9ICR7U0laRX1gfVxuICAgICAgPlxuICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzZXMuY2lyY2xlLCB7XG4gICAgICAgICAgICBbY2xhc3Nlcy5jaXJjbGVJbmRldGVybWluYXRlXTogdmFyaWFudCA9PT0gJ2luZGV0ZXJtaW5hdGUnLFxuICAgICAgICAgIH0pfVxuICAgICAgICAgIHN0eWxlPXtjaXJjbGVTdHlsZX1cbiAgICAgICAgICBjeD17U0laRSAvIDJ9XG4gICAgICAgICAgY3k9e1NJWkUgLyAyfVxuICAgICAgICAgIHI9e1NJWkUgLyAyIC0gNX1cbiAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9e3RoaWNrbmVzc31cbiAgICAgICAgLz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5DaXJjdWxhclByb2dyZXNzLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFVzZWZ1bCB0byBleHRlbmQgdGhlIHN0eWxlIGFwcGxpZWQgdG8gY29tcG9uZW50cy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgY29tcG9uZW50LiBJdCBzdXBwb3J0cyB0aG9zZSB0aGVtZSBjb2xvcnMgdGhhdCBtYWtlIHNlbnNlIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ3NlY29uZGFyeScsICdpbmhlcml0J10pLFxuICAvKipcbiAgICogVGhlIG1heCB2YWx1ZSBvZiBwcm9ncmVzcyBpbiBkZXRlcm1pbmF0ZSB2YXJpYW50LlxuICAgKi9cbiAgbWF4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogVGhlIG1pbiB2YWx1ZSBvZiBwcm9ncmVzcyBpbiBkZXRlcm1pbmF0ZSB2YXJpYW50LlxuICAgKi9cbiAgbWluOiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogVGhlIHNpemUgb2YgdGhlIGNpcmNsZS5cbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICogVGhlIHRoaWNrbmVzcyBvZiB0aGUgY2lyY2xlLlxuICAgKi9cbiAgdGhpY2tuZXNzOiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogVGhlIHZhbHVlIG9mIHRoZSBwcm9ncmVzcyBpbmRpY2F0b3IgZm9yIHRoZSBkZXRlcm1pbmF0ZSBhbmQgc3RhdGljIHZhcmlhbnRzLlxuICAgKiBWYWx1ZSBiZXR3ZWVuIDAgYW5kIDEwMC5cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogVGhlIHZhcmlhbnQgb2YgcHJvZ3Jlc3MgaW5kaWNhdG9yLiBVc2UgaW5kZXRlcm1pbmF0ZVxuICAgKiB3aGVuIHRoZXJlIGlzIG5vIHByb2dyZXNzIHZhbHVlLlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnZGV0ZXJtaW5hdGUnLCAnaW5kZXRlcm1pbmF0ZScsICdzdGF0aWMnXSksXG59O1xuXG5DaXJjdWxhclByb2dyZXNzLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29sb3I6ICdwcmltYXJ5JyxcbiAgbWF4OiAxMDAsXG4gIG1pbjogMCxcbiAgc2l6ZTogNDAsXG4gIHRoaWNrbmVzczogMy42LFxuICB2YWx1ZTogMCxcbiAgdmFyaWFudDogJ2luZGV0ZXJtaW5hdGUnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHsgbmFtZTogJ011aUNpcmN1bGFyUHJvZ3Jlc3MnLCBmbGlwOiBmYWxzZSB9KShDaXJjdWxhclByb2dyZXNzKTtcbiJdfQ==

/***/ })

});