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
	state = {
		open: false
	};
	/**
	 * The table used to display product information.
	 */
	constructor() {
		super();
		if (
			global &&
			global.history &&
			global.history.state &&
			global.history.state.type === 'OPEN_COMPARISON_TABLE'
		) {
			// We refresh with the old state.
			global.history.replaceState(null, 'ComparisonTable');
		}
		global.addEventListener('popstate', (event) => {
			let state = event.state;

			if (state == null) {
				// CLOSE COMPARISON TABLE:
				this.setState({ open: false });
			} else if (state.type === 'OPEN_COMPARISON_TABLE' && !this.state.open) {
				this.props.dispatch(actionSetProducts(state.selection));
				this.setState({ open: true });
				global.history.replaceState(state, 'ComparisonTable');
			}
		});
	}

	handleClickOpen() {
		if (global && global.history) {
			global.history.pushState(
				{
					type: 'OPEN_COMPARISON_TABLE',
					selection: this.props.selection
				},
				'ComparisonTable'
			);
		}
		this.setState({ open: true });
	}

	handleClose() {
		if (global && global.history) {
			global.history.replaceState(null, 'ComparisonTable');
		}
		this.setState({ open: false });
	}
	render() {
		let { product, checked, disabled = false, dispatch } = this.props;
		return (
			<MuiThemeProvider theme={theme}>
				<Button
					onClick={this.handleClickOpen.bind(this)}
					style={{ padding: 0, textDecoration: 'underline' }}
				>
					Change Date
				</Button>
				<Dialog
					PaperProps={{
						style: {
							padding: 0
						}
					}}
					style={{ overflow: 'overlay', padding: 0 }}
					maxWidth={false}
					fullWidth={true}
					open={this.state.open}
					onClose={this.handleClose.bind(this)}
					scroll="paper"
					TransitionComponent={Transition}
					transitionDuration={600}
				>
					<DialogTitle style={{ overflow: 'overlay', padding: 0 }} />
				</Dialog>
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
