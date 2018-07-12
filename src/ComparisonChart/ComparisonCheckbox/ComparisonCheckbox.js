import React from 'react';
import { connect } from 'react-redux';

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { actionToggleProductSelection } from '../actions/productComparisonActions';

const theme = createMuiTheme({
	typography: {
		fontSize: 22
	}
});

let ComparisonCheckbox = (props) => {
	return (
		<MuiThemeProvider theme={theme}>
			<div className="comparison-checkbox">
				<FormControlLabel
					control={
						<Checkbox
							onChange={(event, checked) => {
								props.dispatch(
									actionToggleProductSelection(
										props.product,
										checked
									)
								);
							}}
							color="#333333"
							disabled={props.disabled}
							checked={props.checked}
							data-product={props.product}
						/>
					}
					label={props.checked ? 'Added' : 'Compare'}
				/>
			</div>
		</MuiThemeProvider>
	);
};

ComparisonCheckbox = connect((state, props) => {
	console.log('state:', state.productComparisonReducer);
	let selection = state.productComparisonReducer
		? state.productComparisonReducer.selection
		: [];
	let checked = false;

	// TODO: Figure out why `selection` is populated with `undefined`.
	if (selection.length) {
		for (let i = 0; i < selection.length; i++) {
			// console.log(selection);
			if (selection[i].id === props.product) {
				checked = true;
				break;
			}
		}
	}

	let disabled = !checked && selection.length > 2;
	return {
		...props,
		checked,
		disabled
	};
})(ComparisonCheckbox);

export default ComparisonCheckbox;
