import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { actionToggleProductSelection } from '../api';

const theme = createMuiTheme({});

class ComparisonCheckbox extends React.Component {
	render() {
		let { product, checked, disabled = false, dispatch } = this.props;
		return (
			<MuiThemeProvider theme={theme}>
				<div className="comparison-checkbox">
					<FormControlLabel
						control={
							<Checkbox
								onChange={(event, checked) => {
									dispatch(actionToggleProductSelection(product, checked));
								}}
								style={{
									color: '#333333'
								}}
								disabled={disabled}
								checked={checked}
								data-product={product}
							/>
						}
						label={checked ? 'Added' : 'Compare'}
					/>
				</div>
			</MuiThemeProvider>
		);
	}
}

ComparisonCheckbox.propTypes = {
	product: PropTypes.string,
	checked: PropTypes.bool,
	disabled: PropTypes.bool
};

ComparisonCheckbox.defaultProps = {
	disabled: false,
	checked: false
};

export default connect((state, props) => {
	let selection = state.productComparisonReducer ? state.productComparisonReducer.selection : [];
	let checked = false;

	// TODO: Figure out why `selection` is populated with `undefined`.
	if (selection.length) {
		for (let i = 0; i < selection.length; i++) {
			if (selection[i].id === props.product) {
				checked = true;
				break;
			}
		}
	}

	let disabled = props.disabled || (!checked && selection.length > 2);
	return {
		...props,
		checked,
		disabled
	};
})(ComparisonCheckbox);
