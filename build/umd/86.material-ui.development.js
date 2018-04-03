webpackJsonpmaterial_ui([86],{

/***/ 309:
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

var RADIUS = 12;

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      position: 'relative',
      display: 'inline-flex',
      // For correct alignment with the text.
      verticalAlign: 'middle'
    },
    badge: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: -RADIUS,
      right: -RADIUS,
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeight,
      fontSize: theme.typography.pxToRem(RADIUS),
      width: RADIUS * 2,
      height: RADIUS * 2,
      borderRadius: '50%',
      backgroundColor: theme.palette.color,
      color: theme.palette.textColor,
      zIndex: 1 // Render the badge on top of potential ripples.
    },
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    },
    colorError: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText
    }
  };
};

function Badge(props) {
  var badgeContent = props.badgeContent,
      children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      color = props.color,
      ComponentProp = props.component,
      other = _objectWithoutProperties(props, ['badgeContent', 'children', 'classes', 'className', 'color', 'component']);

  var badgeClassName = (0, _classnames2.default)(classes.badge, _defineProperty({}, classes['color' + (0, _helpers.capitalize)(color)], color !== 'default'));

  return _react2.default.createElement(
    ComponentProp,
    _extends({ className: (0, _classnames2.default)(classes.root, classNameProp) }, other),
    children,
    _react2.default.createElement(
      'span',
      { className: badgeClassName },
      badgeContent
    )
  );
}

Badge.propTypes = {
  /**
   * The content rendered within the badge.
   */
  badgeContent: _propTypes2.default.node.isRequired,
  /**
   * The badge will be added relative to this node.
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
  color: _propTypes2.default.oneOf(['default', 'primary', 'secondary', 'error']),
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func])
};

Badge.defaultProps = {
  color: 'default',
  component: 'span'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiBadge' })(Badge);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcQmFkZ2VcXEJhZGdlLmpzIl0sIm5hbWVzIjpbIlJBRElVUyIsInN0eWxlcyIsInJvb3QiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJ2ZXJ0aWNhbEFsaWduIiwiYmFkZ2UiLCJmbGV4RGlyZWN0aW9uIiwiZmxleFdyYXAiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduQ29udGVudCIsImFsaWduSXRlbXMiLCJ0b3AiLCJyaWdodCIsImZvbnRGYW1pbHkiLCJ0aGVtZSIsInR5cG9ncmFwaHkiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJweFRvUmVtIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiY29sb3IiLCJ0ZXh0Q29sb3IiLCJ6SW5kZXgiLCJjb2xvclByaW1hcnkiLCJwcmltYXJ5IiwibWFpbiIsImNvbnRyYXN0VGV4dCIsImNvbG9yU2Vjb25kYXJ5Iiwic2Vjb25kYXJ5IiwiY29sb3JFcnJvciIsImVycm9yIiwiQmFkZ2UiLCJwcm9wcyIsImJhZGdlQ29udGVudCIsImNoaWxkcmVuIiwiY2xhc3NlcyIsImNsYXNzTmFtZVByb3AiLCJjbGFzc05hbWUiLCJDb21wb25lbnRQcm9wIiwiY29tcG9uZW50Iiwib3RoZXIiLCJiYWRnZUNsYXNzTmFtZSIsInByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwib2JqZWN0Iiwic3RyaW5nIiwib25lT2YiLCJvbmVPZlR5cGUiLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEVBQWY7O0FBRU8sSUFBTUMsMEJBQVMsU0FBVEEsTUFBUztBQUFBLFNBQVU7QUFDOUJDLFVBQU07QUFDSkMsZ0JBQVUsVUFETjtBQUVKQyxlQUFTLGFBRkw7QUFHSjtBQUNBQyxxQkFBZTtBQUpYLEtBRHdCO0FB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QUF6QkssQ0FBbEI7O0FBNEJBbEIsTUFBTW1CLFlBQU4sR0FBcUI7QUFDbkI5QixTQUFPLFNBRFk7QUFFbkJtQixhQUFXO0FBRlEsQ0FBckI7O2tCQUtlLDBCQUFXM0MsTUFBWCxFQUFtQixFQUFFdUQsTUFBTSxVQUFSLEVBQW5CLEVBQXlDcEIsS0FBekMsQyIsImZpbGUiOiJCYWRnZS5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9ybWNxdWVuL3NsdC11aS9tYXRlcmlhbC11aSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgeyBjYXBpdGFsaXplIH0gZnJvbSAnLi4vdXRpbHMvaGVscGVycyc7XG5cbmNvbnN0IFJBRElVUyA9IDEyO1xuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgLy8gRm9yIGNvcnJlY3QgYWxpZ25tZW50IHdpdGggdGhlIHRleHQuXG4gICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIH0sXG4gIGJhZGdlOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAtUkFESVVTLFxuICAgIHJpZ2h0OiAtUkFESVVTLFxuICAgIGZvbnRGYW1pbHk6IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseSxcbiAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQsXG4gICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbShSQURJVVMpLFxuICAgIHdpZHRoOiBSQURJVVMgKiAyLFxuICAgIGhlaWdodDogUkFESVVTICogMixcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb2xvcixcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0Q29sb3IsXG4gICAgekluZGV4OiAxLCAvLyBSZW5kZXIgdGhlIGJhZGdlIG9uIHRvcCBvZiBwb3RlbnRpYWwgcmlwcGxlcy5cbiAgfSxcbiAgY29sb3JQcmltYXJ5OiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmNvbnRyYXN0VGV4dCxcbiAgfSxcbiAgY29sb3JTZWNvbmRhcnk6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmNvbnRyYXN0VGV4dCxcbiAgfSxcbiAgY29sb3JFcnJvcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5tYWluLFxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmVycm9yLmNvbnRyYXN0VGV4dCxcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBCYWRnZShwcm9wcykge1xuICBjb25zdCB7XG4gICAgYmFkZ2VDb250ZW50LFxuICAgIGNoaWxkcmVuLFxuICAgIGNsYXNzZXMsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVQcm9wLFxuICAgIGNvbG9yLFxuICAgIGNvbXBvbmVudDogQ29tcG9uZW50UHJvcCxcbiAgICAuLi5vdGhlclxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgYmFkZ2VDbGFzc05hbWUgPSBjbGFzc05hbWVzKGNsYXNzZXMuYmFkZ2UsIHtcbiAgICBbY2xhc3Nlc1tgY29sb3Ike2NhcGl0YWxpemUoY29sb3IpfWBdXTogY29sb3IgIT09ICdkZWZhdWx0JyxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29tcG9uZW50UHJvcCBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy5yb290LCBjbGFzc05hbWVQcm9wKX0gey4uLm90aGVyfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YmFkZ2VDbGFzc05hbWV9PntiYWRnZUNvbnRlbnR9PC9zcGFuPlxuICAgIDwvQ29tcG9uZW50UHJvcD5cbiAgKTtcbn1cblxuQmFkZ2UucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlIGNvbnRlbnQgcmVuZGVyZWQgd2l0aGluIHRoZSBiYWRnZS5cbiAgICovXG4gIGJhZGdlQ29udGVudDogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIFRoZSBiYWRnZSB3aWxsIGJlIGFkZGVkIHJlbGF0aXZlIHRvIHRoaXMgbm9kZS5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogVXNlZnVsIHRvIGV4dGVuZCB0aGUgc3R5bGUgYXBwbGllZCB0byBjb21wb25lbnRzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBjb21wb25lbnQuIEl0IHN1cHBvcnRzIHRob3NlIHRoZW1lIGNvbG9ycyB0aGF0IG1ha2Ugc2Vuc2UgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAncHJpbWFyeScsICdzZWNvbmRhcnknLCAnZXJyb3InXSksXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSByb290IG5vZGUuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBET00gZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbn07XG5cbkJhZGdlLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29sb3I6ICdkZWZhdWx0JyxcbiAgY29tcG9uZW50OiAnc3BhbicsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywgeyBuYW1lOiAnTXVpQmFkZ2UnIH0pKEJhZGdlKTtcbiJdfQ==

/***/ })

});