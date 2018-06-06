"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ArrowDownward = _interopRequireDefault(require("../internal/svg-icons/ArrowDownward"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _ButtonBase = _interopRequireDefault(require("../ButtonBase"));

var _helpers = require("../utils/helpers");

// @inheritedComponent ButtonBase
var styles = function styles(theme) {
  return {
    root: {
      cursor: 'pointer',
      display: 'inline-flex',
      justifyContent: 'flex-start',
      flexDirection: 'inherit',
      alignItems: 'center',
      '&:hover': {
        color: theme.palette.text.primary
      },
      '&:focus': {
        color: theme.palette.text.primary
      }
    },
    active: {
      color: theme.palette.text.primary,
      '& $icon': {
        opacity: 1
      }
    },
    icon: {
      height: 16,
      marginRight: 4,
      marginLeft: 4,
      opacity: 0,
      transition: theme.transitions.create(['opacity', 'transform'], {
        duration: theme.transitions.duration.shorter
      }),
      userSelect: 'none',
      width: 16
    },
    iconDirectionDesc: {
      transform: 'rotate(0deg)'
    },
    iconDirectionAsc: {
      transform: 'rotate(180deg)'
    }
  };
};
/**
 * A button based label for placing inside `TableCell` for column sorting.
 */


exports.styles = styles;

function TableSortLabel(props) {
  var active = props.active,
      classes = props.classes,
      className = props.className,
      children = props.children,
      direction = props.direction,
      other = (0, _objectWithoutProperties2.default)(props, ["active", "classes", "className", "children", "direction"]);
  return _react.default.createElement(_ButtonBase.default, (0, _extends2.default)({
    className: (0, _classnames.default)(classes.root, (0, _defineProperty2.default)({}, classes.active, active), className),
    component: "span",
    disableRipple: true
  }, other), children, _react.default.createElement(_ArrowDownward.default, {
    className: (0, _classnames.default)(classes.icon, classes["iconDirection".concat((0, _helpers.capitalize)(direction))])
  }));
}

TableSortLabel.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * If `true`, the label will have the active styling (should be true for the sorted column).
   */
  active: _propTypes.default.bool,

  /**
   * Label contents, the arrow will be appended automatically.
   */
  children: _propTypes.default.node,

  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The current sort direction.
   */
  direction: _propTypes.default.oneOf(['asc', 'desc'])
} : {};
TableSortLabel.defaultProps = {
  active: false,
  direction: 'desc'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiTableSortLabel'
})(TableSortLabel);

exports.default = _default;