webpackJsonpmaterial_ui([66],{

/***/ 343:
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: 48,
      background: 'rgba(0, 0, 0, 0.4)',
      display: 'flex',
      alignItems: 'center',
      fontFamily: theme.typography.fontFamily
    },
    titlePositionBottom: {
      bottom: 0
    },
    titlePositionTop: {
      top: 0
    },
    rootSubtitle: {
      height: 68
    },
    titleWrap: {
      flexGrow: 1,
      marginLeft: theme.mixins.gutters().paddingLeft,
      marginRight: theme.mixins.gutters().paddingRight,
      color: theme.palette.common.white,
      overflow: 'hidden'
    },
    titleWrapActionPosLeft: {
      marginLeft: 0
    },
    titleWrapActionPosRight: {
      marginRight: 0
    },
    title: {
      fontSize: theme.typography.pxToRem(16),
      lineHeight: '24px',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    },
    subtitle: {
      fontSize: theme.typography.pxToRem(12),
      lineHeight: 1,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    },
    actionIcon: {},
    actionIconActionPosLeft: {
      order: -1
    }
  };
};

function GridListTileBar(props) {
  var _classNames, _classNames2;

  var actionIcon = props.actionIcon,
      actionPosition = props.actionPosition,
      classes = props.classes,
      classNameProp = props.className,
      subtitle = props.subtitle,
      title = props.title,
      titlePosition = props.titlePosition,
      other = _objectWithoutProperties(props, ['actionIcon', 'actionPosition', 'classes', 'className', 'subtitle', 'title', 'titlePosition']);

  var actionPos = actionIcon && actionPosition;
  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, _defineProperty(_classNames, classes.titlePositionBottom, titlePosition === 'bottom'), _defineProperty(_classNames, classes.titlePositionTop, titlePosition === 'top'), _defineProperty(_classNames, classes.rootSubtitle, subtitle), _classNames), classNameProp);

  // Remove the margin between the title / subtitle wrapper, and the Action Icon
  var titleWrapClassName = (0, _classnames2.default)(classes.titleWrap, (_classNames2 = {}, _defineProperty(_classNames2, classes.titleWrapActionPosLeft, actionPos === 'left'), _defineProperty(_classNames2, classes.titleWrapActionPosRight, actionPos === 'right'), _classNames2));

  return _react2.default.createElement(
    'div',
    _extends({ className: className }, other),
    _react2.default.createElement(
      'div',
      { className: titleWrapClassName },
      _react2.default.createElement(
        'div',
        { className: classes.title },
        title
      ),
      subtitle ? _react2.default.createElement(
        'div',
        { className: classes.subtitle },
        subtitle
      ) : null
    ),
    actionIcon ? _react2.default.createElement(
      'div',
      {
        className: (0, _classnames2.default)(classes.actionIcon, _defineProperty({}, classes.actionIconActionPosLeft, actionPos === 'left'))
      },
      actionIcon
    ) : null
  );
}

GridListTileBar.propTypes = {
  /**
   * An IconButton element to be used as secondary action target
   * (primary action target is the tile itself).
   */
  actionIcon: _propTypes2.default.node,
  /**
   * Position of secondary action IconButton.
   */
  actionPosition: _propTypes2.default.oneOf(['left', 'right']),
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * String or element serving as subtitle (support text).
   */
  subtitle: _propTypes2.default.node,
  /**
   * Title to be displayed on tile.
   */
  title: _propTypes2.default.node,
  /**
   * Position of the title bar.
   */
  titlePosition: _propTypes2.default.oneOf(['top', 'bottom'])
};

GridListTileBar.defaultProps = {
  actionPosition: 'right',
  titlePosition: 'bottom'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiGridListTileBar' })(GridListTileBar);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcR3JpZExpc3RcXEdyaWRMaXN0VGlsZUJhci5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJyb290IiwicG9zaXRpb24iLCJsZWZ0IiwicmlnaHQiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJmb250RmFtaWx5IiwidGhlbWUiLCJ0eXBvZ3JhcGh5IiwidGl0bGVQb3NpdGlvbkJvdHRvbSIsImJvdHRvbSIsInRpdGxlUG9zaXRpb25Ub3AiLCJ0b3AiLCJyb290U3VidGl0bGUiLCJ0aXRsZVdyYXAiLCJmbGV4R3JvdyIsIm1hcmdpbkxlZnQiLCJtaXhpbnMiLCJndXR0ZXJzIiwicGFkZGluZ0xlZnQiLCJtYXJnaW5SaWdodCIsInBhZGRpbmdSaWdodCIsImNvbG9yIiwicGFsZXR0ZSIsImNvbW1vbiIsIndoaXRlIiwib3ZlcmZsb3ciLCJ0aXRsZVdyYXBBY3Rpb25Qb3NMZWZ0IiwidGl0bGVXcmFwQWN0aW9uUG9zUmlnaHQiLCJ0aXRsZSIsImZvbnRTaXplIiwicHhUb1JlbSIsImxpbmVIZWlnaHQiLCJ0ZXh0T3ZlcmZsb3ciLCJ3aGl0ZVNwYWNlIiwic3VidGl0bGUiLCJhY3Rpb25JY29uIiwiYWN0aW9uSWNvbkFjdGlvblBvc0xlZnQiLCJvcmRlciIsIkdyaWRMaXN0VGlsZUJhciIsInByb3BzIiwiYWN0aW9uUG9zaXRpb24iLCJjbGFzc2VzIiwiY2xhc3NOYW1lUHJvcCIsImNsYXNzTmFtZSIsInRpdGxlUG9zaXRpb24iLCJvdGhlciIsImFjdGlvblBvcyIsInRpdGxlV3JhcENsYXNzTmFtZSIsInByb3BUeXBlcyIsIm5vZGUiLCJvbmVPZiIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJkZWZhdWx0UHJvcHMiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVPLElBQU1BLDBCQUFTLFNBQVRBLE1BQVM7QUFBQSxTQUFV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VUFBSyxXQUFXTyxRQUFRUCxRQUF4QjtBQUFtQ0E7QUFBbkMsT0FBWCxHQUFnRTtBQUZuRSxLQURGO0FBS0dDLGlCQUNDO0FBQUE7QUFBQTtBQUNFLG1CQUFXLDBCQUFXTSxRQUFRTixVQUFuQixzQkFDUk0sUUFBUUwsdUJBREEsRUFDMEJVLGNBQWMsTUFEeEM7QUFEYjtBQUtHWDtBQUxILEtBREQsR0FRRztBQWJOLEdBREY7QUFpQkQ7O0FBRURHLGdCQUFnQlUsU0FBaEIsR0FBNEI7QUFDMUI7Ozs7QUFJQWIsY0FBWSxvQkFBVWMsSUFMSTtBQU0xQjs7O0FBR0FULGtCQUFnQixvQkFBVVUsS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxPQUFULENBQWhCLENBVFU7QUFVMUI7OztBQUdBVCxXQUFTLG9CQUFVVSxNQUFWLENBQWlCQyxVQWJBO0FBYzFCOzs7QUFHQVQsYUFBVyxvQkFBVVUsTUFqQks7QUFrQjFCOzs7QUFHQW5CLFlBQVUsb0JBQVVlLElBckJNO0FBc0IxQjs7O0FBR0FyQixTQUFPLG9CQUFVcUIsSUF6QlM7QUEwQjFCOzs7QUFHQUwsaUJBQWUsb0JBQVVNLEtBQVYsQ0FBZ0IsQ0FBQyxLQUFELEVBQVEsUUFBUixDQUFoQjtBQTdCVyxDQUE1Qjs7QUFnQ0FaLGdCQUFnQmdCLFlBQWhCLEdBQStCO0FBQzdCZCxrQkFBZ0IsT0FEYTtBQUU3QkksaUJBQWU7QUFGYyxDQUEvQjs7a0JBS2UsMEJBQVdoRCxNQUFYLEVBQW1CLEVBQUUyRCxNQUFNLG9CQUFSLEVBQW5CLEVBQW1EakIsZUFBbkQsQyIsImZpbGUiOiJHcmlkTGlzdFRpbGVCYXIuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvcm1jcXVlbi9zbHQtdWkvbWF0ZXJpYWwtdWkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgaGVpZ2h0OiA0OCxcbiAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwLjQpJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgZm9udEZhbWlseTogdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5LFxuICB9LFxuICB0aXRsZVBvc2l0aW9uQm90dG9tOiB7XG4gICAgYm90dG9tOiAwLFxuICB9LFxuICB0aXRsZVBvc2l0aW9uVG9wOiB7XG4gICAgdG9wOiAwLFxuICB9LFxuICByb290U3VidGl0bGU6IHtcbiAgICBoZWlnaHQ6IDY4LFxuICB9LFxuICB0aXRsZVdyYXA6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5taXhpbnMuZ3V0dGVycygpLnBhZGRpbmdMZWZ0LFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5taXhpbnMuZ3V0dGVycygpLnBhZGRpbmdSaWdodCxcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB9LFxuICB0aXRsZVdyYXBBY3Rpb25Qb3NMZWZ0OiB7XG4gICAgbWFyZ2luTGVmdDogMCxcbiAgfSxcbiAgdGl0bGVXcmFwQWN0aW9uUG9zUmlnaHQ6IHtcbiAgICBtYXJnaW5SaWdodDogMCxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5weFRvUmVtKDE2KSxcbiAgICBsaW5lSGVpZ2h0OiAnMjRweCcsXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgfSxcbiAgc3VidGl0bGU6IHtcbiAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5weFRvUmVtKDEyKSxcbiAgICBsaW5lSGVpZ2h0OiAxLFxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gIH0sXG4gIGFjdGlvbkljb246IHt9LFxuICBhY3Rpb25JY29uQWN0aW9uUG9zTGVmdDoge1xuICAgIG9yZGVyOiAtMSxcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBHcmlkTGlzdFRpbGVCYXIocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGFjdGlvbkljb24sXG4gICAgYWN0aW9uUG9zaXRpb24sXG4gICAgY2xhc3NlcyxcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVByb3AsXG4gICAgc3VidGl0bGUsXG4gICAgdGl0bGUsXG4gICAgdGl0bGVQb3NpdGlvbixcbiAgICAuLi5vdGhlclxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgYWN0aW9uUG9zID0gYWN0aW9uSWNvbiAmJiBhY3Rpb25Qb3NpdGlvbjtcbiAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lcyhcbiAgICBjbGFzc2VzLnJvb3QsXG4gICAge1xuICAgICAgW2NsYXNzZXMudGl0bGVQb3NpdGlvbkJvdHRvbV06IHRpdGxlUG9zaXRpb24gPT09ICdib3R0b20nLFxuICAgICAgW2NsYXNzZXMudGl0bGVQb3NpdGlvblRvcF06IHRpdGxlUG9zaXRpb24gPT09ICd0b3AnLFxuICAgICAgW2NsYXNzZXMucm9vdFN1YnRpdGxlXTogc3VidGl0bGUsXG4gICAgfSxcbiAgICBjbGFzc05hbWVQcm9wLFxuICApO1xuXG4gIC8vIFJlbW92ZSB0aGUgbWFyZ2luIGJldHdlZW4gdGhlIHRpdGxlIC8gc3VidGl0bGUgd3JhcHBlciwgYW5kIHRoZSBBY3Rpb24gSWNvblxuICBjb25zdCB0aXRsZVdyYXBDbGFzc05hbWUgPSBjbGFzc05hbWVzKGNsYXNzZXMudGl0bGVXcmFwLCB7XG4gICAgW2NsYXNzZXMudGl0bGVXcmFwQWN0aW9uUG9zTGVmdF06IGFjdGlvblBvcyA9PT0gJ2xlZnQnLFxuICAgIFtjbGFzc2VzLnRpdGxlV3JhcEFjdGlvblBvc1JpZ2h0XTogYWN0aW9uUG9zID09PSAncmlnaHQnLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHsuLi5vdGhlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dGl0bGVXcmFwQ2xhc3NOYW1lfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9Pnt0aXRsZX08L2Rpdj5cbiAgICAgICAge3N1YnRpdGxlID8gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc3VidGl0bGV9PntzdWJ0aXRsZX08L2Rpdj4gOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgICB7YWN0aW9uSWNvbiA/IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc2VzLmFjdGlvbkljb24sIHtcbiAgICAgICAgICAgIFtjbGFzc2VzLmFjdGlvbkljb25BY3Rpb25Qb3NMZWZ0XTogYWN0aW9uUG9zID09PSAnbGVmdCcsXG4gICAgICAgICAgfSl9XG4gICAgICAgID5cbiAgICAgICAgICB7YWN0aW9uSWNvbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuR3JpZExpc3RUaWxlQmFyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEFuIEljb25CdXR0b24gZWxlbWVudCB0byBiZSB1c2VkIGFzIHNlY29uZGFyeSBhY3Rpb24gdGFyZ2V0XG4gICAqIChwcmltYXJ5IGFjdGlvbiB0YXJnZXQgaXMgdGhlIHRpbGUgaXRzZWxmKS5cbiAgICovXG4gIGFjdGlvbkljb246IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICogUG9zaXRpb24gb2Ygc2Vjb25kYXJ5IGFjdGlvbiBJY29uQnV0dG9uLlxuICAgKi9cbiAgYWN0aW9uUG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAncmlnaHQnXSksXG4gIC8qKlxuICAgKiBVc2VmdWwgdG8gZXh0ZW5kIHRoZSBzdHlsZSBhcHBsaWVkIHRvIGNvbXBvbmVudHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBTdHJpbmcgb3IgZWxlbWVudCBzZXJ2aW5nIGFzIHN1YnRpdGxlIChzdXBwb3J0IHRleHQpLlxuICAgKi9cbiAgc3VidGl0bGU6IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICogVGl0bGUgdG8gYmUgZGlzcGxheWVkIG9uIHRpbGUuXG4gICAqL1xuICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiBQb3NpdGlvbiBvZiB0aGUgdGl0bGUgYmFyLlxuICAgKi9cbiAgdGl0bGVQb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsndG9wJywgJ2JvdHRvbSddKSxcbn07XG5cbkdyaWRMaXN0VGlsZUJhci5kZWZhdWx0UHJvcHMgPSB7XG4gIGFjdGlvblBvc2l0aW9uOiAncmlnaHQnLFxuICB0aXRsZVBvc2l0aW9uOiAnYm90dG9tJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7IG5hbWU6ICdNdWlHcmlkTGlzdFRpbGVCYXInIH0pKEdyaWRMaXN0VGlsZUJhcik7XG4iXX0=

/***/ })

});