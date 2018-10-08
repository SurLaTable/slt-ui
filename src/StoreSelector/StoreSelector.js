import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import StoreList from '../StoreList';
import LocationField from '../LocationField';
import LocationButton from '../LocationButton';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import CloseIcon from '@material-ui/icons/close';
import Zoom from '@material-ui/core/Zoom';

import * as sltStoresApi from '../services/slt-stores';
import { selectors as googleMapsSelectors } from '../services/google-maps';

function throttle(fn, wait) {
	var time = Date.now();
	var debounce;
	return function() {
		var delta = time + wait - Date.now();
		debounce = clearTimeout(debounce);
		if (delta < 0) {
			fn.apply(this, arguments);
			time = Date.now();
		} else {
			debounce = setTimeout(() => {
				fn.apply(this, arguments);
				time = Date.now();
			}, delta);
		}
	};
}

const style = (theme) => {
	return {
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
		}
	};
};

class StoreSelector extends React.Component {
	static contextTypes = {
		store: PropTypes.object
	};

	constructor() {
		super();
		this.state = {
			open: false,
			showScrollToTop: false,
			scrollingToTop: false,
			scrollTop: 0
		};
		this.animateScrollRequest = null;

		this.handleGoToTop = this.handleGoToTop.bind(this);
		this.toggleOpen = this.toggleOpen.bind(this);
		this.currentScrollElement = null;

		let throttledScroll = throttle((e) => {
			let { scrollTop } = e.target;
			if (scrollTop != this.state.scrollTop) {
				this.setState({ scrollTop });
			}
		}, 300);

		this.handleScroll = (e) => {
			this.currentScrollElement = e.target;

			let { scrollTop } = e.target;
			if (this.animateScrollRequest) {
				if (scrollTop < 2) {
					global.cancelAnimationFrame(this.animateScrollRequest);
					this.animateScrollRequest = null;
					e.target.scrollTop = 0;
					this.setState({ scrollTop: 0 });
				}
			} else {
				e.persist();
				throttledScroll(e);
			}
		};
	}

	componentDidMount() {
		if (this.props.hasLocations == false) {
			this.setState({ open: true });
		}
	}

	toggleOpen() {
		this.setState({ open: !this.state.open });
	}

	handleGoToTop() {
		this.currentScrollElement.scrollTop += (0 - this.currentScrollElement.scrollTop) * 0.3;
		this.animateScrollRequest = global.requestAnimationFrame(this.handleGoToTop);
	}

	render() {
		let { open, scrollTop, showScrollToTop } = this.state;
		let { selectedStore, classes, width, culinary, storeListProps } = this.props;

		const dialog = (
			<Dialog
				fullWidth
				fullScreen={isWidthDown('sm', width)}
				maxWidth={'sm'}
				open={open}
				onClose={this.toggleOpen}
				onScroll={this.handleScroll}
			>
				<DialogTitle>
					<div className={classes.flexContainer}>
						<div className={classes.flex}>Find A Location Near You</div>
						<Button
							variant="flat"
							size="small"
							onClick={this.toggleOpen}
							color="default"
						>
							<CloseIcon />
						</Button>
					</div>
				</DialogTitle>

				<DialogContent>
					<LocationButton>Use My Location</LocationButton>
					<div>
						<LocationField />
					</div>

					<StoreList
						sortBy={'distance'}
						detailed={false}
						onItemSelected={this.toggleOpen}
						onShowMore={(page) => {
							this.setState({ showScrollToTop: page > 1 });
						}}
						culinary={culinary}
						{...storeListProps}
					/>
				</DialogContent>
				<DialogActions>
					<div style={{ position: 'relative' }}>
						<Zoom
							in={showScrollToTop && scrollTop > 600}
							unmountOnExit
						>
							<Button
								variant="fab"
								className={classes.fab}
								color="primary"
								onClick={this.handleGoToTop}
							>
								<ArrowUpwardIcon />
							</Button>
						</Zoom>
					</div>
				</DialogActions>
			</Dialog>
		);

		let display;

		if (selectedStore == null) {
			display = (
				<Paper
					elevation={0}
					className={classes.display}
				>
					<Typography>Class Location:</Typography>
					<Typography>&nbsp;</Typography>
					<Button
						fullWidth
						onClick={this.toggleOpen}
						className={classes.button}
						style={{ flex: 1 }}
					>
						Select Location
					</Button>
				</Paper>
			);
		} else {
			const location = selectedStore.location;
			display = (
				<Paper
					elevation={0}
					className={classes.display}
				>
					<Typography>Class Location:</Typography>
					<Typography>
						<strong>
							{location.city}
							{', '}
							{location.state}
						</strong>
					</Typography>
					<Button
						onClick={this.toggleOpen}
						className={classes.button}
					>
						Select Location
					</Button>
				</Paper>
			);
		}

		return (
			<>
				{display}
				{dialog}
			</>
		);
	}
}

StoreSelector.propTypes = {
	selectedStore: PropTypes.object,
	storeListProps: PropTypes.object,
	culinary: PropTypes.bool
};
StoreSelector.defaultProps = {
	culinary: false
};

const mapStateToProps = (state, props) => {
	return {
		...props,
		hasLocations: googleMapsSelectors.getHasLocations(state),
		selectedStore: sltStoresApi.selectors.getSelectedItemObject(state)
	};
};

export default connect(mapStateToProps)(withWidth()(withStyles(style)(StoreSelector)));
