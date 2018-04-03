webpackJsonpmaterial_ui([20,27],{

/***/ 303:
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

var _withTheme = __webpack_require__(60);

var _withTheme2 = _interopRequireDefault(_withTheme);

var _utils = __webpack_require__(379);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // @inheritedComponent Transition

function getScale(value) {
  return 'scale(' + value + ', ' + Math.pow(value, 2) + ')';
}

var styles = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: getScale(1)
  }
};

/**
 * The Grow transition is used by the [Popover](/utils/popovers) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Grow = function (_React$Component) {
  _inherits(Grow, _React$Component);

  function Grow() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Grow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Grow.__proto__ || Object.getPrototypeOf(Grow)).call.apply(_ref, [this].concat(args))), _this), _this.autoTimeout = undefined, _this.timer = null, _this.handleEnter = function (node) {
      var _this$props = _this.props,
          theme = _this$props.theme,
          timeout = _this$props.timeout;

      (0, _utils.reflow)(node); // So the animation always start from the start.

      var _getTransitionProps = (0, _utils.getTransitionProps)(_this.props, {
        mode: 'enter'
      }),
          transitionDuration = _getTransitionProps.duration,
          delay = _getTransitionProps.delay;

      var duration = 0;
      if (timeout === 'auto') {
        duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
        _this.autoTimeout = duration;
      } else {
        duration = transitionDuration;
      }

      node.style.transition = [theme.transitions.create('opacity', {
        duration: duration,
        delay: delay
      }), theme.transitions.create('transform', {
        duration: duration * 0.666,
        delay: delay
      })].join(',');

      if (_this.props.onEnter) {
        _this.props.onEnter(node);
      }
    }, _this.handleExit = function (node) {
      var _this$props2 = _this.props,
          theme = _this$props2.theme,
          timeout = _this$props2.timeout;

      var duration = 0;

      var _getTransitionProps2 = (0, _utils.getTransitionProps)(_this.props, {
        mode: 'exit'
      }),
          transitionDuration = _getTransitionProps2.duration,
          delay = _getTransitionProps2.delay;

      if (timeout === 'auto') {
        duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
        _this.autoTimeout = duration;
      } else {
        duration = transitionDuration;
      }

      node.style.transition = [theme.transitions.create('opacity', {
        duration: duration,
        delay: delay
      }), theme.transitions.create('transform', {
        duration: duration * 0.666,
        delay: delay || duration * 0.333
      })].join(',');

      node.style.opacity = '0';
      node.style.transform = getScale(0.75);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    }, _this.addEndListener = function (_, next) {
      if (_this.props.timeout === 'auto') {
        _this.timer = setTimeout(next, _this.autoTimeout || 0);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Grow, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timer);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          onEnter = _props.onEnter,
          onExit = _props.onExit,
          styleProp = _props.style,
          theme = _props.theme,
          timeout = _props.timeout,
          other = _objectWithoutProperties(_props, ['children', 'onEnter', 'onExit', 'style', 'theme', 'timeout']);

      var style = _extends({}, styleProp, _react2.default.isValidElement(children) ? children.props.style : {});

      return _react2.default.createElement(
        _Transition2.default,
        _extends({
          appear: true,
          onEnter: this.handleEnter,
          onExit: this.handleExit,
          addEndListener: this.addEndListener,
          timeout: timeout === 'auto' ? null : timeout
        }, other),
        function (state, childProps) {
          return _react2.default.cloneElement(children, _extends({
            style: _extends({
              opacity: 0,
              transform: getScale(0.75)
            }, styles[state], style)
          }, childProps));
        }
      );
    }
  }]);

  return Grow;
}(_react2.default.Component);

Grow.propTypes = {
  /**
   * A single child content element.
   */
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]),
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
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  timeout: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({ enter: _propTypes2.default.number, exit: _propTypes2.default.number }), _propTypes2.default.oneOf(['auto'])])
};

Grow.defaultProps = {
  timeout: 'auto'
};

exports.default = (0, _withTheme2.default)()(Grow);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdHJhbnNpdGlvbnNcXEdyb3cuanMiXSwibmFtZXMiOlsiZ2V0U2NhbGUiLCJ2YWx1ZSIsInN0eWxlcyIsImVudGVyaW5nIiwib3BhY2l0eSIsInRyYW5zZm9ybSIsImVudGVyZWQiLCJHcm93IiwiYXV0b1RpbWVvdXQiLCJ1bmRlZmluZWQiLCJ0aW1lciIsImhhbmRsZUVudGVyIiwicHJvcHMiLCJ0aGVtZSIsInRpbWVvdXQiLCJub2RlIiwibW9kZSIsInRyYW5zaXRpb25EdXJhdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJ0cmFuc2l0aW9ucyIsImdldEF1dG9IZWlnaHREdXJhdGlvbiIsImNsaWVudEhlaWdodCIsInN0eWxlIiwidHJhbnNpdGlvbiIsImNyZWF0ZSIsImpvaW4iLCJvbkVudGVyIiwiaGFuZGxlRXhpdCIsIm9uRXhpdCIsImFkZEVuZExpc3RlbmVyIiwiXyIsIm5leHQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiY2hpbGRyZW4iLCJzdHlsZVByb3AiLCJvdGhlciIsImlzVmFsaWRFbGVtZW50Iiwic3RhdGUiLCJjaGlsZFByb3BzIiwiY2xvbmVFbGVtZW50IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwiZWxlbWVudCIsImZ1bmMiLCJpbiIsImJvb2wiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwibnVtYmVyIiwic2hhcGUiLCJlbnRlciIsImV4aXQiLCJvbmVPZiIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7K2VBTkE7O0FBUUEsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDdkIsb0JBQWdCQSxLQUFoQixtQkFBMEJBLEtBQTFCLEVBQW1DLENBQW5DO0FBQ0Q7O0FBRUQsSUFBTUMsU0FBUztBQUNiQyxZQUFVO0FBQ1JDLGFBQVMsQ0FERDtBQUVSQyxlQUFXTCxTQUFTLENBQVQ7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RDs7OztFQTVHZ0IsZ0JBQU1FLFM7O0FBK0d6Qm5DLEtBQUtvQyxTQUFMLEdBQWlCO0FBQ2Y7OztBQUdBUixZQUFVLG9CQUFVUyxTQUFWLENBQW9CLENBQUMsb0JBQVVDLE9BQVgsRUFBb0Isb0JBQVVDLElBQTlCLENBQXBCLENBSks7QUFLZjs7O0FBR0FDLE1BQUksb0JBQVVDLElBUkM7QUFTZjs7O0FBR0FyQixXQUFTLG9CQUFVbUIsSUFaSjtBQWFmOzs7QUFHQWpCLFVBQVEsb0JBQVVpQixJQWhCSDtBQWlCZjs7O0FBR0F2QixTQUFPLG9CQUFVMEIsTUFwQkY7QUFxQmY7OztBQUdBcEMsU0FBTyxvQkFBVW9DLE1BQVYsQ0FBaUJDLFVBeEJUO0FBeUJmOzs7Ozs7QUFNQXBDLFdBQVMsb0JBQVU4QixTQUFWLENBQW9CLENBQzNCLG9CQUFVTyxNQURpQixFQUUzQixvQkFBVUMsS0FBVixDQUFnQixFQUFFQyxPQUFPLG9CQUFVRixNQUFuQixFQUEyQkcsTUFBTSxvQkFBVUgsTUFBM0MsRUFBaEIsQ0FGMkIsRUFHM0Isb0JBQVVJLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELENBQWhCLENBSDJCLENBQXBCO0FBL0JNLENBQWpCOztBQXNDQWhELEtBQUtpRCxZQUFMLEdBQW9CO0FBQ2xCMUMsV0FBUztBQURTLENBQXBCOztrQkFJZSwyQkFBWVAsSUFBWixDIiwiZmlsZSI6Ikdyb3cuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvcm1jcXVlbi9zbHQtdWkvbWF0ZXJpYWwtdWkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAaW5oZXJpdGVkQ29tcG9uZW50IFRyYW5zaXRpb25cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgVHJhbnNpdGlvbiBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb24nO1xuaW1wb3J0IHdpdGhUaGVtZSBmcm9tICcuLi9zdHlsZXMvd2l0aFRoZW1lJztcbmltcG9ydCB7IHJlZmxvdywgZ2V0VHJhbnNpdGlvblByb3BzIH0gZnJvbSAnLi91dGlscyc7XG5cbmZ1bmN0aW9uIGdldFNjYWxlKHZhbHVlKSB7XG4gIHJldHVybiBgc2NhbGUoJHt2YWx1ZX0sICR7dmFsdWUgKiogMn0pYDtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBlbnRlcmluZzoge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNmb3JtOiBnZXRTY2FsZSgxKSxcbiAgfSxcbiAgZW50ZXJlZDoge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNmb3JtOiBnZXRTY2FsZSgxKSxcbiAgfSxcbn07XG5cbi8qKlxuICogVGhlIEdyb3cgdHJhbnNpdGlvbiBpcyB1c2VkIGJ5IHRoZSBbUG9wb3Zlcl0oL3V0aWxzL3BvcG92ZXJzKSBjb21wb25lbnQuXG4gKiBJdCB1c2VzIFtyZWFjdC10cmFuc2l0aW9uLWdyb3VwXShodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwKSBpbnRlcm5hbGx5LlxuICovXG5jbGFzcyBHcm93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICB9XG5cbiAgYXV0b1RpbWVvdXQgPSB1bmRlZmluZWQ7XG4gIHRpbWVyID0gbnVsbDtcblxuICBoYW5kbGVFbnRlciA9IG5vZGUgPT4ge1xuICAgIGNvbnN0IHsgdGhlbWUsIHRpbWVvdXQgfSA9IHRoaXMucHJvcHM7XG4gICAgcmVmbG93KG5vZGUpOyAvLyBTbyB0aGUgYW5pbWF0aW9uIGFsd2F5cyBzdGFydCBmcm9tIHRoZSBzdGFydC5cblxuICAgIGNvbnN0IHsgZHVyYXRpb246IHRyYW5zaXRpb25EdXJhdGlvbiwgZGVsYXkgfSA9IGdldFRyYW5zaXRpb25Qcm9wcyh0aGlzLnByb3BzLCB7XG4gICAgICBtb2RlOiAnZW50ZXInLFxuICAgIH0pO1xuICAgIGxldCBkdXJhdGlvbiA9IDA7XG4gICAgaWYgKHRpbWVvdXQgPT09ICdhdXRvJykge1xuICAgICAgZHVyYXRpb24gPSB0aGVtZS50cmFuc2l0aW9ucy5nZXRBdXRvSGVpZ2h0RHVyYXRpb24obm9kZS5jbGllbnRIZWlnaHQpO1xuICAgICAgdGhpcy5hdXRvVGltZW91dCA9IGR1cmF0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICBkdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbjtcbiAgICB9XG5cbiAgICBub2RlLnN0eWxlLnRyYW5zaXRpb24gPSBbXG4gICAgICB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ29wYWNpdHknLCB7XG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBkZWxheSxcbiAgICAgIH0pLFxuICAgICAgdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd0cmFuc2Zvcm0nLCB7XG4gICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbiAqIDAuNjY2LFxuICAgICAgICBkZWxheSxcbiAgICAgIH0pLFxuICAgIF0uam9pbignLCcpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25FbnRlcikge1xuICAgICAgdGhpcy5wcm9wcy5vbkVudGVyKG5vZGUpO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVFeGl0ID0gbm9kZSA9PiB7XG4gICAgY29uc3QgeyB0aGVtZSwgdGltZW91dCB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgZHVyYXRpb24gPSAwO1xuXG4gICAgY29uc3QgeyBkdXJhdGlvbjogdHJhbnNpdGlvbkR1cmF0aW9uLCBkZWxheSB9ID0gZ2V0VHJhbnNpdGlvblByb3BzKHRoaXMucHJvcHMsIHtcbiAgICAgIG1vZGU6ICdleGl0JyxcbiAgICB9KTtcbiAgICBpZiAodGltZW91dCA9PT0gJ2F1dG8nKSB7XG4gICAgICBkdXJhdGlvbiA9IHRoZW1lLnRyYW5zaXRpb25zLmdldEF1dG9IZWlnaHREdXJhdGlvbihub2RlLmNsaWVudEhlaWdodCk7XG4gICAgICB0aGlzLmF1dG9UaW1lb3V0ID0gZHVyYXRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgIH1cblxuICAgIG5vZGUuc3R5bGUudHJhbnNpdGlvbiA9IFtcbiAgICAgIHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnb3BhY2l0eScsIHtcbiAgICAgICAgZHVyYXRpb24sXG4gICAgICAgIGRlbGF5LFxuICAgICAgfSksXG4gICAgICB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3RyYW5zZm9ybScsIHtcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uICogMC42NjYsXG4gICAgICAgIGRlbGF5OiBkZWxheSB8fCBkdXJhdGlvbiAqIDAuMzMzLFxuICAgICAgfSksXG4gICAgXS5qb2luKCcsJyk7XG5cbiAgICBub2RlLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgbm9kZS5zdHlsZS50cmFuc2Zvcm0gPSBnZXRTY2FsZSgwLjc1KTtcblxuICAgIGlmICh0aGlzLnByb3BzLm9uRXhpdCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkV4aXQobm9kZSk7XG4gICAgfVxuICB9O1xuXG4gIGFkZEVuZExpc3RlbmVyID0gKF8sIG5leHQpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy50aW1lb3V0ID09PSAnYXV0bycpIHtcbiAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KG5leHQsIHRoaXMuYXV0b1RpbWVvdXQgfHwgMCk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBvbkVudGVyLCBvbkV4aXQsIHN0eWxlOiBzdHlsZVByb3AsIHRoZW1lLCB0aW1lb3V0LCAuLi5vdGhlciB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgLi4uc3R5bGVQcm9wLFxuICAgICAgLi4uKFJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSA/IGNoaWxkcmVuLnByb3BzLnN0eWxlIDoge30pLFxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgYXBwZWFyXG4gICAgICAgIG9uRW50ZXI9e3RoaXMuaGFuZGxlRW50ZXJ9XG4gICAgICAgIG9uRXhpdD17dGhpcy5oYW5kbGVFeGl0fVxuICAgICAgICBhZGRFbmRMaXN0ZW5lcj17dGhpcy5hZGRFbmRMaXN0ZW5lcn1cbiAgICAgICAgdGltZW91dD17dGltZW91dCA9PT0gJ2F1dG8nID8gbnVsbCA6IHRpbWVvdXR9XG4gICAgICAgIHsuLi5vdGhlcn1cbiAgICAgID5cbiAgICAgICAgeyhzdGF0ZSwgY2hpbGRQcm9wcykgPT4ge1xuICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogZ2V0U2NhbGUoMC43NSksXG4gICAgICAgICAgICAgIC4uLnN0eWxlc1tzdGF0ZV0sXG4gICAgICAgICAgICAgIC4uLnN0eWxlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLmNoaWxkUHJvcHMsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH19XG4gICAgICA8L1RyYW5zaXRpb24+XG4gICAgKTtcbiAgfVxufVxuXG5Hcm93LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEEgc2luZ2xlIGNoaWxkIGNvbnRlbnQgZWxlbWVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgc2hvdyB0aGUgY29tcG9uZW50OyB0cmlnZ2VycyB0aGUgZW50ZXIgb3IgZXhpdCBhbmltYXRpb24uXG4gICAqL1xuICBpbjogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uRXhpdDogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBUaGUgZHVyYXRpb24gZm9yIHRoZSB0cmFuc2l0aW9uLCBpbiBtaWxsaXNlY29uZHMuXG4gICAqIFlvdSBtYXkgc3BlY2lmeSBhIHNpbmdsZSB0aW1lb3V0IGZvciBhbGwgdHJhbnNpdGlvbnMsIG9yIGluZGl2aWR1YWxseSB3aXRoIGFuIG9iamVjdC5cbiAgICpcbiAgICogU2V0IHRvICdhdXRvJyB0byBhdXRvbWF0aWNhbGx5IGNhbGN1bGF0ZSB0cmFuc2l0aW9uIHRpbWUgYmFzZWQgb24gaGVpZ2h0LlxuICAgKi9cbiAgdGltZW91dDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuc2hhcGUoeyBlbnRlcjogUHJvcFR5cGVzLm51bWJlciwgZXhpdDogUHJvcFR5cGVzLm51bWJlciB9KSxcbiAgICBQcm9wVHlwZXMub25lT2YoWydhdXRvJ10pLFxuICBdKSxcbn07XG5cbkdyb3cuZGVmYXVsdFByb3BzID0ge1xuICB0aW1lb3V0OiAnYXV0bycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoKShHcm93KTtcbiJdfQ==

/***/ }),

/***/ 350:
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

var _warning = __webpack_require__(3);

var _warning2 = _interopRequireDefault(_warning);

var _contains = __webpack_require__(110);

var _contains2 = _interopRequireDefault(_contains);

var _ownerDocument = __webpack_require__(19);

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

var _ownerWindow = __webpack_require__(108);

var _ownerWindow2 = _interopRequireDefault(_ownerWindow);

var _debounce = __webpack_require__(101);

var _debounce2 = _interopRequireDefault(_debounce);

var _reactEventListener = __webpack_require__(59);

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _withStyles = __webpack_require__(18);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Modal = __webpack_require__(112);

var _Modal2 = _interopRequireDefault(_Modal);

var _Grow = __webpack_require__(303);

var _Grow2 = _interopRequireDefault(_Grow);

var _Paper = __webpack_require__(102);

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // @inheritedComponent Modal

function getOffsetTop(rect, vertical) {
  var offset = 0;

  if (typeof vertical === 'number') {
    offset = vertical;
  } else if (vertical === 'center') {
    offset = rect.height / 2;
  } else if (vertical === 'bottom') {
    offset = rect.height;
  }

  return offset;
}

function getOffsetLeft(rect, horizontal) {
  var offset = 0;

  if (typeof horizontal === 'number') {
    offset = horizontal;
  } else if (horizontal === 'center') {
    offset = rect.width / 2;
  } else if (horizontal === 'right') {
    offset = rect.width;
  }

  return offset;
}

function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical].map(function (n) {
    return typeof n === 'number' ? n + 'px' : n;
  }).join(' ');
}

// Sum the scrollTop between two elements.
function getScrollParent(parent, child) {
  var element = child;
  var scrollTop = 0;

  while (element && element !== parent) {
    element = element.parentNode;
    scrollTop += element.scrollTop;
  }
  return scrollTop;
}

function getAnchorEl(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}

var styles = exports.styles = {
  paper: {
    position: 'absolute',
    overflowY: 'auto',
    overflowX: 'hidden',
    // So we see the popover when it's empty.
    // It's most likely on issue on userland.
    minWidth: 16,
    minHeight: 16,
    maxWidth: 'calc(100vw - 32px)',
    maxHeight: 'calc(100vh - 32px)',
    '&:focus': {
      outline: 'none'
    }
  }
};

var Popover = function (_React$Component) {
  _inherits(Popover, _React$Component);

  function Popover() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Popover);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Popover.__proto__ || Object.getPrototypeOf(Popover)).call.apply(_ref, [this].concat(args))), _this), _this.componentWillUnmount = function () {
      _this.handleResize.cancel();
    }, _this.setPositioningStyles = function (element) {
      if (element && element.style) {
        var positioning = _this.getPositioningStyle(element);
        element.style.top = positioning.top;
        element.style.left = positioning.left;
        element.style.transformOrigin = positioning.transformOrigin;
      }
    }, _this.getPositioningStyle = function (element) {
      var _this$props = _this.props,
          anchorEl = _this$props.anchorEl,
          marginThreshold = _this$props.marginThreshold;

      // Check if the parent has requested anchoring on an inner content node

      var contentAnchorOffset = _this.getContentAnchorOffset(element);
      // Get the offset of of the anchoring element
      var anchorOffset = _this.getAnchorOffset(contentAnchorOffset);

      var elemRect = {
        width: element.clientWidth,
        height: element.clientHeight
      };
      // Get the transform origin point on the element itself
      var transformOrigin = _this.getTransformOrigin(elemRect, contentAnchorOffset);

      // Calculate element positioning
      var top = anchorOffset.top - transformOrigin.vertical;
      var left = anchorOffset.left - transformOrigin.horizontal;
      var bottom = top + elemRect.height;
      var right = left + elemRect.width;

      // Use the parent window of the anchorEl if provided
      var containerWindow = (0, _ownerWindow2.default)(getAnchorEl(anchorEl));

      // Window thresholds taking required margin into account
      var heightThreshold = containerWindow.innerHeight - marginThreshold;
      var widthThreshold = containerWindow.innerWidth - marginThreshold;

      // Check if the vertical axis needs shifting
      if (top < marginThreshold) {
        var diff = top - marginThreshold;
        top -= diff;
        transformOrigin.vertical += diff;
      } else if (bottom > heightThreshold) {
        var _diff = bottom - heightThreshold;
        top -= _diff;
        transformOrigin.vertical += _diff;
      }

      (0, _warning2.default)(elemRect.height < heightThreshold || !elemRect.height || !heightThreshold, ['Material-UI: the popover component is too tall.', 'Some part of it can not be seen on the screen (' + (elemRect.height - heightThreshold) + 'px).', 'Please consider adding a `max-height` to improve the user-experience.'].join('\n'));

      // Check if the horizontal axis needs shifting
      if (left < marginThreshold) {
        var _diff2 = left - marginThreshold;
        left -= _diff2;
        transformOrigin.horizontal += _diff2;
      } else if (right > widthThreshold) {
        var _diff3 = right - widthThreshold;
        left -= _diff3;
        transformOrigin.horizontal += _diff3;
      }

      return {
        top: top + 'px',
        left: left + 'px',
        transformOrigin: getTransformOriginValue(transformOrigin)
      };
    }, _this.transitionEl = undefined, _this.handleGetOffsetTop = getOffsetTop, _this.handleGetOffsetLeft = getOffsetLeft, _this.handleEnter = function (element) {
      if (_this.props.onEnter) {
        _this.props.onEnter(element);
      }

      _this.setPositioningStyles(element);
    }, _this.handleResize = (0, _debounce2.default)(function () {
      var element = _reactDom2.default.findDOMNode(_this.transitionEl);
      _this.setPositioningStyles(element);
    }, 166), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Popover, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.action) {
        this.props.action({
          updatePosition: this.handleResize
        });
      }
    }
  }, {
    key: 'getAnchorOffset',


    // Returns the top/left offset of the position
    // to attach to on the anchor element (or body if none is provided)
    value: function getAnchorOffset(contentAnchorOffset) {
      var _props = this.props,
          anchorEl = _props.anchorEl,
          anchorOrigin = _props.anchorOrigin,
          anchorReference = _props.anchorReference,
          anchorPosition = _props.anchorPosition;


      if (anchorReference === 'anchorPosition') {
        return anchorPosition;
      }

      // If an anchor element wasn't provided, just use the parent body element of this Popover
      var anchorElement = getAnchorEl(anchorEl) || (0, _ownerDocument2.default)(_reactDom2.default.findDOMNode(this.transitionEl)).body;
      var anchorRect = anchorElement.getBoundingClientRect();
      var anchorVertical = contentAnchorOffset === 0 ? anchorOrigin.vertical : 'center';

      return {
        top: anchorRect.top + this.handleGetOffsetTop(anchorRect, anchorVertical),
        left: anchorRect.left + this.handleGetOffsetLeft(anchorRect, anchorOrigin.horizontal)
      };
    }

    // Returns the vertical offset of inner content to anchor the transform on if provided

  }, {
    key: 'getContentAnchorOffset',
    value: function getContentAnchorOffset(element) {
      var _props2 = this.props,
          getContentAnchorEl = _props2.getContentAnchorEl,
          anchorReference = _props2.anchorReference;

      var contentAnchorOffset = 0;

      if (getContentAnchorEl && anchorReference === 'anchorEl') {
        var contentAnchorEl = getContentAnchorEl(element);

        if (contentAnchorEl && (0, _contains2.default)(element, contentAnchorEl)) {
          var scrollTop = getScrollParent(element, contentAnchorEl);
          contentAnchorOffset = contentAnchorEl.offsetTop + contentAnchorEl.clientHeight / 2 - scrollTop || 0;
        }

        // != the default value
        (0, _warning2.default)(this.props.anchorOrigin.vertical === 'top', ['Material-UI: you can not change the default `anchorOrigin.vertical` value ', 'when also providing the `getContentAnchorEl` property to the popover component.', 'Only use one of the two properties.', 'Set `getContentAnchorEl` to null or left `anchorOrigin.vertical` unchanged.'].join('\n'));
      }

      return contentAnchorOffset;
    }

    // Return the base transform origin using the element
    // and taking the content anchor offset into account if in use

  }, {
    key: 'getTransformOrigin',
    value: function getTransformOrigin(elemRect) {
      var contentAnchorOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var transformOrigin = this.props.transformOrigin;

      return {
        vertical: this.handleGetOffsetTop(elemRect, transformOrigin.vertical) + contentAnchorOffset,
        horizontal: this.handleGetOffsetLeft(elemRect, transformOrigin.horizontal)
      };
    }
  }, {
    key: 'render',
    // Corresponds to 10 frames at 60 Hz.

    value: function render() {
      var _this2 = this;

      var _props3 = this.props,
          action = _props3.action,
          anchorEl = _props3.anchorEl,
          anchorOrigin = _props3.anchorOrigin,
          anchorPosition = _props3.anchorPosition,
          anchorReference = _props3.anchorReference,
          children = _props3.children,
          classes = _props3.classes,
          containerProp = _props3.container,
          elevation = _props3.elevation,
          getContentAnchorEl = _props3.getContentAnchorEl,
          marginThreshold = _props3.marginThreshold,
          onEnter = _props3.onEnter,
          onEntered = _props3.onEntered,
          onEntering = _props3.onEntering,
          onExit = _props3.onExit,
          onExited = _props3.onExited,
          onExiting = _props3.onExiting,
          open = _props3.open,
          PaperProps = _props3.PaperProps,
          role = _props3.role,
          transformOrigin = _props3.transformOrigin,
          TransitionProp = _props3.transition,
          transitionDuration = _props3.transitionDuration,
          other = _objectWithoutProperties(_props3, ['action', 'anchorEl', 'anchorOrigin', 'anchorPosition', 'anchorReference', 'children', 'classes', 'container', 'elevation', 'getContentAnchorEl', 'marginThreshold', 'onEnter', 'onEntered', 'onEntering', 'onExit', 'onExited', 'onExiting', 'open', 'PaperProps', 'role', 'transformOrigin', 'transition', 'transitionDuration']);

      // If the container prop is provided, use that
      // If the anchorEl prop is provided, use its parent body element as the container
      // If neither are provided let the Modal take care of choosing the container


      var container = containerProp || (anchorEl ? (0, _ownerDocument2.default)(getAnchorEl(anchorEl)).body : undefined);

      var transitionProps = {};
      // The provided transition might not support the auto timeout value.
      if (TransitionProp === _Grow2.default) {
        transitionProps.timeout = transitionDuration;
      }

      return _react2.default.createElement(
        _Modal2.default,
        _extends({ container: container, open: open, BackdropProps: { invisible: true } }, other),
        _react2.default.createElement(
          TransitionProp,
          _extends({
            appear: true,
            'in': open,
            onEnter: this.handleEnter,
            onEntered: onEntered,
            onEntering: onEntering,
            onExit: onExit,
            onExited: onExited,
            onExiting: onExiting,
            role: role,
            ref: function ref(node) {
              _this2.transitionEl = node;
            }
          }, transitionProps),
          _react2.default.createElement(
            _Paper2.default,
            _extends({
              className: classes.paper,
              'data-mui-test': 'Popover',
              elevation: elevation
            }, PaperProps),
            _react2.default.createElement(_reactEventListener2.default, { target: 'window', onResize: this.handleResize }),
            children
          )
        )
      );
    }
  }]);

  return Popover;
}(_react2.default.Component);

Popover.propTypes = {
  /**
   * This is callback property. It's called by the component on mount.
   * This is useful when you want to trigger an action programmatically.
   * It currently only supports updatePosition() action.
   *
   * @param {object} actions This object contains all posible actions
   * that can be triggered programmatically.
   */
  action: _propTypes2.default.func,
  /**
   * This is the DOM element, or a function that returns the DOM element,
   * that may be used to set the position of the popover.
   */
  anchorEl: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   */
  anchorOrigin: _propTypes2.default.shape({
    horizontal: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.oneOf(['left', 'center', 'right'])]),
    vertical: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.oneOf(['top', 'center', 'bottom'])])
  }),
  /**
   * This is the position that may be used
   * to set the position of the popover.
   * The coordinates are relative to
   * the application's client area.
   */
  anchorPosition: _propTypes2.default.shape({
    top: _propTypes2.default.number,
    left: _propTypes2.default.number
  }),
  /*
   * This determines which anchor prop to refer to to set
   * the position of the popover.
   */
  anchorReference: _propTypes2.default.oneOf(['anchorEl', 'anchorPosition']),
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * A node, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   * By default, it's using the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
  /**
   * The elevation of the popover.
   */
  elevation: _propTypes2.default.number,
  /**
   * This function is called in order to retrieve the content anchor element.
   * It's the opposite of the `anchorEl` property.
   * The content anchor element should be an element inside the popover.
   * It's used to correctly scroll and set the position of the popover.
   * The positioning strategy tries to make the content anchor element just above the
   * anchor element.
   */
  getContentAnchorEl: _propTypes2.default.func,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   */
  marginThreshold: _propTypes2.default.number,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   */
  onClose: _propTypes2.default.func,
  /**
   * Callback fired before the component is entering.
   */
  onEnter: _propTypes2.default.func,
  /**
   * Callback fired when the component has entered.
   */
  onEntered: _propTypes2.default.func,
  /**
   * Callback fired when the component is entering.
   */
  onEntering: _propTypes2.default.func,
  /**
   * Callback fired before the component is exiting.
   */
  onExit: _propTypes2.default.func,
  /**
   * Callback fired when the component has exited.
   */
  onExited: _propTypes2.default.func,
  /**
   * Callback fired when the component is exiting.
   */
  onExiting: _propTypes2.default.func,
  /**
   * If `true`, the popover is visible.
   */
  open: _propTypes2.default.bool.isRequired,
  /**
   * Properties applied to the `Paper` element.
   */
  PaperProps: _propTypes2.default.object,
  /**
   * @ignore
   */
  role: _propTypes2.default.string,
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   */
  transformOrigin: _propTypes2.default.shape({
    horizontal: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.oneOf(['left', 'center', 'right'])]),
    vertical: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.oneOf(['top', 'center', 'bottom'])])
  }),
  /**
   * Transition component.
   */
  transition: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  transitionDuration: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({ enter: _propTypes2.default.number, exit: _propTypes2.default.number }), _propTypes2.default.oneOf(['auto'])])
};

Popover.defaultProps = {
  anchorReference: 'anchorEl',
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'left'
  },
  elevation: 8,
  marginThreshold: 16,
  transformOrigin: {
    vertical: 'top',
    horizontal: 'left'
  },
  transition: _Grow2.default,
  transitionDuration: 'auto'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiPopover' })(Popover);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcUG9wb3ZlclxcUG9wb3Zlci5qcyJdLCJuYW1lcyI6WyJnZXRPZmZzZXRUb3AiLCJyZWN0IiwidmVydGljYWwiLCJvZmZzZXQiLCJoZWlnaHQiLCJnZXRPZmZzZXRMZWZ0IiwiaG9yaXpvbnRhbCIsIndpZHRoIiwiZ2V0VHJhbnNmb3JtT3JpZ2luVmFsdWUiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJtYXAiLCJuIiwiam9pbiIsImdldFNjcm9sbFBhcmVudCIsInBhcmVudCIsImNoaWxkIiwiZWxlbWVudCIsInNjcm9sbFRvcCIsInBhcmVudE5vZGUiLCJnZXRBbmNob3JFbCIsImFuY2hvckVsIiwic3R5bGVzIiwicGFwZXIiLCJwb3NpdGlvbiIsIm92ZXJmbG93WSIsIm92ZXJmbG93WCIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJvdXRsaW5lIiwiUG9wb3ZlciIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiaGFuZGxlUmVzaXplIiwiY2FuY2VsIiwic2V0UG9zaXRpb25pbmdTdHlsZXMiLCJzdHlsZSIsInBvc2l0aW9uaW5nIiwiZ2V0UG9zaXRpb25pbmdTdHlsZSIsInRvcCIsImxlZnQiLCJwcm9wcyIsIm1hcmdpblRocmVzaG9sZCIsImNvbnRlbnRBbmNob3JPZmZzZXQiLCJnZXRDb250ZW50QW5jaG9yT2Zmc2V0IiwiYW5jaG9yT2Zmc2V0IiwiZ2V0QW5jaG9yT2Zmc2V0IiwiZWxlbVJlY3QiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImdldFRyYW5zZm9ybU9yaWdpbiIsImJvdHRvbSIsInJpZ2h0IiwiY29udGFpbmVyV2luZG93IiwiaGVpZ2h0VGhyZXNob2xkIiwiaW5uZXJIZWlnaHQiLCJ3aWR0aFRocmVzaG9sZCIsImlubmVyV2lkdGgiLCJkaWZmIiwidHJhbnNpdGlvbkVsIiwidW5kZWZpbmVkIiwiaGFuZGxlR2V0T2Zmc2V0VG9wIiwiaGFuZGxlR2V0T2Zmc2V0TGVmdCIsImhhbmRsZUVudGVyIiwib25FbnRlciIsImZpbmRET01Ob2RlIiwiYWN0aW9uIiwidXBkYXRlUG9zaXRpb24iLCJhbmNob3JPcmlnaW4iLCJhbmNob3JSZWZlcmVuY2UiLCJhbmNob3JQb3NpdGlvbiIsImFuY2hvckVsZW1lbnQiLCJib2R5IiwiYW5jaG9yUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImFuY2hvclZlcnRpY2FsIiwiZ2V0Q29udGVudEFuY2hvckVsIiwiY29udGVudEFuY2hvckVsIiwib2Zmc2V0VG9wIiwiY2hpbGRyZW4iLCJjbGFzc2VzIiwiY29udGFpbmVyUHJvcCIsImNvbnRhaW5lciIsImVsZXZhdGlvbiIsIm9uRW50ZXJlZCIsIm9uRW50ZXJpbmciLCJvbkV4aXQiLCJvbkV4aXRlZCIsIm9uRXhpdGluZyIsIm9wZW4iLCJQYXBlclByb3BzIiwicm9sZSIsIlRyYW5zaXRpb25Qcm9wIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25EdXJhdGlvbiIsIm90aGVyIiwidHJhbnNpdGlvblByb3BzIiwidGltZW91dCIsImludmlzaWJsZSIsIm5vZGUiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJmdW5jIiwib25lT2ZUeXBlIiwib2JqZWN0Iiwic2hhcGUiLCJudW1iZXIiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJvbkNsb3NlIiwiYm9vbCIsInN0cmluZyIsImVudGVyIiwiZXhpdCIsImRlZmF1bHRQcm9wcyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OzsrZUFkQTs7QUFnQkEsU0FBU0EsWUFBVCxDQUFzQkMsSUFBdEIsRUFBNEJDLFFBQTVCLEVBQXNDO0FBQ3BDLE1BQUlDLFNBQVMsQ0FBYjs7QUFFQSxNQUFJLE9BQU9ELFFBQVAsS0FBb0IsUUFBeEIsRUFBa0M7QUFDaENDLGFB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VCxJQUE3QixDQUFwQixDQTFJTTtBQTJJbEI7OztBQUdBUixzQkFBb0Isb0JBQVVTLFNBQVYsQ0FBb0IsQ0FDdEMsb0JBQVVHLE1BRDRCLEVBRXRDLG9CQUFVRCxLQUFWLENBQWdCLEVBQUVPLE9BQU8sb0JBQVVOLE1BQW5CLEVBQTJCTyxNQUFNLG9CQUFVUCxNQUEzQyxFQUFoQixDQUZzQyxFQUd0QyxvQkFBVUMsS0FBVixDQUFnQixDQUFDLE1BQUQsQ0FBaEIsQ0FIc0MsQ0FBcEI7QUE5SUYsQ0FBcEI7O0FBcUpBNUUsUUFBUW1GLFlBQVIsR0FBdUI7QUFDckI3QyxtQkFBaUIsVUFESTtBQUVyQkQsZ0JBQWM7QUFDWmxFLGNBQVUsS0FERTtBQUVaSSxnQkFBWTtBQUZBLEdBRk87QUFNckI2RSxhQUFXLENBTlU7QUFPckJ6QyxtQkFBaUIsRUFQSTtBQVFyQmpDLG1CQUFpQjtBQUNmUCxjQUFVLEtBREs7QUFFZkksZ0JBQVk7QUFGRyxHQVJJO0FBWXJCdUYsNEJBWnFCO0FBYXJCQyxzQkFBb0I7QUFiQyxDQUF2Qjs7a0JBZ0JlLDBCQUFXekUsTUFBWCxFQUFtQixFQUFFOEYsTUFBTSxZQUFSLEVBQW5CLEVBQTJDcEYsT0FBM0MsQyIsImZpbGUiOiJQb3BvdmVyLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3JtY3F1ZW4vc2x0LXVpL21hdGVyaWFsLXVpIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGluaGVyaXRlZENvbXBvbmVudCBNb2RhbFxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnd2FybmluZyc7XG5pbXBvcnQgY29udGFpbnMgZnJvbSAnZG9tLWhlbHBlcnMvcXVlcnkvY29udGFpbnMnO1xuaW1wb3J0IG93bmVyRG9jdW1lbnQgZnJvbSAnZG9tLWhlbHBlcnMvb3duZXJEb2N1bWVudCc7XG5pbXBvcnQgb3duZXJXaW5kb3cgZnJvbSAnZG9tLWhlbHBlcnMvb3duZXJXaW5kb3cnO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC9kZWJvdW5jZSc7XG5pbXBvcnQgRXZlbnRMaXN0ZW5lciBmcm9tICdyZWFjdC1ldmVudC1saXN0ZW5lcic7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vTW9kYWwnO1xuaW1wb3J0IEdyb3cgZnJvbSAnLi4vdHJhbnNpdGlvbnMvR3Jvdyc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnLi4vUGFwZXInO1xuXG5mdW5jdGlvbiBnZXRPZmZzZXRUb3AocmVjdCwgdmVydGljYWwpIHtcbiAgbGV0IG9mZnNldCA9IDA7XG5cbiAgaWYgKHR5cGVvZiB2ZXJ0aWNhbCA9PT0gJ251bWJlcicpIHtcbiAgICBvZmZzZXQgPSB2ZXJ0aWNhbDtcbiAgfSBlbHNlIGlmICh2ZXJ0aWNhbCA9PT0gJ2NlbnRlcicpIHtcbiAgICBvZmZzZXQgPSByZWN0LmhlaWdodCAvIDI7XG4gIH0gZWxzZSBpZiAodmVydGljYWwgPT09ICdib3R0b20nKSB7XG4gICAgb2Zmc2V0ID0gcmVjdC5oZWlnaHQ7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0O1xufVxuXG5mdW5jdGlvbiBnZXRPZmZzZXRMZWZ0KHJlY3QsIGhvcml6b250YWwpIHtcbiAgbGV0IG9mZnNldCA9IDA7XG5cbiAgaWYgKHR5cGVvZiBob3Jpem9udGFsID09PSAnbnVtYmVyJykge1xuICAgIG9mZnNldCA9IGhvcml6b250YWw7XG4gIH0gZWxzZSBpZiAoaG9yaXpvbnRhbCA9PT0gJ2NlbnRlcicpIHtcbiAgICBvZmZzZXQgPSByZWN0LndpZHRoIC8gMjtcbiAgfSBlbHNlIGlmIChob3Jpem9udGFsID09PSAncmlnaHQnKSB7XG4gICAgb2Zmc2V0ID0gcmVjdC53aWR0aDtcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQ7XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zZm9ybU9yaWdpblZhbHVlKHRyYW5zZm9ybU9yaWdpbikge1xuICByZXR1cm4gW3RyYW5zZm9ybU9yaWdpbi5ob3Jpem9udGFsLCB0cmFuc2Zvcm1PcmlnaW4udmVydGljYWxdXG4gICAgLm1hcChuID0+IHtcbiAgICAgIHJldHVybiB0eXBlb2YgbiA9PT0gJ251bWJlcicgPyBgJHtufXB4YCA6IG47XG4gICAgfSlcbiAgICAuam9pbignICcpO1xufVxuXG4vLyBTdW0gdGhlIHNjcm9sbFRvcCBiZXR3ZWVuIHR3byBlbGVtZW50cy5cbmZ1bmN0aW9uIGdldFNjcm9sbFBhcmVudChwYXJlbnQsIGNoaWxkKSB7XG4gIGxldCBlbGVtZW50ID0gY2hpbGQ7XG4gIGxldCBzY3JvbGxUb3AgPSAwO1xuXG4gIHdoaWxlIChlbGVtZW50ICYmIGVsZW1lbnQgIT09IHBhcmVudCkge1xuICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgc2Nyb2xsVG9wICs9IGVsZW1lbnQuc2Nyb2xsVG9wO1xuICB9XG4gIHJldHVybiBzY3JvbGxUb3A7XG59XG5cbmZ1bmN0aW9uIGdldEFuY2hvckVsKGFuY2hvckVsKSB7XG4gIHJldHVybiB0eXBlb2YgYW5jaG9yRWwgPT09ICdmdW5jdGlvbicgPyBhbmNob3JFbCgpIDogYW5jaG9yRWw7XG59XG5cbmV4cG9ydCBjb25zdCBzdHlsZXMgPSB7XG4gIHBhcGVyOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcbiAgICAvLyBTbyB3ZSBzZWUgdGhlIHBvcG92ZXIgd2hlbiBpdCdzIGVtcHR5LlxuICAgIC8vIEl0J3MgbW9zdCBsaWtlbHkgb24gaXNzdWUgb24gdXNlcmxhbmQuXG4gICAgbWluV2lkdGg6IDE2LFxuICAgIG1pbkhlaWdodDogMTYsXG4gICAgbWF4V2lkdGg6ICdjYWxjKDEwMHZ3IC0gMzJweCknLFxuICAgIG1heEhlaWdodDogJ2NhbGMoMTAwdmggLSAzMnB4KScsXG4gICAgJyY6Zm9jdXMnOiB7XG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgfSxcbiAgfSxcbn07XG5cbmNsYXNzIFBvcG92ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5hY3Rpb24pIHtcbiAgICAgIHRoaXMucHJvcHMuYWN0aW9uKHtcbiAgICAgICAgdXBkYXRlUG9zaXRpb246IHRoaXMuaGFuZGxlUmVzaXplLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG4gICAgdGhpcy5oYW5kbGVSZXNpemUuY2FuY2VsKCk7XG4gIH07XG5cbiAgc2V0UG9zaXRpb25pbmdTdHlsZXMgPSBlbGVtZW50ID0+IHtcbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50LnN0eWxlKSB7XG4gICAgICBjb25zdCBwb3NpdGlvbmluZyA9IHRoaXMuZ2V0UG9zaXRpb25pbmdTdHlsZShlbGVtZW50KTtcbiAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gcG9zaXRpb25pbmcudG9wO1xuICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gcG9zaXRpb25pbmcubGVmdDtcbiAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gcG9zaXRpb25pbmcudHJhbnNmb3JtT3JpZ2luO1xuICAgIH1cbiAgfTtcblxuICBnZXRQb3NpdGlvbmluZ1N0eWxlID0gZWxlbWVudCA9PiB7XG4gICAgY29uc3QgeyBhbmNob3JFbCwgbWFyZ2luVGhyZXNob2xkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHBhcmVudCBoYXMgcmVxdWVzdGVkIGFuY2hvcmluZyBvbiBhbiBpbm5lciBjb250ZW50IG5vZGVcbiAgICBjb25zdCBjb250ZW50QW5jaG9yT2Zmc2V0ID0gdGhpcy5nZXRDb250ZW50QW5jaG9yT2Zmc2V0KGVsZW1lbnQpO1xuICAgIC8vIEdldCB0aGUgb2Zmc2V0IG9mIG9mIHRoZSBhbmNob3JpbmcgZWxlbWVudFxuICAgIGNvbnN0IGFuY2hvck9mZnNldCA9IHRoaXMuZ2V0QW5jaG9yT2Zmc2V0KGNvbnRlbnRBbmNob3JPZmZzZXQpO1xuXG4gICAgY29uc3QgZWxlbVJlY3QgPSB7XG4gICAgICB3aWR0aDogZWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICAgIGhlaWdodDogZWxlbWVudC5jbGllbnRIZWlnaHQsXG4gICAgfTtcbiAgICAvLyBHZXQgdGhlIHRyYW5zZm9ybSBvcmlnaW4gcG9pbnQgb24gdGhlIGVsZW1lbnQgaXRzZWxmXG4gICAgY29uc3QgdHJhbnNmb3JtT3JpZ2luID0gdGhpcy5nZXRUcmFuc2Zvcm1PcmlnaW4oZWxlbVJlY3QsIGNvbnRlbnRBbmNob3JPZmZzZXQpO1xuXG4gICAgLy8gQ2FsY3VsYXRlIGVsZW1lbnQgcG9zaXRpb25pbmdcbiAgICBsZXQgdG9wID0gYW5jaG9yT2Zmc2V0LnRvcCAtIHRyYW5zZm9ybU9yaWdpbi52ZXJ0aWNhbDtcbiAgICBsZXQgbGVmdCA9IGFuY2hvck9mZnNldC5sZWZ0IC0gdHJhbnNmb3JtT3JpZ2luLmhvcml6b250YWw7XG4gICAgY29uc3QgYm90dG9tID0gdG9wICsgZWxlbVJlY3QuaGVpZ2h0O1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVmdCArIGVsZW1SZWN0LndpZHRoO1xuXG4gICAgLy8gVXNlIHRoZSBwYXJlbnQgd2luZG93IG9mIHRoZSBhbmNob3JFbCBpZiBwcm92aWRlZFxuICAgIGNvbnN0IGNvbnRhaW5lcldpbmRvdyA9IG93bmVyV2luZG93KGdldEFuY2hvckVsKGFuY2hvckVsKSk7XG5cbiAgICAvLyBXaW5kb3cgdGhyZXNob2xkcyB0YWtpbmcgcmVxdWlyZWQgbWFyZ2luIGludG8gYWNjb3VudFxuICAgIGNvbnN0IGhlaWdodFRocmVzaG9sZCA9IGNvbnRhaW5lcldpbmRvdy5pbm5lckhlaWdodCAtIG1hcmdpblRocmVzaG9sZDtcbiAgICBjb25zdCB3aWR0aFRocmVzaG9sZCA9IGNvbnRhaW5lcldpbmRvdy5pbm5lcldpZHRoIC0gbWFyZ2luVGhyZXNob2xkO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHZlcnRpY2FsIGF4aXMgbmVlZHMgc2hpZnRpbmdcbiAgICBpZiAodG9wIDwgbWFyZ2luVGhyZXNob2xkKSB7XG4gICAgICBjb25zdCBkaWZmID0gdG9wIC0gbWFyZ2luVGhyZXNob2xkO1xuICAgICAgdG9wIC09IGRpZmY7XG4gICAgICB0cmFuc2Zvcm1PcmlnaW4udmVydGljYWwgKz0gZGlmZjtcbiAgICB9IGVsc2UgaWYgKGJvdHRvbSA+IGhlaWdodFRocmVzaG9sZCkge1xuICAgICAgY29uc3QgZGlmZiA9IGJvdHRvbSAtIGhlaWdodFRocmVzaG9sZDtcbiAgICAgIHRvcCAtPSBkaWZmO1xuICAgICAgdHJhbnNmb3JtT3JpZ2luLnZlcnRpY2FsICs9IGRpZmY7XG4gICAgfVxuXG4gICAgd2FybmluZyhcbiAgICAgIGVsZW1SZWN0LmhlaWdodCA8IGhlaWdodFRocmVzaG9sZCB8fCAhZWxlbVJlY3QuaGVpZ2h0IHx8ICFoZWlnaHRUaHJlc2hvbGQsXG4gICAgICBbXG4gICAgICAgICdNYXRlcmlhbC1VSTogdGhlIHBvcG92ZXIgY29tcG9uZW50IGlzIHRvbyB0YWxsLicsXG4gICAgICAgIGBTb21lIHBhcnQgb2YgaXQgY2FuIG5vdCBiZSBzZWVuIG9uIHRoZSBzY3JlZW4gKCR7ZWxlbVJlY3QuaGVpZ2h0IC0gaGVpZ2h0VGhyZXNob2xkfXB4KS5gLFxuICAgICAgICAnUGxlYXNlIGNvbnNpZGVyIGFkZGluZyBhIGBtYXgtaGVpZ2h0YCB0byBpbXByb3ZlIHRoZSB1c2VyLWV4cGVyaWVuY2UuJyxcbiAgICAgIF0uam9pbignXFxuJyksXG4gICAgKTtcblxuICAgIC8vIENoZWNrIGlmIHRoZSBob3Jpem9udGFsIGF4aXMgbmVlZHMgc2hpZnRpbmdcbiAgICBpZiAobGVmdCA8IG1hcmdpblRocmVzaG9sZCkge1xuICAgICAgY29uc3QgZGlmZiA9IGxlZnQgLSBtYXJnaW5UaHJlc2hvbGQ7XG4gICAgICBsZWZ0IC09IGRpZmY7XG4gICAgICB0cmFuc2Zvcm1PcmlnaW4uaG9yaXpvbnRhbCArPSBkaWZmO1xuICAgIH0gZWxzZSBpZiAocmlnaHQgPiB3aWR0aFRocmVzaG9sZCkge1xuICAgICAgY29uc3QgZGlmZiA9IHJpZ2h0IC0gd2lkdGhUaHJlc2hvbGQ7XG4gICAgICBsZWZ0IC09IGRpZmY7XG4gICAgICB0cmFuc2Zvcm1PcmlnaW4uaG9yaXpvbnRhbCArPSBkaWZmO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0b3A6IGAke3RvcH1weGAsXG4gICAgICBsZWZ0OiBgJHtsZWZ0fXB4YCxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogZ2V0VHJhbnNmb3JtT3JpZ2luVmFsdWUodHJhbnNmb3JtT3JpZ2luKSxcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgdGhlIHRvcC9sZWZ0IG9mZnNldCBvZiB0aGUgcG9zaXRpb25cbiAgLy8gdG8gYXR0YWNoIHRvIG9uIHRoZSBhbmNob3IgZWxlbWVudCAob3IgYm9keSBpZiBub25lIGlzIHByb3ZpZGVkKVxuICBnZXRBbmNob3JPZmZzZXQoY29udGVudEFuY2hvck9mZnNldCkge1xuICAgIGNvbnN0IHsgYW5jaG9yRWwsIGFuY2hvck9yaWdpbiwgYW5jaG9yUmVmZXJlbmNlLCBhbmNob3JQb3NpdGlvbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChhbmNob3JSZWZlcmVuY2UgPT09ICdhbmNob3JQb3NpdGlvbicpIHtcbiAgICAgIHJldHVybiBhbmNob3JQb3NpdGlvbjtcbiAgICB9XG5cbiAgICAvLyBJZiBhbiBhbmNob3IgZWxlbWVudCB3YXNuJ3QgcHJvdmlkZWQsIGp1c3QgdXNlIHRoZSBwYXJlbnQgYm9keSBlbGVtZW50IG9mIHRoaXMgUG9wb3ZlclxuICAgIGNvbnN0IGFuY2hvckVsZW1lbnQgPVxuICAgICAgZ2V0QW5jaG9yRWwoYW5jaG9yRWwpIHx8IG93bmVyRG9jdW1lbnQoUmVhY3RET00uZmluZERPTU5vZGUodGhpcy50cmFuc2l0aW9uRWwpKS5ib2R5O1xuICAgIGNvbnN0IGFuY2hvclJlY3QgPSBhbmNob3JFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGFuY2hvclZlcnRpY2FsID0gY29udGVudEFuY2hvck9mZnNldCA9PT0gMCA/IGFuY2hvck9yaWdpbi52ZXJ0aWNhbCA6ICdjZW50ZXInO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogYW5jaG9yUmVjdC50b3AgKyB0aGlzLmhhbmRsZUdldE9mZnNldFRvcChhbmNob3JSZWN0LCBhbmNob3JWZXJ0aWNhbCksXG4gICAgICBsZWZ0OiBhbmNob3JSZWN0LmxlZnQgKyB0aGlzLmhhbmRsZUdldE9mZnNldExlZnQoYW5jaG9yUmVjdCwgYW5jaG9yT3JpZ2luLmhvcml6b250YWwpLFxuICAgIH07XG4gIH1cblxuICAvLyBSZXR1cm5zIHRoZSB2ZXJ0aWNhbCBvZmZzZXQgb2YgaW5uZXIgY29udGVudCB0byBhbmNob3IgdGhlIHRyYW5zZm9ybSBvbiBpZiBwcm92aWRlZFxuICBnZXRDb250ZW50QW5jaG9yT2Zmc2V0KGVsZW1lbnQpIHtcbiAgICBjb25zdCB7IGdldENvbnRlbnRBbmNob3JFbCwgYW5jaG9yUmVmZXJlbmNlIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBjb250ZW50QW5jaG9yT2Zmc2V0ID0gMDtcblxuICAgIGlmIChnZXRDb250ZW50QW5jaG9yRWwgJiYgYW5jaG9yUmVmZXJlbmNlID09PSAnYW5jaG9yRWwnKSB7XG4gICAgICBjb25zdCBjb250ZW50QW5jaG9yRWwgPSBnZXRDb250ZW50QW5jaG9yRWwoZWxlbWVudCk7XG5cbiAgICAgIGlmIChjb250ZW50QW5jaG9yRWwgJiYgY29udGFpbnMoZWxlbWVudCwgY29udGVudEFuY2hvckVsKSkge1xuICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCwgY29udGVudEFuY2hvckVsKTtcbiAgICAgICAgY29udGVudEFuY2hvck9mZnNldCA9XG4gICAgICAgICAgY29udGVudEFuY2hvckVsLm9mZnNldFRvcCArIGNvbnRlbnRBbmNob3JFbC5jbGllbnRIZWlnaHQgLyAyIC0gc2Nyb2xsVG9wIHx8IDA7XG4gICAgICB9XG5cbiAgICAgIC8vICE9IHRoZSBkZWZhdWx0IHZhbHVlXG4gICAgICB3YXJuaW5nKFxuICAgICAgICB0aGlzLnByb3BzLmFuY2hvck9yaWdpbi52ZXJ0aWNhbCA9PT0gJ3RvcCcsXG4gICAgICAgIFtcbiAgICAgICAgICAnTWF0ZXJpYWwtVUk6IHlvdSBjYW4gbm90IGNoYW5nZSB0aGUgZGVmYXVsdCBgYW5jaG9yT3JpZ2luLnZlcnRpY2FsYCB2YWx1ZSAnLFxuICAgICAgICAgICd3aGVuIGFsc28gcHJvdmlkaW5nIHRoZSBgZ2V0Q29udGVudEFuY2hvckVsYCBwcm9wZXJ0eSB0byB0aGUgcG9wb3ZlciBjb21wb25lbnQuJyxcbiAgICAgICAgICAnT25seSB1c2Ugb25lIG9mIHRoZSB0d28gcHJvcGVydGllcy4nLFxuICAgICAgICAgICdTZXQgYGdldENvbnRlbnRBbmNob3JFbGAgdG8gbnVsbCBvciBsZWZ0IGBhbmNob3JPcmlnaW4udmVydGljYWxgIHVuY2hhbmdlZC4nLFxuICAgICAgICBdLmpvaW4oJ1xcbicpLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudEFuY2hvck9mZnNldDtcbiAgfVxuXG4gIC8vIFJldHVybiB0aGUgYmFzZSB0cmFuc2Zvcm0gb3JpZ2luIHVzaW5nIHRoZSBlbGVtZW50XG4gIC8vIGFuZCB0YWtpbmcgdGhlIGNvbnRlbnQgYW5jaG9yIG9mZnNldCBpbnRvIGFjY291bnQgaWYgaW4gdXNlXG4gIGdldFRyYW5zZm9ybU9yaWdpbihlbGVtUmVjdCwgY29udGVudEFuY2hvck9mZnNldCA9IDApIHtcbiAgICBjb25zdCB7IHRyYW5zZm9ybU9yaWdpbiB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4ge1xuICAgICAgdmVydGljYWw6IHRoaXMuaGFuZGxlR2V0T2Zmc2V0VG9wKGVsZW1SZWN0LCB0cmFuc2Zvcm1PcmlnaW4udmVydGljYWwpICsgY29udGVudEFuY2hvck9mZnNldCxcbiAgICAgIGhvcml6b250YWw6IHRoaXMuaGFuZGxlR2V0T2Zmc2V0TGVmdChlbGVtUmVjdCwgdHJhbnNmb3JtT3JpZ2luLmhvcml6b250YWwpLFxuICAgIH07XG4gIH1cblxuICB0cmFuc2l0aW9uRWwgPSB1bmRlZmluZWQ7XG5cbiAgaGFuZGxlR2V0T2Zmc2V0VG9wID0gZ2V0T2Zmc2V0VG9wO1xuXG4gIGhhbmRsZUdldE9mZnNldExlZnQgPSBnZXRPZmZzZXRMZWZ0O1xuXG4gIGhhbmRsZUVudGVyID0gZWxlbWVudCA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25FbnRlcikge1xuICAgICAgdGhpcy5wcm9wcy5vbkVudGVyKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0UG9zaXRpb25pbmdTdHlsZXMoZWxlbWVudCk7XG4gIH07XG5cbiAgaGFuZGxlUmVzaXplID0gZGVib3VuY2UoKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnRyYW5zaXRpb25FbCk7XG4gICAgdGhpcy5zZXRQb3NpdGlvbmluZ1N0eWxlcyhlbGVtZW50KTtcbiAgfSwgMTY2KTsgLy8gQ29ycmVzcG9uZHMgdG8gMTAgZnJhbWVzIGF0IDYwIEh6LlxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhY3Rpb24sXG4gICAgICBhbmNob3JFbCxcbiAgICAgIGFuY2hvck9yaWdpbixcbiAgICAgIGFuY2hvclBvc2l0aW9uLFxuICAgICAgYW5jaG9yUmVmZXJlbmNlLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzLFxuICAgICAgY29udGFpbmVyOiBjb250YWluZXJQcm9wLFxuICAgICAgZWxldmF0aW9uLFxuICAgICAgZ2V0Q29udGVudEFuY2hvckVsLFxuICAgICAgbWFyZ2luVGhyZXNob2xkLFxuICAgICAgb25FbnRlcixcbiAgICAgIG9uRW50ZXJlZCxcbiAgICAgIG9uRW50ZXJpbmcsXG4gICAgICBvbkV4aXQsXG4gICAgICBvbkV4aXRlZCxcbiAgICAgIG9uRXhpdGluZyxcbiAgICAgIG9wZW4sXG4gICAgICBQYXBlclByb3BzLFxuICAgICAgcm9sZSxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbixcbiAgICAgIHRyYW5zaXRpb246IFRyYW5zaXRpb25Qcm9wLFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgLi4ub3RoZXJcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIC8vIElmIHRoZSBjb250YWluZXIgcHJvcCBpcyBwcm92aWRlZCwgdXNlIHRoYXRcbiAgICAvLyBJZiB0aGUgYW5jaG9yRWwgcHJvcCBpcyBwcm92aWRlZCwgdXNlIGl0cyBwYXJlbnQgYm9keSBlbGVtZW50IGFzIHRoZSBjb250YWluZXJcbiAgICAvLyBJZiBuZWl0aGVyIGFyZSBwcm92aWRlZCBsZXQgdGhlIE1vZGFsIHRha2UgY2FyZSBvZiBjaG9vc2luZyB0aGUgY29udGFpbmVyXG4gICAgY29uc3QgY29udGFpbmVyID1cbiAgICAgIGNvbnRhaW5lclByb3AgfHwgKGFuY2hvckVsID8gb3duZXJEb2N1bWVudChnZXRBbmNob3JFbChhbmNob3JFbCkpLmJvZHkgOiB1bmRlZmluZWQpO1xuXG4gICAgY29uc3QgdHJhbnNpdGlvblByb3BzID0ge307XG4gICAgLy8gVGhlIHByb3ZpZGVkIHRyYW5zaXRpb24gbWlnaHQgbm90IHN1cHBvcnQgdGhlIGF1dG8gdGltZW91dCB2YWx1ZS5cbiAgICBpZiAoVHJhbnNpdGlvblByb3AgPT09IEdyb3cpIHtcbiAgICAgIHRyYW5zaXRpb25Qcm9wcy50aW1lb3V0ID0gdHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8TW9kYWwgY29udGFpbmVyPXtjb250YWluZXJ9IG9wZW49e29wZW59IEJhY2tkcm9wUHJvcHM9e3sgaW52aXNpYmxlOiB0cnVlIH19IHsuLi5vdGhlcn0+XG4gICAgICAgIDxUcmFuc2l0aW9uUHJvcFxuICAgICAgICAgIGFwcGVhclxuICAgICAgICAgIGluPXtvcGVufVxuICAgICAgICAgIG9uRW50ZXI9e3RoaXMuaGFuZGxlRW50ZXJ9XG4gICAgICAgICAgb25FbnRlcmVkPXtvbkVudGVyZWR9XG4gICAgICAgICAgb25FbnRlcmluZz17b25FbnRlcmluZ31cbiAgICAgICAgICBvbkV4aXQ9e29uRXhpdH1cbiAgICAgICAgICBvbkV4aXRlZD17b25FeGl0ZWR9XG4gICAgICAgICAgb25FeGl0aW5nPXtvbkV4aXRpbmd9XG4gICAgICAgICAgcm9sZT17cm9sZX1cbiAgICAgICAgICByZWY9e25vZGUgPT4ge1xuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uRWwgPSBub2RlO1xuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnRyYW5zaXRpb25Qcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIDxQYXBlclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfVxuICAgICAgICAgICAgZGF0YS1tdWktdGVzdD1cIlBvcG92ZXJcIlxuICAgICAgICAgICAgZWxldmF0aW9uPXtlbGV2YXRpb259XG4gICAgICAgICAgICB7Li4uUGFwZXJQcm9wc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RXZlbnRMaXN0ZW5lciB0YXJnZXQ9XCJ3aW5kb3dcIiBvblJlc2l6ZT17dGhpcy5oYW5kbGVSZXNpemV9IC8+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgPC9UcmFuc2l0aW9uUHJvcD5cbiAgICAgIDwvTW9kYWw+XG4gICAgKTtcbiAgfVxufVxuXG5Qb3BvdmVyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoaXMgaXMgY2FsbGJhY2sgcHJvcGVydHkuIEl0J3MgY2FsbGVkIGJ5IHRoZSBjb21wb25lbnQgb24gbW91bnQuXG4gICAqIFRoaXMgaXMgdXNlZnVsIHdoZW4geW91IHdhbnQgdG8gdHJpZ2dlciBhbiBhY3Rpb24gcHJvZ3JhbW1hdGljYWxseS5cbiAgICogSXQgY3VycmVudGx5IG9ubHkgc3VwcG9ydHMgdXBkYXRlUG9zaXRpb24oKSBhY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBhY3Rpb25zIFRoaXMgb2JqZWN0IGNvbnRhaW5zIGFsbCBwb3NpYmxlIGFjdGlvbnNcbiAgICogdGhhdCBjYW4gYmUgdHJpZ2dlcmVkIHByb2dyYW1tYXRpY2FsbHkuXG4gICAqL1xuICBhY3Rpb246IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgRE9NIGVsZW1lbnQsIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBET00gZWxlbWVudCxcbiAgICogdGhhdCBtYXkgYmUgdXNlZCB0byBzZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBwb3BvdmVyLlxuICAgKi9cbiAgYW5jaG9yRWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSksXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBwb2ludCBvbiB0aGUgYW5jaG9yIHdoZXJlIHRoZSBwb3BvdmVyJ3NcbiAgICogYGFuY2hvckVsYCB3aWxsIGF0dGFjaCB0by4gVGhpcyBpcyBub3QgdXNlZCB3aGVuIHRoZVxuICAgKiBhbmNob3JSZWZlcmVuY2UgaXMgJ2FuY2hvclBvc2l0aW9uJy5cbiAgICpcbiAgICogT3B0aW9uczpcbiAgICogdmVydGljYWw6IFt0b3AsIGNlbnRlciwgYm90dG9tXTtcbiAgICogaG9yaXpvbnRhbDogW2xlZnQsIGNlbnRlciwgcmlnaHRdLlxuICAgKi9cbiAgYW5jaG9yT3JpZ2luOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGhvcml6b250YWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAnY2VudGVyJywgJ3JpZ2h0J10pLFxuICAgIF0pLFxuICAgIHZlcnRpY2FsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMub25lT2YoWyd0b3AnLCAnY2VudGVyJywgJ2JvdHRvbSddKV0pLFxuICB9KSxcbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIHBvc2l0aW9uIHRoYXQgbWF5IGJlIHVzZWRcbiAgICogdG8gc2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgcG9wb3Zlci5cbiAgICogVGhlIGNvb3JkaW5hdGVzIGFyZSByZWxhdGl2ZSB0b1xuICAgKiB0aGUgYXBwbGljYXRpb24ncyBjbGllbnQgYXJlYS5cbiAgICovXG4gIGFuY2hvclBvc2l0aW9uOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHRvcDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBsZWZ0OiBQcm9wVHlwZXMubnVtYmVyLFxuICB9KSxcbiAgLypcbiAgICogVGhpcyBkZXRlcm1pbmVzIHdoaWNoIGFuY2hvciBwcm9wIHRvIHJlZmVyIHRvIHRvIHNldFxuICAgKiB0aGUgcG9zaXRpb24gb2YgdGhlIHBvcG92ZXIuXG4gICAqL1xuICBhbmNob3JSZWZlcmVuY2U6IFByb3BUeXBlcy5vbmVPZihbJ2FuY2hvckVsJywgJ2FuY2hvclBvc2l0aW9uJ10pLFxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIFVzZWZ1bCB0byBleHRlbmQgdGhlIHN0eWxlIGFwcGxpZWQgdG8gY29tcG9uZW50cy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIEEgbm9kZSwgY29tcG9uZW50IGluc3RhbmNlLCBvciBmdW5jdGlvbiB0aGF0IHJldHVybnMgZWl0aGVyLlxuICAgKiBUaGUgYGNvbnRhaW5lcmAgd2lsbCBwYXNzZWQgdG8gdGhlIE1vZGFsIGNvbXBvbmVudC5cbiAgICogQnkgZGVmYXVsdCwgaXQncyB1c2luZyB0aGUgYm9keSBvZiB0aGUgYW5jaG9yRWwncyB0b3AtbGV2ZWwgZG9jdW1lbnQgb2JqZWN0LFxuICAgKiBzbyBpdCdzIHNpbXBseSBgZG9jdW1lbnQuYm9keWAgbW9zdCBvZiB0aGUgdGltZS5cbiAgICovXG4gIGNvbnRhaW5lcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgLyoqXG4gICAqIFRoZSBlbGV2YXRpb24gb2YgdGhlIHBvcG92ZXIuXG4gICAqL1xuICBlbGV2YXRpb246IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBpbiBvcmRlciB0byByZXRyaWV2ZSB0aGUgY29udGVudCBhbmNob3IgZWxlbWVudC5cbiAgICogSXQncyB0aGUgb3Bwb3NpdGUgb2YgdGhlIGBhbmNob3JFbGAgcHJvcGVydHkuXG4gICAqIFRoZSBjb250ZW50IGFuY2hvciBlbGVtZW50IHNob3VsZCBiZSBhbiBlbGVtZW50IGluc2lkZSB0aGUgcG9wb3Zlci5cbiAgICogSXQncyB1c2VkIHRvIGNvcnJlY3RseSBzY3JvbGwgYW5kIHNldCB0aGUgcG9zaXRpb24gb2YgdGhlIHBvcG92ZXIuXG4gICAqIFRoZSBwb3NpdGlvbmluZyBzdHJhdGVneSB0cmllcyB0byBtYWtlIHRoZSBjb250ZW50IGFuY2hvciBlbGVtZW50IGp1c3QgYWJvdmUgdGhlXG4gICAqIGFuY2hvciBlbGVtZW50LlxuICAgKi9cbiAgZ2V0Q29udGVudEFuY2hvckVsOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIFNwZWNpZmllcyBob3cgY2xvc2UgdG8gdGhlIGVkZ2Ugb2YgdGhlIHdpbmRvdyB0aGUgcG9wb3ZlciBjYW4gYXBwZWFyLlxuICAgKi9cbiAgbWFyZ2luVGhyZXNob2xkOiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgY29tcG9uZW50IHJlcXVlc3RzIHRvIGJlIGNsb3NlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKi9cbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyBlbnRlcmluZy5cbiAgICovXG4gIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBlbnRlcmVkLlxuICAgKi9cbiAgb25FbnRlcmVkOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBlbnRlcmluZy5cbiAgICovXG4gIG9uRW50ZXJpbmc6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgZXhpdGluZy5cbiAgICovXG4gIG9uRXhpdDogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGV4aXRlZC5cbiAgICovXG4gIG9uRXhpdGVkOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBleGl0aW5nLlxuICAgKi9cbiAgb25FeGl0aW5nOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHBvcG92ZXIgaXMgdmlzaWJsZS5cbiAgICovXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBQcm9wZXJ0aWVzIGFwcGxpZWQgdG8gdGhlIGBQYXBlcmAgZWxlbWVudC5cbiAgICovXG4gIFBhcGVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICByb2xlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgcG9pbnQgb24gdGhlIHBvcG92ZXIgd2hpY2hcbiAgICogd2lsbCBhdHRhY2ggdG8gdGhlIGFuY2hvcidzIG9yaWdpbi5cbiAgICpcbiAgICogT3B0aW9uczpcbiAgICogdmVydGljYWw6IFt0b3AsIGNlbnRlciwgYm90dG9tLCB4KHB4KV07XG4gICAqIGhvcml6b250YWw6IFtsZWZ0LCBjZW50ZXIsIHJpZ2h0LCB4KHB4KV0uXG4gICAqL1xuICB0cmFuc2Zvcm1PcmlnaW46IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgaG9yaXpvbnRhbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdjZW50ZXInLCAncmlnaHQnXSksXG4gICAgXSksXG4gICAgdmVydGljYWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5vbmVPZihbJ3RvcCcsICdjZW50ZXInLCAnYm90dG9tJ10pXSksXG4gIH0pLFxuICAvKipcbiAgICogVHJhbnNpdGlvbiBjb21wb25lbnQuXG4gICAqL1xuICB0cmFuc2l0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAvKipcbiAgICogU2V0IHRvICdhdXRvJyB0byBhdXRvbWF0aWNhbGx5IGNhbGN1bGF0ZSB0cmFuc2l0aW9uIHRpbWUgYmFzZWQgb24gaGVpZ2h0LlxuICAgKi9cbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5zaGFwZSh7IGVudGVyOiBQcm9wVHlwZXMubnVtYmVyLCBleGl0OiBQcm9wVHlwZXMubnVtYmVyIH0pLFxuICAgIFByb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSksXG4gIF0pLFxufTtcblxuUG9wb3Zlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGFuY2hvclJlZmVyZW5jZTogJ2FuY2hvckVsJyxcbiAgYW5jaG9yT3JpZ2luOiB7XG4gICAgdmVydGljYWw6ICd0b3AnLFxuICAgIGhvcml6b250YWw6ICdsZWZ0JyxcbiAgfSxcbiAgZWxldmF0aW9uOiA4LFxuICBtYXJnaW5UaHJlc2hvbGQ6IDE2LFxuICB0cmFuc2Zvcm1PcmlnaW46IHtcbiAgICB2ZXJ0aWNhbDogJ3RvcCcsXG4gICAgaG9yaXpvbnRhbDogJ2xlZnQnLFxuICB9LFxuICB0cmFuc2l0aW9uOiBHcm93LFxuICB0cmFuc2l0aW9uRHVyYXRpb246ICdhdXRvJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7IG5hbWU6ICdNdWlQb3BvdmVyJyB9KShQb3BvdmVyKTtcbiJdfQ==

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