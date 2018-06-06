"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _keys = _interopRequireDefault(require("@babel/runtime/core-js/object/keys"));

var _getPrototypeOf = _interopRequireDefault(require("@babel/runtime/core-js/object/get-prototype-of"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _productComparisonActions = require("../actions/productComparisonActions");

var _Button = _interopRequireDefault(require("../../Button"));

var _Dialog = _interopRequireDefault(require("../../Dialog"));

var _Slide = _interopRequireDefault(require("../../transitions/Slide"));

var _Table = _interopRequireWildcard(require("../../Table"));

var _Typography = _interopRequireDefault(require("../../Typography"));

var _icons = require("../icons");

var imageStyles = {
  width: '90px',
  display: 'block'
};
var tableModels = {
  cutlery: {
    Dimensions: ['Bevel Angle', 'Blade Edge', 'Blade Length', 'Blade Material', 'Total Length', 'Core Material', 'Handle Material', 'Layers in the Blade', 'Rockwell', 'Stamped or Forged', 'Tang Type', 'Collection', 'Country of Origin', 'Warranty', {
      name: 'Care & Usage',
      format: 'html'
    }, {
      name: "What's in the Box",
      format: 'html'
    }]
  },
  // This is just an example of another possible type:
  appliance: {
    Features: ['Blends', 'Blade type']
  }
};

var Transition = function Transition(props) {
  return _react.default.createElement(_Slide.default, (0, _extends2.default)({
    direction: "up"
  }, props));
};

var _ref = _react.default.createElement("br", null);

var _ref2 = _react.default.createElement(_icons.Cancel, null);

var ComparisonTable =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ComparisonTable, _React$Component);

  function ComparisonTable() {
    var _this;

    (0, _classCallCheck2.default)(this, ComparisonTable);
    _this = (0, _possibleConstructorReturn2.default)(this, (ComparisonTable.__proto__ || (0, _getPrototypeOf.default)(ComparisonTable)).call(this));
    Object.defineProperty((0, _assertThisInitialized2.default)(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        open: false
      }
    });

    if (window && window.history && window.history.state && window.history.state.type == 'OPEN_COMPARISON_TABLE') {
      // We refresh with the old state.
      history.replaceState(null, 'ComparisonTable');
    }

    window.addEventListener('popstate', function (event) {
      var state = event.state;

      if (state == null) {
        // CLOSE COMPARISON TABLE:
        _this.setState({
          open: false
        });
      } else if (state.type == 'OPEN_COMPARISON_TABLE' && _this.state.open == false) {
        _this.props.dispatch((0, _productComparisonActions.actionSetProducts)(state.selection));

        _this.setState({
          open: true
        });

        history.replaceState(state, 'ComparisonTable');
      }
    });
    return _this;
  }

  (0, _createClass2.default)(ComparisonTable, [{
    key: "handleClickOpen",
    value: function handleClickOpen() {
      if (window && window.history) {
        var _history = window.history;

        _history.pushState({
          type: 'OPEN_COMPARISON_TABLE',
          selection: this.props.selection
        }, 'ComparisonTable');
      }

      this.setState({
        open: true
      });
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      if (window && window.history) {
        var _history2 = window.history;

        _history2.replaceState(null, 'ComparisonTable');
      }

      this.setState({
        open: false
      });
    }
  }, {
    key: "handleFormat",
    value: function handleFormat(data, format) {
      switch (format) {
        case 'html':
          return _react.default.createElement("div", {
            dangerouslySetInnerHTML: {
              __html: data
            }
          });

        default:
          return data;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props;
      var sections = (0, _keys.default)(tableModels[props.type]);
      var attributes = tableModels[props.type][(0, _keys.default)(tableModels[props.type])[0]];
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Button.default, {
        onClick: this.handleClickOpen.bind(this),
        variant: "raised",
        color: "primary",
        disabled: props.selection.length < 2,
        style: {
          height: '20%',
          marginTop: '1.5rem'
        }
      }, "COMPARE"), _react.default.createElement(_Typography.default, {
        style: {
          margin: '10px 30px',
          width: '250px',
          textAlign: 'left'
        }
      }, "Select up to 3 products to compare and find the best one for you.", _ref, _react.default.createElement(_Button.default, {
        onClick: function onClick(event, checked) {
          props.dispatch((0, _productComparisonActions.actionRemoveAll)());
        }
      }, "REMOVE ALL")), _react.default.createElement(_Dialog.default, {
        fullScreen: true,
        open: this.state.open,
        onClose: this.handleClose.bind(this),
        transition: Transition,
        transitionDuration: 500
      }, _react.default.createElement(_Table.default, null, _react.default.createElement(_Table.TableHead, null, _react.default.createElement(_Table.TableRow, null, _react.default.createElement(_Table.TableCell, null, _react.default.createElement(_Button.default, {
        onClick: this.handleClose.bind(this)
      }, _ref2, "Hide chart")), props.selection.map(function (product, index) {
        var first = product[(0, _keys.default)(product)[0]];

        if (first) {
          return _react.default.createElement(_Table.TableCell, {
            key: index
          }, _react.default.createElement("img", {
            alt: first.name,
            style: imageStyles,
            src: "https://www.surlatable.com/images/customers/c1079/".concat(product.id, "/generated/").concat(product.id, "_Default_2_200x200.jpg")
          }), first.name);
        }
      })), _react.default.createElement(_Table.TableRow, {
        style: {
          backgroundColor: '#111111'
        }
      }, props.selection.map(function (ignore, index) {
        return index ? _react.default.createElement(_Table.TableCell, {
          key: index
        }) : _react.default.createElement(_Table.TableCell, {
          key: index,
          style: {
            color: '#ffffff'
          }
        }, sections[index]);
      }))), _react.default.createElement(_Table.TableBody, null, attributes.map(function (attribute, index) {
        var format = 'default';

        if (typeof attribute != 'string') {
          format = attribute.format;
          attribute = attribute.name;
        }

        return _react.default.createElement(_Table.TableRow, {
          key: index,
          style: {
            backgroundColor: (index === 1 || index % 2 !== 0) && '#eeeeee'
          }
        }, _react.default.createElement(_Table.TableCell, null, attribute), props.selection.map(function (product, index) {
          var cellData = [];

          for (var i in product) {
            if (format == 'html') {
              cellData.push(_this2.handleFormat(product[i][attribute], format));
            } else if (cellData.indexOf(product[i][attribute]) == -1) {
              cellData.push(_this2.handleFormat(product[i][attribute], format));
            }
          }

          if (format == 'default') {
            cellData = cellData.join(', ');
          }

          return _react.default.createElement(_Table.TableCell, {
            key: index
          }, cellData);
        }));
      })))));
    }
  }]);
  return ComparisonTable;
}(_react.default.Component);

ComparisonTable = (0, _reactRedux.connect)(function (state, props) {
  if (state.productComparisonReducer) {
    return (0, _objectSpread2.default)({}, props, {
      selection: state.productComparisonReducer.selection
    });
  } else {
    return (0, _objectSpread2.default)({
      selection: []
    }, props);
  }
})(ComparisonTable);
var _default = ComparisonTable;
exports.default = _default;