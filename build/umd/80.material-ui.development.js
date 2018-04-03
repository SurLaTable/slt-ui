webpackJsonpmaterial_ui([80],{

/***/ 317:
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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = exports.styles = function styles(theme) {
  return {
    root: theme.mixins.gutters({
      display: 'flex',
      alignItems: 'center',
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2
    }),
    avatar: {
      flex: '0 0 auto',
      marginRight: theme.spacing.unit * 2
    },
    action: {
      flex: '0 0 auto',
      alignSelf: 'flex-start',
      marginTop: theme.spacing.unit * -1,
      marginRight: theme.spacing.unit * -2
    },
    content: {
      flex: '1 1 auto'
    },
    title: {},
    subheader: {}
  };
};

function CardHeader(props) {
  var action = props.action,
      avatar = props.avatar,
      classes = props.classes,
      classNameProp = props.className,
      Component = props.component,
      subheader = props.subheader,
      title = props.title,
      other = _objectWithoutProperties(props, ['action', 'avatar', 'classes', 'className', 'component', 'subheader', 'title']);

  return _react2.default.createElement(
    Component,
    _extends({ className: (0, _classnames2.default)(classes.root, classNameProp) }, other),
    avatar && _react2.default.createElement(
      'div',
      { className: classes.avatar },
      avatar
    ),
    _react2.default.createElement(
      'div',
      { className: classes.content },
      _react2.default.createElement(
        _Typography2.default,
        {
          variant: avatar ? 'body2' : 'headline',
          component: 'span',
          className: classes.title
        },
        title
      ),
      subheader && _react2.default.createElement(
        _Typography2.default,
        {
          variant: avatar ? 'body2' : 'body1',
          component: 'span',
          color: 'textSecondary',
          className: classes.subheader
        },
        subheader
      )
    ),
    action && _react2.default.createElement(
      'div',
      { className: classes.action },
      action
    )
  );
}

CardHeader.propTypes = {
  /**
   * The action to display in the card header.
   */
  action: _propTypes2.default.node,
  /**
   * The Avatar for the Card Header.
   */
  avatar: _propTypes2.default.node,
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
   * The content of the component.
   */
  subheader: _propTypes2.default.node,
  /**
   * The content of the Card Title.
   */
  title: _propTypes2.default.node
};

CardHeader.defaultProps = {
  component: 'div'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiCardHeader' })(CardHeader);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcQ2FyZFxcQ2FyZEhlYWRlci5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJyb290IiwidGhlbWUiLCJtaXhpbnMiLCJndXR0ZXJzIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJwYWRkaW5nVG9wIiwic3BhY2luZyIsInVuaXQiLCJwYWRkaW5nQm90dG9tIiwiYXZhdGFyIiwiZmxleCIsIm1hcmdpblJpZ2h0IiwiYWN0aW9uIiwiYWxpZ25TZWxmIiwibWFyZ2luVG9wIiwiY29udGVudCIsInRpdGxlIiwic3ViaGVhZGVyIiwiQ2FyZEhlYWRlciIsInByb3BzIiwiY2xhc3NlcyIsImNsYXNzTmFtZVByb3AiLCJjbGFzc05hbWUiLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJvdGhlciIsInByb3BUeXBlcyIsIm5vZGUiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwib25lT2ZUeXBlIiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRU8sSUFBTUEsMEJBQVMsU0FBVEEsTUFBUztBQUFBLFNBQVU7QUFDOUJDLFVBQU1DLE1BQU1DLE1BQU4sQ0FBYUMsT0FBYixDQUFxQjtBQUN6QkMsZUFBUyxNQURnQjtBQUV6QkMsa0JBQVksUUFGYTtBQUd6QkMsa0JBQVlMLE1BQU1NLE9BQU4sQ0FBY0MsSUFBZCxHQUFxQixDQUhSO0FBSXpCQyxxQkFBZVIsTUFBTU0sT0FBTixDQUFjQyxJQUFkLEdBQXFCO0FBSlgsS0FBckIsQ0FEd0I7QUFPOUJFLFlBQVE7QUFDTkMsWUFBTSxVQURBO0FBRU5DLG1CQUFhWCxNQUFNTSxPQUFOLENBQWNDLElBQWQsR0FBcUI7QUFGNUIsS0FQc0I7QUFXOUJLLFlBQVE7QUFDTkYsWUFBTSxVQURBO0FBRU5HLGlCQUFXLFlBRkw7QUFHTkMsaUJBQVdkLE1BQU1NLE9BQU4sQ0FBY0MsSUFBZCxHQUFxQixDQUFDLENBSDNCO0FBSU5JLG1CQUFhWCxNQUFNTSxPQUFOLENBQWNDLElBQWQsR0FBcUIsQ0FBQztBQUo3QixLQVhzQjtBQWlCOUJRLGFBQVM7QUFDUEwsWUFBTTtBQURDLEtBakJxQjtBQW9COUJNLFdBQU8sRUFwQnVCO0FBcUI5QkMsZUFBVztBQXJCbUIsR0FBVjtBQUFBLENBQWY7O0FBd0JQLFNBQVNDLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQUEsTUFFdkJQLE1BRnVCLEdBVXJCTyxLQVZxQixDQUV2QlAsTUFGdUI7QUFBQSxNQUd2QkgsTUFIdUIsR0FVckJVLEtBVnFCLENBR3ZCVixNQUh1QjtBQUFBLE1BSXZCVyxPQUp1QixHQVVyQkQsS0FWcUIsQ0FJdkJDLE9BSnVCO0FBQUEsTUFLWkMsYUFMWSxHQVVyQkYsS0FWcUIsQ0FLdkJHLFNBTHVCO0FBQUEsTUFNWkMsU0FOWSxHQVVyQkosS0FWcUIsQ0FNdkJLLFNBTnVCO0FBQUEsTUFPdkJQLFNBUHVCLEdBVXJCRSxLQVZxQixDQU92QkYsU0FQdUI7QUFBQSxNQVF2QkQsS0FSdUIsR0FVckJHLEtBVnFCLENBUXZCSCxLQVJ1QjtBQUFBLE1BU3BCUyxLQVRvQiw0QkFVckJOLEtBVnFCOztBQVl6QixTQUNFO0FBQUMsYUFBRDtBQUFBLGVBQVcsV0FBVywwQkFBV0MsUUFBUXJCLElBQW5CLEVBQXlCc0IsYUFBekIsQ0FBdEIsSUFBbUVJLEtBQW5FO0FBQ0doQixjQUFVO0FBQUE7QUFBQSxRQUFLLFdBQVdXLFFBQVFYLE1BQXhCO0FBQWlDQTtBQUFqQyxLQURiO0FBRUU7QUFBQTtBQUFBLFFBQUssV0FBV1csUUFBUUwsT0FBeEI7QUFDRTtBQUFBO0FBQUE7QUFDRSxtQkFBU04sU0FBUyxPQUFULEdBQW1CLFVBRDlCO0FBRUUscUJBQVUsTUFGWjtBQUdFLHFCQUFXVyxRQUFRSjtBQUhyQjtBQUtHQTtBQUxILE9BREY7QUFRR0MsbUJBQ0M7QUFBQTtBQUFBO0FBQ0UsbUJBQVNSLFNBQVMsT0FBVCxHQUFtQixPQUQ5QjtBQUVFLHFCQUFVLE1BRlo7QUFHRSxpQkFBTSxlQUhSO0FBSUUscUJBQVdXLFFBQVFIO0FBSnJCO0FBTUdBO0FBTkg7QUFUSixLQUZGO0FBcUJHTCxjQUFVO0FBQUE7QUFBQSxRQUFLLFdBQVdRLFFBQVFSLE1BQXhCO0FBQWlDQTtBQUFqQztBQXJCYixHQURGO0FBeUJEOztBQUVETSxXQUFXUSxTQUFYLEdBQXVCO0FBQ3JCOzs7QUFHQWQsVUFBUSxvQkFBVWUsSUFKRztBQUtyQjs7O0FBR0FsQixVQUFRLG9CQUFVa0IsSUFSRztBQVNyQjs7O0FBR0FQLFdBQVMsb0JBQVVRLE1BQVYsQ0FBaUJDLFVBWkw7QUFhckI7OztBQUdBUCxhQUFXLG9CQUFVUSxNQWhCQTtBQWlCckI7Ozs7QUFJQU4sYUFBVyxvQkFBVU8sU0FBVixDQUFvQixDQUFDLG9CQUFVRCxNQUFYLEVBQW1CLG9CQUFVRSxJQUE3QixDQUFwQixDQXJCVTtBQXNCckI7OztBQUdBZixhQUFXLG9CQUFVVSxJQXpCQTtBQTBCckI7OztBQUdBWCxTQUFPLG9CQUFVVztBQTdCSSxDQUF2Qjs7QUFnQ0FULFdBQVdlLFlBQVgsR0FBMEI7QUFDeEJULGFBQVc7QUFEYSxDQUExQjs7a0JBSWUsMEJBQVcxQixNQUFYLEVBQW1CLEVBQUVvQyxNQUFNLGVBQVIsRUFBbkIsRUFBOENoQixVQUE5QyxDIiwiZmlsZSI6IkNhcmRIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvcm1jcXVlbi9zbHQtdWkvbWF0ZXJpYWwtdWkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnLi4vVHlwb2dyYXBoeSc7XG5cbmV4cG9ydCBjb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICByb290OiB0aGVtZS5taXhpbnMuZ3V0dGVycyh7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDIsXG4gICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZy51bml0ICogMixcbiAgfSksXG4gIGF2YXRhcjoge1xuICAgIGZsZXg6ICcwIDAgYXV0bycsXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDIsXG4gIH0sXG4gIGFjdGlvbjoge1xuICAgIGZsZXg6ICcwIDAgYXV0bycsXG4gICAgYWxpZ25TZWxmOiAnZmxleC1zdGFydCcsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAtMSxcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy51bml0ICogLTIsXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBmbGV4OiAnMSAxIGF1dG8nLFxuICB9LFxuICB0aXRsZToge30sXG4gIHN1YmhlYWRlcjoge30sXG59KTtcblxuZnVuY3Rpb24gQ2FyZEhlYWRlcihwcm9wcykge1xuICBjb25zdCB7XG4gICAgYWN0aW9uLFxuICAgIGF2YXRhcixcbiAgICBjbGFzc2VzLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lUHJvcCxcbiAgICBjb21wb25lbnQ6IENvbXBvbmVudCxcbiAgICBzdWJoZWFkZXIsXG4gICAgdGl0bGUsXG4gICAgLi4ub3RoZXJcbiAgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPENvbXBvbmVudCBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy5yb290LCBjbGFzc05hbWVQcm9wKX0gey4uLm90aGVyfT5cbiAgICAgIHthdmF0YXIgJiYgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfT57YXZhdGFyfTwvZGl2Pn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgIHZhcmlhbnQ9e2F2YXRhciA/ICdib2R5MicgOiAnaGVhZGxpbmUnfVxuICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICB7c3ViaGVhZGVyICYmIChcbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgdmFyaWFudD17YXZhdGFyID8gJ2JvZHkyJyA6ICdib2R5MSd9XG4gICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3ViaGVhZGVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzdWJoZWFkZXJ9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICB7YWN0aW9uICYmIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbn0+e2FjdGlvbn08L2Rpdj59XG4gICAgPC9Db21wb25lbnQ+XG4gICk7XG59XG5cbkNhcmRIZWFkZXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlIGFjdGlvbiB0byBkaXNwbGF5IGluIHRoZSBjYXJkIGhlYWRlci5cbiAgICovXG4gIGFjdGlvbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgQXZhdGFyIGZvciB0aGUgQ2FyZCBIZWFkZXIuXG4gICAqL1xuICBhdmF0YXI6IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICogVXNlZnVsIHRvIGV4dGVuZCB0aGUgc3R5bGUgYXBwbGllZCB0byBjb21wb25lbnRzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgRE9NIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBjb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgc3ViaGVhZGVyOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBDYXJkIFRpdGxlLlxuICAgKi9cbiAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLFxufTtcblxuQ2FyZEhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbXBvbmVudDogJ2RpdicsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywgeyBuYW1lOiAnTXVpQ2FyZEhlYWRlcicgfSkoQ2FyZEhlYWRlcik7XG4iXX0=

/***/ })

});