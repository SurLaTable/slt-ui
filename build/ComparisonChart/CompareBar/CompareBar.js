"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _keys = _interopRequireDefault(require("@babel/runtime/core-js/object/keys"));

var _react = _interopRequireDefault(require("react"));

var _productComparisonActions = require("../actions/productComparisonActions");

var _sortProducts = _interopRequireDefault(require("../utils/sortProducts"));

var _reactRedux = require("react-redux");

var _Badge = _interopRequireDefault(require("../../Badge"));

var _BottomNavigation = _interopRequireWildcard(require("../../BottomNavigation"));

var _Paper = _interopRequireDefault(require("../../Paper"));

var _icons = require("../icons");

var _ComparisonTable = _interopRequireDefault(require("../ComparisonTable/ComparisonTable"));

var _ref = _react.default.createElement(_ComparisonTable.default, {
  type: "cutlery"
});

var _ref2 = _react.default.createElement(_icons.Cancel, null);

var CompareBar = function CompareBar(props) {
  var items = [];

  var _loop = function _loop(i, _product, _first) {
    _product = props.selection[i];
    console.log('Product:', _product);
    _first = _product ? _product[(0, _keys.default)(_product)[0]] : null;
    console.log('First:', _first);

    if (_first) {
      items.push(_react.default.createElement(_BottomNavigation.BottomNavigationAction, {
        key: i,
        label: _first.name || "Item #".concat(i + 1),
        icon: _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Badge.default, {
          "data-productId": _product.id,
          badgeContent: _ref2,
          onClick: function onClick(event, checked) {
            props.dispatch((0, _productComparisonActions.actionRemoveProduct)(_product.id));
          }
        }, _react.default.createElement("img", {
          alt: _product.id,
          src: "https://www.surlatable.com/images/customers/c1079/".concat(_product.id, "/generated/").concat(_product.id, "_Default_2_200x200.jpg"),
          style: {
            height: '50px',
            width: '50px'
          }
        })))
      }));
    } else {
      items.push(_react.default.createElement(_BottomNavigation.BottomNavigationAction, {
        key: i,
        label: "Item #".concat(i + 1) // Disable the ripple animation if the item box is empty:
        ,
        disableRipple: true,
        icon: _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_icons.AddBox, {
          style: {
            fontSize: 50
          }
        }))
      }));
    }

    product = _product;
    first = _first;
  };

  for (var i = 0, product, first; i < props.numberOfItems; i++) {
    _loop(i, product, first);
  }

  console.log('Items:', items);
  return _react.default.createElement(_Paper.default, {
    style: {
      paddingBottom: '48px',
      position: 'fixed',
      bottom: 0,
      width: '100%',
      'z-index': '1300'
    }
  }, _react.default.createElement(_BottomNavigation.default, {
    showLabels: true,
    style: {
      marginTop: '10px'
    }
  }, _ref, items));
};

CompareBar.defaultProps = {
  numberOfItems: 3
};
CompareBar = (0, _reactRedux.connect)(function (state, props) {
  console.log('Selection:', state.productComparisonReducer.selection);

  if (state.productComparisonReducer) {
    return (0, _objectSpread2.default)({}, props, {
      // updated: Date.now(),
      // selection: selection
      selection: state.productComparisonReducer.selection
    });
  } else {
    return (0, _objectSpread2.default)({
      selection: []
    }, props);
  }
})(CompareBar);
var _default = CompareBar;
exports.default = _default;