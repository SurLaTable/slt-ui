import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import '../services/slt-stores';

const styles = (theme) => ({
	details: {
		display: 'flex'
	},
	content: {
		flex: '1 0 auto'
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary
	}
});

class StoreCard extends React.Component {
	constructor() {
		super();
	}
	render() {
		let { classes, storeData, distance = null } = this.props;

		let hours = [];

		if (storeData == null) {
			return <div>test</div>;
		}

		for (let key in storeData.hours) {
			hours.push(
				<React.Fragment key={key}>
					<Typography>
						<b>{key}:</b> {storeData.hours[key]}
					</Typography>
				</React.Fragment>
			);
		}

		return (
			<Card className={classes.card}>
				<div>
					<div className={classes.details}>
						<CardContent className={classes.content}>
							<Typography
								variant="headline"
								component="h2"
							>
								{storeData.name}
							</Typography>
							<Typography className={classes.secondaryHeading}>
								{storeData.location.address1}
								<br />
								{storeData.location.city}
								{', '}
								{storeData.location.state} {storeData.location.zip}
							</Typography>
						</CardContent>

						<CardContent className={classes.content}>
							<br />
							<Typography>Store: {storeData.contact.phoneNumber}</Typography>
							{hours}
						</CardContent>

						<CardContent className={classes.content}>
							{distance != null ? (
								<Typography
									className={classes.secondaryHeading}
									style={{ textAlign: 'right' }}
								>
									{distance} miles
								</Typography>
							) : (
								''
							)}
						</CardContent>
					</div>
				</div>

				<CardActions disableActionSpacing={true} />
			</Card>
		);
	}
}

StoreCard.propTypes = {
	classes: PropTypes.object.isRequired,
	onChange: PropTypes.func,
	storeId: PropTypes.string,
	storeData: PropTypes.object,
	distance: PropTypes.number
};

const mapStateToProps = (state, props) => {
	return {
		...props,
		storeData: state?.storesApi?.storeData?.byId?.[props.storeId],
		distance: state?.storesApi?.sortedStores?.byId?.[props.storeId]
	};
};

export default connect(mapStateToProps)(withStyles(styles)(StoreCard));
