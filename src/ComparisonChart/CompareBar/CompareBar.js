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
  // Fill the array given the number of items
  // specified by our props. If product exist,
  // we populate an array with those,
  // otherwise we fill the array with
  // the indices.

  // prop - numberOfItems
  let items = [];
  console.log(props);
  for (let i = 0, product, first; i < props.numberOfItems; i++) {
    product = props.selection[i];
    first = product ? product[Object.keys(product)[0]] : null;
    console.log(first);
    if (first) {
      items.push(
        <BottomNavigationAction
          key={i}
          label={first.name || `Item #${i + 1}`}
          icon={
            <React.Fragment>
              <Badge
                data-productID={product.id}
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
  if (state.productComparisonReducer) {
    console.log({
      ...props,
      selection: state.productComparisonReducer.selection,
    });
    return {
      ...props,
      selection: state.productComparisonReducer.selection,
    };
  } else {
    return {
      selection: [],
      ...props,
    };
  }
})(CompareBar);

export default CompareBar;
