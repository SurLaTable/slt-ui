webpackJsonpmaterial_ui([31],{

/***/ 363:
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

var _helpers = __webpack_require__(97);

var _SwitchBase = __webpack_require__(387);

var _SwitchBase2 = _interopRequireDefault(_SwitchBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'inline-flex',
      width: 62,
      position: 'relative',
      flexShrink: 0,
      // For correct alignment with the text.
      verticalAlign: 'middle'
    },
    bar: {
      borderRadius: 14 / 2,
      display: 'block',
      position: 'absolute',
      width: 34,
      height: 14,
      top: '50%',
      marginTop: -14 / 2,
      left: '50%',
      marginLeft: -17,
      transition: theme.transitions.create(['opacity', 'background-color'], {
        duration: theme.transitions.duration.shortest
      }),
      backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white,
      opacity: theme.palette.type === 'light' ? 0.38 : 0.3
    },
    icon: {
      boxShadow: theme.shadows[1],
      backgroundColor: 'currentColor',
      width: 20,
      height: 20,
      borderRadius: '50%'
    },
    iconChecked: {
      boxShadow: theme.shadows[2]
    },
    // For SwitchBase
    default: {
      zIndex: 1,
      color: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[400],
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    checked: {
      transform: 'translateX(14px)',
      '& + $bar': {
        opacity: 0.5
      }
    },
    checkedPrimary: {
      color: theme.palette.primary.main,
      '& + $bar': {
        backgroundColor: theme.palette.primary.main
      }
    },
    checkedSecondary: {
      color: theme.palette.secondary.main,
      '& + $bar': {
        backgroundColor: theme.palette.secondary.main
      }
    },
    disabled: {
      color: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800],
      '& + $bar': {
        backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white,
        opacity: theme.palette.type === 'light' ? 0.12 : 0.1
      },
      '& $icon': {
        boxShadow: theme.shadows[1]
      }
    }
  };
};

function Switch(props) {
  var classes = props.classes,
      className = props.className,
      color = props.color,
      other = _objectWithoutProperties(props, ['classes', 'className', 'color']);

  var icon = _react2.default.createElement('span', { className: classes.icon });
  var checkedIcon = _react2.default.createElement('span', { className: (0, _classnames2.default)(classes.icon, classes.iconChecked) });
  var checkedClass = (0, _classnames2.default)(classes.checked, _defineProperty({}, classes['checked' + (0, _helpers.capitalize)(color)], color !== 'default'));

  return _react2.default.createElement(
    'span',
    { className: (0, _classnames2.default)(classes.root, className) },
    _react2.default.createElement(_SwitchBase2.default, _extends({
      icon: icon,
      classes: {
        default: classes.default,
        checked: checkedClass,
        disabled: classes.disabled
      },
      checkedIcon: checkedIcon
    }, other)),
    _react2.default.createElement('span', { className: classes.bar })
  );
}

Switch.propTypes = {
  /**
   * If `true`, the component is checked.
   */
  checked: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes2.default.oneOf(['primary', 'secondary', 'default']),
  /**
   * @ignore
   */
  defaultChecked: _propTypes2.default.bool,
  /**
   * If `true`, the switch will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: _propTypes2.default.bool,
  /**
   * The icon to display when the component is unchecked.
   */
  icon: _propTypes2.default.node,
  /**
   * The id of the `input` element.
   */
  id: _propTypes2.default.string,
  /**
   * Properties applied to the `input` element.
   */
  inputProps: _propTypes2.default.object,
  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: _propTypes2.default.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.checked`.
   * @param {boolean} checked The `checked` value of the switch
   */
  onChange: _propTypes2.default.func,
  /**
   * The input component property `type`.
   */
  type: _propTypes2.default.string,
  /**
   * The value of the component.
   */
  value: _propTypes2.default.string
};

Switch.defaultProps = {
  color: 'secondary'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiSwitch' })(Switch);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcU3dpdGNoXFxTd2l0Y2guanMiXSwibmFtZXMiOlsic3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJ3aWR0aCIsInBvc2l0aW9uIiwiZmxleFNocmluayIsInZlcnRpY2FsQWxpZ24iLCJiYXIiLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJ0b3AiLCJtYXJnaW5Ub3AiLCJsZWZ0IiwibWFyZ2luTGVmdCIsInRyYW5zaXRpb24iLCJ0aGVtZSIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZHVyYXRpb24iLCJzaG9ydGVzdCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJ0eXBlIiwiY29tbW9uIiwiYmxhY2siLCJ3aGl0ZSIsIm9wYWNpdHkiLCJpY29uIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImljb25DaGVja2VkIiwiZGVmYXVsdCIsInpJbmRleCIsImNvbG9yIiwiZ3JleSIsImNoZWNrZWQiLCJ0cmFuc2Zvcm0iLCJjaGVja2VkUHJpbWFyeSIsInByaW1hcnkiLCJtYWluIiwiY2hlY2tlZFNlY29uZGFyeSIsInNlY29uZGFyeSIsImRpc2FibGVkIiwiU3dpdGNoIiwicHJvcHMiLCJjbGFzc2VzIiwiY2xhc3NOYW1lIiwib3RoZXIiLCJjaGVja2VkSWNvbiIsImNoZWNrZWRDbGFzcyIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsImJvb2wiLCJzdHJpbmciLCJub2RlIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIm9uZU9mIiwiZGVmYXVsdENoZWNrZWQiLCJkaXNhYmxlUmlwcGxlIiwiaWQiLCJpbnB1dFByb3BzIiwiaW5wdXRSZWYiLCJmdW5jIiwib25DaGFuZ2UiLCJ2YWx1ZSIsImRlZmF1bHRQcm9wcyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSwwQkFBUyxTQUFUQSxNQUFTO0FBQUEsU0FBVTtBQUM5QkMsVUFBTTtBQUNKQyxlQUFTLGFBREw7QUFFSkMsYUFBTyxFQUZIO0FBR0pDLGdCQUFVLFVBSE47QUFJSkMsa0JBQVksQ0FKUjtBQUtKO0FBQ0FDLHFCQUFlO0FBTlgsS0FEd0I7QUFTOUJDLFNBQUs7QUFDSEMsb0JBQWMsS0FBSyxDQURoQjtBQUVITixlQUFTLE9BRk47QUFHSEUsZ0JBQVUsVUFIUDtBQUlIRCxhQUFPLEVBSko7QUFLSE0sY0FBUSxFQUxMO0FBTUhDLFdBQUssS0FORjtBQU9IQyxpQkFBVyxDQUFDLEVBQUQsR0FBTSxDQVBkO0FBUUhDLFlBQU0sS0FSSDtBQVNIQyxrQkFBWSxDQUFDLEVBVFY7QUFVSEMsa0JBQVlDLE1BQU1DLFdBQU4sQ0FBa0JDLE1BQWxCLENBQXlCLENBQUMsU0FBRCxFQUFZLGtCQUFaLENBQXpCLEVBQTBEO0FBQ3BFQyxrQkFBVUgsTUFBTUMsV0FBTixDQUFrQkUsUUFBbEIsQ0FBMkJDO0FBRCtCLE9BQTFELENBVlQ7QUFhSEMsdUJBQ0VMLE1BQU1NLE9BQU4sQ0FBY0MsSUFBZCxLQUF1QixPQUF2QixHQUFpQ1AsTUFBTU0sT0FBTixDQUFjRSxNQUFkLENBQXFCQyxLQUF0RCxHQUE4RFQsTUFBTU0sT0FBTixDQUFjRSxNQUFkLENBQXFCRSxLQWRsRjtBQWVIQyxlQUFTWCxNQUFNTSxPQUFOLENBQWNDLElBQWQsS0FBdUIsT0FBdkIsR0FBaUMsSUFBakMsR0FBd0M7QUFmOUMsS0FUeUI7QUEwQjlCSyxVQUFNO0FBQ0pDLGlCQUFXYixNQUFNYyxPQUFOLENBQWMsQ0FBZCxDQURQO0FBRUpULHVCQUFpQixjQUZiO0FBR0pqQixhQUFPLEVBSEg7QUFJSk0sY0FBUSxFQUpKO0FBS0pELG9CQUFjO0FBTFYsS0ExQndCO0FBaUM5QnNCLGlCQUFhO0FBQ1hGLGlCQUFXYixNQUFNYyxPQUFOLENBQWMsQ0FBZDtBQURBLEtBakNpQjtBQW9DOUI7QUFDQUUsYUFBUztBQUNQQyxjQUFRLENBREQ7QUFFUEMsYUFBT2xCLE1BQU1NLE9BQU4sQ0FBY0MsSUFBZCxLQUF1QixPQUF2QixHQUFpQ1AsTUFBTU0sT0FBTixDQUFjYSxJQUFkLENBQW1CLEVBQW5CLENBQWpDLEdBQTBEbkIsTUFBTU0sT0FBTixDQUFjYSxJQUFkLENBQW1CLEdBQW5CLENBRjFEO0FBR1BwQixrQkFBWUMsTUFBTUMsV0FBTixDQUFrQkMsTUFBbEIsQ0FBeUIsV0FBekIsRUFBc0M7QUFDaERDLGtCQUFVSCxNQUFNQyxXQUFOLENBQWtCRSxRQUFsQixDQUEyQkM7QUFEVyxPQUF0QztBQUhMLEtBckNxQjtBQTRDOUJnQixhQUFTO0FBQ1BDLGlCQUFXLGtCQURKO0FBRVAsa0JBQVk7QUFDVlYsaUJBQVM7QUFEQztBQUZMLEtBNUNxQjtBQWtEOUJXLG9CQUFnQjtBQUNkSixhQUFPbEIsTUFBTU0sT0FBTixDQUFjaUIsT0FBZCxDQUFzQkMsSUFEZjtBQUVkLGtCQUFZO0FBQ1ZuQix5QkFBaUJMLE1BQU1NLE9BQU4sQ0FBY2lCLE9BQWQsQ0FBc0JDO0FBRDdCO0FBRkUsS0FsRGM7QUF3RDlCQyxzQkFBa0I7QUFDaEJQLGFBQU9sQixNQUFNTSxPQUFOLENBQWNvQixTQUFkLENBQXdCRixJQURmO0FBRWhCLGtCQUFZO0FBQ1ZuQix5QkFBaUJMLE1BQU1NLE9BQU4sQ0FBY29CLFNBQWQsQ0FBd0JGO0FBRC9CO0FBRkksS0F4RFk7QUE4RDlCRyxjQUFVO0FBQ1JULGFBQU9sQixNQUFNTSxPQUFOLENBQWNDLElBQWQsS0FBdUIsT0FBdkIsR0FBaUNQLE1BQU1NLE9BQU4sQ0FBY2EsSUFBZCxDQUFtQixHQUFuQixDQUFqQyxHQUEyRG5CLE1BQU1NLE9BQU4sQ0FBY2EsSUFBZCxDQUFtQixHQUFuQixDQUQxRDtBQUVSLGtCQUFZO0FBQ1ZkLHlCQUNFTCxNQUFNTSxPQUFOLENBQWNDLElBQWQsS0FBdUIsT0FBdkIsR0FBaUNQLE1BQU1NLE9BQU4sQ0FBY0UsTUFBZCxDQUFxQkMsS0FBdEQsR0FBOERULE1BQU1NLE9BQU4sQ0FBY0UsTUFBZCxDQUFxQkUsS0FGM0U7QUFHVkMsaUJBQVNYLE1BQU1NLE9BQU4sQ0FBY0MsSUFBZCxLQUF1QixPQUF2QixHQUFpQyxJQUFqQyxHQUF3QztBQUh2QyxPQUZKO0FBT1IsaUJBQVc7QUFDVE0sbUJBQVdiLE1BQU1jLE9BQU4sQ0FBYyxDQUFkO0FBREY7QUFQSDtBQTlEb0IsR0FBVjtBQUFBLENBQWY7O0FBMkVQLFNBQVNjLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQUEsTUFDYkMsT0FEYSxHQUMyQkQsS0FEM0IsQ0FDYkMsT0FEYTtBQUFBLE1BQ0pDLFNBREksR0FDMkJGLEtBRDNCLENBQ0pFLFNBREk7QUFBQSxNQUNPYixLQURQLEdBQzJCVyxLQUQzQixDQUNPWCxLQURQO0FBQUEsTUFDaUJjLEtBRGpCLDRCQUMyQkgsS0FEM0I7O0FBRXJCLE1BQU1qQixPQUFPLHdDQUFNLFdBQVdrQixRQUFRbEIsSUFBekIsR0FBYjtBQUNBLE1BQU1xQixjQUFjLHdDQUFNLFdBQVcsMEJBQVdILFFBQVFsQixJQUFuQixFQUF5QmtCLFFBQVFmLFdBQWpDLENBQWpCLEdBQXBCO0FBQ0EsTUFBTW1CLGVBQWUsMEJBQVdKLFFBQVFWLE9BQW5CLHNCQUNsQlUsb0JBQWtCLHlCQUFXWixLQUFYLENBQWxCLENBRGtCLEVBQ3VCQSxVQUFVLFNBRGpDLEVBQXJCOztBQUlBLFNBQ0U7QUFBQTtBQUFBLE1BQU0sV0FBVywwQkFBV1ksUUFBUTVDLElBQW5CLEVBQXlCNkMsU0FBekIsQ0FBakI7QUFDRTtBQUNFLFlBQU1uQixJQURSO0FBRUUsZUFBUztBQUNQSSxpQkFBU2MsUUFBUWQsT0FEVjtBQUVQSSxpQkFBU2MsWUFGRjtBQUdQUCxrQkFBVUcsUUFBUUg7QUFIWCxPQUZYO0FBT0UsbUJBQWFNO0FBUGYsT0FRTUQsS0FSTixFQURGO0FBV0UsNENBQU0sV0FBV0YsUUFBUXRDLEdBQXpCO0FBWEYsR0FERjtBQWVEOztBQUVEb0MsT0FBT08sU0FBUCxHQUFtQjtBQUNqQjs7O0FBR0FmLFdBQVMsb0JBQVVnQixTQUFWLENBQW9CLENBQUMsb0JBQVVDLElBQVgsRUFBaUIsb0JBQVVDLE1BQTNCLENBQXBCLENBSlE7QUFLakI7OztBQUdBTCxlQUFhLG9CQUFVTSxJQVJOO0FBU2pCOzs7QUFHQVQsV0FBUyxvQkFBVVUsTUFBVixDQUFpQkMsVUFaVDtBQWFqQjs7O0FBR0FWLGFBQVcsb0JBQVVPLE1BaEJKO0FBaUJqQjs7O0FBR0FwQixTQUFPLG9CQUFVd0IsS0FBVixDQUFnQixDQUFDLFNBQUQsRUFBWSxXQUFaLEVBQXlCLFNBQXpCLENBQWhCLENBcEJVO0FBcUJqQjs7O0FBR0FDLGtCQUFnQixvQkFBVU4sSUF4QlQ7QUF5QmpCOzs7QUFHQVYsWUFBVSxvQkFBVVUsSUE1Qkg7QUE2QmpCOzs7QUFHQU8saUJBQWUsb0JBQVVQLElBaENSO0FBaUNqQjs7O0FBR0F6QixRQUFNLG9CQUFVMkIsSUFwQ0M7QUFxQ2pCOzs7QUFHQU0sTUFBSSxvQkFBVVAsTUF4Q0c7QUF5Q2pCOzs7QUFHQVEsY0FBWSxvQkFBVU4sTUE1Q0w7QUE2Q2pCOzs7QUFHQU8sWUFBVSxvQkFBVUMsSUFoREg7QUFpRGpCOzs7Ozs7O0FBT0FDLFlBQVUsb0JBQVVELElBeERIO0FBeURqQjs7O0FBR0F6QyxRQUFNLG9CQUFVK0IsTUE1REM7QUE2RGpCOzs7QUFHQVksU0FBTyxvQkFBVVo7QUFoRUEsQ0FBbkI7O0FBbUVBVixPQUFPdUIsWUFBUCxHQUFzQjtBQUNwQmpDLFNBQU87QUFEYSxDQUF0Qjs7a0JBSWUsMEJBQVdqQyxNQUFYLEVBQW1CLEVBQUVtRSxNQUFNLFdBQVIsRUFBbkIsRUFBMEN4QixNQUExQyxDIiwiZmlsZSI6IlN3aXRjaC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9ybWNxdWVuL3NsdC11aS9tYXRlcmlhbC11aSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgeyBjYXBpdGFsaXplIH0gZnJvbSAnLi4vdXRpbHMvaGVscGVycyc7XG5pbXBvcnQgU3dpdGNoQmFzZSBmcm9tICcuLi9pbnRlcm5hbC9Td2l0Y2hCYXNlJztcblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgIHdpZHRoOiA2MixcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIC8vIEZvciBjb3JyZWN0IGFsaWdubWVudCB3aXRoIHRoZSB0ZXh0LlxuICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICB9LFxuICBiYXI6IHtcbiAgICBib3JkZXJSYWRpdXM6IDE0IC8gMixcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHdpZHRoOiAzNCxcbiAgICBoZWlnaHQ6IDE0LFxuICAgIHRvcDogJzUwJScsXG4gICAgbWFyZ2luVG9wOiAtMTQgLyAyLFxuICAgIGxlZnQ6ICc1MCUnLFxuICAgIG1hcmdpbkxlZnQ6IC0xNyxcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWydvcGFjaXR5JywgJ2JhY2tncm91bmQtY29sb3InXSwge1xuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLnNob3J0ZXN0LFxuICAgIH0pLFxuICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgIHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/IHRoZW1lLnBhbGV0dGUuY29tbW9uLmJsYWNrIDogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXG4gICAgb3BhY2l0eTogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gMC4zOCA6IDAuMyxcbiAgfSxcbiAgaWNvbjoge1xuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgIHdpZHRoOiAyMCxcbiAgICBoZWlnaHQ6IDIwLFxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gIH0sXG4gIGljb25DaGVja2VkOiB7XG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzJdLFxuICB9LFxuICAvLyBGb3IgU3dpdGNoQmFzZVxuICBkZWZhdWx0OiB7XG4gICAgekluZGV4OiAxLFxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyB0aGVtZS5wYWxldHRlLmdyZXlbNTBdIDogdGhlbWUucGFsZXR0ZS5ncmV5WzQwMF0sXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd0cmFuc2Zvcm0nLCB7XG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uc2hvcnRlc3QsXG4gICAgfSksXG4gIH0sXG4gIGNoZWNrZWQ6IHtcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDE0cHgpJyxcbiAgICAnJiArICRiYXInOiB7XG4gICAgICBvcGFjaXR5OiAwLjUsXG4gICAgfSxcbiAgfSxcbiAgY2hlY2tlZFByaW1hcnk6IHtcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgJyYgKyAkYmFyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICB9LFxuICB9LFxuICBjaGVja2VkU2Vjb25kYXJ5OiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXG4gICAgJyYgKyAkYmFyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxuICAgIH0sXG4gIH0sXG4gIGRpc2FibGVkOiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/IHRoZW1lLnBhbGV0dGUuZ3JleVs0MDBdIDogdGhlbWUucGFsZXR0ZS5ncmV5WzgwMF0sXG4gICAgJyYgKyAkYmFyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayA6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxuICAgICAgb3BhY2l0eTogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gMC4xMiA6IDAuMSxcbiAgICB9LFxuICAgICcmICRpY29uJzoge1xuICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxuICAgIH0sXG4gIH0sXG59KTtcblxuZnVuY3Rpb24gU3dpdGNoKHByb3BzKSB7XG4gIGNvbnN0IHsgY2xhc3NlcywgY2xhc3NOYW1lLCBjb2xvciwgLi4ub3RoZXIgfSA9IHByb3BzO1xuICBjb25zdCBpY29uID0gPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259IC8+O1xuICBjb25zdCBjaGVja2VkSWNvbiA9IDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc2VzLmljb24sIGNsYXNzZXMuaWNvbkNoZWNrZWQpfSAvPjtcbiAgY29uc3QgY2hlY2tlZENsYXNzID0gY2xhc3NOYW1lcyhjbGFzc2VzLmNoZWNrZWQsIHtcbiAgICBbY2xhc3Nlc1tgY2hlY2tlZCR7Y2FwaXRhbGl6ZShjb2xvcil9YF1dOiBjb2xvciAhPT0gJ2RlZmF1bHQnLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9PlxuICAgICAgPFN3aXRjaEJhc2VcbiAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgIGRlZmF1bHQ6IGNsYXNzZXMuZGVmYXVsdCxcbiAgICAgICAgICBjaGVja2VkOiBjaGVja2VkQ2xhc3MsXG4gICAgICAgICAgZGlzYWJsZWQ6IGNsYXNzZXMuZGlzYWJsZWQsXG4gICAgICAgIH19XG4gICAgICAgIGNoZWNrZWRJY29uPXtjaGVja2VkSWNvbn1cbiAgICAgICAgey4uLm90aGVyfVxuICAgICAgLz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5iYXJ9IC8+XG4gICAgPC9zcGFuPlxuICApO1xufVxuXG5Td2l0Y2gucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgY29tcG9uZW50IGlzIGNoZWNrZWQuXG4gICAqL1xuICBjaGVja2VkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICAvKipcbiAgICogVGhlIGljb24gdG8gZGlzcGxheSB3aGVuIHRoZSBjb21wb25lbnQgaXMgY2hlY2tlZC5cbiAgICovXG4gIGNoZWNrZWRJY29uOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIFVzZWZ1bCB0byBleHRlbmQgdGhlIHN0eWxlIGFwcGxpZWQgdG8gY29tcG9uZW50cy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgY29tcG9uZW50LiBJdCBzdXBwb3J0cyB0aG9zZSB0aGVtZSBjb2xvcnMgdGhhdCBtYWtlIHNlbnNlIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ3NlY29uZGFyeScsICdkZWZhdWx0J10pLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgZGVmYXVsdENoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgc3dpdGNoIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSByaXBwbGUgZWZmZWN0IHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlUmlwcGxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIFRoZSBpY29uIHRvIGRpc3BsYXkgd2hlbiB0aGUgY29tcG9uZW50IGlzIHVuY2hlY2tlZC5cbiAgICovXG4gIGljb246IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICogVGhlIGlkIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIFByb3BlcnRpZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIFVzZSB0aGF0IHByb3BlcnR5IHRvIHBhc3MgYSByZWYgY2FsbGJhY2sgdG8gdGhlIG5hdGl2ZSBpbnB1dCBjb21wb25lbnQuXG4gICAqL1xuICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBzdGF0ZSBpcyBjaGFuZ2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqIFlvdSBjYW4gcHVsbCBvdXQgdGhlIG5ldyB2YWx1ZSBieSBhY2Nlc3NpbmcgYGV2ZW50LnRhcmdldC5jaGVja2VkYC5cbiAgICogQHBhcmFtIHtib29sZWFufSBjaGVja2VkIFRoZSBgY2hlY2tlZGAgdmFsdWUgb2YgdGhlIHN3aXRjaFxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogVGhlIGlucHV0IGNvbXBvbmVudCBwcm9wZXJ0eSBgdHlwZWAuXG4gICAqL1xuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogVGhlIHZhbHVlIG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cblN3aXRjaC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbG9yOiAnc2Vjb25kYXJ5Jyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7IG5hbWU6ICdNdWlTd2l0Y2gnIH0pKFN3aXRjaCk7XG4iXX0=

/***/ }),

/***/ 387:
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

var _IconButton = __webpack_require__(111);

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // @inheritedComponent IconButton

var styles = exports.styles = {
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    transition: 'none'
  },
  input: {
    cursor: 'inherit',
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0
  },
  default: {},
  checked: {},
  disabled: {}
};

/**
 * @ignore - internal component.
 */

var SwitchBase = function (_React$Component) {
  _inherits(SwitchBase, _React$Component);

  function SwitchBase(props, context) {
    _classCallCheck(this, SwitchBase);

    var _this = _possibleConstructorReturn(this, (SwitchBase.__proto__ || Object.getPrototypeOf(SwitchBase)).call(this, props, context));

    _this.state = {};
    _this.input = null;
    _this.isControlled = null;

    _this.handleInputChange = function (event) {
      var checked = event.target.checked;

      if (!_this.isControlled) {
        _this.setState({ checked: checked });
      }

      if (_this.props.onChange) {
        _this.props.onChange(event, checked);
      }
    };

    _this.isControlled = props.checked != null;
    if (!_this.isControlled) {
      // not controlled, use internal state
      _this.state.checked = props.defaultChecked !== undefined ? props.defaultChecked : false;
    }
    return _this;
  }

  _createClass(SwitchBase, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          checkedProp = _props.checked,
          checkedIcon = _props.checkedIcon,
          classes = _props.classes,
          classNameProp = _props.className,
          disabledProp = _props.disabled,
          iconProp = _props.icon,
          id = _props.id,
          inputProps = _props.inputProps,
          inputRef = _props.inputRef,
          name = _props.name,
          onChange = _props.onChange,
          tabIndex = _props.tabIndex,
          type = _props.type,
          value = _props.value,
          other = _objectWithoutProperties(_props, ['checked', 'checkedIcon', 'classes', 'className', 'disabled', 'icon', 'id', 'inputProps', 'inputRef', 'name', 'onChange', 'tabIndex', 'type', 'value']);

      var muiFormControl = this.context.muiFormControl;

      var disabled = disabledProp;

      if (muiFormControl) {
        if (typeof disabled === 'undefined') {
          disabled = muiFormControl.disabled;
        }
      }

      var checked = this.isControlled ? checkedProp : this.state.checked;
      var className = (0, _classnames2.default)(classes.root, classes.default, classNameProp, (_classNames = {}, _defineProperty(_classNames, classes.checked, checked), _defineProperty(_classNames, classes.disabled, disabled), _classNames));

      var icon = checked ? checkedIcon : iconProp;

      var hasLabelFor = type === 'checkbox' || type === 'radio';

      return _react2.default.createElement(
        _IconButton2.default,
        _extends({
          'data-mui-test': 'SwitchBase',
          component: 'span',
          className: className,
          disabled: disabled,
          tabIndex: null,
          role: undefined
        }, other),
        icon,
        _react2.default.createElement('input', _extends({
          id: hasLabelFor && id,
          type: type,
          name: name,
          checked: checked,
          onChange: this.handleInputChange,
          className: classes.input,
          disabled: disabled,
          tabIndex: tabIndex,
          value: value,
          ref: inputRef
        }, inputProps))
      );
    }
  }]);

  return SwitchBase;
}(_react2.default.Component);

// NB: If changed, please update Checkbox, Switch and Radio
// so that the API documentation is updated.


SwitchBase.propTypes = {
  /**
   * If `true`, the component is checked.
   */
  checked: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: _propTypes2.default.node.isRequired,
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
  defaultChecked: _propTypes2.default.bool,
  /**
   * If `true`, the switch will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: _propTypes2.default.bool,
  /**
   * The icon to display when the component is unchecked.
   */
  icon: _propTypes2.default.node.isRequired,
  /**
   * The id of the `input` element.
   */
  id: _propTypes2.default.string,
  /**
   * If `true`, the component appears indeterminate.
   */
  indeterminate: _propTypes2.default.bool,
  /**
   * The icon to display when the component is indeterminate.
   */
  indeterminateIcon: _propTypes2.default.node,
  /**
   * Properties applied to the `input` element.
   */
  inputProps: _propTypes2.default.object,
  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: _propTypes2.default.func,
  /*
   * @ignore
   */
  name: _propTypes2.default.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.checked`.
   * @param {boolean} checked The `checked` value of the switch
   */
  onChange: _propTypes2.default.func,
  /**
   * @ignore
   */
  tabIndex: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  /**
   * The input component property `type`.
   */
  type: _propTypes2.default.string,
  /**
   * The value of the component.
   */
  value: _propTypes2.default.string
};

SwitchBase.defaultProps = {
  type: 'checkbox'
};

SwitchBase.contextTypes = {
  muiFormControl: _propTypes2.default.object
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiSwitchBase' })(SwitchBase);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcaW50ZXJuYWxcXFN3aXRjaEJhc2UuanMiXSwibmFtZXMiOlsic3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwidHJhbnNpdGlvbiIsImlucHV0IiwiY3Vyc29yIiwicG9zaXRpb24iLCJvcGFjaXR5Iiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJsZWZ0IiwibWFyZ2luIiwicGFkZGluZyIsImRlZmF1bHQiLCJjaGVja2VkIiwiZGlzYWJsZWQiLCJTd2l0Y2hCYXNlIiwicHJvcHMiLCJjb250ZXh0Iiwic3RhdGUiLCJpc0NvbnRyb2xsZWQiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJvbkNoYW5nZSIsImRlZmF1bHRDaGVja2VkIiwidW5kZWZpbmVkIiwiY2hlY2tlZFByb3AiLCJjaGVja2VkSWNvbiIsImNsYXNzZXMiLCJjbGFzc05hbWVQcm9wIiwiY2xhc3NOYW1lIiwiZGlzYWJsZWRQcm9wIiwiaWNvblByb3AiLCJpY29uIiwiaWQiLCJpbnB1dFByb3BzIiwiaW5wdXRSZWYiLCJuYW1lIiwidGFiSW5kZXgiLCJ0eXBlIiwidmFsdWUiLCJvdGhlciIsIm11aUZvcm1Db250cm9sIiwiaGFzTGFiZWxGb3IiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJib29sIiwic3RyaW5nIiwibm9kZSIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJkaXNhYmxlUmlwcGxlIiwiaW5kZXRlcm1pbmF0ZSIsImluZGV0ZXJtaW5hdGVJY29uIiwiZnVuYyIsIm51bWJlciIsImRlZmF1bHRQcm9wcyIsImNvbnRleHRUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OzsrZUFOQTs7QUFRTyxJQUFNQSwwQkFBUztBQUNwQkMsUUFBTTtBQUNKQyxhQUFTLGFBREw7QUFFSkMsZ0JBQVksUUFGUjtBQUdKQyxnQkFBWTtBQUhSLEdBRGM7QUFNcEJDLFNBQU87QUFDTEMsWUFBUSxTQURIO0FBRUxDLGNBQVUsVUFGTDtBQUdMQyxhQUFTLENBSEo7QUFJTEMsV0FBTyxNQUpGO0FBS0xDLFlBQVEsTUFMSDtBQU1MQyxTQUFLLENBTkE7QUFPTEMsVUFBTSxDQVBEO0FBUUxDLFlBQVEsQ0FSSDtBQVNMQyxhQUFTO0FBVEosR0FOYTtBQWlCcEJDLFdBQVMsRUFqQlc7QUFrQnBCQyxXQUFTLEVBbEJXO0FBbUJwQkMsWUFBVTtBQW5CVSxDQUFmOztBQXNCUDs7OztJQUdNQyxVOzs7QUFDSixzQkFBWUMsS0FBWixFQUFtQkMsT0FBbkIsRUFBNEI7QUFBQTs7QUFBQSx3SEFDcEJELEtBRG9CLEVBQ2JDLE9BRGE7O0FBQUEsVUFVNUJDLEtBVjRCLEdBVXBCLEVBVm9CO0FBQUEsVUFZNUJoQixLQVo0QixHQVlwQixJQVpvQjtBQUFBLFVBYTVCaUIsWUFiNEIsR0FhYixJQWJhOztBQUFBLFVBZTVCQyxpQkFmNEIsR0FlUixpQkFBUztBQUMzQixVQUFNUCxVQUFVUSxNQUFNQyxNQUFOLENBQWFULE9BQTdCOztBQUVBLFVBQUksQ0FBQyxNQUFLTSxZQUFWLEVBQXdCO0FBQ3RCLGNBQUtJLFFBQUwsQ0FBYyxFQUFFVixnQkFBRixFQUFkO0FBQ0Q7O0FBRUQsVUFBSSxNQUFLRyxLQUFMLENBQVdRLFFBQWYsRUFBeUI7QUFDdkIsY0FBS1IsS0FBTCxDQUFXUSxRQUFYLENBQW9CSCxLQUFwQixFQUEyQlIsT0FBM0I7QUFDRDtBQUNGLEtBekIyQjs7QUFHMUIsVUFBS00sWUFBTCxHQUFvQkgsTUFBTUgsT0FBTixJQUFpQixJQUFyQztBQUNBLFFBQUksQ0FBQyxNQUFLTSxZQUFWLEVBQXdCO0FBQ3RCO0FBQ0EsWUFBS0QsS0FBTCxDQUFXTCxPQUFYLEdBQXFCRyxNQUFNUyxjQUFOLEtBQXlCQyxTQUF6QixHQUFxQ1YsTUFBTVMsY0FBM0MsR0FBNEQsS0FBakY7QUFDRDtBQVB5QjtBQVEzQjs7Ozs2QkFtQlE7QUFBQTs7QUFBQSxtQkFpQkgsS0FBS1QsS0FqQkY7QUFBQSxVQUVJVyxXQUZKLFVBRUxkLE9BRks7QUFBQSxVQUdMZSxXQUhLLFVBR0xBLFdBSEs7QUFBQSxVQUlMQyxPQUpLLFVBSUxBLE9BSks7QUFBQSxVQUtNQyxhQUxOLFVBS0xDLFNBTEs7QUFBQSxVQU1LQyxZQU5MLFVBTUxsQixRQU5LO0FBQUEsVUFPQ21CLFFBUEQsVUFPTEMsSUFQSztBQUFBLFVBUUxDLEVBUkssVUFRTEEsRUFSSztBQUFBLFVBU0xDLFVBVEssVUFTTEEsVUFUSztBQUFBLFVBVUxDLFFBVkssVUFVTEEsUUFWSztBQUFBLFVBV0xDLElBWEssVUFXTEEsSUFYSztBQUFBLFVBWUxkLFFBWkssVUFZTEEsUUFaSztBQUFBLFVBYUxlLFFBYkssVUFhTEEsUUFiSztBQUFBLFVBY0xDLElBZEssVUFjTEEsSUFkSztBQUFBLFVBZUxDLEtBZkssVUFlTEEsS0FmSztBQUFBLFVBZ0JGQyxLQWhCRTs7QUFBQSxVQW1CQ0MsY0FuQkQsR0FtQm9CLEtBQUsxQixPQW5CekIsQ0FtQkMwQixjQW5CRDs7QUFvQlAsVUFBSTdCLFdBQVdrQixZQUFmOztBQUVBLFVBQUlXLGNBQUosRUFBb0I7QUFDbEIsWUFBSSxPQUFPN0IsUUFBUCxLQUFvQixXQUF4QixFQUFxQztBQUNuQ0EscUJBQVc2QixlQUFlN0IsUUFBMUI7QUFDRDtBQUNGOztBQUVELFVBQU1ELFVBQVUsS0FBS00sWUFBTCxHQUFvQlEsV0FBcEIsR0FBa0MsS0FBS1QsS0FBTCxDQUFXTCxPQUE3RDtBQUNBLFVBQU1rQixZQUFZLDBCQUFXRixRQUFRL0IsSUFBbkIsRUFBeUIrQixRQUFRakIsT0FBakMsRUFBMENrQixhQUExQyxrREFDZkQsUUFBUWhCLE9BRE8sRUFDR0EsT0FESCxnQ0FFZmdCLFFBQVFmLFFBRk8sRUFFSUEsUUFGSixnQkFBbEI7O0FBS0EsVUFBTW9CLE9BQU9yQixVQUFVZSxXQUFWLEdBQXdCSyxRQUFyQzs7QUFFQSxVQUFNVyxjQUFjSixTQUFTLFVBQVQsSUFBdUJBLFNBQVMsT0FBcEQ7O0FBRUEsYUFDRTtBQUFBO0FBQUE7QUFDRSwyQkFBYyxZQURoQjtBQUVFLHFCQUFVLE1BRlo7QUFHRSxxQkFBV1QsU0FIYjtBQUlFLG9CQUFVakIsUUFKWjtBQUtFLG9CQUFVLElBTFo7QUFNRSxnQkFBTVk7QUFOUixXQU9NZ0IsS0FQTjtBQVNHUixZQVRIO0FBVUU7QUFDRSxjQUFJVSxlQUFlVCxFQURyQjtBQUVFLGdCQUFNSyxJQUZSO0FBR0UsZ0JBQU1GLElBSFI7QUFJRSxtQkFBU3pCLE9BSlg7QUFLRSxvQkFBVSxLQUFLTyxpQkFMakI7QUFNRSxxQkFBV1MsUUFBUTNCLEtBTnJCO0FBT0Usb0JBQVVZLFFBUFo7QUFRRSxvQkFBVXlCLFFBUlo7QUFTRSxpQkFBT0UsS0FUVDtBQVVFLGVBQUtKO0FBVlAsV0FXTUQsVUFYTjtBQVZGLE9BREY7QUEwQkQ7Ozs7RUE1RnNCLGdCQUFNUyxTOztBQStGL0I7QUFDQTs7O0FBQ0E5QixXQUFXK0IsU0FBWCxHQUF1QjtBQUNyQjs7O0FBR0FqQyxXQUFTLG9CQUFVa0MsU0FBVixDQUFvQixDQUFDLG9CQUFVQyxJQUFYLEVBQWlCLG9CQUFVQyxNQUEzQixDQUFwQixDQUpZO0FBS3JCOzs7QUFHQXJCLGVBQWEsb0JBQVVzQixJQUFWLENBQWVDLFVBUlA7QUFTckI7OztBQUdBdEIsV0FBUyxvQkFBVXVCLE1BQVYsQ0FBaUJELFVBWkw7QUFhckI7OztBQUdBcEIsYUFBVyxvQkFBVWtCLE1BaEJBO0FBaUJyQjs7O0FBR0F4QixrQkFBZ0Isb0JBQVV1QixJQXBCTDtBQXFCckI7OztBQUdBbEMsWUFBVSxvQkFBVWtDLElBeEJDO0FBeUJyQjs7O0FBR0FLLGlCQUFlLG9CQUFVTCxJQTVCSjtBQTZCckI7OztBQUdBZCxRQUFNLG9CQUFVZ0IsSUFBVixDQUFlQyxVQWhDQTtBQWlDckI7OztBQUdBaEIsTUFBSSxvQkFBVWMsTUFwQ087QUFxQ3JCOzs7QUFHQUssaUJBQWUsb0JBQVVOLElBeENKO0FBeUNyQjs7O0FBR0FPLHFCQUFtQixvQkFBVUwsSUE1Q1I7QUE2Q3JCOzs7QUFHQWQsY0FBWSxvQkFBVWdCLE1BaEREO0FBaURyQjs7O0FBR0FmLFlBQVUsb0JBQVVtQixJQXBEQztBQXFEckI7OztBQUdBbEIsUUFBTSxvQkFBVVcsTUF4REs7QUF5RHJCOzs7Ozs7O0FBT0F6QixZQUFVLG9CQUFVZ0MsSUFoRUM7QUFpRXJCOzs7QUFHQWpCLFlBQVUsb0JBQVVRLFNBQVYsQ0FBb0IsQ0FBQyxvQkFBVVUsTUFBWCxFQUFtQixvQkFBVVIsTUFBN0IsQ0FBcEIsQ0FwRVc7QUFxRXJCOzs7QUFHQVQsUUFBTSxvQkFBVVMsTUF4RUs7QUF5RXJCOzs7QUFHQVIsU0FBTyxvQkFBVVE7QUE1RUksQ0FBdkI7O0FBK0VBbEMsV0FBVzJDLFlBQVgsR0FBMEI7QUFDeEJsQixRQUFNO0FBRGtCLENBQTFCOztBQUlBekIsV0FBVzRDLFlBQVgsR0FBMEI7QUFDeEJoQixrQkFBZ0Isb0JBQVVTO0FBREYsQ0FBMUI7O2tCQUllLDBCQUFXdkQsTUFBWCxFQUFtQixFQUFFeUMsTUFBTSxlQUFSLEVBQW5CLEVBQThDdkIsVUFBOUMsQyIsImZpbGUiOiJTd2l0Y2hCYXNlLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3JtY3F1ZW4vc2x0LXVpL21hdGVyaWFsLXVpIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGluaGVyaXRlZENvbXBvbmVudCBJY29uQnV0dG9uXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICcuLi9JY29uQnV0dG9uJztcblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgdHJhbnNpdGlvbjogJ25vbmUnLFxuICB9LFxuICBpbnB1dDoge1xuICAgIGN1cnNvcjogJ2luaGVyaXQnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIG9wYWNpdHk6IDAsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBtYXJnaW46IDAsXG4gICAgcGFkZGluZzogMCxcbiAgfSxcbiAgZGVmYXVsdDoge30sXG4gIGNoZWNrZWQ6IHt9LFxuICBkaXNhYmxlZDoge30sXG59O1xuXG4vKipcbiAqIEBpZ25vcmUgLSBpbnRlcm5hbCBjb21wb25lbnQuXG4gKi9cbmNsYXNzIFN3aXRjaEJhc2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgIHRoaXMuaXNDb250cm9sbGVkID0gcHJvcHMuY2hlY2tlZCAhPSBudWxsO1xuICAgIGlmICghdGhpcy5pc0NvbnRyb2xsZWQpIHtcbiAgICAgIC8vIG5vdCBjb250cm9sbGVkLCB1c2UgaW50ZXJuYWwgc3RhdGVcbiAgICAgIHRoaXMuc3RhdGUuY2hlY2tlZCA9IHByb3BzLmRlZmF1bHRDaGVja2VkICE9PSB1bmRlZmluZWQgPyBwcm9wcy5kZWZhdWx0Q2hlY2tlZCA6IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlID0ge307XG5cbiAgaW5wdXQgPSBudWxsO1xuICBpc0NvbnRyb2xsZWQgPSBudWxsO1xuXG4gIGhhbmRsZUlucHV0Q2hhbmdlID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IGNoZWNrZWQgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcblxuICAgIGlmICghdGhpcy5pc0NvbnRyb2xsZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGVja2VkIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCBjaGVja2VkKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoZWNrZWQ6IGNoZWNrZWRQcm9wLFxuICAgICAgY2hlY2tlZEljb24sXG4gICAgICBjbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVQcm9wLFxuICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkUHJvcCxcbiAgICAgIGljb246IGljb25Qcm9wLFxuICAgICAgaWQsXG4gICAgICBpbnB1dFByb3BzLFxuICAgICAgaW5wdXRSZWYsXG4gICAgICBuYW1lLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICB0YWJJbmRleCxcbiAgICAgIHR5cGUsXG4gICAgICB2YWx1ZSxcbiAgICAgIC4uLm90aGVyXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB7IG11aUZvcm1Db250cm9sIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgbGV0IGRpc2FibGVkID0gZGlzYWJsZWRQcm9wO1xuXG4gICAgaWYgKG11aUZvcm1Db250cm9sKSB7XG4gICAgICBpZiAodHlwZW9mIGRpc2FibGVkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBkaXNhYmxlZCA9IG11aUZvcm1Db250cm9sLmRpc2FibGVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrZWQgPSB0aGlzLmlzQ29udHJvbGxlZCA/IGNoZWNrZWRQcm9wIDogdGhpcy5zdGF0ZS5jaGVja2VkO1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoY2xhc3Nlcy5yb290LCBjbGFzc2VzLmRlZmF1bHQsIGNsYXNzTmFtZVByb3AsIHtcbiAgICAgIFtjbGFzc2VzLmNoZWNrZWRdOiBjaGVja2VkLFxuICAgICAgW2NsYXNzZXMuZGlzYWJsZWRdOiBkaXNhYmxlZCxcbiAgICB9KTtcblxuICAgIGNvbnN0IGljb24gPSBjaGVja2VkID8gY2hlY2tlZEljb24gOiBpY29uUHJvcDtcblxuICAgIGNvbnN0IGhhc0xhYmVsRm9yID0gdHlwZSA9PT0gJ2NoZWNrYm94JyB8fCB0eXBlID09PSAncmFkaW8nO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgIGRhdGEtbXVpLXRlc3Q9XCJTd2l0Y2hCYXNlXCJcbiAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIHRhYkluZGV4PXtudWxsfVxuICAgICAgICByb2xlPXt1bmRlZmluZWR9XG4gICAgICAgIHsuLi5vdGhlcn1cbiAgICAgID5cbiAgICAgICAge2ljb259XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPXtoYXNMYWJlbEZvciAmJiBpZH1cbiAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleH1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgICB7Li4uaW5wdXRQcm9wc31cbiAgICAgICAgLz5cbiAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICApO1xuICB9XG59XG5cbi8vIE5COiBJZiBjaGFuZ2VkLCBwbGVhc2UgdXBkYXRlIENoZWNrYm94LCBTd2l0Y2ggYW5kIFJhZGlvXG4vLyBzbyB0aGF0IHRoZSBBUEkgZG9jdW1lbnRhdGlvbiBpcyB1cGRhdGVkLlxuU3dpdGNoQmFzZS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBjb21wb25lbnQgaXMgY2hlY2tlZC5cbiAgICovXG4gIGNoZWNrZWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIC8qKlxuICAgKiBUaGUgaWNvbiB0byBkaXNwbGF5IHdoZW4gdGhlIGNvbXBvbmVudCBpcyBjaGVja2VkLlxuICAgKi9cbiAgY2hlY2tlZEljb246IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBVc2VmdWwgdG8gZXh0ZW5kIHRoZSBzdHlsZSBhcHBsaWVkIHRvIGNvbXBvbmVudHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBkZWZhdWx0Q2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBzd2l0Y2ggd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHJpcHBsZSBlZmZlY3Qgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVSaXBwbGU6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICogVGhlIGljb24gdG8gZGlzcGxheSB3aGVuIHRoZSBjb21wb25lbnQgaXMgdW5jaGVja2VkLlxuICAgKi9cbiAgaWNvbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIFRoZSBpZCBvZiB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBjb21wb25lbnQgYXBwZWFycyBpbmRldGVybWluYXRlLlxuICAgKi9cbiAgaW5kZXRlcm1pbmF0ZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBUaGUgaWNvbiB0byBkaXNwbGF5IHdoZW4gdGhlIGNvbXBvbmVudCBpcyBpbmRldGVybWluYXRlLlxuICAgKi9cbiAgaW5kZXRlcm1pbmF0ZUljb246IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICogUHJvcGVydGllcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICogVXNlIHRoYXQgcHJvcGVydHkgdG8gcGFzcyBhIHJlZiBjYWxsYmFjayB0byB0aGUgbmF0aXZlIGlucHV0IGNvbXBvbmVudC5cbiAgICovXG4gIGlucHV0UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgLypcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIHN0YXRlIGlzIGNoYW5nZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICogWW91IGNhbiBwdWxsIG91dCB0aGUgbmV3IHZhbHVlIGJ5IGFjY2Vzc2luZyBgZXZlbnQudGFyZ2V0LmNoZWNrZWRgLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNoZWNrZWQgVGhlIGBjaGVja2VkYCB2YWx1ZSBvZiB0aGUgc3dpdGNoXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICB0YWJJbmRleDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICAvKipcbiAgICogVGhlIGlucHV0IGNvbXBvbmVudCBwcm9wZXJ0eSBgdHlwZWAuXG4gICAqL1xuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogVGhlIHZhbHVlIG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cblN3aXRjaEJhc2UuZGVmYXVsdFByb3BzID0ge1xuICB0eXBlOiAnY2hlY2tib3gnLFxufTtcblxuU3dpdGNoQmFzZS5jb250ZXh0VHlwZXMgPSB7XG4gIG11aUZvcm1Db250cm9sOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHsgbmFtZTogJ011aVN3aXRjaEJhc2UnIH0pKFN3aXRjaEJhc2UpO1xuIl19

/***/ })

});