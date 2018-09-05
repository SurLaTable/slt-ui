import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import StoreCard from '../StoreCard';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { getClosestStores, getItemsAlphabetically } from './selectors';

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
		let { limit = 10, storeData, classes, detailed } = this.props;
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
					contactInfo={storeData[i].contact}
					hours={storeData[i].hours}
					distance={storeData[i].distance}
					elevation={0}
					detailed={detailed}
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
							href={`#${storeData[i].storeId}`}
							className={classes.button}
						>
							Select Store
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
	detailed: PropTypes.bool
};
StoreList.defaultProps = {
	sortBy: 'name',
	limit: 10,
	detailed: false
};

const mapStateToProps = (state, props) => {
	return {
		...props,
		storeData:
			props.sortBy == 'distance' ? getClosestStores(state) : getItemsAlphabetically(state)
	};
};

export default connect(mapStateToProps)(withStyles(styles)(StoreList));
