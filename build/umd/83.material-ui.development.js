webpackJsonpmaterial_ui([83],{

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // @inheritedComponent ButtonBase

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(23);

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__(18);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _colorManipulator = __webpack_require__(106);

var _ButtonBase = __webpack_require__(105);

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

var _helpers = __webpack_require__(97);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = exports.styles = function styles(theme) {
  return {
    root: _extends({}, theme.typography.button, {
      lineHeight: '1.4em', // Improve readability for multiline button.
      boxSizing: 'border-box',
      minWidth: theme.spacing.unit * 11,
      minHeight: 36,
      padding: theme.spacing.unit + 'px ' + theme.spacing.unit * 2 + 'px',
      borderRadius: 2,
      color: theme.palette.text.primary,
      transition: theme.transitions.create(['background-color', 'box-shadow'], {
        duration: theme.transitions.duration.short
      }),
      '&:hover': {
        textDecoration: 'none',
        // Reset on mouse devices
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.text.primary, 0.12),
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        },
        '&$disabled': {
          backgroundColor: 'transparent'
        }
      }
    }),
    label: {
      width: '100%',
      display: 'inherit',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    },
    flatPrimary: {
      color: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.primary.main, 0.12),
        // Reset on mouse devices
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },
    flatSecondary: {
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.secondary.main, 0.12),
        // Reset on mouse devices
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },
    colorInherit: {
      color: 'inherit'
    },
    raised: {
      color: theme.palette.getContrastText(theme.palette.grey[300]),
      backgroundColor: theme.palette.grey[300],
      boxShadow: theme.shadows[2],
      '&$keyboardFocused': {
        boxShadow: theme.shadows[6]
      },
      '&:active': {
        boxShadow: theme.shadows[8]
      },
      '&$disabled': {
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.action.disabledBackground
      },
      '&:hover': {
        backgroundColor: theme.palette.grey.A100,
        // Reset on mouse devices
        '@media (hover: none)': {
          backgroundColor: theme.palette.grey[300]
        },
        '&$disabled': {
          backgroundColor: theme.palette.action.disabledBackground
        }
      }
    },
    keyboardFocused: {},
    raisedPrimary: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        // Reset on mouse devices
        '@media (hover: none)': {
          backgroundColor: theme.palette.primary.main
        }
      }
    },
    raisedSecondary: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
        // Reset on mouse devices
        '@media (hover: none)': {
          backgroundColor: theme.palette.secondary.main
        }
      }
    },
    disabled: {
      color: theme.palette.action.disabled
    },
    fab: {
      borderRadius: '50%',
      padding: 0,
      minWidth: 0,
      width: 56,
      fontSize: 24,
      height: 56,
      boxShadow: theme.shadows[6],
      '&:active': {
        boxShadow: theme.shadows[12]
      }
    },
    mini: {
      width: 40,
      height: 40
    },
    sizeSmall: {
      padding: theme.spacing.unit - 1 + 'px ' + theme.spacing.unit + 'px',
      minWidth: theme.spacing.unit * 8,
      minHeight: 32,
      fontSize: theme.typography.pxToRem(13)
    },
    sizeLarge: {
      padding: theme.spacing.unit + 'px ' + theme.spacing.unit * 3 + 'px',
      minWidth: theme.spacing.unit * 14,
      minHeight: 40,
      fontSize: theme.typography.pxToRem(15)
    },
    fullWidth: {
      width: '100%'
    }
  };
};

function Button(props) {
  var _classNames;

  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      color = props.color,
      disabled = props.disabled,
      disableFocusRipple = props.disableFocusRipple,
      fullWidth = props.fullWidth,
      mini = props.mini,
      size = props.size,
      variant = props.variant,
      other = _objectWithoutProperties(props, ['children', 'classes', 'className', 'color', 'disabled', 'disableFocusRipple', 'fullWidth', 'mini', 'size', 'variant']);

  var fab = variant === 'fab';
  var raised = variant === 'raised';
  var flat = !raised && !fab;
  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, _defineProperty(_classNames, classes.raised, raised || fab), _defineProperty(_classNames, classes.fab, fab), _defineProperty(_classNames, classes.mini, fab && mini), _defineProperty(_classNames, classes.colorInherit, color === 'inherit'), _defineProperty(_classNames, classes.flatPrimary, flat && color === 'primary'), _defineProperty(_classNames, classes.flatSecondary, flat && color === 'secondary'), _defineProperty(_classNames, classes.raisedPrimary, !flat && color === 'primary'), _defineProperty(_classNames, classes.raisedSecondary, !flat && color === 'secondary'), _defineProperty(_classNames, classes['size' + (0, _helpers.capitalize)(size)], size !== 'medium'), _defineProperty(_classNames, classes.disabled, disabled), _defineProperty(_classNames, classes.fullWidth, fullWidth), _classNames), classNameProp);

  return _react2.default.createElement(
    _ButtonBase2.default,
    _extends({
      className: className,
      disabled: disabled,
      focusRipple: !disableFocusRipple,
      classes: {
        keyboardFocused: classes.keyboardFocused
      }
    }, other),
    _react2.default.createElement(
      'span',
      { className: classes.label },
      children
    )
  );
}

Button.propTypes = {
  /**
   * The content of the button.
   */
  children: _propTypes2.default.node.isRequired,
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
  color: _propTypes2.default.oneOf(['default', 'inherit', 'primary', 'secondary']),
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * The default value is a `button`.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * If `true`, the button will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   * `disableRipple` must also be true.
   */
  disableFocusRipple: _propTypes2.default.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: _propTypes2.default.bool,
  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: _propTypes2.default.string,
  /**
   * If `true`, and `variant` is `'fab'`, will use mini floating action button styling.
   */
  mini: _propTypes2.default.bool,
  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
  /**
   * @ignore
   */
  type: _propTypes2.default.string,
  /**
   * The type of button.
   */
  variant: _propTypes2.default.oneOf(['flat', 'raised', 'fab'])
};

Button.defaultProps = {
  color: 'default',
  disabled: false,
  disableFocusRipple: false,
  fullWidth: false,
  mini: false,
  size: 'medium',
  type: 'button',
  variant: 'flat'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiButton' })(Button);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcQnV0dG9uXFxCdXR0b24uanMiXSwibmFtZXMiOlsic3R5bGVzIiwicm9vdCIsInRoZW1lIiwidHlwb2dyYXBoeSIsImJ1dHRvbiIsImxpbmVIZWlnaHQiLCJib3hTaXppbmciLCJtaW5XaWR0aCIsInNwYWNpbmciLCJ1bml0IiwibWluSGVpZ2h0IiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImNvbG9yIiwicGFsZXR0ZSIsInRleHQiLCJwcmltYXJ5IiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZHVyYXRpb24iLCJzaG9ydCIsInRleHREZWNvcmF0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwibGFiZWwiLCJ3aWR0aCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmbGF0UHJpbWFyeSIsIm1haW4iLCJmbGF0U2Vjb25kYXJ5Iiwic2Vjb25kYXJ5IiwiY29sb3JJbmhlcml0IiwicmFpc2VkIiwiZ2V0Q29udHJhc3RUZXh0IiwiZ3JleSIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJhY3Rpb24iLCJkaXNhYmxlZEJhY2tncm91bmQiLCJBMTAwIiwia2V5Ym9hcmRGb2N1c2VkIiwicmFpc2VkUHJpbWFyeSIsImNvbnRyYXN0VGV4dCIsImRhcmsiLCJyYWlzZWRTZWNvbmRhcnkiLCJkaXNhYmxlZCIsImZhYiIsImZvbnRTaXplIiwiaGVpZ2h0IiwibWluaSIsInNpemVTbWFsbCIsInB4VG9SZW0iLCJzaXplTGFyZ2UiLCJmdWxsV2lkdGgiLCJCdXR0b24iLCJwcm9wcyIsImNoaWxkcmVuIiwiY2xhc3NlcyIsImNsYXNzTmFtZVByb3AiLCJjbGFzc05hbWUiLCJkaXNhYmxlRm9jdXNSaXBwbGUiLCJzaXplIiwidmFyaWFudCIsIm90aGVyIiwiZmxhdCIsInByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwib2JqZWN0Iiwic3RyaW5nIiwib25lT2YiLCJjb21wb25lbnQiLCJvbmVPZlR5cGUiLCJm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LFFBQVQsRUFBbUIsS0FBbkIsQ0FBaEI7QUE3RFEsQ0FBbkI7O0FBZ0VBaEIsT0FBT3dCLFlBQVAsR0FBc0I7QUFDcEJuRSxTQUFPLFNBRGE7QUFFcEJrQyxZQUFVLEtBRlU7QUFHcEJlLHNCQUFvQixLQUhBO0FBSXBCUCxhQUFXLEtBSlM7QUFLcEJKLFFBQU0sS0FMYztBQU1wQlksUUFBTSxRQU5jO0FBT3BCZ0IsUUFBTSxRQVBjO0FBUXBCZixXQUFTO0FBUlcsQ0FBdEI7O2tCQVdlLDBCQUFXaEUsTUFBWCxFQUFtQixFQUFFaUYsTUFBTSxXQUFSLEVBQW5CLEVBQTBDekIsTUFBMUMsQyIsImZpbGUiOiJCdXR0b24uanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvcm1jcXVlbi9zbHQtdWkvbWF0ZXJpYWwtdWkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAaW5oZXJpdGVkQ29tcG9uZW50IEJ1dHRvbkJhc2VcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCB7IGZhZGUgfSBmcm9tICcuLi9zdHlsZXMvY29sb3JNYW5pcHVsYXRvcic7XG5pbXBvcnQgQnV0dG9uQmFzZSBmcm9tICcuLi9CdXR0b25CYXNlJztcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICcuLi91dGlscy9oZWxwZXJzJztcblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICAuLi50aGVtZS50eXBvZ3JhcGh5LmJ1dHRvbixcbiAgICBsaW5lSGVpZ2h0OiAnMS40ZW0nLCAvLyBJbXByb3ZlIHJlYWRhYmlsaXR5IGZvciBtdWx0aWxpbmUgYnV0dG9uLlxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIG1pbldpZHRoOiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAxMSxcbiAgICBtaW5IZWlnaHQ6IDM2LFxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudW5pdH1weCAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDJ9cHhgLFxuICAgIGJvcmRlclJhZGl1czogMixcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnYmFja2dyb3VuZC1jb2xvcicsICdib3gtc2hhZG93J10sIHtcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydCxcbiAgICB9KSxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICAvLyBSZXNldCBvbiBtb3VzZSBkZXZpY2VzXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhZGUodGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksIDAuMTIpLFxuICAgICAgJ0BtZWRpYSAoaG92ZXI6IG5vbmUpJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICB9LFxuICAgICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgbGFiZWw6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdpbmhlcml0JyxcbiAgICBhbGlnbkl0ZW1zOiAnaW5oZXJpdCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdpbmhlcml0JyxcbiAgfSxcbiAgZmxhdFByaW1hcnk6IHtcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhZGUodGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sIDAuMTIpLFxuICAgICAgLy8gUmVzZXQgb24gbW91c2UgZGV2aWNlc1xuICAgICAgJ0BtZWRpYSAoaG92ZXI6IG5vbmUpJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGZsYXRTZWNvbmRhcnk6IHtcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogZmFkZSh0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLCAwLjEyKSxcbiAgICAgIC8vIFJlc2V0IG9uIG1vdXNlIGRldmljZXNcbiAgICAgICdAbWVkaWEgKGhvdmVyOiBub25lKSc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBjb2xvckluaGVyaXQ6IHtcbiAgICBjb2xvcjogJ2luaGVyaXQnLFxuICB9LFxuICByYWlzZWQ6IHtcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5nZXRDb250cmFzdFRleHQodGhlbWUucGFsZXR0ZS5ncmV5WzMwMF0pLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5ncmV5WzMwMF0sXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzJdLFxuICAgICcmJGtleWJvYXJkRm9jdXNlZCc6IHtcbiAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s2XSxcbiAgICB9LFxuICAgICcmOmFjdGl2ZSc6IHtcbiAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s4XSxcbiAgICB9LFxuICAgICcmJGRpc2FibGVkJzoge1xuICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzBdLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmFjdGlvbi5kaXNhYmxlZEJhY2tncm91bmQsXG4gICAgfSxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5ncmV5LkExMDAsXG4gICAgICAvLyBSZXNldCBvbiBtb3VzZSBkZXZpY2VzXG4gICAgICAnQG1lZGlhIChob3Zlcjogbm9uZSknOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5ncmV5WzMwMF0sXG4gICAgICB9LFxuICAgICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5hY3Rpb24uZGlzYWJsZWRCYWNrZ3JvdW5kLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBrZXlib2FyZEZvY3VzZWQ6IHt9LFxuICByYWlzZWRQcmltYXJ5OiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5jb250cmFzdFRleHQsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssXG4gICAgICAvLyBSZXNldCBvbiBtb3VzZSBkZXZpY2VzXG4gICAgICAnQG1lZGlhIChob3Zlcjogbm9uZSknOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHJhaXNlZFNlY29uZGFyeToge1xuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5jb250cmFzdFRleHQsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5kYXJrLFxuICAgICAgLy8gUmVzZXQgb24gbW91c2UgZGV2aWNlc1xuICAgICAgJ0BtZWRpYSAoaG92ZXI6IG5vbmUpJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGRpc2FibGVkOiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuYWN0aW9uLmRpc2FibGVkLFxuICB9LFxuICBmYWI6IHtcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgbWluV2lkdGg6IDAsXG4gICAgd2lkdGg6IDU2LFxuICAgIGZvbnRTaXplOiAyNCxcbiAgICBoZWlnaHQ6IDU2LFxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s2XSxcbiAgICAnJjphY3RpdmUnOiB7XG4gICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMTJdLFxuICAgIH0sXG4gIH0sXG4gIG1pbmk6IHtcbiAgICB3aWR0aDogNDAsXG4gICAgaGVpZ2h0OiA0MCxcbiAgfSxcbiAgc2l6ZVNtYWxsOiB7XG4gICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZy51bml0IC0gMX1weCAke3RoZW1lLnNwYWNpbmcudW5pdH1weGAsXG4gICAgbWluV2lkdGg6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDgsXG4gICAgbWluSGVpZ2h0OiAzMixcbiAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5weFRvUmVtKDEzKSxcbiAgfSxcbiAgc2l6ZUxhcmdlOiB7XG4gICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZy51bml0fXB4ICR7dGhlbWUuc3BhY2luZy51bml0ICogM31weGAsXG4gICAgbWluV2lkdGg6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDE0LFxuICAgIG1pbkhlaWdodDogNDAsXG4gICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxNSksXG4gIH0sXG4gIGZ1bGxXaWR0aDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gIH0sXG59KTtcblxuZnVuY3Rpb24gQnV0dG9uKHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBjaGlsZHJlbixcbiAgICBjbGFzc2VzLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lUHJvcCxcbiAgICBjb2xvcixcbiAgICBkaXNhYmxlZCxcbiAgICBkaXNhYmxlRm9jdXNSaXBwbGUsXG4gICAgZnVsbFdpZHRoLFxuICAgIG1pbmksXG4gICAgc2l6ZSxcbiAgICB2YXJpYW50LFxuICAgIC4uLm90aGVyXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBmYWIgPSB2YXJpYW50ID09PSAnZmFiJztcbiAgY29uc3QgcmFpc2VkID0gdmFyaWFudCA9PT0gJ3JhaXNlZCc7XG4gIGNvbnN0IGZsYXQgPSAhcmFpc2VkICYmICFmYWI7XG4gIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoXG4gICAgY2xhc3Nlcy5yb290LFxuICAgIHtcbiAgICAgIFtjbGFzc2VzLnJhaXNlZF06IHJhaXNlZCB8fCBmYWIsXG4gICAgICBbY2xhc3Nlcy5mYWJdOiBmYWIsXG4gICAgICBbY2xhc3Nlcy5taW5pXTogZmFiICYmIG1pbmksXG4gICAgICBbY2xhc3Nlcy5jb2xvckluaGVyaXRdOiBjb2xvciA9PT0gJ2luaGVyaXQnLFxuICAgICAgW2NsYXNzZXMuZmxhdFByaW1hcnldOiBmbGF0ICYmIGNvbG9yID09PSAncHJpbWFyeScsXG4gICAgICBbY2xhc3Nlcy5mbGF0U2Vjb25kYXJ5XTogZmxhdCAmJiBjb2xvciA9PT0gJ3NlY29uZGFyeScsXG4gICAgICBbY2xhc3Nlcy5yYWlzZWRQcmltYXJ5XTogIWZsYXQgJiYgY29sb3IgPT09ICdwcmltYXJ5JyxcbiAgICAgIFtjbGFzc2VzLnJhaXNlZFNlY29uZGFyeV06ICFmbGF0ICYmIGNvbG9yID09PSAnc2Vjb25kYXJ5JyxcbiAgICAgIFtjbGFzc2VzW2BzaXplJHtjYXBpdGFsaXplKHNpemUpfWBdXTogc2l6ZSAhPT0gJ21lZGl1bScsXG4gICAgICBbY2xhc3Nlcy5kaXNhYmxlZF06IGRpc2FibGVkLFxuICAgICAgW2NsYXNzZXMuZnVsbFdpZHRoXTogZnVsbFdpZHRoLFxuICAgIH0sXG4gICAgY2xhc3NOYW1lUHJvcCxcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxCdXR0b25CYXNlXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIGZvY3VzUmlwcGxlPXshZGlzYWJsZUZvY3VzUmlwcGxlfVxuICAgICAgY2xhc3Nlcz17e1xuICAgICAgICBrZXlib2FyZEZvY3VzZWQ6IGNsYXNzZXMua2V5Ym9hcmRGb2N1c2VkLFxuICAgICAgfX1cbiAgICAgIHsuLi5vdGhlcn1cbiAgICA+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMubGFiZWx9PntjaGlsZHJlbn08L3NwYW4+XG4gICAgPC9CdXR0b25CYXNlPlxuICApO1xufVxuXG5CdXR0b24ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGJ1dHRvbi5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogVXNlZnVsIHRvIGV4dGVuZCB0aGUgc3R5bGUgYXBwbGllZCB0byBjb21wb25lbnRzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBjb21wb25lbnQuIEl0IHN1cHBvcnRzIHRob3NlIHRoZW1lIGNvbG9ycyB0aGF0IG1ha2Ugc2Vuc2UgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAnaW5oZXJpdCcsICdwcmltYXJ5JywgJ3NlY29uZGFyeSddKSxcbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHJvb3Qgbm9kZS5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIERPTSBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBhIGBidXR0b25gLlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYnV0dG9uIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSAga2V5Ym9hcmQgZm9jdXMgcmlwcGxlIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqIGBkaXNhYmxlUmlwcGxlYCBtdXN0IGFsc28gYmUgdHJ1ZS5cbiAgICovXG4gIGRpc2FibGVGb2N1c1JpcHBsZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSByaXBwbGUgZWZmZWN0IHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlUmlwcGxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGJ1dHRvbiB3aWxsIHRha2UgdXAgdGhlIGZ1bGwgd2lkdGggb2YgaXRzIGNvbnRhaW5lci5cbiAgICovXG4gIGZ1bGxXaWR0aDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBUaGUgVVJMIHRvIGxpbmsgdG8gd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAqIElmIGRlZmluZWQsIGFuIGBhYCBlbGVtZW50IHdpbGwgYmUgdXNlZCBhcyB0aGUgcm9vdCBub2RlLlxuICAgKi9cbiAgaHJlZjogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgYW5kIGB2YXJpYW50YCBpcyBgJ2ZhYidgLCB3aWxsIHVzZSBtaW5pIGZsb2F0aW5nIGFjdGlvbiBidXR0b24gc3R5bGluZy5cbiAgICovXG4gIG1pbmk6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICogVGhlIHNpemUgb2YgdGhlIGJ1dHRvbi5cbiAgICogYHNtYWxsYCBpcyBlcXVpdmFsZW50IHRvIHRoZSBkZW5zZSBidXR0b24gc3R5bGluZy5cbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZSddKSxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBUaGUgdHlwZSBvZiBidXR0b24uXG4gICAqL1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydmbGF0JywgJ3JhaXNlZCcsICdmYWInXSksXG59O1xuXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBjb2xvcjogJ2RlZmF1bHQnLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGRpc2FibGVGb2N1c1JpcHBsZTogZmFsc2UsXG4gIGZ1bGxXaWR0aDogZmFsc2UsXG4gIG1pbmk6IGZhbHNlLFxuICBzaXplOiAnbWVkaXVtJyxcbiAgdHlwZTogJ2J1dHRvbicsXG4gIHZhcmlhbnQ6ICdmbGF0Jyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7IG5hbWU6ICdNdWlCdXR0b24nIH0pKEJ1dHRvbik7XG4iXX0=

/***/ })

});