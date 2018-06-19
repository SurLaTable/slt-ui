import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _Object$keys from "@babel/runtime/core-js/object/keys";
import React from 'react';
import { actionRemoveProduct } from '../actions/productComparisonActions';
import { connect } from 'react-redux'; // import { Badge } from '../../Badge';
// import { BottomNavigation } from '../../BottomNavigation';
// import { BottomNavigationAction } from '../../BottomNavigation';
// import { Paper } from '../../Paper';
// import { Badge, BottomNavigation, BottomNavigationAction, Paper } from '@material-ui/core';

import { Badge, BottomNavigation, BottomNavigationAction, Paper } from '../../index.js';
import { AddBox as AddBoxIcon, Cancel as CancelIcon } from '../icons';
import ComparisonTable from '../ComparisonTable/ComparisonTable';

var _ref = React.createElement(ComparisonTable, {
  type: "cutlery"
});

var _ref2 = React.createElement(CancelIcon, null);

class ComparisonBar extends React.Component {
  render() {
    const props = this.props; // Fill the array given the number of items
    // specified by our props. If product ids exist,
    // we populate an array with those,
    // otherwise we fill the array with
    // the indices.

    const selection = Array(props.numberOfItems).fill().map((ignore, index) => props.selection && props.selection[index] || index);
    return typeof selection[0] === 'object' ? React.createElement(Paper, {
      ref: ComparisonBarContainer => this.ComparisonBarContainer = ComparisonBarContainer,
      style: {
        backgroundColor: '#E4E4E4',
        bottom: 0,
        marginLeft: `${(window.innerWidth - window.innerWidth * 0.9) / 2}px`,
        paddingBottom: '48px',
        position: 'fixed',
        width: '90%',
        zIndex: '1300'
      }
    }, React.createElement(BottomNavigation, {
      showLabels: true,
      style: {
        backgroundColor: '#E4E4E4',
        marginTop: '10px'
      }
    }, _ref, selection && selection.map((product, index) => {
      // Since the product data contains multiple skus,
      // we just grab the first one available.
      // We may decide later to change this behavior,
      // with some kind of user selection tool.
      const productData = product ? product[_Object$keys(product)[0]] : index;
      const productId = product.id || '';
      return React.createElement(BottomNavigationAction, {
        key: index,
        label: productData ? `${productData['Web Brand']} ${productData.Collection}` : `Item #${index + 1}` // Disable the ripple animation if the item box is empty:
        ,
        disableRipple: !productId.length,
        icon: React.createElement(React.Fragment, null, productId.length ? React.createElement(Badge, {
          "data-product-id": productId,
          badgeContent: _ref2,
          onClick: (event, checked) => {
            props.dispatch(actionRemoveProduct(productId));
          }
        }, React.createElement("img", {
          alt: `${productData['Web Brand']} ${productData.Collection}`,
          src: `https://www.surlatable.com/images/customers/c1079/${productId}/generated/${productId}_Default_1_200x200.jpg`,
          style: {
            border: '1px solid black',
            height: '50px',
            width: '50px'
          }
        })) : React.createElement(AddBoxIcon, {
          style: {
            fontSize: 50
          }
        }))
      });
    }))) : null;
  }

}

ComparisonBar.defaultProps = {
  numberOfItems: 3
};
ComparisonBar = connect((state, props) => {
  if (state.productComparisonReducer) {
    return _objectSpread({}, props, {
      selection: state.productComparisonReducer.selection
    });
  } else {
    return _objectSpread({
      selection: []
    }, props);
  }
})(ComparisonBar);
export default ComparisonBar;