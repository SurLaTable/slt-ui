import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import StoreCard from '../StoreCard';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import * as sltStoresApi from '../services/slt-stores';
import { getClosestStores } from './selectors';

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
	}
	render() {
		//add filters for culinary, and a variable for displaying filters
		let { limit = 10, storeData, classes, detailed, dispatch, onItemSelected } = this.props;

		if (storeData == null) {
			return <List />;
		}
		let cards = [];
		for (let i = 0; i < Math.min(Number(limit), storeData.length); i++) {
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
						<Button
							variant="outlined"
							className={classes.button}
							onClick={() => {
								if (this.props.selectedStore == storeData[i].storeId) {
									dispatch(sltStoresApi.actions.nullifySelectedItem());
								} else {
									dispatch(
										sltStoresApi.actions.setSelectedItem(storeData[i].storeId)
									);
									if (onItemSelected) {
										onItemSelected(storeData[i].storeId);
									}
								}
							}}
						>
							{this.props.selectedStore == storeData[i].storeId
								? 'Deselect Store'
								: 'Select Store'}
						</Button>
					</div>
				</StoreCard>
			);
		}
		return (
			<Paper
				elevation={0}
				className={classes.StoreList}
			>
				{cards}
			</Paper>
		);
	}
}

StoreList.propTypes = {
	sortBy: PropTypes.string,
	limit: PropTypes.number,
	detailed: PropTypes.bool,
	onItemSelected: PropTypes.func
};
StoreList.defaultProps = {
	sortBy: 'name',
	limit: 10,
	detailed: false
};

const mapStateToProps = (state, props) => {
	const selectedStore = sltStoresApi.selectors.getSelectedItem(state);
	const storeData =
		props.sortBy == 'distance'
			? getClosestStores(state)
			: sltStoresApi.selectors.getItemsAlphabetically(state);

	return {
		...props,
		selectedStore,
		storeData
	};
};

export default connect(mapStateToProps)(withStyles(styles)(StoreList));
