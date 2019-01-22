import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import classNames from 'classnames';

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
import CloseIcon from '@material-ui/icons/Close';
import Zoom from '@material-ui/core/Zoom';
import CircularProgress from '@material-ui/core/CircularProgress';

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
		fullScreen: {
			padding: '10px'
		},
		flexContainer: {
			display: 'flex',
			alignItems: 'center'
		},
		flex: {
			flex: '1 1 auto'
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
		if ((!this.props.storeId) && (this.props.hasLocations == false || this.props.selectedStore == null)) {
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
		let { selectedStore, classes, width, culinary, storeListProps, isFetching, storeId } = this.props;

		const dialog = (
			<Dialog
				fullWidth
				fullScreen={isWidthDown('xs', width)}
				maxWidth={'sm'}
				open={open}
				onClose={this.toggleOpen}
				onScroll={this.handleScroll}
				className={classNames({
					[classes.fullScreen]: isWidthDown('xs', width)
				})}
			>
				<DialogTitle>
					<div className={classes.flexContainer}>
						<div className={classes.flex}>Find A Location Near You</div>
						<Button
							variant="text"
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
						storeId={storeId}
						onShowMore={(page) => {
							this.setState({ showScrollToTop: page > 1 });
						}}
						culinary={culinary}
						{...storeListProps}
					/>
				</DialogContent>
				<DialogActions>
					<div style={{ position: 'relative' }}>
						<Zoom in={showScrollToTop && scrollTop > 600} unmountOnExit>
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
		const location = selectedStore?.location;
		let display = (
			<Paper elevation={0} className={classes.display}>
				<Typography>Class Location:</Typography>
				{isFetching ? <CircularProgress size={18} /> : null}
				<Typography>
					{isFetching == false && selectedStore ? (
						<strong>
							{location?.city}
							{', '}
							{location?.state}
						</strong>
					) : null}
				</Typography>
				<button
					onClick={this.toggleOpen}
					className={classNames(classes.anchor, classes.flex)}
				>
					{selectedStore ? 'Change Location' : 'Select Location'}
				</button>
			</Paper>
		);

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
	storeId: PropTypes.string,
	culinary: PropTypes.bool
};
StoreSelector.defaultProps = {
	culinary: false,
	storeId: null
};

const mapStateToProps = (state, props) => {
	return {
		...props,
		isFetching:
			sltStoresApi.selectors.getIsFetching(state) || googleMapsSelectors.getIsFetching(state),
		hasLocations: googleMapsSelectors.getHasLocations(state),
		selectedStore:
			sltStoresApi.selectors.getItemsWithId(state, props.storeId)[0] ||
			sltStoresApi.selectors.getSelectedItemObject(state)
	};
};

export default connect(mapStateToProps)(withWidth()(withStyles(style)(StoreSelector)));
