webpackJsonpmaterial_ui([18,23,26],{

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

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.isHorizontal = isHorizontal;
exports.getAnchor = getAnchor;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(23);

var _classnames2 = _interopRequireDefault(_classnames);

var _Modal = __webpack_require__(112);

var _Modal2 = _interopRequireDefault(_Modal);

var _withStyles = __webpack_require__(18);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Slide = __webpack_require__(290);

var _Slide2 = _interopRequireDefault(_Slide);

var _Paper = __webpack_require__(102);

var _Paper2 = _interopRequireDefault(_Paper);

var _helpers = __webpack_require__(97);

var _transitions = __webpack_require__(99);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var oppositeDirection = {
  left: 'right',
  right: 'left',
  top: 'down',
  bottom: 'up'
};

function isHorizontal(props) {
  return ['left', 'right'].indexOf(props.anchor) !== -1;
}

function getAnchor(props) {
  return props.theme.direction === 'rtl' && isHorizontal(props) ? oppositeDirection[props.anchor] : props.anchor;
}

var styles = exports.styles = function styles(theme) {
  return {
    docked: {
      flex: '0 0 auto'
    },
    paper: {
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      flex: '1 0 auto',
      zIndex: theme.zIndex.drawer,
      WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
      // temporary style
      position: 'fixed',
      top: 0,
      // We disable the focus ring for mouse, touch and keyboard users.
      // At some point, it would be better to keep it for keyboard users.
      // :focus-ring CSS pseudo-class will help.
      '&:focus': {
        outline: 'none'
      }
    },
    paperAnchorLeft: {
      left: 0,
      right: 'auto'
    },
    paperAnchorRight: {
      left: 'auto',
      right: 0
    },
    paperAnchorTop: {
      top: 0,
      left: 0,
      bottom: 'auto',
      right: 0,
      height: 'auto',
      maxHeight: '100vh'
    },
    paperAnchorBottom: {
      top: 'auto',
      left: 0,
      bottom: 0,
      right: 0,
      height: 'auto',
      maxHeight: '100vh'
    },
    paperAnchorDockedLeft: {
      borderRight: '1px solid ' + theme.palette.divider
    },
    paperAnchorDockedTop: {
      borderBottom: '1px solid ' + theme.palette.divider
    },
    paperAnchorDockedRight: {
      borderLeft: '1px solid ' + theme.palette.divider
    },
    paperAnchorDockedBottom: {
      borderTop: '1px solid ' + theme.palette.divider
    },
    modal: {} // Just here so people can override the style.
  };
};

/**
 * The properties of the [Modal](/api/modal) component are available
 * when `variant="temporary"` is set.
 */

var Drawer = function (_React$Component) {
  _inherits(Drawer, _React$Component);

  function Drawer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Drawer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Drawer.__proto__ || Object.getPrototypeOf(Drawer)).call.apply(_ref, [this].concat(args))), _this), _this.mounted = false, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Drawer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.mounted = true;
    }

    // Let's assume that the Drawer will always be rendered on user space.
    // We use that state is order to skip the appear transition during the
    // initial mount of the component.

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          anchorProp = _props.anchor,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          elevation = _props.elevation,
          _props$ModalProps = _props.ModalProps;
      _props$ModalProps = _props$ModalProps === undefined ? {} : _props$ModalProps;

      var BackdropPropsProp = _props$ModalProps.BackdropProps,
          ModalProps = _objectWithoutProperties(_props$ModalProps, ['BackdropProps']),
          onClose = _props.onClose,
          open = _props.open,
          PaperProps = _props.PaperProps,
          SlideProps = _props.SlideProps,
          theme = _props.theme,
          transitionDuration = _props.transitionDuration,
          variant = _props.variant,
          other = _objectWithoutProperties(_props, ['anchor', 'children', 'classes', 'className', 'elevation', 'ModalProps', 'onClose', 'open', 'PaperProps', 'SlideProps', 'theme', 'transitionDuration', 'variant']);

      var anchor = getAnchor(this.props);
      var drawer = _react2.default.createElement(
        _Paper2.default,
        _extends({
          elevation: variant === 'temporary' ? elevation : 0,
          square: true,
          className: (0, _classnames2.default)(classes.paper, classes['paperAnchor' + (0, _helpers.capitalize)(anchor)], _defineProperty({}, classes['paperAnchorDocked' + (0, _helpers.capitalize)(anchor)], variant !== 'temporary'))
        }, PaperProps),
        children
      );

      if (variant === 'permanent') {
        return _react2.default.createElement(
          'div',
          _extends({ className: (0, _classnames2.default)(classes.docked, className) }, other),
          drawer
        );
      }

      var slidingDrawer = _react2.default.createElement(
        _Slide2.default,
        _extends({
          'in': open,
          direction: oppositeDirection[anchor],
          timeout: transitionDuration,
          appear: this.mounted
        }, SlideProps),
        drawer
      );

      if (variant === 'persistent') {
        return _react2.default.createElement(
          'div',
          _extends({ className: (0, _classnames2.default)(classes.docked, className) }, other),
          slidingDrawer
        );
      }

      // variant === temporary
      return _react2.default.createElement(
        _Modal2.default,
        _extends({
          BackdropProps: _extends({}, BackdropPropsProp, {
            transitionDuration: transitionDuration
          }),
          className: (0, _classnames2.default)(classes.modal, className),
          open: open,
          onClose: onClose
        }, other, ModalProps),
        slidingDrawer
      );
    }
  }]);

  return Drawer;
}(_react2.default.Component);

Drawer.propTypes = {
  /**
   * Side from which the drawer will appear.
   */
  anchor: _propTypes2.default.oneOf(['left', 'top', 'right', 'bottom']),
  /**
   * The contents of the drawer.
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
   * The elevation of the drawer.
   */
  elevation: _propTypes2.default.number,
  /**
   * Properties applied to the `Modal` element.
   */
  ModalProps: _propTypes2.default.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback
   */
  onClose: _propTypes2.default.func,
  /**
   * If `true`, the drawer is open.
   */
  open: _propTypes2.default.bool,
  /**
   * Properties applied to the `Paper` element.
   */
  PaperProps: _propTypes2.default.object,
  /**
   * Properties applied to the `Slide` element.
   */
  SlideProps: _propTypes2.default.object,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({ enter: _propTypes2.default.number, exit: _propTypes2.default.number })]),
  /**
   * The variant of drawer.
   */
  variant: _propTypes2.default.oneOf(['permanent', 'persistent', 'temporary'])
};

Drawer.defaultProps = {
  anchor: 'left',
  elevation: 16,
  open: false,
  transitionDuration: { enter: _transitions.duration.enteringScreen, exit: _transitions.duration.leavingScreen },
  variant: 'temporary' // Mobile first.
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiDrawer', flip: false, withTheme: true })(Drawer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcRHJhd2VyXFxEcmF3ZXIuanMiXSwibmFtZXMiOlsiaXNIb3Jpem9udGFsIiwiZ2V0QW5jaG9yIiwib3Bwb3NpdGVEaXJlY3Rpb24iLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJwcm9wcyIsImluZGV4T2YiLCJhbmNob3IiLCJ0aGVtZSIsImRpcmVjdGlvbiIsInN0eWxlcyIsImRvY2tlZCIsImZsZXgiLCJwYXBlciIsIm92ZXJmbG93WSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiaGVpZ2h0IiwiekluZGV4IiwiZHJhd2VyIiwiV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmciLCJwb3NpdGlvbiIsIm91dGxpbmUiLCJwYXBlckFuY2hvckxlZnQiLCJwYXBlckFuY2hvclJpZ2h0IiwicGFwZXJBbmNob3JUb3AiLCJtYXhIZWlnaHQiLCJwYXBlckFuY2hvckJvdHRvbSIsInBhcGVyQW5jaG9yRG9ja2VkTGVmdCIsImJvcmRlclJpZ2h0IiwicGFsZXR0ZSIsImRpdmlkZXIiLCJwYXBlckFuY2hvckRvY2tlZFRvcCIsImJvcmRlckJvdHRvbSIsInBhcGVyQW5jaG9yRG9ja2VkUmlnaHQiLCJib3JkZXJMZWZ0IiwicGFwZXJBbmNob3JEb2NrZWRCb3R0b20iLCJib3JkZXJUb3AiLCJtb2RhbCIsIkRyYXdlciIsIm1vdW50ZWQiLCJhbmNob3JQcm9wIiwiY2hpbGRyZW4iLCJjbGFzc2VzIiwiY2xhc3NOYW1lIiwiZWxldmF0aW9uIiwiTW9kYWxQcm9wcyIsIkJhY2tkcm9wUHJvcHNQcm9wIiwiQmFja2Ryb3BQcm9wcyIsIm9uQ2xvc2UiLCJvcGVuIiwiUGFwZXJQcm9wcyIsIlNsaWRlUHJvcHMiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ2YXJpYW50Iiwib3RoZXIiLCJzbGlkaW5nRHJhd2VyIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwib25lT2YiLCJub2RlIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsIm51bWJlciIsImZ1bmMiLCJib29sIiwib25lT2ZUeXBlIiwic2hhcGUiLCJlbnRlciIsImV4aXQiLCJkZWZhdWx0UHJvcHMiLCJlbnRlcmluZ1NjcmVlbiIsImxlYXZpbmdTY3JlZW4iLCJuYW1lIiwiZmxpcCIsIndpdGhUaGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7UUFpQmdCQSxZLEdBQUFBLFk7UUFJQUMsUyxHQUFBQSxTOztBQXJCaEI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQyxvQkFBb0I7QUFDeEJDLFFBQU0sT0FEa0I7QUFFeEJDLFNBQU8sTUFGaUI7QUFHeEJDLE9BQUssTUFIbUI7QUFJeEJDLFVBQVE7QUFKZ0IsQ0FBMUI7O0FBT08sU0FBU04sWUFBVCxDQUFzQk8sS0FBdEIsRUFBNkI7QUFDbEMsU0FBTyxDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCQyxPQUFsQixDQUEwQkQsTUFBTUUsTUFBaEMsTUFBNEMsQ0FBQyxDQUFwRDtBQUNEOztBQUVNLFNBQVNSLFNBQVQsQ0FBbUJNLEtBQW5CLEVBQTBCO0FBQy9CLFNBQU9BLE1BQU1HLEtBQU4sQ0FBWUMsU0FBWixLQUEwQixLQUExQixJQUFtQ1gsYUFBYU8sS0FBYixDQUFuQyxHQUNITCxrQkFBa0JLLE1BQU1FLE1BQXhCLENBREcsR0FFSEYsTUFBTUUsTUFGVjtBQUdEOztBQUVNLElBQU1HLDBCQUFTLFNBQVRBLE1BQVM7QUFBQSxTQUFVO0FBQzlCQyxZQUFRO0FBQ05DLFlBQU07QUFEQSxLQURzQjtBQUk5QkMsV0FBTztBQUNMQyxpQkFBVyxNQUROO0FBRUxDLGVBQVMsTUFGSjtBQUdMQyxxQkFBZSxRQUhWO0FBSUxDLGNBQVEsT0FKSDtBQUtMTCxZQUFNLFVBTEQ7QUFNTE0sY0FBUVYsTUFBTVUsTUFBTixDQUFhQyxNQU5oQjtBQU9MQywrQkFBeUIsT0FQcEIsRUFPNkI7QUFDbEM7QUFDQUMsZ0JBQVUsT0FUTDtBQVVMbEIsV0FBSyxD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QUFVYyxTQUFWLENBQW9CLENBQ3RDLG9CQUFVSCxNQUQ0QixFQUV0QyxvQkFBVUksS0FBVixDQUFnQixFQUFFQyxPQUFPLG9CQUFVTCxNQUFuQixFQUEyQk0sTUFBTSxvQkFBVU4sTUFBM0MsRUFBaEIsQ0FGc0MsQ0FBcEIsQ0FuREg7QUF1RGpCOzs7QUFHQVYsV0FBUyxvQkFBVUssS0FBVixDQUFnQixDQUFDLFdBQUQsRUFBYyxZQUFkLEVBQTRCLFdBQTVCLENBQWhCO0FBMURRLENBQW5COztBQTZEQXBCLE9BQU9nQyxZQUFQLEdBQXNCO0FBQ3BCaEUsVUFBUSxNQURZO0FBRXBCc0MsYUFBVyxFQUZTO0FBR3BCSyxRQUFNLEtBSGM7QUFJcEJHLHNCQUFvQixFQUFFZ0IsT0FBTyxzQkFBU0csY0FBbEIsRUFBa0NGLE1BQU0sc0JBQVNHLGFBQWpELEVBSkE7QUFLcEJuQixXQUFTLFdBTFcsQ0FLRTtBQUxGLENBQXRCOztrQkFRZSwwQkFBVzVDLE1BQVgsRUFBbUIsRUFBRWdFLE1BQU0sV0FBUixFQUFxQkMsTUFBTSxLQUEzQixFQUFrQ0MsV0FBVyxJQUE3QyxFQUFuQixFQUF3RXJDLE1BQXhFLEMiLCJmaWxlIjoiRHJhd2VyLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3JtY3F1ZW4vc2x0LXVpL21hdGVyaWFsLXVpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9Nb2RhbCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgU2xpZGUgZnJvbSAnLi4vdHJhbnNpdGlvbnMvU2xpZGUnO1xuaW1wb3J0IFBhcGVyIGZyb20gJy4uL1BhcGVyJztcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICcuLi91dGlscy9oZWxwZXJzJztcbmltcG9ydCB7IGR1cmF0aW9uIH0gZnJvbSAnLi4vc3R5bGVzL3RyYW5zaXRpb25zJztcblxuY29uc3Qgb3Bwb3NpdGVEaXJlY3Rpb24gPSB7XG4gIGxlZnQ6ICdyaWdodCcsXG4gIHJpZ2h0OiAnbGVmdCcsXG4gIHRvcDogJ2Rvd24nLFxuICBib3R0b206ICd1cCcsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gaXNIb3Jpem9udGFsKHByb3BzKSB7XG4gIHJldHVybiBbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKHByb3BzLmFuY2hvcikgIT09IC0xO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5jaG9yKHByb3BzKSB7XG4gIHJldHVybiBwcm9wcy50aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnICYmIGlzSG9yaXpvbnRhbChwcm9wcylcbiAgICA/IG9wcG9zaXRlRGlyZWN0aW9uW3Byb3BzLmFuY2hvcl1cbiAgICA6IHByb3BzLmFuY2hvcjtcbn1cblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIGRvY2tlZDoge1xuICAgIGZsZXg6ICcwIDAgYXV0bycsXG4gIH0sXG4gIHBhcGVyOiB7XG4gICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICBmbGV4OiAnMSAwIGF1dG8nLFxuICAgIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlcixcbiAgICBXZWJraXRPdmVyZmxvd1Njcm9sbGluZzogJ3RvdWNoJywgLy8gQWRkIGlPUyBtb21lbnR1bSBzY3JvbGxpbmcuXG4gICAgLy8gdGVtcG9yYXJ5IHN0eWxlXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgdG9wOiAwLFxuICAgIC8vIFdlIGRpc2FibGUgdGhlIGZvY3VzIHJpbmcgZm9yIG1vdXNlLCB0b3VjaCBhbmQga2V5Ym9hcmQgdXNlcnMuXG4gICAgLy8gQXQgc29tZSBwb2ludCwgaXQgd291bGQgYmUgYmV0dGVyIHRvIGtlZXAgaXQgZm9yIGtleWJvYXJkIHVzZXJzLlxuICAgIC8vIDpmb2N1cy1yaW5nIENTUyBwc2V1ZG8tY2xhc3Mgd2lsbCBoZWxwLlxuICAgICcmOmZvY3VzJzoge1xuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgIH0sXG4gIH0sXG4gIHBhcGVyQW5jaG9yTGVmdDoge1xuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6ICdhdXRvJyxcbiAgfSxcbiAgcGFwZXJBbmNob3JSaWdodDoge1xuICAgIGxlZnQ6ICdhdXRvJyxcbiAgICByaWdodDogMCxcbiAgfSxcbiAgcGFwZXJBbmNob3JUb3A6IHtcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBib3R0b206ICdhdXRvJyxcbiAgICByaWdodDogMCxcbiAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICBtYXhIZWlnaHQ6ICcxMDB2aCcsXG4gIH0sXG4gIHBhcGVyQW5jaG9yQm90dG9tOiB7XG4gICAgdG9wOiAnYXV0bycsXG4gICAgbGVmdDogMCxcbiAgICBib3R0b206IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgbWF4SGVpZ2h0OiAnMTAwdmgnLFxuICB9LFxuICBwYXBlckFuY2hvckRvY2tlZExlZnQ6IHtcbiAgICBib3JkZXJSaWdodDogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuZGl2aWRlcn1gLFxuICB9LFxuICBwYXBlckFuY2hvckRvY2tlZFRvcDoge1xuICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuZGl2aWRlcn1gLFxuICB9LFxuICBwYXBlckFuY2hvckRvY2tlZFJpZ2h0OiB7XG4gICAgYm9yZGVyTGVmdDogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuZGl2aWRlcn1gLFxuICB9LFxuICBwYXBlckFuY2hvckRvY2tlZEJvdHRvbToge1xuICAgIGJvcmRlclRvcDogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuZGl2aWRlcn1gLFxuICB9LFxuICBtb2RhbDoge30sIC8vIEp1c3QgaGVyZSBzbyBwZW9wbGUgY2FuIG92ZXJyaWRlIHRoZSBzdHlsZS5cbn0pO1xuXG4vKipcbiAqIFRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBbTW9kYWxdKC9hcGkvbW9kYWwpIGNvbXBvbmVudCBhcmUgYXZhaWxhYmxlXG4gKiB3aGVuIGB2YXJpYW50PVwidGVtcG9yYXJ5XCJgIGlzIHNldC5cbiAqL1xuY2xhc3MgRHJhd2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIExldCdzIGFzc3VtZSB0aGF0IHRoZSBEcmF3ZXIgd2lsbCBhbHdheXMgYmUgcmVuZGVyZWQgb24gdXNlciBzcGFjZS5cbiAgLy8gV2UgdXNlIHRoYXQgc3RhdGUgaXMgb3JkZXIgdG8gc2tpcCB0aGUgYXBwZWFyIHRyYW5zaXRpb24gZHVyaW5nIHRoZVxuICAvLyBpbml0aWFsIG1vdW50IG9mIHRoZSBjb21wb25lbnQuXG4gIG1vdW50ZWQgPSBmYWxzZTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYW5jaG9yOiBhbmNob3JQcm9wLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZWxldmF0aW9uLFxuICAgICAgTW9kYWxQcm9wczogeyBCYWNrZHJvcFByb3BzOiBCYWNrZHJvcFByb3BzUHJvcCwgLi4uTW9kYWxQcm9wcyB9ID0ge30sXG4gICAgICBvbkNsb3NlLFxuICAgICAgb3BlbixcbiAgICAgIFBhcGVyUHJvcHMsXG4gICAgICBTbGlkZVByb3BzLFxuICAgICAgdGhlbWUsXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICB2YXJpYW50LFxuICAgICAgLi4ub3RoZXJcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGFuY2hvciA9IGdldEFuY2hvcih0aGlzLnByb3BzKTtcbiAgICBjb25zdCBkcmF3ZXIgPSAoXG4gICAgICA8UGFwZXJcbiAgICAgICAgZWxldmF0aW9uPXt2YXJpYW50ID09PSAndGVtcG9yYXJ5JyA/IGVsZXZhdGlvbiA6IDB9XG4gICAgICAgIHNxdWFyZVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy5wYXBlciwgY2xhc3Nlc1tgcGFwZXJBbmNob3Ike2NhcGl0YWxpemUoYW5jaG9yKX1gXSwge1xuICAgICAgICAgIFtjbGFzc2VzW2BwYXBlckFuY2hvckRvY2tlZCR7Y2FwaXRhbGl6ZShhbmNob3IpfWBdXTogdmFyaWFudCAhPT0gJ3RlbXBvcmFyeScsXG4gICAgICAgIH0pfVxuICAgICAgICB7Li4uUGFwZXJQcm9wc31cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9QYXBlcj5cbiAgICApO1xuXG4gICAgaWYgKHZhcmlhbnQgPT09ICdwZXJtYW5lbnQnKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc2VzLmRvY2tlZCwgY2xhc3NOYW1lKX0gey4uLm90aGVyfT5cbiAgICAgICAgICB7ZHJhd2VyfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2xpZGluZ0RyYXdlciA9IChcbiAgICAgIDxTbGlkZVxuICAgICAgICBpbj17b3Blbn1cbiAgICAgICAgZGlyZWN0aW9uPXtvcHBvc2l0ZURpcmVjdGlvblthbmNob3JdfVxuICAgICAgICB0aW1lb3V0PXt0cmFuc2l0aW9uRHVyYXRpb259XG4gICAgICAgIGFwcGVhcj17dGhpcy5tb3VudGVkfVxuICAgICAgICB7Li4uU2xpZGVQcm9wc31cbiAgICAgID5cbiAgICAgICAge2RyYXdlcn1cbiAgICAgIDwvU2xpZGU+XG4gICAgKTtcblxuICAgIGlmICh2YXJpYW50ID09PSAncGVyc2lzdGVudCcpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzZXMuZG9ja2VkLCBjbGFzc05hbWUpfSB7Li4ub3RoZXJ9PlxuICAgICAgICAgIHtzbGlkaW5nRHJhd2VyfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gdmFyaWFudCA9PT0gdGVtcG9yYXJ5XG4gICAgcmV0dXJuIChcbiAgICAgIDxNb2RhbFxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XG4gICAgICAgICAgLi4uQmFja2Ryb3BQcm9wc1Byb3AsXG4gICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy5tb2RhbCwgY2xhc3NOYW1lKX1cbiAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgb25DbG9zZT17b25DbG9zZX1cbiAgICAgICAgey4uLm90aGVyfVxuICAgICAgICB7Li4uTW9kYWxQcm9wc31cbiAgICAgID5cbiAgICAgICAge3NsaWRpbmdEcmF3ZXJ9XG4gICAgICA8L01vZGFsPlxuICAgICk7XG4gIH1cbn1cblxuRHJhd2VyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFNpZGUgZnJvbSB3aGljaCB0aGUgZHJhd2VyIHdpbGwgYXBwZWFyLlxuICAgKi9cbiAgYW5jaG9yOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3RvcCcsICdyaWdodCcsICdib3R0b20nXSksXG4gIC8qKlxuICAgKiBUaGUgY29udGVudHMgb2YgdGhlIGRyYXdlci5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIFVzZWZ1bCB0byBleHRlbmQgdGhlIHN0eWxlIGFwcGxpZWQgdG8gY29tcG9uZW50cy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIFRoZSBlbGV2YXRpb24gb2YgdGhlIGRyYXdlci5cbiAgICovXG4gIGVsZXZhdGlvbjogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIFByb3BlcnRpZXMgYXBwbGllZCB0byB0aGUgYE1vZGFsYCBlbGVtZW50LlxuICAgKi9cbiAgTW9kYWxQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNvbXBvbmVudCByZXF1ZXN0cyB0byBiZSBjbG9zZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFja1xuICAgKi9cbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBkcmF3ZXIgaXMgb3Blbi5cbiAgICovXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICogUHJvcGVydGllcyBhcHBsaWVkIHRvIHRoZSBgUGFwZXJgIGVsZW1lbnQuXG4gICAqL1xuICBQYXBlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICogUHJvcGVydGllcyBhcHBsaWVkIHRvIHRoZSBgU2xpZGVgIGVsZW1lbnQuXG4gICAqL1xuICBTbGlkZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIFRoZSBkdXJhdGlvbiBmb3IgdGhlIHRyYW5zaXRpb24sIGluIG1pbGxpc2Vjb25kcy5cbiAgICogWW91IG1heSBzcGVjaWZ5IGEgc2luZ2xlIHRpbWVvdXQgZm9yIGFsbCB0cmFuc2l0aW9ucywgb3IgaW5kaXZpZHVhbGx5IHdpdGggYW4gb2JqZWN0LlxuICAgKi9cbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5zaGFwZSh7IGVudGVyOiBQcm9wVHlwZXMubnVtYmVyLCBleGl0OiBQcm9wVHlwZXMubnVtYmVyIH0pLFxuICBdKSxcbiAgLyoqXG4gICAqIFRoZSB2YXJpYW50IG9mIGRyYXdlci5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ3Blcm1hbmVudCcsICdwZXJzaXN0ZW50JywgJ3RlbXBvcmFyeSddKSxcbn07XG5cbkRyYXdlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGFuY2hvcjogJ2xlZnQnLFxuICBlbGV2YXRpb246IDE2LFxuICBvcGVuOiBmYWxzZSxcbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiB7IGVudGVyOiBkdXJhdGlvbi5lbnRlcmluZ1NjcmVlbiwgZXhpdDogZHVyYXRpb24ubGVhdmluZ1NjcmVlbiB9LFxuICB2YXJpYW50OiAndGVtcG9yYXJ5JywgLy8gTW9iaWxlIGZpcnN0LlxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHsgbmFtZTogJ011aURyYXdlcicsIGZsaXA6IGZhbHNlLCB3aXRoVGhlbWU6IHRydWUgfSkoRHJhd2VyKTtcbiJdfQ==

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.reset = reset;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(7);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactLifecyclesCompat = __webpack_require__(109);

var _reactLifecyclesCompat2 = _interopRequireDefault(_reactLifecyclesCompat);

var _Drawer = __webpack_require__(298);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _transitions = __webpack_require__(99);

var _withTheme = __webpack_require__(60);

var _withTheme2 = _interopRequireDefault(_withTheme);

var _utils = __webpack_require__(379);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable consistent-this */
// @inheritedComponent Drawer

// This value is closed to what browsers are using internally to
// trigger a native scroll.
var UNCERTAINTY_THRESHOLD = 3; // px

// We can only have one node at the time claiming ownership for handling the swipe.
// Otherwise, the UX would be confusing.
// That's why we use a singleton here.
var nodeThatClaimedTheSwipe = null;

// Exported for test purposes.
function reset() {
  nodeThatClaimedTheSwipe = null;
}

var SwipeableDrawer = function (_React$Component) {
  _inherits(SwipeableDrawer, _React$Component);

  function SwipeableDrawer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SwipeableDrawer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SwipeableDrawer.__proto__ || Object.getPrototypeOf(SwipeableDrawer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.handleBodyTouchStart = function (event) {
      // We are not supposed to hanlde this touch move.
      if (nodeThatClaimedTheSwipe !== null && nodeThatClaimedTheSwipe !== _this) {
        return;
      }

      var _this$props = _this.props,
          disableDiscovery = _this$props.disableDiscovery,
          open = _this$props.open,
          swipeAreaWidth = _this$props.swipeAreaWidth;

      var anchor = (0, _Drawer.getAnchor)(_this.props);
      var currentX = anchor === 'right' ? document.body.offsetWidth - event.touches[0].pageX : event.touches[0].pageX;
      var currentY = anchor === 'bottom' ? window.innerHeight - event.touches[0].clientY : event.touches[0].clientY;

      if (!open) {
        if ((0, _Drawer.isHorizontal)(_this.props)) {
          if (currentX > swipeAreaWidth) {
            return;
          }
        } else if (currentY > swipeAreaWidth) {
          return;
        }
      }

      nodeThatClaimedTheSwipe = _this;
      _this.startX = currentX;
      _this.startY = currentY;

      _this.setState({ maybeSwiping: true });
      if (!open) {
        _this.setPosition(_this.getMaxTranslate() + (disableDiscovery ? 20 : -swipeAreaWidth), {
          changeTransition: false
        });
      }

      document.body.addEventListener('touchmove', _this.handleBodyTouchMove, { passive: false });
      document.body.addEventListener('touchend', _this.handleBodyTouchEnd);
      // https://plus.google.com/+PaulIrish/posts/KTwfn1Y2238
      document.body.addEventListener('touchcancel', _this.handleBodyTouchEnd);
    }, _this.handleBodyTouchMove = function (event) {
      var anchor = (0, _Drawer.getAnchor)(_this.props);
      var horizontalSwipe = (0, _Drawer.isHorizontal)(_this.props);

      var currentX = anchor === 'right' ? document.body.offsetWidth - event.touches[0].pageX : event.touches[0].pageX;
      var currentY = anchor === 'bottom' ? window.innerHeight - event.touches[0].clientY : event.touches[0].clientY;

      // We don't know yet.
      if (_this.isSwiping === undefined) {
        var dx = Math.abs(currentX - _this.startX);
        var dy = Math.abs(currentY - _this.startY);

        // We are likely to be swiping, let's prevent the scroll event on iOS.
        if (dx > dy) {
          event.preventDefault();
        }

        var isSwiping = horizontalSwipe ? dx > dy && dx > UNCERTAINTY_THRESHOLD : dy > dx && dy > UNCERTAINTY_THRESHOLD;

        if (isSwiping === true || (horizontalSwipe ? dy > UNCERTAINTY_THRESHOLD : dx > UNCERTAINTY_THRESHOLD)) {
          if (isSwiping) {
            _this.isSwiping = _this.props.open ? 'closing' : 'opening';
          } else {
            _this.isSwiping = false;
            _this.handleBodyTouchEnd(event);
            return;
          }

          // Shift the starting point.
          _this.startX = currentX;
          _this.startY = currentY;

          // Compensate for the part of the drawer displayed on touch start.
          if (!_this.props.disableDiscovery && !_this.props.open) {
            if (horizontalSwipe) {
              _this.startX -= _this.props.swipeAreaWidth;
            } else {
              _this.startY -= _this.props.swipeAreaWidth;
            }
          }
        }
      }

      if (_this.isSwiping === undefined) {
        return;
      }

      // We are swiping, let's prevent the scroll event on iOS.
      event.preventDefault();
      _this.setPosition(_this.getTranslate(horizontalSwipe ? currentX : currentY));
    }, _this.handleBodyTouchEnd = function (event) {
      nodeThatClaimedTheSwipe = null;
      _this.removeBodyTouchListeners();
      _this.setState({ maybeSwiping: false });

      // The swipe wasn't started.
      if (_this.isSwiping !== 'opening' && _this.isSwiping !== 'closing') {
        _this.isSwiping = undefined;
        return;
      }

      var anchor = (0, _Drawer.getAnchor)(_this.props);
      var current = void 0;
      if ((0, _Drawer.isHorizontal)(_this.props)) {
        current = anchor === 'right' ? document.body.offsetWidth - event.changedTouches[0].pageX : event.changedTouches[0].pageX;
      } else {
        current = anchor === 'bottom' ? window.innerHeight - event.changedTouches[0].clientY : event.changedTouches[0].clientY;
      }
      var translateRatio = _this.getTranslate(current) / _this.getMaxTranslate();

      // We have to open or close after setting swiping to null,
      // because only then CSS transition is enabled.
      if (translateRatio > 0.5) {
        if (_this.isSwiping === 'opening') {
          // Reset the position, the swipe was aborted.
          _this.setPosition(_this.getMaxTranslate(), {
            mode: 'enter'
          });
        } else {
          _this.props.onClose();
        }
      } else if (_this.isSwiping === 'opening') {
        _this.props.onOpen();
      } else {
        // Reset the position, the swipe was aborted.
        _this.setPosition(0, {
          mode: 'exit'
        });
      }

      _this.isSwiping = undefined;
    }, _this.backdrop = null, _this.paper = null, _this.isSwiping = undefined, _this.startX = null, _this.startY = null, _this.handleBackdropRef = function (node) {
      _this.backdrop = node ? _reactDom2.default.findDOMNode(node) : null;
    }, _this.handlePaperRef = function (node) {
      _this.paper = node ? _reactDom2.default.findDOMNode(node) : null;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SwipeableDrawer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.variant === 'temporary') {
        this.listenTouchStart();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var variant = this.props.variant;
      var prevVariant = prevProps.variant;

      if (variant === 'temporary' && prevVariant !== 'temporary') {
        this.listenTouchStart();
      } else if (variant !== 'temporary' && prevVariant === 'temporary') {
        this.removeTouchStart();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeTouchStart();
      this.removeBodyTouchListeners();

      // We need to release the lock.
      if (nodeThatClaimedTheSwipe === this) {
        nodeThatClaimedTheSwipe = null;
      }
    }
  }, {
    key: 'getMaxTranslate',
    value: function getMaxTranslate() {
      return (0, _Drawer.isHorizontal)(this.props) ? this.paper.clientWidth : this.paper.clientHeight;
    }
  }, {
    key: 'getTranslate',
    value: function getTranslate(current) {
      var start = (0, _Drawer.isHorizontal)(this.props) ? this.startX : this.startY;

      return Math.min(Math.max(this.isSwiping === 'closing' ? start - current : this.getMaxTranslate() + start - current, 0), this.getMaxTranslate());
    }
  }, {
    key: 'setPosition',
    value: function setPosition(translate) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$mode = options.mode,
          mode = _options$mode === undefined ? null : _options$mode,
          _options$changeTransi = options.changeTransition,
          changeTransition = _options$changeTransi === undefined ? true : _options$changeTransi;


      var anchor = (0, _Drawer.getAnchor)(this.props);
      var rtlTranslateMultiplier = ['right', 'bottom'].indexOf(anchor) !== -1 ? 1 : -1;
      var transform = (0, _Drawer.isHorizontal)(this.props) ? 'translate(' + rtlTranslateMultiplier * translate + 'px, 0)' : 'translate(0, ' + rtlTranslateMultiplier * translate + 'px)';
      var drawerStyle = this.paper.style;
      drawerStyle.webkitTransform = transform;
      drawerStyle.transform = transform;

      var transition = '';

      if (mode) {
        transition = this.props.theme.transitions.create('all', (0, _utils.getTransitionProps)({
          timeout: this.props.transitionDuration
        }, {
          mode: mode
        }));
      }

      if (changeTransition) {
        drawerStyle.webkitTransition = transition;
        drawerStyle.transition = transition;
      }

      if (!this.props.disableBackdropTransition) {
        var backdropStyle = this.backdrop.style;
        backdropStyle.opacity = 1 - translate / this.getMaxTranslate();

        if (changeTransition) {
          backdropStyle.webkitTransition = transition;
          backdropStyle.transition = transition;
        }
      }
    }
  }, {
    key: 'listenTouchStart',
    value: function listenTouchStart() {
      document.body.addEventListener('touchstart', this.handleBodyTouchStart);
    }
  }, {
    key: 'removeTouchStart',
    value: function removeTouchStart() {
      document.body.removeEventListener('touchstart', this.handleBodyTouchStart);
    }
  }, {
    key: 'removeBodyTouchListeners',
    value: function removeBodyTouchListeners() {
      document.body.removeEventListener('touchmove', this.handleBodyTouchMove, { passive: false });
      document.body.removeEventListener('touchend', this.handleBodyTouchEnd);
      document.body.removeEventListener('touchcancel', this.handleBodyTouchEnd);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          disableBackdropTransition = _props.disableBackdropTransition,
          disableDiscovery = _props.disableDiscovery,
          _props$ModalProps = _props.ModalProps;
      _props$ModalProps = _props$ModalProps === undefined ? {} : _props$ModalProps;

      var BackdropProps = _props$ModalProps.BackdropProps,
          ModalPropsProp = _objectWithoutProperties(_props$ModalProps, ['BackdropProps']),
          onOpen = _props.onOpen,
          open = _props.open,
          PaperProps = _props.PaperProps,
          swipeAreaWidth = _props.swipeAreaWidth,
          variant = _props.variant,
          other = _objectWithoutProperties(_props, ['disableBackdropTransition', 'disableDiscovery', 'ModalProps', 'onOpen', 'open', 'PaperProps', 'swipeAreaWidth', 'variant']);

      var maybeSwiping = this.state.maybeSwiping;


      return _react2.default.createElement(_Drawer2.default, _extends({
        open: variant === 'temporary' && maybeSwiping ? true : open,
        variant: variant,
        ModalProps: _extends({
          BackdropProps: _extends({}, BackdropProps, {
            ref: this.handleBackdropRef
          })
        }, ModalPropsProp),
        PaperProps: _extends({}, PaperProps, {
          ref: this.handlePaperRef
        })
      }, other));
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps() {
      // Reset the maybeSwiping state everytime we receive new properties.
      return {
        maybeSwiping: false
      };
    }
  }]);

  return SwipeableDrawer;
}(_react2.default.Component);

SwipeableDrawer.propTypes = {
  /**
   * @ignore
   */
  anchor: _propTypes2.default.oneOf(['left', 'top', 'right', 'bottom']),
  /**
   * Disable the backdrop transition.
   * This can improve the FPS on low-end devices.
   */
  disableBackdropTransition: _propTypes2.default.bool,
  /**
   * If `true`, touching the screen near the edge of the drawer will not slide in the drawer a bit
   * to promote accidental discovery of the swipe gesture.
   */
  disableDiscovery: _propTypes2.default.bool,
  /**
   * @ignore
   */
  ModalProps: _propTypes2.default.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback
   */
  onClose: _propTypes2.default.func.isRequired,
  /**
   * Callback fired when the component requests to be opened.
   *
   * @param {object} event The event source of the callback
   */
  onOpen: _propTypes2.default.func.isRequired,
  /**
   * If `true`, the drawer is open.
   */
  open: _propTypes2.default.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: _propTypes2.default.object,
  /**
   * The width of the left most (or right most) area in pixels where the
   * drawer can be swiped open from.
   */
  swipeAreaWidth: _propTypes2.default.number,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({ enter: _propTypes2.default.number, exit: _propTypes2.default.number })]),
  /**
   * @ignore
   */
  variant: _propTypes2.default.oneOf(['permanent', 'persistent', 'temporary'])
};

SwipeableDrawer.defaultProps = {
  anchor: 'left',
  disableBackdropTransition: false,
  disableDiscovery: false,
  swipeAreaWidth: 20,
  transitionDuration: { enter: _transitions.duration.enteringScreen, exit: _transitions.duration.leavingScreen },
  variant: 'temporary' // Mobile first.
};

exports.default = (0, _withTheme2.default)()((0, _reactLifecyclesCompat2.default)(SwipeableDrawer));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcU3dpcGVhYmxlRHJhd2VyXFxTd2lwZWFibGVEcmF3ZXIuanMiXSwibmFtZXMiOlsicmVzZXQiLCJVTkNFUlRBSU5UWV9USFJFU0hPTEQiLCJub2RlVGhhdENsYWltZWRUaGVTd2lwZSIsIlN3aXBlYWJsZURyYXdlciIsInN0YXRlIiwiaGFuZGxlQm9keVRvdWNoU3RhcnQiLCJwcm9wcyIsImRpc2FibGVEaXNjb3ZlcnkiLCJvcGVuIiwic3dpcGVBcmVhV2lkdGgiLCJhbmNob3IiLCJjdXJyZW50WCIsImRvY3VtZW50IiwiYm9keSIsIm9mZnNldFdpZHRoIiwiZXZlbnQiLCJ0b3VjaGVzIiwicGFnZVgiLCJjdXJyZW50WSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiY2xpZW50WSIsInN0YXJ0WCIsInN0YXJ0WSIsInNldFN0YXRlIiwibWF5YmVTd2lwaW5nIiwic2V0UG9zaXRpb24iLCJnZXRNYXhUcmFuc2xhdGUiLCJjaGFuZ2VUcmFuc2l0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUJvZHlUb3VjaE1vdmUiLCJwYXNzaXZlIiwiaGFuZGxlQm9keVRvdWNoRW5kIiwiaG9yaXpvbnRhbFN3aXBlIiwiaXNTd2lwaW5nIiwidW5kZWZpbmVkIiwiZHgiLCJNYXRoIiwiYWJzIiwiZHkiLCJwcmV2ZW50RGVmYXVsdCIsImdldFRyYW5zbGF0ZSIsInJlbW92ZUJvZHlUb3VjaExpc3RlbmVycyIsImN1cnJlbnQiLCJjaGFuZ2VkVG91Y2hlcyIsInRyYW5zbGF0ZVJhdGlvIiwibW9kZSIsIm9uQ2xvc2UiLCJvbk9wZW4iLCJiYWNrZHJvcCIsInBhcGVyIiwiaGFuZGxlQmFja2Ryb3BSZWYiLCJub2RlIiwiZmluZERPTU5vZGUiLCJoYW5kbGVQYXBlclJlZiIsInZhcmlhbnQiLCJsaXN0ZW5Ub3VjaFN0YXJ0IiwicHJldlByb3BzIiwicHJldlZhcmlhbnQiLCJyZW1vdmVUb3VjaFN0YXJ0IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJzdGFydCIsIm1pbiIsIm1heCIsInRyYW5zbGF0ZSIsIm9wdGlvbnMiLCJydGxUcmFuc2xhdGVNdWx0aXBsaWVyIiwiaW5kZXhPZiIsInRyYW5zZm9ybSIsImRyYXdlclN0eWxlIiwic3R5bGUiLCJ3ZWJraXRUcmFuc2Zvcm0iLCJ0cmFuc2l0aW9uIiwidGhlbWUiLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsInRpbWVvdXQiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ3ZWJraXRUcmFuc2l0aW9uIiwiZGlzYWJsZUJhY2tkcm9wVHJhbnNpdGlvbiIsImJhY2tkcm9wU3R5bGUiLCJvcGFjaXR5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIk1vZGFsUHJvcHMiLCJCYWNrZHJvcFByb3BzIiwiTW9kYWxQcm9wc1Byb3AiLCJQYXBlclByb3BzIiwib3RoZXIiLCJyZWYiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJvbmVPZiIsImJvb2wiLCJvYmplY3QiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIm51bWJlciIsIm9uZU9mVHlwZSIsInNoYXBlIiwiZW50ZXIiLCJleGl0IiwiZGVmYXVsdFByb3BzIiwiZW50ZXJpbmdTY3JlZW4iLCJsZWF2aW5nU2NyZWVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O1FBc0JnQkEsSyxHQUFBQSxLOztBQW5CaEI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7K2VBVkE7QUFDQTs7QUFXQTtBQUNBO0FBQ0EsSUFBTUMsd0JBQXdCLENBQTlCLEMsQ0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBLElBQUlDLDBCQUEwQixJQUE5Qjs7QUFFQTtBQUNPLFNBQVNGLEtBQVQsR0FBaUI7QUFDdEJFLDRCQUEwQixJQUExQjtBQUNEOztJQUVLQyxlOzs7Ozs7Ozs7Ozs7Ozt3TUFRSkMsSyxHQUFRLEUsUUF5RlJDLG9CLEdBQXVCLGlCQUFTO0FBQzlCO0FBQ0EsVUFBSUgsNEJBQTRCLElBQTVCLElBQW9DQSxpQ0FBeEMsRUFBMEU7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a0JBQWdCLG9CQUFVd0YsTUEzQ0E7QUE0QzFCOzs7QUFHQXZCLFNBQU8sb0JBQVVvQixNQUFWLENBQWlCRSxVQS9DRTtBQWdEMUI7Ozs7QUFJQWxCLHNCQUFvQixvQkFBVW9CLFNBQVYsQ0FBb0IsQ0FDdEMsb0JBQVVELE1BRDRCLEVBRXRDLG9CQUFVRSxLQUFWLENBQWdCLEVBQUVDLE9BQU8sb0JBQVVILE1BQW5CLEVBQTJCSSxNQUFNLG9CQUFVSixNQUEzQyxFQUFoQixDQUZzQyxDQUFwQixDQXBETTtBQXdEMUI7OztBQUdBMUMsV0FBUyxvQkFBVXFDLEtBQVYsQ0FBZ0IsQ0FBQyxXQUFELEVBQWMsWUFBZCxFQUE0QixXQUE1QixDQUFoQjtBQTNEaUIsQ0FBNUI7O0FBOERBekYsZ0JBQWdCbUcsWUFBaEIsR0FBK0I7QUFDN0I1RixVQUFRLE1BRHFCO0FBRTdCc0UsNkJBQTJCLEtBRkU7QUFHN0J6RSxvQkFBa0IsS0FIVztBQUk3QkUsa0JBQWdCLEVBSmE7QUFLN0JxRSxzQkFBb0IsRUFBRXNCLE9BQU8sc0JBQVNHLGNBQWxCLEVBQWtDRixNQUFNLHNCQUFTRyxhQUFqRCxFQUxTO0FBTTdCakQsV0FBUyxXQU5vQixDQU1QO0FBTk8sQ0FBL0I7O2tCQVNlLDJCQUFZLHFDQUFTcEQsZUFBVCxDQUFaLEMiLCJmaWxlIjoiU3dpcGVhYmxlRHJhd2VyLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3JtY3F1ZW4vc2x0LXVpL21hdGVyaWFsLXVpIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC10aGlzICovXG4vLyBAaW5oZXJpdGVkQ29tcG9uZW50IERyYXdlclxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHBvbHlmaWxsIGZyb20gJ3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0JztcbmltcG9ydCBEcmF3ZXIsIHsgZ2V0QW5jaG9yLCBpc0hvcml6b250YWwgfSBmcm9tICcuLi9EcmF3ZXIvRHJhd2VyJztcbmltcG9ydCB7IGR1cmF0aW9uIH0gZnJvbSAnLi4vc3R5bGVzL3RyYW5zaXRpb25zJztcbmltcG9ydCB3aXRoVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3dpdGhUaGVtZSc7XG5pbXBvcnQgeyBnZXRUcmFuc2l0aW9uUHJvcHMgfSBmcm9tICcuLi90cmFuc2l0aW9ucy91dGlscyc7XG5cbi8vIFRoaXMgdmFsdWUgaXMgY2xvc2VkIHRvIHdoYXQgYnJvd3NlcnMgYXJlIHVzaW5nIGludGVybmFsbHkgdG9cbi8vIHRyaWdnZXIgYSBuYXRpdmUgc2Nyb2xsLlxuY29uc3QgVU5DRVJUQUlOVFlfVEhSRVNIT0xEID0gMzsgLy8gcHhcblxuLy8gV2UgY2FuIG9ubHkgaGF2ZSBvbmUgbm9kZSBhdCB0aGUgdGltZSBjbGFpbWluZyBvd25lcnNoaXAgZm9yIGhhbmRsaW5nIHRoZSBzd2lwZS5cbi8vIE90aGVyd2lzZSwgdGhlIFVYIHdvdWxkIGJlIGNvbmZ1c2luZy5cbi8vIFRoYXQncyB3aHkgd2UgdXNlIGEgc2luZ2xldG9uIGhlcmUuXG5sZXQgbm9kZVRoYXRDbGFpbWVkVGhlU3dpcGUgPSBudWxsO1xuXG4vLyBFeHBvcnRlZCBmb3IgdGVzdCBwdXJwb3Nlcy5cbmV4cG9ydCBmdW5jdGlvbiByZXNldCgpIHtcbiAgbm9kZVRoYXRDbGFpbWVkVGhlU3dpcGUgPSBudWxsO1xufVxuXG5jbGFzcyBTd2lwZWFibGVEcmF3ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKCkge1xuICAgIC8vIFJlc2V0IHRoZSBtYXliZVN3aXBpbmcgc3RhdGUgZXZlcnl0aW1lIHdlIHJlY2VpdmUgbmV3IHByb3BlcnRpZXMuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1heWJlU3dpcGluZzogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRlID0ge307XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMudmFyaWFudCA9PT0gJ3RlbXBvcmFyeScpIHtcbiAgICAgIHRoaXMubGlzdGVuVG91Y2hTdGFydCgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBjb25zdCB2YXJpYW50ID0gdGhpcy5wcm9wcy52YXJpYW50O1xuICAgIGNvbnN0IHByZXZWYXJpYW50ID0gcHJldlByb3BzLnZhcmlhbnQ7XG5cbiAgICBpZiAodmFyaWFudCA9PT0gJ3RlbXBvcmFyeScgJiYgcHJldlZhcmlhbnQgIT09ICd0ZW1wb3JhcnknKSB7XG4gICAgICB0aGlzLmxpc3RlblRvdWNoU3RhcnQoKTtcbiAgICB9IGVsc2UgaWYgKHZhcmlhbnQgIT09ICd0ZW1wb3JhcnknICYmIHByZXZWYXJpYW50ID09PSAndGVtcG9yYXJ5Jykge1xuICAgICAgdGhpcy5yZW1vdmVUb3VjaFN0YXJ0KCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5yZW1vdmVUb3VjaFN0YXJ0KCk7XG4gICAgdGhpcy5yZW1vdmVCb2R5VG91Y2hMaXN0ZW5lcnMoKTtcblxuICAgIC8vIFdlIG5lZWQgdG8gcmVsZWFzZSB0aGUgbG9jay5cbiAgICBpZiAobm9kZVRoYXRDbGFpbWVkVGhlU3dpcGUgPT09IHRoaXMpIHtcbiAgICAgIG5vZGVUaGF0Q2xhaW1lZFRoZVN3aXBlID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBnZXRNYXhUcmFuc2xhdGUoKSB7XG4gICAgcmV0dXJuIGlzSG9yaXpvbnRhbCh0aGlzLnByb3BzKSA/IHRoaXMucGFwZXIuY2xpZW50V2lkdGggOiB0aGlzLnBhcGVyLmNsaWVudEhlaWdodDtcbiAgfVxuXG4gIGdldFRyYW5zbGF0ZShjdXJyZW50KSB7XG4gICAgY29uc3Qgc3RhcnQgPSBpc0hvcml6b250YWwodGhpcy5wcm9wcykgPyB0aGlzLnN0YXJ0WCA6IHRoaXMuc3RhcnRZO1xuXG4gICAgcmV0dXJuIE1hdGgubWluKFxuICAgICAgTWF0aC5tYXgoXG4gICAgICAgIHRoaXMuaXNTd2lwaW5nID09PSAnY2xvc2luZycgPyBzdGFydCAtIGN1cnJlbnQgOiB0aGlzLmdldE1heFRyYW5zbGF0ZSgpICsgc3RhcnQgLSBjdXJyZW50LFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIHRoaXMuZ2V0TWF4VHJhbnNsYXRlKCksXG4gICAgKTtcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHRyYW5zbGF0ZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgeyBtb2RlID0gbnVsbCwgY2hhbmdlVHJhbnNpdGlvbiA9IHRydWUgfSA9IG9wdGlvbnM7XG5cbiAgICBjb25zdCBhbmNob3IgPSBnZXRBbmNob3IodGhpcy5wcm9wcyk7XG4gICAgY29uc3QgcnRsVHJhbnNsYXRlTXVsdGlwbGllciA9IFsncmlnaHQnLCAnYm90dG9tJ10uaW5kZXhPZihhbmNob3IpICE9PSAtMSA/IDEgOiAtMTtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBpc0hvcml6b250YWwodGhpcy5wcm9wcylcbiAgICAgID8gYHRyYW5zbGF0ZSgke3J0bFRyYW5zbGF0ZU11bHRpcGxpZXIgKiB0cmFuc2xhdGV9cHgsIDApYFxuICAgICAgOiBgdHJhbnNsYXRlKDAsICR7cnRsVHJhbnNsYXRlTXVsdGlwbGllciAqIHRyYW5zbGF0ZX1weClgO1xuICAgIGNvbnN0IGRyYXdlclN0eWxlID0gdGhpcy5wYXBlci5zdHlsZTtcbiAgICBkcmF3ZXJTdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgZHJhd2VyU3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuXG4gICAgbGV0IHRyYW5zaXRpb24gPSAnJztcblxuICAgIGlmIChtb2RlKSB7XG4gICAgICB0cmFuc2l0aW9uID0gdGhpcy5wcm9wcy50aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXG4gICAgICAgICdhbGwnLFxuICAgICAgICBnZXRUcmFuc2l0aW9uUHJvcHMoXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGltZW91dDogdGhpcy5wcm9wcy50cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtb2RlLFxuICAgICAgICAgIH0sXG4gICAgICAgICksXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VUcmFuc2l0aW9uKSB7XG4gICAgICBkcmF3ZXJTdHlsZS53ZWJraXRUcmFuc2l0aW9uID0gdHJhbnNpdGlvbjtcbiAgICAgIGRyYXdlclN0eWxlLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5wcm9wcy5kaXNhYmxlQmFja2Ryb3BUcmFuc2l0aW9uKSB7XG4gICAgICBjb25zdCBiYWNrZHJvcFN0eWxlID0gdGhpcy5iYWNrZHJvcC5zdHlsZTtcbiAgICAgIGJhY2tkcm9wU3R5bGUub3BhY2l0eSA9IDEgLSB0cmFuc2xhdGUgLyB0aGlzLmdldE1heFRyYW5zbGF0ZSgpO1xuXG4gICAgICBpZiAoY2hhbmdlVHJhbnNpdGlvbikge1xuICAgICAgICBiYWNrZHJvcFN0eWxlLndlYmtpdFRyYW5zaXRpb24gPSB0cmFuc2l0aW9uO1xuICAgICAgICBiYWNrZHJvcFN0eWxlLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUJvZHlUb3VjaFN0YXJ0ID0gZXZlbnQgPT4ge1xuICAgIC8vIFdlIGFyZSBub3Qgc3VwcG9zZWQgdG8gaGFubGRlIHRoaXMgdG91Y2ggbW92ZS5cbiAgICBpZiAobm9kZVRoYXRDbGFpbWVkVGhlU3dpcGUgIT09IG51bGwgJiYgbm9kZVRoYXRDbGFpbWVkVGhlU3dpcGUgIT09IHRoaXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IGRpc2FibGVEaXNjb3ZlcnksIG9wZW4sIHN3aXBlQXJlYVdpZHRoIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGFuY2hvciA9IGdldEFuY2hvcih0aGlzLnByb3BzKTtcbiAgICBjb25zdCBjdXJyZW50WCA9XG4gICAgICBhbmNob3IgPT09ICdyaWdodCdcbiAgICAgICAgPyBkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoIC0gZXZlbnQudG91Y2hlc1swXS5wYWdlWFxuICAgICAgICA6IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVg7XG4gICAgY29uc3QgY3VycmVudFkgPVxuICAgICAgYW5jaG9yID09PSAnYm90dG9tJ1xuICAgICAgICA/IHdpbmRvdy5pbm5lckhlaWdodCAtIGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WVxuICAgICAgICA6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcblxuICAgIGlmICghb3Blbikge1xuICAgICAgaWYgKGlzSG9yaXpvbnRhbCh0aGlzLnByb3BzKSkge1xuICAgICAgICBpZiAoY3VycmVudFggPiBzd2lwZUFyZWFXaWR0aCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjdXJyZW50WSA+IHN3aXBlQXJlYVdpZHRoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBub2RlVGhhdENsYWltZWRUaGVTd2lwZSA9IHRoaXM7XG4gICAgdGhpcy5zdGFydFggPSBjdXJyZW50WDtcbiAgICB0aGlzLnN0YXJ0WSA9IGN1cnJlbnRZO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1heWJlU3dpcGluZzogdHJ1ZSB9KTtcbiAgICBpZiAoIW9wZW4pIHtcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRNYXhUcmFuc2xhdGUoKSArIChkaXNhYmxlRGlzY292ZXJ5ID8gMjAgOiAtc3dpcGVBcmVhV2lkdGgpLCB7XG4gICAgICAgIGNoYW5nZVRyYW5zaXRpb246IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmhhbmRsZUJvZHlUb3VjaE1vdmUsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuaGFuZGxlQm9keVRvdWNoRW5kKTtcbiAgICAvLyBodHRwczovL3BsdXMuZ29vZ2xlLmNvbS8rUGF1bElyaXNoL3Bvc3RzL0tUd2ZuMVkyMjM4XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXMuaGFuZGxlQm9keVRvdWNoRW5kKTtcbiAgfTtcblxuICBoYW5kbGVCb2R5VG91Y2hNb3ZlID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IGFuY2hvciA9IGdldEFuY2hvcih0aGlzLnByb3BzKTtcbiAgICBjb25zdCBob3Jpem9udGFsU3dpcGUgPSBpc0hvcml6b250YWwodGhpcy5wcm9wcyk7XG5cbiAgICBjb25zdCBjdXJyZW50WCA9XG4gICAgICBhbmNob3IgPT09ICdyaWdodCdcbiAgICAgICAgPyBkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoIC0gZXZlbnQudG91Y2hlc1swXS5wYWdlWFxuICAgICAgICA6IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVg7XG4gICAgY29uc3QgY3VycmVudFkgPVxuICAgICAgYW5jaG9yID09PSAnYm90dG9tJ1xuICAgICAgICA/IHdpbmRvdy5pbm5lckhlaWdodCAtIGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WVxuICAgICAgICA6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcblxuICAgIC8vIFdlIGRvbid0IGtub3cgeWV0LlxuICAgIGlmICh0aGlzLmlzU3dpcGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBkeCA9IE1hdGguYWJzKGN1cnJlbnRYIC0gdGhpcy5zdGFydFgpO1xuICAgICAgY29uc3QgZHkgPSBNYXRoLmFicyhjdXJyZW50WSAtIHRoaXMuc3RhcnRZKTtcblxuICAgICAgLy8gV2UgYXJlIGxpa2VseSB0byBiZSBzd2lwaW5nLCBsZXQncyBwcmV2ZW50IHRoZSBzY3JvbGwgZXZlbnQgb24gaU9TLlxuICAgICAgaWYgKGR4ID4gZHkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNTd2lwaW5nID0gaG9yaXpvbnRhbFN3aXBlXG4gICAgICAgID8gZHggPiBkeSAmJiBkeCA+IFVOQ0VSVEFJTlRZX1RIUkVTSE9MRFxuICAgICAgICA6IGR5ID4gZHggJiYgZHkgPiBVTkNFUlRBSU5UWV9USFJFU0hPTEQ7XG5cbiAgICAgIGlmIChcbiAgICAgICAgaXNTd2lwaW5nID09PSB0cnVlIHx8XG4gICAgICAgIChob3Jpem9udGFsU3dpcGUgPyBkeSA+IFVOQ0VSVEFJTlRZX1RIUkVTSE9MRCA6IGR4ID4gVU5DRVJUQUlOVFlfVEhSRVNIT0xEKVxuICAgICAgKSB7XG4gICAgICAgIGlmIChpc1N3aXBpbmcpIHtcbiAgICAgICAgICB0aGlzLmlzU3dpcGluZyA9IHRoaXMucHJvcHMub3BlbiA/ICdjbG9zaW5nJyA6ICdvcGVuaW5nJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmlzU3dpcGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuaGFuZGxlQm9keVRvdWNoRW5kKGV2ZW50KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTaGlmdCB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gICAgICAgIHRoaXMuc3RhcnRYID0gY3VycmVudFg7XG4gICAgICAgIHRoaXMuc3RhcnRZID0gY3VycmVudFk7XG5cbiAgICAgICAgLy8gQ29tcGVuc2F0ZSBmb3IgdGhlIHBhcnQgb2YgdGhlIGRyYXdlciBkaXNwbGF5ZWQgb24gdG91Y2ggc3RhcnQuXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5kaXNhYmxlRGlzY292ZXJ5ICYmICF0aGlzLnByb3BzLm9wZW4pIHtcbiAgICAgICAgICBpZiAoaG9yaXpvbnRhbFN3aXBlKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0WCAtPSB0aGlzLnByb3BzLnN3aXBlQXJlYVdpZHRoO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0WSAtPSB0aGlzLnByb3BzLnN3aXBlQXJlYVdpZHRoO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmlzU3dpcGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gV2UgYXJlIHN3aXBpbmcsIGxldCdzIHByZXZlbnQgdGhlIHNjcm9sbCBldmVudCBvbiBpT1MuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuZ2V0VHJhbnNsYXRlKGhvcml6b250YWxTd2lwZSA/IGN1cnJlbnRYIDogY3VycmVudFkpKTtcbiAgfTtcblxuICBoYW5kbGVCb2R5VG91Y2hFbmQgPSBldmVudCA9PiB7XG4gICAgbm9kZVRoYXRDbGFpbWVkVGhlU3dpcGUgPSBudWxsO1xuICAgIHRoaXMucmVtb3ZlQm9keVRvdWNoTGlzdGVuZXJzKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1heWJlU3dpcGluZzogZmFsc2UgfSk7XG5cbiAgICAvLyBUaGUgc3dpcGUgd2Fzbid0IHN0YXJ0ZWQuXG4gICAgaWYgKHRoaXMuaXNTd2lwaW5nICE9PSAnb3BlbmluZycgJiYgdGhpcy5pc1N3aXBpbmcgIT09ICdjbG9zaW5nJykge1xuICAgICAgdGhpcy5pc1N3aXBpbmcgPSB1bmRlZmluZWQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYW5jaG9yID0gZ2V0QW5jaG9yKHRoaXMucHJvcHMpO1xuICAgIGxldCBjdXJyZW50O1xuICAgIGlmIChpc0hvcml6b250YWwodGhpcy5wcm9wcykpIHtcbiAgICAgIGN1cnJlbnQgPVxuICAgICAgICBhbmNob3IgPT09ICdyaWdodCdcbiAgICAgICAgICA/IGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGggLSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWFxuICAgICAgICAgIDogZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnQgPVxuICAgICAgICBhbmNob3IgPT09ICdib3R0b20nXG4gICAgICAgICAgPyB3aW5kb3cuaW5uZXJIZWlnaHQgLSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZXG4gICAgICAgICAgOiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xuICAgIH1cbiAgICBjb25zdCB0cmFuc2xhdGVSYXRpbyA9IHRoaXMuZ2V0VHJhbnNsYXRlKGN1cnJlbnQpIC8gdGhpcy5nZXRNYXhUcmFuc2xhdGUoKTtcblxuICAgIC8vIFdlIGhhdmUgdG8gb3BlbiBvciBjbG9zZSBhZnRlciBzZXR0aW5nIHN3aXBpbmcgdG8gbnVsbCxcbiAgICAvLyBiZWNhdXNlIG9ubHkgdGhlbiBDU1MgdHJhbnNpdGlvbiBpcyBlbmFibGVkLlxuICAgIGlmICh0cmFuc2xhdGVSYXRpbyA+IDAuNSkge1xuICAgICAgaWYgKHRoaXMuaXNTd2lwaW5nID09PSAnb3BlbmluZycpIHtcbiAgICAgICAgLy8gUmVzZXQgdGhlIHBvc2l0aW9uLCB0aGUgc3dpcGUgd2FzIGFib3J0ZWQuXG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRNYXhUcmFuc2xhdGUoKSwge1xuICAgICAgICAgIG1vZGU6ICdlbnRlcicsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNsb3NlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzU3dpcGluZyA9PT0gJ29wZW5pbmcnKSB7XG4gICAgICB0aGlzLnByb3BzLm9uT3BlbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZXNldCB0aGUgcG9zaXRpb24sIHRoZSBzd2lwZSB3YXMgYWJvcnRlZC5cbiAgICAgIHRoaXMuc2V0UG9zaXRpb24oMCwge1xuICAgICAgICBtb2RlOiAnZXhpdCcsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmlzU3dpcGluZyA9IHVuZGVmaW5lZDtcbiAgfTtcblxuICBiYWNrZHJvcCA9IG51bGw7XG4gIHBhcGVyID0gbnVsbDtcbiAgaXNTd2lwaW5nID0gdW5kZWZpbmVkO1xuICBzdGFydFggPSBudWxsO1xuICBzdGFydFkgPSBudWxsO1xuXG4gIGxpc3RlblRvdWNoU3RhcnQoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5oYW5kbGVCb2R5VG91Y2hTdGFydCk7XG4gIH1cblxuICByZW1vdmVUb3VjaFN0YXJ0KCkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuaGFuZGxlQm9keVRvdWNoU3RhcnQpO1xuICB9XG5cbiAgcmVtb3ZlQm9keVRvdWNoTGlzdGVuZXJzKCkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5oYW5kbGVCb2R5VG91Y2hNb3ZlLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmhhbmRsZUJvZHlUb3VjaEVuZCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXMuaGFuZGxlQm9keVRvdWNoRW5kKTtcbiAgfVxuXG4gIGhhbmRsZUJhY2tkcm9wUmVmID0gbm9kZSA9PiB7XG4gICAgdGhpcy5iYWNrZHJvcCA9IG5vZGUgPyBSZWFjdERPTS5maW5kRE9NTm9kZShub2RlKSA6IG51bGw7XG4gIH07XG5cbiAgaGFuZGxlUGFwZXJSZWYgPSBub2RlID0+IHtcbiAgICB0aGlzLnBhcGVyID0gbm9kZSA/IFJlYWN0RE9NLmZpbmRET01Ob2RlKG5vZGUpIDogbnVsbDtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZGlzYWJsZUJhY2tkcm9wVHJhbnNpdGlvbixcbiAgICAgIGRpc2FibGVEaXNjb3ZlcnksXG4gICAgICBNb2RhbFByb3BzOiB7IEJhY2tkcm9wUHJvcHMsIC4uLk1vZGFsUHJvcHNQcm9wIH0gPSB7fSxcbiAgICAgIG9uT3BlbixcbiAgICAgIG9wZW4sXG4gICAgICBQYXBlclByb3BzLFxuICAgICAgc3dpcGVBcmVhV2lkdGgsXG4gICAgICB2YXJpYW50LFxuICAgICAgLi4ub3RoZXJcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IG1heWJlU3dpcGluZyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8RHJhd2VyXG4gICAgICAgIG9wZW49e3ZhcmlhbnQgPT09ICd0ZW1wb3JhcnknICYmIG1heWJlU3dpcGluZyA/IHRydWUgOiBvcGVufVxuICAgICAgICB2YXJpYW50PXt2YXJpYW50fVxuICAgICAgICBNb2RhbFByb3BzPXt7XG4gICAgICAgICAgQmFja2Ryb3BQcm9wczoge1xuICAgICAgICAgICAgLi4uQmFja2Ryb3BQcm9wcyxcbiAgICAgICAgICAgIHJlZjogdGhpcy5oYW5kbGVCYWNrZHJvcFJlZixcbiAgICAgICAgICB9LFxuICAgICAgICAgIC4uLk1vZGFsUHJvcHNQcm9wLFxuICAgICAgICB9fVxuICAgICAgICBQYXBlclByb3BzPXt7XG4gICAgICAgICAgLi4uUGFwZXJQcm9wcyxcbiAgICAgICAgICByZWY6IHRoaXMuaGFuZGxlUGFwZXJSZWYsXG4gICAgICAgIH19XG4gICAgICAgIHsuLi5vdGhlcn1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5Td2lwZWFibGVEcmF3ZXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgYW5jaG9yOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3RvcCcsICdyaWdodCcsICdib3R0b20nXSksXG4gIC8qKlxuICAgKiBEaXNhYmxlIHRoZSBiYWNrZHJvcCB0cmFuc2l0aW9uLlxuICAgKiBUaGlzIGNhbiBpbXByb3ZlIHRoZSBGUFMgb24gbG93LWVuZCBkZXZpY2VzLlxuICAgKi9cbiAgZGlzYWJsZUJhY2tkcm9wVHJhbnNpdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRvdWNoaW5nIHRoZSBzY3JlZW4gbmVhciB0aGUgZWRnZSBvZiB0aGUgZHJhd2VyIHdpbGwgbm90IHNsaWRlIGluIHRoZSBkcmF3ZXIgYSBiaXRcbiAgICogdG8gcHJvbW90ZSBhY2NpZGVudGFsIGRpc2NvdmVyeSBvZiB0aGUgc3dpcGUgZ2VzdHVyZS5cbiAgICovXG4gIGRpc2FibGVEaXNjb3Zlcnk6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgTW9kYWxQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNvbXBvbmVudCByZXF1ZXN0cyB0byBiZSBjbG9zZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFja1xuICAgKi9cbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNvbXBvbmVudCByZXF1ZXN0cyB0byBiZSBvcGVuZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFja1xuICAgKi9cbiAgb25PcGVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgZHJhd2VyIGlzIG9wZW4uXG4gICAqL1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgUGFwZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIFRoZSB3aWR0aCBvZiB0aGUgbGVmdCBtb3N0IChvciByaWdodCBtb3N0KSBhcmVhIGluIHBpeGVscyB3aGVyZSB0aGVcbiAgICogZHJhd2VyIGNhbiBiZSBzd2lwZWQgb3BlbiBmcm9tLlxuICAgKi9cbiAgc3dpcGVBcmVhV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogVGhlIGR1cmF0aW9uIGZvciB0aGUgdHJhbnNpdGlvbiwgaW4gbWlsbGlzZWNvbmRzLlxuICAgKiBZb3UgbWF5IHNwZWNpZnkgYSBzaW5nbGUgdGltZW91dCBmb3IgYWxsIHRyYW5zaXRpb25zLCBvciBpbmRpdmlkdWFsbHkgd2l0aCBhbiBvYmplY3QuXG4gICAqL1xuICB0cmFuc2l0aW9uRHVyYXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLnNoYXBlKHsgZW50ZXI6IFByb3BUeXBlcy5udW1iZXIsIGV4aXQ6IFByb3BUeXBlcy5udW1iZXIgfSksXG4gIF0pLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsncGVybWFuZW50JywgJ3BlcnNpc3RlbnQnLCAndGVtcG9yYXJ5J10pLFxufTtcblxuU3dpcGVhYmxlRHJhd2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgYW5jaG9yOiAnbGVmdCcsXG4gIGRpc2FibGVCYWNrZHJvcFRyYW5zaXRpb246IGZhbHNlLFxuICBkaXNhYmxlRGlzY292ZXJ5OiBmYWxzZSxcbiAgc3dpcGVBcmVhV2lkdGg6IDIwLFxuICB0cmFuc2l0aW9uRHVyYXRpb246IHsgZW50ZXI6IGR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLCBleGl0OiBkdXJhdGlvbi5sZWF2aW5nU2NyZWVuIH0sXG4gIHZhcmlhbnQ6ICd0ZW1wb3JhcnknLCAvLyBNb2JpbGUgZmlyc3QuXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoKShwb2x5ZmlsbChTd2lwZWFibGVEcmF3ZXIpKTtcbiJdfQ==

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