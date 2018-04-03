webpackJsonpmaterial_ui([0,3,21,28],{

/***/ 289:
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

var _Transition = __webpack_require__(100);

var _Transition2 = _interopRequireDefault(_Transition);

var _transitions = __webpack_require__(99);

var _withTheme = __webpack_require__(60);

var _withTheme2 = _interopRequireDefault(_withTheme);

var _utils = __webpack_require__(379);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // @inheritedComponent Transition

var styles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};

/**
 * The Fade transition is used by the [Modal](/utils/modals) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Fade = function (_React$Component) {
  _inherits(Fade, _React$Component);

  function Fade() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Fade);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Fade.__proto__ || Object.getPrototypeOf(Fade)).call.apply(_ref, [this].concat(args))), _this), _this.handleEnter = function (node) {
      var theme = _this.props.theme;

      (0, _utils.reflow)(node); // So the animation always start from the start.

      var transitionProps = (0, _utils.getTransitionProps)(_this.props, {
        mode: 'enter'
      });
      node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
      node.style.transition = theme.transitions.create('opacity', transitionProps);

      if (_this.props.onEnter) {
        _this.props.onEnter(node);
      }
    }, _this.handleExit = function (node) {
      var theme = _this.props.theme;

      var transitionProps = (0, _utils.getTransitionProps)(_this.props, {
        mode: 'exit'
      });
      node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
      node.style.transition = theme.transitions.create('opacity', transitionProps);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Fade, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          onEnter = _props.onEnter,
          onExit = _props.onExit,
          styleProp = _props.style,
          theme = _props.theme,
          other = _objectWithoutProperties(_props, ['children', 'onEnter', 'onExit', 'style', 'theme']);

      var style = _extends({}, styleProp, _react2.default.isValidElement(children) ? children.props.style : {});

      return _react2.default.createElement(
        _Transition2.default,
        _extends({ appear: true, onEnter: this.handleEnter, onExit: this.handleExit }, other),
        function (state, childProps) {
          return _react2.default.cloneElement(children, _extends({
            style: _extends({
              opacity: 0,
              willChange: 'opacity'
            }, styles[state], style)
          }, childProps));
        }
      );
    }
  }]);

  return Fade;
}(_react2.default.Component);

Fade.propTypes = {
  /**
   * A single child content element.
   */
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]),
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
  onExit: _propTypes2.default.func,
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

Fade.defaultProps = {
  timeout: {
    enter: _transitions.duration.enteringScreen,
    exit: _transitions.duration.leavingScreen
  }
};

exports.default = (0, _withTheme2.default)()(Fade);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdHJhbnNpdGlvbnNcXEZhZGUuanMiXSwibmFtZXMiOlsic3R5bGVzIiwiZW50ZXJpbmciLCJvcGFjaXR5IiwiZW50ZXJlZCIsIkZhZGUiLCJoYW5kbGVFbnRlciIsInRoZW1lIiwicHJvcHMiLCJub2RlIiwidHJhbnNpdGlvblByb3BzIiwibW9kZSIsInN0eWxlIiwid2Via2l0VHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwidHJhbnNpdGlvbiIsIm9uRW50ZXIiLCJoYW5kbGVFeGl0Iiwib25FeGl0IiwiY2hpbGRyZW4iLCJzdHlsZVByb3AiLCJvdGhlciIsImlzVmFsaWRFbGVtZW50Iiwic3RhdGUiLCJjaGlsZFByb3BzIiwiY2xvbmVFbGVtZW50Iiwid2lsbENoYW5nZSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsImVsZW1lbnQiLCJmdW5jIiwiaW4iLCJib29sIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInRpbWVvdXQiLCJudW1iZXIiLCJzaGFwZSIsImVudGVyIiwiZXhpdCIsImRlZmF1bHRQcm9wcyIsImVudGVyaW5nU2NyZWVuIiwibGVhdmluZ1NjcmVlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7K2VBUEE7O0FBU0EsSUFBTUEsU0FBUztBQUNiQyxZQUFVO0FBQ1JDLGFBQVM7QUFERCxHQURHO0FBSWJDLFdBQVM7QUFDUEQsYUFBUztBQURGO0FBSkksQ0FBZjs7QUFTQTs7Ozs7SUFJTUUsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ0pDLFcsR0FBYyxnQkFBUTtBQUFBLFVBQ1pDLEtBRFksR0FDRixNQUFLQyxLQURILENBQ1pELEtBRFk7O0FBRXBCLHlCQUFPRSxJQUFQLEVBRm9CLENBRU47O0FBRWQsVUFBTUMsa0JBQWtCLCtCQUFtQixNQUFLRixLQUF4QixFQUErQjtBQUNyREcsY0FBTTtBQUQrQyxPQUEvQixD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TSxzQkFBU0c7QUFGUjtBQURTLENBQXBCOztrQkFPZSwyQkFBWXZDLElBQVosQyIsImZpbGUiOiJGYWRlLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3JtY3F1ZW4vc2x0LXVpL21hdGVyaWFsLXVpIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGluaGVyaXRlZENvbXBvbmVudCBUcmFuc2l0aW9uXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uJztcbmltcG9ydCB7IGR1cmF0aW9uIH0gZnJvbSAnLi4vc3R5bGVzL3RyYW5zaXRpb25zJztcbmltcG9ydCB3aXRoVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3dpdGhUaGVtZSc7XG5pbXBvcnQgeyByZWZsb3csIGdldFRyYW5zaXRpb25Qcm9wcyB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGVudGVyaW5nOiB7XG4gICAgb3BhY2l0eTogMSxcbiAgfSxcbiAgZW50ZXJlZDoge1xuICAgIG9wYWNpdHk6IDEsXG4gIH0sXG59O1xuXG4vKipcbiAqIFRoZSBGYWRlIHRyYW5zaXRpb24gaXMgdXNlZCBieSB0aGUgW01vZGFsXSgvdXRpbHMvbW9kYWxzKSBjb21wb25lbnQuXG4gKiBJdCB1c2VzIFtyZWFjdC10cmFuc2l0aW9uLWdyb3VwXShodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwKSBpbnRlcm5hbGx5LlxuICovXG5jbGFzcyBGYWRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgaGFuZGxlRW50ZXIgPSBub2RlID0+IHtcbiAgICBjb25zdCB7IHRoZW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIHJlZmxvdyhub2RlKTsgLy8gU28gdGhlIGFuaW1hdGlvbiBhbHdheXMgc3RhcnQgZnJvbSB0aGUgc3RhcnQuXG5cbiAgICBjb25zdCB0cmFuc2l0aW9uUHJvcHMgPSBnZXRUcmFuc2l0aW9uUHJvcHModGhpcy5wcm9wcywge1xuICAgICAgbW9kZTogJ2VudGVyJyxcbiAgICB9KTtcbiAgICBub2RlLnN0eWxlLndlYmtpdFRyYW5zaXRpb24gPSB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ29wYWNpdHknLCB0cmFuc2l0aW9uUHJvcHMpO1xuICAgIG5vZGUuc3R5bGUudHJhbnNpdGlvbiA9IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnb3BhY2l0eScsIHRyYW5zaXRpb25Qcm9wcyk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkVudGVyKSB7XG4gICAgICB0aGlzLnByb3BzLm9uRW50ZXIobm9kZSk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUV4aXQgPSBub2RlID0+IHtcbiAgICBjb25zdCB7IHRoZW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRyYW5zaXRpb25Qcm9wcyA9IGdldFRyYW5zaXRpb25Qcm9wcyh0aGlzLnByb3BzLCB7XG4gICAgICBtb2RlOiAnZXhpdCcsXG4gICAgfSk7XG4gICAgbm9kZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uID0gdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdvcGFjaXR5JywgdHJhbnNpdGlvblByb3BzKTtcbiAgICBub2RlLnN0eWxlLnRyYW5zaXRpb24gPSB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ29wYWNpdHknLCB0cmFuc2l0aW9uUHJvcHMpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25FeGl0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uRXhpdChub2RlKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIG9uRW50ZXIsIG9uRXhpdCwgc3R5bGU6IHN0eWxlUHJvcCwgdGhlbWUsIC4uLm90aGVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAuLi5zdHlsZVByb3AsXG4gICAgICAuLi4oUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pID8gY2hpbGRyZW4ucHJvcHMuc3R5bGUgOiB7fSksXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8VHJhbnNpdGlvbiBhcHBlYXIgb25FbnRlcj17dGhpcy5oYW5kbGVFbnRlcn0gb25FeGl0PXt0aGlzLmhhbmRsZUV4aXR9IHsuLi5vdGhlcn0+XG4gICAgICAgIHsoc3RhdGUsIGNoaWxkUHJvcHMpID0+IHtcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICB3aWxsQ2hhbmdlOiAnb3BhY2l0eScsXG4gICAgICAgICAgICAgIC4uLnN0eWxlc1tzdGF0ZV0sXG4gICAgICAgICAgICAgIC4uLnN0eWxlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLmNoaWxkUHJvcHMsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH19XG4gICAgICA8L1RyYW5zaXRpb24+XG4gICAgKTtcbiAgfVxufVxuXG5GYWRlLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEEgc2luZ2xlIGNoaWxkIGNvbnRlbnQgZWxlbWVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGNvbXBvbmVudCB3aWxsIHRyYW5zaXRpb24gaW4uXG4gICAqL1xuICBpbjogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uRXhpdDogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBUaGUgZHVyYXRpb24gZm9yIHRoZSB0cmFuc2l0aW9uLCBpbiBtaWxsaXNlY29uZHMuXG4gICAqIFlvdSBtYXkgc3BlY2lmeSBhIHNpbmdsZSB0aW1lb3V0IGZvciBhbGwgdHJhbnNpdGlvbnMsIG9yIGluZGl2aWR1YWxseSB3aXRoIGFuIG9iamVjdC5cbiAgICovXG4gIHRpbWVvdXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLnNoYXBlKHsgZW50ZXI6IFByb3BUeXBlcy5udW1iZXIsIGV4aXQ6IFByb3BUeXBlcy5udW1iZXIgfSksXG4gIF0pLFxufTtcblxuRmFkZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpbWVvdXQ6IHtcbiAgICBlbnRlcjogZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXG4gICAgZXhpdDogZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZSgpKEZhZGUpO1xuIl19

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = __webpack_require__(393);

var _style2 = _interopRequireDefault(_style);

var _ownerDocument = __webpack_require__(19);

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

var _scrollbarSize = __webpack_require__(385);

var _scrollbarSize2 = _interopRequireDefault(_scrollbarSize);

var _isOverflowing = __webpack_require__(401);

var _isOverflowing2 = _interopRequireDefault(_isOverflowing);

var _manageAriaHidden = __webpack_require__(403);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function findIndexOf(data, callback) {
  var idx = -1;
  data.some(function (item, index) {
    if (callback(item)) {
      idx = index;
      return true;
    }
    return false;
  });
  return idx;
}

function findContainer(data, modal) {
  return findIndexOf(data, function (item) {
    return item.modals.indexOf(modal) !== -1;
  });
}

function getPaddingRight(node) {
  return parseInt((0, _style2.default)(node, 'paddingRight') || 0, 10);
}

function setContainerStyle(data, container) {
  var style = { overflow: 'hidden' };

  // We are only interested in the actual `style` here because we will override it.
  data.style = {
    overflow: container.style.overflow,
    paddingRight: container.style.paddingRight
  };

  if (data.overflowing) {
    var scrollbarSize = (0, _scrollbarSize2.default)();

    // Use computed style, here to get the real padding to add our scrollbar width.
    style.paddingRight = getPaddingRight(container) + scrollbarSize + 'px';

    // .mui-fixed is a global helper.
    var fixedNodes = (0, _ownerDocument2.default)(container).querySelectorAll('.mui-fixed');
    for (var i = 0; i < fixedNodes.length; i += 1) {
      var paddingRight = getPaddingRight(fixedNodes[i]);
      data.prevPaddings.push(paddingRight);
      fixedNodes[i].style.paddingRight = paddingRight + scrollbarSize + 'px';
    }
  }

  Object.keys(style).forEach(function (key) {
    container.style[key] = style[key];
  });
}

function removeContainerStyle(data, container) {
  Object.keys(data.style).forEach(function (key) {
    container.style[key] = data.style[key];
  });

  var fixedNodes = (0, _ownerDocument2.default)(container).querySelectorAll('.mui-fixed');
  for (var i = 0; i < fixedNodes.length; i += 1) {
    fixedNodes[i].style.paddingRight = data.prevPaddings[i] + 'px';
  }
}
/**
 * @ignore - do not document.
 *
 * Proper state managment for containers and the modals in those containers.
 * Simplified, but inspired by react-overlay's ModalManager class
 * Used by the Modal to ensure proper styling of containers.
 */

var ModalManager = function () {
  function ModalManager() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$hideSiblingNodes = _ref.hideSiblingNodes,
        hideSiblingNodes = _ref$hideSiblingNodes === undefined ? true : _ref$hideSiblingNodes,
        _ref$handleContainerO = _ref.handleContainerOverflow,
        handleContainerOverflow = _ref$handleContainerO === undefined ? true : _ref$handleContainerO;

    _classCallCheck(this, ModalManager);

    this.hideSiblingNodes = hideSiblingNodes;
    this.handleContainerOverflow = handleContainerOverflow;
    // this.modals[modalIdx] = modal
    this.modals = [];
    // this.containers[containerIdx] = container
    this.containers = [];
    // this.data[containerIdx] = {
    //   modals: [],
    // }
    this.data = [];
  }

  _createClass(ModalManager, [{
    key: 'add',
    value: function add(modal, container) {
      var modalIdx = this.modals.indexOf(modal);
      var containerIdx = this.containers.indexOf(container);

      if (modalIdx !== -1) {
        return modalIdx;
      }

      modalIdx = this.modals.length;
      this.modals.push(modal);

      if (this.hideSiblingNodes) {
        (0, _manageAriaHidden.hideSiblings)(container, modal.mountNode);
      }

      if (containerIdx !== -1) {
        this.data[containerIdx].modals.push(modal);
        return modalIdx;
      }

      var data = {
        modals: [modal],
        overflowing: (0, _isOverflowing2.default)(container),
        prevPaddings: []
      };

      if (this.handleContainerOverflow) {
        setContainerStyle(data, container);
      }

      this.containers.push(container);
      this.data.push(data);

      return modalIdx;
    }
  }, {
    key: 'remove',
    value: function remove(modal) {
      var modalIdx = this.modals.indexOf(modal);

      if (modalIdx === -1) {
        return modalIdx;
      }

      var containerIdx = findContainer(this.data, modal);
      var data = this.data[containerIdx];
      var container = this.containers[containerIdx];

      data.modals.splice(data.modals.indexOf(modal), 1);
      this.modals.splice(modalIdx, 1);

      // If that was the last modal in a container, clean up the container.
      if (data.modals.length === 0) {
        if (this.handleContainerOverflow) {
          removeContainerStyle(data, container);
        }

        if (this.hideSiblingNodes) {
          (0, _manageAriaHidden.showSiblings)(container, modal.mountNode);
        }
        this.containers.splice(containerIdx, 1);
        this.data.splice(containerIdx, 1);
      } else if (this.hideSiblingNodes) {
        // Otherwise make sure the next top modal is visible to a SR.
        (0, _manageAriaHidden.ariaHidden)(false, data.modals[data.modals.length - 1].mountNode);
      }

      return modalIdx;
    }
  }, {
    key: 'isTopModal',
    value: function isTopModal(modal) {
      return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
    }
  }]);

  return ModalManager;
}();

exports.default = ModalManager;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcTW9kYWxcXE1vZGFsTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJmaW5kSW5kZXhPZiIsImRhdGEiLCJjYWxsYmFjayIsImlkeCIsInNvbWUiLCJpdGVtIiwiaW5kZXgiLCJmaW5kQ29udGFpbmVyIiwibW9kYWwiLCJtb2RhbHMiLCJpbmRleE9mIiwiZ2V0UGFkZGluZ1JpZ2h0Iiwibm9kZSIsInBhcnNlSW50Iiwic2V0Q29udGFpbmVyU3R5bGUiLCJjb250YWluZXIiLCJzdHlsZSIsIm92ZXJmbG93IiwicGFkZGluZ1JpZ2h0Iiwib3ZlcmZsb3dpbmciLCJzY3JvbGxiYXJTaXplIiwiZml4ZWROb2RlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwicHJldlBhZGRpbmdzIiwicHVzaCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwicmVtb3ZlQ29udGFpbmVyU3R5bGUiLCJNb2RhbE1hbmFnZXIiLCJoaWRlU2libGluZ05vZGVzIiwiaGFuZGxlQ29udGFpbmVyT3ZlcmZsb3ciLCJjb250YWluZXJzIiwibW9kYWxJZHgiLCJjb250YWluZXJJZHgiLCJtb3VudE5vZGUiLCJzcGxpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsU0FBU0EsV0FBVCxDQUFxQkMsSUFBckIsRUFBMkJDLFFBQTNCLEVBQXFDO0FBQ25DLE1BQUlDLE1BQU0sQ0FBQyxDQUFYO0FBQ0FGLE9BQUtHLElBQUwsQ0FBVSxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDekIsUUFBSUosU0FBU0csSUFBVCxDQUFKLEVBQW9CO0FBQ2xCRixZQUFNRyxLQUFOO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7QUFDRCxXQUFPLEtBQVA7QUFDRCxHQU5EO0FBT0EsU0FBT0gsR0FBUDtBQUNEOztBQUVELFNBQVNJLGFBQVQsQ0FBdUJOLElBQXZCLEVBQTZCTyxLQUE3QixFQUFvQztBQUNs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QUFNdEIsWUFBWSxLQUFLb0IsVUFBTCxDQUFnQkUsWUFBaEIsQ0FBbEI7O0FBRUFwQyxXQUFLUSxNQUFMLENBQVk4QixNQUFaLENBQW1CdEMsS0FBS1EsTUFBTCxDQUFZQyxPQUFaLENBQW9CRixLQUFwQixDQUFuQixFQUErQyxDQUEvQztBQUNBLFdBQUtDLE1BQUwsQ0FBWThCLE1BQVosQ0FBbUJILFFBQW5CLEVBQTZCLENBQTdCOztBQUVBO0FBQ0EsVUFBSW5DLEtBQUtRLE1BQUwsQ0FBWWUsTUFBWixLQUF1QixDQUEzQixFQUE4QjtBQUM1QixZQUFJLEtBQUtVLHVCQUFULEVBQWtDO0FBQ2hDSCwrQkFBcUI5QixJQUFyQixFQUEyQmMsU0FBM0I7QUFDRDs7QUFFRCxZQUFJLEtBQUtrQixnQkFBVCxFQUEyQjtBQUN6Qiw4Q0FBYWxCLFNBQWIsRUFBd0JQLE1BQU04QixTQUE5QjtBQUNEO0FBQ0QsYUFBS0gsVUFBTCxDQUFnQkksTUFBaEIsQ0FBdUJGLFlBQXZCLEVBQXFDLENBQXJDO0FBQ0EsYUFBS3BDLElBQUwsQ0FBVXNDLE1BQVYsQ0FBaUJGLFlBQWpCLEVBQStCLENBQS9CO0FBQ0QsT0FWRCxNQVVPLElBQUksS0FBS0osZ0JBQVQsRUFBMkI7QUFDaEM7QUFDQSwwQ0FBVyxLQUFYLEVBQWtCaEMsS0FBS1EsTUFBTCxDQUFZUixLQUFLUSxNQUFMLENBQVllLE1BQVosR0FBcUIsQ0FBakMsRUFBb0NjLFNBQXREO0FBQ0Q7O0FBRUQsYUFBT0YsUUFBUDtBQUNEOzs7K0JBRVU1QixLLEVBQU87QUFDaEIsYUFBTyxDQUFDLENBQUMsS0FBS0MsTUFBTCxDQUFZZSxNQUFkLElBQXdCLEtBQUtmLE1BQUwsQ0FBWSxLQUFLQSxNQUFMLENBQVllLE1BQVosR0FBcUIsQ0FBakMsTUFBd0NoQixLQUF2RTtBQUNEOzs7Ozs7a0JBR1l3QixZIiwiZmlsZSI6Ik1vZGFsTWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9ybWNxdWVuL3NsdC11aS9tYXRlcmlhbC11aSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnZG9tLWhlbHBlcnMvc3R5bGUnO1xuaW1wb3J0IG93bmVyRG9jdW1lbnQgZnJvbSAnZG9tLWhlbHBlcnMvb3duZXJEb2N1bWVudCc7XG5pbXBvcnQgZ2V0U2Nyb2xsYmFyU2l6ZSBmcm9tICdkb20taGVscGVycy91dGlsL3Njcm9sbGJhclNpemUnO1xuaW1wb3J0IGlzT3ZlcmZsb3dpbmcgZnJvbSAnLi9pc092ZXJmbG93aW5nJztcbmltcG9ydCB7IGFyaWFIaWRkZW4sIGhpZGVTaWJsaW5ncywgc2hvd1NpYmxpbmdzIH0gZnJvbSAnLi9tYW5hZ2VBcmlhSGlkZGVuJztcblxuZnVuY3Rpb24gZmluZEluZGV4T2YoZGF0YSwgY2FsbGJhY2spIHtcbiAgbGV0IGlkeCA9IC0xO1xuICBkYXRhLnNvbWUoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaWYgKGNhbGxiYWNrKGl0ZW0pKSB7XG4gICAgICBpZHggPSBpbmRleDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuICByZXR1cm4gaWR4O1xufVxuXG5mdW5jdGlvbiBmaW5kQ29udGFpbmVyKGRhdGEsIG1vZGFsKSB7XG4gIHJldHVybiBmaW5kSW5kZXhPZihkYXRhLCBpdGVtID0+IGl0ZW0ubW9kYWxzLmluZGV4T2YobW9kYWwpICE9PSAtMSk7XG59XG5cbmZ1bmN0aW9uIGdldFBhZGRpbmdSaWdodChub2RlKSB7XG4gIHJldHVybiBwYXJzZUludChjc3Mobm9kZSwgJ3BhZGRpbmdSaWdodCcpIHx8IDAsIDEwKTtcbn1cblxuZnVuY3Rpb24gc2V0Q29udGFpbmVyU3R5bGUoZGF0YSwgY29udGFpbmVyKSB7XG4gIGNvbnN0IHN0eWxlID0geyBvdmVyZmxvdzogJ2hpZGRlbicgfTtcblxuICAvLyBXZSBhcmUgb25seSBpbnRlcmVzdGVkIGluIHRoZSBhY3R1YWwgYHN0eWxlYCBoZXJlIGJlY2F1c2Ugd2Ugd2lsbCBvdmVycmlkZSBpdC5cbiAgZGF0YS5zdHlsZSA9IHtcbiAgICBvdmVyZmxvdzogY29udGFpbmVyLnN0eWxlLm92ZXJmbG93LFxuICAgIHBhZGRpbmdSaWdodDogY29udGFpbmVyLnN0eWxlLnBhZGRpbmdSaWdodCxcbiAgfTtcblxuICBpZiAoZGF0YS5vdmVyZmxvd2luZykge1xuICAgIGNvbnN0IHNjcm9sbGJhclNpemUgPSBnZXRTY3JvbGxiYXJTaXplKCk7XG5cbiAgICAvLyBVc2UgY29tcHV0ZWQgc3R5bGUsIGhlcmUgdG8gZ2V0IHRoZSByZWFsIHBhZGRpbmcgdG8gYWRkIG91ciBzY3JvbGxiYXIgd2lkdGguXG4gICAgc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7Z2V0UGFkZGluZ1JpZ2h0KGNvbnRhaW5lcikgKyBzY3JvbGxiYXJTaXplfXB4YDtcblxuICAgIC8vIC5tdWktZml4ZWQgaXMgYSBnbG9iYWwgaGVscGVyLlxuICAgIGNvbnN0IGZpeGVkTm9kZXMgPSBvd25lckRvY3VtZW50KGNvbnRhaW5lcikucXVlcnlTZWxlY3RvckFsbCgnLm11aS1maXhlZCcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZml4ZWROb2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgcGFkZGluZ1JpZ2h0ID0gZ2V0UGFkZGluZ1JpZ2h0KGZpeGVkTm9kZXNbaV0pO1xuICAgICAgZGF0YS5wcmV2UGFkZGluZ3MucHVzaChwYWRkaW5nUmlnaHQpO1xuICAgICAgZml4ZWROb2Rlc1tpXS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHtwYWRkaW5nUmlnaHQgKyBzY3JvbGxiYXJTaXplfXB4YDtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhzdHlsZSkuZm9yRWFjaChrZXkgPT4ge1xuICAgIGNvbnRhaW5lci5zdHlsZVtrZXldID0gc3R5bGVba2V5XTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNvbnRhaW5lclN0eWxlKGRhdGEsIGNvbnRhaW5lcikge1xuICBPYmplY3Qua2V5cyhkYXRhLnN0eWxlKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgY29udGFpbmVyLnN0eWxlW2tleV0gPSBkYXRhLnN0eWxlW2tleV07XG4gIH0pO1xuXG4gIGNvbnN0IGZpeGVkTm9kZXMgPSBvd25lckRvY3VtZW50KGNvbnRhaW5lcikucXVlcnlTZWxlY3RvckFsbCgnLm11aS1maXhlZCcpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGZpeGVkTm9kZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBmaXhlZE5vZGVzW2ldLnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke2RhdGEucHJldlBhZGRpbmdzW2ldfXB4YDtcbiAgfVxufVxuLyoqXG4gKiBAaWdub3JlIC0gZG8gbm90IGRvY3VtZW50LlxuICpcbiAqIFByb3BlciBzdGF0ZSBtYW5hZ21lbnQgZm9yIGNvbnRhaW5lcnMgYW5kIHRoZSBtb2RhbHMgaW4gdGhvc2UgY29udGFpbmVycy5cbiAqIFNpbXBsaWZpZWQsIGJ1dCBpbnNwaXJlZCBieSByZWFjdC1vdmVybGF5J3MgTW9kYWxNYW5hZ2VyIGNsYXNzXG4gKiBVc2VkIGJ5IHRoZSBNb2RhbCB0byBlbnN1cmUgcHJvcGVyIHN0eWxpbmcgb2YgY29udGFpbmVycy5cbiAqL1xuY2xhc3MgTW9kYWxNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoeyBoaWRlU2libGluZ05vZGVzID0gdHJ1ZSwgaGFuZGxlQ29udGFpbmVyT3ZlcmZsb3cgPSB0cnVlIH0gPSB7fSkge1xuICAgIHRoaXMuaGlkZVNpYmxpbmdOb2RlcyA9IGhpZGVTaWJsaW5nTm9kZXM7XG4gICAgdGhpcy5oYW5kbGVDb250YWluZXJPdmVyZmxvdyA9IGhhbmRsZUNvbnRhaW5lck92ZXJmbG93O1xuICAgIC8vIHRoaXMubW9kYWxzW21vZGFsSWR4XSA9IG1vZGFsXG4gICAgdGhpcy5tb2RhbHMgPSBbXTtcbiAgICAvLyB0aGlzLmNvbnRhaW5lcnNbY29udGFpbmVySWR4XSA9IGNvbnRhaW5lclxuICAgIHRoaXMuY29udGFpbmVycyA9IFtdO1xuICAgIC8vIHRoaXMuZGF0YVtjb250YWluZXJJZHhdID0ge1xuICAgIC8vICAgbW9kYWxzOiBbXSxcbiAgICAvLyB9XG4gICAgdGhpcy5kYXRhID0gW107XG4gIH1cblxuICBhZGQobW9kYWwsIGNvbnRhaW5lcikge1xuICAgIGxldCBtb2RhbElkeCA9IHRoaXMubW9kYWxzLmluZGV4T2YobW9kYWwpO1xuICAgIGNvbnN0IGNvbnRhaW5lcklkeCA9IHRoaXMuY29udGFpbmVycy5pbmRleE9mKGNvbnRhaW5lcik7XG5cbiAgICBpZiAobW9kYWxJZHggIT09IC0xKSB7XG4gICAgICByZXR1cm4gbW9kYWxJZHg7XG4gICAgfVxuXG4gICAgbW9kYWxJZHggPSB0aGlzLm1vZGFscy5sZW5ndGg7XG4gICAgdGhpcy5tb2RhbHMucHVzaChtb2RhbCk7XG5cbiAgICBpZiAodGhpcy5oaWRlU2libGluZ05vZGVzKSB7XG4gICAgICBoaWRlU2libGluZ3MoY29udGFpbmVyLCBtb2RhbC5tb3VudE5vZGUpO1xuICAgIH1cblxuICAgIGlmIChjb250YWluZXJJZHggIT09IC0xKSB7XG4gICAgICB0aGlzLmRhdGFbY29udGFpbmVySWR4XS5tb2RhbHMucHVzaChtb2RhbCk7XG4gICAgICByZXR1cm4gbW9kYWxJZHg7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIG1vZGFsczogW21vZGFsXSxcbiAgICAgIG92ZXJmbG93aW5nOiBpc092ZXJmbG93aW5nKGNvbnRhaW5lciksXG4gICAgICBwcmV2UGFkZGluZ3M6IFtdLFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5oYW5kbGVDb250YWluZXJPdmVyZmxvdykge1xuICAgICAgc2V0Q29udGFpbmVyU3R5bGUoZGF0YSwgY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lcnMucHVzaChjb250YWluZXIpO1xuICAgIHRoaXMuZGF0YS5wdXNoKGRhdGEpO1xuXG4gICAgcmV0dXJuIG1vZGFsSWR4O1xuICB9XG5cbiAgcmVtb3ZlKG1vZGFsKSB7XG4gICAgY29uc3QgbW9kYWxJZHggPSB0aGlzLm1vZGFscy5pbmRleE9mKG1vZGFsKTtcblxuICAgIGlmIChtb2RhbElkeCA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBtb2RhbElkeDtcbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXJJZHggPSBmaW5kQ29udGFpbmVyKHRoaXMuZGF0YSwgbW9kYWwpO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGFbY29udGFpbmVySWR4XTtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcnNbY29udGFpbmVySWR4XTtcblxuICAgIGRhdGEubW9kYWxzLnNwbGljZShkYXRhLm1vZGFscy5pbmRleE9mKG1vZGFsKSwgMSk7XG4gICAgdGhpcy5tb2RhbHMuc3BsaWNlKG1vZGFsSWR4LCAxKTtcblxuICAgIC8vIElmIHRoYXQgd2FzIHRoZSBsYXN0IG1vZGFsIGluIGEgY29udGFpbmVyLCBjbGVhbiB1cCB0aGUgY29udGFpbmVyLlxuICAgIGlmIChkYXRhLm1vZGFscy5sZW5ndGggPT09IDApIHtcbiAgICAgIGlmICh0aGlzLmhhbmRsZUNvbnRhaW5lck92ZXJmbG93KSB7XG4gICAgICAgIHJlbW92ZUNvbnRhaW5lclN0eWxlKGRhdGEsIGNvbnRhaW5lcik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmhpZGVTaWJsaW5nTm9kZXMpIHtcbiAgICAgICAgc2hvd1NpYmxpbmdzKGNvbnRhaW5lciwgbW9kYWwubW91bnROb2RlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29udGFpbmVycy5zcGxpY2UoY29udGFpbmVySWR4LCAxKTtcbiAgICAgIHRoaXMuZGF0YS5zcGxpY2UoY29udGFpbmVySWR4LCAxKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaGlkZVNpYmxpbmdOb2Rlcykge1xuICAgICAgLy8gT3RoZXJ3aXNlIG1ha2Ugc3VyZSB0aGUgbmV4dCB0b3AgbW9kYWwgaXMgdmlzaWJsZSB0byBhIFNSLlxuICAgICAgYXJpYUhpZGRlbihmYWxzZSwgZGF0YS5tb2RhbHNbZGF0YS5tb2RhbHMubGVuZ3RoIC0gMV0ubW91bnROb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbW9kYWxJZHg7XG4gIH1cblxuICBpc1RvcE1vZGFsKG1vZGFsKSB7XG4gICAgcmV0dXJuICEhdGhpcy5tb2RhbHMubGVuZ3RoICYmIHRoaXMubW9kYWxzW3RoaXMubW9kYWxzLmxlbmd0aCAtIDFdID09PSBtb2RhbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbE1hbmFnZXI7XG4iXX0=

/***/ }),

/***/ 297:
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

var _Fade = __webpack_require__(289);

var _Fade2 = _interopRequireDefault(_Fade);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = exports.styles = {
  root: {
    zIndex: -1,
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    // Remove grey highlight
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  invisible: {
    backgroundColor: 'transparent'
  }
};

function Backdrop(props) {
  var classes = props.classes,
      className = props.className,
      invisible = props.invisible,
      open = props.open,
      transitionDuration = props.transitionDuration,
      other = _objectWithoutProperties(props, ['classes', 'className', 'invisible', 'open', 'transitionDuration']);

  return _react2.default.createElement(
    _Fade2.default,
    _extends({ appear: true, 'in': open, timeout: transitionDuration }, other),
    _react2.default.createElement('div', {
      'data-mui-test': 'Backdrop',
      className: (0, _classnames2.default)(classes.root, _defineProperty({}, classes.invisible, invisible), className),
      'aria-hidden': 'true'
    })
  );
}

Backdrop.propTypes = {
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   */
  invisible: _propTypes2.default.bool,
  /**
   * If `true`, the backdrop is open.
   */
  open: _propTypes2.default.bool.isRequired,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({ enter: _propTypes2.default.number, exit: _propTypes2.default.number })])
};

Backdrop.defaultProps = {
  invisible: false
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiBackdrop' })(Backdrop);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcTW9kYWxcXEJhY2tkcm9wLmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsInJvb3QiLCJ6SW5kZXgiLCJ3aWR0aCIsImhlaWdodCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsIldlYmtpdFRhcEhpZ2hsaWdodENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiaW52aXNpYmxlIiwiQmFja2Ryb3AiLCJwcm9wcyIsImNsYXNzZXMiLCJjbGFzc05hbWUiLCJvcGVuIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwib3RoZXIiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiYm9vbCIsIm9uZU9mVHlwZSIsIm51bWJlciIsInNoYXBlIiwiZW50ZXIiLCJleGl0IiwiZGVmYXVsdFByb3BzIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVPLElBQU1BLDBCQUFTO0FBQ3BCQyxRQUFNO0FBQ0pDLFlBQVEsQ0FBQyxDQURMO0FBRUpDLFdBQU8sTUFGSDtBQUdKQyxZQUFRLE1BSEo7QUFJSkMsY0FBVSxPQUpOO0FBS0pDLFNBQUssQ0FMRDtBQU1KQyxVQUFNLENBTkY7QUFPSjtBQUNBQyw2QkFBeUIsYUFSckI7QUFTSkMscUJBQWlCO0FBVGIsR0FEYztBQVlwQkMsYUFBVztBQUNURCxxQkFBaUI7QUFEUjtBQVpTLENBQWY7O0FBaUJQLFNBQVNFLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUEsTUFDZkMsT0FEZSxHQUN1REQsS0FEdkQsQ0FDZkMsT0FEZTtBQUFBLE1BQ05DLFNBRE0sR0FDdURGLEtBRHZELENBQ05FLFNBRE07QUFBQSxNQUNLSixTQURMLEdBQ3VERSxLQUR2RCxDQUNLRixTQURMO0FBQUEsTUFDZ0JLLElBRGhCLEdBQ3VESCxLQUR2RCxDQUNnQkcsSUFEaEI7QUFBQSxNQUNzQkMsa0JBRHRCLEdBQ3VESixLQUR2RCxDQUNzQkksa0JBRHRCO0FBQUEsTUFDNkNDLEtBRDdDLDRCQUN1REwsS0FEdkQ7O0FBR3ZCLFNBQ0U7QUFBQTtBQUFBLGVBQU0sWUFBTixFQUFhLE1BQUlHLElBQWpCLEVBQXVCLFNBQVNDLGtCQUFoQyxJQUF3REMsS0FBeEQ7QUFDRTtBQUNFLHVCQUFjLFVBRGhCO0FBRUUsaUJBQVcsMEJBQ1RKLFFBQVFaLElBREMsc0JBR05ZLFFBQVFILFNBSEYsRUFHY0EsU0FIZCxHQUtUSSxTQUxTLENBRmI7QUFTRSxxQkFBWTtBQVRkO0FBREYsR0FERjtBQWVEOztBQUVESCxTQUFTTyxTQUFULEdBQXFCO0FBQ25COzs7QUFHQUwsV0FBUyxvQkFBVU0sTUFBVixDQUFpQkMsVUFKUDtBQUtuQjs7O0FBR0FOLGFBQVcsb0JBQVVPLE1BUkY7QUFTbkI7Ozs7QUFJQVgsYUFBVyxvQkFBVVksSUFiRjtBQWNuQjs7O0FBR0FQLFFBQU0sb0JBQVVPLElBQVYsQ0FBZUYsVUFqQkY7QUFrQm5COzs7O0FBSUFKLHNCQUFvQixvQkFBVU8sU0FBVixDQUFvQixDQUN0QyxvQkFBVUMsTUFENEIsRUFFdEMsb0JBQVVDLEtBQVYsQ0FBZ0IsRUFBRUMsT0FBTyxvQkFBVUYsTUFBbkIsRUFBMkJHLE1BQU0sb0JBQVVILE1BQTNDLEVBQWhCLENBRnNDLENBQXBCO0FBdEJELENBQXJCOztBQTRCQWIsU0FBU2lCLFlBQVQsR0FBd0I7QUFDdEJsQixhQUFXO0FBRFcsQ0FBeEI7O2tCQUllLDBCQUFXVixNQUFYLEVBQW1CLEVBQUU2QixNQUFNLGFBQVIsRUFBbkIsRUFBNENsQixRQUE1QyxDIiwiZmlsZSI6IkJhY2tkcm9wLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3JtY3F1ZW4vc2x0LXVpL21hdGVyaWFsLXVpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBGYWRlIGZyb20gJy4uL3RyYW5zaXRpb25zL0ZhZGUnO1xuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0ge1xuICByb290OiB7XG4gICAgekluZGV4OiAtMSxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIC8vIFJlbW92ZSBncmV5IGhpZ2hsaWdodFxuICAgIFdlYmtpdFRhcEhpZ2hsaWdodENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC41KScsXG4gIH0sXG4gIGludmlzaWJsZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIEJhY2tkcm9wKHByb3BzKSB7XG4gIGNvbnN0IHsgY2xhc3NlcywgY2xhc3NOYW1lLCBpbnZpc2libGUsIG9wZW4sIHRyYW5zaXRpb25EdXJhdGlvbiwgLi4ub3RoZXIgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPEZhZGUgYXBwZWFyIGluPXtvcGVufSB0aW1lb3V0PXt0cmFuc2l0aW9uRHVyYXRpb259IHsuLi5vdGhlcn0+XG4gICAgICA8ZGl2XG4gICAgICAgIGRhdGEtbXVpLXRlc3Q9XCJCYWNrZHJvcFwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICBjbGFzc2VzLnJvb3QsXG4gICAgICAgICAge1xuICAgICAgICAgICAgW2NsYXNzZXMuaW52aXNpYmxlXTogaW52aXNpYmxlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICApfVxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgLz5cbiAgICA8L0ZhZGU+XG4gICk7XG59XG5cbkJhY2tkcm9wLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFVzZWZ1bCB0byBleHRlbmQgdGhlIHN0eWxlIGFwcGxpZWQgdG8gY29tcG9uZW50cy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGJhY2tkcm9wIGlzIGludmlzaWJsZS5cbiAgICogSXQgY2FuIGJlIHVzZWQgd2hlbiByZW5kZXJpbmcgYSBwb3BvdmVyIG9yIGEgY3VzdG9tIHNlbGVjdCBjb21wb25lbnQuXG4gICAqL1xuICBpbnZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYmFja2Ryb3AgaXMgb3Blbi5cbiAgICovXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBUaGUgZHVyYXRpb24gZm9yIHRoZSB0cmFuc2l0aW9uLCBpbiBtaWxsaXNlY29uZHMuXG4gICAqIFlvdSBtYXkgc3BlY2lmeSBhIHNpbmdsZSB0aW1lb3V0IGZvciBhbGwgdHJhbnNpdGlvbnMsIG9yIGluZGl2aWR1YWxseSB3aXRoIGFuIG9iamVjdC5cbiAgICovXG4gIHRyYW5zaXRpb25EdXJhdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuc2hhcGUoeyBlbnRlcjogUHJvcFR5cGVzLm51bWJlciwgZXhpdDogUHJvcFR5cGVzLm51bWJlciB9KSxcbiAgXSksXG59O1xuXG5CYWNrZHJvcC5kZWZhdWx0UHJvcHMgPSB7XG4gIGludmlzaWJsZTogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywgeyBuYW1lOiAnTXVpQmFja2Ryb3AnIH0pKEJhY2tkcm9wKTtcbiJdfQ==

/***/ }),

/***/ 325:
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

var _reactDom = __webpack_require__(7);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(23);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactLifecyclesCompat = __webpack_require__(109);

var _reactLifecyclesCompat2 = _interopRequireDefault(_reactLifecyclesCompat);

var _warning = __webpack_require__(3);

var _warning2 = _interopRequireDefault(_warning);

var _keycode = __webpack_require__(61);

var _keycode2 = _interopRequireDefault(_keycode);

var _activeElement = __webpack_require__(384);

var _activeElement2 = _interopRequireDefault(_activeElement);

var _contains = __webpack_require__(110);

var _contains2 = _interopRequireDefault(_contains);

var _inDOM = __webpack_require__(107);

var _inDOM2 = _interopRequireDefault(_inDOM);

var _ownerDocument = __webpack_require__(19);

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

var _RootRef = __webpack_require__(392);

var _RootRef2 = _interopRequireDefault(_RootRef);

var _Portal = __webpack_require__(116);

var _Portal2 = _interopRequireDefault(_Portal);

var _helpers = __webpack_require__(97);

var _withStyles = __webpack_require__(18);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _ModalManager = __webpack_require__(296);

var _ModalManager2 = _interopRequireDefault(_ModalManager);

var _Backdrop = __webpack_require__(297);

var _Backdrop2 = _interopRequireDefault(_Backdrop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // @inheritedComponent Portal

function getContainer(container, defaultContainer) {
  container = typeof container === 'function' ? container() : container;
  return _reactDom2.default.findDOMNode(container) || defaultContainer;
}

function getHasTransition(props) {
  return props.children ? props.children.props.hasOwnProperty('in') : false;
}

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      width: '100%',
      height: '100%',
      position: 'fixed',
      zIndex: theme.zIndex.modal,
      top: 0,
      left: 0
    },
    hidden: {
      visibility: 'hidden'
    }
  };
};

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  _createClass(Modal, null, [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps) {
      if (nextProps.open) {
        return {
          exited: false
        };
      } else if (!getHasTransition(nextProps)) {
        // Otherwise let handleExited take care of marking exited.
        return {
          exited: true
        };
      }

      return null;
    }
  }]);

  function Modal(props, context) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props, context));

    _this.dialogElement = null;
    _this.mounted = false;
    _this.mountNode = null;

    _this.handleRendered = function () {
      _this.autoFocus();

      if (_this.props.onRendered) {
        _this.props.onRendered();
      }
    };

    _this.handleOpen = function () {
      var doc = (0, _ownerDocument2.default)(_this.mountNode);
      var container = getContainer(_this.props.container, doc.body);

      _this.props.manager.add(_this, container);
      doc.addEventListener('keydown', _this.handleDocumentKeyDown);
      doc.addEventListener('focus', _this.enforceFocus, true);
    };

    _this.handleClose = function () {
      _this.props.manager.remove(_this);
      var doc = (0, _ownerDocument2.default)(_this.mountNode);
      doc.removeEventListener('keydown', _this.handleDocumentKeyDown);
      doc.removeEventListener('focus', _this.enforceFocus);
      _this.restoreLastFocus();
    };

    _this.handleExited = function () {
      _this.setState({ exited: true });
      _this.handleClose();
    };

    _this.handleBackdropClick = function (event) {
      if (event.target !== event.currentTarget) {
        return;
      }

      if (_this.props.onBackdropClick) {
        _this.props.onBackdropClick(event);
      }

      if (!_this.props.disableBackdropClick && _this.props.onClose) {
        _this.props.onClose(event, 'backdropClick');
      }
    };

    _this.handleDocumentKeyDown = function (event) {
      if (!_this.isTopModal() || (0, _keycode2.default)(event) !== 'esc') {
        return;
      }

      if (_this.props.onEscapeKeyDown) {
        _this.props.onEscapeKeyDown(event);
      }

      if (!_this.props.disableEscapeKeyDown && _this.props.onClose) {
        _this.props.onClose(event, 'escapeKeyDown');
      }
    };

    _this.checkForFocus = function () {
      if (_inDOM2.default) {
        _this.lastFocus = (0, _activeElement2.default)();
      }
    };

    _this.enforceFocus = function () {
      if (_this.props.disableEnforceFocus || !_this.mounted || !_this.isTopModal()) {
        return;
      }

      var currentActiveElement = (0, _activeElement2.default)((0, _ownerDocument2.default)(_this.mountNode));

      if (_this.dialogElement && !(0, _contains2.default)(_this.dialogElement, currentActiveElement)) {
        _this.dialogElement.focus();
      }
    };

    _this.state = {
      exited: !_this.props.open
    };
    return _this;
  }

  _createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.mounted = true;
      if (this.props.open) {
        this.handleOpen();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.open && this.props.open) {
        this.checkForFocus();
      }

      if (prevProps.open && !this.props.open && !getHasTransition(this.props)) {
        // Otherwise handleExited will call this.
        this.handleClose();
      } else if (!prevProps.open && this.props.open) {
        this.handleOpen();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.mounted = false;

      if (this.props.open || getHasTransition(this.props) && !this.state.exited) {
        this.handleClose();
      }
    }
  }, {
    key: 'autoFocus',
    value: function autoFocus() {
      if (this.props.disableAutoFocus) {
        return;
      }

      var currentActiveElement = (0, _activeElement2.default)((0, _ownerDocument2.default)(this.mountNode));

      if (this.dialogElement && !(0, _contains2.default)(this.dialogElement, currentActiveElement)) {
        this.lastFocus = currentActiveElement;

        if (!this.dialogElement.hasAttribute('tabIndex')) {
          (0, _warning2.default)(false, ['Material-UI: the modal content node does not accept focus.', 'For the benefit of assistive technologies, ' + 'the tabIndex of the node is being set to "-1".'].join('\n'));
          this.dialogElement.setAttribute('tabIndex', -1);
        }

        this.dialogElement.focus();
      }
    }
  }, {
    key: 'restoreLastFocus',
    value: function restoreLastFocus() {
      if (this.props.disableRestoreFocus) {
        return;
      }

      if (this.lastFocus) {
        this.lastFocus.focus();
        this.lastFocus = null;
      }
    }
  }, {
    key: 'isTopModal',
    value: function isTopModal() {
      return this.props.manager.isTopModal(this);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          BackdropComponent = _props.BackdropComponent,
          BackdropProps = _props.BackdropProps,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          container = _props.container,
          disableAutoFocus = _props.disableAutoFocus,
          disableBackdropClick = _props.disableBackdropClick,
          disableEnforceFocus = _props.disableEnforceFocus,
          disableEscapeKeyDown = _props.disableEscapeKeyDown,
          disableRestoreFocus = _props.disableRestoreFocus,
          hideBackdrop = _props.hideBackdrop,
          keepMounted = _props.keepMounted,
          onBackdropClick = _props.onBackdropClick,
          onClose = _props.onClose,
          onEscapeKeyDown = _props.onEscapeKeyDown,
          onRendered = _props.onRendered,
          open = _props.open,
          manager = _props.manager,
          other = _objectWithoutProperties(_props, ['BackdropComponent', 'BackdropProps', 'children', 'classes', 'className', 'container', 'disableAutoFocus', 'disableBackdropClick', 'disableEnforceFocus', 'disableEscapeKeyDown', 'disableRestoreFocus', 'hideBackdrop', 'keepMounted', 'onBackdropClick', 'onClose', 'onEscapeKeyDown', 'onRendered', 'open', 'manager']);

      var exited = this.state.exited;

      var hasTransition = getHasTransition(this.props);
      var childProps = {};

      if (!keepMounted && !open && (!hasTransition || exited)) {
        return null;
      }

      // It's a Transition like component
      if (hasTransition) {
        childProps.onExited = (0, _helpers.createChainedFunction)(this.handleExited, children.props.onExited);
      }

      if (children.props.role === undefined) {
        childProps.role = children.props.role || 'document';
      }

      if (children.props.tabIndex === undefined) {
        childProps.tabIndex = children.props.tabIndex || '-1';
      }

      return _react2.default.createElement(
        _Portal2.default,
        {
          ref: function ref(node) {
            _this2.mountNode = node ? node.getMountNode() : node;
          },
          container: container,
          onRendered: this.handleRendered
        },
        _react2.default.createElement(
          'div',
          _extends({
            'data-mui-test': 'Modal',
            className: (0, _classnames2.default)(classes.root, className, _defineProperty({}, classes.hidden, exited))
          }, other),
          hideBackdrop ? null : _react2.default.createElement(BackdropComponent, _extends({ open: open, onClick: this.handleBackdropClick }, BackdropProps)),
          _react2.default.createElement(
            _RootRef2.default,
            {
              rootRef: function rootRef(node) {
                _this2.dialogElement = node;
              }
            },
            _react2.default.cloneElement(children, childProps)
          )
        )
      );
    }
  }]);

  return Modal;
}(_react2.default.Component);

Modal.propTypes = {
  /**
   * A backdrop component. Useful for custom backdrop rendering.
   */
  BackdropComponent: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * Properties applied to the `Backdrop` element.
   */
  BackdropProps: _propTypes2.default.object,
  /**
   * A single child content element.
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
   * A node, component instance, or function that returns either.
   * The `container` will have the portal children appended to it.
   */
  container: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   */
  disableAutoFocus: _propTypes2.default.bool,
  /**
   * If `true`, clicking the backdrop will not fire any callback.
   */
  disableBackdropClick: _propTypes2.default.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   */
  disableEnforceFocus: _propTypes2.default.bool,
  /**
   * If `true`, hitting escape will not fire any callback.
   */
  disableEscapeKeyDown: _propTypes2.default.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden.
   */
  disableRestoreFocus: _propTypes2.default.bool,
  /**
   * If `true`, the backdrop is not rendered.
   */
  hideBackdrop: _propTypes2.default.bool,
  /**
   * Always keep the children in the DOM.
   * This property can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   */
  keepMounted: _propTypes2.default.bool,
  /**
   * A modal manager used to track and manage the state of open
   * Modals. Useful when customizing how modals interact within a container.
   */
  manager: _propTypes2.default.object,
  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: _propTypes2.default.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback
   * @param {string} reason Can be:`"escapeKeyDown"`, `"backdropClick"`
   */
  onClose: _propTypes2.default.func,
  /**
   * Callback fired when the escape key is pressed,
   * `disableEscapeKeyDown` is false and the modal is in focus.
   */
  onEscapeKeyDown: _propTypes2.default.func,
  /**
   * Callback fired once the children has been mounted into the `container`.
   * It signals that the `open={true}` property took effect.
   */
  onRendered: _propTypes2.default.func,
  /**
   * If `true`, the modal is open.
   */
  open: _propTypes2.default.bool.isRequired
};

Modal.defaultProps = {
  disableAutoFocus: false,
  disableBackdropClick: false,
  disableEnforceFocus: false,
  disableEscapeKeyDown: false,
  disableRestoreFocus: false,
  hideBackdrop: false,
  keepMounted: false,
  // Modals don't open on the server so this won't conflict with concurrent requests.
  manager: new _ModalManager2.default(),
  BackdropComponent: _Backdrop2.default
};

exports.default = (0, _withStyles2.default)(styles, { flip: false, name: 'MuiModal' })((0, _reactLifecyclesCompat2.default)(Modal));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcTW9kYWxcXE1vZGFsLmpzIl0sIm5hbWVzIjpbImdldENvbnRhaW5lciIsImNvbnRhaW5lciIsImRlZmF1bHRDb250YWluZXIiLCJmaW5kRE9NTm9kZSIsImdldEhhc1RyYW5zaXRpb24iLCJwcm9wcyIsImNoaWxkcmVuIiwiaGFzT3duUHJvcGVydHkiLCJzdHlsZXMiLCJyb290IiwiZGlzcGxheSIsIndpZHRoIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJ6SW5kZXgiLCJ0aGVtZSIsIm1vZGFsIiwidG9wIiwibGVmdCIsImhpZGRlbiIsInZpc2liaWxpdHkiLCJNb2RhbCIsIm5leHRQcm9wcyIsIm9wZW4iLCJleGl0ZWQiLCJjb250ZXh0IiwiZGlhbG9nRWxlbWVudCIsIm1vdW50ZWQiLCJtb3VudE5vZGUiLCJoYW5kbGVSZW5kZXJlZCIsImF1dG9Gb2N1cyIsIm9uUmVuZGVyZWQiLCJoYW5kbGVPcGVuIiwiZG9jIiwiYm9keSIsIm1hbmFnZXIiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlRG9jdW1lbnRLZXlEb3duIiwiZW5mb3JjZUZvY3VzIiwiaGFuZGxlQ2xvc2UiLCJyZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVzdG9yZUxhc3RGb2N1cyIsImhhbmRsZUV4aXRlZCIsInNldFN0YXRlIiwiaGFuZGxlQmFja2Ryb3BDbGljayIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsIm9uQmFja2Ryb3BDbGljayIsImRpc2FibGVCYWNrZHJvcENsaWNrIiwib25DbG9zZSIsImlzVG9wTW9kYWwiLCJvbkVzY2FwZUtleURvd24iLCJkaXNhYmxlRXNjYXBlS2V5RG93biIsImNoZWNrRm9yRm9jdXMiLCJsYXN0Rm9jdXMiLCJkaXNhYmxlRW5mb3JjZUZvY3VzIiwiY3VycmVudEFjdGl2ZUVsZW1lbnQiLCJmb2N1cyIsInN0YXRlIiwicHJldlByb3BzIiwiZGlzYWJsZUF1dG9Gb2N1cyIsImhhc0F0dHJpYnV0ZSIsImpvaW4iLCJzZXRBdHRyaWJ1dGUiLCJkaXNhYmxlUmVzdG9yZUZvY3VzIiwiQmFja2Ryb3BDb21wb25lbnQiLCJCYWNrZHJvcFByb3BzIiwiY2xhc3NlcyIsImNsYXNzTmFtZSIsImhpZGVCYWNrZHJvcCIsImtlZXBNb3VudGVkIiwib3RoZXIiLCJoYXNUcmFuc2l0aW9uIiwiY2hpbGRQcm9wcyIsIm9uRXhpdGVkIiwicm9sZSIsInVuZGVmaW5lZCIsInRhYkluZGV4Iiwibm9kZSIsImdldE1vdW50Tm9kZSIsImNsb25lRWxlbWVudCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsImZ1bmMiLCJvYmplY3QiLCJlbGVtZW50IiwiaXNSZXF1aXJlZCIsImJvb2wiLCJkZWZhdWx0UHJvcHMiLCJmbGlwIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7K2VBbEJBOztBQW9CQSxTQUFTQSxZQUFULENBQXNCQyxTQUF0QixFQUFpQ0MsZ0JBQWpDLEVBQW1EO0FBQ2pERCxjQUFZLE9BQU9BLFNBQVAsS0FBcUIsVUFBckIsR0FBa0NBLFdBQWxDLEdBQWdEQSxTQUE1RDtBQUNBLFNBQU8sbUJBQVNFLFdBQVQsQ0FBcUJGLFNBQXJCLEtBQW1DQyxnQkFBMUM7QUFDRDs7QUFFRCxTQUFTRSxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBaUM7QUFDL0IsU0FBT0EsTUFBTUMsUUFBTixHQUFpQkQsTUFBTUMsUUFBTixDQUFlRCxLQUFmLENBQXFCRSxjQUFyQixDQUFvQyxJQUFwQyxDQUFqQixHQUE2RCxLQUFwRTtBQUNEOztBQUVNLElBQU1DLDBCQUFTLFNBQVRBLE1BQVM7QUFBQSxTQUFVO0FBQzlCQyxVQUFNO0FBQ0pDLGVB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Ozs7Ozs7QUFPQXBDLFdBQVMsb0JBQVVvQyxJQWpGSDtBQWtGaEI7Ozs7QUFJQWxDLG1CQUFpQixvQkFBVWtDLElBdEZYO0FBdUZoQjs7OztBQUlBekQsY0FBWSxvQkFBVXlELElBM0ZOO0FBNEZoQjs7O0FBR0FqRSxRQUFNLG9CQUFVcUUsSUFBVixDQUFlRDtBQS9GTCxDQUFsQjs7QUFrR0F0RSxNQUFNd0UsWUFBTixHQUFxQjtBQUNuQjlCLG9CQUFrQixLQURDO0FBRW5CWix3QkFBc0IsS0FGSDtBQUduQk8sdUJBQXFCLEtBSEY7QUFJbkJILHdCQUFzQixLQUpIO0FBS25CWSx1QkFBcUIsS0FMRjtBQU1uQkssZ0JBQWMsS0FOSztBQU9uQkMsZUFBYSxLQVBNO0FBUW5CO0FBQ0F0QyxXQUFTLDRCQVRVO0FBVW5CaUM7QUFWbUIsQ0FBckI7O2tCQWFlLDBCQUFXNUQsTUFBWCxFQUFtQixFQUFFc0YsTUFBTSxLQUFSLEVBQWVDLE1BQU0sVUFBckIsRUFBbkIsRUFBc0QscUNBQVMxRSxLQUFULENBQXRELEMiLCJmaWxlIjoiTW9kYWwuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvcm1jcXVlbi9zbHQtdWkvbWF0ZXJpYWwtdWkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAaW5oZXJpdGVkQ29tcG9uZW50IFBvcnRhbFxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgcG9seWZpbGwgZnJvbSAncmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnd2FybmluZyc7XG5pbXBvcnQga2V5Y29kZSBmcm9tICdrZXljb2RlJztcbmltcG9ydCBhY3RpdmVFbGVtZW50IGZyb20gJ2RvbS1oZWxwZXJzL2FjdGl2ZUVsZW1lbnQnO1xuaW1wb3J0IGNvbnRhaW5zIGZyb20gJ2RvbS1oZWxwZXJzL3F1ZXJ5L2NvbnRhaW5zJztcbmltcG9ydCBpbkRPTSBmcm9tICdkb20taGVscGVycy91dGlsL2luRE9NJztcbmltcG9ydCBvd25lckRvY3VtZW50IGZyb20gJ2RvbS1oZWxwZXJzL293bmVyRG9jdW1lbnQnO1xuaW1wb3J0IFJvb3RSZWYgZnJvbSAnLi4vaW50ZXJuYWwvUm9vdFJlZic7XG5pbXBvcnQgUG9ydGFsIGZyb20gJy4uL1BvcnRhbCc7XG5pbXBvcnQgeyBjcmVhdGVDaGFpbmVkRnVuY3Rpb24gfSBmcm9tICcuLi91dGlscy9oZWxwZXJzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBNb2RhbE1hbmFnZXIgZnJvbSAnLi9Nb2RhbE1hbmFnZXInO1xuaW1wb3J0IEJhY2tkcm9wIGZyb20gJy4vQmFja2Ryb3AnO1xuXG5mdW5jdGlvbiBnZXRDb250YWluZXIoY29udGFpbmVyLCBkZWZhdWx0Q29udGFpbmVyKSB7XG4gIGNvbnRhaW5lciA9IHR5cGVvZiBjb250YWluZXIgPT09ICdmdW5jdGlvbicgPyBjb250YWluZXIoKSA6IGNvbnRhaW5lcjtcbiAgcmV0dXJuIFJlYWN0RE9NLmZpbmRET01Ob2RlKGNvbnRhaW5lcikgfHwgZGVmYXVsdENvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gZ2V0SGFzVHJhbnNpdGlvbihwcm9wcykge1xuICByZXR1cm4gcHJvcHMuY2hpbGRyZW4gPyBwcm9wcy5jaGlsZHJlbi5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgnaW4nKSA6IGZhbHNlO1xufVxuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHpJbmRleDogdGhlbWUuekluZGV4Lm1vZGFsLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICB9LFxuICBoaWRkZW46IHtcbiAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgfSxcbn0pO1xuXG5jbGFzcyBNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy5vcGVuKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBleGl0ZWQ6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKCFnZXRIYXNUcmFuc2l0aW9uKG5leHRQcm9wcykpIHtcbiAgICAgIC8vIE90aGVyd2lzZSBsZXQgaGFuZGxlRXhpdGVkIHRha2UgY2FyZSBvZiBtYXJraW5nIGV4aXRlZC5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGV4aXRlZDogdHJ1ZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBleGl0ZWQ6ICF0aGlzLnByb3BzLm9wZW4sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XG4gICAgaWYgKHRoaXMucHJvcHMub3Blbikge1xuICAgICAgdGhpcy5oYW5kbGVPcGVuKCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICghcHJldlByb3BzLm9wZW4gJiYgdGhpcy5wcm9wcy5vcGVuKSB7XG4gICAgICB0aGlzLmNoZWNrRm9yRm9jdXMoKTtcbiAgICB9XG5cbiAgICBpZiAocHJldlByb3BzLm9wZW4gJiYgIXRoaXMucHJvcHMub3BlbiAmJiAhZ2V0SGFzVHJhbnNpdGlvbih0aGlzLnByb3BzKSkge1xuICAgICAgLy8gT3RoZXJ3aXNlIGhhbmRsZUV4aXRlZCB3aWxsIGNhbGwgdGhpcy5cbiAgICAgIHRoaXMuaGFuZGxlQ2xvc2UoKTtcbiAgICB9IGVsc2UgaWYgKCFwcmV2UHJvcHMub3BlbiAmJiB0aGlzLnByb3BzLm9wZW4pIHtcbiAgICAgIHRoaXMuaGFuZGxlT3BlbigpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub3BlbiB8fCAoZ2V0SGFzVHJhbnNpdGlvbih0aGlzLnByb3BzKSAmJiAhdGhpcy5zdGF0ZS5leGl0ZWQpKSB7XG4gICAgICB0aGlzLmhhbmRsZUNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgZGlhbG9nRWxlbWVudCA9IG51bGw7XG4gIG1vdW50ZWQgPSBmYWxzZTtcbiAgbW91bnROb2RlID0gbnVsbDtcblxuICBoYW5kbGVSZW5kZXJlZCA9ICgpID0+IHtcbiAgICB0aGlzLmF1dG9Gb2N1cygpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25SZW5kZXJlZCkge1xuICAgICAgdGhpcy5wcm9wcy5vblJlbmRlcmVkKCk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZU9wZW4gPSAoKSA9PiB7XG4gICAgY29uc3QgZG9jID0gb3duZXJEb2N1bWVudCh0aGlzLm1vdW50Tm9kZSk7XG4gICAgY29uc3QgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKHRoaXMucHJvcHMuY29udGFpbmVyLCBkb2MuYm9keSk7XG5cbiAgICB0aGlzLnByb3BzLm1hbmFnZXIuYWRkKHRoaXMsIGNvbnRhaW5lcik7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZURvY3VtZW50S2V5RG93bik7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5lbmZvcmNlRm9jdXMsIHRydWUpO1xuICB9O1xuXG4gIGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMubWFuYWdlci5yZW1vdmUodGhpcyk7XG4gICAgY29uc3QgZG9jID0gb3duZXJEb2N1bWVudCh0aGlzLm1vdW50Tm9kZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZURvY3VtZW50S2V5RG93bik7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5lbmZvcmNlRm9jdXMpO1xuICAgIHRoaXMucmVzdG9yZUxhc3RGb2N1cygpO1xuICB9O1xuXG4gIGhhbmRsZUV4aXRlZCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXhpdGVkOiB0cnVlIH0pO1xuICAgIHRoaXMuaGFuZGxlQ2xvc2UoKTtcbiAgfTtcblxuICBoYW5kbGVCYWNrZHJvcENsaWNrID0gZXZlbnQgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkJhY2tkcm9wQ2xpY2spIHtcbiAgICAgIHRoaXMucHJvcHMub25CYWNrZHJvcENsaWNrKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMucHJvcHMuZGlzYWJsZUJhY2tkcm9wQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsb3NlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xvc2UoZXZlbnQsICdiYWNrZHJvcENsaWNrJyk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZURvY3VtZW50S2V5RG93biA9IGV2ZW50ID0+IHtcbiAgICBpZiAoIXRoaXMuaXNUb3BNb2RhbCgpIHx8IGtleWNvZGUoZXZlbnQpICE9PSAnZXNjJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uRXNjYXBlS2V5RG93bikge1xuICAgICAgdGhpcy5wcm9wcy5vbkVzY2FwZUtleURvd24oZXZlbnQpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5wcm9wcy5kaXNhYmxlRXNjYXBlS2V5RG93biAmJiB0aGlzLnByb3BzLm9uQ2xvc2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25DbG9zZShldmVudCwgJ2VzY2FwZUtleURvd24nKTtcbiAgICB9XG4gIH07XG5cbiAgY2hlY2tGb3JGb2N1cyA9ICgpID0+IHtcbiAgICBpZiAoaW5ET00pIHtcbiAgICAgIHRoaXMubGFzdEZvY3VzID0gYWN0aXZlRWxlbWVudCgpO1xuICAgIH1cbiAgfTtcblxuICBhdXRvRm9jdXMoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZUF1dG9Gb2N1cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRBY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudChvd25lckRvY3VtZW50KHRoaXMubW91bnROb2RlKSk7XG5cbiAgICBpZiAodGhpcy5kaWFsb2dFbGVtZW50ICYmICFjb250YWlucyh0aGlzLmRpYWxvZ0VsZW1lbnQsIGN1cnJlbnRBY3RpdmVFbGVtZW50KSkge1xuICAgICAgdGhpcy5sYXN0Rm9jdXMgPSBjdXJyZW50QWN0aXZlRWxlbWVudDtcblxuICAgICAgaWYgKCF0aGlzLmRpYWxvZ0VsZW1lbnQuaGFzQXR0cmlidXRlKCd0YWJJbmRleCcpKSB7XG4gICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgW1xuICAgICAgICAgICAgJ01hdGVyaWFsLVVJOiB0aGUgbW9kYWwgY29udGVudCBub2RlIGRvZXMgbm90IGFjY2VwdCBmb2N1cy4nLFxuICAgICAgICAgICAgJ0ZvciB0aGUgYmVuZWZpdCBvZiBhc3Npc3RpdmUgdGVjaG5vbG9naWVzLCAnICtcbiAgICAgICAgICAgICAgJ3RoZSB0YWJJbmRleCBvZiB0aGUgbm9kZSBpcyBiZWluZyBzZXQgdG8gXCItMVwiLicsXG4gICAgICAgICAgXS5qb2luKCdcXG4nKSxcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5kaWFsb2dFbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiSW5kZXgnLCAtMSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGlhbG9nRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHJlc3RvcmVMYXN0Rm9jdXMoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZVJlc3RvcmVGb2N1cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxhc3RGb2N1cykge1xuICAgICAgdGhpcy5sYXN0Rm9jdXMuZm9jdXMoKTtcbiAgICAgIHRoaXMubGFzdEZvY3VzID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBlbmZvcmNlRm9jdXMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZUVuZm9yY2VGb2N1cyB8fCAhdGhpcy5tb3VudGVkIHx8ICF0aGlzLmlzVG9wTW9kYWwoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRBY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudChvd25lckRvY3VtZW50KHRoaXMubW91bnROb2RlKSk7XG5cbiAgICBpZiAodGhpcy5kaWFsb2dFbGVtZW50ICYmICFjb250YWlucyh0aGlzLmRpYWxvZ0VsZW1lbnQsIGN1cnJlbnRBY3RpdmVFbGVtZW50KSkge1xuICAgICAgdGhpcy5kaWFsb2dFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIGlzVG9wTW9kYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMubWFuYWdlci5pc1RvcE1vZGFsKHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIEJhY2tkcm9wQ29tcG9uZW50LFxuICAgICAgQmFja2Ryb3BQcm9wcyxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGRpc2FibGVBdXRvRm9jdXMsXG4gICAgICBkaXNhYmxlQmFja2Ryb3BDbGljayxcbiAgICAgIGRpc2FibGVFbmZvcmNlRm9jdXMsXG4gICAgICBkaXNhYmxlRXNjYXBlS2V5RG93bixcbiAgICAgIGRpc2FibGVSZXN0b3JlRm9jdXMsXG4gICAgICBoaWRlQmFja2Ryb3AsXG4gICAgICBrZWVwTW91bnRlZCxcbiAgICAgIG9uQmFja2Ryb3BDbGljayxcbiAgICAgIG9uQ2xvc2UsXG4gICAgICBvbkVzY2FwZUtleURvd24sXG4gICAgICBvblJlbmRlcmVkLFxuICAgICAgb3BlbixcbiAgICAgIG1hbmFnZXIsXG4gICAgICAuLi5vdGhlclxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZXhpdGVkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGhhc1RyYW5zaXRpb24gPSBnZXRIYXNUcmFuc2l0aW9uKHRoaXMucHJvcHMpO1xuICAgIGNvbnN0IGNoaWxkUHJvcHMgPSB7fTtcblxuICAgIGlmICgha2VlcE1vdW50ZWQgJiYgIW9wZW4gJiYgKCFoYXNUcmFuc2l0aW9uIHx8IGV4aXRlZCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIEl0J3MgYSBUcmFuc2l0aW9uIGxpa2UgY29tcG9uZW50XG4gICAgaWYgKGhhc1RyYW5zaXRpb24pIHtcbiAgICAgIGNoaWxkUHJvcHMub25FeGl0ZWQgPSBjcmVhdGVDaGFpbmVkRnVuY3Rpb24odGhpcy5oYW5kbGVFeGl0ZWQsIGNoaWxkcmVuLnByb3BzLm9uRXhpdGVkKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGRyZW4ucHJvcHMucm9sZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjaGlsZFByb3BzLnJvbGUgPSBjaGlsZHJlbi5wcm9wcy5yb2xlIHx8ICdkb2N1bWVudCc7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkcmVuLnByb3BzLnRhYkluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNoaWxkUHJvcHMudGFiSW5kZXggPSBjaGlsZHJlbi5wcm9wcy50YWJJbmRleCB8fCAnLTEnO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UG9ydGFsXG4gICAgICAgIHJlZj17bm9kZSA9PiB7XG4gICAgICAgICAgdGhpcy5tb3VudE5vZGUgPSBub2RlID8gbm9kZS5nZXRNb3VudE5vZGUoKSA6IG5vZGU7XG4gICAgICAgIH19XG4gICAgICAgIGNvbnRhaW5lcj17Y29udGFpbmVyfVxuICAgICAgICBvblJlbmRlcmVkPXt0aGlzLmhhbmRsZVJlbmRlcmVkfVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgZGF0YS1tdWktdGVzdD1cIk1vZGFsXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy5yb290LCBjbGFzc05hbWUsIHtcbiAgICAgICAgICAgIFtjbGFzc2VzLmhpZGRlbl06IGV4aXRlZCxcbiAgICAgICAgICB9KX1cbiAgICAgICAgICB7Li4ub3RoZXJ9XG4gICAgICAgID5cbiAgICAgICAgICB7aGlkZUJhY2tkcm9wID8gbnVsbCA6IChcbiAgICAgICAgICAgIDxCYWNrZHJvcENvbXBvbmVudCBvcGVuPXtvcGVufSBvbkNsaWNrPXt0aGlzLmhhbmRsZUJhY2tkcm9wQ2xpY2t9IHsuLi5CYWNrZHJvcFByb3BzfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPFJvb3RSZWZcbiAgICAgICAgICAgIHJvb3RSZWY9e25vZGUgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmRpYWxvZ0VsZW1lbnQgPSBub2RlO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7UmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCBjaGlsZFByb3BzKX1cbiAgICAgICAgICA8L1Jvb3RSZWY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Qb3J0YWw+XG4gICAgKTtcbiAgfVxufVxuXG5Nb2RhbC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBBIGJhY2tkcm9wIGNvbXBvbmVudC4gVXNlZnVsIGZvciBjdXN0b20gYmFja2Ryb3AgcmVuZGVyaW5nLlxuICAgKi9cbiAgQmFja2Ryb3BDb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gIC8qKlxuICAgKiBQcm9wZXJ0aWVzIGFwcGxpZWQgdG8gdGhlIGBCYWNrZHJvcGAgZWxlbWVudC5cbiAgICovXG4gIEJhY2tkcm9wUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiBBIHNpbmdsZSBjaGlsZCBjb250ZW50IGVsZW1lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQsXG4gIC8qKlxuICAgKiBVc2VmdWwgdG8gZXh0ZW5kIHRoZSBzdHlsZSBhcHBsaWVkIHRvIGNvbXBvbmVudHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBBIG5vZGUsIGNvbXBvbmVudCBpbnN0YW5jZSwgb3IgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGVpdGhlci5cbiAgICogVGhlIGBjb250YWluZXJgIHdpbGwgaGF2ZSB0aGUgcG9ydGFsIGNoaWxkcmVuIGFwcGVuZGVkIHRvIGl0LlxuICAgKi9cbiAgY29udGFpbmVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pLFxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgbW9kYWwgd2lsbCBub3QgYXV0b21hdGljYWxseSBzaGlmdCBmb2N1cyB0byBpdHNlbGYgd2hlbiBpdCBvcGVucywgYW5kXG4gICAqIHJlcGxhY2UgaXQgdG8gdGhlIGxhc3QgZm9jdXNlZCBlbGVtZW50IHdoZW4gaXQgY2xvc2VzLlxuICAgKiBUaGlzIGFsc28gd29ya3MgY29ycmVjdGx5IHdpdGggYW55IG1vZGFsIGNoaWxkcmVuIHRoYXQgaGF2ZSB0aGUgYGRpc2FibGVBdXRvRm9jdXNgIHByb3AuXG4gICAqXG4gICAqIEdlbmVyYWxseSB0aGlzIHNob3VsZCBuZXZlciBiZSBzZXQgdG8gYHRydWVgIGFzIGl0IG1ha2VzIHRoZSBtb2RhbCBsZXNzXG4gICAqIGFjY2Vzc2libGUgdG8gYXNzaXN0aXZlIHRlY2hub2xvZ2llcywgbGlrZSBzY3JlZW4gcmVhZGVycy5cbiAgICovXG4gIGRpc2FibGVBdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICogSWYgYHRydWVgLCBjbGlja2luZyB0aGUgYmFja2Ryb3Agd2lsbCBub3QgZmlyZSBhbnkgY2FsbGJhY2suXG4gICAqL1xuICBkaXNhYmxlQmFja2Ryb3BDbGljazogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBtb2RhbCB3aWxsIG5vdCBwcmV2ZW50IGZvY3VzIGZyb20gbGVhdmluZyB0aGUgbW9kYWwgd2hpbGUgb3Blbi5cbiAgICpcbiAgICogR2VuZXJhbGx5IHRoaXMgc2hvdWxkIG5ldmVyIGJlIHNldCB0byBgdHJ1ZWAgYXMgaXQgbWFrZXMgdGhlIG1vZGFsIGxlc3NcbiAgICogYWNjZXNzaWJsZSB0byBhc3Npc3RpdmUgdGVjaG5vbG9naWVzLCBsaWtlIHNjcmVlbiByZWFkZXJzLlxuICAgKi9cbiAgZGlzYWJsZUVuZm9yY2VGb2N1czogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGhpdHRpbmcgZXNjYXBlIHdpbGwgbm90IGZpcmUgYW55IGNhbGxiYWNrLlxuICAgKi9cbiAgZGlzYWJsZUVzY2FwZUtleURvd246IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgbW9kYWwgd2lsbCBub3QgcmVzdG9yZSBmb2N1cyB0byBwcmV2aW91c2x5IGZvY3VzZWQgZWxlbWVudCBvbmNlXG4gICAqIG1vZGFsIGlzIGhpZGRlbi5cbiAgICovXG4gIGRpc2FibGVSZXN0b3JlRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYmFja2Ryb3AgaXMgbm90IHJlbmRlcmVkLlxuICAgKi9cbiAgaGlkZUJhY2tkcm9wOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIEFsd2F5cyBrZWVwIHRoZSBjaGlsZHJlbiBpbiB0aGUgRE9NLlxuICAgKiBUaGlzIHByb3BlcnR5IGNhbiBiZSB1c2VmdWwgaW4gU0VPIHNpdHVhdGlvbiBvclxuICAgKiB3aGVuIHlvdSB3YW50IHRvIG1heGltaXplIHRoZSByZXNwb25zaXZlbmVzcyBvZiB0aGUgTW9kYWwuXG4gICAqL1xuICBrZWVwTW91bnRlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBBIG1vZGFsIG1hbmFnZXIgdXNlZCB0byB0cmFjayBhbmQgbWFuYWdlIHRoZSBzdGF0ZSBvZiBvcGVuXG4gICAqIE1vZGFscy4gVXNlZnVsIHdoZW4gY3VzdG9taXppbmcgaG93IG1vZGFscyBpbnRlcmFjdCB3aXRoaW4gYSBjb250YWluZXIuXG4gICAqL1xuICBtYW5hZ2VyOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgYmFja2Ryb3AgaXMgY2xpY2tlZC5cbiAgICovXG4gIG9uQmFja2Ryb3BDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBjb21wb25lbnQgcmVxdWVzdHMgdG8gYmUgY2xvc2VkLlxuICAgKiBUaGUgYHJlYXNvbmAgcGFyYW1ldGVyIGNhbiBvcHRpb25hbGx5IGJlIHVzZWQgdG8gY29udHJvbCB0aGUgcmVzcG9uc2UgdG8gYG9uQ2xvc2VgLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2tcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlYXNvbiBDYW4gYmU6YFwiZXNjYXBlS2V5RG93blwiYCwgYFwiYmFja2Ryb3BDbGlja1wiYFxuICAgKi9cbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBlc2NhcGUga2V5IGlzIHByZXNzZWQsXG4gICAqIGBkaXNhYmxlRXNjYXBlS2V5RG93bmAgaXMgZmFsc2UgYW5kIHRoZSBtb2RhbCBpcyBpbiBmb2N1cy5cbiAgICovXG4gIG9uRXNjYXBlS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBvbmNlIHRoZSBjaGlsZHJlbiBoYXMgYmVlbiBtb3VudGVkIGludG8gdGhlIGBjb250YWluZXJgLlxuICAgKiBJdCBzaWduYWxzIHRoYXQgdGhlIGBvcGVuPXt0cnVlfWAgcHJvcGVydHkgdG9vayBlZmZlY3QuXG4gICAqL1xuICBvblJlbmRlcmVkOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIG1vZGFsIGlzIG9wZW4uXG4gICAqL1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxufTtcblxuTW9kYWwuZGVmYXVsdFByb3BzID0ge1xuICBkaXNhYmxlQXV0b0ZvY3VzOiBmYWxzZSxcbiAgZGlzYWJsZUJhY2tkcm9wQ2xpY2s6IGZhbHNlLFxuICBkaXNhYmxlRW5mb3JjZUZvY3VzOiBmYWxzZSxcbiAgZGlzYWJsZUVzY2FwZUtleURvd246IGZhbHNlLFxuICBkaXNhYmxlUmVzdG9yZUZvY3VzOiBmYWxzZSxcbiAgaGlkZUJhY2tkcm9wOiBmYWxzZSxcbiAga2VlcE1vdW50ZWQ6IGZhbHNlLFxuICAvLyBNb2RhbHMgZG9uJ3Qgb3BlbiBvbiB0aGUgc2VydmVyIHNvIHRoaXMgd29uJ3QgY29uZmxpY3Qgd2l0aCBjb25jdXJyZW50IHJlcXVlc3RzLlxuICBtYW5hZ2VyOiBuZXcgTW9kYWxNYW5hZ2VyKCksXG4gIEJhY2tkcm9wQ29tcG9uZW50OiBCYWNrZHJvcCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7IGZsaXA6IGZhbHNlLCBuYW1lOiAnTXVpTW9kYWwnIH0pKHBvbHlmaWxsKE1vZGFsKSk7XG4iXX0=

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

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = camelizeStyleName;

var _camelize = __webpack_require__(394);

var _camelize2 = _interopRequireDefault(_camelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var msPattern = /^-ms-/; /**
                          * Copyright 2014-2015, Facebook, Inc.
                          * All rights reserved.
                          * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
                          */
function camelizeStyleName(string) {
  return (0, _camelize2.default)(string.replace(msPattern, 'ms-'));
}
module.exports = exports['default'];

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

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = style;

var _camelizeStyle = __webpack_require__(388);

var _camelizeStyle2 = _interopRequireDefault(_camelizeStyle);

var _hyphenateStyle = __webpack_require__(395);

var _hyphenateStyle2 = _interopRequireDefault(_hyphenateStyle);

var _getComputedStyle2 = __webpack_require__(397);

var _getComputedStyle3 = _interopRequireDefault(_getComputedStyle2);

var _removeStyle = __webpack_require__(398);

var _removeStyle2 = _interopRequireDefault(_removeStyle);

var _properties = __webpack_require__(399);

var _isTransform = __webpack_require__(400);

var _isTransform2 = _interopRequireDefault(_isTransform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function style(node, property, value) {
  var css = '';
  var transforms = '';
  var props = property;

  if (typeof property === 'string') {
    if (value === undefined) {
      return node.style[(0, _camelizeStyle2.default)(property)] || (0, _getComputedStyle3.default)(node).getPropertyValue((0, _hyphenateStyle2.default)(property));
    } else {
      (props = {})[property] = value;
    }
  }

  Object.keys(props).forEach(function (key) {
    var value = props[key];
    if (!value && value !== 0) {
      (0, _removeStyle2.default)(node, (0, _hyphenateStyle2.default)(key));
    } else if ((0, _isTransform2.default)(key)) {
      transforms += key + '(' + value + ') ';
    } else {
      css += (0, _hyphenateStyle2.default)(key) + ': ' + value + ';';
    }
  });

  if (transforms) {
    css += _properties.transform + ': ' + transforms + ';';
  }

  node.style.cssText += ';' + css;
}
module.exports = exports['default'];

/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = camelize;
var rHyphen = /-(.)/g;

function camelize(string) {
  return string.replace(rHyphen, function (_, chr) {
    return chr.toUpperCase();
  });
}
module.exports = exports["default"];

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenateStyleName;

var _hyphenate = __webpack_require__(396);

var _hyphenate2 = _interopRequireDefault(_hyphenate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var msPattern = /^ms-/; /**
                         * Copyright 2013-2014, Facebook, Inc.
                         * All rights reserved.
                         * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
                         */

function hyphenateStyleName(string) {
  return (0, _hyphenate2.default)(string).replace(msPattern, '-ms-');
}
module.exports = exports['default'];

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenate;

var rUpper = /([A-Z])/g;

function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}
module.exports = exports['default'];

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _getComputedStyle;

var _camelizeStyle = __webpack_require__(388);

var _camelizeStyle2 = _interopRequireDefault(_camelizeStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rposition = /^(top|right|bottom|left)$/;
var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;

function _getComputedStyle(node) {
  if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
  var doc = node.ownerDocument;

  return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : {
    //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
    getPropertyValue: function getPropertyValue(prop) {
      var style = node.style;

      prop = (0, _camelizeStyle2.default)(prop);

      if (prop == 'float') prop = 'styleFloat';

      var current = node.currentStyle[prop] || null;

      if (current == null && style && style[prop]) current = style[prop];

      if (rnumnonpx.test(current) && !rposition.test(prop)) {
        // Remember the original values
        var left = style.left;
        var runStyle = node.runtimeStyle;
        var rsLeft = runStyle && runStyle.left;

        // Put in the new values to get a computed value out
        if (rsLeft) runStyle.left = node.currentStyle.left;

        style.left = prop === 'fontSize' ? '1em' : current;
        current = style.pixelLeft + 'px';

        // Revert the changed values
        style.left = left;
        if (rsLeft) runStyle.left = rsLeft;
      }

      return current;
    }
  };
}
module.exports = exports['default'];

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeStyle;
function removeStyle(node, key) {
  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
}
module.exports = exports['default'];

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;

var _inDOM = __webpack_require__(107);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transform = 'transform';
var prefix = void 0,
    transitionEnd = void 0,
    animationEnd = void 0;
var transitionProperty = void 0,
    transitionDuration = void 0,
    transitionTiming = void 0,
    transitionDelay = void 0;
var animationName = void 0,
    animationDuration = void 0,
    animationTiming = void 0,
    animationDelay = void 0;

if (_inDOM2.default) {
  var _getTransitionPropert = getTransitionProperties();

  prefix = _getTransitionPropert.prefix;
  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;


  exports.transform = transform = prefix + '-' + transform;
  exports.transitionProperty = transitionProperty = prefix + '-transition-property';
  exports.transitionDuration = transitionDuration = prefix + '-transition-duration';
  exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
  exports.transitionTiming = transitionTiming = prefix + '-transition-timing-function';

  exports.animationName = animationName = prefix + '-animation-name';
  exports.animationDuration = animationDuration = prefix + '-animation-duration';
  exports.animationTiming = animationTiming = prefix + '-animation-delay';
  exports.animationDelay = animationDelay = prefix + '-animation-timing-function';
}

exports.transform = transform;
exports.transitionProperty = transitionProperty;
exports.transitionTiming = transitionTiming;
exports.transitionDelay = transitionDelay;
exports.transitionDuration = transitionDuration;
exports.transitionEnd = transitionEnd;
exports.animationName = animationName;
exports.animationDuration = animationDuration;
exports.animationTiming = animationTiming;
exports.animationDelay = animationDelay;
exports.animationEnd = animationEnd;
exports.default = {
  transform: transform,
  end: transitionEnd,
  property: transitionProperty,
  timing: transitionTiming,
  delay: transitionDelay,
  duration: transitionDuration
};


function getTransitionProperties() {
  var style = document.createElement('div').style;

  var vendorMap = {
    O: function O(e) {
      return 'o' + e.toLowerCase();
    },
    Moz: function Moz(e) {
      return e.toLowerCase();
    },
    Webkit: function Webkit(e) {
      return 'webkit' + e;
    },
    ms: function ms(e) {
      return 'MS' + e;
    }
  };

  var vendors = Object.keys(vendorMap);

  var transitionEnd = void 0,
      animationEnd = void 0;
  var prefix = '';

  for (var i = 0; i < vendors.length; i++) {
    var vendor = vendors[i];

    if (vendor + 'TransitionProperty' in style) {
      prefix = '-' + vendor.toLowerCase();
      transitionEnd = vendorMap[vendor]('TransitionEnd');
      animationEnd = vendorMap[vendor]('AnimationEnd');
      break;
    }
  }

  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';

  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';

  style = null;

  return { animationEnd: animationEnd, transitionEnd: transitionEnd, prefix: prefix };
}

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isTransform;
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;

function isTransform(property) {
  return !!(property && supportedTransforms.test(property));
}
module.exports = exports["default"];

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBody = isBody;
exports.default = isOverflowing;

var _isWindow = __webpack_require__(402);

var _isWindow2 = _interopRequireDefault(_isWindow);

var _ownerDocument = __webpack_require__(19);

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

var _ownerWindow = __webpack_require__(108);

var _ownerWindow2 = _interopRequireDefault(_ownerWindow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBody(node) {
  return node && node.tagName.toLowerCase() === 'body';
}

// Do we have a scroll bar?
function isOverflowing(container) {
  var doc = (0, _ownerDocument2.default)(container);
  var win = (0, _ownerWindow2.default)(doc);

  /* istanbul ignore next */
  if (!(0, _isWindow2.default)(doc) && !isBody(container)) {
    return container.scrollHeight > container.clientHeight;
  }

  // Takes in account potential non zero margin on the body.
  var style = win.getComputedStyle(doc.body);
  var marginLeft = parseInt(style.getPropertyValue('margin-left'), 10);
  var marginRight = parseInt(style.getPropertyValue('margin-right'), 10);

  return marginLeft + doc.body.clientWidth + marginRight < win.innerWidth;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcTW9kYWxcXGlzT3ZlcmZsb3dpbmcuanMiXSwibmFtZXMiOlsiaXNCb2R5IiwiaXNPdmVyZmxvd2luZyIsIm5vZGUiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJjb250YWluZXIiLCJkb2MiLCJ3aW4iLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzdHlsZSIsImdldENvbXB1dGVkU3R5bGUiLCJib2R5IiwibWFyZ2luTGVmdCIsInBhcnNlSW50IiwiZ2V0UHJvcGVydHlWYWx1ZSIsIm1hcmdpblJpZ2h0IiwiY2xpZW50V2lkdGgiLCJpbm5lcldpZHRoIl0sIm1hcHBpbmdzIjoiOzs7OztRQUlnQkEsTSxHQUFBQSxNO2tCQUtRQyxhOztBQVR4Qjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVPLFNBQVNELE1BQVQsQ0FBZ0JFLElBQWhCLEVBQXNCO0FBQzNCLFNBQU9BLFFBQVFBLEtBQUtDLE9BQUwsQ0FBYUMsV0FBYixPQUErQixNQUE5QztBQUNEOztBQUVEO0FBQ2UsU0FBU0gsYUFBVCxDQUF1QkksU0FBdkIsRUFBa0M7QUFDL0MsTUFBTUMsTUFBTSw2QkFBY0QsU0FBZCxDQUFaO0FBQ0EsTUFBTUUsTUFBTSwyQkFBWUQsR0FBWixDQUFaOztBQUVBO0FBQ0EsTUFBSSxDQUFDLHdCQUFTQSxHQUFULENBQUQsSUFBa0IsQ0FBQ04sT0FBT0ssU0FBUCxDQUF2QixFQUEwQztBQUN4QyxXQUFPQSxVQUFVRyxZQUFWLEdBQXlCSCxVQUFVSSxZQUExQztBQUNEOztBQUVEO0FBQ0EsTUFBTUMsUUFBUUgsSUFBSUksZ0JBQUosQ0FBcUJMLElBQUlNLElBQXpCLENBQWQ7QUFDQSxNQUFNQyxhQUFhQyxTQUFTSixNQUFNSyxnQkFBTixDQUF1QixhQUF2QixDQUFULEVBQWdELEVBQWhELENBQW5CO0FBQ0EsTUFBTUMsY0FBY0YsU0FBU0osTUFBTUssZ0JBQU4sQ0FBdUIsY0FBdkIsQ0FBVCxFQUFpRCxFQUFqRCxDQUFwQjs7QUFFQSxTQUFPRixhQUFhUCxJQUFJTSxJQUFKLENBQVNLLFdBQXRCLEdBQW9DRCxXQUFwQyxHQUFrRFQsSUFBSVcsVUFBN0Q7QUFDRCIsImZpbGUiOiJpc092ZXJmbG93aW5nLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3JtY3F1ZW4vc2x0LXVpL21hdGVyaWFsLXVpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlzV2luZG93IGZyb20gJ2RvbS1oZWxwZXJzL3F1ZXJ5L2lzV2luZG93JztcbmltcG9ydCBvd25lckRvY3VtZW50IGZyb20gJ2RvbS1oZWxwZXJzL293bmVyRG9jdW1lbnQnO1xuaW1wb3J0IG93bmVyV2luZG93IGZyb20gJ2RvbS1oZWxwZXJzL293bmVyV2luZG93JztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQm9keShub2RlKSB7XG4gIHJldHVybiBub2RlICYmIG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYm9keSc7XG59XG5cbi8vIERvIHdlIGhhdmUgYSBzY3JvbGwgYmFyP1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNPdmVyZmxvd2luZyhjb250YWluZXIpIHtcbiAgY29uc3QgZG9jID0gb3duZXJEb2N1bWVudChjb250YWluZXIpO1xuICBjb25zdCB3aW4gPSBvd25lcldpbmRvdyhkb2MpO1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGlmICghaXNXaW5kb3coZG9jKSAmJiAhaXNCb2R5KGNvbnRhaW5lcikpIHtcbiAgICByZXR1cm4gY29udGFpbmVyLnNjcm9sbEhlaWdodCA+IGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG4gIH1cblxuICAvLyBUYWtlcyBpbiBhY2NvdW50IHBvdGVudGlhbCBub24gemVybyBtYXJnaW4gb24gdGhlIGJvZHkuXG4gIGNvbnN0IHN0eWxlID0gd2luLmdldENvbXB1dGVkU3R5bGUoZG9jLmJvZHkpO1xuICBjb25zdCBtYXJnaW5MZWZ0ID0gcGFyc2VJbnQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLWxlZnQnKSwgMTApO1xuICBjb25zdCBtYXJnaW5SaWdodCA9IHBhcnNlSW50KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi1yaWdodCcpLCAxMCk7XG5cbiAgcmV0dXJuIG1hcmdpbkxlZnQgKyBkb2MuYm9keS5jbGllbnRXaWR0aCArIG1hcmdpblJpZ2h0IDwgd2luLmlubmVyV2lkdGg7XG59XG4iXX0=

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWindow;
function getWindow(node) {
  return node === node.window ? node : node.nodeType === 9 ? node.defaultView || node.parentWindow : false;
}
module.exports = exports["default"];

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ariaHidden = ariaHidden;
exports.hideSiblings = hideSiblings;
exports.showSiblings = showSiblings;
var BLACKLIST = ['template', 'script', 'style'];

function isHidable(node) {
  return node.nodeType === 1 && BLACKLIST.indexOf(node.tagName.toLowerCase()) === -1;
}

function siblings(container, mount, callback) {
  mount = [].concat(mount); // eslint-disable-line no-param-reassign
  [].forEach.call(container.children, function (node) {
    if (mount.indexOf(node) === -1 && isHidable(node)) {
      callback(node);
    }
  });
}

function ariaHidden(show, node) {
  if (!node) {
    return;
  }
  if (show) {
    node.setAttribute('aria-hidden', 'true');
  } else {
    node.removeAttribute('aria-hidden');
  }
}

function hideSiblings(container, mountNode) {
  siblings(container, mountNode, function (node) {
    return ariaHidden(true, node);
  });
}

function showSiblings(container, mountNode) {
  siblings(container, mountNode, function (node) {
    return ariaHidden(false, node);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcTW9kYWxcXG1hbmFnZUFyaWFIaWRkZW4uanMiXSwibmFtZXMiOlsiYXJpYUhpZGRlbiIsImhpZGVTaWJsaW5ncyIsInNob3dTaWJsaW5ncyIsIkJMQUNLTElTVCIsImlzSGlkYWJsZSIsIm5vZGUiLCJub2RlVHlwZSIsImluZGV4T2YiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJzaWJsaW5ncyIsImNvbnRhaW5lciIsIm1vdW50IiwiY2FsbGJhY2siLCJjb25jYXQiLCJmb3JFYWNoIiwiY2FsbCIsImNoaWxkcmVuIiwic2hvdyIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsIm1vdW50Tm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFlZ0JBLFUsR0FBQUEsVTtRQVdBQyxZLEdBQUFBLFk7UUFJQUMsWSxHQUFBQSxZO0FBOUJoQixJQUFNQyxZQUFZLENBQUMsVUFBRCxFQUFhLFFBQWIsRUFBdUIsT0FBdkIsQ0FBbEI7O0FBRUEsU0FBU0MsU0FBVCxDQUFtQkMsSUFBbkIsRUFBeUI7QUFDdkIsU0FBT0EsS0FBS0MsUUFBTCxLQUFrQixDQUFsQixJQUF1QkgsVUFBVUksT0FBVixDQUFrQkYsS0FBS0csT0FBTCxDQUFhQyxXQUFiLEVBQWxCLE1BQWtELENBQUMsQ0FBakY7QUFDRDs7QUFFRCxTQUFTQyxRQUFULENBQWtCQyxTQUFsQixFQUE2QkMsS0FBN0IsRUFBb0NDLFFBQXBDLEVBQThDO0FBQzVDRCxVQUFRLEdBQUdFLE1BQUgsQ0FBVUYsS0FBVixDQUFSLENBRDRDLENBQ2xCO0FBQzFCLEtBQUdHLE9BQUgsQ0FBV0MsSUFBWCxDQUFnQkwsVUFBVU0sUUFBMUIsRUFBb0MsZ0JBQVE7QUFDMUMsUUFBSUwsTUFBTUwsT0FBTixDQUFjRixJQUFkLE1BQXdCLENBQUMsQ0FBekIsSUFBOEJELFVBQVVDLElBQVYsQ0FBbEMsRUFBbUQ7QUFDakRRLGVBQVNSLElBQVQ7QUFDRDtBQUNGLEdBSkQ7QUFLRDs7QUFFTSxTQUFTTCxVQUFULENBQW9Ca0IsSUFBcEIsRUFBMEJiLElBQTFCLEVBQWdDO0FBQ3JDLE1BQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1Q7QUFDRDtBQUNELE1BQUlhLElBQUosRUFBVTtBQUNSYixTQUFLYyxZQUFMLENBQWtCLGFBQWxCLEVBQWlDLE1BQWpDO0FBQ0QsR0FGRCxNQUVPO0FBQ0xkLFNBQUtlLGVBQUwsQ0FBcUIsYUFBckI7QUFDRDtBQUNGOztBQUVNLFNBQVNuQixZQUFULENBQXNCVSxTQUF0QixFQUFpQ1UsU0FBakMsRUFBNEM7QUFDakRYLFdBQVNDLFNBQVQsRUFBb0JVLFNBQXBCLEVBQStCO0FBQUEsV0FBUXJCLFdBQVcsSUFBWCxFQUFpQkssSUFBakIsQ0FBUjtBQUFBLEdBQS9CO0FBQ0Q7O0FBRU0sU0FBU0gsWUFBVCxDQUFzQlMsU0FBdEIsRUFBaUNVLFNBQWpDLEVBQTRDO0FBQ2pEWCxXQUFTQyxTQUFULEVBQW9CVSxTQUFwQixFQUErQjtBQUFBLFdBQVFyQixXQUFXLEtBQVgsRUFBa0JLLElBQWxCLENBQVI7QUFBQSxHQUEvQjtBQUNEIiwiZmlsZSI6Im1hbmFnZUFyaWFIaWRkZW4uanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvcm1jcXVlbi9zbHQtdWkvbWF0ZXJpYWwtdWkiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBCTEFDS0xJU1QgPSBbJ3RlbXBsYXRlJywgJ3NjcmlwdCcsICdzdHlsZSddO1xuXG5mdW5jdGlvbiBpc0hpZGFibGUobm9kZSkge1xuICByZXR1cm4gbm9kZS5ub2RlVHlwZSA9PT0gMSAmJiBCTEFDS0xJU1QuaW5kZXhPZihub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSkgPT09IC0xO1xufVxuXG5mdW5jdGlvbiBzaWJsaW5ncyhjb250YWluZXIsIG1vdW50LCBjYWxsYmFjaykge1xuICBtb3VudCA9IFtdLmNvbmNhdChtb3VudCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgW10uZm9yRWFjaC5jYWxsKGNvbnRhaW5lci5jaGlsZHJlbiwgbm9kZSA9PiB7XG4gICAgaWYgKG1vdW50LmluZGV4T2Yobm9kZSkgPT09IC0xICYmIGlzSGlkYWJsZShub2RlKSkge1xuICAgICAgY2FsbGJhY2sobm9kZSk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFyaWFIaWRkZW4oc2hvdywgbm9kZSkge1xuICBpZiAoIW5vZGUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHNob3cpIHtcbiAgICBub2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICB9IGVsc2Uge1xuICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlU2libGluZ3MoY29udGFpbmVyLCBtb3VudE5vZGUpIHtcbiAgc2libGluZ3MoY29udGFpbmVyLCBtb3VudE5vZGUsIG5vZGUgPT4gYXJpYUhpZGRlbih0cnVlLCBub2RlKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93U2libGluZ3MoY29udGFpbmVyLCBtb3VudE5vZGUpIHtcbiAgc2libGluZ3MoY29udGFpbmVyLCBtb3VudE5vZGUsIG5vZGUgPT4gYXJpYUhpZGRlbihmYWxzZSwgbm9kZSkpO1xufVxuIl19

/***/ })

});