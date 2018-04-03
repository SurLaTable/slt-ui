webpackJsonpmaterial_ui([15,33],{

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(7);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _keycode = __webpack_require__(61);

var _keycode2 = _interopRequireDefault(_keycode);

var _contains = __webpack_require__(110);

var _contains2 = _interopRequireDefault(_contains);

var _activeElement = __webpack_require__(384);

var _activeElement2 = _interopRequireDefault(_activeElement);

var _ownerDocument = __webpack_require__(19);

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

var _List = __webpack_require__(114);

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // @inheritedComponent List

var MenuList = function (_React$Component) {
  _inherits(MenuList, _React$Component);

  function MenuList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MenuList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MenuList.__proto__ || Object.getPrototypeOf(MenuList)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentTabIndex: undefined
    }, _this.list = undefined, _this.selectedItem = undefined, _this.blurTimer = undefined, _this.handleBlur = function (event) {
      _this.blurTimer = setTimeout(function () {
        if (_this.list) {
          var list = _reactDom2.default.findDOMNode(_this.list);
          var currentFocus = (0, _activeElement2.default)((0, _ownerDocument2.default)(list));
          if (!(0, _contains2.default)(list, currentFocus)) {
            _this.resetTabIndex();
          }
        }
      }, 30);

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    }, _this.handleKeyDown = function (event) {
      var list = _reactDom2.default.findDOMNode(_this.list);
      var key = (0, _keycode2.default)(event);
      var currentFocus = (0, _activeElement2.default)((0, _ownerDocument2.default)(list));

      if ((key === 'up' || key === 'down') && (!currentFocus || currentFocus && !(0, _contains2.default)(list, currentFocus))) {
        if (_this.selectedItem) {
          _reactDom2.default.findDOMNode(_this.selectedItem).focus();
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
    }, _this.handleItemFocus = function (event) {
      var list = _reactDom2.default.findDOMNode(_this.list);
      if (list) {
        for (var i = 0; i < list.children.length; i += 1) {
          if (list.children[i] === event.currentTarget) {
            _this.setTabIndex(i);
            break;
          }
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MenuList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.resetTabIndex();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.blurTimer);
    }
  }, {
    key: 'setTabIndex',
    value: function setTabIndex(index) {
      this.setState({ currentTabIndex: index });
    }
  }, {
    key: 'focus',
    value: function focus() {
      var currentTabIndex = this.state.currentTabIndex;

      var list = _reactDom2.default.findDOMNode(this.list);
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
    key: 'resetTabIndex',
    value: function resetTabIndex() {
      var list = _reactDom2.default.findDOMNode(this.list);
      var currentFocus = (0, _activeElement2.default)((0, _ownerDocument2.default)(list));
      var items = [].concat(_toConsumableArray(list.children));
      var currentFocusIndex = items.indexOf(currentFocus);

      if (currentFocusIndex !== -1) {
        return this.setTabIndex(currentFocusIndex);
      }

      if (this.selectedItem) {
        return this.setTabIndex(items.indexOf(_reactDom2.default.findDOMNode(this.selectedItem)));
      }

      return this.setTabIndex(0);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          onBlur = _props.onBlur,
          onKeyDown = _props.onKeyDown,
          other = _objectWithoutProperties(_props, ['children', 'className', 'onBlur', 'onKeyDown']);

      return _react2.default.createElement(
        _List2.default,
        _extends({
          'data-mui-test': 'MenuList',
          role: 'menu',
          ref: function ref(node) {
            _this2.list = node;
          },
          className: className,
          onKeyDown: this.handleKeyDown,
          onBlur: this.handleBlur
        }, other),
        _react2.default.Children.map(children, function (child, index) {
          if (!_react2.default.isValidElement(child)) {
            return null;
          }

          return _react2.default.cloneElement(child, {
            tabIndex: index === _this2.state.currentTabIndex ? 0 : -1,
            ref: child.props.selected ? function (node) {
              _this2.selectedItem = node;
            } : undefined,
            onFocus: _this2.handleItemFocus
          });
        })
      );
    }
  }]);

  return MenuList;
}(_react2.default.Component);

MenuList.propTypes = {
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: _propTypes2.default.node,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * @ignore
   */
  onBlur: _propTypes2.default.func,
  /**
   * @ignore
   */
  onKeyDown: _propTypes2.default.func
};

exports.default = MenuList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcTWVudVxcTWVudUxpc3QuanMiXSwibmFtZXMiOlsiTWVudUxpc3QiLCJzdGF0ZSIsImN1cnJlbnRUYWJJbmRleCIsInVuZGVmaW5lZCIsImxpc3QiLCJzZWxlY3RlZEl0ZW0iLCJibHVyVGltZXIiLCJoYW5kbGVCbHVyIiwic2V0VGltZW91dCIsImZpbmRET01Ob2RlIiwiY3VycmVudEZvY3VzIiwicmVzZXRUYWJJbmRleCIsInByb3BzIiwib25CbHVyIiwiZXZlbnQiLCJoYW5kbGVLZXlEb3duIiwia2V5IiwiZm9jdXMiLCJmaXJzdENoaWxkIiwicHJldmVudERlZmF1bHQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwib25LZXlEb3duIiwiaGFuZGxlSXRlbUZvY3VzIiwiaSIsImNoaWxkcmVuIiwibGVuZ3RoIiwiY3VycmVudFRhcmdldCIsInNldFRhYkluZGV4IiwiY2xlYXJUaW1lb3V0IiwiaW5kZXgiLCJzZXRTdGF0ZSIsIml0ZW1zIiwiY3VycmVudEZvY3VzSW5kZXgiLCJpbmRleE9mIiwiY2xhc3NOYW1lIiwib3RoZXIiLCJub2RlIiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImlzVmFsaWRFbGVtZW50IiwiY2xvbmVFbGVtZW50IiwidGFiSW5kZXgiLCJyZWYiLCJzZWxlY3RlZCIsIm9uRm9jdXMiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7K2VBVEE7O0lBV01BLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNKQyxLLEdBQVE7QUFDTkMsdUJBQWlCQztBQURYLEssUUFnQlJDLEksR0FBT0QsUyxRQUNQRSxZLEdBQWVGLFMsUUFDZkcsUyxHQUFZSCxTLFFBRVpJLFUsR0FBYSxpQkFBUztBQUNwQixZQUFL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LEdBQWYsQ0FBbUJkLFFBQW5CLEVBQTZCLFVBQUNlLEtBQUQsRUFBUVYsS0FBUixFQUFrQjtBQUM5QyxjQUFJLENBQUMsZ0JBQU1XLGNBQU4sQ0FBcUJELEtBQXJCLENBQUwsRUFBa0M7QUFDaEMsbUJBQU8sSUFBUDtBQUNEOztBQUVELGlCQUFPLGdCQUFNRSxZQUFOLENBQW1CRixLQUFuQixFQUEwQjtBQUMvQkcsc0JBQVViLFVBQVUsT0FBSzdCLEtBQUwsQ0FBV0MsZUFBckIsR0FBdUMsQ0FBdkMsR0FBMkMsQ0FBQyxDQUR2QjtBQUUvQjBDLGlCQUFLSixNQUFNNUIsS0FBTixDQUFZaUMsUUFBWixHQUNELGdCQUFRO0FBQ04scUJBQUt4QyxZQUFMLEdBQW9CZ0MsSUFBcEI7QUFDRCxhQUhBLEdBSURsQyxTQU4yQjtBQU8vQjJDLHFCQUFTLE9BQUt2QjtBQVBpQixXQUExQixDQUFQO0FBU0QsU0FkQTtBQVhILE9BREY7QUE2QkQ7Ozs7RUEvSW9CLGdCQUFNd0IsUzs7QUFrSjdCL0MsU0FBU2dELFNBQVQsR0FBcUI7QUFDbkI7OztBQUdBdkIsWUFBVSxvQkFBVVksSUFKRDtBQUtuQjs7O0FBR0FGLGFBQVcsb0JBQVVjLE1BUkY7QUFTbkI7OztBQUdBcEMsVUFBUSxvQkFBVXFDLElBWkM7QUFhbkI7OztBQUdBNUIsYUFBVyxvQkFBVTRCO0FBaEJGLENBQXJCOztrQkFtQmVsRCxRIiwiZmlsZSI6Ik1lbnVMaXN0LmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3JtY3F1ZW4vc2x0LXVpL21hdGVyaWFsLXVpIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGluaGVyaXRlZENvbXBvbmVudCBMaXN0XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQga2V5Y29kZSBmcm9tICdrZXljb2RlJztcbmltcG9ydCBjb250YWlucyBmcm9tICdkb20taGVscGVycy9xdWVyeS9jb250YWlucyc7XG5pbXBvcnQgYWN0aXZlRWxlbWVudCBmcm9tICdkb20taGVscGVycy9hY3RpdmVFbGVtZW50JztcbmltcG9ydCBvd25lckRvY3VtZW50IGZyb20gJ2RvbS1oZWxwZXJzL293bmVyRG9jdW1lbnQnO1xuaW1wb3J0IExpc3QgZnJvbSAnLi4vTGlzdCc7XG5cbmNsYXNzIE1lbnVMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgY3VycmVudFRhYkluZGV4OiB1bmRlZmluZWQsXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5yZXNldFRhYkluZGV4KCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5ibHVyVGltZXIpO1xuICB9XG5cbiAgc2V0VGFiSW5kZXgoaW5kZXgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFRhYkluZGV4OiBpbmRleCB9KTtcbiAgfVxuXG4gIGxpc3QgPSB1bmRlZmluZWQ7XG4gIHNlbGVjdGVkSXRlbSA9IHVuZGVmaW5lZDtcbiAgYmx1clRpbWVyID0gdW5kZWZpbmVkO1xuXG4gIGhhbmRsZUJsdXIgPSBldmVudCA9PiB7XG4gICAgdGhpcy5ibHVyVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmxpc3QpIHtcbiAgICAgICAgY29uc3QgbGlzdCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMubGlzdCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRGb2N1cyA9IGFjdGl2ZUVsZW1lbnQob3duZXJEb2N1bWVudChsaXN0KSk7XG4gICAgICAgIGlmICghY29udGFpbnMobGlzdCwgY3VycmVudEZvY3VzKSkge1xuICAgICAgICAgIHRoaXMucmVzZXRUYWJJbmRleCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgMzApO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQmx1cihldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUtleURvd24gPSBldmVudCA9PiB7XG4gICAgY29uc3QgbGlzdCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMubGlzdCk7XG4gICAgY29uc3Qga2V5ID0ga2V5Y29kZShldmVudCk7XG4gICAgY29uc3QgY3VycmVudEZvY3VzID0gYWN0aXZlRWxlbWVudChvd25lckRvY3VtZW50KGxpc3QpKTtcblxuICAgIGlmIChcbiAgICAgIChrZXkgPT09ICd1cCcgfHwga2V5ID09PSAnZG93bicpICYmXG4gICAgICAoIWN1cnJlbnRGb2N1cyB8fCAoY3VycmVudEZvY3VzICYmICFjb250YWlucyhsaXN0LCBjdXJyZW50Rm9jdXMpKSlcbiAgICApIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbSkge1xuICAgICAgICBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnNlbGVjdGVkSXRlbSkuZm9jdXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpc3QuZmlyc3RDaGlsZC5mb2N1cygpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnZG93bicpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoY3VycmVudEZvY3VzLm5leHRFbGVtZW50U2libGluZykge1xuICAgICAgICBjdXJyZW50Rm9jdXMubmV4dEVsZW1lbnRTaWJsaW5nLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICd1cCcpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoY3VycmVudEZvY3VzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpIHtcbiAgICAgICAgY3VycmVudEZvY3VzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbktleURvd24pIHtcbiAgICAgIHRoaXMucHJvcHMub25LZXlEb3duKGV2ZW50LCBrZXkpO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVJdGVtRm9jdXMgPSBldmVudCA9PiB7XG4gICAgY29uc3QgbGlzdCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMubGlzdCk7XG4gICAgaWYgKGxpc3QpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5jaGlsZHJlbi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAobGlzdC5jaGlsZHJlbltpXSA9PT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICAgIHRoaXMuc2V0VGFiSW5kZXgoaSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZm9jdXMoKSB7XG4gICAgY29uc3QgeyBjdXJyZW50VGFiSW5kZXggfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgbGlzdCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMubGlzdCk7XG4gICAgaWYgKCFsaXN0IHx8ICFsaXN0LmNoaWxkcmVuIHx8ICFsaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY3VycmVudFRhYkluZGV4ICYmIGN1cnJlbnRUYWJJbmRleCA+PSAwKSB7XG4gICAgICBsaXN0LmNoaWxkcmVuW2N1cnJlbnRUYWJJbmRleF0uZm9jdXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdC5maXJzdENoaWxkLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRUYWJJbmRleCgpIHtcbiAgICBjb25zdCBsaXN0ID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5saXN0KTtcbiAgICBjb25zdCBjdXJyZW50Rm9jdXMgPSBhY3RpdmVFbGVtZW50KG93bmVyRG9jdW1lbnQobGlzdCkpO1xuICAgIGNvbnN0IGl0ZW1zID0gWy4uLmxpc3QuY2hpbGRyZW5dO1xuICAgIGNvbnN0IGN1cnJlbnRGb2N1c0luZGV4ID0gaXRlbXMuaW5kZXhPZihjdXJyZW50Rm9jdXMpO1xuXG4gICAgaWYgKGN1cnJlbnRGb2N1c0luZGV4ICE9PSAtMSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0VGFiSW5kZXgoY3VycmVudEZvY3VzSW5kZXgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0VGFiSW5kZXgoaXRlbXMuaW5kZXhPZihSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnNlbGVjdGVkSXRlbSkpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zZXRUYWJJbmRleCgwKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIG9uQmx1ciwgb25LZXlEb3duLCAuLi5vdGhlciB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8TGlzdFxuICAgICAgICBkYXRhLW11aS10ZXN0PVwiTWVudUxpc3RcIlxuICAgICAgICByb2xlPVwibWVudVwiXG4gICAgICAgIHJlZj17bm9kZSA9PiB7XG4gICAgICAgICAgdGhpcy5saXN0ID0gbm9kZTtcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlEb3dufVxuICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cbiAgICAgICAgey4uLm90aGVyfVxuICAgICAgPlxuICAgICAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICAgIHRhYkluZGV4OiBpbmRleCA9PT0gdGhpcy5zdGF0ZS5jdXJyZW50VGFiSW5kZXggPyAwIDogLTEsXG4gICAgICAgICAgICByZWY6IGNoaWxkLnByb3BzLnNlbGVjdGVkXG4gICAgICAgICAgICAgID8gbm9kZSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG5vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG9uRm9jdXM6IHRoaXMuaGFuZGxlSXRlbUZvY3VzLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KX1cbiAgICAgIDwvTGlzdD5cbiAgICApO1xuICB9XG59XG5cbk1lbnVMaXN0LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIE1lbnVMaXN0IGNvbnRlbnRzLCBub3JtYWxseSBgTWVudUl0ZW1gcy5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudUxpc3Q7XG4iXX0=

/***/ }),

/***/ 293:
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

var _scrollbarSize = __webpack_require__(385);

var _scrollbarSize2 = _interopRequireDefault(_scrollbarSize);

var _withStyles = __webpack_require__(18);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Popover = __webpack_require__(115);

var _Popover2 = _interopRequireDefault(_Popover);

var _MenuList = __webpack_require__(291);

var _MenuList2 = _interopRequireDefault(_MenuList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // @inheritedComponent Popover

var RTL_ORIGIN = {
  vertical: 'top',
  horizontal: 'right'
};

var LTR_ORIGIN = {
  vertical: 'top',
  horizontal: 'left'
};

var styles = exports.styles = {
  paper: {
    // specZ: The maximum height of a simple menu should be one or more rows less than the view
    // height. This ensures a tappable area outside of the simple menu with which to dismiss
    // the menu.
    maxHeight: 'calc(100vh - 96px)',
    // Add iOS momentum scrolling.
    WebkitOverflowScrolling: 'touch'
  }
};

var Menu = function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Menu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Menu.__proto__ || Object.getPrototypeOf(Menu)).call.apply(_ref, [this].concat(args))), _this), _this.getContentAnchorEl = function () {
      if (!_this.menuList || !_this.menuList.selectedItem) {
        return _reactDom2.default.findDOMNode(_this.menuList).firstChild;
      }

      return _reactDom2.default.findDOMNode(_this.menuList.selectedItem);
    }, _this.menuList = undefined, _this.focus = function () {
      if (_this.menuList && _this.menuList.selectedItem) {
        _reactDom2.default.findDOMNode(_this.menuList.selectedItem).focus();
        return;
      }

      var menuList = _reactDom2.default.findDOMNode(_this.menuList);
      if (menuList && menuList.firstChild) {
        menuList.firstChild.focus();
      }
    }, _this.handleEnter = function (element) {
      var theme = _this.props.theme;

      var menuList = _reactDom2.default.findDOMNode(_this.menuList);

      // Focus so the scroll computation of the Popover works as expected.
      _this.focus();

      // Let's ignore that piece of logic if users are already overriding the width
      // of the menu.
      if (menuList && element.clientHeight < menuList.clientHeight && !menuList.style.width) {
        var size = (0, _scrollbarSize2.default)() + 'px';
        menuList.style[theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight'] = size;
        menuList.style.width = 'calc(100% + ' + size + ')';
      }

      if (_this.props.onEnter) {
        _this.props.onEnter(element);
      }
    }, _this.handleListKeyDown = function (event, key) {
      if (key === 'tab') {
        event.preventDefault();

        if (_this.props.onClose) {
          _this.props.onClose(event);
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Menu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.open) {
        this.focus();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          MenuListProps = _props.MenuListProps,
          onEnter = _props.onEnter,
          _props$PaperProps = _props.PaperProps,
          PaperProps = _props$PaperProps === undefined ? {} : _props$PaperProps,
          PopoverClasses = _props.PopoverClasses,
          theme = _props.theme,
          other = _objectWithoutProperties(_props, ['children', 'classes', 'MenuListProps', 'onEnter', 'PaperProps', 'PopoverClasses', 'theme']);

      return _react2.default.createElement(
        _Popover2.default,
        _extends({
          getContentAnchorEl: this.getContentAnchorEl,
          classes: PopoverClasses,
          onEnter: this.handleEnter,
          anchorOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
          transformOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
          PaperProps: _extends({}, PaperProps, {
            classes: _extends({}, PaperProps.classes, {
              root: classes.paper
            })
          })
        }, other),
        _react2.default.createElement(
          _MenuList2.default,
          _extends({
            'data-mui-test': 'Menu',
            role: 'menu',
            onKeyDown: this.handleListKeyDown
          }, MenuListProps, {
            ref: function ref(node) {
              _this2.menuList = node;
            }
          }),
          children
        )
      );
    }
  }]);

  return Menu;
}(_react2.default.Component);

Menu.propTypes = {
  /**
   * The DOM element used to set the position of the menu.
   */
  anchorEl: _propTypes2.default.object,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * Properties applied to the `MenuList` element.
   */
  MenuListProps: _propTypes2.default.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback
   */
  onClose: _propTypes2.default.func,
  /**
   * Callback fired before the Menu enters.
   */
  onEnter: _propTypes2.default.func,
  /**
   * Callback fired when the Menu has entered.
   */
  onEntered: _propTypes2.default.func,
  /**
   * Callback fired when the Menu is entering.
   */
  onEntering: _propTypes2.default.func,
  /**
   * Callback fired before the Menu exits.
   */
  onExit: _propTypes2.default.func,
  /**
   * Callback fired when the Menu has exited.
   */
  onExited: _propTypes2.default.func,
  /**
   * Callback fired when the Menu is exiting.
   */
  onExiting: _propTypes2.default.func,
  /**
   * If `true`, the menu is visible.
   */
  open: _propTypes2.default.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: _propTypes2.default.object,
  /**
   * `classes` property applied to the `Popover` element.
   */
  PopoverClasses: _propTypes2.default.object,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired,
  /**
   * The length of the transition in `ms`, or 'auto'
   */
  transitionDuration: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({ enter: _propTypes2.default.number, exit: _propTypes2.default.number }), _propTypes2.default.oneOf(['auto'])])
};

Menu.defaultProps = {
  transitionDuration: 'auto'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiMenu', withTheme: true })(Menu);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcTWVudVxcTWVudS5qcyJdLCJuYW1lcyI6WyJSVExfT1JJR0lOIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiTFRSX09SSUdJTiIsInN0eWxlcyIsInBhcGVyIiwibWF4SGVpZ2h0IiwiV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmciLCJNZW51IiwiZ2V0Q29udGVudEFuY2hvckVsIiwibWVudUxpc3QiLCJzZWxlY3RlZEl0ZW0iLCJmaW5kRE9NTm9kZSIsImZpcnN0Q2hpbGQiLCJ1bmRlZmluZWQiLCJmb2N1cyIsImhhbmRsZUVudGVyIiwidGhlbWUiLCJwcm9wcyIsImVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzdHlsZSIsIndpZHRoIiwic2l6ZSIsImRpcmVjdGlvbiIsIm9uRW50ZXIiLCJoYW5kbGVMaXN0S2V5RG93biIsImV2ZW50Iiwia2V5IiwicHJldmVudERlZmF1bHQiLCJvbkNsb3NlIiwib3BlbiIsImNoaWxkcmVuIiwiY2xhc3NlcyIsIk1lbnVMaXN0UHJvcHMiLCJQYXBlclByb3BzIiwiUG9wb3ZlckNsYXNzZXMiLCJvdGhlciIsInJvb3QiLCJub2RlIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiYW5jaG9yRWwiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyIsIm9uRW50ZXJlZCIsIm9uRW50ZXJpbmciLCJvbkV4aXQiLCJvbkV4aXRlZCIsIm9uRXhpdGluZyIsImJvb2wiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJzaGFwZSIsImVudGVyIiwiZXhpdCIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwibmFtZSIsIndpdGhUaGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OytlQVJBOztBQVVBLElBQU1BLGFBQWE7QUFDakJDLFlBQVUsS0FETztBQUVqQkMsY0FBWTtBQUZLLENB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R0ExQixTQUFPLG9CQUFVMEIsTUFBVixDQUFpQkMsVUE5RFQ7QUErRGY7OztBQUdBUSxzQkFBb0Isb0JBQVVDLFNBQVYsQ0FBb0IsQ0FDdEMsb0JBQVVDLE1BRDRCLEVBRXRDLG9CQUFVQyxLQUFWLENBQWdCLEVBQUVDLE9BQU8sb0JBQVVGLE1BQW5CLEVBQTJCRyxNQUFNLG9CQUFVSCxNQUEzQyxFQUFoQixDQUZzQyxFQUd0QyxvQkFBVUksS0FBVixDQUFnQixDQUFDLE1BQUQsQ0FBaEIsQ0FIc0MsQ0FBcEI7QUFsRUwsQ0FBakI7O0FBeUVBbEQsS0FBS21ELFlBQUwsR0FBb0I7QUFDbEJQLHNCQUFvQjtBQURGLENBQXBCOztrQkFJZSwwQkFBV2hELE1BQVgsRUFBbUIsRUFBRXdELE1BQU0sU0FBUixFQUFtQkMsV0FBVyxJQUE5QixFQUFuQixFQUF5RHJELElBQXpELEMiLCJmaWxlIjoiTWVudS5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9ybWNxdWVuL3NsdC11aS9tYXRlcmlhbC11aSIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBpbmhlcml0ZWRDb21wb25lbnQgUG9wb3ZlclxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGdldFNjcm9sbGJhclNpemUgZnJvbSAnZG9tLWhlbHBlcnMvdXRpbC9zY3JvbGxiYXJTaXplJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBQb3BvdmVyIGZyb20gJy4uL1BvcG92ZXInO1xuaW1wb3J0IE1lbnVMaXN0IGZyb20gJy4vTWVudUxpc3QnO1xuXG5jb25zdCBSVExfT1JJR0lOID0ge1xuICB2ZXJ0aWNhbDogJ3RvcCcsXG4gIGhvcml6b250YWw6ICdyaWdodCcsXG59O1xuXG5jb25zdCBMVFJfT1JJR0lOID0ge1xuICB2ZXJ0aWNhbDogJ3RvcCcsXG4gIGhvcml6b250YWw6ICdsZWZ0Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBzdHlsZXMgPSB7XG4gIHBhcGVyOiB7XG4gICAgLy8gc3BlY1o6IFRoZSBtYXhpbXVtIGhlaWdodCBvZiBhIHNpbXBsZSBtZW51IHNob3VsZCBiZSBvbmUgb3IgbW9yZSByb3dzIGxlc3MgdGhhbiB0aGUgdmlld1xuICAgIC8vIGhlaWdodC4gVGhpcyBlbnN1cmVzIGEgdGFwcGFibGUgYXJlYSBvdXRzaWRlIG9mIHRoZSBzaW1wbGUgbWVudSB3aXRoIHdoaWNoIHRvIGRpc21pc3NcbiAgICAvLyB0aGUgbWVudS5cbiAgICBtYXhIZWlnaHQ6ICdjYWxjKDEwMHZoIC0gOTZweCknLFxuICAgIC8vIEFkZCBpT1MgbW9tZW50dW0gc2Nyb2xsaW5nLlxuICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiAndG91Y2gnLFxuICB9LFxufTtcblxuY2xhc3MgTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLm9wZW4pIHtcbiAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBnZXRDb250ZW50QW5jaG9yRWwgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLm1lbnVMaXN0IHx8ICF0aGlzLm1lbnVMaXN0LnNlbGVjdGVkSXRlbSkge1xuICAgICAgcmV0dXJuIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMubWVudUxpc3QpLmZpcnN0Q2hpbGQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMubWVudUxpc3Quc2VsZWN0ZWRJdGVtKTtcbiAgfTtcblxuICBtZW51TGlzdCA9IHVuZGVmaW5lZDtcblxuICBmb2N1cyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5tZW51TGlzdCAmJiB0aGlzLm1lbnVMaXN0LnNlbGVjdGVkSXRlbSkge1xuICAgICAgUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5tZW51TGlzdC5zZWxlY3RlZEl0ZW0pLmZvY3VzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWVudUxpc3QgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLm1lbnVMaXN0KTtcbiAgICBpZiAobWVudUxpc3QgJiYgbWVudUxpc3QuZmlyc3RDaGlsZCkge1xuICAgICAgbWVudUxpc3QuZmlyc3RDaGlsZC5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVFbnRlciA9IGVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IHsgdGhlbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbWVudUxpc3QgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLm1lbnVMaXN0KTtcblxuICAgIC8vIEZvY3VzIHNvIHRoZSBzY3JvbGwgY29tcHV0YXRpb24gb2YgdGhlIFBvcG92ZXIgd29ya3MgYXMgZXhwZWN0ZWQuXG4gICAgdGhpcy5mb2N1cygpO1xuXG4gICAgLy8gTGV0J3MgaWdub3JlIHRoYXQgcGllY2Ugb2YgbG9naWMgaWYgdXNlcnMgYXJlIGFscmVhZHkgb3ZlcnJpZGluZyB0aGUgd2lkdGhcbiAgICAvLyBvZiB0aGUgbWVudS5cbiAgICBpZiAobWVudUxpc3QgJiYgZWxlbWVudC5jbGllbnRIZWlnaHQgPCBtZW51TGlzdC5jbGllbnRIZWlnaHQgJiYgIW1lbnVMaXN0LnN0eWxlLndpZHRoKSB7XG4gICAgICBjb25zdCBzaXplID0gYCR7Z2V0U2Nyb2xsYmFyU2l6ZSgpfXB4YDtcbiAgICAgIG1lbnVMaXN0LnN0eWxlW3RoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyAncGFkZGluZ0xlZnQnIDogJ3BhZGRpbmdSaWdodCddID0gc2l6ZTtcbiAgICAgIG1lbnVMaXN0LnN0eWxlLndpZHRoID0gYGNhbGMoMTAwJSArICR7c2l6ZX0pYDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkVudGVyKSB7XG4gICAgICB0aGlzLnByb3BzLm9uRW50ZXIoZWxlbWVudCk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUxpc3RLZXlEb3duID0gKGV2ZW50LCBrZXkpID0+IHtcbiAgICBpZiAoa2V5ID09PSAndGFiJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMub25DbG9zZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2xvc2UoZXZlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzLFxuICAgICAgTWVudUxpc3RQcm9wcyxcbiAgICAgIG9uRW50ZXIsXG4gICAgICBQYXBlclByb3BzID0ge30sXG4gICAgICBQb3BvdmVyQ2xhc3NlcyxcbiAgICAgIHRoZW1lLFxuICAgICAgLi4ub3RoZXJcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8UG9wb3ZlclxuICAgICAgICBnZXRDb250ZW50QW5jaG9yRWw9e3RoaXMuZ2V0Q29udGVudEFuY2hvckVsfVxuICAgICAgICBjbGFzc2VzPXtQb3BvdmVyQ2xhc3Nlc31cbiAgICAgICAgb25FbnRlcj17dGhpcy5oYW5kbGVFbnRlcn1cbiAgICAgICAgYW5jaG9yT3JpZ2luPXt0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gUlRMX09SSUdJTiA6IExUUl9PUklHSU59XG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbj17dGhlbWUuZGlyZWN0aW9uID09PSAncnRsJyA/IFJUTF9PUklHSU4gOiBMVFJfT1JJR0lOfVxuICAgICAgICBQYXBlclByb3BzPXt7XG4gICAgICAgICAgLi4uUGFwZXJQcm9wcyxcbiAgICAgICAgICBjbGFzc2VzOiB7XG4gICAgICAgICAgICAuLi5QYXBlclByb3BzLmNsYXNzZXMsXG4gICAgICAgICAgICByb290OiBjbGFzc2VzLnBhcGVyLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAgIHsuLi5vdGhlcn1cbiAgICAgID5cbiAgICAgICAgPE1lbnVMaXN0XG4gICAgICAgICAgZGF0YS1tdWktdGVzdD1cIk1lbnVcIlxuICAgICAgICAgIHJvbGU9XCJtZW51XCJcbiAgICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlTGlzdEtleURvd259XG4gICAgICAgICAgey4uLk1lbnVMaXN0UHJvcHN9XG4gICAgICAgICAgcmVmPXtub2RlID0+IHtcbiAgICAgICAgICAgIHRoaXMubWVudUxpc3QgPSBub2RlO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvTWVudUxpc3Q+XG4gICAgICA8L1BvcG92ZXI+XG4gICAgKTtcbiAgfVxufVxuXG5NZW51LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBET00gZWxlbWVudCB1c2VkIHRvIHNldCB0aGUgcG9zaXRpb24gb2YgdGhlIG1lbnUuXG4gICAqL1xuICBhbmNob3JFbDogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIE1lbnUgY29udGVudHMsIG5vcm1hbGx5IGBNZW51SXRlbWBzLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICogVXNlZnVsIHRvIGV4dGVuZCB0aGUgc3R5bGUgYXBwbGllZCB0byBjb21wb25lbnRzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogUHJvcGVydGllcyBhcHBsaWVkIHRvIHRoZSBgTWVudUxpc3RgIGVsZW1lbnQuXG4gICAqL1xuICBNZW51TGlzdFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgY29tcG9uZW50IHJlcXVlc3RzIHRvIGJlIGNsb3NlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrXG4gICAqL1xuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgTWVudSBlbnRlcnMuXG4gICAqL1xuICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIE1lbnUgaGFzIGVudGVyZWQuXG4gICAqL1xuICBvbkVudGVyZWQ6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgTWVudSBpcyBlbnRlcmluZy5cbiAgICovXG4gIG9uRW50ZXJpbmc6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBNZW51IGV4aXRzLlxuICAgKi9cbiAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIE1lbnUgaGFzIGV4aXRlZC5cbiAgICovXG4gIG9uRXhpdGVkOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIE1lbnUgaXMgZXhpdGluZy5cbiAgICovXG4gIG9uRXhpdGluZzogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBtZW51IGlzIHZpc2libGUuXG4gICAqL1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgUGFwZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIGBjbGFzc2VzYCBwcm9wZXJ0eSBhcHBsaWVkIHRvIHRoZSBgUG9wb3ZlcmAgZWxlbWVudC5cbiAgICovXG4gIFBvcG92ZXJDbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIFRoZSBsZW5ndGggb2YgdGhlIHRyYW5zaXRpb24gaW4gYG1zYCwgb3IgJ2F1dG8nXG4gICAqL1xuICB0cmFuc2l0aW9uRHVyYXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLnNoYXBlKHsgZW50ZXI6IFByb3BUeXBlcy5udW1iZXIsIGV4aXQ6IFByb3BUeXBlcy5udW1iZXIgfSksXG4gICAgUHJvcFR5cGVzLm9uZU9mKFsnYXV0byddKSxcbiAgXSksXG59O1xuXG5NZW51LmRlZmF1bHRQcm9wcyA9IHtcbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiAnYXV0bycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywgeyBuYW1lOiAnTXVpTWVudScsIHdpdGhUaGVtZTogdHJ1ZSB9KShNZW51KTtcbiJdfQ==

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = activeElement;

var _ownerDocument = __webpack_require__(19);

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function activeElement() {
  var doc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _ownerDocument2.default)();

  try {
    return doc.activeElement;
  } catch (e) {/* ie throws if no active element */}
}
module.exports = exports['default'];

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (recalc) {
  if (!size && size !== 0 || recalc) {
    if (_inDOM2.default) {
      var scrollDiv = document.createElement('div');

      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';

      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
};

var _inDOM = __webpack_require__(107);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var size = void 0;

module.exports = exports['default'];

/***/ })

});