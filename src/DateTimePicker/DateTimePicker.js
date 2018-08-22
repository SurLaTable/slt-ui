import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const theme = createMuiTheme({
	typography: {
		fontSize: 22,
		fontFamily: "'MrEavesSans', Verdana, Arial, Helvetica, sans-serif"
	}
});

class DateTimePicker extends React.Component {
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

DateTimePicker.propTypes = {
	product: PropTypes.string,
	checked: PropTypes.bool,
	disabled: PropTypes.bool
};

DateTimePicker.defaultProps = {
	disabled: false,
	checked: false
};

export default connect((state, props) => {
	return {
		...props
	};
})(DateTimePicker);
