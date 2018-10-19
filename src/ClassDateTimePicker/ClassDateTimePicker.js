import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import classNames from 'classnames';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/close';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { actions, selectors } from '../services/slt-class-times';

import { selectors as storeSelectors } from '../services/slt-stores';

const style = (theme) => {
	return {
		fullScreen: {
			padding: '10px'
		},
		flexContainer: {
			display: 'flex',
			alignItems: 'center'
		},
		flex: {
			flex: 1
		},
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
		},
		anchor: {
			background: 'transparent',
			display: 'inline',
			cursor: 'pointer',
			outline: 'none',
			border: 0,
			padding: 0,
			textAlign: 'left',
			textDecoration: 'underline',
			userSelect: 'none',
			color: theme.palette.text.primary,
			'&:hover': {
				color: theme.palette.text.secondary
			},
			'&[disabled], &.disabled, &:disabled': {
				pointerEvents: 'none',
				color: theme.palette.text.disabled
			}
		}
	};
};

const locale = 'en-us';

const giveMeTheClassTimeNicelyShort = (classData) => `
	${new Date(classData?.classStartDate).toLocaleString(locale, {
		month: 'short',
		day: '2-digit',
		hour: 'numeric',
		minute: 'numeric'
	})}`;

const giveMeTheClassTimeNicely = (classData) => `
	${new Date(classData?.classStartDate).toLocaleString(locale, {
		weekday: 'short',
		month: 'numeric',
		day: 'numeric',
		year: 'numeric',
		hour: 'numeric',
		minute: 'numeric'
	})} - ${new Date(classData?.classStopDate).toLocaleString(locale, {
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
		sku: null,
		open: false
	};
	constructor() {
		super();
		// if (global?.history?.state?.type === 'OPEN_DATE_TIME_PICKER') {
		// 	// We hydrate with the old state.
		// 	global.history.replaceState(null, 'ClassDateTimePicker');
		// }
		this.renderPanels = this.renderPanels.bind(this);
		this.getSelectedClass = this.getSelectedClass.bind(this);
		//this.handleHistoryPopState = this.handleHistoryPopState.bind(this);
	}
	// handleHistoryPopState(event) {
	// 	const state = event.state;
	//
	// 	if (state == null) {
	// 		// Close dialog:
	// 		this.setState({ open: false });
	// 	} else if (state.type === 'OPEN_DATE_TIME_PICKER' && !this.state.open) {
	// 		this.setState({ open: true });
	// 		global.history.replaceState(state, 'ClassDateTimePicker');
	// 	}
	// }
	componentDidMount() {
		this.setState({
			culinaryClassName: document.querySelector('h1.name')?.textContent || 'class'
		});
		this.onEnter(this.props.productId, this.props.storeId);
		//global.addEventListener('popstate', this.handleHistoryPopState);
	}
	componentWillUnMount() {
		//global.removeEventListener('popstate', this.handleHistoryPopState);
	}
	handleChange = (panel) => (event, expanded) => {
		this.setState({
			expanded: expanded ? panel : false
		});
	};
	handleClickOpen() {
		// if (global?.history) {
		// 	global.history.pushState(
		// 		{
		// 			type: 'OPEN_DATE_TIME_PICKER',
		// 			sku: this.state.sku
		// 		},
		// 		'ClassDateTimePicker'
		// 	);
		// }

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
	returnMonthData(culinaryClasses) {
		return (
			<RadioGroup
				aria-label="Classes"
				name="classes"
			>
				{culinaryClasses.map((culinaryClass, index) => {
					return (
						<FormControlLabel
							key={`${index}_${Date.now()}`}
							value={culinaryClass.sku}
							control={
								<Radio
									checked={this.state.sku == culinaryClass.sku}
									onChange={() => {
										this.setState({ sku: culinaryClass.sku });
										if (
											global.location &&
											global.location.host.indexOf('.surlatable.com') >= 0
										) {
											global.location.replace(`/sku/${culinaryClass.sku}/`);
										}
									}}
								/>
							}
							label={giveMeTheClassTimeNicely(culinaryClass)}
						/>
					);
				})}
			</RadioGroup>
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

		if ((this.state.sku == null && this.props.sku) || this.props.sku != prevProps.sku) {
			this.setState({ sku: this.props.sku });
		}

		const dates = Object.keys(this.props.classTimeData).sort(sortDates);
		if (
			this.state.sku == null &&
			!this.props.sku &&
			this.props.classTimeData?.[dates[0]]?.[0]
		) {
			this.setState({ sku: this.props.classTimeData?.[dates[0]]?.[0]?.sku });
			if (global.location && global.location.host.indexOf('.surlatable.com') >= 0) {
				global.location.replace(`/sku/${this.props.classTimeData[dates[0]][0].sku}/`);
			}
		}

		if (needToFetch) {
			this.onEnter(this.props.productId, this.props.storeId);
		}
	}
	renderPanels({ classTimeData, dates, expanded }) {
		//returns if a class is available
		var panels = [];
		for (let i = 0; i < dates.length; i++) {
			const dateString = dates[i];
			panels.push(
				<ExpansionPanel
					key={dateString}
					elevation={0}
					expanded={expanded === `panel ${dateString}`}
					onChange={this.handleChange(`panel ${dateString}`)}
				>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography variant="h6">{dateString}</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						{this.returnMonthData(classTimeData[dateString])}
					</ExpansionPanelDetails>
				</ExpansionPanel>
			);
		}
		return panels;
	}
	getSelectedClass({ classTimeData, sku }) {
		if (!sku) {
			return null;
		}
		for (var dateString in classTimeData) {
			for (let i = 0; i < classTimeData[dateString].length; i++) {
				if (classTimeData[dateString][i].sku === sku) {
					return classTimeData[dateString][i];
				}
			}
		}
	}
	render() {
		let { width, productId, storeId, classes, classTimeData } = this.props;
		const { expanded, culinaryClassName, open, sku } = this.state;

		const dates = Object.keys(classTimeData).sort(sortDates);
		const selectedClass =
			this.getSelectedClass({ classTimeData, sku }) || classTimeData?.[dates[0]]?.[0];

		return (
			<Paper
				elevation={0}
				className={classes.display}
			>
				<Typography>{sku ? 'Class Date:' : 'Next Available Date:'}</Typography>
				<Typography>
					<strong>
						{!storeId ? (
							<>&nbsp;</>
						) : dates.length ? (
							giveMeTheClassTimeNicelyShort(selectedClass)
						) : (
							'No classes available'
						)}
					</strong>
				</Typography>
				<button
					onClick={this.handleClickOpen.bind(this)}
					className={classes.anchor}
					style={{ flex: 1 }}
					disabled={!dates.length}
				>
					Change Date
				</button>

				<Dialog
					fullWidth={true}
					fullScreen={isWidthDown('xs', width)}
					open={open}
					onClose={this.handleClose.bind(this)}
					onEnter={() => this.onEnter(productId, storeId)}
					scroll="paper"
					className={classNames({
						[classes.fullScreen]: isWidthDown('xs', width)
					})}
				>
					<DialogTitle variant="heading">
						<div className={classes.flexContainer}>
							<div className={classes.flex}>
								Available dates for {culinaryClassName}:
							</div>
							<Button
								variant="flat"
								size="small"
								onClick={this.handleClose.bind(this)}
								color="default"
							>
								<CloseIcon />
							</Button>
						</div>
					</DialogTitle>
					<DialogContent style={{ padding: 0 }}>
						{this.renderPanels({ classTimeData, dates, expanded })}
					</DialogContent>
				</Dialog>
			</Paper>
		);
	}
}

ClassDateTimePicker.propTypes = {
	classTimeData: PropTypes.object,
	dispatch: PropTypes.func,
	sku: PropTypes.string,
	storeId: PropTypes.string,
	productId: PropTypes.string
};

ClassDateTimePicker.defaultProps = {};

const mapStateToProps = (state, props) => {
	return {
		...props,
		classTimeData: {
			...selectors.getClassTimeData(state)
		},
		storeId: storeSelectors.getSelectedItem(state)
	};
};

export default connect(mapStateToProps)(withWidth()(withStyles(style)(ClassDateTimePicker)));
