webpackJsonpmaterial_ui([79],{

/***/ 316:
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

var _warning = __webpack_require__(3);

var _warning2 = _interopRequireDefault(_warning);

var _withStyles = __webpack_require__(18);

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = exports.styles = {
  root: {
    display: 'block',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  media: {
    width: '100%'
  }
};

var MEDIA_COMPONENTS = ['video', 'audio', 'picture', 'iframe', 'img'];

function CardMedia(props) {
  var classes = props.classes,
      className = props.className,
      Component = props.component,
      image = props.image,
      src = props.src,
      style = props.style,
      other = _objectWithoutProperties(props, ['classes', 'className', 'component', 'image', 'src', 'style']);

  (0, _warning2.default)(Boolean(image || src), 'Material-UI: either `image` or `src` property must be specified.');

  var isMediaComponent = MEDIA_COMPONENTS.indexOf(Component) !== -1;
  var composedStyle = !isMediaComponent && image ? _extends({ backgroundImage: 'url(' + image + ')' }, style) : style;

  return _react2.default.createElement(Component, _extends({
    className: (0, _classnames2.default)(classes.root, _defineProperty({}, classes.media, isMediaComponent), className),
    style: composedStyle,
    src: isMediaComponent ? image || src : undefined
  }, other));
}

CardMedia.propTypes = {
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * Component for rendering image.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * Image to be displayed as a background image.
   * Either `image` or `src` prop must be specified.
   * Note that caller must specify height otherwise the image will not be visible.
   */
  image: _propTypes2.default.string,
  /**
   * An alias for `image` property.
   * Available only with media components.
   * Media components: `video`, `audio`, `picture`, `iframe`, `img`.
   */
  src: _propTypes2.default.string,
  /**
   * @ignore
   */
  style: _propTypes2.default.object
};

CardMedia.defaultProps = {
  component: 'div'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiCardMedia' })(CardMedia);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcQ2FyZFxcQ2FyZE1lZGlhLmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwibWVkaWEiLCJ3aWR0aCIsIk1FRElBX0NPTVBPTkVOVFMiLCJDYXJkTWVkaWEiLCJwcm9wcyIsImNsYXNzZXMiLCJjbGFzc05hbWUiLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJpbWFnZSIsInNyYyIsInN0eWxlIiwib3RoZXIiLCJCb29sZWFuIiwiaXNNZWRpYUNvbXBvbmVudCIsImluZGV4T2YiLCJjb21wb3NlZFN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwidW5kZWZpbmVkIiwicHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsIm9uZU9mVHlwZSIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRU8sSUFBTUEsMEJBQVM7QUFDcEJDLFFBQU07QUFDSkMsYUFBUyxPQURMO0FBRUpDLG9CQUFnQixPQUZaO0FBR0pDLHNCQUFrQixXQUhkO0FBSUpDLHdCQUFvQjtBQUpoQixHQURjO0FBT3BCQyxTQUFPO0FBQ0xDLFdBQU87QUFERjtBQVBhLENBQWY7O0FBWVAsSUFBTUMsbUJBQW1CLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsU0FBbkIsRUFBOEIsUUFBOUIsRUFBd0MsS0FBeEMsQ0FBekI7O0FBRUEsU0FBU0MsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFBQSxNQUNoQkMsT0FEZ0IsR0FDMERELEtBRDFELENBQ2hCQyxPQURnQjtBQUFBLE1BQ1BDLFNBRE8sR0FDMERGLEtBRDFELENBQ1BFLFNBRE87QUFBQSxNQUNlQyxTQURmLEdBQzBESCxLQUQxRCxDQUNJSSxTQURKO0FBQUEsTUFDMEJDLEtBRDFCLEdBQzBETCxLQUQxRCxDQUMwQkssS0FEMUI7QUFBQSxNQUNpQ0MsR0FEakMsR0FDMEROLEtBRDFELENBQ2lDTSxHQURqQztBQUFBLE1BQ3NDQyxLQUR0QyxHQUMwRFAsS0FEMUQsQ0FDc0NPLEtBRHRDO0FBQUEsTUFDZ0RDLEtBRGhELDRCQUMwRFIsS0FEMUQ7O0FBR3hCLHlCQUNFUyxRQUFRSixTQUFTQyxHQUFqQixDQURGLEVBRUUsa0VBRkY7O0FBS0EsTUFBTUksbUJBQW1CWixpQkFBaUJhLE9BQWpCLENBQXlCUixTQUF6QixNQUF3QyxDQUFDLENBQWxFO0FBQ0EsTUFBTVMsZ0JBQ0osQ0FBQ0YsZ0JBQUQsSUFBcUJMLEtBQXJCLGNBQStCUSwwQkFBd0JSLEtBQXhCLE1BQS9CLElBQW9FRSxLQUFwRSxJQUE4RUEsS0FEaEY7O0FBR0EsU0FDRSw4QkFBQyxTQUFEO0FBQ0UsZUFBVywwQkFDVE4sUUFBUVYsSUFEQyxzQkFHTlUsUUFBUUwsS0FIRixFQUdVYyxnQkFIVixHQUtUUixTQUxTLENBRGI7QUFRRSxXQUFPVSxhQVJUO0FBU0UsU0FBS0YsbUJBQW1CTCxTQUFTQyxHQUE1QixHQUFrQ1E7QUFUekMsS0FVTU4sS0FWTixFQURGO0FBY0Q7O0FBRURULFVBQVVnQixTQUFWLEdBQXNCO0FBQ3BCOzs7QUFHQWQsV0FBUyxvQkFBVWUsTUFBVixDQUFpQkMsVUFKTjtBQUtwQjs7O0FBR0FmLGFBQVcsb0JBQVVnQixNQVJEO0FBU3BCOzs7O0FBSUFkLGFBQVcsb0JBQVVlLFNBQVYsQ0FBb0IsQ0FBQyxvQkFBVUQsTUFBWCxFQUFtQixvQkFBVUUsSUFBN0IsQ0FBcEIsQ0FiUztBQWNwQjs7Ozs7QUFLQWYsU0FBTyxvQkFBVWEsTUFuQkc7QUFvQnBCOzs7OztBQUtBWixPQUFLLG9CQUFVWSxNQXpCSztBQTBCcEI7OztBQUdBWCxTQUFPLG9CQUFVUztBQTdCRyxDQUF0Qjs7QUFnQ0FqQixVQUFVc0IsWUFBVixHQUF5QjtBQUN2QmpCLGFBQVc7QUFEWSxDQUF6Qjs7a0JBSWUsMEJBQVdkLE1BQVgsRUFBbUIsRUFBRWdDLE1BQU0sY0FBUixFQUFuQixFQUE2Q3ZCLFNBQTdDLEMiLCJmaWxlIjoiQ2FyZE1lZGlhLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3JtY3F1ZW4vc2x0LXVpL21hdGVyaWFsLXVpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3YXJuaW5nIGZyb20gJ3dhcm5pbmcnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0ge1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICB9LFxuICBtZWRpYToge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gIH0sXG59O1xuXG5jb25zdCBNRURJQV9DT01QT05FTlRTID0gWyd2aWRlbycsICdhdWRpbycsICdwaWN0dXJlJywgJ2lmcmFtZScsICdpbWcnXTtcblxuZnVuY3Rpb24gQ2FyZE1lZGlhKHByb3BzKSB7XG4gIGNvbnN0IHsgY2xhc3NlcywgY2xhc3NOYW1lLCBjb21wb25lbnQ6IENvbXBvbmVudCwgaW1hZ2UsIHNyYywgc3R5bGUsIC4uLm90aGVyIH0gPSBwcm9wcztcblxuICB3YXJuaW5nKFxuICAgIEJvb2xlYW4oaW1hZ2UgfHwgc3JjKSxcbiAgICAnTWF0ZXJpYWwtVUk6IGVpdGhlciBgaW1hZ2VgIG9yIGBzcmNgIHByb3BlcnR5IG11c3QgYmUgc3BlY2lmaWVkLicsXG4gICk7XG5cbiAgY29uc3QgaXNNZWRpYUNvbXBvbmVudCA9IE1FRElBX0NPTVBPTkVOVFMuaW5kZXhPZihDb21wb25lbnQpICE9PSAtMTtcbiAgY29uc3QgY29tcG9zZWRTdHlsZSA9XG4gICAgIWlzTWVkaWFDb21wb25lbnQgJiYgaW1hZ2UgPyB7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlfSlgLCAuLi5zdHlsZSB9IDogc3R5bGU7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29tcG9uZW50XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgIGNsYXNzZXMucm9vdCxcbiAgICAgICAge1xuICAgICAgICAgIFtjbGFzc2VzLm1lZGlhXTogaXNNZWRpYUNvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICAgIHN0eWxlPXtjb21wb3NlZFN0eWxlfVxuICAgICAgc3JjPXtpc01lZGlhQ29tcG9uZW50ID8gaW1hZ2UgfHwgc3JjIDogdW5kZWZpbmVkfVxuICAgICAgey4uLm90aGVyfVxuICAgIC8+XG4gICk7XG59XG5cbkNhcmRNZWRpYS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBVc2VmdWwgdG8gZXh0ZW5kIHRoZSBzdHlsZSBhcHBsaWVkIHRvIGNvbXBvbmVudHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBDb21wb25lbnQgZm9yIHJlbmRlcmluZyBpbWFnZS5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIERPTSBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAvKipcbiAgICogSW1hZ2UgdG8gYmUgZGlzcGxheWVkIGFzIGEgYmFja2dyb3VuZCBpbWFnZS5cbiAgICogRWl0aGVyIGBpbWFnZWAgb3IgYHNyY2AgcHJvcCBtdXN0IGJlIHNwZWNpZmllZC5cbiAgICogTm90ZSB0aGF0IGNhbGxlciBtdXN0IHNwZWNpZnkgaGVpZ2h0IG90aGVyd2lzZSB0aGUgaW1hZ2Ugd2lsbCBub3QgYmUgdmlzaWJsZS5cbiAgICovXG4gIGltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogQW4gYWxpYXMgZm9yIGBpbWFnZWAgcHJvcGVydHkuXG4gICAqIEF2YWlsYWJsZSBvbmx5IHdpdGggbWVkaWEgY29tcG9uZW50cy5cbiAgICogTWVkaWEgY29tcG9uZW50czogYHZpZGVvYCwgYGF1ZGlvYCwgYHBpY3R1cmVgLCBgaWZyYW1lYCwgYGltZ2AuXG4gICAqL1xuICBzcmM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbkNhcmRNZWRpYS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbXBvbmVudDogJ2RpdicsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywgeyBuYW1lOiAnTXVpQ2FyZE1lZGlhJyB9KShDYXJkTWVkaWEpO1xuIl19

/***/ })

});