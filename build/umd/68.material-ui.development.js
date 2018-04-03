webpackJsonpmaterial_ui([68],{

/***/ 341:
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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = exports.styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflowY: 'auto',
    listStyle: 'none',
    padding: 0,
    WebkitOverflowScrolling: 'touch' // Add iOS momentum scrolling.
  }
};

function GridList(props) {
  var cellHeight = props.cellHeight,
      children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      cols = props.cols,
      Component = props.component,
      spacing = props.spacing,
      style = props.style,
      other = _objectWithoutProperties(props, ['cellHeight', 'children', 'classes', 'className', 'cols', 'component', 'spacing', 'style']);

  return _react2.default.createElement(
    Component,
    _extends({
      className: (0, _classnames2.default)(classes.root, classNameProp),
      style: _extends({ margin: -spacing / 2 }, style)
    }, other),
    _react2.default.Children.map(children, function (currentChild) {
      if (!_react2.default.isValidElement(currentChild)) {
        return null;
      }
      var childCols = currentChild.props.cols || 1;
      var childRows = currentChild.props.rows || 1;

      return _react2.default.cloneElement(currentChild, {
        style: _extends({
          width: 100 / cols * childCols + '%',
          height: cellHeight === 'auto' ? 'auto' : cellHeight * childRows + spacing,
          padding: spacing / 2
        }, currentChild.props.style)
      });
    })
  );
}

GridList.propTypes = {
  /**
   * Number of px for one cell height.
   * You can set `'auto'` if you want to let the children determine the height.
   */
  cellHeight: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.oneOf(['auto'])]),
  /**
   * Grid Tiles that will be in Grid List.
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
   * Number of columns.
   */
  cols: _propTypes2.default.number,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * Number of px for the spacing between tiles.
   */
  spacing: _propTypes2.default.number,
  /**
   * @ignore
   */
  style: _propTypes2.default.object
};

GridList.defaultProps = {
  cellHeight: 180,
  cols: 2,
  component: 'ul',
  spacing: 4
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiGridList' })(GridList);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcR3JpZExpc3RcXEdyaWRMaXN0LmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJvdmVyZmxvd1kiLCJsaXN0U3R5bGUiLCJwYWRkaW5nIiwiV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmciLCJHcmlkTGlzdCIsInByb3BzIiwiY2VsbEhlaWdodCIsImNoaWxkcmVuIiwiY2xhc3NlcyIsImNsYXNzTmFtZVByb3AiLCJjbGFzc05hbWUiLCJjb2xzIiwiQ29tcG9uZW50IiwiY29tcG9uZW50Iiwic3BhY2luZyIsInN0eWxlIiwib3RoZXIiLCJtYXJnaW4iLCJDaGlsZHJlbiIsIm1hcCIsImlzVmFsaWRFbGVtZW50IiwiY3VycmVudENoaWxkIiwiY2hpbGRDb2xzIiwiY2hpbGRSb3dzIiwicm93cyIsImNsb25lRWxlbWVudCIsIndpZHRoIiwiaGVpZ2h0IiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwibnVtYmVyIiwib25lT2YiLCJub2RlIiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsInN0cmluZyIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFTyxJQUFNQSwwQkFBUztBQUNwQkMsUUFBTTtBQUNKQyxhQUFTLE1BREw7QUFFSkMsY0FBVSxNQUZOO0FBR0pDLGVBQVcsTUFIUDtBQUlKQyxlQUFXLE1BSlA7QUFLSkMsYUFBUyxDQUxMO0FBTUpDLDZCQUF5QixPQU5yQixDQU04QjtBQU45QjtBQURjLENBQWY7O0FBV1AsU0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFBQSxNQUVyQkMsVUFGcUIsR0FXbkJELEtBWG1CLENBRXJCQyxVQUZxQjtBQUFBLE1BR3JCQyxRQUhxQixHQVduQkYsS0FYbUIsQ0FHckJFLFFBSHFCO0FBQUEsTUFJckJDLE9BSnFCLEdBV25CSCxLQVhtQixDQUlyQkcsT0FKcUI7QUFBQSxNQUtWQyxhQUxVLEdBV25CSixLQVhtQixDQUtyQkssU0FMcUI7QUFBQSxNQU1yQkMsSUFOcUIsR0FXbkJOLEtBWG1CLENBTXJCTSxJQU5xQjtBQUFBLE1BT1ZDLFNBUFUsR0FXbkJQLEtBWG1CLENBT3JCUSxTQVBxQjtBQUFBLE1BUXJCQyxPQVJxQixHQVduQlQsS0FYbUIsQ0FRckJTLE9BUnFCO0FBQUEsTUFTckJDLEtBVHFCLEdBV25CVixLQVhtQixDQVNyQlUsS0FUcUI7QUFBQSxNQVVsQkMsS0FWa0IsNEJBV25CWCxLQVhtQjs7QUFhdkIsU0FDRTtBQUFDLGFBQUQ7QUFBQTtBQUNFLGlCQUFXLDBCQUFXRyxRQUFRWCxJQUFuQixFQUF5QlksYUFBekIsQ0FEYjtBQUVFLHdCQUFTUSxRQUFRLENBQUNILE9BQUQsR0FBVyxDQUE1QixJQUFrQ0MsS0FBbEM7QUFGRixPQUdNQyxLQUhOO0FBS0csb0JBQU1FLFFBQU4sQ0FBZUMsR0FBZixDQUFtQlosUUFBbkIsRUFBNkIsd0JBQWdCO0FBQzVDLFVBQUksQ0FBQyxnQkFBTWEsY0FBTixDQUFxQkMsWUFBckIsQ0FBTCxFQUF5QztBQUN2QyxlQUFPLElBQVA7QUFDRDtBQUNELFVBQU1DLFlBQVlELGFBQWFoQixLQUFiLENBQW1CTSxJQUFuQixJQUEyQixDQUE3QztBQUNBLFVBQU1ZLFlBQVlGLGFBQWFoQixLQUFiLENBQW1CbUIsSUFBbkIsSUFBMkIsQ0FBN0M7O0FBRUEsYUFBTyxnQkFBTUMsWUFBTixDQUFtQkosWUFBbkIsRUFBaUM7QUFDdENOLGVBQU8sU0FDTDtBQUNFVyxpQkFBVSxNQUFNZixJQUFOLEdBQWFXLFNBQXZCLE1BREY7QUFFRUssa0JBQVFyQixlQUFlLE1BQWYsR0FBd0IsTUFBeEIsR0FBaUNBLGFBQWFpQixTQUFiLEdBQXlCVCxPQUZwRTtBQUdFWixtQkFBU1ksVUFBVTtBQUhyQixTQURLLEVBTUxPLGFBQWFoQixLQUFiLENBQW1CVSxLQU5kO0FBRCtCLE9BQWpDLENBQVA7QUFVRCxLQWpCQTtBQUxILEdBREY7QUEwQkQ7O0FBRURYLFNBQVN3QixTQUFULEdBQXFCO0FBQ25COzs7O0FBSUF0QixjQUFZLG9CQUFVdUIsU0FBVixDQUFvQixDQUFDLG9CQUFVQyxNQUFYLEVBQW1CLG9CQUFVQyxLQUFWLENBQWdCLENBQUMsTUFBRCxDQUFoQixDQUFuQixDQUFwQixDQUxPO0FBTW5COzs7QUFHQXhCLFlBQVUsb0JBQVV5QixJQUFWLENBQWVDLFVBVE47QUFVbkI7OztBQUdBekIsV0FBUyxvQkFBVTBCLE1BQVYsQ0FBaUJELFVBYlA7QUFjbkI7OztBQUdBdkIsYUFBVyxvQkFBVXlCLE1BakJGO0FBa0JuQjs7O0FBR0F4QixRQUFNLG9CQUFVbUIsTUFyQkc7QUFzQm5COzs7O0FBSUFqQixhQUFXLG9CQUFVZ0IsU0FBVixDQUFvQixDQUFDLG9CQUFVTSxNQUFYLEVBQW1CLG9CQUFVQyxJQUE3QixDQUFwQixDQTFCUTtBQTJCbkI7OztBQUdBdEIsV0FBUyxvQkFBVWdCLE1BOUJBO0FBK0JuQjs7O0FBR0FmLFNBQU8sb0JBQVVtQjtBQWxDRSxDQUFyQjs7QUFxQ0E5QixTQUFTaUMsWUFBVCxHQUF3QjtBQUN0Qi9CLGNBQVksR0FEVTtBQUV0QkssUUFBTSxDQUZnQjtBQUd0QkUsYUFBVyxJQUhXO0FBSXRCQyxXQUFTO0FBSmEsQ0FBeEI7O2tCQU9lLDBCQUFXbEIsTUFBWCxFQUFtQixFQUFFMEMsTUFBTSxhQUFSLEVBQW5CLEVBQTRDbEMsUUFBNUMsQyIsImZpbGUiOiJHcmlkTGlzdC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9ybWNxdWVuL3NsdC11aS9tYXRlcmlhbC11aSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5cbmV4cG9ydCBjb25zdCBzdHlsZXMgPSB7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICBsaXN0U3R5bGU6ICdub25lJyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiAndG91Y2gnLCAvLyBBZGQgaU9TIG1vbWVudHVtIHNjcm9sbGluZy5cbiAgfSxcbn07XG5cbmZ1bmN0aW9uIEdyaWRMaXN0KHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBjZWxsSGVpZ2h0LFxuICAgIGNoaWxkcmVuLFxuICAgIGNsYXNzZXMsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVQcm9wLFxuICAgIGNvbHMsXG4gICAgY29tcG9uZW50OiBDb21wb25lbnQsXG4gICAgc3BhY2luZyxcbiAgICBzdHlsZSxcbiAgICAuLi5vdGhlclxuICB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29tcG9uZW50XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy5yb290LCBjbGFzc05hbWVQcm9wKX1cbiAgICAgIHN0eWxlPXt7IG1hcmdpbjogLXNwYWNpbmcgLyAyLCAuLi5zdHlsZSB9fVxuICAgICAgey4uLm90aGVyfVxuICAgID5cbiAgICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGN1cnJlbnRDaGlsZCA9PiB7XG4gICAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY3VycmVudENoaWxkKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoaWxkQ29scyA9IGN1cnJlbnRDaGlsZC5wcm9wcy5jb2xzIHx8IDE7XG4gICAgICAgIGNvbnN0IGNoaWxkUm93cyA9IGN1cnJlbnRDaGlsZC5wcm9wcy5yb3dzIHx8IDE7XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjdXJyZW50Q2hpbGQsIHtcbiAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgd2lkdGg6IGAkezEwMCAvIGNvbHMgKiBjaGlsZENvbHN9JWAsXG4gICAgICAgICAgICAgIGhlaWdodDogY2VsbEhlaWdodCA9PT0gJ2F1dG8nID8gJ2F1dG8nIDogY2VsbEhlaWdodCAqIGNoaWxkUm93cyArIHNwYWNpbmcsXG4gICAgICAgICAgICAgIHBhZGRpbmc6IHNwYWNpbmcgLyAyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGN1cnJlbnRDaGlsZC5wcm9wcy5zdHlsZSxcbiAgICAgICAgICApLFxuICAgICAgICB9KTtcbiAgICAgIH0pfVxuICAgIDwvQ29tcG9uZW50PlxuICApO1xufVxuXG5HcmlkTGlzdC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBOdW1iZXIgb2YgcHggZm9yIG9uZSBjZWxsIGhlaWdodC5cbiAgICogWW91IGNhbiBzZXQgYCdhdXRvJ2AgaWYgeW91IHdhbnQgdG8gbGV0IHRoZSBjaGlsZHJlbiBkZXRlcm1pbmUgdGhlIGhlaWdodC5cbiAgICovXG4gIGNlbGxIZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSldKSxcbiAgLyoqXG4gICAqIEdyaWQgVGlsZXMgdGhhdCB3aWxsIGJlIGluIEdyaWQgTGlzdC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogVXNlZnVsIHRvIGV4dGVuZCB0aGUgc3R5bGUgYXBwbGllZCB0byBjb21wb25lbnRzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogTnVtYmVyIG9mIGNvbHVtbnMuXG4gICAqL1xuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgRE9NIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBjb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gIC8qKlxuICAgKiBOdW1iZXIgb2YgcHggZm9yIHRoZSBzcGFjaW5nIGJldHdlZW4gdGlsZXMuXG4gICAqL1xuICBzcGFjaW5nOiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5HcmlkTGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNlbGxIZWlnaHQ6IDE4MCxcbiAgY29sczogMixcbiAgY29tcG9uZW50OiAndWwnLFxuICBzcGFjaW5nOiA0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHsgbmFtZTogJ011aUdyaWRMaXN0JyB9KShHcmlkTGlzdCk7XG4iXX0=

/***/ })

});