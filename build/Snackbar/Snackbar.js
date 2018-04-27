'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

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

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends8 = require('babel-runtime/helpers/extends');

var _extends9 = _interopRequireDefault(_extends8);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactEventListener = require('react-event-listener');

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _transitions = require('../styles/transitions');

var _ClickAwayListener = require('../utils/ClickAwayListener');

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

var _helpers = require('../utils/helpers');

var _Slide = require('../transitions/Slide');

var _Slide2 = _interopRequireDefault(_Slide);

var _SnackbarContent = require('./SnackbarContent');

var _SnackbarContent2 = _interopRequireDefault(_SnackbarContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  var gutter = theme.spacing.unit * 3;
  var top = { top: 0 };
  var bottom = { bottom: 0 };
  var right = { justifyContent: 'flex-end' };
  var left = { justifyContent: 'flex-start' };
  var topSpace = { top: gutter };
  var bottomSpace = { bottom: gutter };
  var rightSpace = { right: gutter };
  var leftSpace = { left: gutter };
  var center = {
    left: '50%',
    right: 'auto',
    transform: 'translateX(-50%)'
  };

  return {
    root: {
      zIndex: theme.zIndex.snackbar,
      position: 'fixed',
      display: 'flex',
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center'
    },
    anchorOriginTopCenter: (0, _extends9.default)({}, top, (0, _defineProperty3.default)({}, theme.breakpoints.up('md'), (0, _extends9.default)({}, center))),
    anchorOriginBottomCenter: (0, _extends9.default)({}, bottom, (0, _defineProperty3.default)({}, theme.breakpoints.up('md'), (0, _extends9.default)({}, center))),
    anchorOriginTopRight: (0, _extends9.default)({}, top, right, (0, _defineProperty3.default)({}, theme.breakpoints.up('md'), (0, _extends9.default)({
      left: 'auto'
    }, topSpace, rightSpace))),
    anchorOriginBottomRight: (0, _extends9.default)({}, bottom, right, (0, _defineProperty3.default)({}, theme.breakpoints.up('md'), (0, _extends9.default)({
      left: 'auto'
    }, bottomSpace, rightSpace))),
    anchorOriginTopLeft: (0, _extends9.default)({}, top, left, (0, _defineProperty3.default)({}, theme.breakpoints.up('md'), (0, _extends9.default)({
      right: 'auto'
    }, topSpace, leftSpace))),
    anchorOriginBottomLeft: (0, _extends9.default)({}, bottom, left, (0, _defineProperty3.default)({}, theme.breakpoints.up('md'), (0, _extends9.default)({
      right: 'auto'
    }, bottomSpace, leftSpace)))
  };
};

var Snackbar = function (_React$Component) {
  (0, _inherits3.default)(Snackbar, _React$Component);

  function Snackbar() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Snackbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Snackbar.__proto__ || (0, _getPrototypeOf2.default)(Snackbar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.timerAutoHide = null, _this.handleMouseEnter = function (event) {
      if (_this.props.onMouseEnter) {
        _this.props.onMouseEnter(event);
      }
      _this.handlePause();
    }, _this.handleMouseLeave = function (event) {
      if (_this.props.onMouseLeave) {
        _this.props.onMouseLeave(event);
      }
      _this.handleResume();
    }, _this.handleClickAway = function (event) {
      if (_this.props.onClose) {
        _this.props.onClose(event, 'clickaway');
      }
    }, _this.handlePause = function () {
      clearTimeout(_this.timerAutoHide);
    }, _this.handleResume = function () {
      if (_this.props.autoHideDuration != null) {
        if (_this.props.resumeHideDuration !== undefined) {
          _this.setAutoHideTimer(_this.props.resumeHideDuration);
          return;
        }
        _this.setAutoHideTimer((_this.props.autoHideDuration || 0) * 0.5);
      }
    }, _this.handleExited = function () {
      _this.setState({ exited: true });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Snackbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.open) {
        this.setAutoHideTimer();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.open !== this.props.open) {
        if (this.props.open) {
          this.setAutoHideTimer();
        } else {
          clearTimeout(this.timerAutoHide);
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timerAutoHide);
    }

    // Timer that controls delay before snackbar auto hides

  }, {
    key: 'setAutoHideTimer',
    value: function setAutoHideTimer() {
      var _this2 = this;

      var autoHideDuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (!this.props.onClose || this.props.autoHideDuration == null) {
        return;
      }

      clearTimeout(this.timerAutoHide);
      this.timerAutoHide = setTimeout(function () {
        if (!_this2.props.onClose || _this2.props.autoHideDuration == null) {
          return;
        }

        _this2.props.onClose(null, 'timeout');
      }, autoHideDuration || this.props.autoHideDuration || 0);
    }

    // Pause the timer when the user is interacting with the Snackbar
    // or when the user hide the window.


    // Restart the timer when the user is no longer interacting with the Snackbar
    // or when the window is shown back.

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          action = _props.action,
          _props$anchorOrigin = _props.anchorOrigin,
          vertical = _props$anchorOrigin.vertical,
          horizontal = _props$anchorOrigin.horizontal,
          autoHideDuration = _props.autoHideDuration,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          disableWindowBlurListener = _props.disableWindowBlurListener,
          message = _props.message,
          onClose = _props.onClose,
          onEnter = _props.onEnter,
          onEntered = _props.onEntered,
          onEntering = _props.onEntering,
          onExit = _props.onExit,
          onExited = _props.onExited,
          onExiting = _props.onExiting,
          onMouseEnter = _props.onMouseEnter,
          onMouseLeave = _props.onMouseLeave,
          open = _props.open,
          resumeHideDuration = _props.resumeHideDuration,
          SnackbarContentProps = _props.SnackbarContentProps,
          TransitionProp = _props.transition,
          transitionDuration = _props.transitionDuration,
          other = (0, _objectWithoutProperties3.default)(_props, ['action', 'anchorOrigin', 'autoHideDuration', 'children', 'classes', 'className', 'disableWindowBlurListener', 'message', 'onClose', 'onEnter', 'onEntered', 'onEntering', 'onExit', 'onExited', 'onExiting', 'onMouseEnter', 'onMouseLeave', 'open', 'resumeHideDuration', 'SnackbarContentProps', 'transition', 'transitionDuration']);

      // So we only render active snackbars.

      if (!open && this.state.exited) {
        return null;
      }

      var transitionProps = {};

      // The provided transition might not support the direction property.
      if (TransitionProp === _Slide2.default) {
        transitionProps.direction = vertical === 'top' ? 'down' : 'up';
      }

      return _react2.default.createElement(
        _ClickAwayListener2.default,
        { onClickAway: this.handleClickAway },
        _react2.default.createElement(
          'div',
          (0, _extends9.default)({
            className: (0, _classnames2.default)(classes.root, classes['anchorOrigin' + (0, _helpers.capitalize)(vertical) + (0, _helpers.capitalize)(horizontal)], className),
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave
          }, other),
          _react2.default.createElement(_reactEventListener2.default, {
            target: 'window',
            onFocus: disableWindowBlurListener ? undefined : this.handleResume,
            onBlur: disableWindowBlurListener ? undefined : this.handlePause
          }),
          _react2.default.createElement(
            TransitionProp,
            (0, _extends9.default)({
              appear: true,
              'in': open,
              onEnter: onEnter,
              onEntered: onEntered,
              onEntering: onEntering,
              onExit: onExit,
              onExited: (0, _helpers.createChainedFunction)(this.handleExited, onExited),
              onExiting: onExiting,
              timeout: transitionDuration
            }, transitionProps),
            children || _react2.default.createElement(_SnackbarContent2.default, (0, _extends9.default)({ message: message, action: action }, SnackbarContentProps))
          )
        )
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (typeof prevState.exited === 'undefined') {
        return {
          exited: !nextProps.open
        };
      }

      if (nextProps.open) {
        return {
          exited: false
        };
      }

      return null;
    }
  }]);
  return Snackbar;
}(_react2.default.Component);

Snackbar.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The action to display.
   */
  action: _propTypes2.default.node,
  /**
   * The anchor of the `Snackbar`.
   */
  anchorOrigin: _propTypes2.default.shape({
    horizontal: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.oneOf(['left', 'center', 'right'])]),
    vertical: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.oneOf(['top', 'center', 'bottom'])])
  }),
  /**
   * The number of milliseconds to wait before automatically calling the
   * `onClose` function. `onClose` should then set the state of the `open`
   * prop to hide the Snackbar. This behavior is disabled by default with
   * the `null` value.
   */
  autoHideDuration: _propTypes2.default.number,
  /**
   * If you wish the take control over the children of the component you can use this property.
   * When used, you replace the `SnackbarContent` component with the children.
   */
  children: _propTypes2.default.element,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * If `true`, the `autoHideDuration` timer will expire even if the window is not focused.
   */
  disableWindowBlurListener: _propTypes2.default.bool,
  /**
   * When displaying multiple consecutive Snackbars from a parent rendering a single
   * <Snackbar/>, add the key property to ensure independent treatment of each message.
   * e.g. <Snackbar key={message} />, otherwise, the message may update-in-place and
   * features such as autoHideDuration may be canceled.
   */
  key: _propTypes2.default.any,
  /**
   * The message to display.
   */
  message: _propTypes2.default.node,
  /**
   * Callback fired when the component requests to be closed.
   * Typically `onClose` is used to set state in the parent component,
   * which is used to control the `Snackbar` `open` prop.
   * The `reason` parameter can optionally be used to control the response to `onClose`,
   * for example ignoring `clickaway`.
   *
   * @param {object} event The event source of the callback
   * @param {string} reason Can be:`"timeout"` (`autoHideDuration` expired) or: `"clickaway"`
   */
  onClose: _propTypes2.default.func,
  /**
   * Callback fired before the transition is entering.
   */
  onEnter: _propTypes2.default.func,
  /**
   * Callback fired when the transition has entered.
   */
  onEntered: _propTypes2.default.func,
  /**
   * Callback fired when the transition is entering.
   */
  onEntering: _propTypes2.default.func,
  /**
   * Callback fired before the transition is exiting.
   */
  onExit: _propTypes2.default.func,
  /**
   * Callback fired when the transition has exited.
   */
  onExited: _propTypes2.default.func,
  /**
   * Callback fired when the transition is exiting.
   */
  onExiting: _propTypes2.default.func,
  /**
   * @ignore
   */
  onMouseEnter: _propTypes2.default.func,
  /**
   * @ignore
   */
  onMouseLeave: _propTypes2.default.func,
  /**
   * If true, `Snackbar` is open.
   */
  open: _propTypes2.default.bool,
  /**
   * The number of milliseconds to wait before dismissing after user interaction.
   * If `autoHideDuration` property isn't specified, it does nothing.
   * If `autoHideDuration` property is specified but `resumeHideDuration` isn't,
   * we default to `autoHideDuration / 2` ms.
   */
  resumeHideDuration: _propTypes2.default.number,
  /**
   * Properties applied to the `SnackbarContent` element.
   */
  SnackbarContentProps: _propTypes2.default.object,
  /**
   * Transition component.
   */
  transition: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({ enter: _propTypes2.default.number, exit: _propTypes2.default.number })])
} : {};

Snackbar.defaultProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'center'
  },
  disableWindowBlurListener: false,
  transition: _Slide2.default,
  transitionDuration: {
    enter: _transitions.duration.enteringScreen,
    exit: _transitions.duration.leavingScreen
  }
};

exports.default = (0, _withStyles2.default)(styles, { flip: false, name: 'MuiSnackbar' })((0, _reactLifecyclesCompat.polyfill)(Snackbar));