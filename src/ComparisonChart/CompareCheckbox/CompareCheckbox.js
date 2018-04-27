import React from 'react';
import { connect } from 'react-redux';

import { Checkbox, FormControlLabel } from '@sur-la-table/slt-ui';
import { actionToggleCheckbox } from '../actions/productComparisonActions';

// TEMP:
// Once the image is removed, this import can be removed,
// since it exists on the reducer.
import data from '../data';

let CompareCheckbox = (props) => (
	<div>
		{
			// TEMP: Remove the image for prod.
		}
		<img
			alt={props.sku}
			src={props.productData.image}
			style={{ width: '36px' }}
		/>
		<br />
		<FormControlLabel
			control={
				<Checkbox
					onChange={(event, checked) => {
						props.dispatch(
							actionToggleCheckbox(props.sku, checked)
						);
					}}
					checked={
						(props.skus && props.skus.includes(props.sku)) || false
					}
				/>
			}
			label="Compare"
		/>
	</div>
);

CompareCheckbox = connect((state, ownProps) => ({
	// TEMP:
	// This can be removed once the image is removed.
	productData: data[ownProps.sku],

	// HACK:
	// Using the direct object keeps the component from updating when
	// other components update the Redux store, so for now, we
	// convert it to an array.
	skus:
		state.productComparisonReducer.productData &&
		Object.keys(state.productComparisonReducer.productData),
	...ownProps
}))(CompareCheckbox);

export default CompareCheckbox;
