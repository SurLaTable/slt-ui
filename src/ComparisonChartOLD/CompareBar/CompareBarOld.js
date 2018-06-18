import React from 'react';
import { actionRemoveProduct } from '../actions/productComparisonActions';
import sortSkus from '../utils/sortSkus';
import { connect } from 'react-redux';

import { Badge, BottomNavigation, BottomNavigationAction, Paper } from '@sur-la-table/slt-ui';
import { AddBox as AddBoxIcon, Cancel as CancelIcon } from '@material-ui/icons';
import ComparisonTable from '../ComparisonTable/ComparisonTable';

let CompareBar = props => {
  // Fill the array given the number of items
  // specified by our props. If skus exist,
  // we populate an array with those,
  // otherwise we fill the array with
  // the indices.
  const skus = Array(props.numberOfItems)
    .fill()
    .map((ignore, index) => (props.skus && props.skus[index]) || index);

  return (
    <Paper
      style={{
        paddingBottom: '48px',
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
    >
      <BottomNavigation showLabels style={{ marginTop: '10px' }}>
        <ComparisonTable type="cutlery" />

        {skus &&
          skus.map((sku, index) => {
            const product = (sku.length && props.productData[sku]) || index;

            return (
              <BottomNavigationAction
                key={index}
                label={product.name || `Item #${index + 1}`}
                // Disable the ripple animation if the item box is empty:
                disableRipple={!sku.length}
                icon={
                  <React.Fragment>
                    {sku.length ? (
                      <Badge
                        data-sku={sku}
                        badgeContent={<CancelIcon />}
                        onClick={(event, checked) => {
                          props.dispatch(actionRemoveProduct(sku));
                        }}
                      >
                        <img
                          alt={sku}
                          src={product.image}
                          style={{
                            height: '50px',
                            width: '50px',
                          }}
                        />
                      </Badge>
                    ) : (
                      <AddBoxIcon style={{ fontSize: 50 }} />
                    )}
                  </React.Fragment>
                }
              />
            );
          })}
      </BottomNavigation>
    </Paper>
  );
};
CompareBar = connect((state, ownProps) => ({
  productData: state.productComparisonReducer.productData,
  // HACK:
  // You're probably thinking that `productData`
  // could be used to form the `skus` array inside
  // of the component itself. The problem is that
  // without the `skus` array attached here,
  // the component does not seem to be connected
  // to dispatched actions of the Redux
  // store.
  skus: sortSkus(state.productComparisonReducer.productData),
  ...ownProps,
}))(CompareBar);

export default CompareBar;
