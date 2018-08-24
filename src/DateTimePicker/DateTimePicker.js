import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import './DateTimePicker.css';

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const theme = createMuiTheme({});

// const noBoxShadow = {
// 	boxShadow: 'none'
// };

// const greyBorderBottom = {
// 	borderBottom: '1px solid #d2d2d2'
// };

// const transparentBackground = {
// 	backgroundColor: 'transparent'
// };

const panelStyles = () => ({
	'expression-panel__bottom-border-only': {
		boxShadow: 'none',
		borderBottom: '1px solid #d2d2d2',
		backgroundColor: 'transparent',
		'&::after': {
			backgroundColor: 'transparent'
		}
	}
});

const Transition = (props) => <Slide
	direction="up"
	{...props}
/>;

const StyledExpansionPanel = withStyles(panelStyles)((props) => (
	<ExpansionPanel
		// style={Object.assign({}, greyBorderBottom, noBoxShadow, transparentBackground)}
		{...props}
	>
		{props.children}
	</ExpansionPanel>
));
// const StyledExpansionPanel = withStyles(styles)(CustomExpansionPanel);

class DateTimePicker extends React.Component {
	state = {
		expanded: null,
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
			// We hydrate with the old state.
			global.history.replaceState(null, 'ComparisonTable');
		}
		global.addEventListener('popstate', (event) => {
			let state = event.state;

			if (state == null) {
				// Close dialog:
				this.setState({ open: false });
			} else if (state.type === 'OPEN_COMPARISON_TABLE' && !this.state.open) {
				this.props.dispatch(actionSetProducts(state.selection));
				this.setState({ open: true });
				global.history.replaceState(state, 'ComparisonTable');
			}
		});
	}

	handleChange = (panel) => (event, expanded) => {
		this.setState({
			expanded: expanded ? panel : false
		});
	};

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
		// let { dispatch } = this.props;
		const { expanded } = this.state;
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
						style: {}
					}}
					style={{
						overflow: 'overlay'
					}}
					// maxWidth={false}
					fullWidth={true}
					open={this.state.open}
					onClose={this.handleClose.bind(this)}
					scroll="paper"
					TransitionComponent={Transition}
					transitionDuration={600}
				>
					<DialogTitle
						style={{
							overflow: 'overlay'
						}}
					>
						Available dates for THING
					</DialogTitle>
					<DialogContent>
						<StyledExpansionPanel
							expanded={expanded === 'panel1'}
							onChange={this.handleChange('panel1')}
						>
							<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
								<Typography>This month</Typography>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails>
								<Typography>
									Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
									feugiat. Aliquam eget maximus est, id dignissim quam.
								</Typography>
							</ExpansionPanelDetails>
						</StyledExpansionPanel>
						<StyledExpansionPanel
							expanded={expanded === 'panel2'}
							onChange={this.handleChange('panel2')}
						>
							<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
								<Typography>Next month</Typography>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails>
								<Typography>
									Donec placerat, lectus sed mattis semper, neque lectus feugiat
									lectus, varius pulvinar diam eros in elit. Pellentesque
									convallis laoreet laoreet.
								</Typography>
							</ExpansionPanelDetails>
						</StyledExpansionPanel>
					</DialogContent>
				</Dialog>
			</MuiThemeProvider>
		);
	}
}

DateTimePicker.propTypes = {
	dispatch: PropTypes.func,
	selection: PropTypes.bool
};

DateTimePicker.defaultProps = {};

export default connect((state, props) => {
	return {
		...props
	};
})(DateTimePicker);
