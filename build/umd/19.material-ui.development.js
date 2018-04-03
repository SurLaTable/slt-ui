webpackJsonpmaterial_ui([19,29],{

/***/ 292:
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

var _classnames = __webpack_require__(23);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Transition = __webpack_require__(100);

var _Transition2 = _interopRequireDefault(_Transition);

var _withStyles = __webpack_require__(18);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _transitions = __webpack_require__(99);

var _utils = __webpack_require__(379);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // @inheritedComponent Transition

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
 * The Collapes transition is used by the
 * [Vertical Stepper](/demos/steppers#vertical-stepper) StepContent component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Collapse = function (_React$Component) {
  _inherits(Collapse, _React$Component);

  function Collapse() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Collapse);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call.apply(_ref, [this].concat(args))), _this), _this.wrapper = null, _this.autoTransitionDuration = undefined, _this.timer = null, _this.handleEnter = function (node) {
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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Collapse, [{
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
          other = _objectWithoutProperties(_props, ['children', 'classes', 'className', 'collapsedHeight', 'component', 'onEnter', 'onEntered', 'onEntering', 'onExit', 'onExiting', 'style', 'theme', 'timeout']);

      return _react2.default.createElement(
        _Transition2.default,
        _extends({
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
            _extends({
              className: (0, _classnames2.default)(classes.container, _defineProperty({}, classes.entered, state === 'entered'), className),
              style: _extends({}, style, {
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

Collapse.propTypes = {
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
};

Collapse.defaultProps = {
  collapsedHeight: '0px',
  component: 'div',
  timeout: _transitions.duration.standard
};

exports.default = (0, _withStyles2.default)(styles, {
  withTheme: true,
  name: 'MuiCollapse'
})(Collapse);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdHJhbnNpdGlvbnNcXENvbGxhcHNlLmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsImNvbnRhaW5lciIsImhlaWdodCIsIm92ZXJmbG93IiwidHJhbnNpdGlvbiIsInRoZW1lIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlbnRlcmVkIiwid3JhcHBlciIsImRpc3BsYXkiLCJ3cmFwcGVySW5uZXIiLCJ3aWR0aCIsIkNvbGxhcHNlIiwiYXV0b1RyYW5zaXRpb25EdXJhdGlvbiIsInVuZGVmaW5lZCIsInRpbWVyIiwiaGFuZGxlRW50ZXIiLCJub2RlIiwic3R5bGUiLCJwcm9wcyIsImNvbGxhcHNlZEhlaWdodCIsIm9uRW50ZXIiLCJoYW5kbGVFbnRlcmluZyIsInRpbWVvdXQiLCJ3cmFwcGVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwibW9kZSIsInRyYW5zaXRpb25EdXJhdGlvbiIsImR1cmF0aW9uIiwiZHVyYXRpb24yIiwiZ2V0QXV0b0hlaWdodER1cmF0aW9uIiwib25FbnRlcmluZyIsImhhbmRsZUVudGVyZWQiLCJvbkVudGVyZWQiLCJoYW5kbGVFeGl0Iiwib25FeGl0IiwiaGFuZGxlRXhpdGluZyIsIm9uRXhpdGluZyIsImFkZEVuZExpc3RlbmVyIiwiXyIsIm5leHQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiY2hpbGRyZW4iLCJjbGFzc2VzIiwiY2xhc3NOYW1lIiwiQ29tcG9uZW50IiwiY29tcG9uZW50Iiwib3RoZXIiLCJzdGF0ZSIsImNoaWxkUHJvcHMiLCJtaW5IZWlnaHQiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwib25lT2ZUeXBlIiwiZnVuYyIsImluIiwiYm9vbCIsIm51bWJlciIsInNoYXBlIiwiZW50ZXIiLCJleGl0Iiwib25lT2YiLCJkZWZhdWx0UHJvcHMiLCJzdGFuZGFyZCIsIndpdGhUaGVtZSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUE7Ozs7QUFDQTs7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QUNoQ29FLGFBQVcsSUFEcUI7QUFFaENDLFFBQU07QUFGMEIsQ0FBbkIsRUFHWnhELFFBSFksQyIsImZpbGUiOiJDb2xsYXBzZS5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9ybWNxdWVuL3NsdC11aS9tYXRlcmlhbC11aSIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBpbmhlcml0ZWRDb21wb25lbnQgVHJhbnNpdGlvblxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCB7IGR1cmF0aW9uIH0gZnJvbSAnLi4vc3R5bGVzL3RyYW5zaXRpb25zJztcbmltcG9ydCB7IGdldFRyYW5zaXRpb25Qcm9wcyB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgY29udGFpbmVyOiB7XG4gICAgaGVpZ2h0OiAwLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ2hlaWdodCcpLFxuICB9LFxuICBlbnRlcmVkOiB7XG4gICAgaGVpZ2h0OiAnYXV0bycsXG4gIH0sXG4gIHdyYXBwZXI6IHtcbiAgICAvLyBIYWNrIHRvIGdldCBjaGlsZHJlbiB3aXRoIGEgbmVnYXRpdmUgbWFyZ2luIHRvIG5vdCBmYWxzaWZ5IHRoZSBoZWlnaHQgY29tcHV0YXRpb24uXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICB9LFxuICB3cmFwcGVySW5uZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICB9LFxufSk7XG5cbi8qKlxuICogVGhlIENvbGxhcGVzIHRyYW5zaXRpb24gaXMgdXNlZCBieSB0aGVcbiAqIFtWZXJ0aWNhbCBTdGVwcGVyXSgvZGVtb3Mvc3RlcHBlcnMjdmVydGljYWwtc3RlcHBlcikgU3RlcENvbnRlbnQgY29tcG9uZW50LlxuICogSXQgdXNlcyBbcmVhY3QtdHJhbnNpdGlvbi1ncm91cF0oaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cCkgaW50ZXJuYWxseS5cbiAqL1xuY2xhc3MgQ29sbGFwc2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gIH1cblxuICB3cmFwcGVyID0gbnVsbDtcbiAgYXV0b1RyYW5zaXRpb25EdXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgdGltZXIgPSBudWxsO1xuXG4gIGhhbmRsZUVudGVyID0gbm9kZSA9PiB7XG4gICAgbm9kZS5zdHlsZS5oZWlnaHQgPSB0aGlzLnByb3BzLmNvbGxhcHNlZEhlaWdodDtcblxuICAgIGlmICh0aGlzLnByb3BzLm9uRW50ZXIpIHtcbiAgICAgIHRoaXMucHJvcHMub25FbnRlcihub2RlKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlRW50ZXJpbmcgPSBub2RlID0+IHtcbiAgICBjb25zdCB7IHRpbWVvdXQsIHRoZW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHdyYXBwZXJIZWlnaHQgPSB0aGlzLndyYXBwZXIgPyB0aGlzLndyYXBwZXIuY2xpZW50SGVpZ2h0IDogMDtcblxuICAgIGNvbnN0IHsgZHVyYXRpb246IHRyYW5zaXRpb25EdXJhdGlvbiB9ID0gZ2V0VHJhbnNpdGlvblByb3BzKHRoaXMucHJvcHMsIHtcbiAgICAgIG1vZGU6ICdlbnRlcicsXG4gICAgfSk7XG5cbiAgICBpZiAodGltZW91dCA9PT0gJ2F1dG8nKSB7XG4gICAgICBjb25zdCBkdXJhdGlvbjIgPSB0aGVtZS50cmFuc2l0aW9ucy5nZXRBdXRvSGVpZ2h0RHVyYXRpb24od3JhcHBlckhlaWdodCk7XG4gICAgICBub2RlLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGAke2R1cmF0aW9uMn1tc2A7XG4gICAgICB0aGlzLmF1dG9UcmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbjI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID1cbiAgICAgICAgdHlwZW9mIHRyYW5zaXRpb25EdXJhdGlvbiA9PT0gJ3N0cmluZycgPyB0cmFuc2l0aW9uRHVyYXRpb24gOiBgJHt0cmFuc2l0aW9uRHVyYXRpb259bXNgO1xuICAgIH1cblxuICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gYCR7d3JhcHBlckhlaWdodH1weGA7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkVudGVyaW5nKSB7XG4gICAgICB0aGlzLnByb3BzLm9uRW50ZXJpbmcobm9kZSk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUVudGVyZWQgPSBub2RlID0+IHtcbiAgICBub2RlLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcblxuICAgIGlmICh0aGlzLnByb3BzLm9uRW50ZXJlZCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkVudGVyZWQobm9kZSk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUV4aXQgPSBub2RlID0+IHtcbiAgICBjb25zdCB3cmFwcGVySGVpZ2h0ID0gdGhpcy53cmFwcGVyID8gdGhpcy53cmFwcGVyLmNsaWVudEhlaWdodCA6IDA7XG4gICAgbm9kZS5zdHlsZS5oZWlnaHQgPSBgJHt3cmFwcGVySGVpZ2h0fXB4YDtcblxuICAgIGlmICh0aGlzLnByb3BzLm9uRXhpdCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkV4aXQobm9kZSk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUV4aXRpbmcgPSBub2RlID0+IHtcbiAgICBjb25zdCB7IHRpbWVvdXQsIHRoZW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHdyYXBwZXJIZWlnaHQgPSB0aGlzLndyYXBwZXIgPyB0aGlzLndyYXBwZXIuY2xpZW50SGVpZ2h0IDogMDtcblxuICAgIGNvbnN0IHsgZHVyYXRpb246IHRyYW5zaXRpb25EdXJhdGlvbiB9ID0gZ2V0VHJhbnNpdGlvblByb3BzKHRoaXMucHJvcHMsIHtcbiAgICAgIG1vZGU6ICdleGl0JyxcbiAgICB9KTtcblxuICAgIGlmICh0aW1lb3V0ID09PSAnYXV0bycpIHtcbiAgICAgIGNvbnN0IGR1cmF0aW9uMiA9IHRoZW1lLnRyYW5zaXRpb25zLmdldEF1dG9IZWlnaHREdXJhdGlvbih3cmFwcGVySGVpZ2h0KTtcbiAgICAgIG5vZGUuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7ZHVyYXRpb24yfW1zYDtcbiAgICAgIHRoaXMuYXV0b1RyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uMjtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZS5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPVxuICAgICAgICB0eXBlb2YgdHJhbnNpdGlvbkR1cmF0aW9uID09PSAnc3RyaW5nJyA/IHRyYW5zaXRpb25EdXJhdGlvbiA6IGAke3RyYW5zaXRpb25EdXJhdGlvbn1tc2A7XG4gICAgfVxuXG4gICAgbm9kZS5zdHlsZS5oZWlnaHQgPSB0aGlzLnByb3BzLmNvbGxhcHNlZEhlaWdodDtcblxuICAgIGlmICh0aGlzLnByb3BzLm9uRXhpdGluZykge1xuICAgICAgdGhpcy5wcm9wcy5vbkV4aXRpbmcobm9kZSk7XG4gICAgfVxuICB9O1xuXG4gIGFkZEVuZExpc3RlbmVyID0gKF8sIG5leHQpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy50aW1lb3V0ID09PSAnYXV0bycpIHtcbiAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KG5leHQsIHRoaXMuYXV0b1RyYW5zaXRpb25EdXJhdGlvbiB8fCAwKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNvbGxhcHNlZEhlaWdodCxcbiAgICAgIGNvbXBvbmVudDogQ29tcG9uZW50LFxuICAgICAgb25FbnRlcixcbiAgICAgIG9uRW50ZXJlZCxcbiAgICAgIG9uRW50ZXJpbmcsXG4gICAgICBvbkV4aXQsXG4gICAgICBvbkV4aXRpbmcsXG4gICAgICBzdHlsZSxcbiAgICAgIHRoZW1lLFxuICAgICAgdGltZW91dCxcbiAgICAgIC4uLm90aGVyXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgb25FbnRlcj17dGhpcy5oYW5kbGVFbnRlcn1cbiAgICAgICAgb25FbnRlcmVkPXt0aGlzLmhhbmRsZUVudGVyZWR9XG4gICAgICAgIG9uRW50ZXJpbmc9e3RoaXMuaGFuZGxlRW50ZXJpbmd9XG4gICAgICAgIG9uRXhpdD17dGhpcy5oYW5kbGVFeGl0fVxuICAgICAgICBvbkV4aXRpbmc9e3RoaXMuaGFuZGxlRXhpdGluZ31cbiAgICAgICAgYWRkRW5kTGlzdGVuZXI9e3RoaXMuYWRkRW5kTGlzdGVuZXJ9XG4gICAgICAgIHRpbWVvdXQ9e3RpbWVvdXQgPT09ICdhdXRvJyA/IG51bGwgOiB0aW1lb3V0fVxuICAgICAgICB7Li4ub3RoZXJ9XG4gICAgICA+XG4gICAgICAgIHsoc3RhdGUsIGNoaWxkUHJvcHMpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENvbXBvbmVudFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICAgICAgY2xhc3Nlcy5jb250YWluZXIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgW2NsYXNzZXMuZW50ZXJlZF06IHN0YXRlID09PSAnZW50ZXJlZCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiBjb2xsYXBzZWRIZWlnaHQsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHsuLi5jaGlsZFByb3BzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9XG4gICAgICAgICAgICAgICAgcmVmPXtub2RlID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMud3JhcHBlciA9IG5vZGU7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJJbm5lcn0+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29tcG9uZW50PlxuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICA8L1RyYW5zaXRpb24+XG4gICAgKTtcbiAgfVxufVxuXG5Db2xsYXBzZS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBub2RlIHRvIGJlIGNvbGxhcHNlZC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIFVzZWZ1bCB0byBleHRlbmQgdGhlIHN0eWxlIGFwcGxpZWQgdG8gY29tcG9uZW50cy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIGNvbnRhaW5lciB3aGVuIGNvbGxhcHNlZC5cbiAgICovXG4gIGNvbGxhcHNlZEhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHJvb3Qgbm9kZS5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIERPTSBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgY29tcG9uZW50IHdpbGwgdHJhbnNpdGlvbiBpbi5cbiAgICovXG4gIGluOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25FbnRlcmVkOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uRW50ZXJpbmc6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uRXhpdGluZzogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBUaGUgZHVyYXRpb24gZm9yIHRoZSB0cmFuc2l0aW9uLCBpbiBtaWxsaXNlY29uZHMuXG4gICAqIFlvdSBtYXkgc3BlY2lmeSBhIHNpbmdsZSB0aW1lb3V0IGZvciBhbGwgdHJhbnNpdGlvbnMsIG9yIGluZGl2aWR1YWxseSB3aXRoIGFuIG9iamVjdC5cbiAgICpcbiAgICogU2V0IHRvICdhdXRvJyB0byBhdXRvbWF0aWNhbGx5IGNhbGN1bGF0ZSB0cmFuc2l0aW9uIHRpbWUgYmFzZWQgb24gaGVpZ2h0LlxuICAgKi9cbiAgdGltZW91dDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuc2hhcGUoeyBlbnRlcjogUHJvcFR5cGVzLm51bWJlciwgZXhpdDogUHJvcFR5cGVzLm51bWJlciB9KSxcbiAgICBQcm9wVHlwZXMub25lT2YoWydhdXRvJ10pLFxuICBdKSxcbn07XG5cbkNvbGxhcHNlLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29sbGFwc2VkSGVpZ2h0OiAnMHB4JyxcbiAgY29tcG9uZW50OiAnZGl2JyxcbiAgdGltZW91dDogZHVyYXRpb24uc3RhbmRhcmQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICB3aXRoVGhlbWU6IHRydWUsXG4gIG5hbWU6ICdNdWlDb2xsYXBzZScsXG59KShDb2xsYXBzZSk7XG4iXX0=

/***/ }),

/***/ 361:
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

var _warning = __webpack_require__(3);

var _warning2 = _interopRequireDefault(_warning);

var _classnames = __webpack_require__(23);

var _classnames2 = _interopRequireDefault(_classnames);

var _Collapse = __webpack_require__(292);

var _Collapse2 = _interopRequireDefault(_Collapse);

var _withStyles = __webpack_require__(18);

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      marginTop: theme.spacing.unit,
      marginLeft: 12, // half icon
      paddingLeft: theme.spacing.unit + 12, // margin + half icon
      paddingRight: theme.spacing.unit,
      borderLeft: '1px solid ' + (theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[600])
    },
    last: {
      borderLeft: 'none'
    },
    transition: {}
  };
};

function StepContent(props) {
  var active = props.active,
      alternativeLabel = props.alternativeLabel,
      children = props.children,
      classes = props.classes,
      className = props.className,
      completed = props.completed,
      last = props.last,
      optional = props.optional,
      orientation = props.orientation,
      Transition = props.transition,
      transitionDuration = props.transitionDuration,
      other = _objectWithoutProperties(props, ['active', 'alternativeLabel', 'children', 'classes', 'className', 'completed', 'last', 'optional', 'orientation', 'transition', 'transitionDuration']);

  (0, _warning2.default)(orientation === 'vertical', 'Material-UI: <StepContent /> is only designed for use with the vertical stepper.');

  return _react2.default.createElement(
    'div',
    _extends({ className: (0, _classnames2.default)(classes.root, _defineProperty({}, classes.last, last), className) }, other),
    _react2.default.createElement(
      Transition,
      {
        'in': active,
        className: classes.transition,
        timeout: transitionDuration,
        unmountOnExit: true
      },
      children
    )
  );
}

StepContent.propTypes = {
  /**
   * @ignore
   * Expands the content.
   */
  active: _propTypes2.default.bool,
  /**
   * @ignore
   * Set internally by Step when it's supplied with the alternativeLabel property.
   */
  alternativeLabel: _propTypes2.default.bool,
  /**
   * Step content.
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
   * @ignore
   */
  completed: _propTypes2.default.bool,
  /**
   * @ignore
   */
  last: _propTypes2.default.bool,
  /**
   * @ignore
   * Set internally by Step when it's supplied with the optional property.
   */
  optional: _propTypes2.default.bool,
  /**
   * @ignore
   */
  orientation: _propTypes2.default.oneOf(['horizontal', 'vertical']),
  /**
   * Collapse component.
   */
  transition: _propTypes2.default.func,
  /**
   * Adjust the duration of the content expand transition.
   * Passed as a property to the transition component.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  transitionDuration: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({ enter: _propTypes2.default.number, exit: _propTypes2.default.number }), _propTypes2.default.oneOf(['auto'])])
};

StepContent.defaultProps = {
  transition: _Collapse2.default,
  transitionDuration: 'auto'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiStepContent' })(StepContent);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcU3RlcHBlclxcU3RlcENvbnRlbnQuanMiXSwibmFtZXMiOlsic3R5bGVzIiwicm9vdCIsIm1hcmdpblRvcCIsInRoZW1lIiwic3BhY2luZyIsInVuaXQiLCJtYXJnaW5MZWZ0IiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJib3JkZXJMZWZ0IiwicGFsZXR0ZSIsInR5cGUiLCJncmV5IiwibGFzdCIsInRyYW5zaXRpb24iLCJTdGVwQ29udGVudCIsInByb3BzIiwiYWN0aXZlIiwiYWx0ZXJuYXRpdmVMYWJlbCIsImNoaWxkcmVuIiwiY2xhc3NlcyIsImNsYXNzTmFtZSIsImNvbXBsZXRlZCIsIm9wdGlvbmFsIiwib3JpZW50YXRpb24iLCJUcmFuc2l0aW9uIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwib3RoZXIiLCJwcm9wVHlwZXMiLCJib29sIiwibm9kZSIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJvbmVPZiIsImZ1bmMiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJzaGFwZSIsImVudGVyIiwiZXhpdCIsImRlZmF1bHRQcm9wcyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVPLElBQU1BLDBCQUFTLFNBQVRBLE1BQVM7QUFBQSxTQUFVO0FBQzlCQyxVQUFNO0FBQ0pDLGlCQUFXQyxNQUFNQyxPQUFOLENBQWNDLElBRHJCO0FBRUpDLGtCQUFZLEVBRlIsRUFFWTtBQUNoQkMsbUJBQWFKLE1BQU1DLE9BQU4sQ0FBY0MsSUFBZCxHQUFxQixFQUg5QixFQUdrQztBQUN0Q0csb0JBQWNMLE1BQU1DLE9BQU4sQ0FBY0MsSUFKeEI7QUFLSkksa0NBQ0VOLE1BQU1PLE9BQU4sQ0FBY0MsSUFBZCxLQUF1QixPQUF2QixHQUFpQ1IsTUFBTU8sT0FBTixDQUFjRSxJQUFkLENBQW1CLEdBQW5CLENBQWpDLEdBQTJEVCxNQUFNTyxPQUFOLENBQWNFLElBQWQsQ0FBbUIsR0FBbkIsQ0FEN0Q7QUFMSSxLQUR3QjtBQVU5QkMsVUFBTTtBQUNKSixrQkFBWTtBQURSLEtBVndCO0FBYTlCSyxnQkFBWTtBQWJrQixHQUFWO0FBQUEsQ0FBZjs7QUFnQlAsU0FBU0MsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFBQSxNQUV4QkMsTUFGd0IsR0FjdEJELEtBZHNCLENBRXhCQyxNQUZ3QjtBQUFBLE1BR3hCQyxnQkFId0IsR0FjdEJGLEtBZHNCLENBR3hCRSxnQkFId0I7QUFBQSxNQUl4QkMsUUFKd0IsR0FjdEJILEtBZHNCLENBSXhCRyxRQUp3QjtBQUFBLE1BS3hCQyxPQUx3QixHQWN0QkosS0Fkc0IsQ0FLeEJJLE9BTHdCO0FBQUEsTUFNeEJDLFNBTndCLEdBY3RCTCxLQWRzQixDQU14QkssU0FOd0I7QUFBQSxNQU94QkMsU0FQd0IsR0FjdEJOLEtBZHNCLENBT3hCTSxTQVB3QjtBQUFBLE1BUXhCVCxJQVJ3QixHQWN0QkcsS0Fkc0IsQ0FReEJILElBUndCO0FBQUEsTUFTeEJVLFFBVHdCLEdBY3RCUCxLQWRzQixDQVN4Qk8sUUFUd0I7QUFBQSxNQVV4QkMsV0FWd0IsR0FjdEJSLEtBZHNCLENBVXhCUSxXQVZ3QjtBQUFBLE1BV1pDLFVBWFksR0FjdEJULEtBZHNCLENBV3hCRixVQVh3QjtBQUFBLE1BWXhCWSxrQkFad0IsR0FjdEJWLEtBZHNCLENBWXhCVSxrQkFad0I7QUFBQSxNQWFyQkMsS0FicUIsNEJBY3RCWCxLQWRzQjs7QUFnQjFCLHlCQUNFUSxnQkFBZ0IsVUFEbEIsRUFFRSxrRkFGRjs7QUFLQSxTQUNFO0FBQUE7QUFBQSxlQUFLLFdBQVcsMEJBQVdKLFFBQVFuQixJQUFuQixzQkFBNEJtQixRQUFRUCxJQUFwQyxFQUEyQ0EsSUFBM0MsR0FBbURRLFNBQW5ELENBQWhCLElBQW1GTSxLQUFuRjtBQUNFO0FBQUMsZ0JBQUQ7QUFBQTtBQUNFLGNBQUlWLE1BRE47QUFFRSxtQkFBV0csUUFBUU4sVUFGckI7QUFHRSxpQkFBU1ksa0JBSFg7QUFJRTtBQUpGO0FBTUdQO0FBTkg7QUFERixHQURGO0FBWUQ7O0FBRURKLFlBQVlhLFNBQVosR0FBd0I7QUFDdEI7Ozs7QUFJQVgsVUFBUSxvQkFBVVksSUFMSTtBQU10Qjs7OztBQUlBWCxvQkFBa0Isb0JBQVVXLElBVk47QUFXdEI7OztBQUdBVixZQUFVLG9CQUFVVyxJQWRFO0FBZXRCOzs7QUFHQVYsV0FBUyxvQkFBVVcsTUFBVixDQUFpQkMsVUFsQko7QUFtQnRCOzs7QUFHQVgsYUFBVyxvQkFBVVksTUF0QkM7QUF1QnRCOzs7QUFHQVgsYUFBVyxvQkFBVU8sSUExQkM7QUEyQnRCOzs7QUFHQWhCLFFBQU0sb0JBQVVnQixJQTlCTTtBQStCdEI7Ozs7QUFJQU4sWUFBVSxvQkFBVU0sSUFuQ0U7QUFvQ3RCOzs7QUFHQUwsZUFBYSxvQkFBVVUsS0FBVixDQUFnQixDQUFDLFlBQUQsRUFBZSxVQUFmLENBQWhCLENBdkNTO0FBd0N0Qjs7O0FBR0FwQixjQUFZLG9CQUFVcUIsSUEzQ0E7QUE0Q3RCOzs7Ozs7QUFNQVQsc0JBQW9CLG9CQUFVVSxTQUFWLENBQW9CLENBQ3RDLG9CQUFVQyxNQUQ0QixFQUV0QyxvQkFBVUMsS0FBVixDQUFnQixFQUFFQyxPQUFPLG9CQUFVRixNQUFuQixFQUEyQkcsTUFBTSxvQkFBVUgsTUFBM0MsRUFBaEIsQ0FGc0MsRUFHdEMsb0JBQVVILEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELENBQWhCLENBSHNDLENBQXBCO0FBbERFLENBQXhCOztBQXlEQW5CLFlBQVkwQixZQUFaLEdBQTJCO0FBQ3pCM0IsZ0NBRHlCO0FBRXpCWSxzQkFBb0I7QUFGSyxDQUEzQjs7a0JBS2UsMEJBQVcxQixNQUFYLEVBQW1CLEVBQUUwQyxNQUFNLGdCQUFSLEVBQW5CLEVBQStDM0IsV0FBL0MsQyIsImZpbGUiOiJTdGVwQ29udGVudC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9ybWNxdWVuL3NsdC11aS9tYXRlcmlhbC11aSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnd2FybmluZyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBDb2xsYXBzZSBmcm9tICcuLi90cmFuc2l0aW9ucy9Db2xsYXBzZSc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5cbmV4cG9ydCBjb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQsXG4gICAgbWFyZ2luTGVmdDogMTIsIC8vIGhhbGYgaWNvblxuICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKyAxMiwgLy8gbWFyZ2luICsgaGFsZiBpY29uXG4gICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nLnVuaXQsXG4gICAgYm9yZGVyTGVmdDogYDFweCBzb2xpZCAke1xuICAgICAgdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gdGhlbWUucGFsZXR0ZS5ncmV5WzQwMF0gOiB0aGVtZS5wYWxldHRlLmdyZXlbNjAwXVxuICAgIH1gLFxuICB9LFxuICBsYXN0OiB7XG4gICAgYm9yZGVyTGVmdDogJ25vbmUnLFxuICB9LFxuICB0cmFuc2l0aW9uOiB7fSxcbn0pO1xuXG5mdW5jdGlvbiBTdGVwQ29udGVudChwcm9wcykge1xuICBjb25zdCB7XG4gICAgYWN0aXZlLFxuICAgIGFsdGVybmF0aXZlTGFiZWwsXG4gICAgY2hpbGRyZW4sXG4gICAgY2xhc3NlcyxcbiAgICBjbGFzc05hbWUsXG4gICAgY29tcGxldGVkLFxuICAgIGxhc3QsXG4gICAgb3B0aW9uYWwsXG4gICAgb3JpZW50YXRpb24sXG4gICAgdHJhbnNpdGlvbjogVHJhbnNpdGlvbixcbiAgICB0cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgLi4ub3RoZXJcbiAgfSA9IHByb3BzO1xuXG4gIHdhcm5pbmcoXG4gICAgb3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcsXG4gICAgJ01hdGVyaWFsLVVJOiA8U3RlcENvbnRlbnQgLz4gaXMgb25seSBkZXNpZ25lZCBmb3IgdXNlIHdpdGggdGhlIHZlcnRpY2FsIHN0ZXBwZXIuJyxcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzZXMucm9vdCwgeyBbY2xhc3Nlcy5sYXN0XTogbGFzdCB9LCBjbGFzc05hbWUpfSB7Li4ub3RoZXJ9PlxuICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgaW49e2FjdGl2ZX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRyYW5zaXRpb259XG4gICAgICAgIHRpbWVvdXQ9e3RyYW5zaXRpb25EdXJhdGlvbn1cbiAgICAgICAgdW5tb3VudE9uRXhpdFxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1RyYW5zaXRpb24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblN0ZXBDb250ZW50LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogRXhwYW5kcyB0aGUgY29udGVudC5cbiAgICovXG4gIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIFNldCBpbnRlcm5hbGx5IGJ5IFN0ZXAgd2hlbiBpdCdzIHN1cHBsaWVkIHdpdGggdGhlIGFsdGVybmF0aXZlTGFiZWwgcHJvcGVydHkuXG4gICAqL1xuICBhbHRlcm5hdGl2ZUxhYmVsOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIFN0ZXAgY29udGVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIFVzZWZ1bCB0byBleHRlbmQgdGhlIHN0eWxlIGFwcGxpZWQgdG8gY29tcG9uZW50cy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNvbXBsZXRlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBsYXN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogU2V0IGludGVybmFsbHkgYnkgU3RlcCB3aGVuIGl0J3Mgc3VwcGxpZWQgd2l0aCB0aGUgb3B0aW9uYWwgcHJvcGVydHkuXG4gICAqL1xuICBvcHRpb25hbDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvcmllbnRhdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddKSxcbiAgLyoqXG4gICAqIENvbGxhcHNlIGNvbXBvbmVudC5cbiAgICovXG4gIHRyYW5zaXRpb246IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQWRqdXN0IHRoZSBkdXJhdGlvbiBvZiB0aGUgY29udGVudCBleHBhbmQgdHJhbnNpdGlvbi5cbiAgICogUGFzc2VkIGFzIGEgcHJvcGVydHkgdG8gdGhlIHRyYW5zaXRpb24gY29tcG9uZW50LlxuICAgKlxuICAgKiBTZXQgdG8gJ2F1dG8nIHRvIGF1dG9tYXRpY2FsbHkgY2FsY3VsYXRlIHRyYW5zaXRpb24gdGltZSBiYXNlZCBvbiBoZWlnaHQuXG4gICAqL1xuICB0cmFuc2l0aW9uRHVyYXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLnNoYXBlKHsgZW50ZXI6IFByb3BUeXBlcy5udW1iZXIsIGV4aXQ6IFByb3BUeXBlcy5udW1iZXIgfSksXG4gICAgUHJvcFR5cGVzLm9uZU9mKFsnYXV0byddKSxcbiAgXSksXG59O1xuXG5TdGVwQ29udGVudC5kZWZhdWx0UHJvcHMgPSB7XG4gIHRyYW5zaXRpb246IENvbGxhcHNlLFxuICB0cmFuc2l0aW9uRHVyYXRpb246ICdhdXRvJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7IG5hbWU6ICdNdWlTdGVwQ29udGVudCcgfSkoU3RlcENvbnRlbnQpO1xuIl19

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