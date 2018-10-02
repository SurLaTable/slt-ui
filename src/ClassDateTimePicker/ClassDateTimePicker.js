import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { actions, selectors } from '../services/slt-class-times';

import { selectors as storeSelectors } from '../services/slt-stores';

const style = (theme) => {
	return {
		display: {
			display: 'flex',
			flexDirection: 'column',
			border: `1px solid ${theme.palette.grey[400]}`,
			borderRadius: 0,
			padding: '8px 8px',
			justifyContent: 'space-evenly',
			background: `${theme.palette.grey[100]}`
		},
		button: {
			borderRadius: 0,
			minHeight: theme.typography.pxToRem(theme.typography.fontSize),
			lineHeight: theme.typography.pxToRem(theme.typography.fontSize),
			boxShadow: theme.shadows[0],
			'&:active': {
				boxShadow: theme.shadows[0]
			}
		},
		fab: {
			position: 'absolute',
			bottom: `calc(100% + ${theme.spacing.unit * 2}px)`,
			right: theme.spacing.unit * 2
		}
	};
};

const Transition = (props) => <Slide
	direction="up"
	{...props}
/>;

const nowDate = new Date(Date.now());
const locale = 'en-us';

const getDefaultMonthData = () => {
	var months = {};
	const date = new Date(nowDate.getTime());
	months[date.toLocaleString(locale, { month: 'long', year: 'numeric' })] = false;
	date.setMonth(nowDate.getMonth() + 1);
	months[date.toLocaleString(locale, { month: 'long', year: 'numeric' })] = false;
	date.setMonth(nowDate.getMonth() + 2);
	months[date.toLocaleString(locale, { month: 'long', year: 'numeric' })] = false;
	return months;
};

const giveMeTheClassTimeNicelyShort = (classData) => `
	${new Date(classData.classStartDate).toLocaleString(locale, {
		month: 'short',
		day: '2-digit',
		hour: 'numeric',
		minute: 'numeric'
	})}`;

const giveMeTheClassTimeNicely = (classData) => `
	${new Date(classData.classStartDate).toLocaleString(locale, {
		weekday: 'short',
		month: 'numeric',
		day: 'numeric',
		year: 'numeric',
		hour: 'numeric',
		minute: 'numeric'
	})} - ${new Date(classData.classStopDate).toLocaleString(locale, {
	hour: 'numeric',
	minute: 'numeric'
})}`;

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];
const sortDates = (a, b) => {
	const adata = a.split(' ');
	const bdata = b.split(' ');
	return (
		(bdata[1] < adata[1] ? 1 : -1) * 2 +
		(months.indexOf(bdata[0]) < months.indexOf(adata[0]) ? 1 : -1)
	);
};

class ClassDateTimePicker extends React.Component {
	state = {
		expanded: null,
		open: false
	};
	constructor() {
		super();
		if (global?.history?.state?.type === 'OPEN_DATE_TIME_PICKER') {
			// We hydrate with the old state.
			global.history.replaceState(null, 'ClassDateTimePicker');
		}
		this.handleHistoryPopState = this.handleHistoryPopState.bind(this);
	}
	handleHistoryPopState(event) {
		const state = event.state;

		if (state == null) {
			// Close dialog:
			this.setState({ open: false });
		} else if (state.type === 'OPEN_DATE_TIME_PICKER' && !this.state.open) {
			this.setState({ open: true });
			global.history.replaceState(state, 'ClassDateTimePicker');
		}
	}
	componentDidMount() {
		this.setState({
			culinaryClassName: document.querySelector('h1.name')?.textContent || 'class'
		});
		global.addEventListener('popstate', this.handleHistoryPopState);
	}
	componentWillUnMount() {
		global.removeEventListener('popstate', this.handleHistoryPopState);
	}
	handleChange = (panel) => (event, expanded) => {
		this.setState({
			expanded: expanded ? panel : false
		});
	};
	handleClickOpen() {
		if (global?.history) {
			global.history.pushState(
				{
					type: 'OPEN_DATE_TIME_PICKER',
					selection: this.props.selection
				},
				'ClassDateTimePicker'
			);
		}
		this.setState({
			open: true,
			expanded: `panel ${Object.keys(this.props.classTimeData)[0]}`
		});
	}

	handleClose() {
		if (global?.history) {
			global.history.replaceState(null, 'ClassDateTimePicker');
		}
		this.setState({ open: false, expanded: false });
	}
	onEnter(productId, storeId) {
		this.props.dispatch(actions.fetchClassTimes(productId, storeId));
	}
	returnMonthData(dateString) {
		return this?.props?.classTimeData?.[dateString] ? (
			<RadioGroup
				aria-label="Classes"
				name="classes"
				value={this.state.sku}
			>
				{this.props.classTimeData[dateString].map((culinaryClass, index) => (
					<FormControlLabel
						key={`${index}_${Date.now()}`}
						value={culinaryClass.sku}
						control={
							<Radio
								style={{
									color: '#333333'
								}}
								onChange={() => {
									this.setState({ sku: culinaryClass.sku });
									return document.location.replace(`/sku/${culinaryClass.sku}/`);
								}}
							/>
						}
						label={giveMeTheClassTimeNicely(culinaryClass)}
					/>
				))}
			</RadioGroup>
		) : (
			<Typography>No dates available.</Typography>
		);
	}
	componentDidUpdate(prevProps) {
		let needToFetch = false;
		if (this.props.storeId != prevProps.storeId) {
			needToFetch = true;
		}
		if (this.props.productId != prevProps.productId) {
			needToFetch = true;
		}

		if (needToFetch) {
			this.onEnter(this.props.productId, this.props.storeId);
		}
	}
	render() {
		let { width, productId, storeId, classes, classTimeData } = this.props;
		const { expanded, culinaryClassName, open } = this.state;

		var panels = [];
		const dates = Object.keys(classTimeData)
			.filter((v) => {
				return Date.parse(v) >= Date.now();
			})
			.sort(sortDates);
		let hasClasses = false;
		const nextClass = classTimeData[dates[0]][0];
		for (let i = 0; i < dates.length; i++) {
			const dateString = dates[i];
			if (classTimeData[dateString] !== false) {
				hasClasses = true;
			}
			panels.push(
				<ExpansionPanel
					key={dateString}
					elevation={0}
					expanded={expanded === `panel ${dateString}`}
					onChange={this.handleChange(`panel ${dateString}`)}
				>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography>{dateString}</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						{this.returnMonthData(dateString)}
					</ExpansionPanelDetails>
				</ExpansionPanel>
			);
		}

		return (
			<Paper
				elevation={0}
				className={classes.display}
			>
				<Typography>Next Available Date:</Typography>
				<Typography>
					<strong>
						{!storeId ? (
							<>&nbsp;</>
						) : hasClasses ? (
							giveMeTheClassTimeNicelyShort(nextClass)
						) : (
							'No classes available'
						)}
					</strong>
				</Typography>
				<Button
					fullWidth
					onClick={this.handleClickOpen.bind(this)}
					className={classes.button}
					style={{ flex: 1 }}
					disabled={!hasClasses}
				>
					Select Date
				</Button>
				<Dialog
					fullWidth={true}
					fullScreen={isWidthDown('sm', width)}
					open={open}
					onClose={this.handleClose.bind(this)}
					onEnter={() => this.onEnter(productId, storeId)}
					scroll="paper"
				>
					<DialogTitle>Available dates for {culinaryClassName}:</DialogTitle>
					<DialogContent>{panels}</DialogContent>
					<DialogActions>
						<Button
							onClick={this.handleClose.bind(this)}
							color="primary"
						>
							Close
						</Button>
					</DialogActions>
				</Dialog>
			</Paper>
		);
	}
}

ClassDateTimePicker.propTypes = {
	classTimeData: PropTypes.object,
	dispatch: PropTypes.func,
	selection: PropTypes.bool,
	storeId: PropTypes.string,
	productId: PropTypes.string
};

ClassDateTimePicker.defaultProps = {};

const mapStateToProps = (state, props) => ({
	...props,
	classTimeData: {
		...getDefaultMonthData(),
		...selectors.getClassTimeData(state)
	},
	storeId: storeSelectors.getSelectedItem(state)
});

export default connect(mapStateToProps)(withWidth()(withStyles(style)(ClassDateTimePicker)));
