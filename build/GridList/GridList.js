"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflowY: 'auto',
    listStyle: 'none',
    padding: 0,
    WebkitOverflowScrolling: 'touch' // Add iOS momentum scrolling.

  }
};
exports.styles = styles;

function GridList(props) {
  var cellHeight = props.cellHeight,
      children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      cols = props.cols,
      Component = props.component,
      spacing = props.spacing,
      style = props.style,
      other = (0, _objectWithoutProperties2.default)(props, ["cellHeight", "children", "classes", "className", "cols", "component", "spacing", "style"]);
  return _react.default.createElement(Component, (0, _extends2.default)({
    className: (0, _classnames.default)(classes.root, classNameProp),
    style: (0, _objectSpread2.default)({
      margin: -spacing / 2
    }, style)
  }, other), _react.default.Children.map(children, function (currentChild) {
    if (!_react.default.isValidElement(currentChild)) {
      return null;
    }

    var childCols = currentChild.props.cols || 1;
    var childRows = currentChild.props.rows || 1;
    return _react.default.cloneElement(currentChild, {
      style: (0, _extends2.default)({
        width: "".concat(100 / cols * childCols, "%"),
        height: cellHeight === 'auto' ? 'auto' : cellHeight * childRows + spacing,
        padding: spacing / 2
      }, currentChild.props.style)
    });
  }));
}

GridList.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Number of px for one cell height.
   * You can set `'auto'` if you want to let the children determine the height.
   */
  cellHeight: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(['auto'])]),

  /**
   * Grid Tiles that will be in Grid List.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * Number of columns.
   */
  cols: _propTypes.default.number,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),

  /**
   * Number of px for the spacing between tiles.
   */
  spacing: _propTypes.default.number,

  /**
   * @ignore
   */
  style: _propTypes.default.object
} : {};
GridList.defaultProps = {
  cellHeight: 180,
  cols: 2,
  component: 'ul',
  spacing: 4
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiGridList'
})(GridList);

exports.default = _default;