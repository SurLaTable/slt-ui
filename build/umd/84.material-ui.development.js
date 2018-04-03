webpackJsonpmaterial_ui([84],{

/***/ 311:
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

var _classnames = __webpack_require__(23);

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__(18);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _ButtonBase = __webpack_require__(105);

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // @inheritedComponent ButtonBase

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      transition: theme.transitions.create(['color', 'padding-top'], {
        duration: theme.transitions.duration.short
      }),
      paddingTop: theme.spacing.unit,
      paddingBottom: 10,
      paddingLeft: 12,
      paddingRight: 12,
      minWidth: 80,
      maxWidth: 168,
      color: theme.palette.text.secondary,
      flex: '1'
    },
    selected: {
      paddingTop: 6,
      color: theme.palette.primary.main
    },
    selectedIconOnly: {
      paddingTop: theme.spacing.unit * 2
    },
    wrapper: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      flexDirection: 'column'
    },
    label: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(12),
      opacity: 1,
      transition: 'font-size 0.2s, opacity 0.2s',
      transitionDelay: '0.1s'
    },
    labelSelected: {
      fontSize: theme.typography.pxToRem(14)
    },
    labelHidden: {
      opacity: 0,
      transitionDelay: '0s'
    }
  };
};

var BottomNavigationAction = function (_React$Component) {
  _inherits(BottomNavigationAction, _React$Component);

  function BottomNavigationAction() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BottomNavigationAction);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BottomNavigationAction.__proto__ || Object.getPrototypeOf(BottomNavigationAction)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (event) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          value = _this$props.value,
          onClick = _this$props.onClick;


      if (onChange) {
        onChange(event, value);
      }

      if (onClick) {
        onClick(event);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BottomNavigationAction, [{
    key: 'render',
    value: function render() {
      var _classNames, _classNames2;

      var _props = this.props,
          classes = _props.classes,
          classNameProp = _props.className,
          icon = _props.icon,
          label = _props.label,
          onChange = _props.onChange,
          onClick = _props.onClick,
          selected = _props.selected,
          showLabelProp = _props.showLabel,
          value = _props.value,
          other = _objectWithoutProperties(_props, ['classes', 'className', 'icon', 'label', 'onChange', 'onClick', 'selected', 'showLabel', 'value']);

      var className = (0, _classnames2.default)(classes.root, (_classNames = {}, _defineProperty(_classNames, classes.selected, selected), _defineProperty(_classNames, classes.selectedIconOnly, !showLabelProp && !selected), _classNames), classNameProp);

      var labelClassName = (0, _classnames2.default)(classes.label, (_classNames2 = {}, _defineProperty(_classNames2, classes.labelSelected, selected), _defineProperty(_classNames2, classes.labelHidden, !showLabelProp && !selected), _classNames2));

      return _react2.default.createElement(
        _ButtonBase2.default,
        _extends({ className: className, focusRipple: true, onClick: this.handleChange }, other),
        _react2.default.createElement(
          'span',
          { className: classes.wrapper },
          icon,
          _react2.default.createElement(
            'span',
            { className: labelClassName },
            label
          )
        )
      );
    }
  }]);

  return BottomNavigationAction;
}(_react2.default.Component);

BottomNavigationAction.propTypes = {
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The icon element.
   */
  icon: _propTypes2.default.node,
  /**
   * The label element.
   */
  label: _propTypes2.default.node,
  /**
   * @ignore
   */
  onChange: _propTypes2.default.func,
  /**
   * @ignore
   */
  onClick: _propTypes2.default.func,
  /**
   * @ignore
   */
  selected: _propTypes2.default.bool,
  /**
   * If `true`, the BottomNavigationAction will show its label.
   */
  showLabel: _propTypes2.default.bool,
  /**
   * You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value: _propTypes2.default.any
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiBottomNavigationAction' })(BottomNavigationAction);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcQm90dG9tTmF2aWdhdGlvblxcQm90dG9tTmF2aWdhdGlvbkFjdGlvbi5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJyb290IiwidHJhbnNpdGlvbiIsInRoZW1lIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJkdXJhdGlvbiIsInNob3J0IiwicGFkZGluZ1RvcCIsInNwYWNpbmciLCJ1bml0IiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwibWluV2lkdGgiLCJtYXhXaWR0aCIsImNvbG9yIiwicGFsZXR0ZSIsInRleHQiLCJzZWNvbmRhcnkiLCJmbGV4Iiwic2VsZWN0ZWQiLCJwcmltYXJ5IiwibWFpbiIsInNlbGVjdGVkSWNvbk9ubHkiLCJ3cmFwcGVyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwiZmxleERpcmVjdGlvbiIsImxhYmVsIiwiZm9udEZhbWlseSIsInR5cG9ncmFwaHkiLCJmb250U2l6ZSIsInB4VG9SZW0iLCJvcGFjaXR5IiwidHJhbnNpdGlvbkRlbGF5IiwibGFiZWxTZWxlY3RlZCIsImxhYmVsSGlkZGVuIiwiQm90dG9tTmF2aWdhdGlvbkFjdGlvbiIsImhhbmRsZUNoYW5nZSIsInByb3BzIiwib25DaGFuZ2UiLCJ2YWx1ZSIsIm9uQ2xpY2siLCJldmVudCIsImNsYXNzZXMiLCJjbGFzc05hbWVQcm9wIiwiY2xhc3NOYW1lIiwiaWNvbiIsInNob3dMYWJlbFByb3AiLCJzaG93TGFiZWwiLCJvdGhlciIsImxhYmVsQ2xhc3NOYW1lIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsIm5vZGUiLCJmdW5jIiwiYm9vbCIsImFueSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7K2VBTkE7O0FBUU8sSUFB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bUJBQVksV0FBVzRCLFNBQXZCLEVBQWtDLGlCQUFsQyxFQUE4QyxTQUFTLEtBQUtSLFlBQTVELElBQThFWSxLQUE5RTtBQUNFO0FBQUE7QUFBQSxZQUFNLFdBQVdOLFFBQVF0QixPQUF6QjtBQUNHeUIsY0FESDtBQUVFO0FBQUE7QUFBQSxjQUFNLFdBQVdJLGNBQWpCO0FBQWtDdkI7QUFBbEM7QUFGRjtBQURGLE9BREY7QUFRRDs7OztFQWpEa0MsZ0JBQU13QixTOztBQW9EM0NmLHVCQUF1QmdCLFNBQXZCLEdBQW1DO0FBQ2pDOzs7QUFHQVQsV0FBUyxvQkFBVVUsTUFBVixDQUFpQkMsVUFKTztBQUtqQzs7O0FBR0FULGFBQVcsb0JBQVVVLE1BUlk7QUFTakM7OztBQUdBVCxRQUFNLG9CQUFVVSxJQVppQjtBQWFqQzs7O0FBR0E3QixTQUFPLG9CQUFVNkIsSUFoQmdCO0FBaUJqQzs7O0FBR0FqQixZQUFVLG9CQUFVa0IsSUFwQmE7QUFxQmpDOzs7QUFHQWhCLFdBQVMsb0JBQVVnQixJQXhCYztBQXlCakM7OztBQUdBeEMsWUFBVSxvQkFBVXlDLElBNUJhO0FBNkJqQzs7O0FBR0FWLGFBQVcsb0JBQVVVLElBaENZO0FBaUNqQzs7O0FBR0FsQixTQUFPLG9CQUFVbUI7QUFwQ2dCLENBQW5DOztrQkF1Q2UsMEJBQVcvRCxNQUFYLEVBQW1CLEVBQUVnRSxNQUFNLDJCQUFSLEVBQW5CLEVBQTBEeEIsc0JBQTFELEMiLCJmaWxlIjoiQm90dG9tTmF2aWdhdGlvbkFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9ybWNxdWVuL3NsdC11aS9tYXRlcmlhbC11aSIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBpbmhlcml0ZWRDb21wb25lbnQgQnV0dG9uQmFzZVxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IEJ1dHRvbkJhc2UgZnJvbSAnLi4vQnV0dG9uQmFzZSc7XG5cbmV4cG9ydCBjb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnY29sb3InLCAncGFkZGluZy10b3AnXSwge1xuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLnNob3J0LFxuICAgIH0pLFxuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcudW5pdCxcbiAgICBwYWRkaW5nQm90dG9tOiAxMCxcbiAgICBwYWRkaW5nTGVmdDogMTIsXG4gICAgcGFkZGluZ1JpZ2h0OiAxMixcbiAgICBtaW5XaWR0aDogODAsXG4gICAgbWF4V2lkdGg6IDE2OCxcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcbiAgICBmbGV4OiAnMScsXG4gIH0sXG4gIHNlbGVjdGVkOiB7XG4gICAgcGFkZGluZ1RvcDogNixcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gIH0sXG4gIHNlbGVjdGVkSWNvbk9ubHk6IHtcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAyLFxuICB9LFxuICB3cmFwcGVyOiB7XG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgfSxcbiAgbGFiZWw6IHtcbiAgICBmb250RmFtaWx5OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHksXG4gICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxMiksXG4gICAgb3BhY2l0eTogMSxcbiAgICB0cmFuc2l0aW9uOiAnZm9udC1zaXplIDAuMnMsIG9wYWNpdHkgMC4ycycsXG4gICAgdHJhbnNpdGlvbkRlbGF5OiAnMC4xcycsXG4gIH0sXG4gIGxhYmVsU2VsZWN0ZWQ6IHtcbiAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5weFRvUmVtKDE0KSxcbiAgfSxcbiAgbGFiZWxIaWRkZW46IHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIHRyYW5zaXRpb25EZWxheTogJzBzJyxcbiAgfSxcbn0pO1xuXG5jbGFzcyBCb3R0b21OYXZpZ2F0aW9uQWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHZhbHVlLCBvbkNsaWNrIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShldmVudCwgdmFsdWUpO1xuICAgIH1cblxuICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICBvbkNsaWNrKGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzZXMsXG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVByb3AsXG4gICAgICBpY29uLFxuICAgICAgbGFiZWwsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIG9uQ2xpY2ssXG4gICAgICBzZWxlY3RlZCxcbiAgICAgIHNob3dMYWJlbDogc2hvd0xhYmVsUHJvcCxcbiAgICAgIHZhbHVlLFxuICAgICAgLi4ub3RoZXJcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoXG4gICAgICBjbGFzc2VzLnJvb3QsXG4gICAgICB7XG4gICAgICAgIFtjbGFzc2VzLnNlbGVjdGVkXTogc2VsZWN0ZWQsXG4gICAgICAgIFtjbGFzc2VzLnNlbGVjdGVkSWNvbk9ubHldOiAhc2hvd0xhYmVsUHJvcCAmJiAhc2VsZWN0ZWQsXG4gICAgICB9LFxuICAgICAgY2xhc3NOYW1lUHJvcCxcbiAgICApO1xuXG4gICAgY29uc3QgbGFiZWxDbGFzc05hbWUgPSBjbGFzc05hbWVzKGNsYXNzZXMubGFiZWwsIHtcbiAgICAgIFtjbGFzc2VzLmxhYmVsU2VsZWN0ZWRdOiBzZWxlY3RlZCxcbiAgICAgIFtjbGFzc2VzLmxhYmVsSGlkZGVuXTogIXNob3dMYWJlbFByb3AgJiYgIXNlbGVjdGVkLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCdXR0b25CYXNlIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBmb2N1c1JpcHBsZSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNoYW5nZX0gey4uLm90aGVyfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9PlxuICAgICAgICAgIHtpY29ufVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17bGFiZWxDbGFzc05hbWV9PntsYWJlbH08L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvQnV0dG9uQmFzZT5cbiAgICApO1xuICB9XG59XG5cbkJvdHRvbU5hdmlnYXRpb25BY3Rpb24ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVXNlZnVsIHRvIGV4dGVuZCB0aGUgc3R5bGUgYXBwbGllZCB0byBjb21wb25lbnRzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogVGhlIGljb24gZWxlbWVudC5cbiAgICovXG4gIGljb246IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICogVGhlIGxhYmVsIGVsZW1lbnQuXG4gICAqL1xuICBsYWJlbDogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIEJvdHRvbU5hdmlnYXRpb25BY3Rpb24gd2lsbCBzaG93IGl0cyBsYWJlbC5cbiAgICovXG4gIHNob3dMYWJlbDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBZb3UgY2FuIHByb3ZpZGUgeW91ciBvd24gdmFsdWUuIE90aGVyd2lzZSwgd2UgZmFsbGJhY2sgdG8gdGhlIGNoaWxkIHBvc2l0aW9uIGluZGV4LlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywgeyBuYW1lOiAnTXVpQm90dG9tTmF2aWdhdGlvbkFjdGlvbicgfSkoQm90dG9tTmF2aWdhdGlvbkFjdGlvbik7XG4iXX0=

/***/ })

});