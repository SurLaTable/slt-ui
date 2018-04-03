webpackJsonpmaterial_ui([57],{

/***/ 346:
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

var _Typography = __webpack_require__(103);

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      flex: '1 1 auto',
      minWidth: 0,
      padding: '0 ' + theme.spacing.unit * 2 + 'px',
      '&:first-child': {
        paddingLeft: 0
      }
    },
    inset: {
      '&:first-child': {
        paddingLeft: theme.spacing.unit * 7
      }
    },
    dense: {
      fontSize: theme.typography.pxToRem(13)
    },
    primary: {
      '&$textDense': {
        fontSize: 'inherit'
      }
    },
    secondary: {
      '&$textDense': {
        fontSize: 'inherit'
      }
    },
    textDense: {}
  };
};

function ListItemText(props, context) {
  var _classNames3;

  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      disableTypography = props.disableTypography,
      inset = props.inset,
      primaryProp = props.primary,
      secondaryProp = props.secondary,
      other = _objectWithoutProperties(props, ['children', 'classes', 'className', 'disableTypography', 'inset', 'primary', 'secondary']);

  var dense = context.dense;


  var primary = primaryProp || children;
  if (primary && !disableTypography) {
    primary = _react2.default.createElement(
      _Typography2.default,
      {
        variant: 'subheading',
        className: (0, _classnames2.default)(classes.primary, _defineProperty({}, classes.textDense, dense))
      },
      primary
    );
  }

  var secondary = secondaryProp;
  if (secondary && !disableTypography) {
    secondary = _react2.default.createElement(
      _Typography2.default,
      {
        variant: 'body1',
        className: (0, _classnames2.default)(classes.secondary, _defineProperty({}, classes.textDense, dense)),
        color: 'textSecondary'
      },
      secondary
    );
  }

  return _react2.default.createElement(
    'div',
    _extends({
      className: (0, _classnames2.default)(classes.root, (_classNames3 = {}, _defineProperty(_classNames3, classes.dense, dense), _defineProperty(_classNames3, classes.inset, inset), _classNames3), classNameProp)
    }, other),
    primary,
    secondary
  );
}

ListItemText.propTypes = {
  /**
   * Alias for the `primary` property.
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
   * If `true`, the children won't be wrapped by a typography component.
   * For instance, that can be useful to can render an h4 instead of a
   */
  disableTypography: _propTypes2.default.bool,
  /**
   * If `true`, the children will be indented.
   * This should be used if there is no left avatar or left icon.
   */
  inset: _propTypes2.default.bool,
  primary: _propTypes2.default.node,
  secondary: _propTypes2.default.node
};

ListItemText.defaultProps = {
  disableTypography: false,
  inset: false
};

ListItemText.contextTypes = {
  dense: _propTypes2.default.bool
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiListItemText' })(ListItemText);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcTGlzdFxcTGlzdEl0ZW1UZXh0LmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsInJvb3QiLCJmbGV4IiwibWluV2lkdGgiLCJwYWRkaW5nIiwidGhlbWUiLCJzcGFjaW5nIiwidW5pdCIsInBhZGRpbmdMZWZ0IiwiaW5zZXQiLCJkZW5zZSIsImZvbnRTaXplIiwidHlwb2dyYXBoeSIsInB4VG9SZW0iLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwidGV4dERlbnNlIiwiTGlzdEl0ZW1UZXh0IiwicHJvcHMiLCJjb250ZXh0IiwiY2hpbGRyZW4iLCJjbGFzc2VzIiwiY2xhc3NOYW1lUHJvcCIsImNsYXNzTmFtZSIsImRpc2FibGVUeXBvZ3JhcGh5IiwicHJpbWFyeVByb3AiLCJzZWNvbmRhcnlQcm9wIiwib3RoZXIiLCJwcm9wVHlwZXMiLCJlbGVtZW50Iiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImJvb2wiLCJub2RlIiwiZGVmYXVsdFByb3BzIiwiY29udGV4dFR5cGVzIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVPLElBQU1BLDBCQUFTLFNBQVRBLE1BQVM7QUFBQSxTQUFVO0FBQzlCQyxVQUFNO0FBQ0pDLFlBQU0sVUFERjtBQUVKQyxnQkFBVSxDQUZOO0FBR0pDLHNCQUFjQyxNQUFNQyxPQUFOLENBQWNDLElBQWQsR0FBcUIsQ0FBbkMsT0FISTtBQUlKLHVCQUFpQjtBQUNmQyxxQkFBYTtBQURFO0FBSmIsS0FEd0I7QUFTOUJDLFdBQU87QUFDTCx1QkFBaUI7QUFDZkQscUJBQWFILE1BQU1DLE9BQU4sQ0FBY0MsSUFBZCxHQUFxQjtBQURuQjtBQURaLEtBVHVCO0FBYzlCRyxXQUFPO0FBQ0xDLGdCQUFVTixNQUFNTyxVQUFOLENBQWlCQyxPQUFqQixDQUF5QixFQUF6QjtBQURMLEtBZHVCO0FBaUI5QkMsYUFBUztBQUNQLHFCQUFlO0FBQ2JILGtCQUFVO0FBREc7QUFEUixLQWpCcUI7QUFzQjlCSSxlQUFXO0FBQ1QscUJBQWU7QUFDYkosa0JBQVU7QUFERztBQUROLEtBdEJtQjtBQTJCOUJLLGVBQVc7QUEzQm1CLEdBQVY7QUFBQSxDQUFmOztBQThCUCxTQUFTQyxZQUFULENBQXNCQyxLQUF0QixFQUE2QkMsT0FBN0IsRUFBc0M7QUFBQTs7QUFBQSxNQUVsQ0MsUUFGa0MsR0FVaENGLEtBVmdDLENBRWxDRSxRQUZrQztBQUFBLE1BR2xDQyxPQUhrQyxHQVVoQ0gsS0FWZ0MsQ0FHbENHLE9BSGtDO0FBQUEsTUFJdkJDLGFBSnVCLEdBVWhDSixLQVZnQyxDQUlsQ0ssU0FKa0M7QUFBQSxNQUtsQ0MsaUJBTGtDLEdBVWhDTixLQVZnQyxDQUtsQ00saUJBTGtDO0FBQUEsTUFNbENmLEtBTmtDLEdBVWhDUyxLQVZnQyxDQU1sQ1QsS0FOa0M7QUFBQSxNQU96QmdCLFdBUHlCLEdBVWhDUCxLQVZnQyxDQU9sQ0osT0FQa0M7QUFBQSxNQVF2QlksYUFSdUIsR0FVaENSLEtBVmdDLENBUWxDSCxTQVJrQztBQUFBLE1BUy9CWSxLQVQrQiw0QkFVaENULEtBVmdDOztBQUFBLE1BVzVCUixLQVg0QixHQVdsQlMsT0FYa0IsQ0FXNUJULEtBWDRCOzs7QUFhcEMsTUFBSUksVUFBVVcsZUFBZUwsUUFBN0I7QUFDQSxNQUFJTixXQUFXLENBQUNVLGlCQUFoQixFQUFtQztBQUNqQ1YsY0FDRTtBQUFBO0FBQUE7QUFDRSxpQkFBUSxZQURWO0FBRUUsbUJBQVcsMEJBQVdPLFFBQVFQLE9BQW5CLHNCQUErQk8sUUFBUUwsU0FBdkMsRUFBbUROLEtBQW5EO0FBRmI7QUFJR0k7QUFKSCxLQURGO0FBUUQ7O0FBRUQsTUFBSUMsWUFBWVcsYUFBaEI7QUFDQSxNQUFJWCxhQUFhLENBQUNTLGlCQUFsQixFQUFxQztBQUNuQ1QsZ0JBQ0U7QUFBQTtBQUFBO0FBQ0UsaUJBQVEsT0FEVjtBQUVFLG1CQUFXLDBCQUFXTSxRQUFRTixTQUFuQixzQkFDUk0sUUFBUUwsU0FEQSxFQUNZTixLQURaLEVBRmI7QUFLRSxlQUFNO0FBTFI7QUFPR0s7QUFQSCxLQURGO0FBV0Q7O0FBRUQsU0FDRTtBQUFBO0FBQUE7QUFDRSxpQkFBVywwQkFDVE0sUUFBUXBCLElBREMsb0RBR05vQixRQUFRWCxLQUhGLEVBR1VBLEtBSFYsaUNBSU5XLFFBQVFaLEtBSkYsRUFJVUEsS0FKVixrQkFNVGEsYUFOUztBQURiLE9BU01LLEtBVE47QUFXR2IsV0FYSDtBQVlHQztBQVpILEdBREY7QUFnQkQ7O0FBRURFLGFBQWFXLFNBQWIsR0FBeUI7QUFDdkI7OztBQUdBUixZQUFVLG9CQUFVUyxPQUpHO0FBS3ZCOzs7QUFHQVIsV0FBUyxvQkFBVVMsTUFBVixDQUFpQkMsVUFSSDtBQVN2Qjs7O0FBR0FSLGFBQVcsb0JBQVVTLE1BWkU7QUFhdkI7Ozs7QUFJQVIscUJBQW1CLG9CQUFVUyxJQWpCTjtBQWtCdkI7Ozs7QUFJQXhCLFNBQU8sb0JBQVV3QixJQXRCTTtBQXVCdkJuQixXQUFTLG9CQUFVb0IsSUF2Qkk7QUF3QnZCbkIsYUFBVyxvQkFBVW1CO0FBeEJFLENBQXpCOztBQTJCQWpCLGFBQWFrQixZQUFiLEdBQTRCO0FBQzFCWCxxQkFBbUIsS0FETztBQUUxQmYsU0FBTztBQUZtQixDQUE1Qjs7QUFLQVEsYUFBYW1CLFlBQWIsR0FBNEI7QUFDMUIxQixTQUFPLG9CQUFVdUI7QUFEUyxDQUE1Qjs7a0JBSWUsMEJBQVdqQyxNQUFYLEVBQW1CLEVBQUVxQyxNQUFNLGlCQUFSLEVBQW5CLEVBQWdEcEIsWUFBaEQsQyIsImZpbGUiOiJMaXN0SXRlbVRleHQuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvcm1jcXVlbi9zbHQtdWkvbWF0ZXJpYWwtdWkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnLi4vVHlwb2dyYXBoeSc7XG5cbmV4cG9ydCBjb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgZmxleDogJzEgMSBhdXRvJyxcbiAgICBtaW5XaWR0aDogMCxcbiAgICBwYWRkaW5nOiBgMCAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDJ9cHhgLFxuICAgICcmOmZpcnN0LWNoaWxkJzoge1xuICAgICAgcGFkZGluZ0xlZnQ6IDAsXG4gICAgfSxcbiAgfSxcbiAgaW5zZXQ6IHtcbiAgICAnJjpmaXJzdC1jaGlsZCc6IHtcbiAgICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiA3LFxuICAgIH0sXG4gIH0sXG4gIGRlbnNlOiB7XG4gICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxMyksXG4gIH0sXG4gIHByaW1hcnk6IHtcbiAgICAnJiR0ZXh0RGVuc2UnOiB7XG4gICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgIH0sXG4gIH0sXG4gIHNlY29uZGFyeToge1xuICAgICcmJHRleHREZW5zZSc6IHtcbiAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgfSxcbiAgfSxcbiAgdGV4dERlbnNlOiB7fSxcbn0pO1xuXG5mdW5jdGlvbiBMaXN0SXRlbVRleHQocHJvcHMsIGNvbnRleHQpIHtcbiAgY29uc3Qge1xuICAgIGNoaWxkcmVuLFxuICAgIGNsYXNzZXMsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVQcm9wLFxuICAgIGRpc2FibGVUeXBvZ3JhcGh5LFxuICAgIGluc2V0LFxuICAgIHByaW1hcnk6IHByaW1hcnlQcm9wLFxuICAgIHNlY29uZGFyeTogc2Vjb25kYXJ5UHJvcCxcbiAgICAuLi5vdGhlclxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgZGVuc2UgfSA9IGNvbnRleHQ7XG5cbiAgbGV0IHByaW1hcnkgPSBwcmltYXJ5UHJvcCB8fCBjaGlsZHJlbjtcbiAgaWYgKHByaW1hcnkgJiYgIWRpc2FibGVUeXBvZ3JhcGh5KSB7XG4gICAgcHJpbWFyeSA9IChcbiAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgIHZhcmlhbnQ9XCJzdWJoZWFkaW5nXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzZXMucHJpbWFyeSwgeyBbY2xhc3Nlcy50ZXh0RGVuc2VdOiBkZW5zZSB9KX1cbiAgICAgID5cbiAgICAgICAge3ByaW1hcnl9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgKTtcbiAgfVxuXG4gIGxldCBzZWNvbmRhcnkgPSBzZWNvbmRhcnlQcm9wO1xuICBpZiAoc2Vjb25kYXJ5ICYmICFkaXNhYmxlVHlwb2dyYXBoeSkge1xuICAgIHNlY29uZGFyeSA9IChcbiAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc2VzLnNlY29uZGFyeSwge1xuICAgICAgICAgIFtjbGFzc2VzLnRleHREZW5zZV06IGRlbnNlLFxuICAgICAgICB9KX1cbiAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcbiAgICAgID5cbiAgICAgICAge3NlY29uZGFyeX1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgIGNsYXNzZXMucm9vdCxcbiAgICAgICAge1xuICAgICAgICAgIFtjbGFzc2VzLmRlbnNlXTogZGVuc2UsXG4gICAgICAgICAgW2NsYXNzZXMuaW5zZXRdOiBpbnNldCxcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lUHJvcCxcbiAgICAgICl9XG4gICAgICB7Li4ub3RoZXJ9XG4gICAgPlxuICAgICAge3ByaW1hcnl9XG4gICAgICB7c2Vjb25kYXJ5fVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5MaXN0SXRlbVRleHQucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQWxpYXMgZm9yIHRoZSBgcHJpbWFyeWAgcHJvcGVydHkuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQsXG4gIC8qKlxuICAgKiBVc2VmdWwgdG8gZXh0ZW5kIHRoZSBzdHlsZSBhcHBsaWVkIHRvIGNvbXBvbmVudHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBjaGlsZHJlbiB3b24ndCBiZSB3cmFwcGVkIGJ5IGEgdHlwb2dyYXBoeSBjb21wb25lbnQuXG4gICAqIEZvciBpbnN0YW5jZSwgdGhhdCBjYW4gYmUgdXNlZnVsIHRvIGNhbiByZW5kZXIgYW4gaDQgaW5zdGVhZCBvZiBhXG4gICAqL1xuICBkaXNhYmxlVHlwb2dyYXBoeTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBjaGlsZHJlbiB3aWxsIGJlIGluZGVudGVkLlxuICAgKiBUaGlzIHNob3VsZCBiZSB1c2VkIGlmIHRoZXJlIGlzIG5vIGxlZnQgYXZhdGFyIG9yIGxlZnQgaWNvbi5cbiAgICovXG4gIGluc2V0OiBQcm9wVHlwZXMuYm9vbCxcbiAgcHJpbWFyeTogUHJvcFR5cGVzLm5vZGUsXG4gIHNlY29uZGFyeTogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5MaXN0SXRlbVRleHQuZGVmYXVsdFByb3BzID0ge1xuICBkaXNhYmxlVHlwb2dyYXBoeTogZmFsc2UsXG4gIGluc2V0OiBmYWxzZSxcbn07XG5cbkxpc3RJdGVtVGV4dC5jb250ZXh0VHlwZXMgPSB7XG4gIGRlbnNlOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7IG5hbWU6ICdNdWlMaXN0SXRlbVRleHQnIH0pKExpc3RJdGVtVGV4dCk7XG4iXX0=

/***/ })

});