webpackJsonpmaterial_ui([52],{

/***/ 305:
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

var _Paper = __webpack_require__(102);

var _Paper2 = _interopRequireDefault(_Paper);

var _Typography = __webpack_require__(103);

var _Typography2 = _interopRequireDefault(_Typography);

var _colorManipulator = __webpack_require__(106);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // @inheritedComponent Paper

var styles = exports.styles = function styles(theme) {
  var _root;

  var emphasis = theme.palette.type === 'light' ? 0.8 : 0.98;
  var backgroundColor = (0, _colorManipulator.emphasize)(theme.palette.background.default, emphasis);

  return {
    root: (_root = {
      pointerEvents: 'initial',
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor: backgroundColor,
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: '6px ' + theme.spacing.unit * 3 + 'px'
    }, _defineProperty(_root, theme.breakpoints.up('md'), {
      minWidth: 288,
      maxWidth: 568,
      borderRadius: 2
    }), _defineProperty(_root, theme.breakpoints.down('sm'), {
      flexGrow: 1
    }), _root),
    message: {
      padding: theme.spacing.unit + 'px 0'
    },
    action: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 'auto',
      paddingLeft: theme.spacing.unit * 3,
      marginRight: -theme.spacing.unit
    }
  };
};

function SnackbarContent(props) {
  var action = props.action,
      classes = props.classes,
      className = props.className,
      message = props.message,
      other = _objectWithoutProperties(props, ['action', 'classes', 'className', 'message']);

  return _react2.default.createElement(
    _Paper2.default,
    _extends({
      component: _Typography2.default,
      headlineMapping: {
        body1: 'div'
      },
      role: 'alertdialog',
      square: true,
      elevation: 6,
      className: (0, _classnames2.default)(classes.root, className)
    }, other),
    _react2.default.createElement(
      'div',
      { className: classes.message },
      message
    ),
    action ? _react2.default.createElement(
      'div',
      { className: classes.action },
      action
    ) : null
  );
}

SnackbarContent.propTypes = {
  /**
   * The action to display.
   */
  action: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The message to display.
   */
  message: _propTypes2.default.node
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiSnackbarContent' })(SnackbarContent);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcU25hY2tiYXJcXFNuYWNrYmFyQ29udGVudC5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJlbXBoYXNpcyIsInRoZW1lIiwicGFsZXR0ZSIsInR5cGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdCIsInJvb3QiLCJwb2ludGVyRXZlbnRzIiwiY29sb3IiLCJnZXRDb250cmFzdFRleHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZsZXhXcmFwIiwicGFkZGluZyIsInNwYWNpbmciLCJ1bml0IiwiYnJlYWtwb2ludHMiLCJ1cCIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJib3JkZXJSYWRpdXMiLCJkb3duIiwiZmxleEdyb3ciLCJtZXNzYWdlIiwiYWN0aW9uIiwibWFyZ2luTGVmdCIsInBhZGRpbmdMZWZ0IiwibWFyZ2luUmlnaHQiLCJTbmFja2JhckNvbnRlbnQiLCJwcm9wcyIsImNsYXNzZXMiLCJjbGFzc05hbWUiLCJvdGhlciIsImJvZHkxIiwicHJvcFR5cGVzIiwibm9kZSIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tOQVJBOztBQVVPLElBQU1BLDBCQUFTLFNBQVRBLE1BQVMsUUFBUztBQUFBOztBQUM3QixNQUFNQyxXQUFXQyxNQUFNQyxPQUFOLENBQWNDLElBQWQsS0FBdUIsT0FBdkIsR0FBaUMsR0FBakMsR0FBdUMsSUFBeEQ7QUFDQSxNQUFNQyxrQkFBa0IsaUNBQVVILE1BQU1DLE9BQU4sQ0FBY0csVUFBZCxDQUF5QkMsT0FBbkMsRUFBNENOLFFBQTVDLENBQXhCOztBQUVBLFNBQU87QUFDTE87QUFDRUMscUJBQWUsU0FEakI7QUFFRUMsYUFBT1IsTUFBTUMsT0FBTixDQUFjUSxlQUFkLENBQThCTixlQUE5QixDQUZUO0FBR0VBLHNDQUhGO0FBSUVPLGVBQVMsTUFKWDtBQUtFQyxrQkFBWSxRQUxkO0FBTUVDLGdCQUFVLE1BTlo7QUFPRUMsd0JBQWdCYixNQUFNYyxPQUFOLENBQWNDLElBQWQsR0FBcUIsQ0FBckM7QUFQRiw4QkFRR2YsTUFBTWdCLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBUkgsRUFRZ0M7QUFDNUJDLGdCQUFVLEdBRGtCO0FBRTVCQyxnQkFBVSxHQUZrQjtBQUc1QkMsb0JBQWM7QUFIYyxLQVJoQywwQkFhR3BCLE1BQU1nQixXQUFOLENBQWtCSyxJQUFsQixDQUF1QixJQUF2QixDQWJILEVBYWtDO0FBQzlCQyxnQkFBVTtBQURvQixLQWJsQyxTQURLO0FBa0JMQyxhQUFTO0FBQ1BWLGVBQVliLE1BQU1jLE9BQU4sQ0FBY0MsSUFBMUI7QUFETyxLQWxCSjtBQXFCTFMsWUFBUTtBQUNOZCxlQUFTLE1BREg7QUFFTkMsa0JBQVksUUFGTjtBQUdOYyxrQkFBWSxNQUhOO0FBSU5DLG1CQUFhMUIsTUFBTWMsT0FBTixDQUFjQyxJQUFkLEdBQXFCLENBSjVCO0FBS05ZLG1CQUFhLENBQUMzQixNQUFNYyxPQUFOLENBQWNDO0FBTHRCO0FBckJILEdBQVA7QUE2QkQsQ0FqQ007O0FBbUNQLFNBQVNhLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQWdDO0FBQUEsTUFDdEJMLE1BRHNCLEdBQzRCSyxLQUQ1QixDQUN0QkwsTUFEc0I7QUFBQSxNQUNkTSxPQURjLEdBQzRCRCxLQUQ1QixDQUNkQyxPQURjO0FBQUEsTUFDTEMsU0FESyxHQUM0QkYsS0FENUIsQ0FDTEUsU0FESztBQUFBLE1BQ01SLE9BRE4sR0FDNEJNLEtBRDVCLENBQ01OLE9BRE47QUFBQSxNQUNrQlMsS0FEbEIsNEJBQzRCSCxLQUQ1Qjs7QUFHOUIsU0FDRTtBQUFBO0FBQUE7QUFDRSxxQ0FERjtBQUVFLHVCQUFpQjtBQUNmSSxlQUFPO0FBRFEsT0FGbkI7QUFLRSxZQUFLLGFBTFA7QUFNRSxrQkFORjtBQU9FLGlCQUFXLENBUGI7QUFRRSxpQkFBVywwQkFBV0gsUUFBUXhCLElBQW5CLEVBQXlCeUIsU0FBekI7QUFSYixPQVNNQyxLQVROO0FBV0U7QUFBQTtBQUFBLFFBQUssV0FBV0YsUUFBUVAsT0FBeEI7QUFBa0NBO0FBQWxDLEtBWEY7QUFZR0MsYUFBUztBQUFBO0FBQUEsUUFBSyxXQUFXTSxRQUFRTixNQUF4QjtBQUFpQ0E7QUFBakMsS0FBVCxHQUEwRDtBQVo3RCxHQURGO0FBZ0JEOztBQUVESSxnQkFBZ0JNLFNBQWhCLEdBQTRCO0FBQzFCOzs7QUFHQVYsVUFBUSxvQkFBVVcsSUFKUTtBQUsxQjs7O0FBR0FMLFdBQVMsb0JBQVVNLE1BQVYsQ0FBaUJDLFVBUkE7QUFTMUI7OztBQUdBTixhQUFXLG9CQUFVTyxNQVpLO0FBYTFCOzs7QUFHQWYsV0FBUyxvQkFBVVk7QUFoQk8sQ0FBNUI7O2tCQW1CZSwwQkFBV3JDLE1BQVgsRUFBbUIsRUFBRXlDLE1BQU0sb0JBQVIsRUFBbkIsRUFBbURYLGVBQW5ELEMiLCJmaWxlIjoiU25hY2tiYXJDb250ZW50LmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3JtY3F1ZW4vc2x0LXVpL21hdGVyaWFsLXVpIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGluaGVyaXRlZENvbXBvbmVudCBQYXBlclxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IFBhcGVyIGZyb20gJy4uL1BhcGVyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJy4uL1R5cG9ncmFwaHknO1xuaW1wb3J0IHsgZW1waGFzaXplIH0gZnJvbSAnLi4vc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3InO1xuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4ge1xuICBjb25zdCBlbXBoYXNpcyA9IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/IDAuOCA6IDAuOTg7XG4gIGNvbnN0IGJhY2tncm91bmRDb2xvciA9IGVtcGhhc2l6ZSh0aGVtZS5wYWxldHRlLmJhY2tncm91bmQuZGVmYXVsdCwgZW1waGFzaXMpO1xuXG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgcG9pbnRlckV2ZW50czogJ2luaXRpYWwnLFxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZ2V0Q29udHJhc3RUZXh0KGJhY2tncm91bmRDb2xvciksXG4gICAgICBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgICBwYWRkaW5nOiBgNnB4ICR7dGhlbWUuc3BhY2luZy51bml0ICogM31weGAsXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICAgIG1pbldpZHRoOiAyODgsXG4gICAgICAgIG1heFdpZHRoOiA1NjgsXG4gICAgICAgIGJvcmRlclJhZGl1czogMixcbiAgICAgIH0sXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICB9LFxuICAgIH0sXG4gICAgbWVzc2FnZToge1xuICAgICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZy51bml0fXB4IDBgLFxuICAgIH0sXG4gICAgYWN0aW9uOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAzLFxuICAgICAgbWFyZ2luUmlnaHQ6IC10aGVtZS5zcGFjaW5nLnVuaXQsXG4gICAgfSxcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIFNuYWNrYmFyQ29udGVudChwcm9wcykge1xuICBjb25zdCB7IGFjdGlvbiwgY2xhc3NlcywgY2xhc3NOYW1lLCBtZXNzYWdlLCAuLi5vdGhlciB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFwZXJcbiAgICAgIGNvbXBvbmVudD17VHlwb2dyYXBoeX1cbiAgICAgIGhlYWRsaW5lTWFwcGluZz17e1xuICAgICAgICBib2R5MTogJ2RpdicsXG4gICAgICB9fVxuICAgICAgcm9sZT1cImFsZXJ0ZGlhbG9nXCJcbiAgICAgIHNxdWFyZVxuICAgICAgZWxldmF0aW9uPXs2fVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX1cbiAgICAgIHsuLi5vdGhlcn1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tZXNzYWdlfT57bWVzc2FnZX08L2Rpdj5cbiAgICAgIHthY3Rpb24gPyA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb259PnthY3Rpb259PC9kaXY+IDogbnVsbH1cbiAgICA8L1BhcGVyPlxuICApO1xufVxuXG5TbmFja2JhckNvbnRlbnQucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlIGFjdGlvbiB0byBkaXNwbGF5LlxuICAgKi9cbiAgYWN0aW9uOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIFVzZWZ1bCB0byBleHRlbmQgdGhlIHN0eWxlIGFwcGxpZWQgdG8gY29tcG9uZW50cy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIFRoZSBtZXNzYWdlIHRvIGRpc3BsYXkuXG4gICAqL1xuICBtZXNzYWdlOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7IG5hbWU6ICdNdWlTbmFja2JhckNvbnRlbnQnIH0pKFNuYWNrYmFyQ29udGVudCk7XG4iXX0=

/***/ })

});