webpackJsonpmaterial_ui([67],{

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(23);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactEventListener = __webpack_require__(59);

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _debounce = __webpack_require__(101);

var _debounce2 = _interopRequireDefault(_debounce);

var _withStyles = __webpack_require__(18);

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = exports.styles = {
  root: {
    boxSizing: 'border-box',
    flexShrink: 0
  },
  tile: {
    position: 'relative',
    display: 'block', // In case it's not renderd with a div.
    height: '100%',
    overflow: 'hidden'
  },
  imgFullHeight: {
    height: '100%',
    transform: 'translateX(-50%)',
    position: 'relative',
    left: '50%'
  },
  imgFullWidth: {
    width: '100%',
    position: 'relative',
    transform: 'translateY(-50%)',
    top: '50%'
  }
};

var GridListTile = function (_React$Component) {
  _inherits(GridListTile, _React$Component);

  function GridListTile() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GridListTile);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GridListTile.__proto__ || Object.getPrototypeOf(GridListTile)).call.apply(_ref, [this].concat(args))), _this), _this.imgElement = null, _this.handleResize = (0, _debounce2.default)(function () {
      _this.fit();
    }, 166), _this.fit = function () {
      var imgElement = _this.imgElement;

      if (!imgElement) {
        return;
      }

      if (!imgElement.complete) {
        return;
      }

      if (imgElement.width / imgElement.height > imgElement.parentNode.offsetWidth / imgElement.parentNode.offsetHeight) {
        var _imgElement$classList, _imgElement$classList2;

        (_imgElement$classList = imgElement.classList).remove.apply(_imgElement$classList, _toConsumableArray(_this.props.classes.imgFullWidth.split(' ')));
        (_imgElement$classList2 = imgElement.classList).add.apply(_imgElement$classList2, _toConsumableArray(_this.props.classes.imgFullHeight.split(' ')));
      } else {
        var _imgElement$classList3, _imgElement$classList4;

        (_imgElement$classList3 = imgElement.classList).remove.apply(_imgElement$classList3, _toConsumableArray(_this.props.classes.imgFullHeight.split(' ')));
        (_imgElement$classList4 = imgElement.classList).add.apply(_imgElement$classList4, _toConsumableArray(_this.props.classes.imgFullWidth.split(' ')));
      }

      imgElement.removeEventListener('load', _this.fit);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GridListTile, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.ensureImageCover();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.ensureImageCover();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.handleResize.cancel();
    } // Corresponds to 10 frames at 60 Hz.

  }, {
    key: 'ensureImageCover',
    value: function ensureImageCover() {
      if (!this.imgElement) {
        return;
      }

      if (this.imgElement.complete) {
        this.fit();
      } else {
        this.imgElement.addEventListener('load', this.fit);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          cols = _props.cols,
          Component = _props.component,
          rows = _props.rows,
          other = _objectWithoutProperties(_props, ['children', 'classes', 'className', 'cols', 'component', 'rows']);

      return _react2.default.createElement(
        Component,
        _extends({ className: (0, _classnames2.default)(classes.root, className) }, other),
        _react2.default.createElement(_reactEventListener2.default, { target: 'window', onResize: this.handleResize }),
        _react2.default.createElement(
          'div',
          { className: classes.tile },
          _react2.default.Children.map(children, function (child) {
            if (child && child.type === 'img') {
              return _react2.default.cloneElement(child, {
                key: 'img',
                ref: function ref(node) {
                  _this2.imgElement = node;
                }
              });
            }

            return child;
          })
        )
      );
    }
  }]);

  return GridListTile;
}(_react2.default.Component);

GridListTile.propTypes = {
  /**
   * Theoretically you can pass any node as children, but the main use case is to pass an img,
   * in which case GridListTile takes care of making the image "cover" available space
   * (similar to `background-size: cover` or to `object-fit: cover`).
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
   * Width of the tile in number of grid cells.
   */
  cols: _propTypes2.default.number,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * Height of the tile in number of grid cells.
   */
  rows: _propTypes2.default.number
};

GridListTile.defaultProps = {
  cols: 1,
  component: 'li',
  rows: 1
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiGridListTile' })(GridListTile);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcR3JpZExpc3RcXEdyaWRMaXN0VGlsZS5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJyb290IiwiYm94U2l6aW5nIiwiZmxleFNocmluayIsInRpbGUiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJoZWlnaHQiLCJvdmVyZmxvdyIsImltZ0Z1bGxIZWlnaHQiLCJ0cmFuc2Zvcm0iLCJsZWZ0IiwiaW1nRnVsbFdpZHRoIiwid2lkdGgiLCJ0b3AiLCJHcmlkTGlzdFRpbGUiLCJpbWdFbGVtZW50IiwiaGFuZGxlUmVzaXplIiwiZml0IiwiY29tcGxldGUiLCJwYXJlbnROb2RlIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJwcm9wcyIsImNsYXNzZXMiLCJzcGxpdCIsImFkZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlbnN1cmVJbWFnZUNvdmVyIiwiY2FuY2VsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiY29scyIsIkNvbXBvbmVudCIsImNvbXBvbmVudCIsInJvd3MiLCJvdGhlciIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJ0eXBlIiwiY2xvbmVFbGVtZW50Iiwia2V5IiwicmVmIiwibm9kZSIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJudW1iZXIiLCJvbmVPZlR5cGUiLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSwwQkFBUztBQUNwQkMsUUFBTTtBQUNKQyxlQUFXLFlBRFA7QUFFSkMsZ0JBQVk7QUFGUixHQURjO0FBS3BCQyxRQUFNO0FBQ0pDLGNBQVUsVUFETjtBQUVKQyxhQUFTLE9BRkwsRUFFYztBQUNsQkMsWUFBUSxNQUhKO0FBSUpDLGNBQVU7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LEVBQTZCLGlCQUFTO0FBQ3JDLGdCQUFJUyxTQUFTQSxNQUFNQyxJQUFOLEtBQWUsS0FBNUIsRUFBbUM7QUFDakMscUJBQU8sZ0JBQU1DLFlBQU4sQ0FBbUJGLEtBQW5CLEVBQTBCO0FBQy9CRyxxQkFBSyxLQUQwQjtBQUUvQkMscUJBQUssbUJBQVE7QUFDWCx5QkFBSzlCLFVBQUwsR0FBa0IrQixJQUFsQjtBQUNEO0FBSjhCLGVBQTFCLENBQVA7QUFNRDs7QUFFRCxtQkFBT0wsS0FBUDtBQUNELFdBWEE7QUFESDtBQUZGLE9BREY7QUFtQkQ7Ozs7RUE5RXdCLGdCQUFNTixTOztBQWlGakNyQixhQUFhaUMsU0FBYixHQUF5QjtBQUN2Qjs7Ozs7QUFLQWYsWUFBVSxvQkFBVWMsSUFORztBQU92Qjs7O0FBR0FyQixXQUFTLG9CQUFVdUIsTUFBVixDQUFpQkMsVUFWSDtBQVd2Qjs7O0FBR0FoQixhQUFXLG9CQUFVaUIsTUFkRTtBQWV2Qjs7O0FBR0FoQixRQUFNLG9CQUFVaUIsTUFsQk87QUFtQnZCOzs7O0FBSUFmLGFBQVcsb0JBQVVnQixTQUFWLENBQW9CLENBQUMsb0JBQVVGLE1BQVgsRUFBbUIsb0JBQVVHLElBQTdCLENBQXBCLENBdkJZO0FBd0J2Qjs7O0FBR0FoQixRQUFNLG9CQUFVYztBQTNCTyxDQUF6Qjs7QUE4QkFyQyxhQUFhd0MsWUFBYixHQUE0QjtBQUMxQnBCLFFBQU0sQ0FEb0I7QUFFMUJFLGFBQVcsSUFGZTtBQUcxQkMsUUFBTTtBQUhvQixDQUE1Qjs7a0JBTWUsMEJBQVd0QyxNQUFYLEVBQW1CLEVBQUV3RCxNQUFNLGlCQUFSLEVBQW5CLEVBQWdEekMsWUFBaEQsQyIsImZpbGUiOiJHcmlkTGlzdFRpbGUuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvcm1jcXVlbi9zbHQtdWkvbWF0ZXJpYWwtdWkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEV2ZW50TGlzdGVuZXIgZnJvbSAncmVhY3QtZXZlbnQtbGlzdGVuZXInO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC9kZWJvdW5jZSc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5cbmV4cG9ydCBjb25zdCBzdHlsZXMgPSB7XG4gIHJvb3Q6IHtcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICB9LFxuICB0aWxlOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZGlzcGxheTogJ2Jsb2NrJywgLy8gSW4gY2FzZSBpdCdzIG5vdCByZW5kZXJkIHdpdGggYSBkaXYuXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB9LFxuICBpbWdGdWxsSGVpZ2h0OiB7XG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKScsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgbGVmdDogJzUwJScsXG4gIH0sXG4gIGltZ0Z1bGxXaWR0aDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsXG4gICAgdG9wOiAnNTAlJyxcbiAgfSxcbn07XG5cbmNsYXNzIEdyaWRMaXN0VGlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZW5zdXJlSW1hZ2VDb3ZlcigpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuZW5zdXJlSW1hZ2VDb3ZlcigpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5oYW5kbGVSZXNpemUuY2FuY2VsKCk7XG4gIH1cblxuICBpbWdFbGVtZW50ID0gbnVsbDtcblxuICBoYW5kbGVSZXNpemUgPSBkZWJvdW5jZSgoKSA9PiB7XG4gICAgdGhpcy5maXQoKTtcbiAgfSwgMTY2KTsgLy8gQ29ycmVzcG9uZHMgdG8gMTAgZnJhbWVzIGF0IDYwIEh6LlxuXG4gIGZpdCA9ICgpID0+IHtcbiAgICBjb25zdCBpbWdFbGVtZW50ID0gdGhpcy5pbWdFbGVtZW50O1xuXG4gICAgaWYgKCFpbWdFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFpbWdFbGVtZW50LmNvbXBsZXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgaW1nRWxlbWVudC53aWR0aCAvIGltZ0VsZW1lbnQuaGVpZ2h0ID5cbiAgICAgIGltZ0VsZW1lbnQucGFyZW50Tm9kZS5vZmZzZXRXaWR0aCAvIGltZ0VsZW1lbnQucGFyZW50Tm9kZS5vZmZzZXRIZWlnaHRcbiAgICApIHtcbiAgICAgIGltZ0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSguLi50aGlzLnByb3BzLmNsYXNzZXMuaW1nRnVsbFdpZHRoLnNwbGl0KCcgJykpO1xuICAgICAgaW1nRWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLnRoaXMucHJvcHMuY2xhc3Nlcy5pbWdGdWxsSGVpZ2h0LnNwbGl0KCcgJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbWdFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoLi4udGhpcy5wcm9wcy5jbGFzc2VzLmltZ0Z1bGxIZWlnaHQuc3BsaXQoJyAnKSk7XG4gICAgICBpbWdFbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4udGhpcy5wcm9wcy5jbGFzc2VzLmltZ0Z1bGxXaWR0aC5zcGxpdCgnICcpKTtcbiAgICB9XG5cbiAgICBpbWdFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCB0aGlzLmZpdCk7XG4gIH07XG5cbiAgZW5zdXJlSW1hZ2VDb3ZlcigpIHtcbiAgICBpZiAoIXRoaXMuaW1nRWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmltZ0VsZW1lbnQuY29tcGxldGUpIHtcbiAgICAgIHRoaXMuZml0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW1nRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgdGhpcy5maXQpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc2VzLCBjbGFzc05hbWUsIGNvbHMsIGNvbXBvbmVudDogQ29tcG9uZW50LCByb3dzLCAuLi5vdGhlciB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcG9uZW50IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9IHsuLi5vdGhlcn0+XG4gICAgICAgIDxFdmVudExpc3RlbmVyIHRhcmdldD1cIndpbmRvd1wiIG9uUmVzaXplPXt0aGlzLmhhbmRsZVJlc2l6ZX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGlsZX0+XG4gICAgICAgICAge1JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT4ge1xuICAgICAgICAgICAgaWYgKGNoaWxkICYmIGNoaWxkLnR5cGUgPT09ICdpbWcnKSB7XG4gICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICAgICAgICBrZXk6ICdpbWcnLFxuICAgICAgICAgICAgICAgIHJlZjogbm9kZSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmltZ0VsZW1lbnQgPSBub2RlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db21wb25lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5HcmlkTGlzdFRpbGUucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlb3JldGljYWxseSB5b3UgY2FuIHBhc3MgYW55IG5vZGUgYXMgY2hpbGRyZW4sIGJ1dCB0aGUgbWFpbiB1c2UgY2FzZSBpcyB0byBwYXNzIGFuIGltZyxcbiAgICogaW4gd2hpY2ggY2FzZSBHcmlkTGlzdFRpbGUgdGFrZXMgY2FyZSBvZiBtYWtpbmcgdGhlIGltYWdlIFwiY292ZXJcIiBhdmFpbGFibGUgc3BhY2VcbiAgICogKHNpbWlsYXIgdG8gYGJhY2tncm91bmQtc2l6ZTogY292ZXJgIG9yIHRvIGBvYmplY3QtZml0OiBjb3ZlcmApLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICogVXNlZnVsIHRvIGV4dGVuZCB0aGUgc3R5bGUgYXBwbGllZCB0byBjb21wb25lbnRzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogV2lkdGggb2YgdGhlIHRpbGUgaW4gbnVtYmVyIG9mIGdyaWQgY2VsbHMuXG4gICAqL1xuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgRE9NIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBjb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gIC8qKlxuICAgKiBIZWlnaHQgb2YgdGhlIHRpbGUgaW4gbnVtYmVyIG9mIGdyaWQgY2VsbHMuXG4gICAqL1xuICByb3dzOiBQcm9wVHlwZXMubnVtYmVyLFxufTtcblxuR3JpZExpc3RUaWxlLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29sczogMSxcbiAgY29tcG9uZW50OiAnbGknLFxuICByb3dzOiAxLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHsgbmFtZTogJ011aUdyaWRMaXN0VGlsZScgfSkoR3JpZExpc3RUaWxlKTtcbiJdfQ==

/***/ })

});