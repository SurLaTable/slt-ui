import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import StoreCard from '../StoreCard';

const styles = (theme) => ({});

class StoreList extends React.Component {
	constructor() {
		super();
	}
	render() {
		let { limit = 10, storeData } = this.props;
		if (storeData == null) {
			return <div />;
		}
		let cards = [];
		for (let i = 0; i < limit; i++) {
			cards.push(<StoreCard
				key={i}
				storeId={storeData[i].storeId}
			/>);
		}
		return <div>{cards}</div>;
	}
}

StoreList.propTypes = {
	sortBy: PropTypes.string,
	limit: PropTypes.number,
	storeData: PropTypes.array
};
StoreList.defaultProps = {
	sortBy: 'name',
	limit: 10
};

const mapStateToProps = (state, props) => {
	let storeData = state?.storesApi?.storeData?.items.slice().sort(function(a, b) {
		return a.name < b.name ? -1 : 1;
	});
	if (props.sortBy == 'distance') {
		storeData = state?.storesApi?.closestStores?.items || storeData;
	}

	return {
		...props,
		storeData
	};
};

export default connect(mapStateToProps)(withStyles(styles)(StoreList));
