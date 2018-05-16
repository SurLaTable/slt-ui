import React from 'react';
import { actionRemoveProduct } from '../actions/productComparisonActions';
import sortSkus from '../utils/sortSkus';
import { connect } from 'react-redux';

import Badge from '../../Badge';
import { default as BottomNavigation, BottomNavigationAction } from '../../BottomNavigation';
import Paper from '../../Paper';
import { AddBox as AddBoxIcon, Cancel as CancelIcon } from '../icons';
import ComparisonTable from '../ComparisonTable/ComparisonTable';

let CompareBar = props => {
  // Fill the array given the number of items
  // specified by our props. If skus exist,
  // we populate an array with those,
  // otherwise we fill the array with
  // the indices.

	// prop - numberOfItems
  let items = [];
	
	for(let i = 0,sku,product; i < props.numberOfItems; i++){
		sku = props.skus[i];
		product = (props.productData && props.productData[sku]) || i;

		items.push(
			<BottomNavigationAction
				key={i}
				label={product.name || `Item #${i + 1}`}
				// Disable the ripple animation if the item box is empty:
				disableRipple={!sku}
				icon={
					<React.Fragment>
						{sku ? (
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
	}

  return (
    <Paper
      style={{
        paddingBottom: '48px',
        position: 'fixed',
        bottom: 0,
        width: '100%',
				'z-index':'1300'
      }}
    >
      <BottomNavigation showLabels style={{ marginTop: '10px' }}>
        <ComparisonTable type="cutlery" />
				{items}
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
