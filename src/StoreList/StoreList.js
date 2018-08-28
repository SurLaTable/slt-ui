import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import StoreCard from '../StoreCard';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const styles = (theme) => {
	return {
		button: {
			borderRadius: 0
		},
		StoreList: {
			overflow: 'auto',
			maxHeight: '500px',

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
		let { limit = 10, storeData, classes } = this.props;
		if (storeData == null) {
			return <List />;
		}
		let cards = [];
		for (let i = 0; i < Math.min(limit, storeData.length); i++) {
			cards.push(
				<StoreCard
					key={i}
					storeId={storeData[i].storeId}
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
	limit: PropTypes.number
};
StoreList.defaultProps = {
	sortBy: 'name',
	limit: 10
};

const mapStateToProps = (state, props) => {
	let storeData;
	if (props.sortBy == 'distance') {
		storeData = state?.storesApi?.closestStores?.items;
	}
	if (storeData == null && state?.storesApi?.storeData?.items) {
		storeData = state?.storesApi?.storeData?.items.slice().sort(function(a, b) {
			return a.name < b.name ? -1 : 1;
		});
	}

	return {
		...props,
		storeData
	};
};

export default connect(mapStateToProps)(withStyles(styles)(StoreList));
