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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _colorManipulator = require('../styles/colorManipulator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      other = (0, _objectWithoutProperties3.default)(props, ['classes', 'className', 'color', 'value', 'valueBuffer', 'variant']);


  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.colorPrimary, color === 'primary'), (0, _defineProperty3.default)(_classNames, classes.colorSecondary, color === 'secondary'), (0, _defineProperty3.default)(_classNames, classes.buffer, variant === 'buffer'), (0, _defineProperty3.default)(_classNames, classes.query, variant === 'query'), _classNames), classNameProp);
  var dashedClass = (0, _classnames2.default)(classes.dashed, (_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, classes.dashedColorPrimary, color === 'primary'), (0, _defineProperty3.default)(_classNames2, classes.dashedColorSecondary, color === 'secondary'), _classNames2));
  var bar1ClassName = (0, _classnames2.default)(classes.bar, (_classNames3 = {}, (0, _defineProperty3.default)(_classNames3, classes.barColorPrimary, color === 'primary'), (0, _defineProperty3.default)(_classNames3, classes.barColorSecondary, color === 'secondary'), (0, _defineProperty3.default)(_classNames3, classes.bar1Indeterminate, variant === 'indeterminate' || variant === 'query'), (0, _defineProperty3.default)(_classNames3, classes.bar1Determinate, variant === 'determinate'), (0, _defineProperty3.default)(_classNames3, classes.bar1Buffer, variant === 'buffer'), _classNames3));
  var bar2ClassName = (0, _classnames2.default)(classes.bar, (_classNames4 = {}, (0, _defineProperty3.default)(_classNames4, classes.barColorPrimary, color === 'primary' && variant !== 'buffer'), (0, _defineProperty3.default)(_classNames4, classes.colorPrimary, color === 'primary' && variant === 'buffer'), (0, _defineProperty3.default)(_classNames4, classes.barColorSecondary, color === 'secondary' && variant !== 'buffer'), (0, _defineProperty3.default)(_classNames4, classes.colorSecondary, color === 'secondary' && variant === 'buffer'), (0, _defineProperty3.default)(_classNames4, classes.bar2Indeterminate, variant === 'indeterminate' || variant === 'query'), (0, _defineProperty3.default)(_classNames4, classes.bar2Buffer, variant === 'buffer'), _classNames4));
  var rootProps = {};
  var inlineStyles = { bar1: {}, bar2: {} };

  if (variant === 'determinate' || variant === 'buffer') {
    if (value !== undefined) {
      rootProps['aria-valuenow'] = Math.round(value);
      inlineStyles.bar1.transform = 'scaleX(' + value / 100 + ')';
    } else {
      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI: you need to provide a value property ' + 'when using the determinate or buffer variant of LinearProgress .') : void 0;
    }
  }
  if (variant === 'buffer') {
    if (valueBuffer !== undefined) {
      inlineStyles.bar2.transform = 'scaleX(' + (valueBuffer || 0) / 100 + ')';
    } else {
      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI: you need to provide a valueBuffer property ' + 'when using the buffer variant of LinearProgress.') : void 0;
    }
  }

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: className, role: 'progressbar' }, rootProps, other),
    variant === 'buffer' ? _react2.default.createElement('div', { className: dashedClass }) : null,
    _react2.default.createElement('div', { className: bar1ClassName, style: inlineStyles.bar1 }),
    variant === 'determinate' ? null : _react2.default.createElement('div', { className: bar2ClassName, style: inlineStyles.bar2 })
  );
}

LinearProgress.propTypes = process.env.NODE_ENV !== "production" ? {
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
} : {};

LinearProgress.defaultProps = {
  color: 'primary',
  variant: 'indeterminate'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiLinearProgress' })(LinearProgress);