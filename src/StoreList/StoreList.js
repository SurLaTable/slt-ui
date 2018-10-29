import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import StoreCard from '../StoreCard';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import * as sltStoresApi from '../services/slt-stores';
import { selectors as googleMapsSelectors } from '../services/google-maps';
import { getClosestStores, getClosestCulinaryStores } from './selectors';

import moize from 'moize';

const styles = (theme) => {
	return {
		button: {
			borderRadius: 0
		},
		StoreList: {
			overflow: 'auto',
			'& > :not(:last-child)': {
				position: 'relative',
				borderBottom: `1px solid ${theme.palette.grey[300]}`
			}
		}
	};
};

class StoreList extends React.Component {
	constructor() {
		super();
		this.state = {
			page: 0
		};
		this.handleShowMore = this.handleShowMore.bind(this);
		this.renderCards = moize.reactSimple(this.renderCards.bind(this));
	}
	handleShowMore() {
		this.setState({
			page: this.state.page + 1
		});
		if (this.props.onShowMore) {
			this.props.onShowMore(this.state.page + 1);
		}
	}
	componentDidMount() {
		if (this.props.hasLocations && this.state.page == 0) {
			this.setState({ page: 1 });
		}
	}
	renderCards({ limit, storeData, detailed, onItemSelected, selectedStore }) {
		let { classes, dispatch } = this.props;
		let cards = [];
		for (let i = 0; i < limit; i++) {
			cards.push(
				<StoreCard
					key={i}
					storeId={storeData[i].storeId}
					name={storeData[i].name}
					location={storeData[i].location}
					contactInfo={detailed ? storeData[i].contact : null}
					hours={detailed ? storeData[i].hours : null}
					distance={storeData[i].distance}
					elevation={0}
				>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							height: '100%'
						}}
					>
						{selectedStore != storeData[i].storeId && (
							<Button
								variant="outlined"
								className={classes.button}
								onClick={() => {
									if (selectedStore == storeData[i].storeId) {
										dispatch(sltStoresApi.actions.nullifySelectedItem());
									} else {
										dispatch(
											sltStoresApi.actions.setSelectedItem(
												storeData[i].storeId
											)
										);
										if (onItemSelected) {
											onItemSelected(storeData[i].storeId);
										}
									}
								}}
							>
								Select Location
							</Button>
						)}
					</div>
				</StoreCard>
			);
		}
		return <>{cards}</>;
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.hasLocations != this.props.hasLocations && prevState.page == 0) {
			this.setState({ page: 1 });
		}
	}
	render() {
		//add filters for culinary, and a variable for displaying filters
		let {
			pageSize,
			storeData,
			classes,
			detailed,
			onItemSelected,
			selectedStore,
			hasLocations
		} = this.props;

		let { page } = this.state;

		let limit = Math.min(Number(pageSize) * page, storeData.length);
		let atMax = page > 0 && limit == storeData.length;

		return (
			<>
				<Paper
					elevation={0}
					className={classes.StoreList}
				>
					{this.renderCards({
						limit,
						storeData,
						detailed,
						onItemSelected,
						selectedStore
					})}
				</Paper>
				{atMax === false && (
					<Button
						fullWidth
						onClick={this.handleShowMore}
					>
						Show {page > 0 ? 'More' : 'Stores'}
					</Button>
				)}
			</>
		);
	}
}

StoreList.propTypes = {
	sortBy: PropTypes.string,
	culinary: PropTypes.bool,
	pageSize: PropTypes.number,
	detailed: PropTypes.bool,
	onItemSelected: PropTypes.func,
	onShowMore: PropTypes.func
};
StoreList.defaultProps = {
	sortBy: 'name',
	pageSize: 10,
	detailed: false,
	culinary: false
};

const mapStateToProps = (state, props) => {
	const selectedStore = sltStoresApi.selectors.getSelectedItem(state);
	const hasLocations = googleMapsSelectors.getHasLocations(state);
	let storeData = [];
	if (props.culinary) {
		storeData =
			props.sortBy == 'distance'
				? getClosestCulinaryStores(state)
				: sltStoresApi.selectors.getCulinaryItemsAlphabetically(state);
	} else {
		storeData =
			props.sortBy == 'distance'
				? getClosestStores(state)
				: sltStoresApi.selectors.getItemsAlphabetically(state);
	}

	return {
		...props,
		hasLocations,
		selectedStore,
		storeData
	};
};

export default connect(mapStateToProps)(withStyles(styles)(StoreList));
