webpackJsonpmaterial_ui([13],{

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(7);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactEventListener = __webpack_require__(59);

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _debounce = __webpack_require__(101);

var _debounce2 = _interopRequireDefault(_debounce);

var _warning = __webpack_require__(3);

var _warning2 = _interopRequireDefault(_warning);

var _classnames = __webpack_require__(23);

var _classnames2 = _interopRequireDefault(_classnames);

var _Manager = __webpack_require__(428);

var _Manager2 = _interopRequireDefault(_Manager);

var _Popper = __webpack_require__(429);

var _Popper2 = _interopRequireDefault(_Popper);

var _Target = __webpack_require__(431);

var _Target2 = _interopRequireDefault(_Target);

var _helpers = __webpack_require__(97);

var _RootRef = __webpack_require__(392);

var _RootRef2 = _interopRequireDefault(_RootRef);

var _Portal = __webpack_require__(116);

var _Portal2 = _interopRequireDefault(_Portal);

var _common = __webpack_require__(62);

var _common2 = _interopRequireDefault(_common);

var _withStyles = __webpack_require__(18);

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* eslint-disable react/no-multi-comp, no-underscore-dangle */

var styles = exports.styles = function styles(theme) {
  return {
    // Will be gone once we drop React 15.x support.
    root: {
      display: 'inline-block',
      flexDirection: 'inherit' // Makes the wrapper more transparent.
    },
    popper: {
      zIndex: theme.zIndex.tooltip
    },
    popperClose: {
      pointerEvents: 'none'
    },
    tooltip: _defineProperty({
      backgroundColor: theme.palette.grey[700],
      borderRadius: 2,
      color: _common2.default.white,
      fontFamily: theme.typography.fontFamily,
      opacity: 0,
      transform: 'scale(0)',
      transition: theme.transitions.create(['opacity', 'transform'], {
        duration: theme.transitions.duration.shortest
      }),
      minHeight: 0,
      padding: theme.spacing.unit,
      fontSize: theme.typography.pxToRem(14),
      lineHeight: theme.typography.round(16 / 14) + 'em'
    }, theme.breakpoints.up('sm'), {
      padding: theme.spacing.unit / 2 + 'px ' + theme.spacing.unit + 'px',
      fontSize: theme.typography.pxToRem(10),
      lineHeight: theme.typography.round(14 / 10) + 'em'
    }),
    tooltipPlacementLeft: _defineProperty({
      transformOrigin: 'right center',
      margin: '0 ' + theme.spacing.unit * 3 + 'px'
    }, theme.breakpoints.up('sm'), {
      margin: '0 14px'
    }),
    tooltipPlacementRight: _defineProperty({
      transformOrigin: 'left center',
      margin: '0 ' + theme.spacing.unit * 3 + 'px'
    }, theme.breakpoints.up('sm'), {
      margin: '0 14px'
    }),
    tooltipPlacementTop: _defineProperty({
      transformOrigin: 'center bottom',
      margin: theme.spacing.unit * 3 + 'px 0'
    }, theme.breakpoints.up('sm'), {
      margin: '14px 0'
    }),
    tooltipPlacementBottom: _defineProperty({
      transformOrigin: 'center top',
      margin: theme.spacing.unit * 3 + 'px 0'
    }, theme.breakpoints.up('sm'), {
      margin: '14px 0'
    }),
    tooltipOpen: {
      opacity: 0.9,
      transform: 'scale(1)'
    }
  };
};

function flipPlacement(placement) {
  switch (placement) {
    case 'bottom-end':
      return 'bottom-start';
    case 'bottom-start':
      return 'bottom-end';
    case 'top-end':
      return 'top-start';
    case 'top-start':
      return 'top-end';
    default:
      return placement;
  }
}

var Tooltip = function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip(props, context) {
    _classCallCheck(this, Tooltip);

    var _this = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props, context));

    _this.state = {};
    _this.enterTimer = null;
    _this.leaveTimer = null;
    _this.touchTimer = null;
    _this.isControlled = null;
    _this.popper = null;
    _this.children = null;
    _this.ignoreNonTouchEvents = false;
    _this.handleResize = (0, _debounce2.default)(function () {
      if (_this.popper) {
        _this.popper._popper.scheduleUpdate();
      }
    }, 166);

    _this.handleEnter = function (event) {
      var _this$props = _this.props,
          children = _this$props.children,
          enterDelay = _this$props.enterDelay;

      var childrenProps = children.props;

      if (event.type === 'focus' && childrenProps.onFocus) {
        childrenProps.onFocus(event);
      }

      if (event.type === 'mouseover' && childrenProps.onMouseOver) {
        childrenProps.onMouseOver(event);
      }

      if (_this.ignoreNonTouchEvents && event.type !== 'touchstart') {
        return;
      }

      clearTimeout(_this.enterTimer);
      clearTimeout(_this.leaveTimer);
      if (enterDelay) {
        event.persist();
        _this.enterTimer = setTimeout(function () {
          _this.handleOpen(event);
        }, enterDelay);
      } else {
        _this.handleOpen(event);
      }
    };

    _this.handleOpen = function (event) {
      if (!_this.isControlled) {
        _this.setState({ open: true });
      }

      if (_this.props.onOpen) {
        _this.props.onOpen(event, true);
      }
    };

    _this.handleLeave = function (event) {
      var _this$props2 = _this.props,
          children = _this$props2.children,
          leaveDelay = _this$props2.leaveDelay;

      var childrenProps = children.props;

      if (event.type === 'blur' && childrenProps.onBlur) {
        childrenProps.onBlur(event);
      }

      if (event.type === 'mouseleave' && childrenProps.onMouseLeave) {
        childrenProps.onMouseLeave(event);
      }

      clearTimeout(_this.enterTimer);
      clearTimeout(_this.leaveTimer);
      if (leaveDelay) {
        event.persist();
        _this.leaveTimer = setTimeout(function () {
          _this.handleClose(event);
        }, leaveDelay);
      } else {
        _this.handleClose(event);
      }
    };

    _this.handleClose = function (event) {
      _this.ignoreNonTouchEvents = false;

      if (!_this.isControlled) {
        _this.setState({ open: false });
      }

      if (_this.props.onClose) {
        _this.props.onClose(event, false);
      }
    };

    _this.handleTouchStart = function (event) {
      _this.ignoreNonTouchEvents = true;
      var _this$props3 = _this.props,
          children = _this$props3.children,
          enterTouchDelay = _this$props3.enterTouchDelay;

      var childrenProps = children.props;

      if (childrenProps.onTouchStart) {
        childrenProps.onTouchStart(event);
      }

      clearTimeout(_this.touchTimer);
      event.persist();
      _this.touchTimer = setTimeout(function () {
        _this.handleEnter(event);
      }, enterTouchDelay);
    };

    _this.handleTouchEnd = function (event) {
      var _this$props4 = _this.props,
          children = _this$props4.children,
          leaveTouchDelay = _this$props4.leaveTouchDelay;

      var childrenProps = children.props;

      if (childrenProps.onTouchEnd) {
        childrenProps.onTouchEnd(event);
      }

      clearTimeout(_this.touchTimer);
      clearTimeout(_this.leaveTimer);
      event.persist();
      _this.leaveTimer = setTimeout(function () {
        _this.handleClose(event);
      }, leaveTouchDelay);
    };

    _this.isControlled = props.open != null;
    if (!_this.isControlled) {
      // not controlled, use internal state
      _this.state.open = false;
    }
    return _this;
  }

  _createClass(Tooltip, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _warning2.default)(!this.children || !this.children.disabled || !this.children.tagName.toLowerCase() === 'button', ['Material-UI: you are providing a disabled `button` child to the Tooltip component.', 'A disabled element does not fire events.', "Tooltip needs to listen to the child element's events to display the title.", '', 'Place a `div` container on top of the element.'].join('\n'));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.enterTimer);
      clearTimeout(this.leaveTimer);
      this.handleResize.cancel();
    } // Corresponds to 10 frames at 60 Hz.

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          disableFocusListener = _props.disableFocusListener,
          disableHoverListener = _props.disableHoverListener,
          disableTouchListener = _props.disableTouchListener,
          enterDelay = _props.enterDelay,
          enterTouchDelay = _props.enterTouchDelay,
          id = _props.id,
          leaveDelay = _props.leaveDelay,
          leaveTouchDelay = _props.leaveTouchDelay,
          onClose = _props.onClose,
          onOpen = _props.onOpen,
          openProp = _props.open,
          placementProp = _props.placement,
          _props$PopperProps = _props.PopperProps;
      _props$PopperProps = _props$PopperProps === undefined ? {} : _props$PopperProps;

      var PopperClassName = _props$PopperProps.className,
          PopperProps = _objectWithoutProperties(_props$PopperProps, ['className']),
          theme = _props.theme,
          title = _props.title,
          other = _objectWithoutProperties(_props, ['children', 'classes', 'className', 'disableFocusListener', 'disableHoverListener', 'disableTouchListener', 'enterDelay', 'enterTouchDelay', 'id', 'leaveDelay', 'leaveTouchDelay', 'onClose', 'onOpen', 'open', 'placement', 'PopperProps', 'theme', 'title']);

      var placement = theme.direction === 'rtl' ? flipPlacement(placementProp) : placementProp;
      var open = this.isControlled ? openProp : this.state.open;
      var childrenProps = {
        'aria-describedby': id,
        title: typeof title === 'string' && !open ? title : ''
      };

      // There is no point at displaying an empty tooltip.
      if (title === '') {
        open = false;
      }

      if (!disableTouchListener) {
        childrenProps.onTouchStart = this.handleTouchStart;
        childrenProps.onTouchEnd = this.handleTouchEnd;
      }

      if (!disableHoverListener) {
        childrenProps.onMouseOver = this.handleEnter;
        childrenProps.onMouseLeave = this.handleLeave;
      }

      if (!disableFocusListener) {
        childrenProps.onFocus = this.handleEnter;
        childrenProps.onBlur = this.handleLeave;
      }

      (0, _warning2.default)(!children.props.title, ['Material-UI: you have been providing a `title` property to the child of <Tooltip />.', 'Remove this title property `' + children.props.title + '` or the Tooltip component.'].join('\n'));

      return _react2.default.createElement(
        _Manager2.default,
        _extends({
          tag: _reactDom2.default.createPortal ? false : 'div',
          className: (0, _classnames2.default)(classes.root, className)
        }, other),
        _react2.default.createElement(_reactEventListener2.default, { target: 'window', onResize: this.handleResize }),
        _react2.default.createElement(
          _Target2.default,
          null,
          function (_ref) {
            var targetProps = _ref.targetProps;
            return _react2.default.createElement(
              _RootRef2.default,
              {
                rootRef: function rootRef(node) {
                  _this2.children = node;
                  targetProps.ref(_this2.children);
                }
              },
              _react2.default.cloneElement(children, childrenProps)
            );
          }
        ),
        _react2.default.createElement(
          _Portal2.default,
          null,
          _react2.default.createElement(
            _Popper2.default,
            _extends({
              placement: placement,
              eventsEnabled: open,
              className: (0, _classnames2.default)(classes.popper, _defineProperty({}, classes.popperClose, !open), PopperClassName),
              ref: function ref(node) {
                _this2.popper = node;
              }
            }, PopperProps),
            function (_ref2) {
              var popperProps = _ref2.popperProps,
                  restProps = _ref2.restProps;

              var actualPlacement = (popperProps['data-placement'] || placement).split('-')[0];
              return _react2.default.createElement(
                'div',
                _extends({}, popperProps, restProps, {
                  style: _extends({}, popperProps.style, {
                    top: popperProps.style.top || 0,
                    left: popperProps.style.left || 0
                  }, restProps.style)
                }),
                _react2.default.createElement(
                  'div',
                  {
                    id: id,
                    role: 'tooltip',
                    'aria-hidden': !open,
                    className: (0, _classnames2.default)(classes.tooltip, _defineProperty({}, classes.tooltipOpen, open), classes['tooltipPlacement' + (0, _helpers.capitalize)(actualPlacement)])
                  },
                  title
                )
              );
            }
          )
        )
      );
    }
  }]);

  return Tooltip;
}(_react2.default.Component);

Tooltip.propTypes = {
  /**
   * Tooltip reference element.
   */
  children: _propTypes2.default.element.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * Do not respond to focus events.
   */
  disableFocusListener: _propTypes2.default.bool,
  /**
   * Do not respond to hover events.
   */
  disableHoverListener: _propTypes2.default.bool,
  /**
   * Do not respond to long press touch events.
   */
  disableTouchListener: _propTypes2.default.bool,
  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This property won't impact the enter touch delay (`enterTouchDelay`).
   */
  enterDelay: _propTypes2.default.number,
  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   */
  enterTouchDelay: _propTypes2.default.number,
  /**
   * The relationship between the tooltip and the wrapper component is not clear from the DOM.
   * By providing this property, we can use aria-describedby to solve the accessibility issue.
   */
  id: _propTypes2.default.string,
  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This property won't impact the leave touch delay (`leaveTouchDelay`).
   */
  leaveDelay: _propTypes2.default.number,
  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   */
  leaveTouchDelay: _propTypes2.default.number,
  /**
   * Callback fired when the tooltip requests to be closed.
   *
   * @param {object} event The event source of the callback
   */
  onClose: _propTypes2.default.func,
  /**
   * Callback fired when the tooltip requests to be open.
   *
   * @param {object} event The event source of the callback
   */
  onOpen: _propTypes2.default.func,
  /**
   * If `true`, the tooltip is shown.
   */
  open: _propTypes2.default.bool,
  /**
   * Tooltip placement
   */
  placement: _propTypes2.default.oneOf(['bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),
  /**
   * Properties applied to the `Popper` element.
   */
  PopperProps: _propTypes2.default.object,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired,
  /**
   * Tooltip title. Zero-length titles string are never displayed.
   */
  title: _propTypes2.default.node.isRequired
};

Tooltip.defaultProps = {
  disableFocusListener: false,
  disableHoverListener: false,
  disableTouchListener: false,
  enterDelay: 0,
  enterTouchDelay: 1000,
  leaveDelay: 0,
  leaveTouchDelay: 1500,
  placement: 'bottom'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiTooltip', withTheme: true })(Tooltip);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcVG9vbHRpcFxcVG9vbHRpcC5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJyb290IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJwb3BwZXIiLCJ6SW5kZXgiLCJ0aGVtZSIsInRvb2x0aXAiLCJwb3BwZXJDbG9zZSIsInBvaW50ZXJFdmVudHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiZ3JleSIsImJvcmRlclJhZGl1cyIsImNvbG9yIiwid2hpdGUiLCJmb250RmFtaWx5IiwidHlwb2dyYXBoeSIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJkdXJhdGlvbiIsInNob3J0ZXN0IiwibWluSGVpZ2h0IiwicGFkZGluZyIsInNwYWNpbmciLCJ1bml0IiwiZm9udFNpemUiLCJweFRvUmVtIiwibGluZUhlaWdodCIsInJvdW5kIiwiYnJlYWtwb2ludHMiLCJ1cCIsInRvb2x0aXBQbGFjZW1lbnRMZWZ0IiwidHJhbnNmb3JtT3JpZ2luIiwibWFyZ2luIiwidG9vbHRpcFBsYWNlbWVudFJpZ2h0IiwidG9vbHRpcFBsYWNlbWVudFRvcCIsInRvb2x0aXBQbGFjZW1lbnRCb3R0b20iLCJ0b29sdGlwT3BlbiIsImZsaXBQbGFjZW1lbnQiLCJwbGFjZW1lbnQiLCJUb29sdGlwIiwicHJvcHMiLCJjb250ZXh0Iiwic3RhdGUiLCJlbnRlclRpbWVyIiwibGVhdmVUaW1lciIsInRvdWNoVGltZXIiLCJpc0NvbnRyb2xsZWQiLCJjaGlsZHJlbiIsImlnbm9yZU5vblRvdWNoRXZlbnRzIiwiaGFuZGxlUmVzaXplIiwiX3BvcHBlciIsInNjaGVkdWxlVXBkYXRlIiwiaGFuZGxlRW50ZXIiLCJlbnRlckRlbGF5IiwiY2hpbGRyZW5Qcm9wcyIsImV2ZW50IiwidHlwZSIsIm9uRm9jdXMiLCJvbk1vdXNlT3ZlciIsImNsZWFyVGltZW91dCIsInBlcnNpc3QiLCJzZXRUaW1lb3V0IiwiaGFuZGxlT3BlbiIsInNldFN0YXRlIiwib3BlbiIsIm9uT3BlbiIsImhhbmRsZUxlYXZlIiwibGVhdmVEZWxheSIsIm9uQmx1ciIsIm9uTW91c2VMZWF2ZSIsImhhbmRsZUNsb3NlIiwib25DbG9zZSIsImhhbmRsZVRvdWNoU3RhcnQiLCJlbnRlclRvdWNoRGVsYXkiLCJvblRvdWNoU3RhcnQiLCJoYW5kbGVUb3VjaEVuZCIsImxlYXZlVG91Y2hEZWxheSIsIm9uVG91Y2hFbmQiLCJkaXNhYmxlZCIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImpvaW4iLCJjYW5jZWwiLCJjbGFzc2VzIiwiY2xhc3NOYW1lIiwiZGlzYWJsZUZvY3VzTGlzdGVuZXIiLCJkaXNhYmxlSG92ZXJMaXN0ZW5lciIsImRpc2FibGVUb3VjaExpc3RlbmVyIiwiaWQiLCJvcGVuUHJvcCIsInBsYWNlbWVudFByb3AiLCJQb3BwZXJQcm9wcyIsIlBvcHBlckNsYXNzTmFtZSIsInRpdGxlIiwib3RoZXIiLCJkaXJlY3Rpb24iLCJjcmVhdGVQb3J0YWwiLCJ0YXJnZXRQcm9wcyIsIm5vZGUiLCJyZWYiLCJjbG9uZUVsZW1lbnQiLCJwb3BwZXJQcm9wcyIsInJlc3RQcm9wcyIsImFjdHVhbFBsYWNlbWVudCIsInNwbGl0Iiwic3R5bGUiLCJ0b3AiLCJsZWZ0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiZWxlbWVudCIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJzdHJpbmciLCJib29sIiwibnVtYmVyIiwiZnVuYyIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwibmFtZSIsIndpdGhUaGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztrTkFoQkE7O0FBa0JPLElBQU1BLDBCQUFTLFNBQVRBLE1BQVM7QUFBQSxTQUFVO0FB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QUFLckJvQixtQkFBaUIsSUFMSTtBQU1yQk4sY0FBWSxDQU5TO0FBT3JCUyxtQkFBaUIsSUFQSTtBQVFyQnRDLGFBQVc7QUFSVSxDQUF2Qjs7a0JBV2UsMEJBQVczQyxNQUFYLEVBQW1CLEVBQUU0SCxNQUFNLFlBQVIsRUFBc0JDLFdBQVcsSUFBakMsRUFBbkIsRUFBNERqRixPQUE1RCxDIiwiZmlsZSI6IlRvb2x0aXAuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvcm1jcXVlbi9zbHQtdWkvbWF0ZXJpYWwtdWkiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1tdWx0aS1jb21wLCBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEV2ZW50TGlzdGVuZXIgZnJvbSAncmVhY3QtZXZlbnQtbGlzdGVuZXInO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC9kZWJvdW5jZSc7XG5pbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IE1hbmFnZXIgZnJvbSAncmVhY3QtcG9wcGVyL2xpYi9NYW5hZ2VyJztcbmltcG9ydCBQb3BwZXIgZnJvbSAncmVhY3QtcG9wcGVyL2xpYi9Qb3BwZXInO1xuaW1wb3J0IFRhcmdldCBmcm9tICdyZWFjdC1wb3BwZXIvbGliL1RhcmdldCc7XG5pbXBvcnQgeyBjYXBpdGFsaXplIH0gZnJvbSAnLi4vdXRpbHMvaGVscGVycyc7XG5pbXBvcnQgUm9vdFJlZiBmcm9tICcuLi9pbnRlcm5hbC9Sb290UmVmJztcbmltcG9ydCBQb3J0YWwgZnJvbSAnLi4vUG9ydGFsJztcbmltcG9ydCBjb21tb24gZnJvbSAnLi4vY29sb3JzL2NvbW1vbic7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5cbmV4cG9ydCBjb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICAvLyBXaWxsIGJlIGdvbmUgb25jZSB3ZSBkcm9wIFJlYWN0IDE1Lnggc3VwcG9ydC5cbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIGZsZXhEaXJlY3Rpb246ICdpbmhlcml0JywgLy8gTWFrZXMgdGhlIHdyYXBwZXIgbW9yZSB0cmFuc3BhcmVudC5cbiAgfSxcbiAgcG9wcGVyOiB7XG4gICAgekluZGV4OiB0aGVtZS56SW5kZXgudG9vbHRpcCxcbiAgfSxcbiAgcG9wcGVyQ2xvc2U6IHtcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gIH0sXG4gIHRvb2x0aXA6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuZ3JleVs3MDBdLFxuICAgIGJvcmRlclJhZGl1czogMixcbiAgICBjb2xvcjogY29tbW9uLndoaXRlLFxuICAgIGZvbnRGYW1pbHk6IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseSxcbiAgICBvcGFjaXR5OiAwLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJyxcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWydvcGFjaXR5JywgJ3RyYW5zZm9ybSddLCB7XG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uc2hvcnRlc3QsXG4gICAgfSksXG4gICAgbWluSGVpZ2h0OiAwLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcudW5pdCxcbiAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5weFRvUmVtKDE0KSxcbiAgICBsaW5lSGVpZ2h0OiBgJHt0aGVtZS50eXBvZ3JhcGh5LnJvdW5kKDE2IC8gMTQpfWVtYCxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nLnVuaXQgLyAyfXB4ICR7dGhlbWUuc3BhY2luZy51bml0fXB4YCxcbiAgICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LnB4VG9SZW0oMTApLFxuICAgICAgbGluZUhlaWdodDogYCR7dGhlbWUudHlwb2dyYXBoeS5yb3VuZCgxNCAvIDEwKX1lbWAsXG4gICAgfSxcbiAgfSxcbiAgdG9vbHRpcFBsYWNlbWVudExlZnQ6IHtcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICdyaWdodCBjZW50ZXInLFxuICAgIG1hcmdpbjogYDAgJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAzfXB4YCxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgICBtYXJnaW46ICcwIDE0cHgnLFxuICAgIH0sXG4gIH0sXG4gIHRvb2x0aXBQbGFjZW1lbnRSaWdodDoge1xuICAgIHRyYW5zZm9ybU9yaWdpbjogJ2xlZnQgY2VudGVyJyxcbiAgICBtYXJnaW46IGAwICR7dGhlbWUuc3BhY2luZy51bml0ICogM31weGAsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgbWFyZ2luOiAnMCAxNHB4JyxcbiAgICB9LFxuICB9LFxuICB0b29sdGlwUGxhY2VtZW50VG9wOiB7XG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnY2VudGVyIGJvdHRvbScsXG4gICAgbWFyZ2luOiBgJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAzfXB4IDBgLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcbiAgICAgIG1hcmdpbjogJzE0cHggMCcsXG4gICAgfSxcbiAgfSxcbiAgdG9vbHRpcFBsYWNlbWVudEJvdHRvbToge1xuICAgIHRyYW5zZm9ybU9yaWdpbjogJ2NlbnRlciB0b3AnLFxuICAgIG1hcmdpbjogYCR7dGhlbWUuc3BhY2luZy51bml0ICogM31weCAwYCxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgICBtYXJnaW46ICcxNHB4IDAnLFxuICAgIH0sXG4gIH0sXG4gIHRvb2x0aXBPcGVuOiB7XG4gICAgb3BhY2l0eTogMC45LFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyxcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBmbGlwUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICBzd2l0Y2ggKHBsYWNlbWVudCkge1xuICAgIGNhc2UgJ2JvdHRvbS1lbmQnOlxuICAgICAgcmV0dXJuICdib3R0b20tc3RhcnQnO1xuICAgIGNhc2UgJ2JvdHRvbS1zdGFydCc6XG4gICAgICByZXR1cm4gJ2JvdHRvbS1lbmQnO1xuICAgIGNhc2UgJ3RvcC1lbmQnOlxuICAgICAgcmV0dXJuICd0b3Atc3RhcnQnO1xuICAgIGNhc2UgJ3RvcC1zdGFydCc6XG4gICAgICByZXR1cm4gJ3RvcC1lbmQnO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gcGxhY2VtZW50O1xuICB9XG59XG5cbmNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgIHRoaXMuaXNDb250cm9sbGVkID0gcHJvcHMub3BlbiAhPSBudWxsO1xuICAgIGlmICghdGhpcy5pc0NvbnRyb2xsZWQpIHtcbiAgICAgIC8vIG5vdCBjb250cm9sbGVkLCB1c2UgaW50ZXJuYWwgc3RhdGVcbiAgICAgIHRoaXMuc3RhdGUub3BlbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlID0ge307XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgd2FybmluZyhcbiAgICAgICF0aGlzLmNoaWxkcmVuIHx8XG4gICAgICAgICF0aGlzLmNoaWxkcmVuLmRpc2FibGVkIHx8XG4gICAgICAgICF0aGlzLmNoaWxkcmVuLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2J1dHRvbicsXG4gICAgICBbXG4gICAgICAgICdNYXRlcmlhbC1VSTogeW91IGFyZSBwcm92aWRpbmcgYSBkaXNhYmxlZCBgYnV0dG9uYCBjaGlsZCB0byB0aGUgVG9vbHRpcCBjb21wb25lbnQuJyxcbiAgICAgICAgJ0EgZGlzYWJsZWQgZWxlbWVudCBkb2VzIG5vdCBmaXJlIGV2ZW50cy4nLFxuICAgICAgICBcIlRvb2x0aXAgbmVlZHMgdG8gbGlzdGVuIHRvIHRoZSBjaGlsZCBlbGVtZW50J3MgZXZlbnRzIHRvIGRpc3BsYXkgdGhlIHRpdGxlLlwiLFxuICAgICAgICAnJyxcbiAgICAgICAgJ1BsYWNlIGEgYGRpdmAgY29udGFpbmVyIG9uIHRvcCBvZiB0aGUgZWxlbWVudC4nLFxuICAgICAgXS5qb2luKCdcXG4nKSxcbiAgICApO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuZW50ZXJUaW1lcik7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMubGVhdmVUaW1lcik7XG4gICAgdGhpcy5oYW5kbGVSZXNpemUuY2FuY2VsKCk7XG4gIH1cblxuICBlbnRlclRpbWVyID0gbnVsbDtcbiAgbGVhdmVUaW1lciA9IG51bGw7XG4gIHRvdWNoVGltZXIgPSBudWxsO1xuICBpc0NvbnRyb2xsZWQgPSBudWxsO1xuICBwb3BwZXIgPSBudWxsO1xuICBjaGlsZHJlbiA9IG51bGw7XG4gIGlnbm9yZU5vblRvdWNoRXZlbnRzID0gZmFsc2U7XG5cbiAgaGFuZGxlUmVzaXplID0gZGVib3VuY2UoKCkgPT4ge1xuICAgIGlmICh0aGlzLnBvcHBlcikge1xuICAgICAgdGhpcy5wb3BwZXIuX3BvcHBlci5zY2hlZHVsZVVwZGF0ZSgpO1xuICAgIH1cbiAgfSwgMTY2KTsgLy8gQ29ycmVzcG9uZHMgdG8gMTAgZnJhbWVzIGF0IDYwIEh6LlxuXG4gIGhhbmRsZUVudGVyID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGVudGVyRGVsYXkgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY2hpbGRyZW5Qcm9wcyA9IGNoaWxkcmVuLnByb3BzO1xuXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdmb2N1cycgJiYgY2hpbGRyZW5Qcm9wcy5vbkZvY3VzKSB7XG4gICAgICBjaGlsZHJlblByb3BzLm9uRm9jdXMoZXZlbnQpO1xuICAgIH1cblxuICAgIGlmIChldmVudC50eXBlID09PSAnbW91c2VvdmVyJyAmJiBjaGlsZHJlblByb3BzLm9uTW91c2VPdmVyKSB7XG4gICAgICBjaGlsZHJlblByb3BzLm9uTW91c2VPdmVyKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pZ25vcmVOb25Ub3VjaEV2ZW50cyAmJiBldmVudC50eXBlICE9PSAndG91Y2hzdGFydCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjbGVhclRpbWVvdXQodGhpcy5lbnRlclRpbWVyKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5sZWF2ZVRpbWVyKTtcbiAgICBpZiAoZW50ZXJEZWxheSkge1xuICAgICAgZXZlbnQucGVyc2lzdCgpO1xuICAgICAgdGhpcy5lbnRlclRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlT3BlbihldmVudCk7XG4gICAgICB9LCBlbnRlckRlbGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oYW5kbGVPcGVuKGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlT3BlbiA9IGV2ZW50ID0+IHtcbiAgICBpZiAoIXRoaXMuaXNDb250cm9sbGVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbk9wZW4pIHtcbiAgICAgIHRoaXMucHJvcHMub25PcGVuKGV2ZW50LCB0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlTGVhdmUgPSBldmVudCA9PiB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgbGVhdmVEZWxheSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjaGlsZHJlblByb3BzID0gY2hpbGRyZW4ucHJvcHM7XG5cbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2JsdXInICYmIGNoaWxkcmVuUHJvcHMub25CbHVyKSB7XG4gICAgICBjaGlsZHJlblByb3BzLm9uQmx1cihldmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdtb3VzZWxlYXZlJyAmJiBjaGlsZHJlblByb3BzLm9uTW91c2VMZWF2ZSkge1xuICAgICAgY2hpbGRyZW5Qcm9wcy5vbk1vdXNlTGVhdmUoZXZlbnQpO1xuICAgIH1cblxuICAgIGNsZWFyVGltZW91dCh0aGlzLmVudGVyVGltZXIpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmxlYXZlVGltZXIpO1xuICAgIGlmIChsZWF2ZURlbGF5KSB7XG4gICAgICBldmVudC5wZXJzaXN0KCk7XG4gICAgICB0aGlzLmxlYXZlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVDbG9zZShldmVudCk7XG4gICAgICB9LCBsZWF2ZURlbGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oYW5kbGVDbG9zZShldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUNsb3NlID0gZXZlbnQgPT4ge1xuICAgIHRoaXMuaWdub3JlTm9uVG91Y2hFdmVudHMgPSBmYWxzZTtcblxuICAgIGlmICghdGhpcy5pc0NvbnRyb2xsZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsb3NlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xvc2UoZXZlbnQsIGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlVG91Y2hTdGFydCA9IGV2ZW50ID0+IHtcbiAgICB0aGlzLmlnbm9yZU5vblRvdWNoRXZlbnRzID0gdHJ1ZTtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBlbnRlclRvdWNoRGVsYXkgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY2hpbGRyZW5Qcm9wcyA9IGNoaWxkcmVuLnByb3BzO1xuXG4gICAgaWYgKGNoaWxkcmVuUHJvcHMub25Ub3VjaFN0YXJ0KSB7XG4gICAgICBjaGlsZHJlblByb3BzLm9uVG91Y2hTdGFydChldmVudCk7XG4gICAgfVxuXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudG91Y2hUaW1lcik7XG4gICAgZXZlbnQucGVyc2lzdCgpO1xuICAgIHRoaXMudG91Y2hUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVFbnRlcihldmVudCk7XG4gICAgfSwgZW50ZXJUb3VjaERlbGF5KTtcbiAgfTtcblxuICBoYW5kbGVUb3VjaEVuZCA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBsZWF2ZVRvdWNoRGVsYXkgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY2hpbGRyZW5Qcm9wcyA9IGNoaWxkcmVuLnByb3BzO1xuXG4gICAgaWYgKGNoaWxkcmVuUHJvcHMub25Ub3VjaEVuZCkge1xuICAgICAgY2hpbGRyZW5Qcm9wcy5vblRvdWNoRW5kKGV2ZW50KTtcbiAgICB9XG5cbiAgICBjbGVhclRpbWVvdXQodGhpcy50b3VjaFRpbWVyKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5sZWF2ZVRpbWVyKTtcbiAgICBldmVudC5wZXJzaXN0KCk7XG4gICAgdGhpcy5sZWF2ZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZUNsb3NlKGV2ZW50KTtcbiAgICB9LCBsZWF2ZVRvdWNoRGVsYXkpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBkaXNhYmxlRm9jdXNMaXN0ZW5lcixcbiAgICAgIGRpc2FibGVIb3Zlckxpc3RlbmVyLFxuICAgICAgZGlzYWJsZVRvdWNoTGlzdGVuZXIsXG4gICAgICBlbnRlckRlbGF5LFxuICAgICAgZW50ZXJUb3VjaERlbGF5LFxuICAgICAgaWQsXG4gICAgICBsZWF2ZURlbGF5LFxuICAgICAgbGVhdmVUb3VjaERlbGF5LFxuICAgICAgb25DbG9zZSxcbiAgICAgIG9uT3BlbixcbiAgICAgIG9wZW46IG9wZW5Qcm9wLFxuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnRQcm9wLFxuICAgICAgUG9wcGVyUHJvcHM6IHsgY2xhc3NOYW1lOiBQb3BwZXJDbGFzc05hbWUsIC4uLlBvcHBlclByb3BzIH0gPSB7fSxcbiAgICAgIHRoZW1lLFxuICAgICAgdGl0bGUsXG4gICAgICAuLi5vdGhlclxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgcGxhY2VtZW50ID0gdGhlbWUuZGlyZWN0aW9uID09PSAncnRsJyA/IGZsaXBQbGFjZW1lbnQocGxhY2VtZW50UHJvcCkgOiBwbGFjZW1lbnRQcm9wO1xuICAgIGxldCBvcGVuID0gdGhpcy5pc0NvbnRyb2xsZWQgPyBvcGVuUHJvcCA6IHRoaXMuc3RhdGUub3BlbjtcbiAgICBjb25zdCBjaGlsZHJlblByb3BzID0ge1xuICAgICAgJ2FyaWEtZGVzY3JpYmVkYnknOiBpZCxcbiAgICAgIHRpdGxlOiB0eXBlb2YgdGl0bGUgPT09ICdzdHJpbmcnICYmICFvcGVuID8gdGl0bGUgOiAnJyxcbiAgICB9O1xuXG4gICAgLy8gVGhlcmUgaXMgbm8gcG9pbnQgYXQgZGlzcGxheWluZyBhbiBlbXB0eSB0b29sdGlwLlxuICAgIGlmICh0aXRsZSA9PT0gJycpIHtcbiAgICAgIG9wZW4gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIWRpc2FibGVUb3VjaExpc3RlbmVyKSB7XG4gICAgICBjaGlsZHJlblByb3BzLm9uVG91Y2hTdGFydCA9IHRoaXMuaGFuZGxlVG91Y2hTdGFydDtcbiAgICAgIGNoaWxkcmVuUHJvcHMub25Ub3VjaEVuZCA9IHRoaXMuaGFuZGxlVG91Y2hFbmQ7XG4gICAgfVxuXG4gICAgaWYgKCFkaXNhYmxlSG92ZXJMaXN0ZW5lcikge1xuICAgICAgY2hpbGRyZW5Qcm9wcy5vbk1vdXNlT3ZlciA9IHRoaXMuaGFuZGxlRW50ZXI7XG4gICAgICBjaGlsZHJlblByb3BzLm9uTW91c2VMZWF2ZSA9IHRoaXMuaGFuZGxlTGVhdmU7XG4gICAgfVxuXG4gICAgaWYgKCFkaXNhYmxlRm9jdXNMaXN0ZW5lcikge1xuICAgICAgY2hpbGRyZW5Qcm9wcy5vbkZvY3VzID0gdGhpcy5oYW5kbGVFbnRlcjtcbiAgICAgIGNoaWxkcmVuUHJvcHMub25CbHVyID0gdGhpcy5oYW5kbGVMZWF2ZTtcbiAgICB9XG5cbiAgICB3YXJuaW5nKFxuICAgICAgIWNoaWxkcmVuLnByb3BzLnRpdGxlLFxuICAgICAgW1xuICAgICAgICAnTWF0ZXJpYWwtVUk6IHlvdSBoYXZlIGJlZW4gcHJvdmlkaW5nIGEgYHRpdGxlYCBwcm9wZXJ0eSB0byB0aGUgY2hpbGQgb2YgPFRvb2x0aXAgLz4uJyxcbiAgICAgICAgYFJlbW92ZSB0aGlzIHRpdGxlIHByb3BlcnR5IFxcYCR7Y2hpbGRyZW4ucHJvcHMudGl0bGV9XFxgIG9yIHRoZSBUb29sdGlwIGNvbXBvbmVudC5gLFxuICAgICAgXS5qb2luKCdcXG4nKSxcbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxNYW5hZ2VyXG4gICAgICAgIHRhZz17UmVhY3RET00uY3JlYXRlUG9ydGFsID8gZmFsc2UgOiAnZGl2J31cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX1cbiAgICAgICAgey4uLm90aGVyfVxuICAgICAgPlxuICAgICAgICA8RXZlbnRMaXN0ZW5lciB0YXJnZXQ9XCJ3aW5kb3dcIiBvblJlc2l6ZT17dGhpcy5oYW5kbGVSZXNpemV9IC8+XG4gICAgICAgIDxUYXJnZXQ+XG4gICAgICAgICAgeyh7IHRhcmdldFByb3BzIH0pID0+IChcbiAgICAgICAgICAgIDxSb290UmVmXG4gICAgICAgICAgICAgIHJvb3RSZWY9e25vZGUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4gPSBub2RlO1xuICAgICAgICAgICAgICAgIHRhcmdldFByb3BzLnJlZih0aGlzLmNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge1JlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwgY2hpbGRyZW5Qcm9wcyl9XG4gICAgICAgICAgICA8L1Jvb3RSZWY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9UYXJnZXQ+XG4gICAgICAgIDxQb3J0YWw+XG4gICAgICAgICAgPFBvcHBlclxuICAgICAgICAgICAgcGxhY2VtZW50PXtwbGFjZW1lbnR9XG4gICAgICAgICAgICBldmVudHNFbmFibGVkPXtvcGVufVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgICBjbGFzc2VzLnBvcHBlcixcbiAgICAgICAgICAgICAgeyBbY2xhc3Nlcy5wb3BwZXJDbG9zZV06ICFvcGVuIH0sXG4gICAgICAgICAgICAgIFBvcHBlckNsYXNzTmFtZSxcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICByZWY9e25vZGUgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnBvcHBlciA9IG5vZGU7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgey4uLlBvcHBlclByb3BzfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsoeyBwb3BwZXJQcm9wcywgcmVzdFByb3BzIH0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgYWN0dWFsUGxhY2VtZW50ID0gKHBvcHBlclByb3BzWydkYXRhLXBsYWNlbWVudCddIHx8IHBsYWNlbWVudCkuc3BsaXQoJy0nKVswXTtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICB7Li4ucG9wcGVyUHJvcHN9XG4gICAgICAgICAgICAgICAgICB7Li4ucmVzdFByb3BzfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgLi4ucG9wcGVyUHJvcHMuc3R5bGUsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogcG9wcGVyUHJvcHMuc3R5bGUudG9wIHx8IDAsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHBvcHBlclByb3BzLnN0eWxlLmxlZnQgfHwgMCxcbiAgICAgICAgICAgICAgICAgICAgLi4ucmVzdFByb3BzLnN0eWxlLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cInRvb2x0aXBcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj17IW9wZW59XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLnRvb2x0aXAsXG4gICAgICAgICAgICAgICAgICAgICAgeyBbY2xhc3Nlcy50b29sdGlwT3Blbl06IG9wZW4gfSxcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzW2B0b29sdGlwUGxhY2VtZW50JHtjYXBpdGFsaXplKGFjdHVhbFBsYWNlbWVudCl9YF0sXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA8L1BvcHBlcj5cbiAgICAgICAgPC9Qb3J0YWw+XG4gICAgICA8L01hbmFnZXI+XG4gICAgKTtcbiAgfVxufVxuXG5Ub29sdGlwLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRvb2x0aXAgcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIFVzZWZ1bCB0byBleHRlbmQgdGhlIHN0eWxlIGFwcGxpZWQgdG8gY29tcG9uZW50cy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIERvIG5vdCByZXNwb25kIHRvIGZvY3VzIGV2ZW50cy5cbiAgICovXG4gIGRpc2FibGVGb2N1c0xpc3RlbmVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIERvIG5vdCByZXNwb25kIHRvIGhvdmVyIGV2ZW50cy5cbiAgICovXG4gIGRpc2FibGVIb3Zlckxpc3RlbmVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIERvIG5vdCByZXNwb25kIHRvIGxvbmcgcHJlc3MgdG91Y2ggZXZlbnRzLlxuICAgKi9cbiAgZGlzYWJsZVRvdWNoTGlzdGVuZXI6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCBiZWZvcmUgc2hvd2luZyB0aGUgdG9vbHRpcC5cbiAgICogVGhpcyBwcm9wZXJ0eSB3b24ndCBpbXBhY3QgdGhlIGVudGVyIHRvdWNoIGRlbGF5IChgZW50ZXJUb3VjaERlbGF5YCkuXG4gICAqL1xuICBlbnRlckRlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgYSB1c2VyIG11c3QgdG91Y2ggdGhlIGVsZW1lbnQgYmVmb3JlIHNob3dpbmcgdGhlIHRvb2x0aXAuXG4gICAqL1xuICBlbnRlclRvdWNoRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBUaGUgcmVsYXRpb25zaGlwIGJldHdlZW4gdGhlIHRvb2x0aXAgYW5kIHRoZSB3cmFwcGVyIGNvbXBvbmVudCBpcyBub3QgY2xlYXIgZnJvbSB0aGUgRE9NLlxuICAgKiBCeSBwcm92aWRpbmcgdGhpcyBwcm9wZXJ0eSwgd2UgY2FuIHVzZSBhcmlhLWRlc2NyaWJlZGJ5IHRvIHNvbHZlIHRoZSBhY2Nlc3NpYmlsaXR5IGlzc3VlLlxuICAgKi9cbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB3YWl0IGJlZm9yZSBoaWRpbmcgdGhlIHRvb2x0aXAuXG4gICAqIFRoaXMgcHJvcGVydHkgd29uJ3QgaW1wYWN0IHRoZSBsZWF2ZSB0b3VjaCBkZWxheSAoYGxlYXZlVG91Y2hEZWxheWApLlxuICAgKi9cbiAgbGVhdmVEZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGFmdGVyIHRoZSB1c2VyIHN0b3BzIHRvdWNoaW5nIGFuIGVsZW1lbnQgYmVmb3JlIGhpZGluZyB0aGUgdG9vbHRpcC5cbiAgICovXG4gIGxlYXZlVG91Y2hEZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIHRvb2x0aXAgcmVxdWVzdHMgdG8gYmUgY2xvc2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2tcbiAgICovXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgdG9vbHRpcCByZXF1ZXN0cyB0byBiZSBvcGVuLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2tcbiAgICovXG4gIG9uT3BlbjogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSB0b29sdGlwIGlzIHNob3duLlxuICAgKi9cbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBUb29sdGlwIHBsYWNlbWVudFxuICAgKi9cbiAgcGxhY2VtZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdib3R0b20tZW5kJyxcbiAgICAnYm90dG9tLXN0YXJ0JyxcbiAgICAnYm90dG9tJyxcbiAgICAnbGVmdC1lbmQnLFxuICAgICdsZWZ0LXN0YXJ0JyxcbiAgICAnbGVmdCcsXG4gICAgJ3JpZ2h0LWVuZCcsXG4gICAgJ3JpZ2h0LXN0YXJ0JyxcbiAgICAncmlnaHQnLFxuICAgICd0b3AtZW5kJyxcbiAgICAndG9wLXN0YXJ0JyxcbiAgICAndG9wJyxcbiAgXSksXG4gIC8qKlxuICAgKiBQcm9wZXJ0aWVzIGFwcGxpZWQgdG8gdGhlIGBQb3BwZXJgIGVsZW1lbnQuXG4gICAqL1xuICBQb3BwZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBUb29sdGlwIHRpdGxlLiBaZXJvLWxlbmd0aCB0aXRsZXMgc3RyaW5nIGFyZSBuZXZlciBkaXNwbGF5ZWQuXG4gICAqL1xuICB0aXRsZTogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbn07XG5cblRvb2x0aXAuZGVmYXVsdFByb3BzID0ge1xuICBkaXNhYmxlRm9jdXNMaXN0ZW5lcjogZmFsc2UsXG4gIGRpc2FibGVIb3Zlckxpc3RlbmVyOiBmYWxzZSxcbiAgZGlzYWJsZVRvdWNoTGlzdGVuZXI6IGZhbHNlLFxuICBlbnRlckRlbGF5OiAwLFxuICBlbnRlclRvdWNoRGVsYXk6IDEwMDAsXG4gIGxlYXZlRGVsYXk6IDAsXG4gIGxlYXZlVG91Y2hEZWxheTogMTUwMCxcbiAgcGxhY2VtZW50OiAnYm90dG9tJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7IG5hbWU6ICdNdWlUb29sdGlwJywgd2l0aFRoZW1lOiB0cnVlIH0pKFRvb2x0aXApO1xuIl19

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(7);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @ignore - internal component.
 *
 * Internal helper component to allow attaching a ref to a
 * child element that may not accept refs (functional component).
 * It's higly inspired by https://github.com/facebook/react/issues/11401#issuecomment-340543801
 */
var RootRef = function (_React$Component) {
  _inherits(RootRef, _React$Component);

  function RootRef() {
    _classCallCheck(this, RootRef);

    return _possibleConstructorReturn(this, (RootRef.__proto__ || Object.getPrototypeOf(RootRef)).apply(this, arguments));
  }

  _createClass(RootRef, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.rootRef(_reactDom2.default.findDOMNode(this));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.rootRef(null);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return RootRef;
}(_react2.default.Component);

RootRef.propTypes = {
  children: _propTypes2.default.element.isRequired,
  rootRef: _propTypes2.default.func.isRequired
};

exports.default = RootRef;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcaW50ZXJuYWxcXFJvb3RSZWYuanMiXSwibmFtZXMiOlsiUm9vdFJlZiIsInByb3BzIiwicm9vdFJlZiIsImZpbmRET01Ob2RlIiwiY2hpbGRyZW4iLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJlbGVtZW50IiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7OztJQU9NQSxPOzs7Ozs7Ozs7Ozt3Q0FDZ0I7QUFDbEIsV0FBS0MsS0FBTCxDQUFXQyxPQUFYLENBQW1CLG1CQUFTQyxXQUFULENBQXFCLElBQXJCLENBQW5CO0FBQ0Q7OzsyQ0FFc0I7QUFDckIsV0FBS0YsS0FBTCxDQUFXQyxPQUFYLENBQW1CLElBQW5CO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQU8sS0FBS0QsS0FBTCxDQUFXRyxRQUFsQjtBQUNEOzs7O0VBWG1CLGdCQUFNQyxTOztBQWM1QkwsUUFBUU0sU0FBUixHQUFvQjtBQUNsQkYsWUFBVSxvQkFBVUcsT0FBVixDQUFrQkMsVUFEVjtBQUVsQk4sV0FBUyxvQkFBVU8sSUFBVixDQUFlRDtBQUZOLENBQXBCOztrQkFLZVIsTyIsImZpbGUiOiJSb290UmVmLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3JtY3F1ZW4vc2x0LXVpL21hdGVyaWFsLXVpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBAaWdub3JlIC0gaW50ZXJuYWwgY29tcG9uZW50LlxuICpcbiAqIEludGVybmFsIGhlbHBlciBjb21wb25lbnQgdG8gYWxsb3cgYXR0YWNoaW5nIGEgcmVmIHRvIGFcbiAqIGNoaWxkIGVsZW1lbnQgdGhhdCBtYXkgbm90IGFjY2VwdCByZWZzIChmdW5jdGlvbmFsIGNvbXBvbmVudCkuXG4gKiBJdCdzIGhpZ2x5IGluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTE0MDEjaXNzdWVjb21tZW50LTM0MDU0MzgwMVxuICovXG5jbGFzcyBSb290UmVmIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5yb290UmVmKFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucHJvcHMucm9vdFJlZihudWxsKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgfVxufVxuXG5Sb290UmVmLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWQsXG4gIHJvb3RSZWY6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb290UmVmO1xuIl19

/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Manager = function (_Component) {
  _inherits(Manager, _Component);

  function Manager() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Manager);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Manager.__proto__ || Object.getPrototypeOf(Manager)).call.apply(_ref, [this].concat(args))), _this), _this._setTargetNode = function (node) {
      _this._targetNode = node;
    }, _this._getTargetNode = function () {
      return _this._targetNode;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Manager, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        popperManager: {
          setTargetNode: this._setTargetNode,
          getTargetNode: this._getTargetNode
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          tag = _props.tag,
          children = _props.children,
          restProps = _objectWithoutProperties(_props, ['tag', 'children']);

      if (tag !== false) {
        return (0, _react.createElement)(tag, restProps, children);
      } else {
        return children;
      }
    }
  }]);

  return Manager;
}(_react.Component);

Manager.childContextTypes = {
  popperManager: _propTypes2.default.object.isRequired
};
Manager.propTypes = {
  tag: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func])
};
Manager.defaultProps = {
  tag: 'div'
};
exports.default = Manager;

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _popper = __webpack_require__(430);

var _popper2 = _interopRequireDefault(_popper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Popper = function (_Component) {
  _inherits(Popper, _Component);

  function Popper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Popper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Popper.__proto__ || Object.getPrototypeOf(Popper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this._setArrowNode = function (node) {
      _this._arrowNode = node;
    }, _this._getTargetNode = function () {
      return _this.context.popperManager.getTargetNode();
    }, _this._getOffsets = function (data) {
      return Object.keys(data.offsets).map(function (key) {
        return data.offsets[key];
      });
    }, _this._isDataDirty = function (data) {
      if (_this.state.data) {
        return JSON.stringify(_this._getOffsets(_this.state.data)) !== JSON.stringify(_this._getOffsets(data));
      } else {
        return true;
      }
    }, _this._updateStateModifier = {
      enabled: true,
      order: 900,
      fn: function fn(data) {
        if (_this._isDataDirty(data)) {
          _this.setState({ data: data });
        }
        return data;
      }
    }, _this._getPopperStyle = function () {
      var data = _this.state.data;


      if (!_this._popper || !data) {
        return {
          position: 'absolute',
          pointerEvents: 'none',
          opacity: 0
        };
      }

      return _extends({
        position: data.offsets.popper.position
      }, data.styles);
    }, _this._getPopperPlacement = function () {
      return _this.state.data ? _this.state.data.placement : undefined;
    }, _this._getPopperHide = function () {
      return !!_this.state.data && _this.state.data.hide ? '' : undefined;
    }, _this._getArrowStyle = function () {
      if (!_this.state.data || !_this.state.data.offsets.arrow) {
        return {};
      } else {
        var _this$state$data$offs = _this.state.data.offsets.arrow,
            top = _this$state$data$offs.top,
            left = _this$state$data$offs.left;

        return { top: top, left: left };
      }
    }, _this._handlePopperRef = function (node) {
      _this._popperNode = node;
      if (node) {
        _this._createPopper();
      } else {
        _this._destroyPopper();
      }
      if (_this.props.innerRef) {
        _this.props.innerRef(node);
      }
    }, _this._scheduleUpdate = function () {
      _this._popper && _this._popper.scheduleUpdate();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Popper, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        popper: {
          setArrowNode: this._setArrowNode,
          getArrowStyle: this._getArrowStyle
        }
      };
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(lastProps) {
      if (lastProps.placement !== this.props.placement || lastProps.eventsEnabled !== this.props.eventsEnabled) {
        this._destroyPopper();
        this._createPopper();
      }
      if (lastProps.children !== this.props.children) {
        this._scheduleUpdate();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._destroyPopper();
    }
  }, {
    key: '_createPopper',
    value: function _createPopper() {
      var _this2 = this;

      var _props = this.props,
          placement = _props.placement,
          eventsEnabled = _props.eventsEnabled;

      var modifiers = _extends({}, this.props.modifiers, {
        applyStyle: { enabled: false },
        updateState: this._updateStateModifier
      });
      if (this._arrowNode) {
        modifiers.arrow = {
          element: this._arrowNode
        };
      }
      this._popper = new _popper2.default(this._getTargetNode(), this._popperNode, {
        placement: placement,
        eventsEnabled: eventsEnabled,
        modifiers: modifiers
      });

      // TODO: look into setTimeout scheduleUpdate call, without it, the popper will not position properly on creation
      setTimeout(function () {
        return _this2._scheduleUpdate();
      });
    }
  }, {
    key: '_destroyPopper',
    value: function _destroyPopper() {
      if (this._popper) {
        this._popper.destroy();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          component = _props2.component,
          innerRef = _props2.innerRef,
          placement = _props2.placement,
          eventsEnabled = _props2.eventsEnabled,
          modifiers = _props2.modifiers,
          children = _props2.children,
          restProps = _objectWithoutProperties(_props2, ['component', 'innerRef', 'placement', 'eventsEnabled', 'modifiers', 'children']);

      var popperStyle = this._getPopperStyle();
      var popperPlacement = this._getPopperPlacement();
      var popperHide = this._getPopperHide();

      if (typeof children === 'function') {
        var popperProps = {
          ref: this._handlePopperRef,
          style: popperStyle,
          'data-placement': popperPlacement,
          'data-x-out-of-boundaries': popperHide
        };
        return children({
          popperProps: popperProps,
          restProps: restProps,
          scheduleUpdate: this._scheduleUpdate
        });
      }

      var componentProps = _extends({}, restProps, {
        style: _extends({}, restProps.style, popperStyle),
        'data-placement': popperPlacement,
        'data-x-out-of-boundaries': popperHide
      });

      if (typeof component === 'string') {
        componentProps.ref = this._handlePopperRef;
      } else {
        componentProps.innerRef = this._handlePopperRef;
      }

      return (0, _react.createElement)(component, componentProps, children);
    }
  }]);

  return Popper;
}(_react.Component);

Popper.contextTypes = {
  popperManager: _propTypes2.default.object.isRequired
};
Popper.childContextTypes = {
  popper: _propTypes2.default.object.isRequired
};
Popper.propTypes = {
  component: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
  innerRef: _propTypes2.default.func,
  placement: _propTypes2.default.oneOf(_popper2.default.placements),
  eventsEnabled: _propTypes2.default.bool,
  modifiers: _propTypes2.default.object,
  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func])
};
Popper.defaultProps = {
  component: 'div',
  placement: 'bottom',
  eventsEnabled: true,
  modifiers: {}
};
exports.default = Popper;

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Tells if you are running Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @argument {number} version to check
 * @returns {Boolean} isIE
 */
var cache = {};

var isIE = function () {
  var version = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';

  version = version.toString();
  if (cache.hasOwnProperty(version)) {
    return cache[version];
  }
  switch (version) {
    case '11':
      cache[version] = navigator.userAgent.indexOf('Trident') !== -1;
      break;
    case '10':
      cache[version] = navigator.appVersion.indexOf('MSIE 10') !== -1;
      break;
    case 'all':
      cache[version] = navigator.userAgent.indexOf('Trident') !== -1 || navigator.userAgent.indexOf('MSIE') !== -1;
      break;
  }

  //Set IE
  cache.all = cache.all || Object.keys(cache).some(function (key) {
    return cache[key];
  });
  return cache[version];
};

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}

function getWindowSizes() {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && parent.nodeName === 'HTML') {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // floor sides to avoid blurry text
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.floor(popper.top),
    bottom: Math.floor(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    top = -offsetParentRect.height + offsets.bottom;
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    left = -offsetParentRect.width + offsets.right;
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjuction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);
  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedule an update, it will run on the next UI update available
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(24)))

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Target = function Target(props, context) {
  var _props$component = props.component,
      component = _props$component === undefined ? 'div' : _props$component,
      innerRef = props.innerRef,
      children = props.children,
      restProps = _objectWithoutProperties(props, ['component', 'innerRef', 'children']);

  var popperManager = context.popperManager;

  var targetRef = function targetRef(node) {
    popperManager.setTargetNode(node);
    if (typeof innerRef === 'function') {
      innerRef(node);
    }
  };

  if (typeof children === 'function') {
    var targetProps = { ref: targetRef };
    return children({ targetProps: targetProps, restProps: restProps });
  }

  var componentProps = _extends({}, restProps);

  if (typeof component === 'string') {
    componentProps.ref = targetRef;
  } else {
    componentProps.innerRef = targetRef;
  }

  return (0, _react.createElement)(component, componentProps, children);
};

Target.contextTypes = {
  popperManager: _propTypes2.default.object.isRequired
};

Target.propTypes = {
  component: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
  innerRef: _propTypes2.default.func,
  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func])
};

exports.default = Target;

/***/ })

});