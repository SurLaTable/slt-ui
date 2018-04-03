webpackJsonpmaterial_ui([85],{

/***/ 310:
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

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      justifyContent: 'center',
      height: 56,
      backgroundColor: theme.palette.background.paper
    }
  };
};

function BottomNavigation(props) {
  var childrenProp = props.children,
      classes = props.classes,
      classNameProp = props.className,
      onChange = props.onChange,
      showLabels = props.showLabels,
      value = props.value,
      other = _objectWithoutProperties(props, ['children', 'classes', 'className', 'onChange', 'showLabels', 'value']);

  var className = (0, _classnames2.default)(classes.root, classNameProp);

  var children = _react2.default.Children.map(childrenProp, function (child, childIndex) {
    if (!_react2.default.isValidElement(child)) {
      return null;
    }

    var childValue = child.props.value || childIndex;
    return _react2.default.cloneElement(child, {
      selected: childValue === value,
      showLabel: child.props.showLabel !== undefined ? child.props.showLabel : showLabels,
      value: childValue,
      onChange: onChange
    });
  });

  return _react2.default.createElement(
    'div',
    _extends({ className: className }, other),
    children
  );
}

BottomNavigation.propTypes = {
  /**
   * The content of the component.
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
   * Callback fired when the value changes.
   *
   * @param {object} event The event source of the callback
   * @param {any} value We default to the index of the child
   */
  onChange: _propTypes2.default.func,
  /**
   * If `true`, all `BottomNavigationAction`s will show their labels.
   * By default, only the selected `BottomNavigationAction` will show its label.
   */
  showLabels: _propTypes2.default.bool,
  /**
   * The value of the currently selected `BottomNavigationAction`.
   */
  value: _propTypes2.default.any
};

BottomNavigation.defaultProps = {
  showLabels: false
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiBottomNavigation' })(BottomNavigation);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcQm90dG9tTmF2aWdhdGlvblxcQm90dG9tTmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJyb290IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwidGhlbWUiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsInBhcGVyIiwiQm90dG9tTmF2aWdhdGlvbiIsInByb3BzIiwiY2hpbGRyZW5Qcm9wIiwiY2hpbGRyZW4iLCJjbGFzc2VzIiwiY2xhc3NOYW1lUHJvcCIsImNsYXNzTmFtZSIsIm9uQ2hhbmdlIiwic2hvd0xhYmVscyIsInZhbHVlIiwib3RoZXIiLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiY2hpbGRJbmRleCIsImlzVmFsaWRFbGVtZW50IiwiY2hpbGRWYWx1ZSIsImNsb25lRWxlbWVudCIsInNlbGVjdGVkIiwic2hvd0xhYmVsIiwidW5kZWZpbmVkIiwicHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJzdHJpbmciLCJmdW5jIiwiYm9vbCIsImFueSIsImRlZmF1bHRQcm9wcyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVPLElBQU1BLDBCQUFTLFNBQVRBLE1BQVM7QUFBQSxTQUFVO0FBQzlCQyxVQUFNO0FBQ0pDLGVBQVMsTUFETDtBQUVKQyxzQkFBZ0IsUUFGWjtBQUdKQyxjQUFRLEVBSEo7QUFJSkMsdUJBQWlCQyxNQUFNQyxPQUFOLENBQWNDLFVBQWQsQ0FBeUJDO0FBSnRDO0FBRHdCLEdBQVY7QUFBQSxDQUFmOztBQVNQLFNBQVNDLGdCQUFULENBQTBCQyxLQUExQixFQUFpQztBQUFBLE1BRW5CQyxZQUZtQixHQVMzQkQsS0FUMkIsQ0FFN0JFLFFBRjZCO0FBQUEsTUFHN0JDLE9BSDZCLEdBUzNCSCxLQVQyQixDQUc3QkcsT0FINkI7QUFBQSxNQUlsQkMsYUFKa0IsR0FTM0JKLEtBVDJCLENBSTdCSyxTQUo2QjtBQUFBLE1BSzdCQyxRQUw2QixHQVMzQk4sS0FUMkIsQ0FLN0JNLFFBTDZCO0FBQUEsTUFNN0JDLFVBTjZCLEdBUzNCUCxLQVQyQixDQU03Qk8sVUFONkI7QUFBQSxNQU83QkMsS0FQNkIsR0FTM0JSLEtBVDJCLENBTzdCUSxLQVA2QjtBQUFBLE1BUTFCQyxLQVIwQiw0QkFTM0JULEtBVDJCOztBQVcvQixNQUFNSyxZQUFZLDBCQUFXRixRQUFRYixJQUFuQixFQUF5QmMsYUFBekIsQ0FBbEI7O0FBRUEsTUFBTUYsV0FBVyxnQkFBTVEsUUFBTixDQUFlQyxHQUFmLENBQW1CVixZQUFuQixFQUFpQyxVQUFDVyxLQUFELEVBQVFDLFVBQVIsRUFBdUI7QUFDdkUsUUFBSSxDQUFDLGdCQUFNQyxjQUFOLENBQXFCRixLQUFyQixDQUFMLEVBQWtDO0FBQ2hDLGFBQU8sSUFBUDtBQUNEOztBQUVELFFBQU1HLGFBQWFILE1BQU1aLEtBQU4sQ0FBWVEsS0FBWixJQUFxQkssVUFBeEM7QUFDQSxXQUFPLGdCQUFNRyxZQUFOLENBQW1CSixLQUFuQixFQUEwQjtBQUMvQkssZ0JBQVVGLGVBQWVQLEtBRE07QUFFL0JVLGlCQUFXTixNQUFNWixLQUFOLENBQVlrQixTQUFaLEtBQTBCQyxTQUExQixHQUFzQ1AsTUFBTVosS0FBTixDQUFZa0IsU0FBbEQsR0FBOERYLFVBRjFDO0FBRy9CQyxhQUFPTyxVQUh3QjtBQUkvQlQ7QUFKK0IsS0FBMUIsQ0FBUDtBQU1ELEdBWmdCLENBQWpCOztBQWNBLFNBQ0U7QUFBQTtBQUFBLGVBQUssV0FBV0QsU0FBaEIsSUFBK0JJLEtBQS9CO0FBQ0dQO0FBREgsR0FERjtBQUtEOztBQUVESCxpQkFBaUJxQixTQUFqQixHQUE2QjtBQUMzQjs7O0FBR0FsQixZQUFVLG9CQUFVbUIsSUFBVixDQUFlQyxVQUpFO0FBSzNCOzs7QUFHQW5CLFdBQVMsb0JBQVVvQixNQUFWLENBQWlCRCxVQVJDO0FBUzNCOzs7QUFHQWpCLGFBQVcsb0JBQVVtQixNQVpNO0FBYTNCOzs7Ozs7QUFNQWxCLFlBQVUsb0JBQVVtQixJQW5CTztBQW9CM0I7Ozs7QUFJQWxCLGNBQVksb0JBQVVtQixJQXhCSztBQXlCM0I7OztBQUdBbEIsU0FBTyxvQkFBVW1CO0FBNUJVLENBQTdCOztBQStCQTVCLGlCQUFpQjZCLFlBQWpCLEdBQWdDO0FBQzlCckIsY0FBWTtBQURrQixDQUFoQzs7a0JBSWUsMEJBQVdsQixNQUFYLEVBQW1CLEVBQUV3QyxNQUFNLHFCQUFSLEVBQW5CLEVBQW9EOUIsZ0JBQXBELEMiLCJmaWxlIjoiQm90dG9tTmF2aWdhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9ybWNxdWVuL3NsdC11aS9tYXRlcmlhbC11aSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5cbmV4cG9ydCBjb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBoZWlnaHQ6IDU2LFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICB9LFxufSk7XG5cbmZ1bmN0aW9uIEJvdHRvbU5hdmlnYXRpb24ocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGNoaWxkcmVuOiBjaGlsZHJlblByb3AsXG4gICAgY2xhc3NlcyxcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVByb3AsXG4gICAgb25DaGFuZ2UsXG4gICAgc2hvd0xhYmVscyxcbiAgICB2YWx1ZSxcbiAgICAuLi5vdGhlclxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lcyhjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZVByb3ApO1xuXG4gIGNvbnN0IGNoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuUHJvcCwgKGNoaWxkLCBjaGlsZEluZGV4KSA9PiB7XG4gICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkVmFsdWUgPSBjaGlsZC5wcm9wcy52YWx1ZSB8fCBjaGlsZEluZGV4O1xuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgIHNlbGVjdGVkOiBjaGlsZFZhbHVlID09PSB2YWx1ZSxcbiAgICAgIHNob3dMYWJlbDogY2hpbGQucHJvcHMuc2hvd0xhYmVsICE9PSB1bmRlZmluZWQgPyBjaGlsZC5wcm9wcy5zaG93TGFiZWwgOiBzaG93TGFiZWxzLFxuICAgICAgdmFsdWU6IGNoaWxkVmFsdWUsXG4gICAgICBvbkNoYW5nZSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB7Li4ub3RoZXJ9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5Cb3R0b21OYXZpZ2F0aW9uLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIFVzZWZ1bCB0byBleHRlbmQgdGhlIHN0eWxlIGFwcGxpZWQgdG8gY29tcG9uZW50cy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFja1xuICAgKiBAcGFyYW0ge2FueX0gdmFsdWUgV2UgZGVmYXVsdCB0byB0aGUgaW5kZXggb2YgdGhlIGNoaWxkXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGFsbCBgQm90dG9tTmF2aWdhdGlvbkFjdGlvbmBzIHdpbGwgc2hvdyB0aGVpciBsYWJlbHMuXG4gICAqIEJ5IGRlZmF1bHQsIG9ubHkgdGhlIHNlbGVjdGVkIGBCb3R0b21OYXZpZ2F0aW9uQWN0aW9uYCB3aWxsIHNob3cgaXRzIGxhYmVsLlxuICAgKi9cbiAgc2hvd0xhYmVsczogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBgQm90dG9tTmF2aWdhdGlvbkFjdGlvbmAuXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcbn07XG5cbkJvdHRvbU5hdmlnYXRpb24uZGVmYXVsdFByb3BzID0ge1xuICBzaG93TGFiZWxzOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7IG5hbWU6ICdNdWlCb3R0b21OYXZpZ2F0aW9uJyB9KShCb3R0b21OYXZpZ2F0aW9uKTtcbiJdfQ==

/***/ })

});