"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireDefault(require("react"));

var _productComparisonActions = require("../actions/productComparisonActions");

var _sortSkus = _interopRequireDefault(require("../utils/sortSkus"));

var _reactRedux = require("react-redux");

var _sltUi = require("@sur-la-table/slt-ui");

var _icons = require("@material-ui/icons");

var _ComparisonTable = _interopRequireDefault(require("../ComparisonTable/ComparisonTable"));

var _ref = _react.default.createElement(_ComparisonTable.default, {
  type: "cutlery"
});

var _ref2 = _react.default.createElement(_icons.Cancel, null);

var CompareBar = function CompareBar(props) {
  // Fill the array given the number of items
  // specified by our props. If skus exist,
  // we populate an array with those,
  // otherwise we fill the array with
  // the indices.
  var skus = Array(props.numberOfItems).fill().map(function (ignore, index) {
    return props.skus && props.skus[index] || index;
  });
  return _react.default.createElement(_sltUi.Paper, {
    style: {
      paddingBottom: '48px',
      position: 'fixed',
      bottom: 0,
      width: '100%'
    }
  }, _react.default.createElement(_sltUi.BottomNavigation, {
    showLabels: true,
    style: {
      marginTop: '10px'
    }
  }, _ref, skus && skus.map(function (sku, index) {
    var product = sku.length && props.productData[sku] || index;
    return _react.default.createElement(_sltUi.BottomNavigationAction, {
      key: index,
      label: product.name || "Item #".concat(index + 1) // Disable the ripple animation if the item box is empty:
      ,
      disableRipple: !sku.length,
      icon: _react.default.createElement(_react.default.Fragment, null, sku.length ? _react.default.createElement(_sltUi.Badge, {
        "data-sku": sku,
        badgeContent: _ref2,
        onClick: function onClick(event, checked) {
          props.dispatch((0, _productComparisonActions.actionRemoveProduct)(sku));
        }
      }, _react.default.createElement("img", {
        alt: sku,
        src: product.image,
        style: {
          height: '50px',
          width: '50px'
        }
      })) : _react.default.createElement(_icons.AddBox, {
        style: {
          fontSize: 50
        }
      }))
    });
  })));
};

CompareBar = (0, _reactRedux.connect)(function (state, ownProps) {
  return (0, _objectSpread2.default)({
    productData: state.productComparisonReducer.productData,
    // HACK:
    // You're probably thinking that `productData`
    // could be used to form the `skus` array inside
    // of the component itself. The problem is that
    // without the `skus` array attached here,
    // the component does not seem to be connected
    // to dispatched actions of the Redux
    // store.
    skus: (0, _sortSkus.default)(state.productComparisonReducer.productData)
  }, ownProps);
})(CompareBar);
var _default = CompareBar;
exports.default = _default;