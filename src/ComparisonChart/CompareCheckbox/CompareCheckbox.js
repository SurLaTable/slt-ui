import React from 'react';
import { connect } from 'react-redux';

import Checkbox from '../../Checkbox';
import {FormControlLabel} from '../../Form';
import { actionToggleCheckbox } from '../actions/productComparisonActions';

// TEMP:
// Once the image is removed, this import can be removed,
// since it exists on the reducer.
import data from '../data';

let CompareCheckbox = (props) => {
	let checked = (props.skus && props.skus.includes(props.sku)) || false;
	let disabled = checked == false && props.skus && props.skus.length > 2;
	return (
		<div>
			<FormControlLabel
				control={
					<Checkbox
						onChange={(event, checked) => {
							props.dispatch(
								actionToggleCheckbox(props.sku, checked)
							);
						}}
						disabled={disabled}
						checked={checked}
					/>
				}
				label={checked ? "Added" : "Compare"}
			/>
		</div>
	);
};

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
