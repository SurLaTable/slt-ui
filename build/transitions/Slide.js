'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

exports.setTranslateValue = setTranslateValue;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactEventListener = require('react-event-listener');

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _Transition = require('react-transition-group/Transition');

var _Transition2 = _interopRequireDefault(_Transition);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _ownerWindow = require('../utils/ownerWindow');

var _ownerWindow2 = _interopRequireDefault(_ownerWindow);

var _withTheme = require('../styles/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _transitions = require('../styles/transitions');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GUTTER = 24;

// Translate the node so he can't be seen on the screen.
// Later, we gonna translate back the node to his original location
// with `translate3d(0, 0, 0)`.`
// @inheritedComponent Transition

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
  (0, _inherits3.default)(Slide, _React$Component);

  function Slide() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Slide);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Slide.__proto__ || (0, _getPrototypeOf2.default)(Slide)).call.apply(_ref, [this].concat(args))), _this), _this.mounted = false, _this.transition = null, _this.handleResize = (0, _debounce2.default)(function () {
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
      node.style.webkitTransition = theme.transitions.create('-webkit-transform', (0, _extends3.default)({}, transitionProps, {
        easing: theme.transitions.easing.easeOut
      }));
      node.style.transition = theme.transitions.create('transform', (0, _extends3.default)({}, transitionProps, {
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
      node.style.webkitTransition = theme.transitions.create('-webkit-transform', (0, _extends3.default)({}, transitionProps, {
        easing: theme.transitions.easing.sharp
      }));
      node.style.transition = theme.transitions.create('transform', (0, _extends3.default)({}, transitionProps, {
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
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Slide, [{
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
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'onEnter', 'onEntering', 'onExit', 'onExited', 'style', 'theme']);


      var style = {};

      // We use this state to handle the server-side rendering.
      // We don't know the width of the children ahead of time.
      // We need to render it.
      if (!this.props.in && !this.mounted) {
        style.visibility = 'hidden';
      }

      style = (0, _extends3.default)({}, style, styleProp, _react2.default.isValidElement(children) ? children.props.style : {});

      return _react2.default.createElement(
        _reactEventListener2.default,
        { target: 'window', onResize: this.handleResize },
        _react2.default.createElement(
          _Transition2.default,
          (0, _extends3.default)({
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

Slide.propTypes = process.env.NODE_ENV !== "production" ? {
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
} : {};

Slide.defaultProps = {
  direction: 'down',
  timeout: {
    enter: _transitions.duration.enteringScreen,
    exit: _transitions.duration.leavingScreen
  }
};

exports.default = (0, _withTheme2.default)()((0, _reactLifecyclesCompat.polyfill)(Slide));