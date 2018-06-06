import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _Object$keys from "@babel/runtime/core-js/object/keys";
import React from 'react';
import { actionRemoveProduct } from '../actions/productComparisonActions';
import sortProducts from '../utils/sortProducts';
import { connect } from 'react-redux';
import Badge from '../../Badge';
import { default as BottomNavigation, BottomNavigationAction } from '../../BottomNavigation';
import Paper from '../../Paper';
import { AddBox as AddBoxIcon, Cancel as CancelIcon } from '../icons';
import ComparisonTable from '../ComparisonTable/ComparisonTable';

var _ref = React.createElement(CancelIcon, null);

var _ref2 = React.createElement(ComparisonTable, {
  type: "cutlery"
});

let CompareBar = props => {
  let items = [];

  for (let i = 0, product, first; i < props.numberOfItems; i++) {
    product = props.selection[i];
    console.log('Product:', product);
    first = product ? product[_Object$keys(product)[0]] : null;
    console.log('First:', first);

    if (first) {
      items.push(React.createElement(BottomNavigationAction, {
        key: i,
        label: first.name || `Excellent Item #${i + 1}`,
        icon: React.createElement(React.Fragment, null, React.createElement(Badge, {
          "data-productId": product.id,
          badgeContent: _ref,
          onClick: (event, checked) => {
            props.dispatch(actionRemoveProduct(product.id));
          }
        }, React.createElement("img", {
          alt: product.id,
          src: `https://www.surlatable.com/images/customers/c1079/${product.id}/generated/${product.id}_Default_2_200x200.jpg`,
          style: {
            height: '50px',
            width: '50px'
          }
        })))
      }));
    } else {
      items.push(React.createElement(BottomNavigationAction, {
        key: i,
        label: `Item #${i + 1}` // Disable the ripple animation if the item box is empty:
        ,
        disableRipple: true,
        icon: React.createElement(React.Fragment, null, React.createElement(AddBoxIcon, {
          style: {
            fontSize: 50
          }
        }))
      }));
    }
  }

  console.log('Items:', items);
  return React.createElement(Paper, {
    style: {
      paddingBottom: '48px',
      position: 'fixed',
      bottom: 0,
      width: '100%',
      'z-index': '1300'
    }
  }, React.createElement(BottomNavigation, {
    showLabels: true,
    style: {
      marginTop: '10px'
    }
  }, _ref2, items));
};

CompareBar.defaultProps = {
  numberOfItems: 3
};
CompareBar = connect((state, props) => {
  console.log('Selection:', state.productComparisonReducer.selection);

  if (state.productComparisonReducer) {
    return _objectSpread({}, props, {
      // updated: Date.now(),
      // selection: selection
      selection: state.productComparisonReducer.selection
    });
  } else {
    return _objectSpread({
      selection: []
    }, props);
  }
})(CompareBar);
export default CompareBar;