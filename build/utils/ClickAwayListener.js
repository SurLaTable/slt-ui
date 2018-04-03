'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactEventListener = require('react-event-listener');

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _ownerDocument = require('dom-helpers/ownerDocument');

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isDescendant = function isDescendant(el, target) {
  if (target !== null && target.parentNode) {
    return el === target || isDescendant(el, target.parentNode);
  }
  return false;
};

/**
 * Listen for click events that are triggered outside of the component children.
 */
// @inheritedComponent EventListener

var ClickAwayListener = function (_React$Component) {
  (0, _inherits3.default)(ClickAwayListener, _React$Component);

  function ClickAwayListener() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ClickAwayListener);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ClickAwayListener.__proto__ || (0, _getPrototypeOf2.default)(ClickAwayListener)).call.apply(_ref, [this].concat(args))), _this), _this.mounted = false, _this.handleClickAway = function (event) {
      // Ignore events that have been `event.preventDefault()` marked.
      if (event.defaultPrevented) {
        return;
      }

      // IE11 support, which trigger the handleClickAway even after the unbind
      if (!_this.mounted) {
        return;
      }

      var el = _reactDom2.default.findDOMNode(_this);
      var doc = (0, _ownerDocument2.default)(el);

      if (doc.documentElement && doc.documentElement.contains(event.target) && !isDescendant(el, event.target)) {
        _this.props.onClickAway(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ClickAwayListener, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.mounted = true;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.mounted = false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          mouseEvent = _props.mouseEvent,
          touchEvent = _props.touchEvent,
          onClickAway = _props.onClickAway,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'mouseEvent', 'touchEvent', 'onClickAway']);

      var listenerProps = {};
      if (mouseEvent !== false) {
        listenerProps[mouseEvent] = this.handleClickAway;
      }
      if (touchEvent !== false) {
        listenerProps[touchEvent] = this.handleClickAway;
      }

      return _react2.default.createElement(
        _reactEventListener2.default,
        (0, _extends3.default)({ target: 'document' }, listenerProps, other),
        children
      );
    }
  }]);
  return ClickAwayListener;
}(_react2.default.Component);

ClickAwayListener.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node.isRequired,
  mouseEvent: _propTypes2.default.oneOf(['onClick', 'onMouseDown', 'onMouseUp', false]),
  onClickAway: _propTypes2.default.func.isRequired,
  touchEvent: _propTypes2.default.oneOf(['onTouchStart', 'onTouchEnd', false])
} : {};

ClickAwayListener.defaultProps = {
  mouseEvent: 'onMouseUp',
  touchEvent: 'onTouchEnd'
};

exports.default = ClickAwayListener;