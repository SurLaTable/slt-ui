import React from 'react';
import { actionRemoveProduct } from '../actions/productComparisonActions';
import sortProducts from '../utils/sortProducts';
import { connect } from 'react-redux';

import Badge from '../../Badge';
import { default as BottomNavigation, BottomNavigationAction } from '../../BottomNavigation';
import Paper from '../../Paper';
import { AddBox as AddBoxIcon, Cancel as CancelIcon } from '../icons';
import ComparisonTable from '../ComparisonTable/ComparisonTable';

let CompareBar = props => {
  let items = [];
  for (let i = 0, product, first; i < props.numberOfItems; i++) {
    product = props.selection[i];
    console.log('Product:', product);
    first = product ? product[Object.keys(product)[0]] : null;
    console.log('First:', first);

    if (first) {
      items.push(
        <BottomNavigationAction
          key={i}
          label={first.name || `Excellent Item #${i + 1}`}
          icon={
            <React.Fragment>
              <Badge
                data-productId={product.id}
                badgeContent={<CancelIcon />}
                onClick={(event, checked) => {
                  props.dispatch(actionRemoveProduct(product.id));
                }}
              >
                <img
                  alt={product.id}
                  src={`https://www.surlatable.com/images/customers/c1079/${product.id}/generated/${
                    product.id
                  }_Default_2_200x200.jpg`}
                  style={{
                    height: '50px',
                    width: '50px',
                  }}
                />
              </Badge>
            </React.Fragment>
          }
        />,
      );
    } else {
      items.push(
        <BottomNavigationAction
          key={i}
          label={`Item #${i + 1}`}
          // Disable the ripple animation if the item box is empty:
          disableRipple={true}
          icon={
            <React.Fragment>
              <AddBoxIcon style={{ fontSize: 50 }} />
            </React.Fragment>
          }
        />,
      );
    }
  }

  console.log('Items:', items);
  return (
    <Paper
      style={{
        paddingBottom: '48px',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        'z-index': '1300',
      }}
    >
      <BottomNavigation showLabels style={{ marginTop: '10px' }}>
        <ComparisonTable type="cutlery" />
        {items}
      </BottomNavigation>
    </Paper>
  );
};
CompareBar.defaultProps = {
  numberOfItems: 3,
};
CompareBar = connect((state, props) => {
  console.log('Selection:', state.productComparisonReducer.selection);
  if (state.productComparisonReducer) {
    return {
      ...props,
      // updated: Date.now(),
      // selection: selection
      selection: state.productComparisonReducer.selection,
    };
  } else {
    return {
      selection: [],
      // updated: Date.now(),
      ...props,
    };
  }
})(CompareBar);

export default CompareBar;
