webpackJsonpmaterial_ui([53],{

/***/ 354:
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

var _warning = __webpack_require__(3);

var _warning2 = _interopRequireDefault(_warning);

var _withStyles = __webpack_require__(18);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _colorManipulator = __webpack_require__(106);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TRANSITION_DURATION = 4; // 400ms

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      position: 'relative',
      overflow: 'hidden',
      height: 5
    },
    colorPrimary: {
      backgroundColor: (0, _colorManipulator.lighten)(theme.palette.primary.light, 0.6)
    },
    colorSecondary: {
      backgroundColor: (0, _colorManipulator.lighten)(theme.palette.secondary.light, 0.4)
    },
    buffer: {
      backgroundColor: 'transparent'
    },
    query: {
      transform: 'rotate(180deg)'
    },
    dashed: {
      position: 'absolute',
      marginTop: 0,
      height: '100%',
      width: '100%',
      animation: 'buffer 3s infinite linear'
    },
    dashedColorPrimary: {
      backgroundImage: 'radial-gradient(' + (0, _colorManipulator.lighten)(theme.palette.primary.light, 0.6) + ' 0%, ' + (0, _colorManipulator.lighten)(theme.palette.primary.light, 0.6) + ' 16%, transparent 42%)',
      backgroundSize: '10px 10px',
      backgroundPosition: '0px -23px'
    },
    dashedColorSecondary: {
      backgroundImage: 'radial-gradient(' + (0, _colorManipulator.lighten)(theme.palette.secondary.light, 0.4) + ' 0%, ' + (0, _colorManipulator.lighten)(theme.palette.secondary.light, 0.6) + ' 16%, transparent 42%)',
      backgroundSize: '10px 10px',
      backgroundPosition: '0px -23px'
    },
    bar: {
      width: '100%',
      position: 'absolute',
      left: 0,
      bottom: 0,
      top: 0,
      transition: 'transform 0.2s linear',
      transformOrigin: 'left'
    },
    barColorPrimary: {
      backgroundColor: theme.palette.primary.main
    },
    barColorSecondary: {
      backgroundColor: theme.palette.secondary.main
    },
    bar1Indeterminate: {
      width: 'auto',
      willChange: 'left, right',
      animation: 'mui-indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite'
    },
    bar2Indeterminate: {
      width: 'auto',
      willChange: 'left, right',
      animation: 'mui-indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite',
      animationDelay: '1.15s'
    },
    bar1Determinate: {
      willChange: 'transform',
      transition: 'transform .' + TRANSITION_DURATION + 's linear'
    },
    bar1Buffer: {
      zIndex: 1,
      transition: 'transform .' + TRANSITION_DURATION + 's linear'
    },
    bar2Buffer: {
      transition: 'transform .' + TRANSITION_DURATION + 's linear'
    },
    // Legends:
    // || represents the viewport
    // -  represents a light background
    // x  represents a dark background
    '@keyframes mui-indeterminate1': {
      //  |-----|---x-||-----||-----|
      '0%': {
        left: '-35%',
        right: '100%'
      },
      //  |-----|-----||-----||xxxx-|
      '60%': {
        left: '100%',
        right: '-90%'
      },
      '100%': {
        left: '100%',
        right: '-90%'
      }
    },
    '@keyframes mui-indeterminate2': {
      //  |xxxxx|xxxxx||-----||-----|
      '0%': {
        left: '-200%',
        right: '100%'
      },
      //  |-----|-----||-----||-x----|
      '60%': {
        left: '107%',
        right: '-8%'
      },
      '100%': {
        left: '107%',
        right: '-8%'
      }
    },
    '@keyframes buffer': {
      '0%': {
        opacity: 1,
        backgroundPosition: '0px -23px'
      },
      '50%': {
        opacity: 0,
        backgroundPosition: '0px -23px'
      },
      '100%': {
        opacity: 1,
        backgroundPosition: '-200px -23px'
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
function LinearProgress(props) {
  var _classNames, _classNames2, _classNames3, _classNames4;

  var classes = props.classes,
      classNameProp = props.className,
      color = props.color,
      value = props.value,
      valueBuffer = props.valueBuffer,
      variant = props.variant,
      other = _objectWithoutProperties(props, ['classes', 'className', 'color', 'value', 'valueBuffer', 'variant']);

  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, _defineProperty(_classNames, classes.colorPrimary, color === 'primary'), _defineProperty(_classNames, classes.colorSecondary, color === 'secondary'), _defineProperty(_classNames, classes.buffer, variant === 'buffer'), _defineProperty(_classNames, classes.query, variant === 'query'), _classNames), classNameProp);
  var dashedClass = (0, _classnames2.default)(classes.dashed, (_classNames2 = {}, _defineProperty(_classNames2, classes.dashedColorPrimary, color === 'primary'), _defineProperty(_classNames2, classes.dashedColorSecondary, color === 'secondary'), _classNames2));
  var bar1ClassName = (0, _classnames2.default)(classes.bar, (_classNames3 = {}, _defineProperty(_classNames3, classes.barColorPrimary, color === 'primary'), _defineProperty(_classNames3, classes.barColorSecondary, color === 'secondary'), _defineProperty(_classNames3, classes.bar1Indeterminate, variant === 'indeterminate' || variant === 'query'), _defineProperty(_classNames3, classes.bar1Determinate, variant === 'determinate'), _defineProperty(_classNames3, classes.bar1Buffer, variant === 'buffer'), _classNames3));
  var bar2ClassName = (0, _classnames2.default)(classes.bar, (_classNames4 = {}, _defineProperty(_classNames4, classes.barColorPrimary, color === 'primary' && variant !== 'buffer'), _defineProperty(_classNames4, classes.colorPrimary, color === 'primary' && variant === 'buffer'), _defineProperty(_classNames4, classes.barColorSecondary, color === 'secondary' && variant !== 'buffer'), _defineProperty(_classNames4, classes.colorSecondary, color === 'secondary' && variant === 'buffer'), _defineProperty(_classNames4, classes.bar2Indeterminate, variant === 'indeterminate' || variant === 'query'), _defineProperty(_classNames4, classes.bar2Buffer, variant === 'buffer'), _classNames4));
  var rootProps = {};
  var inlineStyles = { bar1: {}, bar2: {} };

  if (variant === 'determinate' || variant === 'buffer') {
    if (value !== undefined) {
      rootProps['aria-valuenow'] = Math.round(value);
      inlineStyles.bar1.transform = 'scaleX(' + value / 100 + ')';
    } else {
      (0, _warning2.default)(false, 'Material-UI: you need to provide a value property ' + 'when using the determinate or buffer variant of LinearProgress .');
    }
  }
  if (variant === 'buffer') {
    if (valueBuffer !== undefined) {
      inlineStyles.bar2.transform = 'scaleX(' + (valueBuffer || 0) / 100 + ')';
    } else {
      (0, _warning2.default)(false, 'Material-UI: you need to provide a valueBuffer property ' + 'when using the buffer variant of LinearProgress.');
    }
  }

  return _react2.default.createElement(
    'div',
    _extends({ className: className, role: 'progressbar' }, rootProps, other),
    variant === 'buffer' ? _react2.default.createElement('div', { className: dashedClass }) : null,
    _react2.default.createElement('div', { className: bar1ClassName, style: inlineStyles.bar1 }),
    variant === 'determinate' ? null : _react2.default.createElement('div', { className: bar2ClassName, style: inlineStyles.bar2 })
  );
}

LinearProgress.propTypes = {
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
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: _propTypes2.default.number,
  /**
   * The value for the buffer variant.
   * Value between 0 and 100.
   */
  valueBuffer: _propTypes2.default.number,
  /**
   * The variant of progress indicator. Use indeterminate or query
   * when there is no progress value.
   */
  variant: _propTypes2.default.oneOf(['determinate', 'indeterminate', 'buffer', 'query'])
};

LinearProgress.defaultProps = {
  color: 'primary',
  variant: 'indeterminate'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiLinearProgress' })(LinearProgress);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcUHJvZ3Jlc3NcXExpbmVhclByb2dyZXNzLmpzIl0sIm5hbWVzIjpbIlRSQU5TSVRJT05fRFVSQVRJT04iLCJzdHlsZXMiLCJyb290IiwicG9zaXRpb24iLCJvdmVyZmxvdyIsImhlaWdodCIsImNvbG9yUHJpbWFyeSIsImJhY2tncm91bmRDb2xvciIsInRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJsaWdodCIsImNvbG9yU2Vjb25kYXJ5Iiwic2Vjb25kYXJ5IiwiYnVmZmVyIiwicXVlcnkiLCJ0cmFuc2Zvcm0iLCJkYXNoZWQiLCJtYXJnaW5Ub3AiLCJ3aWR0aCIsImFuaW1hdGlvbiIsImRhc2hlZENvbG9yUHJpbWFyeSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiZGFzaGVkQ29sb3JTZWNvbmRhcnkiLCJiYXIiLCJsZWZ0IiwiYm90dG9tIiwidG9wIiwidHJhbnNpdGlvbiIsInRyYW5zZm9ybU9yaWdpbiIsImJhckNvbG9yUHJpbWFyeSIsIm1haW4iLCJiYXJDb2xvclNlY29uZGFyeSIsImJhcjFJbmRldGVybWluYXRlIiwid2lsbENoYW5nZSIsImJhcjJJbmRldGVybWluYXRlIiwiYW5pbWF0aW9uRGVsYXkiLCJiYXIxRGV0ZXJtaW5hdGUiLCJiYXIxQnVmZmVyIiwiekluZGV4IiwiYmFyMkJ1ZmZlciIsInJpZ2h0Iiwib3BhY2l0eSIsIkxpbmVhclByb2dyZXNzIiwicHJvcHMiLCJjbGFzc2VzIiwiY2xhc3NOYW1lUHJvcCIsImNsYXNzTmFtZSIsImNvbG9yIiwidmFsdWUiLCJ2YWx1ZUJ1ZmZlciIsInZhcmlhbnQiLCJvdGhlciIsImRhc2hlZENsYXNzIiwiYmFyMUNsYXNzTmFtZSIsImJhcjJDbGFzc05hbWUiLCJyb290UHJvcHMiLCJpbmxpbmVTdHlsZXMiLCJiYXIxIiwiYmFyMiIsInVuZGVmaW5lZCIsIk1hdGgiLCJyb3VuZCIsInByb3BUeXBlcyIsIm9iamVjdCIsImlz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OztBQUlBbEIsU0FBTyxvQkFBVW1CLE1BakJRO0FBa0J6Qjs7OztBQUlBbEIsZUFBYSxvQkFBVWtCLE1BdEJFO0FBdUJ6Qjs7OztBQUlBakIsV0FBUyxvQkFBVWdCLEtBQVYsQ0FBZ0IsQ0FBQyxhQUFELEVBQWdCLGVBQWhCLEVBQWlDLFFBQWpDLEVBQTJDLE9BQTNDLENBQWhCO0FBM0JnQixDQUEzQjs7QUE4QkF4QixlQUFlMEIsWUFBZixHQUE4QjtBQUM1QnJCLFNBQU8sU0FEcUI7QUFFNUJHLFdBQVM7QUFGbUIsQ0FBOUI7O2tCQUtlLDBCQUFXcEQsTUFBWCxFQUFtQixFQUFFdUUsTUFBTSxtQkFBUixFQUFuQixFQUFrRDNCLGNBQWxELEMiLCJmaWxlIjoiTGluZWFyUHJvZ3Jlc3MuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvcm1jcXVlbi9zbHQtdWkvbWF0ZXJpYWwtdWkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnd2FybmluZyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgeyBsaWdodGVuIH0gZnJvbSAnLi4vc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3InO1xuXG5jb25zdCBUUkFOU0lUSU9OX0RVUkFUSU9OID0gNDsgLy8gNDAwbXNcblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgaGVpZ2h0OiA1LFxuICB9LFxuICBjb2xvclByaW1hcnk6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGxpZ2h0ZW4odGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0LCAwLjYpLFxuICB9LFxuICBjb2xvclNlY29uZGFyeToge1xuICAgIGJhY2tncm91bmRDb2xvcjogbGlnaHRlbih0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5saWdodCwgMC40KSxcbiAgfSxcbiAgYnVmZmVyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICB9LFxuICBxdWVyeToge1xuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgxODBkZWcpJyxcbiAgfSxcbiAgZGFzaGVkOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgbWFyZ2luVG9wOiAwLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgYW5pbWF0aW9uOiAnYnVmZmVyIDNzIGluZmluaXRlIGxpbmVhcicsXG4gIH0sXG4gIGRhc2hlZENvbG9yUHJpbWFyeToge1xuICAgIGJhY2tncm91bmRJbWFnZTogYHJhZGlhbC1ncmFkaWVudCgke2xpZ2h0ZW4odGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0LCAwLjYpfSAwJSwgJHtsaWdodGVuKFxuICAgICAgdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0LFxuICAgICAgMC42LFxuICAgICl9IDE2JSwgdHJhbnNwYXJlbnQgNDIlKWAsXG4gICAgYmFja2dyb3VuZFNpemU6ICcxMHB4IDEwcHgnLFxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJzBweCAtMjNweCcsXG4gIH0sXG4gIGRhc2hlZENvbG9yU2Vjb25kYXJ5OiB7XG4gICAgYmFja2dyb3VuZEltYWdlOiBgcmFkaWFsLWdyYWRpZW50KCR7bGlnaHRlbih0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5saWdodCwgMC40KX0gMCUsICR7bGlnaHRlbihcbiAgICAgIHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmxpZ2h0LFxuICAgICAgMC42LFxuICAgICl9IDE2JSwgdHJhbnNwYXJlbnQgNDIlKWAsXG4gICAgYmFja2dyb3VuZFNpemU6ICcxMHB4IDEwcHgnLFxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJzBweCAtMjNweCcsXG4gIH0sXG4gIGJhcjoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgbGVmdDogMCxcbiAgICBib3R0b206IDAsXG4gICAgdG9wOiAwLFxuICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gMC4ycyBsaW5lYXInLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJ2xlZnQnLFxuICB9LFxuICBiYXJDb2xvclByaW1hcnk6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICB9LFxuICBiYXJDb2xvclNlY29uZGFyeToge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcbiAgfSxcbiAgYmFyMUluZGV0ZXJtaW5hdGU6IHtcbiAgICB3aWR0aDogJ2F1dG8nLFxuICAgIHdpbGxDaGFuZ2U6ICdsZWZ0LCByaWdodCcsXG4gICAgYW5pbWF0aW9uOiAnbXVpLWluZGV0ZXJtaW5hdGUxIDIuMXMgY3ViaWMtYmV6aWVyKDAuNjUsIDAuODE1LCAwLjczNSwgMC4zOTUpIGluZmluaXRlJyxcbiAgfSxcbiAgYmFyMkluZGV0ZXJtaW5hdGU6IHtcbiAgICB3aWR0aDogJ2F1dG8nLFxuICAgIHdpbGxDaGFuZ2U6ICdsZWZ0LCByaWdodCcsXG4gICAgYW5pbWF0aW9uOiAnbXVpLWluZGV0ZXJtaW5hdGUyIDIuMXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBpbmZpbml0ZScsXG4gICAgYW5pbWF0aW9uRGVsYXk6ICcxLjE1cycsXG4gIH0sXG4gIGJhcjFEZXRlcm1pbmF0ZToge1xuICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nLFxuICAgIHRyYW5zaXRpb246IGB0cmFuc2Zvcm0gLiR7VFJBTlNJVElPTl9EVVJBVElPTn1zIGxpbmVhcmAsXG4gIH0sXG4gIGJhcjFCdWZmZXI6IHtcbiAgICB6SW5kZXg6IDEsXG4gICAgdHJhbnNpdGlvbjogYHRyYW5zZm9ybSAuJHtUUkFOU0lUSU9OX0RVUkFUSU9OfXMgbGluZWFyYCxcbiAgfSxcbiAgYmFyMkJ1ZmZlcjoge1xuICAgIHRyYW5zaXRpb246IGB0cmFuc2Zvcm0gLiR7VFJBTlNJVElPTl9EVVJBVElPTn1zIGxpbmVhcmAsXG4gIH0sXG4gIC8vIExlZ2VuZHM6XG4gIC8vIHx8IHJlcHJlc2VudHMgdGhlIHZpZXdwb3J0XG4gIC8vIC0gIHJlcHJlc2VudHMgYSBsaWdodCBiYWNrZ3JvdW5kXG4gIC8vIHggIHJlcHJlc2VudHMgYSBkYXJrIGJhY2tncm91bmRcbiAgJ0BrZXlmcmFtZXMgbXVpLWluZGV0ZXJtaW5hdGUxJzoge1xuICAgIC8vICB8LS0tLS18LS0teC18fC0tLS0tfHwtLS0tLXxcbiAgICAnMCUnOiB7XG4gICAgICBsZWZ0OiAnLTM1JScsXG4gICAgICByaWdodDogJzEwMCUnLFxuICAgIH0sXG4gICAgLy8gIHwtLS0tLXwtLS0tLXx8LS0tLS18fHh4eHgtfFxuICAgICc2MCUnOiB7XG4gICAgICBsZWZ0OiAnMTAwJScsXG4gICAgICByaWdodDogJy05MCUnLFxuICAgIH0sXG4gICAgJzEwMCUnOiB7XG4gICAgICBsZWZ0OiAnMTAwJScsXG4gICAgICByaWdodDogJy05MCUnLFxuICAgIH0sXG4gIH0sXG4gICdAa2V5ZnJhbWVzIG11aS1pbmRldGVybWluYXRlMic6IHtcbiAgICAvLyAgfHh4eHh4fHh4eHh4fHwtLS0tLXx8LS0tLS18XG4gICAgJzAlJzoge1xuICAgICAgbGVmdDogJy0yMDAlJyxcbiAgICAgIHJpZ2h0OiAnMTAwJScsXG4gICAgfSxcbiAgICAvLyAgfC0tLS0tfC0tLS0tfHwtLS0tLXx8LXgtLS0tfFxuICAgICc2MCUnOiB7XG4gICAgICBsZWZ0OiAnMTA3JScsXG4gICAgICByaWdodDogJy04JScsXG4gICAgfSxcbiAgICAnMTAwJSc6IHtcbiAgICAgIGxlZnQ6ICcxMDclJyxcbiAgICAgIHJpZ2h0OiAnLTglJyxcbiAgICB9LFxuICB9LFxuICAnQGtleWZyYW1lcyBidWZmZXInOiB7XG4gICAgJzAlJzoge1xuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJzBweCAtMjNweCcsXG4gICAgfSxcbiAgICAnNTAlJzoge1xuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJzBweCAtMjNweCcsXG4gICAgfSxcbiAgICAnMTAwJSc6IHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICctMjAwcHggLTIzcHgnLFxuICAgIH0sXG4gIH0sXG59KTtcblxuLyoqXG4gKiAjIyBBUklBXG4gKlxuICogSWYgdGhlIHByb2dyZXNzIGJhciBpcyBkZXNjcmliaW5nIHRoZSBsb2FkaW5nIHByb2dyZXNzIG9mIGEgcGFydGljdWxhciByZWdpb24gb2YgYSBwYWdlLFxuICogeW91IHNob3VsZCB1c2UgYGFyaWEtZGVzY3JpYmVkYnlgIHRvIHBvaW50IHRvIHRoZSBwcm9ncmVzcyBiYXIsIGFuZCBzZXQgdGhlIGBhcmlhLWJ1c3lgXG4gKiBhdHRyaWJ1dGUgdG8gYHRydWVgIG9uIHRoYXQgcmVnaW9uIHVudGlsIGl0IGhhcyBmaW5pc2hlZCBsb2FkaW5nLlxuICovXG5mdW5jdGlvbiBMaW5lYXJQcm9ncmVzcyhwcm9wcykge1xuICBjb25zdCB7IGNsYXNzZXMsIGNsYXNzTmFtZTogY2xhc3NOYW1lUHJvcCwgY29sb3IsIHZhbHVlLCB2YWx1ZUJ1ZmZlciwgdmFyaWFudCwgLi4ub3RoZXIgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoXG4gICAgY2xhc3Nlcy5yb290LFxuICAgIHtcbiAgICAgIFtjbGFzc2VzLmNvbG9yUHJpbWFyeV06IGNvbG9yID09PSAncHJpbWFyeScsXG4gICAgICBbY2xhc3Nlcy5jb2xvclNlY29uZGFyeV06IGNvbG9yID09PSAnc2Vjb25kYXJ5JyxcbiAgICAgIFtjbGFzc2VzLmJ1ZmZlcl06IHZhcmlhbnQgPT09ICdidWZmZXInLFxuICAgICAgW2NsYXNzZXMucXVlcnldOiB2YXJpYW50ID09PSAncXVlcnknLFxuICAgIH0sXG4gICAgY2xhc3NOYW1lUHJvcCxcbiAgKTtcbiAgY29uc3QgZGFzaGVkQ2xhc3MgPSBjbGFzc05hbWVzKGNsYXNzZXMuZGFzaGVkLCB7XG4gICAgW2NsYXNzZXMuZGFzaGVkQ29sb3JQcmltYXJ5XTogY29sb3IgPT09ICdwcmltYXJ5JyxcbiAgICBbY2xhc3Nlcy5kYXNoZWRDb2xvclNlY29uZGFyeV06IGNvbG9yID09PSAnc2Vjb25kYXJ5JyxcbiAgfSk7XG4gIGNvbnN0IGJhcjFDbGFzc05hbWUgPSBjbGFzc05hbWVzKGNsYXNzZXMuYmFyLCB7XG4gICAgW2NsYXNzZXMuYmFyQ29sb3JQcmltYXJ5XTogY29sb3IgPT09ICdwcmltYXJ5JyxcbiAgICBbY2xhc3Nlcy5iYXJDb2xvclNlY29uZGFyeV06IGNvbG9yID09PSAnc2Vjb25kYXJ5JyxcbiAgICBbY2xhc3Nlcy5iYXIxSW5kZXRlcm1pbmF0ZV06IHZhcmlhbnQgPT09ICdpbmRldGVybWluYXRlJyB8fCB2YXJpYW50ID09PSAncXVlcnknLFxuICAgIFtjbGFzc2VzLmJhcjFEZXRlcm1pbmF0ZV06IHZhcmlhbnQgPT09ICdkZXRlcm1pbmF0ZScsXG4gICAgW2NsYXNzZXMuYmFyMUJ1ZmZlcl06IHZhcmlhbnQgPT09ICdidWZmZXInLFxuICB9KTtcbiAgY29uc3QgYmFyMkNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoY2xhc3Nlcy5iYXIsIHtcbiAgICBbY2xhc3Nlcy5iYXJDb2xvclByaW1hcnldOiBjb2xvciA9PT0gJ3ByaW1hcnknICYmIHZhcmlhbnQgIT09ICdidWZmZXInLFxuICAgIFtjbGFzc2VzLmNvbG9yUHJpbWFyeV06IGNvbG9yID09PSAncHJpbWFyeScgJiYgdmFyaWFudCA9PT0gJ2J1ZmZlcicsXG4gICAgW2NsYXNzZXMuYmFyQ29sb3JTZWNvbmRhcnldOiBjb2xvciA9PT0gJ3NlY29uZGFyeScgJiYgdmFyaWFudCAhPT0gJ2J1ZmZlcicsXG4gICAgW2NsYXNzZXMuY29sb3JTZWNvbmRhcnldOiBjb2xvciA9PT0gJ3NlY29uZGFyeScgJiYgdmFyaWFudCA9PT0gJ2J1ZmZlcicsXG4gICAgW2NsYXNzZXMuYmFyMkluZGV0ZXJtaW5hdGVdOiB2YXJpYW50ID09PSAnaW5kZXRlcm1pbmF0ZScgfHwgdmFyaWFudCA9PT0gJ3F1ZXJ5JyxcbiAgICBbY2xhc3Nlcy5iYXIyQnVmZmVyXTogdmFyaWFudCA9PT0gJ2J1ZmZlcicsXG4gIH0pO1xuICBjb25zdCByb290UHJvcHMgPSB7fTtcbiAgY29uc3QgaW5saW5lU3R5bGVzID0geyBiYXIxOiB7fSwgYmFyMjoge30gfTtcblxuICBpZiAodmFyaWFudCA9PT0gJ2RldGVybWluYXRlJyB8fCB2YXJpYW50ID09PSAnYnVmZmVyJykge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByb290UHJvcHNbJ2FyaWEtdmFsdWVub3cnXSA9IE1hdGgucm91bmQodmFsdWUpO1xuICAgICAgaW5saW5lU3R5bGVzLmJhcjEudHJhbnNmb3JtID0gYHNjYWxlWCgke3ZhbHVlIC8gMTAwfSlgO1xuICAgIH0gZWxzZSB7XG4gICAgICB3YXJuaW5nKFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgJ01hdGVyaWFsLVVJOiB5b3UgbmVlZCB0byBwcm92aWRlIGEgdmFsdWUgcHJvcGVydHkgJyArXG4gICAgICAgICAgJ3doZW4gdXNpbmcgdGhlIGRldGVybWluYXRlIG9yIGJ1ZmZlciB2YXJpYW50IG9mIExpbmVhclByb2dyZXNzIC4nLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgaWYgKHZhcmlhbnQgPT09ICdidWZmZXInKSB7XG4gICAgaWYgKHZhbHVlQnVmZmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlubGluZVN0eWxlcy5iYXIyLnRyYW5zZm9ybSA9IGBzY2FsZVgoJHsodmFsdWVCdWZmZXIgfHwgMCkgLyAxMDB9KWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdhcm5pbmcoXG4gICAgICAgIGZhbHNlLFxuICAgICAgICAnTWF0ZXJpYWwtVUk6IHlvdSBuZWVkIHRvIHByb3ZpZGUgYSB2YWx1ZUJ1ZmZlciBwcm9wZXJ0eSAnICtcbiAgICAgICAgICAnd2hlbiB1c2luZyB0aGUgYnVmZmVyIHZhcmlhbnQgb2YgTGluZWFyUHJvZ3Jlc3MuJyxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSByb2xlPVwicHJvZ3Jlc3NiYXJcIiB7Li4ucm9vdFByb3BzfSB7Li4ub3RoZXJ9PlxuICAgICAge3ZhcmlhbnQgPT09ICdidWZmZXInID8gPGRpdiBjbGFzc05hbWU9e2Rhc2hlZENsYXNzfSAvPiA6IG51bGx9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YmFyMUNsYXNzTmFtZX0gc3R5bGU9e2lubGluZVN0eWxlcy5iYXIxfSAvPlxuICAgICAge3ZhcmlhbnQgPT09ICdkZXRlcm1pbmF0ZScgPyBudWxsIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YmFyMkNsYXNzTmFtZX0gc3R5bGU9e2lubGluZVN0eWxlcy5iYXIyfSAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuTGluZWFyUHJvZ3Jlc3MucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVXNlZnVsIHRvIGV4dGVuZCB0aGUgc3R5bGUgYXBwbGllZCB0byBjb21wb25lbnRzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBjb21wb25lbnQuIEl0IHN1cHBvcnRzIHRob3NlIHRoZW1lIGNvbG9ycyB0aGF0IG1ha2Ugc2Vuc2UgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ3ByaW1hcnknLCAnc2Vjb25kYXJ5J10pLFxuICAvKipcbiAgICogVGhlIHZhbHVlIG9mIHRoZSBwcm9ncmVzcyBpbmRpY2F0b3IgZm9yIHRoZSBkZXRlcm1pbmF0ZSBhbmQgYnVmZmVyIHZhcmlhbnRzLlxuICAgKiBWYWx1ZSBiZXR3ZWVuIDAgYW5kIDEwMC5cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogVGhlIHZhbHVlIGZvciB0aGUgYnVmZmVyIHZhcmlhbnQuXG4gICAqIFZhbHVlIGJldHdlZW4gMCBhbmQgMTAwLlxuICAgKi9cbiAgdmFsdWVCdWZmZXI6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBUaGUgdmFyaWFudCBvZiBwcm9ncmVzcyBpbmRpY2F0b3IuIFVzZSBpbmRldGVybWluYXRlIG9yIHF1ZXJ5XG4gICAqIHdoZW4gdGhlcmUgaXMgbm8gcHJvZ3Jlc3MgdmFsdWUuXG4gICAqL1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydkZXRlcm1pbmF0ZScsICdpbmRldGVybWluYXRlJywgJ2J1ZmZlcicsICdxdWVyeSddKSxcbn07XG5cbkxpbmVhclByb2dyZXNzLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29sb3I6ICdwcmltYXJ5JyxcbiAgdmFyaWFudDogJ2luZGV0ZXJtaW5hdGUnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHsgbmFtZTogJ011aUxpbmVhclByb2dyZXNzJyB9KShMaW5lYXJQcm9ncmVzcyk7XG4iXX0=

/***/ })

});