webpackJsonpmaterial_ui([33],{

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

/***/ })

});