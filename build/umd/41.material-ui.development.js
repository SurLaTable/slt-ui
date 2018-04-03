webpackJsonpmaterial_ui([41],{

/***/ 318:
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'block',
      margin: 0
    },
    display4: theme.typography.display4,
    display3: theme.typography.display3,
    display2: theme.typography.display2,
    display1: theme.typography.display1,
    headline: theme.typography.headline,
    title: theme.typography.title,
    subheading: theme.typography.subheading,
    body2: theme.typography.body2,
    body1: theme.typography.body1,
    caption: theme.typography.caption,
    button: theme.typography.button,
    alignLeft: {
      textAlign: 'left'
    },
    alignCenter: {
      textAlign: 'center'
    },
    alignRight: {
      textAlign: 'right'
    },
    alignJustify: {
      textAlign: 'justify'
    },
    noWrap: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    gutterBottom: {
      marginBottom: '0.35em'
    },
    paragraph: {
      marginBottom: theme.spacing.unit * 2
    },
    colorInherit: {
      color: 'inherit'
    },
    colorPrimary: {
      color: theme.palette.primary.main
    },
    colorSecondary: {
      color: theme.palette.secondary.main
    },
    colorTextSecondary: {
      color: theme.palette.text.secondary
    },
    colorError: {
      color: theme.palette.error.main
    }
  };
};

function Typography(props) {
  var _classNames;

  var align = props.align,
      classes = props.classes,
      classNameProp = props.className,
      componentProp = props.component,
      color = props.color,
      gutterBottom = props.gutterBottom,
      headlineMapping = props.headlineMapping,
      noWrap = props.noWrap,
      paragraph = props.paragraph,
      variant = props.variant,
      other = _objectWithoutProperties(props, ['align', 'classes', 'className', 'component', 'color', 'gutterBottom', 'headlineMapping', 'noWrap', 'paragraph', 'variant']);

  var className = (0, _classnames2.default)(classes.root, classes[variant], (_classNames = {}, _defineProperty(_classNames, classes['color' + (0, _helpers.capitalize)(color)], color !== 'default'), _defineProperty(_classNames, classes.noWrap, noWrap), _defineProperty(_classNames, classes.gutterBottom, gutterBottom), _defineProperty(_classNames, classes.paragraph, paragraph), _defineProperty(_classNames, classes['align' + (0, _helpers.capitalize)(align)], align !== 'inherit'), _classNames), classNameProp);

  var Component = componentProp || (paragraph ? 'p' : headlineMapping[variant]) || 'span';

  return _react2.default.createElement(Component, _extends({ className: className }, other));
}

Typography.propTypes = {
  /**
   * Set the text-align on the component.
   */
  align: _propTypes2.default.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
  /**
   * The content of the component.
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
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes2.default.oneOf(['inherit', 'primary', 'textSecondary', 'secondary', 'error', 'default']),
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * By default, it maps the variant to a good default headline component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * If `true`, the text will have a bottom margin.
   */
  gutterBottom: _propTypes2.default.bool,
  /**
   * We are empirically mapping the variant property to a range of different DOM element types.
   * For instance, h1 to h6. If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` property.
   */
  headlineMapping: _propTypes2.default.object,
  /**
   * If `true`, the text will not wrap, but instead will truncate with an ellipsis.
   */
  noWrap: _propTypes2.default.bool,
  /**
   * If `true`, the text will have a bottom margin.
   */
  paragraph: _propTypes2.default.bool,
  /**
   * Applies the theme typography styles.
   */
  variant: _propTypes2.default.oneOf(['display4', 'display3', 'display2', 'display1', 'headline', 'title', 'subheading', 'body2', 'body1', 'caption', 'button'])
};

Typography.defaultProps = {
  align: 'inherit',
  color: 'default',
  gutterBottom: false,
  headlineMapping: {
    display4: 'h1',
    display3: 'h1',
    display2: 'h1',
    display1: 'h1',
    headline: 'h1',
    title: 'h2',
    subheading: 'h3',
    body2: 'aside',
    body1: 'p'
  },
  noWrap: false,
  paragraph: false,
  variant: 'body1'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiTypography' })(Typography);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcVHlwb2dyYXBoeVxcVHlwb2dyYXBoeS5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJyb290IiwiZGlzcGxheSIsIm1hcmdpbiIsImRpc3BsYXk0IiwidGhlbWUiLCJ0eXBvZ3JhcGh5IiwiZGlzcGxheTMiLCJkaXNwbGF5MiIsImRpc3BsYXkxIiwiaGVhZGxpbmUiLCJ0aXRsZSIsInN1YmhlYWRpbmciLCJib2R5MiIsImJvZHkxIiwiY2FwdGlvbiIsImJ1dHRvbiIsImFsaWduTGVmdCIsInRleHRBbGlnbiIsImFsaWduQ2VudGVyIiwiYWxpZ25SaWdodCIsImFsaWduSnVzdGlmeSIsIm5vV3JhcCIsIm92ZXJmbG93IiwidGV4dE92ZXJmbG93Iiwid2hpdGVTcGFjZSIsImd1dHRlckJvdHRvbSIsIm1hcmdpbkJvdHRvbSIsInBhcmFncmFwaCIsInNwYWNpbmciLCJ1bml0IiwiY29sb3JJbmhlcml0IiwiY29sb3IiLCJjb2xvclByaW1hcnkiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJjb2xvclNlY29uZGFyeSIsInNlY29uZGFyeSIsImNvbG9yVGV4dFNlY29uZGFyeSIsInRleHQiLCJjb2xvckVycm9yIiwiZXJyb3IiLCJUeXBvZ3JhcGh5IiwicHJvcHMiLCJhbGlnbiIsImNsYXNzZXMiLCJjbGFzc05hbWVQcm9wIiwiY2xhc3NOYW1lIiwiY29tcG9uZW50UHJvcCIsImNvbXBvbmVudCIsImhlYWRsaW5lTWFwcGluZyIsInZhcmlhbnQiLCJvdGhlciIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIm9uZU9mIiwiY2hpbGRyZW4iLCJub2RlIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsIm9uZU9mVHlwZSIsImZ1bmMiLCJib29sIiwiZGVmYXVsdFByb3BzIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFTyxJQUFNQSwwQkFBUyxTQUFUQSxN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dUIsRUFFdkIsVUFGdUIsRUFHdkIsVUFIdUIsRUFJdkIsVUFKdUIsRUFLdkIsVUFMdUIsRUFNdkIsT0FOdUIsRUFPdkIsWUFQdUIsRUFRdkIsT0FSdUIsRUFTdkIsT0FUdUIsRUFVdkIsU0FWdUIsRUFXdkIsUUFYdUIsQ0FBaEI7QUFoRFksQ0FBdkI7O0FBK0RBYixXQUFXc0IsWUFBWCxHQUEwQjtBQUN4QnBCLFNBQU8sU0FEaUI7QUFFeEJiLFNBQU8sU0FGaUI7QUFHeEJOLGdCQUFjLEtBSFU7QUFJeEJ5QixtQkFBaUI7QUFDZi9DLGNBQVUsSUFESztBQUVmRyxjQUFVLElBRks7QUFHZkMsY0FBVSxJQUhLO0FBSWZDLGNBQVUsSUFKSztBQUtmQyxjQUFVLElBTEs7QUFNZkMsV0FBTyxJQU5RO0FBT2ZDLGdCQUFZLElBUEc7QUFRZkMsV0FBTyxPQVJRO0FBU2ZDLFdBQU87QUFUUSxHQUpPO0FBZXhCUSxVQUFRLEtBZmdCO0FBZ0J4Qk0sYUFBVyxLQWhCYTtBQWlCeEJ3QixXQUFTO0FBakJlLENBQTFCOztrQkFvQmUsMEJBQVdwRCxNQUFYLEVBQW1CLEVBQUVrRSxNQUFNLGVBQVIsRUFBbkIsRUFBOEN2QixVQUE5QyxDIiwiZmlsZSI6IlR5cG9ncmFwaHkuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvcm1jcXVlbi9zbHQtdWkvbWF0ZXJpYWwtdWkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcnMnO1xuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgbWFyZ2luOiAwLFxuICB9LFxuICBkaXNwbGF5NDogdGhlbWUudHlwb2dyYXBoeS5kaXNwbGF5NCxcbiAgZGlzcGxheTM6IHRoZW1lLnR5cG9ncmFwaHkuZGlzcGxheTMsXG4gIGRpc3BsYXkyOiB0aGVtZS50eXBvZ3JhcGh5LmRpc3BsYXkyLFxuICBkaXNwbGF5MTogdGhlbWUudHlwb2dyYXBoeS5kaXNwbGF5MSxcbiAgaGVhZGxpbmU6IHRoZW1lLnR5cG9ncmFwaHkuaGVhZGxpbmUsXG4gIHRpdGxlOiB0aGVtZS50eXBvZ3JhcGh5LnRpdGxlLFxuICBzdWJoZWFkaW5nOiB0aGVtZS50eXBvZ3JhcGh5LnN1YmhlYWRpbmcsXG4gIGJvZHkyOiB0aGVtZS50eXBvZ3JhcGh5LmJvZHkyLFxuICBib2R5MTogdGhlbWUudHlwb2dyYXBoeS5ib2R5MSxcbiAgY2FwdGlvbjogdGhlbWUudHlwb2dyYXBoeS5jYXB0aW9uLFxuICBidXR0b246IHRoZW1lLnR5cG9ncmFwaHkuYnV0dG9uLFxuICBhbGlnbkxlZnQ6IHtcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgfSxcbiAgYWxpZ25DZW50ZXI6IHtcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB9LFxuICBhbGlnblJpZ2h0OiB7XG4gICAgdGV4dEFsaWduOiAncmlnaHQnLFxuICB9LFxuICBhbGlnbkp1c3RpZnk6IHtcbiAgICB0ZXh0QWxpZ246ICdqdXN0aWZ5JyxcbiAgfSxcbiAgbm9XcmFwOiB7XG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgfSxcbiAgZ3V0dGVyQm90dG9tOiB7XG4gICAgbWFyZ2luQm90dG9tOiAnMC4zNWVtJyxcbiAgfSxcbiAgcGFyYWdyYXBoOiB7XG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAyLFxuICB9LFxuICBjb2xvckluaGVyaXQ6IHtcbiAgICBjb2xvcjogJ2luaGVyaXQnLFxuICB9LFxuICBjb2xvclByaW1hcnk6IHtcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gIH0sXG4gIGNvbG9yU2Vjb25kYXJ5OiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXG4gIH0sXG4gIGNvbG9yVGV4dFNlY29uZGFyeToge1xuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICB9LFxuICBjb2xvckVycm9yOiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpbixcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBUeXBvZ3JhcGh5KHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBhbGlnbixcbiAgICBjbGFzc2VzLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lUHJvcCxcbiAgICBjb21wb25lbnQ6IGNvbXBvbmVudFByb3AsXG4gICAgY29sb3IsXG4gICAgZ3V0dGVyQm90dG9tLFxuICAgIGhlYWRsaW5lTWFwcGluZyxcbiAgICBub1dyYXAsXG4gICAgcGFyYWdyYXBoLFxuICAgIHZhcmlhbnQsXG4gICAgLi4ub3RoZXJcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoXG4gICAgY2xhc3Nlcy5yb290LFxuICAgIGNsYXNzZXNbdmFyaWFudF0sXG4gICAge1xuICAgICAgW2NsYXNzZXNbYGNvbG9yJHtjYXBpdGFsaXplKGNvbG9yKX1gXV06IGNvbG9yICE9PSAnZGVmYXVsdCcsXG4gICAgICBbY2xhc3Nlcy5ub1dyYXBdOiBub1dyYXAsXG4gICAgICBbY2xhc3Nlcy5ndXR0ZXJCb3R0b21dOiBndXR0ZXJCb3R0b20sXG4gICAgICBbY2xhc3Nlcy5wYXJhZ3JhcGhdOiBwYXJhZ3JhcGgsXG4gICAgICBbY2xhc3Nlc1tgYWxpZ24ke2NhcGl0YWxpemUoYWxpZ24pfWBdXTogYWxpZ24gIT09ICdpbmhlcml0JyxcbiAgICB9LFxuICAgIGNsYXNzTmFtZVByb3AsXG4gICk7XG5cbiAgY29uc3QgQ29tcG9uZW50ID0gY29tcG9uZW50UHJvcCB8fCAocGFyYWdyYXBoID8gJ3AnIDogaGVhZGxpbmVNYXBwaW5nW3ZhcmlhbnRdKSB8fCAnc3Bhbic7XG5cbiAgcmV0dXJuIDxDb21wb25lbnQgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHsuLi5vdGhlcn0gLz47XG59XG5cblR5cG9ncmFwaHkucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogU2V0IHRoZSB0ZXh0LWFsaWduIG9uIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnaW5oZXJpdCcsICdsZWZ0JywgJ2NlbnRlcicsICdyaWdodCcsICdqdXN0aWZ5J10pLFxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIFVzZWZ1bCB0byBleHRlbmQgdGhlIHN0eWxlIGFwcGxpZWQgdG8gY29tcG9uZW50cy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgY29tcG9uZW50LiBJdCBzdXBwb3J0cyB0aG9zZSB0aGVtZSBjb2xvcnMgdGhhdCBtYWtlIHNlbnNlIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydpbmhlcml0JywgJ3ByaW1hcnknLCAndGV4dFNlY29uZGFyeScsICdzZWNvbmRhcnknLCAnZXJyb3InLCAnZGVmYXVsdCddKSxcbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHJvb3Qgbm9kZS5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIERPTSBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKiBCeSBkZWZhdWx0LCBpdCBtYXBzIHRoZSB2YXJpYW50IHRvIGEgZ29vZCBkZWZhdWx0IGhlYWRsaW5lIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHRleHQgd2lsbCBoYXZlIGEgYm90dG9tIG1hcmdpbi5cbiAgICovXG4gIGd1dHRlckJvdHRvbTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBXZSBhcmUgZW1waXJpY2FsbHkgbWFwcGluZyB0aGUgdmFyaWFudCBwcm9wZXJ0eSB0byBhIHJhbmdlIG9mIGRpZmZlcmVudCBET00gZWxlbWVudCB0eXBlcy5cbiAgICogRm9yIGluc3RhbmNlLCBoMSB0byBoNi4gSWYgeW91IHdpc2ggdG8gY2hhbmdlIHRoYXQgbWFwcGluZywgeW91IGNhbiBwcm92aWRlIHlvdXIgb3duLlxuICAgKiBBbHRlcm5hdGl2ZWx5LCB5b3UgY2FuIHVzZSB0aGUgYGNvbXBvbmVudGAgcHJvcGVydHkuXG4gICAqL1xuICBoZWFkbGluZU1hcHBpbmc6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSB0ZXh0IHdpbGwgbm90IHdyYXAsIGJ1dCBpbnN0ZWFkIHdpbGwgdHJ1bmNhdGUgd2l0aCBhbiBlbGxpcHNpcy5cbiAgICovXG4gIG5vV3JhcDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSB0ZXh0IHdpbGwgaGF2ZSBhIGJvdHRvbSBtYXJnaW4uXG4gICAqL1xuICBwYXJhZ3JhcGg6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICogQXBwbGllcyB0aGUgdGhlbWUgdHlwb2dyYXBoeSBzdHlsZXMuXG4gICAqL1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdkaXNwbGF5NCcsXG4gICAgJ2Rpc3BsYXkzJyxcbiAgICAnZGlzcGxheTInLFxuICAgICdkaXNwbGF5MScsXG4gICAgJ2hlYWRsaW5lJyxcbiAgICAndGl0bGUnLFxuICAgICdzdWJoZWFkaW5nJyxcbiAgICAnYm9keTInLFxuICAgICdib2R5MScsXG4gICAgJ2NhcHRpb24nLFxuICAgICdidXR0b24nLFxuICBdKSxcbn07XG5cblR5cG9ncmFwaHkuZGVmYXVsdFByb3BzID0ge1xuICBhbGlnbjogJ2luaGVyaXQnLFxuICBjb2xvcjogJ2RlZmF1bHQnLFxuICBndXR0ZXJCb3R0b206IGZhbHNlLFxuICBoZWFkbGluZU1hcHBpbmc6IHtcbiAgICBkaXNwbGF5NDogJ2gxJyxcbiAgICBkaXNwbGF5MzogJ2gxJyxcbiAgICBkaXNwbGF5MjogJ2gxJyxcbiAgICBkaXNwbGF5MTogJ2gxJyxcbiAgICBoZWFkbGluZTogJ2gxJyxcbiAgICB0aXRsZTogJ2gyJyxcbiAgICBzdWJoZWFkaW5nOiAnaDMnLFxuICAgIGJvZHkyOiAnYXNpZGUnLFxuICAgIGJvZHkxOiAncCcsXG4gIH0sXG4gIG5vV3JhcDogZmFsc2UsXG4gIHBhcmFncmFwaDogZmFsc2UsXG4gIHZhcmlhbnQ6ICdib2R5MScsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywgeyBuYW1lOiAnTXVpVHlwb2dyYXBoeScgfSkoVHlwb2dyYXBoeSk7XG4iXX0=

/***/ })

});