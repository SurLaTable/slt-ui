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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Transition = require('react-transition-group/Transition');

var _Transition2 = _interopRequireDefault(_Transition);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _transitions = require('../styles/transitions');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    container: {
      height: 0,
      overflow: 'hidden',
      transition: theme.transitions.create('height')
    },
    entered: {
      height: 'auto'
    },
    wrapper: {
      // Hack to get children with a negative margin to not falsify the height computation.
      display: 'flex'
    },
    wrapperInner: {
      width: '100%'
    }
  };
};

/**
 * The Collapse transition is used by the
 * [Vertical Stepper](/demos/steppers#vertical-stepper) StepContent component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */
// @inheritedComponent Transition

var Collapse = function (_React$Component) {
  (0, _inherits3.default)(Collapse, _React$Component);

  function Collapse() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Collapse);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Collapse.__proto__ || (0, _getPrototypeOf2.default)(Collapse)).call.apply(_ref, [this].concat(args))), _this), _this.wrapper = null, _this.autoTransitionDuration = undefined, _this.timer = null, _this.handleEnter = function (node) {
      node.style.height = _this.props.collapsedHeight;

      if (_this.props.onEnter) {
        _this.props.onEnter(node);
      }
    }, _this.handleEntering = function (node) {
      var _this$props = _this.props,
          timeout = _this$props.timeout,
          theme = _this$props.theme;

      var wrapperHeight = _this.wrapper ? _this.wrapper.clientHeight : 0;

      var _getTransitionProps = (0, _utils.getTransitionProps)(_this.props, {
        mode: 'enter'
      }),
          transitionDuration = _getTransitionProps.duration;

      if (timeout === 'auto') {
        var duration2 = theme.transitions.getAutoHeightDuration(wrapperHeight);
        node.style.transitionDuration = duration2 + 'ms';
        _this.autoTransitionDuration = duration2;
      } else {
        node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : transitionDuration + 'ms';
      }

      node.style.height = wrapperHeight + 'px';

      if (_this.props.onEntering) {
        _this.props.onEntering(node);
      }
    }, _this.handleEntered = function (node) {
      node.style.height = 'auto';

      if (_this.props.onEntered) {
        _this.props.onEntered(node);
      }
    }, _this.handleExit = function (node) {
      var wrapperHeight = _this.wrapper ? _this.wrapper.clientHeight : 0;
      node.style.height = wrapperHeight + 'px';

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    }, _this.handleExiting = function (node) {
      var _this$props2 = _this.props,
          timeout = _this$props2.timeout,
          theme = _this$props2.theme;

      var wrapperHeight = _this.wrapper ? _this.wrapper.clientHeight : 0;

      var _getTransitionProps2 = (0, _utils.getTransitionProps)(_this.props, {
        mode: 'exit'
      }),
          transitionDuration = _getTransitionProps2.duration;

      if (timeout === 'auto') {
        var duration2 = theme.transitions.getAutoHeightDuration(wrapperHeight);
        node.style.transitionDuration = duration2 + 'ms';
        _this.autoTransitionDuration = duration2;
      } else {
        node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : transitionDuration + 'ms';
      }

      node.style.height = _this.props.collapsedHeight;

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    }, _this.addEndListener = function (_, next) {
      if (_this.props.timeout === 'auto') {
        _this.timer = setTimeout(next, _this.autoTransitionDuration || 0);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Collapse, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timer);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          collapsedHeight = _props.collapsedHeight,
          Component = _props.component,
          onEnter = _props.onEnter,
          onEntered = _props.onEntered,
          onEntering = _props.onEntering,
          onExit = _props.onExit,
          onExiting = _props.onExiting,
          style = _props.style,
          theme = _props.theme,
          timeout = _props.timeout,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'classes', 'className', 'collapsedHeight', 'component', 'onEnter', 'onEntered', 'onEntering', 'onExit', 'onExiting', 'style', 'theme', 'timeout']);


      return _react2.default.createElement(
        _Transition2.default,
        (0, _extends3.default)({
          onEnter: this.handleEnter,
          onEntered: this.handleEntered,
          onEntering: this.handleEntering,
          onExit: this.handleExit,
          onExiting: this.handleExiting,
          addEndListener: this.addEndListener,
          timeout: timeout === 'auto' ? null : timeout
        }, other),
        function (state, childProps) {
          return _react2.default.createElement(
            Component,
            (0, _extends3.default)({
              className: (0, _classnames2.default)(classes.container, (0, _defineProperty3.default)({}, classes.entered, state === 'entered'), className),
              style: (0, _extends3.default)({}, style, {
                minHeight: collapsedHeight
              })
            }, childProps),
            _react2.default.createElement(
              'div',
              {
                className: classes.wrapper,
                ref: function ref(node) {
                  _this2.wrapper = node;
                }
              },
              _react2.default.createElement(
                'div',
                { className: classes.wrapperInner },
                children
              )
            )
          );
        }
      );
    }
  }]);
  return Collapse;
}(_react2.default.Component);

Collapse.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The content node to be collapsed.
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
   * The height of the container when collapsed.
   */
  collapsedHeight: _propTypes2.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * If `true`, the component will transition in.
   */
  in: _propTypes2.default.bool,
  /**
   * @ignore
   */
  onEnter: _propTypes2.default.func,
  /**
   * @ignore
   */
  onEntered: _propTypes2.default.func,
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
  onExiting: _propTypes2.default.func,
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
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  timeout: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({ enter: _propTypes2.default.number, exit: _propTypes2.default.number }), _propTypes2.default.oneOf(['auto'])])
} : {};

Collapse.defaultProps = {
  collapsedHeight: '0px',
  component: 'div',
  timeout: _transitions.duration.standard
};

exports.default = (0, _withStyles2.default)(styles, {
  withTheme: true,
  name: 'MuiCollapse'
})(Collapse);