'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _helpers = require('../utils/helpers');

var _colorManipulator = require('../styles/colorManipulator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      fontWeight: theme.typography.fontWeightMedium,
      position: 'relative' // Workaround for Tooltip positioning issue.
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
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'classes', 'className', 'component', 'sortDirection', 'numeric', 'padding', 'scope', 'variant']);
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

  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.head, variant ? variant === 'head' : table && table.head), (0, _defineProperty3.default)(_classNames, classes.body, variant ? variant === 'body' : table && table.body), (0, _defineProperty3.default)(_classNames, classes.footer, variant ? variant === 'footer' : table && table.footer), (0, _defineProperty3.default)(_classNames, classes.numeric, numeric), (0, _defineProperty3.default)(_classNames, classes['padding' + (0, _helpers.capitalize)(padding)], padding !== 'default'), _classNames), classNameProp);

  var ariaSort = null;
  if (sortDirection) {
    ariaSort = sortDirection === 'asc' ? 'ascending' : 'descending';
  }

  return _react2.default.createElement(
    Component,
    (0, _extends3.default)({ className: className, 'aria-sort': ariaSort, scope: scope }, other),
    children
  );
}

TableCell.propTypes = process.env.NODE_ENV !== "production" ? {
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
} : {};

TableCell.defaultProps = {
  numeric: false,
  padding: 'default'
};

TableCell.contextTypes = {
  table: _propTypes2.default.object.isRequired
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiTableCell' })(TableCell);