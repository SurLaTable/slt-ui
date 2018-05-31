"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _getPrototypeOf = _interopRequireDefault(require("@babel/runtime/core-js/object/get-prototype-of"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _keycode = _interopRequireDefault(require("keycode"));

var _contains = _interopRequireDefault(require("dom-helpers/query/contains"));

var _activeElement = _interopRequireDefault(require("dom-helpers/activeElement"));

var _ownerDocument = _interopRequireDefault(require("dom-helpers/ownerDocument"));

var _List = _interopRequireDefault(require("../List"));

// @inheritedComponent List
var MenuList =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(MenuList, _React$Component);

  function MenuList() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, MenuList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = MenuList.__proto__ || (0, _getPrototypeOf.default)(MenuList)).call.apply(_ref, [this].concat(args))), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        currentTabIndex: undefined
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "list", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: undefined
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "selectedItem", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: undefined
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "blurTimer", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: undefined
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleBlur", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this.blurTimer = setTimeout(function () {
          if (_this.list) {
            var list = _reactDom.default.findDOMNode(_this.list);

            var currentFocus = (0, _activeElement.default)((0, _ownerDocument.default)(list));

            if (!(0, _contains.default)(list, currentFocus)) {
              _this.resetTabIndex();
            }
          }
        }, 30);

        if (_this.props.onBlur) {
          _this.props.onBlur(event);
        }
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleKeyDown", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        var list = _reactDom.default.findDOMNode(_this.list);

        var key = (0, _keycode.default)(event);
        var currentFocus = (0, _activeElement.default)((0, _ownerDocument.default)(list));

        if ((key === 'up' || key === 'down') && (!currentFocus || currentFocus && !(0, _contains.default)(list, currentFocus))) {
          if (_this.selectedItem) {
            _reactDom.default.findDOMNode(_this.selectedItem).focus();
          } else {
            list.firstChild.focus();
          }
        } else if (key === 'down') {
          event.preventDefault();

          if (currentFocus.nextElementSibling) {
            currentFocus.nextElementSibling.focus();
          }
        } else if (key === 'up') {
          event.preventDefault();

          if (currentFocus.previousElementSibling) {
            currentFocus.previousElementSibling.focus();
          }
        }

        if (_this.props.onKeyDown) {
          _this.props.onKeyDown(event, key);
        }
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleItemFocus", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        var list = _reactDom.default.findDOMNode(_this.list);

        if (list) {
          for (var i = 0; i < list.children.length; i += 1) {
            if (list.children[i] === event.currentTarget) {
              _this.setTabIndex(i);

              break;
            }
          }
        }
      }
    }), _temp));
  }

  (0, _createClass2.default)(MenuList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.resetTabIndex();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.blurTimer);
    }
  }, {
    key: "setTabIndex",
    value: function setTabIndex(index) {
      this.setState({
        currentTabIndex: index
      });
    }
  }, {
    key: "focus",
    value: function focus() {
      var currentTabIndex = this.state.currentTabIndex;

      var list = _reactDom.default.findDOMNode(this.list);

      if (!list || !list.children || !list.firstChild) {
        return;
      }

      if (currentTabIndex && currentTabIndex >= 0) {
        list.children[currentTabIndex].focus();
      } else {
        list.firstChild.focus();
      }
    }
  }, {
    key: "resetTabIndex",
    value: function resetTabIndex() {
      var list = _reactDom.default.findDOMNode(this.list);

      var currentFocus = (0, _activeElement.default)((0, _ownerDocument.default)(list));
      var items = (0, _toConsumableArray2.default)(list.children);
      var currentFocusIndex = items.indexOf(currentFocus);

      if (currentFocusIndex !== -1) {
        return this.setTabIndex(currentFocusIndex);
      }

      if (this.selectedItem) {
        return this.setTabIndex(items.indexOf(_reactDom.default.findDOMNode(this.selectedItem)));
      }

      return this.setTabIndex(0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          onBlur = _props.onBlur,
          onKeyDown = _props.onKeyDown,
          other = (0, _objectWithoutProperties2.default)(_props, ["children", "className", "onBlur", "onKeyDown"]);
      return _react.default.createElement(_List.default, (0, _extends2.default)({
        role: "menu",
        ref: function ref(node) {
          _this2.list = node;
        },
        className: className,
        onKeyDown: this.handleKeyDown,
        onBlur: this.handleBlur
      }, other), _react.default.Children.map(children, function (child, index) {
        if (!_react.default.isValidElement(child)) {
          return null;
        }

        return _react.default.cloneElement(child, {
          tabIndex: index === _this2.state.currentTabIndex ? 0 : -1,
          ref: child.props.selected ? function (node) {
            _this2.selectedItem = node;
          } : undefined,
          onFocus: _this2.handleItemFocus
        });
      }));
    }
  }]);
  return MenuList;
}(_react.default.Component);

MenuList.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: _propTypes.default.node,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * @ignore
   */
  onBlur: _propTypes.default.func,

  /**
   * @ignore
   */
  onKeyDown: _propTypes.default.func
} : {};
var _default = MenuList;
exports.default = _default;