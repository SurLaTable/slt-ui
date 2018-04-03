webpackJsonpmaterial_ui([14,26,52],{

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.setTranslateValue = setTranslateValue;

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

var _Transition = __webpack_require__(100);

var _Transition2 = _interopRequireDefault(_Transition);

var _ownerWindow = __webpack_require__(108);

var _ownerWindow2 = _interopRequireDefault(_ownerWindow);

var _reactLifecyclesCompat = __webpack_require__(109);

var _reactLifecyclesCompat2 = _interopRequireDefault(_reactLifecyclesCompat);

var _withTheme = __webpack_require__(60);

var _withTheme2 = _interopRequireDefault(_withTheme);

var _transitions = __webpack_require__(99);

var _utils = __webpack_require__(379);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // @inheritedComponent Transition

var GUTTER = 24;

// Translate the node so he can't be seen on the screen.
// Later, we gonna translate back the node to his original location
// with `translate3d(0, 0, 0)`.`
function getTranslateValue(props, node) {
  var direction = props.direction;

  var rect = node.getBoundingClientRect();

  var transform = void 0;

  if (node.fakeTransform) {
    transform = node.fakeTransform;
  } else {
    var computedStyle = (0, _ownerWindow2.default)(node).getComputedStyle(node);
    transform = computedStyle.getPropertyValue('-webkit-transform') || computedStyle.getPropertyValue('transform');
  }

  var offsetX = 0;
  var offsetY = 0;

  if (transform && transform !== 'none' && typeof transform === 'string') {
    var transformValues = transform.split('(')[1].split(')')[0].split(',');
    offsetX = parseInt(transformValues[4], 10);
    offsetY = parseInt(transformValues[5], 10);
  }

  if (direction === 'left') {
    return 'translateX(100vw) translateX(-' + (rect.left - offsetX) + 'px)';
  } else if (direction === 'right') {
    return 'translateX(-' + (rect.left + rect.width + GUTTER - offsetX) + 'px)';
  } else if (direction === 'up') {
    return 'translateY(100vh) translateY(-' + (rect.top - offsetY) + 'px)';
  }

  // direction === 'down'
  return 'translateY(-' + (rect.top + rect.height + GUTTER - offsetY) + 'px)';
}

function setTranslateValue(props, node) {
  var transform = getTranslateValue(props, node);

  if (transform) {
    node.style.webkitTransform = transform;
    node.style.transform = transform;
  }
}

/**
 * The Slide transition is used by the [Snackbar](/demos/snackbars) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Slide = function (_React$Component) {
  _inherits(Slide, _React$Component);

  function Slide() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Slide);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Slide.__proto__ || Object.getPrototypeOf(Slide)).call.apply(_ref, [this].concat(args))), _this), _this.mounted = false, _this.transition = null, _this.handleResize = (0, _debounce2.default)(function () {
      // Skip configuration where the position is screen size invariant.
      if (_this.props.in || _this.props.direction === 'down' || _this.props.direction === 'right') {
        return;
      }

      var node = _reactDom2.default.findDOMNode(_this.transition);
      if (node) {
        setTranslateValue(_this.props, node);
      }
    }, 166), _this.handleEnter = function (node) {
      setTranslateValue(_this.props, node);
      (0, _utils.reflow)(node);

      if (_this.props.onEnter) {
        _this.props.onEnter(node);
      }
    }, _this.handleEntering = function (node) {
      var theme = _this.props.theme;


      var transitionProps = (0, _utils.getTransitionProps)(_this.props, {
        mode: 'enter'
      });
      node.style.webkitTransition = theme.transitions.create('-webkit-transform', _extends({}, transitionProps, {
        easing: theme.transitions.easing.easeOut
      }));
      node.style.transition = theme.transitions.create('transform', _extends({}, transitionProps, {
        easing: theme.transitions.easing.easeOut
      }));
      node.style.webkitTransform = 'translate(0, 0)';
      node.style.transform = 'translate(0, 0)';
      if (_this.props.onEntering) {
        _this.props.onEntering(node);
      }
    }, _this.handleExit = function (node) {
      var theme = _this.props.theme;


      var transitionProps = (0, _utils.getTransitionProps)(_this.props, {
        mode: 'exit'
      });
      node.style.webkitTransition = theme.transitions.create('-webkit-transform', _extends({}, transitionProps, {
        easing: theme.transitions.easing.sharp
      }));
      node.style.transition = theme.transitions.create('transform', _extends({}, transitionProps, {
        easing: theme.transitions.easing.sharp
      }));
      setTranslateValue(_this.props, node);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    }, _this.handleExited = function (node) {
      // No need for transitions when the component is hidden
      node.style.webkitTransition = '';
      node.style.transition = '';

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Slide, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // state.mounted handle SSR, once the component is mounted, we need
      // to properly hide it.
      if (!this.props.in) {
        // We need to set initial translate values of transition element
        // otherwise component will be shown when in=false.
        this.updatePosition();
      }

      this.mounted = true;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.direction !== this.props.direction && !this.props.in) {
        // We need to update the position of the drawer when the direction change and
        // when it's hidden.
        this.updatePosition();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.handleResize.cancel();
    }
  }, {
    key: 'updatePosition',
    value: function updatePosition() {
      var node = _reactDom2.default.findDOMNode(this.transition);
      if (node) {
        node.style.visibility = 'inherit';
        setTranslateValue(this.props, node);
      }
    } // Corresponds to 10 frames at 60 Hz.

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          onEnter = _props.onEnter,
          onEntering = _props.onEntering,
          onExit = _props.onExit,
          onExited = _props.onExited,
          styleProp = _props.style,
          theme = _props.theme,
          other = _objectWithoutProperties(_props, ['children', 'onEnter', 'onEntering', 'onExit', 'onExited', 'style', 'theme']);

      var style = {};

      // We use this state to handle the server-side rendering.
      // We don't know the width of the children ahead of time.
      // We need to render it.
      if (!this.props.in && !this.mounted) {
        style.visibility = 'hidden';
      }

      style = _extends({}, style, styleProp, _react2.default.isValidElement(children) ? children.props.style : {});

      return _react2.default.createElement(
        _reactEventListener2.default,
        { target: 'window', onResize: this.handleResize },
        _react2.default.createElement(
          _Transition2.default,
          _extends({
            onEnter: this.handleEnter,
            onEntering: this.handleEntering,
            onExit: this.handleExit,
            onExited: this.handleExited,
            appear: true,
            style: style,
            ref: function ref(node) {
              _this2.transition = node;
            }
          }, other),
          children
        )
      );
    }
  }]);

  return Slide;
}(_react2.default.Component);

Slide.propTypes = {
  /**
   * A single child content element.
   */
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]),
  /**
   * Direction the child node will enter from.
   */
  direction: _propTypes2.default.oneOf(['left', 'right', 'up', 'down']),
  /**
   * If `true`, show the component; triggers the enter or exit animation.
   */
  in: _propTypes2.default.bool,
  /**
   * @ignore
   */
  onEnter: _propTypes2.default.func,
  /**
   * @ignore
   */
  onEntering: _propTypes2.default.func,
  /**
   * @ignore
   */
  onExit: _propTypes2.default.func,
  /**
   * @ignore
   */
  onExited: _propTypes2.default.func,
  /**
   * @ignore
   */
  style: _propTypes2.default.object,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  timeout: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({ enter: _propTypes2.default.number, exit: _propTypes2.default.number })])
};

Slide.defaultProps = {
  direction: 'down',
  timeout: {
    enter: _transitions.duration.enteringScreen,
    exit: _transitions.duration.leavingScreen
  }
};

exports.default = (0, _withTheme2.default)()((0, _reactLifecyclesCompat2.default)(Slide));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdHJhbnNpdGlvbnNcXFNsaWRlLmpzIl0sIm5hbWVzIjpbInNldFRyYW5zbGF0ZVZhbHVlIiwiR1VUVEVSIiwiZ2V0VHJhbnNsYXRlVmFsdWUiLCJwcm9wcyIsIm5vZGUiLCJkaXJlY3Rpb24iLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidHJhbnNmb3JtIiwiZmFrZVRyYW5zZm9ybSIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsIm9mZnNldFgiLCJvZmZzZXRZIiwidHJhbnNmb3JtVmFsdWVzIiwic3BsaXQiLCJwYXJzZUludCIsImxlZnQiLCJ3aWR0aCIsInRvcCIsImhlaWdodCIsInN0eWxlIiwid2Via2l0VHJhbnNmb3JtIiwiU2xpZGUiLCJtb3VudGVkIiwidHJhbnNpdGlvbiIsImhhbmRsZVJlc2l6ZSIsImluIiwiZmluZERPTU5vZGUiLCJoYW5kbGVFbnRlciIsIm9uRW50ZXIiLCJoYW5kbGVFbnRlcmluZyIsInRoZW1lIiwidHJhbnNpdGlvblByb3BzIiwibW9kZSIsIndlYmtpdFRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImVhc2luZyIsImVhc2VPdXQiLCJvbkVudGVyaW5nIiwiaGFuZGxlRXhpdCIsInNoYXJwIiwib25FeGl0IiwiaGFuZGxlRXhpdGVkIiwib25FeGl0ZWQiLCJ1cGRhdGVQb3NpdGlvbiIsInByZXZQcm9wcyIsImNhbmNlbCIsInZpc2liaWxpdHkiLCJjaGlsZHJlbiIsInN0eWxlUHJvcCIsIm90aGVyIiwiaXNWYWxpZEVsZW1lbnQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJlbGVtZW50IiwiZnVuYyIsIm9uZU9mIiwiYm9vbCIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJ0aW1lb3V0IiwibnVtYmVyIiwic2hhcGUiLCJlbnRlciIsImV4aXQiLCJkZWZhdWx0UHJvcHMiLCJlbnRlcmluZ1NjcmVlbiIsImxl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QUZVLENBQXJCOztrQkFRZSwyQkFBWSxxQ0FBUy9DLEtBQVQsQ0FBWixDIiwiZmlsZSI6IlNsaWRlLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3JtY3F1ZW4vc2x0LXVpL21hdGVyaWFsLXVpIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGluaGVyaXRlZENvbXBvbmVudCBUcmFuc2l0aW9uXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgRXZlbnRMaXN0ZW5lciBmcm9tICdyZWFjdC1ldmVudC1saXN0ZW5lcic7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoL2RlYm91bmNlJztcbmltcG9ydCBUcmFuc2l0aW9uIGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvbic7XG5pbXBvcnQgb3duZXJXaW5kb3cgZnJvbSAnZG9tLWhlbHBlcnMvb3duZXJXaW5kb3cnO1xuaW1wb3J0IHBvbHlmaWxsIGZyb20gJ3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0JztcbmltcG9ydCB3aXRoVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3dpdGhUaGVtZSc7XG5pbXBvcnQgeyBkdXJhdGlvbiB9IGZyb20gJy4uL3N0eWxlcy90cmFuc2l0aW9ucyc7XG5pbXBvcnQgeyByZWZsb3csIGdldFRyYW5zaXRpb25Qcm9wcyB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBHVVRURVIgPSAyNDtcblxuLy8gVHJhbnNsYXRlIHRoZSBub2RlIHNvIGhlIGNhbid0IGJlIHNlZW4gb24gdGhlIHNjcmVlbi5cbi8vIExhdGVyLCB3ZSBnb25uYSB0cmFuc2xhdGUgYmFjayB0aGUgbm9kZSB0byBoaXMgb3JpZ2luYWwgbG9jYXRpb25cbi8vIHdpdGggYHRyYW5zbGF0ZTNkKDAsIDAsIDApYC5gXG5mdW5jdGlvbiBnZXRUcmFuc2xhdGVWYWx1ZShwcm9wcywgbm9kZSkge1xuICBjb25zdCB7IGRpcmVjdGlvbiB9ID0gcHJvcHM7XG4gIGNvbnN0IHJlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gIGxldCB0cmFuc2Zvcm07XG5cbiAgaWYgKG5vZGUuZmFrZVRyYW5zZm9ybSkge1xuICAgIHRyYW5zZm9ybSA9IG5vZGUuZmFrZVRyYW5zZm9ybTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gb3duZXJXaW5kb3cobm9kZSkuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICB0cmFuc2Zvcm0gPVxuICAgICAgY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCctd2Via2l0LXRyYW5zZm9ybScpIHx8XG4gICAgICBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RyYW5zZm9ybScpO1xuICB9XG5cbiAgbGV0IG9mZnNldFggPSAwO1xuICBsZXQgb2Zmc2V0WSA9IDA7XG5cbiAgaWYgKHRyYW5zZm9ybSAmJiB0cmFuc2Zvcm0gIT09ICdub25lJyAmJiB0eXBlb2YgdHJhbnNmb3JtID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IHRyYW5zZm9ybVZhbHVlcyA9IHRyYW5zZm9ybVxuICAgICAgLnNwbGl0KCcoJylbMV1cbiAgICAgIC5zcGxpdCgnKScpWzBdXG4gICAgICAuc3BsaXQoJywnKTtcbiAgICBvZmZzZXRYID0gcGFyc2VJbnQodHJhbnNmb3JtVmFsdWVzWzRdLCAxMCk7XG4gICAgb2Zmc2V0WSA9IHBhcnNlSW50KHRyYW5zZm9ybVZhbHVlc1s1XSwgMTApO1xuICB9XG5cbiAgaWYgKGRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgcmV0dXJuIGB0cmFuc2xhdGVYKDEwMHZ3KSB0cmFuc2xhdGVYKC0ke3JlY3QubGVmdCAtIG9mZnNldFh9cHgpYDtcbiAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcbiAgICByZXR1cm4gYHRyYW5zbGF0ZVgoLSR7cmVjdC5sZWZ0ICsgcmVjdC53aWR0aCArIEdVVFRFUiAtIG9mZnNldFh9cHgpYDtcbiAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICd1cCcpIHtcbiAgICByZXR1cm4gYHRyYW5zbGF0ZVkoMTAwdmgpIHRyYW5zbGF0ZVkoLSR7cmVjdC50b3AgLSBvZmZzZXRZfXB4KWA7XG4gIH1cblxuICAvLyBkaXJlY3Rpb24gPT09ICdkb3duJ1xuICByZXR1cm4gYHRyYW5zbGF0ZVkoLSR7cmVjdC50b3AgKyByZWN0LmhlaWdodCArIEdVVFRFUiAtIG9mZnNldFl9cHgpYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRyYW5zbGF0ZVZhbHVlKHByb3BzLCBub2RlKSB7XG4gIGNvbnN0IHRyYW5zZm9ybSA9IGdldFRyYW5zbGF0ZVZhbHVlKHByb3BzLCBub2RlKTtcblxuICBpZiAodHJhbnNmb3JtKSB7XG4gICAgbm9kZS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgbm9kZS5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgU2xpZGUgdHJhbnNpdGlvbiBpcyB1c2VkIGJ5IHRoZSBbU25hY2tiYXJdKC9kZW1vcy9zbmFja2JhcnMpIGNvbXBvbmVudC5cbiAqIEl0IHVzZXMgW3JlYWN0LXRyYW5zaXRpb24tZ3JvdXBdKGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXApIGludGVybmFsbHkuXG4gKi9cbmNsYXNzIFNsaWRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gc3RhdGUubW91bnRlZCBoYW5kbGUgU1NSLCBvbmNlIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZCwgd2UgbmVlZFxuICAgIC8vIHRvIHByb3Blcmx5IGhpZGUgaXQuXG4gICAgaWYgKCF0aGlzLnByb3BzLmluKSB7XG4gICAgICAvLyBXZSBuZWVkIHRvIHNldCBpbml0aWFsIHRyYW5zbGF0ZSB2YWx1ZXMgb2YgdHJhbnNpdGlvbiBlbGVtZW50XG4gICAgICAvLyBvdGhlcndpc2UgY29tcG9uZW50IHdpbGwgYmUgc2hvd24gd2hlbiBpbj1mYWxzZS5cbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcbiAgICB9XG5cbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmIChwcmV2UHJvcHMuZGlyZWN0aW9uICE9PSB0aGlzLnByb3BzLmRpcmVjdGlvbiAmJiAhdGhpcy5wcm9wcy5pbikge1xuICAgICAgLy8gV2UgbmVlZCB0byB1cGRhdGUgdGhlIHBvc2l0aW9uIG9mIHRoZSBkcmF3ZXIgd2hlbiB0aGUgZGlyZWN0aW9uIGNoYW5nZSBhbmRcbiAgICAgIC8vIHdoZW4gaXQncyBoaWRkZW4uXG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5oYW5kbGVSZXNpemUuY2FuY2VsKCk7XG4gIH1cblxuICBtb3VudGVkID0gZmFsc2U7XG4gIHRyYW5zaXRpb24gPSBudWxsO1xuXG4gIHVwZGF0ZVBvc2l0aW9uKCkge1xuICAgIGNvbnN0IG5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnRyYW5zaXRpb24pO1xuICAgIGlmIChub2RlKSB7XG4gICAgICBub2RlLnN0eWxlLnZpc2liaWxpdHkgPSAnaW5oZXJpdCc7XG4gICAgICBzZXRUcmFuc2xhdGVWYWx1ZSh0aGlzLnByb3BzLCBub2RlKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVSZXNpemUgPSBkZWJvdW5jZSgoKSA9PiB7XG4gICAgLy8gU2tpcCBjb25maWd1cmF0aW9uIHdoZXJlIHRoZSBwb3NpdGlvbiBpcyBzY3JlZW4gc2l6ZSBpbnZhcmlhbnQuXG4gICAgaWYgKHRoaXMucHJvcHMuaW4gfHwgdGhpcy5wcm9wcy5kaXJlY3Rpb24gPT09ICdkb3duJyB8fCB0aGlzLnByb3BzLmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnRyYW5zaXRpb24pO1xuICAgIGlmIChub2RlKSB7XG4gICAgICBzZXRUcmFuc2xhdGVWYWx1ZSh0aGlzLnByb3BzLCBub2RlKTtcbiAgICB9XG4gIH0sIDE2Nik7IC8vIENvcnJlc3BvbmRzIHRvIDEwIGZyYW1lcyBhdCA2MCBIei5cblxuICBoYW5kbGVFbnRlciA9IG5vZGUgPT4ge1xuICAgIHNldFRyYW5zbGF0ZVZhbHVlKHRoaXMucHJvcHMsIG5vZGUpO1xuICAgIHJlZmxvdyhub2RlKTtcblxuICAgIGlmICh0aGlzLnByb3BzLm9uRW50ZXIpIHtcbiAgICAgIHRoaXMucHJvcHMub25FbnRlcihub2RlKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlRW50ZXJpbmcgPSBub2RlID0+IHtcbiAgICBjb25zdCB7IHRoZW1lIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgdHJhbnNpdGlvblByb3BzID0gZ2V0VHJhbnNpdGlvblByb3BzKHRoaXMucHJvcHMsIHtcbiAgICAgIG1vZGU6ICdlbnRlcicsXG4gICAgfSk7XG4gICAgbm9kZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uID0gdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCctd2Via2l0LXRyYW5zZm9ybScsIHtcbiAgICAgIC4uLnRyYW5zaXRpb25Qcm9wcyxcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLmVhc2VPdXQsXG4gICAgfSk7XG4gICAgbm9kZS5zdHlsZS50cmFuc2l0aW9uID0gdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd0cmFuc2Zvcm0nLCB7XG4gICAgICAuLi50cmFuc2l0aW9uUHJvcHMsXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5lYXNlT3V0LFxuICAgIH0pO1xuICAgIG5vZGUuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgwLCAwKSc7XG4gICAgbm9kZS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKDAsIDApJztcbiAgICBpZiAodGhpcy5wcm9wcy5vbkVudGVyaW5nKSB7XG4gICAgICB0aGlzLnByb3BzLm9uRW50ZXJpbmcobm9kZSk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUV4aXQgPSBub2RlID0+IHtcbiAgICBjb25zdCB7IHRoZW1lIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgdHJhbnNpdGlvblByb3BzID0gZ2V0VHJhbnNpdGlvblByb3BzKHRoaXMucHJvcHMsIHtcbiAgICAgIG1vZGU6ICdleGl0JyxcbiAgICB9KTtcbiAgICBub2RlLnN0eWxlLndlYmtpdFRyYW5zaXRpb24gPSB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJy13ZWJraXQtdHJhbnNmb3JtJywge1xuICAgICAgLi4udHJhbnNpdGlvblByb3BzLFxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXG4gICAgfSk7XG4gICAgbm9kZS5zdHlsZS50cmFuc2l0aW9uID0gdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd0cmFuc2Zvcm0nLCB7XG4gICAgICAuLi50cmFuc2l0aW9uUHJvcHMsXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcbiAgICB9KTtcbiAgICBzZXRUcmFuc2xhdGVWYWx1ZSh0aGlzLnByb3BzLCBub2RlKTtcblxuICAgIGlmICh0aGlzLnByb3BzLm9uRXhpdCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkV4aXQobm9kZSk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUV4aXRlZCA9IG5vZGUgPT4ge1xuICAgIC8vIE5vIG5lZWQgZm9yIHRyYW5zaXRpb25zIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBoaWRkZW5cbiAgICBub2RlLnN0eWxlLndlYmtpdFRyYW5zaXRpb24gPSAnJztcbiAgICBub2RlLnN0eWxlLnRyYW5zaXRpb24gPSAnJztcblxuICAgIGlmICh0aGlzLnByb3BzLm9uRXhpdGVkKSB7XG4gICAgICB0aGlzLnByb3BzLm9uRXhpdGVkKG5vZGUpO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBvbkVudGVyLFxuICAgICAgb25FbnRlcmluZyxcbiAgICAgIG9uRXhpdCxcbiAgICAgIG9uRXhpdGVkLFxuICAgICAgc3R5bGU6IHN0eWxlUHJvcCxcbiAgICAgIHRoZW1lLFxuICAgICAgLi4ub3RoZXJcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBzdHlsZSA9IHt9O1xuXG4gICAgLy8gV2UgdXNlIHRoaXMgc3RhdGUgdG8gaGFuZGxlIHRoZSBzZXJ2ZXItc2lkZSByZW5kZXJpbmcuXG4gICAgLy8gV2UgZG9uJ3Qga25vdyB0aGUgd2lkdGggb2YgdGhlIGNoaWxkcmVuIGFoZWFkIG9mIHRpbWUuXG4gICAgLy8gV2UgbmVlZCB0byByZW5kZXIgaXQuXG4gICAgaWYgKCF0aGlzLnByb3BzLmluICYmICF0aGlzLm1vdW50ZWQpIHtcbiAgICAgIHN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICB9XG5cbiAgICBzdHlsZSA9IHtcbiAgICAgIC4uLnN0eWxlLFxuICAgICAgLi4uc3R5bGVQcm9wLFxuICAgICAgLi4uKFJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSA/IGNoaWxkcmVuLnByb3BzLnN0eWxlIDoge30pLFxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEV2ZW50TGlzdGVuZXIgdGFyZ2V0PVwid2luZG93XCIgb25SZXNpemU9e3RoaXMuaGFuZGxlUmVzaXplfT5cbiAgICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgICBvbkVudGVyPXt0aGlzLmhhbmRsZUVudGVyfVxuICAgICAgICAgIG9uRW50ZXJpbmc9e3RoaXMuaGFuZGxlRW50ZXJpbmd9XG4gICAgICAgICAgb25FeGl0PXt0aGlzLmhhbmRsZUV4aXR9XG4gICAgICAgICAgb25FeGl0ZWQ9e3RoaXMuaGFuZGxlRXhpdGVkfVxuICAgICAgICAgIGFwcGVhclxuICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICByZWY9e25vZGUgPT4ge1xuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gbm9kZTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi5vdGhlcn1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAgPC9FdmVudExpc3RlbmVyPlxuICAgICk7XG4gIH1cbn1cblxuU2xpZGUucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQSBzaW5nbGUgY2hpbGQgY29udGVudCBlbGVtZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuZnVuY10pLFxuICAvKipcbiAgICogRGlyZWN0aW9uIHRoZSBjaGlsZCBub2RlIHdpbGwgZW50ZXIgZnJvbS5cbiAgICovXG4gIGRpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCcsICd1cCcsICdkb3duJ10pLFxuICAvKipcbiAgICogSWYgYHRydWVgLCBzaG93IHRoZSBjb21wb25lbnQ7IHRyaWdnZXJzIHRoZSBlbnRlciBvciBleGl0IGFuaW1hdGlvbi5cbiAgICovXG4gIGluOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25FbnRlcmluZzogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25FeGl0ZWQ6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogVGhlIGR1cmF0aW9uIGZvciB0aGUgdHJhbnNpdGlvbiwgaW4gbWlsbGlzZWNvbmRzLlxuICAgKiBZb3UgbWF5IHNwZWNpZnkgYSBzaW5nbGUgdGltZW91dCBmb3IgYWxsIHRyYW5zaXRpb25zLCBvciBpbmRpdmlkdWFsbHkgd2l0aCBhbiBvYmplY3QuXG4gICAqL1xuICB0aW1lb3V0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5zaGFwZSh7IGVudGVyOiBQcm9wVHlwZXMubnVtYmVyLCBleGl0OiBQcm9wVHlwZXMubnVtYmVyIH0pLFxuICBdKSxcbn07XG5cblNsaWRlLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlyZWN0aW9uOiAnZG93bicsXG4gIHRpbWVvdXQ6IHtcbiAgICBlbnRlcjogZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXG4gICAgZXhpdDogZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZSgpKHBvbHlmaWxsKFNsaWRlKSk7XG4iXX0=

/***/ }),

/***/ 305:
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

var _Typography = __webpack_require__(103);

var _Typography2 = _interopRequireDefault(_Typography);

var _colorManipulator = __webpack_require__(106);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // @inheritedComponent Paper

var styles = exports.styles = function styles(theme) {
  var _root;

  var emphasis = theme.palette.type === 'light' ? 0.8 : 0.98;
  var backgroundColor = (0, _colorManipulator.emphasize)(theme.palette.background.default, emphasis);

  return {
    root: (_root = {
      pointerEvents: 'initial',
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor: backgroundColor,
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: '6px ' + theme.spacing.unit * 3 + 'px'
    }, _defineProperty(_root, theme.breakpoints.up('md'), {
      minWidth: 288,
      maxWidth: 568,
      borderRadius: 2
    }), _defineProperty(_root, theme.breakpoints.down('sm'), {
      flexGrow: 1
    }), _root),
    message: {
      padding: theme.spacing.unit + 'px 0'
    },
    action: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 'auto',
      paddingLeft: theme.spacing.unit * 3,
      marginRight: -theme.spacing.unit
    }
  };
};

function SnackbarContent(props) {
  var action = props.action,
      classes = props.classes,
      className = props.className,
      message = props.message,
      other = _objectWithoutProperties(props, ['action', 'classes', 'className', 'message']);

  return _react2.default.createElement(
    _Paper2.default,
    _extends({
      component: _Typography2.default,
      headlineMapping: {
        body1: 'div'
      },
      role: 'alertdialog',
      square: true,
      elevation: 6,
      className: (0, _classnames2.default)(classes.root, className)
    }, other),
    _react2.default.createElement(
      'div',
      { className: classes.message },
      message
    ),
    action ? _react2.default.createElement(
      'div',
      { className: classes.action },
      action
    ) : null
  );
}

SnackbarContent.propTypes = {
  /**
   * The action to display.
   */
  action: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The message to display.
   */
  message: _propTypes2.default.node
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiSnackbarContent' })(SnackbarContent);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcU25hY2tiYXJcXFNuYWNrYmFyQ29udGVudC5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJlbXBoYXNpcyIsInRoZW1lIiwicGFsZXR0ZSIsInR5cGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdCIsInJvb3QiLCJwb2ludGVyRXZlbnRzIiwiY29sb3IiLCJnZXRDb250cmFzdFRleHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZsZXhXcmFwIiwicGFkZGluZyIsInNwYWNpbmciLCJ1bml0IiwiYnJlYWtwb2ludHMiLCJ1cCIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJib3JkZXJSYWRpdXMiLCJkb3duIiwiZmxleEdyb3ciLCJtZXNzYWdlIiwiYWN0aW9uIiwibWFyZ2luTGVmdCIsInBhZGRpbmdMZWZ0IiwibWFyZ2luUmlnaHQiLCJTbmFja2JhckNvbnRlbnQiLCJwcm9wcyIsImNsYXNzZXMiLCJjbGFzc05hbWUiLCJvdGhlciIsImJvZHkxIiwicHJvcFR5cGVzIiwibm9kZSIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tOQVJBOztBQVVPLElBQU1BLDBCQUFTLFNBQVRBLE1BQVMsUUFBUztBQUFBOztBQUM3QixNQUFNQyxXQUFXQyxNQUFNQyxPQUFOLENBQWNDLElBQWQsS0FBdUIsT0FBdkIsR0FBaUMsR0FBakMsR0FBdUMsSUFBeEQ7QUFDQSxNQUFNQyxrQkFBa0IsaUNBQVVILE1BQU1DLE9BQU4sQ0FBY0csVUFBZCxDQUF5QkMsT0FBbkMsRUFBNENOLFFBQTVDLENBQXhCOztBQUVBLFNBQU87QUFDTE87QUFDRUMscUJBQWUsU0FEakI7QUFFRUMsYUFBT1IsTUFBTUMsT0FBTixDQUFjUSxlQUFkLENBQThCTixlQUE5QixDQUZUO0FBR0VBLHNDQUhGO0FBSUVPLGVBQVMsTUFKWDtBQUtFQyxrQkFBWSxRQUxkO0FBTUVDLGdCQUFVLE1BTlo7QUFPRUMsd0JBQWdCYixNQUFNYyxPQUFOLENBQWNDLElBQWQsR0FBcUIsQ0FBckM7QUFQRiw4QkFRR2YsTUFBTWdCLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBUkgsRUFRZ0M7QUFDNUJDLGdCQUFVLEdBRGtCO0FBRTVCQyxnQkFBVSxHQUZrQjtBQUc1QkMsb0JBQWM7QUFIYyxLQVJoQywwQkFhR3BCLE1BQU1nQixXQUFOLENBQWtCSyxJQUFsQixDQUF1QixJQUF2QixDQWJILEVBYWtDO0FBQzlCQyxnQkFBVTtBQURvQixLQWJsQyxTQURLO0FBa0JMQyxhQUFTO0FBQ1BWLGVBQVliLE1BQU1jLE9BQU4sQ0FBY0MsSUFBMUI7QUFETyxLQWxCSjtBQXFCTFMsWUFBUTtBQUNOZCxlQUFTLE1BREg7QUFFTkMsa0JBQVksUUFGTjtBQUdOYyxrQkFBWSxNQUhOO0FBSU5DLG1CQUFhMUIsTUFBTWMsT0FBTixDQUFjQyxJQUFkLEdBQXFCLENBSjVCO0FBS05ZLG1CQUFhLENBQUMzQixNQUFNYyxPQUFOLENBQWNDO0FBTHRCO0FBckJILEdBQVA7QUE2QkQsQ0FqQ007O0FBbUNQLFNBQVNhLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQWdDO0FBQUEsTUFDdEJMLE1BRHNCLEdBQzRCSyxLQUQ1QixDQUN0QkwsTUFEc0I7QUFBQSxNQUNkTSxPQURjLEdBQzRCRCxLQUQ1QixDQUNkQyxPQURjO0FBQUEsTUFDTEMsU0FESyxHQUM0QkYsS0FENUIsQ0FDTEUsU0FESztBQUFBLE1BQ01SLE9BRE4sR0FDNEJNLEtBRDVCLENBQ01OLE9BRE47QUFBQSxNQUNrQlMsS0FEbEIsNEJBQzRCSCxLQUQ1Qjs7QUFHOUIsU0FDRTtBQUFBO0FBQUE7QUFDRSxxQ0FERjtBQUVFLHVCQUFpQjtBQUNmSSxlQUFPO0FBRFEsT0FGbkI7QUFLRSxZQUFLLGFBTFA7QUFNRSxrQkFORjtBQU9FLGlCQUFXLENBUGI7QUFRRSxpQkFBVywwQkFBV0gsUUFBUXhCLElBQW5CLEVBQXlCeUIsU0FBekI7QUFSYixPQVNNQyxLQVROO0FBV0U7QUFBQTtBQUFBLFFBQUssV0FBV0YsUUFBUVAsT0FBeEI7QUFBa0NBO0FBQWxDLEtBWEY7QUFZR0MsYUFBUztBQUFBO0FBQUEsUUFBSyxXQUFXTSxRQUFRTixNQUF4QjtBQUFpQ0E7QUFBakMsS0FBVCxHQUEwRDtBQVo3RCxHQURGO0FBZ0JEOztBQUVESSxnQkFBZ0JNLFNBQWhCLEdBQTRCO0FBQzFCOzs7QUFHQVYsVUFBUSxvQkFBVVcsSUFKUTtBQUsxQjs7O0FBR0FMLFdBQVMsb0JBQVVNLE1BQVYsQ0FBaUJDLFVBUkE7QUFTMUI7OztBQUdBTixhQUFXLG9CQUFVTyxNQVpLO0FBYTFCOzs7QUFHQWYsV0FBUyxvQkFBVVk7QUFoQk8sQ0FBNUI7O2tCQW1CZSwwQkFBV3JDLE1BQVgsRUFBbUIsRUFBRXlDLE1BQU0sb0JBQVIsRUFBbkIsRUFBbURYLGVBQW5ELEMiLCJmaWxlIjoiU25hY2tiYXJDb250ZW50LmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3JtY3F1ZW4vc2x0LXVpL21hdGVyaWFsLXVpIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGluaGVyaXRlZENvbXBvbmVudCBQYXBlclxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IFBhcGVyIGZyb20gJy4uL1BhcGVyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJy4uL1R5cG9ncmFwaHknO1xuaW1wb3J0IHsgZW1waGFzaXplIH0gZnJvbSAnLi4vc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3InO1xuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4ge1xuICBjb25zdCBlbXBoYXNpcyA9IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/IDAuOCA6IDAuOTg7XG4gIGNvbnN0IGJhY2tncm91bmRDb2xvciA9IGVtcGhhc2l6ZSh0aGVtZS5wYWxldHRlLmJhY2tncm91bmQuZGVmYXVsdCwgZW1waGFzaXMpO1xuXG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgcG9pbnRlckV2ZW50czogJ2luaXRpYWwnLFxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZ2V0Q29udHJhc3RUZXh0KGJhY2tncm91bmRDb2xvciksXG4gICAgICBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgICBwYWRkaW5nOiBgNnB4ICR7dGhlbWUuc3BhY2luZy51bml0ICogM31weGAsXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICAgIG1pbldpZHRoOiAyODgsXG4gICAgICAgIG1heFdpZHRoOiA1NjgsXG4gICAgICAgIGJvcmRlclJhZGl1czogMixcbiAgICAgIH0sXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICB9LFxuICAgIH0sXG4gICAgbWVzc2FnZToge1xuICAgICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZy51bml0fXB4IDBgLFxuICAgIH0sXG4gICAgYWN0aW9uOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAzLFxuICAgICAgbWFyZ2luUmlnaHQ6IC10aGVtZS5zcGFjaW5nLnVuaXQsXG4gICAgfSxcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIFNuYWNrYmFyQ29udGVudChwcm9wcykge1xuICBjb25zdCB7IGFjdGlvbiwgY2xhc3NlcywgY2xhc3NOYW1lLCBtZXNzYWdlLCAuLi5vdGhlciB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFwZXJcbiAgICAgIGNvbXBvbmVudD17VHlwb2dyYXBoeX1cbiAgICAgIGhlYWRsaW5lTWFwcGluZz17e1xuICAgICAgICBib2R5MTogJ2RpdicsXG4gICAgICB9fVxuICAgICAgcm9sZT1cImFsZXJ0ZGlhbG9nXCJcbiAgICAgIHNxdWFyZVxuICAgICAgZWxldmF0aW9uPXs2fVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX1cbiAgICAgIHsuLi5vdGhlcn1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tZXNzYWdlfT57bWVzc2FnZX08L2Rpdj5cbiAgICAgIHthY3Rpb24gPyA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb259PnthY3Rpb259PC9kaXY+IDogbnVsbH1cbiAgICA8L1BhcGVyPlxuICApO1xufVxuXG5TbmFja2JhckNvbnRlbnQucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlIGFjdGlvbiB0byBkaXNwbGF5LlxuICAgKi9cbiAgYWN0aW9uOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIFVzZWZ1bCB0byBleHRlbmQgdGhlIHN0eWxlIGFwcGxpZWQgdG8gY29tcG9uZW50cy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIFRoZSBtZXNzYWdlIHRvIGRpc3BsYXkuXG4gICAqL1xuICBtZXNzYWdlOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7IG5hbWU6ICdNdWlTbmFja2JhckNvbnRlbnQnIH0pKFNuYWNrYmFyQ29udGVudCk7XG4iXX0=

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(23);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactEventListener = __webpack_require__(59);

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _reactLifecyclesCompat = __webpack_require__(109);

var _reactLifecyclesCompat2 = _interopRequireDefault(_reactLifecyclesCompat);

var _withStyles = __webpack_require__(18);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _transitions = __webpack_require__(99);

var _ClickAwayListener = __webpack_require__(118);

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

var _helpers = __webpack_require__(97);

var _Slide = __webpack_require__(290);

var _Slide2 = _interopRequireDefault(_Slide);

var _SnackbarContent = __webpack_require__(305);

var _SnackbarContent2 = _interopRequireDefault(_SnackbarContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    anchorOriginTopCenter: _extends({}, top, _defineProperty({}, theme.breakpoints.up('md'), _extends({}, center))),
    anchorOriginBottomCenter: _extends({}, bottom, _defineProperty({}, theme.breakpoints.up('md'), _extends({}, center))),
    anchorOriginTopRight: _extends({}, top, right, _defineProperty({}, theme.breakpoints.up('md'), _extends({
      left: 'auto'
    }, topSpace, rightSpace))),
    anchorOriginBottomRight: _extends({}, bottom, right, _defineProperty({}, theme.breakpoints.up('md'), _extends({
      left: 'auto'
    }, bottomSpace, rightSpace))),
    anchorOriginTopLeft: _extends({}, top, left, _defineProperty({}, theme.breakpoints.up('md'), _extends({
      right: 'auto'
    }, topSpace, leftSpace))),
    anchorOriginBottomLeft: _extends({}, bottom, left, _defineProperty({}, theme.breakpoints.up('md'), _extends({
      right: 'auto'
    }, bottomSpace, leftSpace)))
  };
};

var Snackbar = function (_React$Component) {
  _inherits(Snackbar, _React$Component);

  function Snackbar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Snackbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Snackbar.__proto__ || Object.getPrototypeOf(Snackbar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.timerAutoHide = null, _this.handleMouseEnter = function (event) {
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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Snackbar, [{
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
          other = _objectWithoutProperties(_props, ['action', 'anchorOrigin', 'autoHideDuration', 'children', 'classes', 'className', 'disableWindowBlurListener', 'message', 'onClose', 'onEnter', 'onEntered', 'onEntering', 'onExit', 'onExited', 'onExiting', 'onMouseEnter', 'onMouseLeave', 'open', 'resumeHideDuration', 'SnackbarContentProps', 'transition', 'transitionDuration']);

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
          _extends({
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
            _extends({
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
            children || _react2.default.createElement(_SnackbarContent2.default, _extends({ message: message, action: action }, SnackbarContentProps))
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

Snackbar.propTypes = {
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
};

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

exports.default = (0, _withStyles2.default)(styles, { flip: false, name: 'MuiSnackbar' })((0, _reactLifecyclesCompat2.default)(Snackbar));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcU25hY2tiYXJcXFNuYWNrYmFyLmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsImd1dHRlciIsInRoZW1lIiwic3BhY2luZyIsInVuaXQiLCJ0b3AiLCJib3R0b20iLCJyaWdodCIsImp1c3RpZnlDb250ZW50IiwibGVmdCIsInRvcFNwYWNlIiwiYm90dG9tU3BhY2UiLCJyaWdodFNwYWNlIiwibGVmdFNwYWNlIiwiY2VudGVyIiwidHJhbnNmb3JtIiwicm9vdCIsInpJbmRleCIsInNuYWNrYmFyIiwicG9zaXRpb24iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImFuY2hvck9yaWdpblRvcENlbnRlciIsImJyZWFrcG9pbnRzIiwidXAiLCJhbmNob3JPcmlnaW5Cb3R0b21DZW50ZXIiLCJhbmNob3JPcmlnaW5Ub3BSaWdodCIsImFuY2hvck9yaWdpbkJvdHRvbVJpZ2h0IiwiYW5jaG9yT3JpZ2luVG9wTGVmdCIsImFuY2hvck9yaWdpbkJvdHRvbUxlZnQiLCJTbmFja2JhciIsInN0YXRlIiwidGltZXJBdXRvSGlkZSIsImhhbmRsZU1vdXNlRW50ZXIiLCJldmVudCIsInByb3BzIiwib25Nb3VzZUVudGVyIiwiaGFuZGxlUGF1c2UiLCJoYW5kbGVNb3VzZUxlYXZlIiwib25Nb3VzZUxlYXZlIiwiaGFuZGxlUmVzdW1lIiwiaGFuZGxlQ2xpY2tBd2F5Iiwib25DbG9zZSIsImNsZWFyVGltZW91dCIsImF1dG9IaWRlRHVyYXRpb24iLCJyZXN1bWVIaWRlRHVyYXRpb24iLCJ1bmRlZmluZWQiLCJzZXRBdXRvSGlkZVRpbWVyIiwiaGFuZGxlRXhpdGVkIiwic2V0U3RhdGUiLCJleGl0ZWQiLCJvcGVuIiwicHJldlByb3BzIiwic2V0VGltZW91dCIsImFjdGlvbiIsImFuY2hvck9yaWdpbiIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsImNoaWxkcmVuIiwiY2xhc3NlcyIsImNsYXNzTmFtZSIsImRpc2FibGVXaW5kb3dCbHVyTGlzdGVuZXIiLCJtZXNzYWdlIiwib25FbnRlciIsIm9uRW50ZXJlZCIsIm9uRW50ZXJpbmciLCJvbkV4aXQiLCJvbkV4aXRlZCIsIm9uRXhpdGluZyIsIlNuYWNrYmFyQ29udGVudFByb3BzIiwiVHJhbnNpdGlvblByb3AiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwib3RoZXIiLCJ0cmFuc2l0aW9uUHJvcHMiLCJkaXJlY3Rpb24iLCJuZXh0UHJvcHMiLCJwcmV2U3RhdGUiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJub2RlIiwic2hhcGUiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJvbmVPZiIsImVsZW1lbnQiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiYm9vbCIsImtleSIsImFueSIsImZ1bmMiLCJlbnRlciIsImV4aXQiLCJkZWZhdWx0UHJvcHMiLCJlbnRlcmluZ1NjcmVlbiIsImxlYXZpbmdTY3JlZW4iLCJmbGlwIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSwwQkFBUyxTQUFUQSxNQUFTLFFBQVM7QUFDN0IsTUFBTUMsU0FBU0MsTUFBTUMsT0FBTixDQUFjQyxJQUFkLEdBQXFCLENBQXBDO0FBQ0EsTUFBTUMsTUFBTSxFQUFFQSxLQUFLLENBQVAsRUFBWjtBQUNBLE1BQU1DLFNBQVMsRUFBRUEsUUFBUSxDQUFWLEVBQWY7QUFDQSxNQUFNQyxRQUFRLEVBQUVDLGdCQUFnQixVQUFsQixFQUFkO0FBQ0EsTUFBTUMsT0FBTyxFQUFFRCxnQkFBZ0IsWUFBbEIsRUFBYjtBQUNBLE1BQU1FLFdBQVcsRUFBRUwsS0FBS0osTUFBUCxFQUFqQjtBQUNBLE1BQU1VLGNBQWMsRUFBRUwsUUFBUUwsTUFBVixFQUFwQjtBQUNBLE1BQU1XLGFBQWEsRUFBRUwsT0FBT04sTUFBVCxFQUFuQjtBQUNBLE1BQU1ZLFlBQVksRUFBRUosTUFBTVIsTUFBUixFQUFsQjtBQUNBLE1BQU1hLFNBQVM7QUFDYkwsVUFBTSxLQURPO0FBRWJGLFdBQU8sTUFGTTtBQUdiUSxlQUFXO0FBSEUsR0FBZjs7QUFNQSxTQUFPO0FBQ0xDLFVBQU07QUFDSkMsY0FBUWYsTUFBTWUsTUFBTixDQUFhQyxRQURqQjtBQUVKQyxnQkFBVSxPQUZOO0FBR0pDLGVBQVMsTUFITDtBQUlKWCxZQUFNLENBSkY7QUFLSkYsYUFBTyxDQUxIO0FBTUpDLHNCQUFnQixRQU5aO0FBT0phLGtCQUFZO0FBUFIsS0FERDtBQVVMQyx3Q0FDS2pCLEdBREwsc0JBRUdILE1BQU1xQixXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUZILGVBR09WLE1BSFAsR0FWSztBQWdCTFcsMkNBQ0tuQixNQURMLHNCQUVHSixNQUFNcUIsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FGSCxlQUdPVixNQUhQLEdBaEJLO0FBc0JMWSx1Q0FDS3JCLEdBREwsRUFFS0UsS0FGTCxzQkFHR0wsTUFBTXFCLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBSEg7QUFJSWYsWUFBTTtBQUpWLE9BS09DLFFBTFAsRUFNT0UsVUFOUCxHQXRCSztBQStCTGUsMENBQ0tyQixNQURMLEVBRUtDLEtBRkwsc0JBR0dMLE1BQU1xQixXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUhIO0FBSUlmLFlBQU07QUFKVixPQUtPRSxXQUxQLEVBTU9DLFVBTlAsR0EvQks7QUF3Q0xnQixzQ0FDS3ZCLEdBREwsRUFFS0ksSUFGTCxzQkFHR1AsTUFBTXFCLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBSEg7QUFJSWpCLGFBQU87QUFKWCxPQUtPRyxRQUxQLEVBTU9HLFNBTlAsR0F4Q0s7QUFpRExnQix5Q0FDS3ZCLE1BREwsRUFFS0csSUFGTCxzQkFHR1AsTUFBTXFCLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBSEg7QUFJSWpCLGFBQU87QUFKWCxPQUtPSSxXQUxQLEVBTU9FLFNBTlA7QUFqREssR0FBUDtBQTJERCxDQTNFTTs7SUE2RURpQixROzs7Ozs7Ozs7Ozs7OzswTEFpQkpDLEssR0FBUSxFLFFBc0NSQyxhLEdBQWdCLEksUUFFaEJDLGdCLEdBQW1CLFVBQUNDLEtBQUQsRUFBK0I7QUFDaEQsVUFBSSxNQUFLQyxLQUFMLENBQVdDLFlBQWYsRUFBNkI7QUFDM0IsY0FBS0QsS0FBTCxDQUFXQyxZQUFYLENBQXdCRixLQUF4QjtBQUNEO0FBQ0QsWUFBS0csV0FBTDtBQUNELEssUUFFREMsZ0IsR0FBbUIsVUFBQ0osS0FBRCxFQUErQjtBQUNoRCxVQUFJLE1BQUtDLEtBQUwsQ0FBV0ksWUFBZixFQUE2QjtBQUMzQixjQUFLSixLQUFMLENBQVdJLFlBQVgsQ0FBd0JMLEtBQXhCO0FBQ0Q7QUFDRCxZQUFLTSxZQUFMO0FBQ0QsSyxRQUVEQyxlLEdBQWtCLFVBQUNQLEtBQUQsRUFBa0I7QUFDbEMsVUFBSSxNQUFLQyxLQUFMLENBQVdPLE9BQWYsRUFBd0I7QUFDdEIsY0FBS1AsS0FBTCxDQUFXTyxPQUFYLENBQW1CUixLQUFuQixFQUEwQixXQUExQjtBQUNEO0FBQ0YsSyxRQUlERyxXLEdBQWMsWUFBTTtBQUNsQk0sbUJBQWEsTUFBS1gsYUFBbEI7QUFDRCxLLFFBSURRLFksR0FBZSxZQUFNO0FBQ25CLFVBQUksTUFBS0wsS0FBTCxDQUFXUyxnQkFBWCxJQUErQixJQUFuQyxFQUF5QztBQUN2QyxZQUFJLE1BQUtULEtBQUwsQ0FBV1Usa0JBQVgsS0FBa0NDLFNBQXRDLEVBQWlEO0FBQy9DLGdCQUFLQyxnQkFBTCxDQUFzQixNQUFLWixLQUFMLENBQVdVLGtCQUFqQztBQUNBO0FBQ0Q7QUFDRCxjQUFLRSxnQkFBTCxDQUFzQixDQUFDLE1BQUtaLEtBQUwsQ0FBV1MsZ0JBQVgsSUFBK0IsQ0FBaEMsSUFBcUMsR0FBM0Q7QUFDRDtBQUNGLEssUUFFREksWSxHQUFlLFlBQU07QUFDbkIsWUFBS0MsUUFBTCxDQUFjLEVBQUVDLFFBQVEsSUFBVixFQUFkO0FBQ0QsSzs7Ozs7d0NBOUVtQjtBQUNsQixVQUFJLEtBQUtmLEtBQUwsQ0FBV2dCLElBQWYsRUFBcUI7QUFDbkIsYUFBS0osZ0JBQUw7QUFDRDtBQUNGOzs7dUNBRWtCSyxTLEVBQVc7QUFDNUIsVUFBSUEsVUFBVUQsSUFBVixLQUFtQixLQUFLaEIsS0FBTCxDQUFXZ0IsSUFBbEMsRUFBd0M7QUFDdEMsWUFBSSxLQUFLaEIsS0FBTCxDQUFXZ0IsSUFBZixFQUFxQjtBQUNuQixlQUFLSixnQkFBTDtBQUNELFNBRkQsTUFFTztBQUNMSix1QkFBYSxLQUFLWCxhQUFsQjtBQUNEO0FBQ0Y7QUFDRjs7OzJDQUVzQjtBQUNyQlcsbUJBQWEsS0FBS1gsYUFBbEI7QUFDRDs7QUFFRDs7Ozt1Q0FDMEM7QUFBQTs7QUFBQSxVQUF6QlksZ0JBQXlCLHVFQUFOLElBQU07O0FBQ3hDLFVBQUksQ0FBQyxLQUFLVCxLQUFMLENBQVdPLE9BQVosSUFBdUIsS0FBS1AsS0FBTCxDQUFXUyxnQkFBWCxJQUErQixJQUExRCxFQUFnRTtBQUM5RDtBQUNEOztBQUVERCxtQkFBYSxLQUFLWCxhQUFsQjtBQUNBLFdBQUtBLGFBQUwsR0FBcUJxQixXQUFXLFlBQU07QUFDcEMsWUFBSSxDQUFDLE9BQUtsQixLQUFMLENBQVdPLE9BQVosSUFBdUIsT0FBS1AsS0FBTCxDQUFXUyxnQkFBWCxJQUErQixJQUExRCxFQUFnRTtBQUM5RDtBQUNEOztBQUVELGVBQUtULEtBQUwsQ0FBV08sT0FBWCxDQUFtQixJQUFuQixFQUF5QixTQUF6QjtBQUNELE9BTm9CLEVBTWxCRSxvQkFBb0IsS0FBS1QsS0FBTCxDQUFXUyxnQkFBL0IsSUFBbUQsQ0FOakMsQ0FBckI7QUFPRDs7QUF3QkQ7QUFDQTs7O0FBS0E7QUFDQTs7Ozs2QkFlUztBQUFBLG1CQXlCSCxLQUFLVCxLQXpCRjtBQUFBLFVBRUxtQixNQUZLLFVBRUxBLE1BRks7QUFBQSx1Q0FHTEMsWUFISztBQUFBLFVBR1dDLFFBSFgsdUJBR1dBLFFBSFg7QUFBQSxVQUdxQkMsVUFIckIsdUJBR3FCQSxVQUhyQjtBQUFBLFVBSUxiLGdCQUpLLFVBSUxBLGdCQUpLO0FBQUEsVUFLTGMsUUFMSyxVQUtMQSxRQUxLO0FBQUEsVUFNTEMsT0FOSyxVQU1MQSxPQU5LO0FBQUEsVUFPTEMsU0FQSyxVQU9MQSxTQVBLO0FBQUEsVUFRTEMseUJBUkssVUFRTEEseUJBUks7QUFBQSxVQVNMQyxPQVRLLFVBU0xBLE9BVEs7QUFBQSxVQVVMcEIsT0FWSyxVQVVMQSxPQVZLO0FBQUEsVUFXTHFCLE9BWEssVUFXTEEsT0FYSztBQUFBLFVBWUxDLFNBWkssVUFZTEEsU0FaSztBQUFBLFVBYUxDLFVBYkssVUFhTEEsVUFiSztBQUFBLFVBY0xDLE1BZEssVUFjTEEsTUFkSztBQUFBLFVBZUxDLFFBZkssVUFlTEEsUUFmSztBQUFBLFVBZ0JMQyxTQWhCSyxVQWdCTEEsU0FoQks7QUFBQSxVQWlCTGhDLFlBakJLLFVBaUJMQSxZQWpCSztBQUFBLFVBa0JMRyxZQWxCSyxVQWtCTEEsWUFsQks7QUFBQSxVQW1CTFksSUFuQkssVUFtQkxBLElBbkJLO0FBQUEsVUFvQkxOLGtCQXBCSyxVQW9CTEEsa0JBcEJLO0FBQUEsVUFxQkx3QixvQkFyQkssVUFxQkxBLG9CQXJCSztBQUFBLFVBc0JPQyxjQXRCUCxVQXNCTEMsVUF0Qks7QUFBQSxVQXVCTEMsa0JBdkJLLFVBdUJMQSxrQkF2Qks7QUFBQSxVQXdCRkMsS0F4QkU7O0FBMkJQOzs7QUFDQSxVQUFJLENBQUN0QixJQUFELElBQVMsS0FBS3BCLEtBQUwsQ0FBV21CLE1BQXhCLEVBQWdDO0FBQzlCLGVBQU8sSUFBUDtBQUNEOztBQUVELFVBQU13QixrQkFBa0IsRUFBeEI7O0FBRUE7QUFDQSxVQUFJSixrQ0FBSixFQUE4QjtBQUM1Qkksd0JBQWdCQyxTQUFoQixHQUE0Qm5CLGFBQWEsS0FBYixHQUFxQixNQUFyQixHQUE4QixJQUExRDtBQUNEOztBQUVELGFBQ0U7QUFBQTtBQUFBLFVBQW1CLGFBQWEsS0FBS2YsZUFBckM7QUFDRTtBQUFBO0FBQUE7QUFDRSx1QkFBVywwQkFDVGtCLFFBQVEzQyxJQURDLEVBRVQyQyx5QkFBdUIseUJBQVdILFFBQVgsQ0FBdkIsR0FBOEMseUJBQVdDLFVBQVgsQ0FBOUMsQ0FGUyxFQUdURyxTQUhTLENBRGI7QUFNRSwwQkFBYyxLQUFLM0IsZ0JBTnJCO0FBT0UsMEJBQWMsS0FBS0s7QUFQckIsYUFRTW1DLEtBUk47QUFVRTtBQUNFLG9CQUFPLFFBRFQ7QUFFRSxxQkFBU1osNEJBQTRCZixTQUE1QixHQUF3QyxLQUFLTixZQUZ4RDtBQUdFLG9CQUFRcUIsNEJBQTRCZixTQUE1QixHQUF3QyxLQUFLVDtBQUh2RCxZQVZGO0FBZUU7QUFBQywwQkFBRDtBQUFBO0FBQ0UsMEJBREY7QUFFRSxvQkFBSWMsSUFGTjtBQUdFLHVCQUFTWSxPQUhYO0FBSUUseUJBQVdDLFNBSmI7QUFLRSwwQkFBWUMsVUFMZDtBQU1FLHNCQUFRQyxNQU5WO0FBT0Usd0JBQVUsb0NBQXNCLEtBQUtsQixZQUEzQixFQUF5Q21CLFFBQXpDLENBUFo7QUFRRSx5QkFBV0MsU0FSYjtBQVNFLHVCQUFTSTtBQVRYLGVBVU1FLGVBVk47QUFZR2hCLHdCQUNDLG9FQUFpQixTQUFTSSxPQUExQixFQUFtQyxRQUFRUixNQUEzQyxJQUF1RGUsb0JBQXZEO0FBYko7QUFmRjtBQURGLE9BREY7QUFvQ0Q7Ozs2Q0E3SytCTyxTLEVBQVdDLFMsRUFBVztBQUNwRCxVQUFJLE9BQU9BLFVBQVUzQixNQUFqQixLQUE0QixXQUFoQyxFQUE2QztBQUMzQyxlQUFPO0FBQ0xBLGtCQUFRLENBQUMwQixVQUFVekI7QUFEZCxTQUFQO0FBR0Q7O0FBRUQsVUFBSXlCLFVBQVV6QixJQUFkLEVBQW9CO0FBQ2xCLGVBQU87QUFDTEQsa0JBQVE7QUFESCxTQUFQO0FBR0Q7O0FBRUQsYUFBTyxJQUFQO0FBQ0Q7Ozs7RUFmb0IsZ0JBQU00QixTOztBQWlMN0JoRCxTQUFTaUQsU0FBVCxHQUFxQjtBQUNuQjs7O0FBR0F6QixVQUFRLG9CQUFVMEIsSUFKQztBQUtuQjs7O0FBR0F6QixnQkFBYyxvQkFBVTBCLEtBQVYsQ0FBZ0I7QUFDNUJ4QixnQkFBWSxvQkFBVXlCLFNBQVYsQ0FBb0IsQ0FDOUIsb0JBQVVDLE1BRG9CLEVBRTlCLG9CQUFVQyxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsT0FBbkIsQ0FBaEIsQ0FGOEIsQ0FBcEIsQ0FEZ0I7QUFLNUI1QixjQUFVLG9CQUFVMEIsU0FBVixDQUFvQixDQUFDLG9CQUFVQyxNQUFYLEVBQW1CLG9CQUFVQyxLQUFWLENBQWdCLENBQUMsS0FBRCxFQUFRLFFBQVIsRUFBa0IsUUFBbEIsQ0FBaEIsQ0FBbkIsQ0FBcEI7QUFMa0IsR0FBaEIsQ0FSSztBQWVuQjs7Ozs7O0FBTUF4QyxvQkFBa0Isb0JBQVV1QyxNQXJCVDtBQXNCbkI7Ozs7QUFJQXpCLFlBQVUsb0JBQVUyQixPQTFCRDtBQTJCbkI7OztBQUdBMUIsV0FBUyxvQkFBVTJCLE1BQVYsQ0FBaUJDLFVBOUJQO0FBK0JuQjs7O0FBR0EzQixhQUFXLG9CQUFVNEIsTUFsQ0Y7QUFtQ25COzs7QUFHQTNCLDZCQUEyQixvQkFBVTRCLElBdENsQjtBQXVDbkI7Ozs7OztBQU1BQyxPQUFLLG9CQUFVQyxHQTdDSTtBQThDbkI7OztBQUdBN0IsV0FBUyxvQkFBVWtCLElBakRBO0FBa0RuQjs7Ozs7Ozs7OztBQVVBdEMsV0FBUyxvQkFBVWtELElBNURBO0FBNkRuQjs7O0FBR0E3QixXQUFTLG9CQUFVNkIsSUFoRUE7QUFpRW5COzs7QUFHQTVCLGFBQVcsb0JBQVU0QixJQXBFRjtBQXFFbkI7OztBQUdBM0IsY0FBWSxvQkFBVTJCLElBeEVIO0FBeUVuQjs7O0FBR0ExQixVQUFRLG9CQUFVMEIsSUE1RUM7QUE2RW5COzs7QUFHQXpCLFlBQVUsb0JBQVV5QixJQWhGRDtBQWlGbkI7OztBQUdBeEIsYUFBVyxvQkFBVXdCLElBcEZGO0FBcUZuQjs7O0FBR0F4RCxnQkFBYyxvQkFBVXdELElBeEZMO0FBeUZuQjs7O0FBR0FyRCxnQkFBYyxvQkFBVXFELElBNUZMO0FBNkZuQjs7O0FBR0F6QyxRQUFNLG9CQUFVc0MsSUFoR0c7QUFpR25COzs7Ozs7QUFNQTVDLHNCQUFvQixvQkFBVXNDLE1BdkdYO0FBd0duQjs7O0FBR0FkLHdCQUFzQixvQkFBVWlCLE1BM0diO0FBNEduQjs7O0FBR0FmLGNBQVksb0JBQVVXLFNBQVYsQ0FBb0IsQ0FBQyxvQkFBVU0sTUFBWCxFQUFtQixvQkFBVUksSUFBN0IsQ0FBcEIsQ0EvR087QUFnSG5COzs7O0FBSUFwQixzQkFBb0Isb0JBQVVVLFNBQVYsQ0FBb0IsQ0FDdEMsb0JBQVVDLE1BRDRCLEVBRXRDLG9CQUFVRixLQUFWLENBQWdCLEVBQUVZLE9BQU8sb0JBQVVWLE1BQW5CLEVBQTJCVyxNQUFNLG9CQUFVWCxNQUEzQyxFQUFoQixDQUZzQyxDQUFwQjtBQXBIRCxDQUFyQjs7QUEwSEFyRCxTQUFTaUUsWUFBVCxHQUF3QjtBQUN0QnhDLGdCQUFjO0FBQ1pDLGNBQVUsUUFERTtBQUVaQyxnQkFBWTtBQUZBLEdBRFE7QUFLdEJJLDZCQUEyQixLQUxMO0FBTXRCVSw2QkFOc0I7QUFPdEJDLHNCQUFvQjtBQUNsQnFCLFdBQU8sc0JBQVNHLGNBREU7QUFFbEJGLFVBQU0sc0JBQVNHO0FBRkc7QUFQRSxDQUF4Qjs7a0JBYWUsMEJBQVdqRyxNQUFYLEVBQW1CLEVBQUVrRyxNQUFNLEtBQVIsRUFBZUMsTUFBTSxhQUFyQixFQUFuQixFQUF5RCxxQ0FBU3JFLFFBQVQsQ0FBekQsQyIsImZpbGUiOiJTbmFja2Jhci5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9ybWNxdWVuL3NsdC11aS9tYXRlcmlhbC11aSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgRXZlbnRMaXN0ZW5lciBmcm9tICdyZWFjdC1ldmVudC1saXN0ZW5lcic7XG5pbXBvcnQgcG9seWZpbGwgZnJvbSAncmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHsgZHVyYXRpb24gfSBmcm9tICcuLi9zdHlsZXMvdHJhbnNpdGlvbnMnO1xuaW1wb3J0IENsaWNrQXdheUxpc3RlbmVyIGZyb20gJy4uL3V0aWxzL0NsaWNrQXdheUxpc3RlbmVyJztcbmltcG9ydCB7IGNhcGl0YWxpemUsIGNyZWF0ZUNoYWluZWRGdW5jdGlvbiB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcnMnO1xuaW1wb3J0IFNsaWRlIGZyb20gJy4uL3RyYW5zaXRpb25zL1NsaWRlJztcbmltcG9ydCBTbmFja2JhckNvbnRlbnQgZnJvbSAnLi9TbmFja2JhckNvbnRlbnQnO1xuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4ge1xuICBjb25zdCBndXR0ZXIgPSB0aGVtZS5zcGFjaW5nLnVuaXQgKiAzO1xuICBjb25zdCB0b3AgPSB7IHRvcDogMCB9O1xuICBjb25zdCBib3R0b20gPSB7IGJvdHRvbTogMCB9O1xuICBjb25zdCByaWdodCA9IHsganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcgfTtcbiAgY29uc3QgbGVmdCA9IHsganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyB9O1xuICBjb25zdCB0b3BTcGFjZSA9IHsgdG9wOiBndXR0ZXIgfTtcbiAgY29uc3QgYm90dG9tU3BhY2UgPSB7IGJvdHRvbTogZ3V0dGVyIH07XG4gIGNvbnN0IHJpZ2h0U3BhY2UgPSB7IHJpZ2h0OiBndXR0ZXIgfTtcbiAgY29uc3QgbGVmdFNwYWNlID0geyBsZWZ0OiBndXR0ZXIgfTtcbiAgY29uc3QgY2VudGVyID0ge1xuICAgIGxlZnQ6ICc1MCUnLFxuICAgIHJpZ2h0OiAnYXV0bycsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKScsXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICByb290OiB7XG4gICAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5zbmFja2JhcixcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgfSxcbiAgICBhbmNob3JPcmlnaW5Ub3BDZW50ZXI6IHtcbiAgICAgIC4uLnRvcCxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgICAgLi4uY2VudGVyLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGFuY2hvck9yaWdpbkJvdHRvbUNlbnRlcjoge1xuICAgICAgLi4uYm90dG9tLFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgICAuLi5jZW50ZXIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYW5jaG9yT3JpZ2luVG9wUmlnaHQ6IHtcbiAgICAgIC4uLnRvcCxcbiAgICAgIC4uLnJpZ2h0LFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgICBsZWZ0OiAnYXV0bycsXG4gICAgICAgIC4uLnRvcFNwYWNlLFxuICAgICAgICAuLi5yaWdodFNwYWNlLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGFuY2hvck9yaWdpbkJvdHRvbVJpZ2h0OiB7XG4gICAgICAuLi5ib3R0b20sXG4gICAgICAuLi5yaWdodCxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgICAgbGVmdDogJ2F1dG8nLFxuICAgICAgICAuLi5ib3R0b21TcGFjZSxcbiAgICAgICAgLi4ucmlnaHRTcGFjZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBhbmNob3JPcmlnaW5Ub3BMZWZ0OiB7XG4gICAgICAuLi50b3AsXG4gICAgICAuLi5sZWZ0LFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgICByaWdodDogJ2F1dG8nLFxuICAgICAgICAuLi50b3BTcGFjZSxcbiAgICAgICAgLi4ubGVmdFNwYWNlLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGFuY2hvck9yaWdpbkJvdHRvbUxlZnQ6IHtcbiAgICAgIC4uLmJvdHRvbSxcbiAgICAgIC4uLmxlZnQsXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICAgIHJpZ2h0OiAnYXV0bycsXG4gICAgICAgIC4uLmJvdHRvbVNwYWNlLFxuICAgICAgICAuLi5sZWZ0U3BhY2UsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59O1xuXG5jbGFzcyBTbmFja2JhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAodHlwZW9mIHByZXZTdGF0ZS5leGl0ZWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBleGl0ZWQ6ICFuZXh0UHJvcHMub3BlbixcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKG5leHRQcm9wcy5vcGVuKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBleGl0ZWQ6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHN0YXRlID0ge307XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub3Blbikge1xuICAgICAgdGhpcy5zZXRBdXRvSGlkZVRpbWVyKCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmIChwcmV2UHJvcHMub3BlbiAhPT0gdGhpcy5wcm9wcy5vcGVuKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vcGVuKSB7XG4gICAgICAgIHRoaXMuc2V0QXV0b0hpZGVUaW1lcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXJBdXRvSGlkZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXJBdXRvSGlkZSk7XG4gIH1cblxuICAvLyBUaW1lciB0aGF0IGNvbnRyb2xzIGRlbGF5IGJlZm9yZSBzbmFja2JhciBhdXRvIGhpZGVzXG4gIHNldEF1dG9IaWRlVGltZXIoYXV0b0hpZGVEdXJhdGlvbiA9IG51bGwpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMub25DbG9zZSB8fCB0aGlzLnByb3BzLmF1dG9IaWRlRHVyYXRpb24gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyQXV0b0hpZGUpO1xuICAgIHRoaXMudGltZXJBdXRvSGlkZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLm9uQ2xvc2UgfHwgdGhpcy5wcm9wcy5hdXRvSGlkZUR1cmF0aW9uID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnByb3BzLm9uQ2xvc2UobnVsbCwgJ3RpbWVvdXQnKTtcbiAgICB9LCBhdXRvSGlkZUR1cmF0aW9uIHx8IHRoaXMucHJvcHMuYXV0b0hpZGVEdXJhdGlvbiB8fCAwKTtcbiAgfVxuXG4gIHRpbWVyQXV0b0hpZGUgPSBudWxsO1xuXG4gIGhhbmRsZU1vdXNlRW50ZXIgPSAoZXZlbnQ6IFN5bnRoZXRpY1VJRXZlbnQ8PikgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9uTW91c2VFbnRlcikge1xuICAgICAgdGhpcy5wcm9wcy5vbk1vdXNlRW50ZXIoZXZlbnQpO1xuICAgIH1cbiAgICB0aGlzLmhhbmRsZVBhdXNlKCk7XG4gIH07XG5cbiAgaGFuZGxlTW91c2VMZWF2ZSA9IChldmVudDogU3ludGhldGljVUlFdmVudDw+KSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25Nb3VzZUxlYXZlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uTW91c2VMZWF2ZShldmVudCk7XG4gICAgfVxuICAgIHRoaXMuaGFuZGxlUmVzdW1lKCk7XG4gIH07XG5cbiAgaGFuZGxlQ2xpY2tBd2F5ID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xvc2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25DbG9zZShldmVudCwgJ2NsaWNrYXdheScpO1xuICAgIH1cbiAgfTtcblxuICAvLyBQYXVzZSB0aGUgdGltZXIgd2hlbiB0aGUgdXNlciBpcyBpbnRlcmFjdGluZyB3aXRoIHRoZSBTbmFja2JhclxuICAvLyBvciB3aGVuIHRoZSB1c2VyIGhpZGUgdGhlIHdpbmRvdy5cbiAgaGFuZGxlUGF1c2UgPSAoKSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXJBdXRvSGlkZSk7XG4gIH07XG5cbiAgLy8gUmVzdGFydCB0aGUgdGltZXIgd2hlbiB0aGUgdXNlciBpcyBubyBsb25nZXIgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgU25hY2tiYXJcbiAgLy8gb3Igd2hlbiB0aGUgd2luZG93IGlzIHNob3duIGJhY2suXG4gIGhhbmRsZVJlc3VtZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5hdXRvSGlkZUR1cmF0aW9uICE9IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnJlc3VtZUhpZGVEdXJhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuc2V0QXV0b0hpZGVUaW1lcih0aGlzLnByb3BzLnJlc3VtZUhpZGVEdXJhdGlvbik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0QXV0b0hpZGVUaW1lcigodGhpcy5wcm9wcy5hdXRvSGlkZUR1cmF0aW9uIHx8IDApICogMC41KTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlRXhpdGVkID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBleGl0ZWQ6IHRydWUgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGFjdGlvbixcbiAgICAgIGFuY2hvck9yaWdpbjogeyB2ZXJ0aWNhbCwgaG9yaXpvbnRhbCB9LFxuICAgICAgYXV0b0hpZGVEdXJhdGlvbixcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGRpc2FibGVXaW5kb3dCbHVyTGlzdGVuZXIsXG4gICAgICBtZXNzYWdlLFxuICAgICAgb25DbG9zZSxcbiAgICAgIG9uRW50ZXIsXG4gICAgICBvbkVudGVyZWQsXG4gICAgICBvbkVudGVyaW5nLFxuICAgICAgb25FeGl0LFxuICAgICAgb25FeGl0ZWQsXG4gICAgICBvbkV4aXRpbmcsXG4gICAgICBvbk1vdXNlRW50ZXIsXG4gICAgICBvbk1vdXNlTGVhdmUsXG4gICAgICBvcGVuLFxuICAgICAgcmVzdW1lSGlkZUR1cmF0aW9uLFxuICAgICAgU25hY2tiYXJDb250ZW50UHJvcHMsXG4gICAgICB0cmFuc2l0aW9uOiBUcmFuc2l0aW9uUHJvcCxcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgIC4uLm90aGVyXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAvLyBTbyB3ZSBvbmx5IHJlbmRlciBhY3RpdmUgc25hY2tiYXJzLlxuICAgIGlmICghb3BlbiAmJiB0aGlzLnN0YXRlLmV4aXRlZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgdHJhbnNpdGlvblByb3BzID0ge307XG5cbiAgICAvLyBUaGUgcHJvdmlkZWQgdHJhbnNpdGlvbiBtaWdodCBub3Qgc3VwcG9ydCB0aGUgZGlyZWN0aW9uIHByb3BlcnR5LlxuICAgIGlmIChUcmFuc2l0aW9uUHJvcCA9PT0gU2xpZGUpIHtcbiAgICAgIHRyYW5zaXRpb25Qcm9wcy5kaXJlY3Rpb24gPSB2ZXJ0aWNhbCA9PT0gJ3RvcCcgPyAnZG93bicgOiAndXAnO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Q2xpY2tBd2F5TGlzdGVuZXIgb25DbGlja0F3YXk9e3RoaXMuaGFuZGxlQ2xpY2tBd2F5fT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgIGNsYXNzZXMucm9vdCxcbiAgICAgICAgICAgIGNsYXNzZXNbYGFuY2hvck9yaWdpbiR7Y2FwaXRhbGl6ZSh2ZXJ0aWNhbCl9JHtjYXBpdGFsaXplKGhvcml6b250YWwpfWBdLFxuICAgICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICAgICl9XG4gICAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZU1vdXNlRW50ZXJ9XG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZU1vdXNlTGVhdmV9XG4gICAgICAgICAgey4uLm90aGVyfVxuICAgICAgICA+XG4gICAgICAgICAgPEV2ZW50TGlzdGVuZXJcbiAgICAgICAgICAgIHRhcmdldD1cIndpbmRvd1wiXG4gICAgICAgICAgICBvbkZvY3VzPXtkaXNhYmxlV2luZG93Qmx1ckxpc3RlbmVyID8gdW5kZWZpbmVkIDogdGhpcy5oYW5kbGVSZXN1bWV9XG4gICAgICAgICAgICBvbkJsdXI9e2Rpc2FibGVXaW5kb3dCbHVyTGlzdGVuZXIgPyB1bmRlZmluZWQgOiB0aGlzLmhhbmRsZVBhdXNlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFRyYW5zaXRpb25Qcm9wXG4gICAgICAgICAgICBhcHBlYXJcbiAgICAgICAgICAgIGluPXtvcGVufVxuICAgICAgICAgICAgb25FbnRlcj17b25FbnRlcn1cbiAgICAgICAgICAgIG9uRW50ZXJlZD17b25FbnRlcmVkfVxuICAgICAgICAgICAgb25FbnRlcmluZz17b25FbnRlcmluZ31cbiAgICAgICAgICAgIG9uRXhpdD17b25FeGl0fVxuICAgICAgICAgICAgb25FeGl0ZWQ9e2NyZWF0ZUNoYWluZWRGdW5jdGlvbih0aGlzLmhhbmRsZUV4aXRlZCwgb25FeGl0ZWQpfVxuICAgICAgICAgICAgb25FeGl0aW5nPXtvbkV4aXRpbmd9XG4gICAgICAgICAgICB0aW1lb3V0PXt0cmFuc2l0aW9uRHVyYXRpb259XG4gICAgICAgICAgICB7Li4udHJhbnNpdGlvblByb3BzfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZHJlbiB8fCAoXG4gICAgICAgICAgICAgIDxTbmFja2JhckNvbnRlbnQgbWVzc2FnZT17bWVzc2FnZX0gYWN0aW9uPXthY3Rpb259IHsuLi5TbmFja2JhckNvbnRlbnRQcm9wc30gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9UcmFuc2l0aW9uUHJvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NsaWNrQXdheUxpc3RlbmVyPlxuICAgICk7XG4gIH1cbn1cblxuU25hY2tiYXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlIGFjdGlvbiB0byBkaXNwbGF5LlxuICAgKi9cbiAgYWN0aW9uOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIFRoZSBhbmNob3Igb2YgdGhlIGBTbmFja2JhcmAuXG4gICAqL1xuICBhbmNob3JPcmlnaW46IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgaG9yaXpvbnRhbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdjZW50ZXInLCAncmlnaHQnXSksXG4gICAgXSksXG4gICAgdmVydGljYWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5vbmVPZihbJ3RvcCcsICdjZW50ZXInLCAnYm90dG9tJ10pXSksXG4gIH0pLFxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCBiZWZvcmUgYXV0b21hdGljYWxseSBjYWxsaW5nIHRoZVxuICAgKiBgb25DbG9zZWAgZnVuY3Rpb24uIGBvbkNsb3NlYCBzaG91bGQgdGhlbiBzZXQgdGhlIHN0YXRlIG9mIHRoZSBgb3BlbmBcbiAgICogcHJvcCB0byBoaWRlIHRoZSBTbmFja2Jhci4gVGhpcyBiZWhhdmlvciBpcyBkaXNhYmxlZCBieSBkZWZhdWx0IHdpdGhcbiAgICogdGhlIGBudWxsYCB2YWx1ZS5cbiAgICovXG4gIGF1dG9IaWRlRHVyYXRpb246IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBJZiB5b3Ugd2lzaCB0aGUgdGFrZSBjb250cm9sIG92ZXIgdGhlIGNoaWxkcmVuIG9mIHRoZSBjb21wb25lbnQgeW91IGNhbiB1c2UgdGhpcyBwcm9wZXJ0eS5cbiAgICogV2hlbiB1c2VkLCB5b3UgcmVwbGFjZSB0aGUgYFNuYWNrYmFyQ29udGVudGAgY29tcG9uZW50IHdpdGggdGhlIGNoaWxkcmVuLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LFxuICAvKipcbiAgICogVXNlZnVsIHRvIGV4dGVuZCB0aGUgc3R5bGUgYXBwbGllZCB0byBjb21wb25lbnRzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYGF1dG9IaWRlRHVyYXRpb25gIHRpbWVyIHdpbGwgZXhwaXJlIGV2ZW4gaWYgdGhlIHdpbmRvdyBpcyBub3QgZm9jdXNlZC5cbiAgICovXG4gIGRpc2FibGVXaW5kb3dCbHVyTGlzdGVuZXI6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICogV2hlbiBkaXNwbGF5aW5nIG11bHRpcGxlIGNvbnNlY3V0aXZlIFNuYWNrYmFycyBmcm9tIGEgcGFyZW50IHJlbmRlcmluZyBhIHNpbmdsZVxuICAgKiA8U25hY2tiYXIvPiwgYWRkIHRoZSBrZXkgcHJvcGVydHkgdG8gZW5zdXJlIGluZGVwZW5kZW50IHRyZWF0bWVudCBvZiBlYWNoIG1lc3NhZ2UuXG4gICAqIGUuZy4gPFNuYWNrYmFyIGtleT17bWVzc2FnZX0gLz4sIG90aGVyd2lzZSwgdGhlIG1lc3NhZ2UgbWF5IHVwZGF0ZS1pbi1wbGFjZSBhbmRcbiAgICogZmVhdHVyZXMgc3VjaCBhcyBhdXRvSGlkZUR1cmF0aW9uIG1heSBiZSBjYW5jZWxlZC5cbiAgICovXG4gIGtleTogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIFRoZSBtZXNzYWdlIHRvIGRpc3BsYXkuXG4gICAqL1xuICBtZXNzYWdlOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNvbXBvbmVudCByZXF1ZXN0cyB0byBiZSBjbG9zZWQuXG4gICAqIFR5cGljYWxseSBgb25DbG9zZWAgaXMgdXNlZCB0byBzZXQgc3RhdGUgaW4gdGhlIHBhcmVudCBjb21wb25lbnQsXG4gICAqIHdoaWNoIGlzIHVzZWQgdG8gY29udHJvbCB0aGUgYFNuYWNrYmFyYCBgb3BlbmAgcHJvcC5cbiAgICogVGhlIGByZWFzb25gIHBhcmFtZXRlciBjYW4gb3B0aW9uYWxseSBiZSB1c2VkIHRvIGNvbnRyb2wgdGhlIHJlc3BvbnNlIHRvIGBvbkNsb3NlYCxcbiAgICogZm9yIGV4YW1wbGUgaWdub3JpbmcgYGNsaWNrYXdheWAuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFja1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVhc29uIENhbiBiZTpgXCJ0aW1lb3V0XCJgIChgYXV0b0hpZGVEdXJhdGlvbmAgZXhwaXJlZCkgb3I6IGBcImNsaWNrYXdheVwiYFxuICAgKi9cbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIHRyYW5zaXRpb24gaXMgZW50ZXJpbmcuXG4gICAqL1xuICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIHRyYW5zaXRpb24gaGFzIGVudGVyZWQuXG4gICAqL1xuICBvbkVudGVyZWQ6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgdHJhbnNpdGlvbiBpcyBlbnRlcmluZy5cbiAgICovXG4gIG9uRW50ZXJpbmc6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSB0cmFuc2l0aW9uIGlzIGV4aXRpbmcuXG4gICAqL1xuICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgdHJhbnNpdGlvbiBoYXMgZXhpdGVkLlxuICAgKi9cbiAgb25FeGl0ZWQ6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgdHJhbnNpdGlvbiBpcyBleGl0aW5nLlxuICAgKi9cbiAgb25FeGl0aW5nOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uTW91c2VFbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbk1vdXNlTGVhdmU6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgYFNuYWNrYmFyYCBpcyBvcGVuLlxuICAgKi9cbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB3YWl0IGJlZm9yZSBkaXNtaXNzaW5nIGFmdGVyIHVzZXIgaW50ZXJhY3Rpb24uXG4gICAqIElmIGBhdXRvSGlkZUR1cmF0aW9uYCBwcm9wZXJ0eSBpc24ndCBzcGVjaWZpZWQsIGl0IGRvZXMgbm90aGluZy5cbiAgICogSWYgYGF1dG9IaWRlRHVyYXRpb25gIHByb3BlcnR5IGlzIHNwZWNpZmllZCBidXQgYHJlc3VtZUhpZGVEdXJhdGlvbmAgaXNuJ3QsXG4gICAqIHdlIGRlZmF1bHQgdG8gYGF1dG9IaWRlRHVyYXRpb24gLyAyYCBtcy5cbiAgICovXG4gIHJlc3VtZUhpZGVEdXJhdGlvbjogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIFByb3BlcnRpZXMgYXBwbGllZCB0byB0aGUgYFNuYWNrYmFyQ29udGVudGAgZWxlbWVudC5cbiAgICovXG4gIFNuYWNrYmFyQ29udGVudFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICogVHJhbnNpdGlvbiBjb21wb25lbnQuXG4gICAqL1xuICB0cmFuc2l0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAvKipcbiAgICogVGhlIGR1cmF0aW9uIGZvciB0aGUgdHJhbnNpdGlvbiwgaW4gbWlsbGlzZWNvbmRzLlxuICAgKiBZb3UgbWF5IHNwZWNpZnkgYSBzaW5nbGUgdGltZW91dCBmb3IgYWxsIHRyYW5zaXRpb25zLCBvciBpbmRpdmlkdWFsbHkgd2l0aCBhbiBvYmplY3QuXG4gICAqL1xuICB0cmFuc2l0aW9uRHVyYXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLnNoYXBlKHsgZW50ZXI6IFByb3BUeXBlcy5udW1iZXIsIGV4aXQ6IFByb3BUeXBlcy5udW1iZXIgfSksXG4gIF0pLFxufTtcblxuU25hY2tiYXIuZGVmYXVsdFByb3BzID0ge1xuICBhbmNob3JPcmlnaW46IHtcbiAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXG4gICAgaG9yaXpvbnRhbDogJ2NlbnRlcicsXG4gIH0sXG4gIGRpc2FibGVXaW5kb3dCbHVyTGlzdGVuZXI6IGZhbHNlLFxuICB0cmFuc2l0aW9uOiBTbGlkZSxcbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiB7XG4gICAgZW50ZXI6IGR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxuICAgIGV4aXQ6IGR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywgeyBmbGlwOiBmYWxzZSwgbmFtZTogJ011aVNuYWNrYmFyJyB9KShwb2x5ZmlsbChTbmFja2JhcikpO1xuIl19

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTransitionProps = getTransitionProps;
var reflow = exports.reflow = function reflow(node) {
  return node.scrollTop;
};

function getTransitionProps(props, options) {
  var timeout = props.timeout,
      _props$style = props.style,
      style = _props$style === undefined ? {} : _props$style;


  return {
    duration: style.transitionDuration || typeof timeout === 'number' ? timeout : timeout[options.mode],
    delay: style.transitionDelay
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdHJhbnNpdGlvbnNcXHV0aWxzLmpzIl0sIm5hbWVzIjpbImdldFRyYW5zaXRpb25Qcm9wcyIsInJlZmxvdyIsIm5vZGUiLCJzY3JvbGxUb3AiLCJwcm9wcyIsIm9wdGlvbnMiLCJ0aW1lb3V0Iiwic3R5bGUiLCJkdXJhdGlvbiIsInRyYW5zaXRpb25EdXJhdGlvbiIsIm1vZGUiLCJkZWxheSIsInRyYW5zaXRpb25EZWxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFFZ0JBLGtCLEdBQUFBLGtCO0FBRlQsSUFBTUMsMEJBQVMsU0FBVEEsTUFBUztBQUFBLFNBQVFDLEtBQUtDLFNBQWI7QUFBQSxDQUFmOztBQUVBLFNBQVNILGtCQUFULENBQTRCSSxLQUE1QixFQUFtQ0MsT0FBbkMsRUFBNEM7QUFBQSxNQUN6Q0MsT0FEeUMsR0FDakJGLEtBRGlCLENBQ3pDRSxPQUR5QztBQUFBLHFCQUNqQkYsS0FEaUIsQ0FDaENHLEtBRGdDO0FBQUEsTUFDaENBLEtBRGdDLGdDQUN4QixFQUR3Qjs7O0FBR2pELFNBQU87QUFDTEMsY0FDRUQsTUFBTUUsa0JBQU4sSUFBNEIsT0FBT0gsT0FBUCxLQUFtQixRQUEvQyxHQUEwREEsT0FBMUQsR0FBb0VBLFFBQVFELFFBQVFLLElBQWhCLENBRmpFO0FBR0xDLFdBQU9KLE1BQU1LO0FBSFIsR0FBUDtBQUtEIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3JtY3F1ZW4vc2x0LXVpL21hdGVyaWFsLXVpIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHJlZmxvdyA9IG5vZGUgPT4gbm9kZS5zY3JvbGxUb3A7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmFuc2l0aW9uUHJvcHMocHJvcHMsIG9wdGlvbnMpIHtcbiAgY29uc3QgeyB0aW1lb3V0LCBzdHlsZSA9IHt9IH0gPSBwcm9wcztcblxuICByZXR1cm4ge1xuICAgIGR1cmF0aW9uOlxuICAgICAgc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uIHx8IHR5cGVvZiB0aW1lb3V0ID09PSAnbnVtYmVyJyA/IHRpbWVvdXQgOiB0aW1lb3V0W29wdGlvbnMubW9kZV0sXG4gICAgZGVsYXk6IHN0eWxlLnRyYW5zaXRpb25EZWxheSxcbiAgfTtcbn1cbiJdfQ==

/***/ })

});