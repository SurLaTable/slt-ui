"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _reactHelpers = require("../utils/reactHelpers");

require("../Button");

// So we don't have any override priority issue.
var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: "".concat(theme.spacing.unit * 2, "px ").concat(theme.spacing.unit, "px")
    },
    action: {
      marginLeft: theme.spacing.unit
    }
  };
};

exports.styles = styles;

function ExpansionPanelActions(props) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className"]);
  return _react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)(classes.root, className)
  }, other), (0, _reactHelpers.cloneChildrenWithClassName)(children, classes.action));
}

ExpansionPanelActions.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The content of the component.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string
} : {};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiExpansionPanelActions'
})(ExpansionPanelActions);

exports.default = _default;