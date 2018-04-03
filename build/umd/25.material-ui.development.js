webpackJsonpmaterial_ui([25],{

/***/ 376:
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
    transform: 'scale(1)'
  },
  entered: {
    transform: 'scale(1)'
  }
};

/**
 * The Zoom transition can be used for the floating variant of the
 * [Button](https://material-ui-next.com/demos/buttons/#floating-action-buttons) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Zoom = function (_React$Component) {
  _inherits(Zoom, _React$Component);

  function Zoom() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Zoom);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Zoom.__proto__ || Object.getPrototypeOf(Zoom)).call.apply(_ref, [this].concat(args))), _this), _this.handleEnter = function (node) {
      var theme = _this.props.theme;

      (0, _utils.reflow)(node); // So the animation always start from the start.

      var transitionProps = (0, _utils.getTransitionProps)(_this.props, {
        mode: 'enter'
      });
      node.style.webkitTransition = theme.transitions.create('transform', transitionProps);
      node.style.transition = theme.transitions.create('transform', transitionProps);

      if (_this.props.onEnter) {
        _this.props.onEnter(node);
      }
    }, _this.handleExit = function (node) {
      var theme = _this.props.theme;

      var transitionProps = (0, _utils.getTransitionProps)(_this.props, {
        mode: 'exit'
      });
      node.style.webkitTransition = theme.transitions.create('transform', transitionProps);
      node.style.transition = theme.transitions.create('transform', transitionProps);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Zoom, [{
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
              transform: 'scale(0)',
              willChange: 'transform'
            }, styles[state], style)
          }, childProps));
        }
      );
    }
  }]);

  return Zoom;
}(_react2.default.Component);

Zoom.propTypes = {
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

Zoom.defaultProps = {
  timeout: {
    enter: _transitions.duration.enteringScreen,
    exit: _transitions.duration.leavingScreen
  }
};

exports.default = (0, _withTheme2.default)()(Zoom);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdHJhbnNpdGlvbnNcXFpvb20uanMiXSwibmFtZXMiOlsic3R5bGVzIiwiZW50ZXJpbmciLCJ0cmFuc2Zvcm0iLCJlbnRlcmVkIiwiWm9vbSIsImhhbmRsZUVudGVyIiwidGhlbWUiLCJwcm9wcyIsIm5vZGUiLCJ0cmFuc2l0aW9uUHJvcHMiLCJtb2RlIiwic3R5bGUiLCJ3ZWJraXRUcmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJ0cmFuc2l0aW9uIiwib25FbnRlciIsImhhbmRsZUV4aXQiLCJvbkV4aXQiLCJjaGlsZHJlbiIsInN0eWxlUHJvcCIsIm90aGVyIiwiaXNWYWxpZEVsZW1lbnQiLCJzdGF0ZSIsImNoaWxkUHJvcHMiLCJjbG9uZUVsZW1lbnQiLCJ3aWxsQ2hhbmdlIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwiZWxlbWVudCIsImZ1bmMiLCJpbiIsImJvb2wiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwidGltZW91dCIsIm51bWJlciIsInNoYXBlIiwiZW50ZXIiLCJleGl0IiwiZGVmYXVsdFByb3BzIiwiZW50ZXJpbmdTY3JlZW4iLCJsZWF2aW5nU2NyZWVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OzsrZUFQQTs7QUFTQSxJQUFNQSxTQUFTO0FBQ2JDLFlBQVU7QUFDUkMsZUFBVztBQURILEdBREc7QUFJYkMsV0FBUztBQUNQRCxlQUFXO0FBREo7QUFKSSxDQUFmOztBQVNBOzs7Ozs7SUFLTUUsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ0pDLFcsR0FBYyxnQkFBUTtBQUFBLFVBQ1pDLEtBRFksR0FDRixNQUFLQyxLQURILENBQ1pELEtBRFk7O0FBRXBCLHlCQUFPRSxJQUFQLEVBRm9CLENBRU47O0FBRWQsVUFBTUMsa0JBQWtCLCtCQUFtQixNQUFLRixLQUF4QixFQUErQjtBQUNyREcsY0FBTTtBQUQrQyxPQUEvQixDQUF4QjtBQUdBRixXQUFLRyxLQUFMLENBQVdDLGdCQUFYLEdBQThCTixNQUFNTyxXQUFOLENBQWtCQyxNQUFsQixDQUF5QixXQUF6QixFQUFzQ0wsZUFBdEMsQ0FBOUI7QUFDQUQsV0FBS0csS0FBTCxDQUFXSSxVQUFYLEdBQXdCVCxNQUFNTyxXQUFOLENBQWtCQyxNQUFsQixDQUF5QixXQUF6QixFQUFzQ0wsZUFBdEMsQ0FBeEI7O0FBRUEsVUFBSSxNQUFLRixLQUFMLENBQVdTLE9BQWYsRUFBd0I7QUFDdEIsY0FBS1QsS0FBTCxDQUFXUyxPQUFYLENBQW1CUixJQUFuQjtBQUNEO0FBQ0YsSyxRQUVEUyxVLEdBQWEsZ0JBQVE7QUFBQSxVQUNYWCxLQURXLEdBQ0QsTUFBS0MsS0FESixDQUNYRCxLQURXOztBQUVuQixVQUFNRyxrQkFBa0IsK0JBQW1CLE1BQUtGLEtBQXhCLEVBQStCO0FBQ3JERyxjQUFNO0FBRCtDLE9BQS9CLENBQXhCO0FBR0FGLFdBQUtHLEtBQUwsQ0FBV0MsZ0JBQVgsR0FBOEJOLE1BQU1PLFdBQU4sQ0FBa0JDLE1BQWxCLENBQXlCLFdBQXpCLEVBQXNDTCxlQUF0QyxDQUE5QjtBQUNBRCxXQUFLRyxLQUFMLENBQVdJLFVBQVgsR0FBd0JULE1BQU1PLFdBQU4sQ0FBa0JDLE1BQWxCLENBQXlCLFdBQXpCLEVBQXNDTCxlQUF0QyxDQUF4Qjs7QUFFQSxVQUFJLE1BQUtGLEtBQUwsQ0FBV1csTUFBZixFQUF1QjtBQUNyQixjQUFLWCxLQUFMLENBQVdXLE1BQVgsQ0FBa0JWLElBQWxCO0FBQ0Q7QUFDRixLOzs7Ozs2QkFFUTtBQUFBLG1CQUNrRSxLQUFLRCxLQUR2RTtBQUFBLFVBQ0NZLFFBREQsVUFDQ0EsUUFERDtBQUFBLFVBQ1dILE9BRFgsVUFDV0EsT0FEWDtBQUFBLFVBQ29CRSxNQURwQixVQUNvQkEsTUFEcEI7QUFBQSxVQUNtQ0UsU0FEbkMsVUFDNEJULEtBRDVCO0FBQUEsVUFDOENMLEtBRDlDLFVBQzhDQSxLQUQ5QztBQUFBLFVBQ3dEZSxLQUR4RDs7QUFHUCxVQUFNVixxQkFDRFMsU0FEQyxFQUVBLGdCQUFNRSxjQUFOLENBQXFCSCxRQUFyQixJQUFpQ0EsU0FBU1osS0FBVCxDQUFlSSxLQUFoRCxHQUF3RCxFQUZ4RCxDQUFOOztBQUtBLGFBQ0U7QUFBQTtBQUFBLG1CQUFZLFlBQVosRUFBbUIsU0FBUyxLQUFLTixXQUFqQyxFQUE4QyxRQUFRLEtBQUtZLFVBQTNELElBQTJFSSxLQUEzRTtBQUNHLGtCQUFDRSxLQUFELEVBQVFDLFVBQVIsRUFBdUI7QUFDdEIsaUJBQU8sZ0JBQU1DLFlBQU4sQ0FBbUJOLFFBQW5CO0FBQ0xSO0FBQ0VULHlCQUFXLFVBRGI7QUFFRXdCLDBCQUFZO0FBRmQsZUFHSzFCLE9BQU91QixLQUFQLENBSEwsRUFJS1osS0FKTDtBQURLLGFBT0ZhLFVBUEUsRUFBUDtBQVNEO0FBWEgsT0FERjtBQWVEOzs7O0VBcERnQixnQkFBTUcsUzs7QUF1RHpCdkIsS0FBS3dCLFNBQUwsR0FBaUI7QUFDZjs7O0FBR0FULFlBQVUsb0JBQVVVLFNBQVYsQ0FBb0IsQ0FBQyxvQkFBVUMsT0FBWCxFQUFvQixvQkFBVUMsSUFBOUIsQ0FBcEIsQ0FKSztBQUtmOzs7QUFHQUMsTUFBSSxvQkFBVUMsSUFSQztBQVNmOzs7QUFHQWpCLFdBQVMsb0JBQVVlLElBWko7QUFhZjs7O0FBR0FiLFVBQVEsb0JBQVVhLElBaEJIO0FBaUJmOzs7QUFHQXBCLFNBQU8sb0JBQVV1QixNQXBCRjtBQXFCZjs7O0FBR0E1QixTQUFPLG9CQUFVNEIsTUFBVixDQUFpQkMsVUF4QlQ7QUF5QmY7Ozs7QUFJQUMsV0FBUyxvQkFBVVAsU0FBVixDQUFvQixDQUMzQixvQkFBVVEsTUFEaUIsRUFFM0Isb0JBQVVDLEtBQVYsQ0FBZ0IsRUFBRUMsT0FBTyxvQkFBVUYsTUFBbkIsRUFBMkJHLE1BQU0sb0JBQVVILE1BQTNDLEVBQWhCLENBRjJCLENBQXBCO0FBN0JNLENBQWpCOztBQW1DQWpDLEtBQUtxQyxZQUFMLEdBQW9CO0FBQ2xCTCxXQUFTO0FBQ1BHLFdBQU8sc0JBQVNHLGNBRFQ7QUFFUEYsVUFBTSxzQkFBU0c7QUFGUjtBQURTLENBQXBCOztrQkFPZSwyQkFBWXZDLElBQVosQyIsImZpbGUiOiJab29tLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3JtY3F1ZW4vc2x0LXVpL21hdGVyaWFsLXVpIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGluaGVyaXRlZENvbXBvbmVudCBUcmFuc2l0aW9uXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uJztcbmltcG9ydCB7IGR1cmF0aW9uIH0gZnJvbSAnLi4vc3R5bGVzL3RyYW5zaXRpb25zJztcbmltcG9ydCB3aXRoVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3dpdGhUaGVtZSc7XG5pbXBvcnQgeyByZWZsb3csIGdldFRyYW5zaXRpb25Qcm9wcyB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGVudGVyaW5nOiB7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknLFxuICB9LFxuICBlbnRlcmVkOiB7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknLFxuICB9LFxufTtcblxuLyoqXG4gKiBUaGUgWm9vbSB0cmFuc2l0aW9uIGNhbiBiZSB1c2VkIGZvciB0aGUgZmxvYXRpbmcgdmFyaWFudCBvZiB0aGVcbiAqIFtCdXR0b25dKGh0dHBzOi8vbWF0ZXJpYWwtdWktbmV4dC5jb20vZGVtb3MvYnV0dG9ucy8jZmxvYXRpbmctYWN0aW9uLWJ1dHRvbnMpIGNvbXBvbmVudC5cbiAqIEl0IHVzZXMgW3JlYWN0LXRyYW5zaXRpb24tZ3JvdXBdKGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXApIGludGVybmFsbHkuXG4gKi9cbmNsYXNzIFpvb20gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBoYW5kbGVFbnRlciA9IG5vZGUgPT4ge1xuICAgIGNvbnN0IHsgdGhlbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmVmbG93KG5vZGUpOyAvLyBTbyB0aGUgYW5pbWF0aW9uIGFsd2F5cyBzdGFydCBmcm9tIHRoZSBzdGFydC5cblxuICAgIGNvbnN0IHRyYW5zaXRpb25Qcm9wcyA9IGdldFRyYW5zaXRpb25Qcm9wcyh0aGlzLnByb3BzLCB7XG4gICAgICBtb2RlOiAnZW50ZXInLFxuICAgIH0pO1xuICAgIG5vZGUuc3R5bGUud2Via2l0VHJhbnNpdGlvbiA9IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgndHJhbnNmb3JtJywgdHJhbnNpdGlvblByb3BzKTtcbiAgICBub2RlLnN0eWxlLnRyYW5zaXRpb24gPSB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3RyYW5zZm9ybScsIHRyYW5zaXRpb25Qcm9wcyk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkVudGVyKSB7XG4gICAgICB0aGlzLnByb3BzLm9uRW50ZXIobm9kZSk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUV4aXQgPSBub2RlID0+IHtcbiAgICBjb25zdCB7IHRoZW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRyYW5zaXRpb25Qcm9wcyA9IGdldFRyYW5zaXRpb25Qcm9wcyh0aGlzLnByb3BzLCB7XG4gICAgICBtb2RlOiAnZXhpdCcsXG4gICAgfSk7XG4gICAgbm9kZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uID0gdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd0cmFuc2Zvcm0nLCB0cmFuc2l0aW9uUHJvcHMpO1xuICAgIG5vZGUuc3R5bGUudHJhbnNpdGlvbiA9IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgndHJhbnNmb3JtJywgdHJhbnNpdGlvblByb3BzKTtcblxuICAgIGlmICh0aGlzLnByb3BzLm9uRXhpdCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkV4aXQobm9kZSk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBvbkVudGVyLCBvbkV4aXQsIHN0eWxlOiBzdHlsZVByb3AsIHRoZW1lLCAuLi5vdGhlciB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgLi4uc3R5bGVQcm9wLFxuICAgICAgLi4uKFJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSA/IGNoaWxkcmVuLnByb3BzLnN0eWxlIDoge30pLFxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRyYW5zaXRpb24gYXBwZWFyIG9uRW50ZXI9e3RoaXMuaGFuZGxlRW50ZXJ9IG9uRXhpdD17dGhpcy5oYW5kbGVFeGl0fSB7Li4ub3RoZXJ9PlxuICAgICAgICB7KHN0YXRlLCBjaGlsZFByb3BzKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMCknLFxuICAgICAgICAgICAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJyxcbiAgICAgICAgICAgICAgLi4uc3R5bGVzW3N0YXRlXSxcbiAgICAgICAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uY2hpbGRQcm9wcyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfX1cbiAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICApO1xuICB9XG59XG5cblpvb20ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQSBzaW5nbGUgY2hpbGQgY29udGVudCBlbGVtZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuZnVuY10pLFxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgY29tcG9uZW50IHdpbGwgdHJhbnNpdGlvbiBpbi5cbiAgICovXG4gIGluOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIFRoZSBkdXJhdGlvbiBmb3IgdGhlIHRyYW5zaXRpb24sIGluIG1pbGxpc2Vjb25kcy5cbiAgICogWW91IG1heSBzcGVjaWZ5IGEgc2luZ2xlIHRpbWVvdXQgZm9yIGFsbCB0cmFuc2l0aW9ucywgb3IgaW5kaXZpZHVhbGx5IHdpdGggYW4gb2JqZWN0LlxuICAgKi9cbiAgdGltZW91dDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuc2hhcGUoeyBlbnRlcjogUHJvcFR5cGVzLm51bWJlciwgZXhpdDogUHJvcFR5cGVzLm51bWJlciB9KSxcbiAgXSksXG59O1xuXG5ab29tLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGltZW91dDoge1xuICAgIGVudGVyOiBkdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcbiAgICBleGl0OiBkdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKCkoWm9vbSk7XG4iXX0=

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