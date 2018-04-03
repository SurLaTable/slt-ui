webpackJsonpmaterial_ui([47],{

/***/ 307:
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

var _colorManipulator = __webpack_require__(106);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'table-cell',
      verticalAlign: 'inherit',
      // Workaround for a rendering bug with spanned columns in Chrome 62.0.
      // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
      borderBottom: '1px solid\n    ' + (theme.palette.type === 'light' ? (0, _colorManipulator.lighten)((0, _colorManipulator.fade)(theme.palette.divider, 1), 0.88) : (0, _colorManipulator.darken)((0, _colorManipulator.fade)(theme.palette.divider, 1), 0.8)),
      textAlign: 'left',
      padding: theme.spacing.unit / 2 + 'px ' + theme.spacing.unit * 7 + 'px ' + theme.spacing.unit / 2 + 'px ' + theme.spacing.unit * 3 + 'px',
      '&:last-child': {
        paddingRight: theme.spacing.unit * 3
      }
    },
    head: {
      color: theme.palette.text.secondary,
      fontSize: theme.typography.pxToRem(12),
      fontWeight: theme.typography.fontWeightMedium
    },
    body: {
      fontSize: theme.typography.pxToRem(13),
      color: theme.palette.text.primary
    },
    footer: {
      borderBottom: 0,
      color: theme.palette.text.secondary,
      fontSize: theme.typography.pxToRem(12)
    },
    numeric: {
      textAlign: 'right',
      flexDirection: 'row-reverse' // can be dynamically inherited at runtime by contents
    },
    paddingDense: {
      paddingRight: theme.spacing.unit * 3
    },
    paddingCheckbox: {
      padding: '0 12px'
    },
    paddingNone: {
      padding: 0,
      '&:last-child': {
        padding: 0
      }
    }
  };
};

function TableCell(props, context) {
  var _classNames;

  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      component = props.component,
      sortDirection = props.sortDirection,
      numeric = props.numeric,
      padding = props.padding,
      scopeProp = props.scope,
      variant = props.variant,
      other = _objectWithoutProperties(props, ['children', 'classes', 'className', 'component', 'sortDirection', 'numeric', 'padding', 'scope', 'variant']);

  var table = context.table;

  var Component = void 0;
  if (component) {
    Component = component;
  } else {
    Component = table && table.head ? 'th' : 'td';
  }

  var scope = scopeProp;
  if (!scope && table && table.head) {
    scope = 'col';
  }

  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, _defineProperty(_classNames, classes.head, variant ? variant === 'head' : table && table.head), _defineProperty(_classNames, classes.body, variant ? variant === 'body' : table && table.body), _defineProperty(_classNames, classes.footer, variant ? variant === 'footer' : table && table.footer), _defineProperty(_classNames, classes.numeric, numeric), _defineProperty(_classNames, classes['padding' + (0, _helpers.capitalize)(padding)], padding !== 'default'), _classNames), classNameProp);

  var ariaSort = null;
  if (sortDirection) {
    ariaSort = sortDirection === 'asc' ? 'ascending' : 'descending';
  }

  return _react2.default.createElement(
    Component,
    _extends({ className: className, 'aria-sort': ariaSort, scope: scope }, other),
    children
  );
}

TableCell.propTypes = {
  /**
   * The table cell contents.
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
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * If `true`, content will align to the right.
   */
  numeric: _propTypes2.default.bool,
  /**
   * Sets the padding applied to the cell.
   */
  padding: _propTypes2.default.oneOf(['default', 'checkbox', 'dense', 'none']),
  /**
   * Set scope attribute.
   */
  scope: _propTypes2.default.string,
  /**
   * Set aria-sort direction.
   */
  sortDirection: _propTypes2.default.oneOf(['asc', 'desc', false]),
  /**
   * Specify the cell type.
   * By default, the TableHead, TableBody or TableFooter parent component set the value.
   */
  variant: _propTypes2.default.oneOf(['head', 'body', 'footer'])
};

TableCell.defaultProps = {
  numeric: false,
  padding: 'default'
};

TableCell.contextTypes = {
  table: _propTypes2.default.object.isRequired
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiTableCell' })(TableCell);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcVGFibGVcXFRhYmxlQ2VsbC5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJyb290IiwiZGlzcGxheSIsInZlcnRpY2FsQWxpZ24iLCJib3JkZXJCb3R0b20iLCJ0aGVtZSIsInBhbGV0dGUiLCJ0eXBlIiwiZGl2aWRlciIsInRleHRBbGlnbiIsInBhZGRpbmciLCJzcGFjaW5nIiwidW5pdCIsInBhZGRpbmdSaWdodCIsImhlYWQiLCJjb2xvciIsInRleHQiLCJzZWNvbmRhcnkiLCJmb250U2l6ZSIsInR5cG9ncmFwaHkiLCJweFRvUmVtIiwiZm9udFdlaWdodCIsImZvbnRXZWlnaHRNZWRpdW0iLCJib2R5IiwicHJpbWFyeSIsImZvb3RlciIsIm51bWVyaWMiLCJmbGV4RGlyZWN0aW9uIiwicGFkZGluZ0RlbnNlIiwicGFkZGluZ0NoZWNrYm94IiwicGFkZGluZ05vbmUiLCJUYWJsZUNlbGwiLCJwcm9wcyIsImNvbnRleHQiLCJjaGlsZHJlbiIsImNsYXNzZXMiLCJjbGFzc05hbWVQcm9wIiwiY2xhc3NOYW1lIiwiY29tcG9uZW50Iiwic29ydERpcmVjdGlvbiIsInNjb3BlUHJvcCIsInNjb3BlIiwidmFyaWFudCIsIm90aGVyIiwidGFibGUiLCJDb21wb25lbnQiLCJhcmlhU29ydCIsInByb3BUeXBlcyIsIm5vZGUiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwib25lT2ZUeXBlIiwiZnVuYyIsImJvb2wiLCJvbmVPZiIsImRlZmF1bHRQcm9wcyIsImNvbnRleHRUeXBlcyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRU8sSUFBTUEsMEJBQVMsU0FBVEEsTUFBUztBQUFBLFNBQVU7QUFDOUJDLFVBQU07QUFDSkMsZUFBUyxZQURMO0FBRUpDLHFCQUFlLFNBRlg7QUFHSjtBQUNBO0FBQ0FDLHlDQUVFQyxNQUFNQyxPQUFOLENBQWNDLElB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Ozs7QUFHQTVDLFdBQVMsb0JBQVU2QyxLQUFWLENBQWdCLENBQUMsU0FBRCxFQUFZLFVBQVosRUFBd0IsT0FBeEIsRUFBaUMsTUFBakMsQ0FBaEIsQ0F6Qlc7QUEwQnBCOzs7QUFHQWQsU0FBTyxvQkFBVVUsTUE3Qkc7QUE4QnBCOzs7QUFHQVosaUJBQWUsb0JBQVVnQixLQUFWLENBQWdCLENBQUMsS0FBRCxFQUFRLE1BQVIsRUFBZ0IsS0FBaEIsQ0FBaEIsQ0FqQ0s7QUFrQ3BCOzs7O0FBSUFiLFdBQVMsb0JBQVVhLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixRQUFqQixDQUFoQjtBQXRDVyxDQUF0Qjs7QUF5Q0F4QixVQUFVeUIsWUFBVixHQUF5QjtBQUN2QjlCLFdBQVMsS0FEYztBQUV2QmhCLFdBQVM7QUFGYyxDQUF6Qjs7QUFLQXFCLFVBQVUwQixZQUFWLEdBQXlCO0FBQ3ZCYixTQUFPLG9CQUFVSyxNQUFWLENBQWlCQztBQURELENBQXpCOztrQkFJZSwwQkFBV2xELE1BQVgsRUFBbUIsRUFBRTBELE1BQU0sY0FBUixFQUFuQixFQUE2QzNCLFNBQTdDLEMiLCJmaWxlIjoiVGFibGVDZWxsLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3JtY3F1ZW4vc2x0LXVpL21hdGVyaWFsLXVpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICcuLi91dGlscy9oZWxwZXJzJztcbmltcG9ydCB7IGRhcmtlbiwgZmFkZSwgbGlnaHRlbiB9IGZyb20gJy4uL3N0eWxlcy9jb2xvck1hbmlwdWxhdG9yJztcblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAndGFibGUtY2VsbCcsXG4gICAgdmVydGljYWxBbGlnbjogJ2luaGVyaXQnLFxuICAgIC8vIFdvcmthcm91bmQgZm9yIGEgcmVuZGVyaW5nIGJ1ZyB3aXRoIHNwYW5uZWQgY29sdW1ucyBpbiBDaHJvbWUgNjIuMC5cbiAgICAvLyBSZW1vdmVzIHRoZSBhbHBoYSAoc2V0cyBpdCB0byAxKSwgYW5kIGxpZ2h0ZW5zIG9yIGRhcmtlbnMgdGhlIHRoZW1lIGNvbG9yLlxuICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZFxuICAgICR7XG4gICAgICB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCdcbiAgICAgICAgPyBsaWdodGVuKGZhZGUodGhlbWUucGFsZXR0ZS5kaXZpZGVyLCAxKSwgMC44OClcbiAgICAgICAgOiBkYXJrZW4oZmFkZSh0aGVtZS5wYWxldHRlLmRpdmlkZXIsIDEpLCAwLjgpXG4gICAgfWAsXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZy51bml0IC8gMn1weCAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDd9cHggJHt0aGVtZS5zcGFjaW5nLnVuaXQgL1xuICAgICAgMn1weCAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDN9cHhgLFxuICAgICcmOmxhc3QtY2hpbGQnOiB7XG4gICAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDMsXG4gICAgfSxcbiAgfSxcbiAgaGVhZDoge1xuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LnB4VG9SZW0oMTIpLFxuICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodE1lZGl1bSxcbiAgfSxcbiAgYm9keToge1xuICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LnB4VG9SZW0oMTMpLFxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcbiAgfSxcbiAgZm9vdGVyOiB7XG4gICAgYm9yZGVyQm90dG9tOiAwLFxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LnB4VG9SZW0oMTIpLFxuICB9LFxuICBudW1lcmljOiB7XG4gICAgdGV4dEFsaWduOiAncmlnaHQnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3ctcmV2ZXJzZScsIC8vIGNhbiBiZSBkeW5hbWljYWxseSBpbmhlcml0ZWQgYXQgcnVudGltZSBieSBjb250ZW50c1xuICB9LFxuICBwYWRkaW5nRGVuc2U6IHtcbiAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDMsXG4gIH0sXG4gIHBhZGRpbmdDaGVja2JveDoge1xuICAgIHBhZGRpbmc6ICcwIDEycHgnLFxuICB9LFxuICBwYWRkaW5nTm9uZToge1xuICAgIHBhZGRpbmc6IDAsXG4gICAgJyY6bGFzdC1jaGlsZCc6IHtcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBUYWJsZUNlbGwocHJvcHMsIGNvbnRleHQpIHtcbiAgY29uc3Qge1xuICAgIGNoaWxkcmVuLFxuICAgIGNsYXNzZXMsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVQcm9wLFxuICAgIGNvbXBvbmVudCxcbiAgICBzb3J0RGlyZWN0aW9uLFxuICAgIG51bWVyaWMsXG4gICAgcGFkZGluZyxcbiAgICBzY29wZTogc2NvcGVQcm9wLFxuICAgIHZhcmlhbnQsXG4gICAgLi4ub3RoZXJcbiAgfSA9IHByb3BzO1xuICBjb25zdCB7IHRhYmxlIH0gPSBjb250ZXh0O1xuICBsZXQgQ29tcG9uZW50O1xuICBpZiAoY29tcG9uZW50KSB7XG4gICAgQ29tcG9uZW50ID0gY29tcG9uZW50O1xuICB9IGVsc2Uge1xuICAgIENvbXBvbmVudCA9IHRhYmxlICYmIHRhYmxlLmhlYWQgPyAndGgnIDogJ3RkJztcbiAgfVxuXG4gIGxldCBzY29wZSA9IHNjb3BlUHJvcDtcbiAgaWYgKCFzY29wZSAmJiB0YWJsZSAmJiB0YWJsZS5oZWFkKSB7XG4gICAgc2NvcGUgPSAnY29sJztcbiAgfVxuXG4gIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoXG4gICAgY2xhc3Nlcy5yb290LFxuICAgIHtcbiAgICAgIFtjbGFzc2VzLmhlYWRdOiB2YXJpYW50ID8gdmFyaWFudCA9PT0gJ2hlYWQnIDogdGFibGUgJiYgdGFibGUuaGVhZCxcbiAgICAgIFtjbGFzc2VzLmJvZHldOiB2YXJpYW50ID8gdmFyaWFudCA9PT0gJ2JvZHknIDogdGFibGUgJiYgdGFibGUuYm9keSxcbiAgICAgIFtjbGFzc2VzLmZvb3Rlcl06IHZhcmlhbnQgPyB2YXJpYW50ID09PSAnZm9vdGVyJyA6IHRhYmxlICYmIHRhYmxlLmZvb3RlcixcbiAgICAgIFtjbGFzc2VzLm51bWVyaWNdOiBudW1lcmljLFxuICAgICAgW2NsYXNzZXNbYHBhZGRpbmcke2NhcGl0YWxpemUocGFkZGluZyl9YF1dOiBwYWRkaW5nICE9PSAnZGVmYXVsdCcsXG4gICAgfSxcbiAgICBjbGFzc05hbWVQcm9wLFxuICApO1xuXG4gIGxldCBhcmlhU29ydCA9IG51bGw7XG4gIGlmIChzb3J0RGlyZWN0aW9uKSB7XG4gICAgYXJpYVNvcnQgPSBzb3J0RGlyZWN0aW9uID09PSAnYXNjJyA/ICdhc2NlbmRpbmcnIDogJ2Rlc2NlbmRpbmcnO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29tcG9uZW50IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBhcmlhLXNvcnQ9e2FyaWFTb3J0fSBzY29wZT17c2NvcGV9IHsuLi5vdGhlcn0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Db21wb25lbnQ+XG4gICk7XG59XG5cblRhYmxlQ2VsbC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgdGFibGUgY2VsbCBjb250ZW50cy5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIFVzZWZ1bCB0byBleHRlbmQgdGhlIHN0eWxlIGFwcGxpZWQgdG8gY29tcG9uZW50cy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHJvb3Qgbm9kZS5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIERPTSBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAvKipcbiAgICogSWYgYHRydWVgLCBjb250ZW50IHdpbGwgYWxpZ24gdG8gdGhlIHJpZ2h0LlxuICAgKi9cbiAgbnVtZXJpYzogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBwYWRkaW5nIGFwcGxpZWQgdG8gdGhlIGNlbGwuXG4gICAqL1xuICBwYWRkaW5nOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ2NoZWNrYm94JywgJ2RlbnNlJywgJ25vbmUnXSksXG4gIC8qKlxuICAgKiBTZXQgc2NvcGUgYXR0cmlidXRlLlxuICAgKi9cbiAgc2NvcGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBTZXQgYXJpYS1zb3J0IGRpcmVjdGlvbi5cbiAgICovXG4gIHNvcnREaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZihbJ2FzYycsICdkZXNjJywgZmFsc2VdKSxcbiAgLyoqXG4gICAqIFNwZWNpZnkgdGhlIGNlbGwgdHlwZS5cbiAgICogQnkgZGVmYXVsdCwgdGhlIFRhYmxlSGVhZCwgVGFibGVCb2R5IG9yIFRhYmxlRm9vdGVyIHBhcmVudCBjb21wb25lbnQgc2V0IHRoZSB2YWx1ZS5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2hlYWQnLCAnYm9keScsICdmb290ZXInXSksXG59O1xuXG5UYWJsZUNlbGwuZGVmYXVsdFByb3BzID0ge1xuICBudW1lcmljOiBmYWxzZSxcbiAgcGFkZGluZzogJ2RlZmF1bHQnLFxufTtcblxuVGFibGVDZWxsLmNvbnRleHRUeXBlcyA9IHtcbiAgdGFibGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7IG5hbWU6ICdNdWlUYWJsZUNlbGwnIH0pKFRhYmxlQ2VsbCk7XG4iXX0=

/***/ })

});