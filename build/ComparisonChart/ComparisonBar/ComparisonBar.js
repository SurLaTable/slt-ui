"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _keys = _interopRequireDefault(require("@babel/runtime/core-js/object/keys"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _getPrototypeOf = _interopRequireDefault(require("@babel/runtime/core-js/object/get-prototype-of"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _productComparisonActions = require("../actions/productComparisonActions");

var _reactRedux = require("react-redux");

var _index = require("../../index.js");

var _icons = require("../icons");

var _ComparisonTable = _interopRequireDefault(require("../ComparisonTable/ComparisonTable"));

// import { Badge } from '../../Badge';
// import { BottomNavigation } from '../../BottomNavigation';
// import { BottomNavigationAction } from '../../BottomNavigation';
// import { Paper } from '../../Paper';
// import { Badge, BottomNavigation, BottomNavigationAction, Paper } from '@material-ui/core';
var _ref = _react.default.createElement(_ComparisonTable.default, {
  type: "cutlery"
});

var _ref2 = _react.default.createElement(_icons.Cancel, null);

var ComparisonBar =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ComparisonBar, _React$Component);

  function ComparisonBar() {
    (0, _classCallCheck2.default)(this, ComparisonBar);
    return (0, _possibleConstructorReturn2.default)(this, (ComparisonBar.__proto__ || (0, _getPrototypeOf.default)(ComparisonBar)).apply(this, arguments));
  }

  (0, _createClass2.default)(ComparisonBar, [{
    key: "render",
    value: function render() {
      var _this = this;

      var props = this.props; // Fill the array given the number of items
      // specified by our props. If product ids exist,
      // we populate an array with those,
      // otherwise we fill the array with
      // the indices.

      var selection = Array(props.numberOfItems).fill().map(function (ignore, index) {
        return props.selection && props.selection[index] || index;
      });
      return (0, _typeof2.default)(selection[0]) === 'object' ? _react.default.createElement(_index.Paper, {
        ref: function ref(ComparisonBarContainer) {
          return _this.ComparisonBarContainer = ComparisonBarContainer;
        },
        style: {
          backgroundColor: '#E4E4E4',
          bottom: 0,
          marginLeft: "".concat((window.innerWidth - window.innerWidth * 0.9) / 2, "px"),
          paddingBottom: '48px',
          position: 'fixed',
          width: '90%',
          zIndex: '1300'
        }
      }, _react.default.createElement(_index.BottomNavigation, {
        showLabels: true,
        style: {
          backgroundColor: '#E4E4E4',
          marginTop: '10px'
        }
      }, _ref, selection && selection.map(function (product, index) {
        // Since the product data contains multiple skus,
        // we just grab the first one available.
        // We may decide later to change this behavior,
        // with some kind of user selection tool.
        var productData = product ? product[(0, _keys.default)(product)[0]] : index;
        var productId = product.id || '';
        return _react.default.createElement(_index.BottomNavigationAction, {
          key: index,
          label: productData ? "".concat(productData['Web Brand'], " ").concat(productData.Collection) : "Item #".concat(index + 1) // Disable the ripple animation if the item box is empty:
          ,
          disableRipple: !productId.length,
          icon: _react.default.createElement(_react.default.Fragment, null, productId.length ? _react.default.createElement(_index.Badge, {
            "data-product-id": productId,
            badgeContent: _ref2,
            onClick: function onClick(event, checked) {
              props.dispatch((0, _productComparisonActions.actionRemoveProduct)(productId));
            }
          }, _react.default.createElement("img", {
            alt: "".concat(productData['Web Brand'], " ").concat(productData.Collection),
            src: "https://www.surlatable.com/images/customers/c1079/".concat(productId, "/generated/").concat(productId, "_Default_1_200x200.jpg"),
            style: {
              border: '1px solid black',
              height: '50px',
              width: '50px'
            }
          })) : _react.default.createElement(_icons.AddBox, {
            style: {
              fontSize: 50
            }
          }))
        });
      }))) : null;
    }
  }]);
  return ComparisonBar;
}(_react.default.Component);

ComparisonBar.defaultProps = {
  numberOfItems: 3
};
ComparisonBar = (0, _reactRedux.connect)(function (state, props) {
  if (state.productComparisonReducer) {
    return (0, _objectSpread2.default)({}, props, {
      selection: state.productComparisonReducer.selection
    });
  } else {
    return (0, _objectSpread2.default)({
      selection: []
    }, props);
  }
})(ComparisonBar);
var _default = ComparisonBar;
exports.default = _default;