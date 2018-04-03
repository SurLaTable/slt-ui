webpackJsonpmaterial_ui([21,28],{

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