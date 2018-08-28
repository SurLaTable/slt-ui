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
		flex: 1
	},
	distance: {
		fontSize: theme.typography.pxToRem(12),
		color: theme.palette.text.secondary
	}
});

class StoreCard extends React.Component {
	constructor() {
		super();
	}
	render() {
		let {
			classes,
			storeData,
			distance = null,
			storeId,
			children,
			detailed = false
		} = this.props;

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

		let distanceElement = null;
		if (typeof distance == 'number' && isNaN(distance) == false) {
			distanceElement = (
				<span className={classes.distance}>
					{`(${distance.toFixed(2)}`}
					&nbsp;
					{'mi)'}
				</span>
			);
		}

		return (
			<Card
				className={classes.card}
				elevation={this.props.elevation}
			>
				<div>
					<div className={classes.details}>
						<CardContent className={classes.content}>
							<div>
								<Typography
									variant="headline"
									component="h2"
								>
									{storeData.name}
									&nbsp;
									{distanceElement}
								</Typography>
								<Typography>
									{storeData.location.address1}
									<br />
									{storeData.location.city}
									{', '}
									{storeData.location.state} {storeData.location.zip}
								</Typography>
							</div>
						</CardContent>

						{detailed ? (
							<CardContent className={classes.content}>
								<div>
									<Typography>
										<strong>Store:</strong> {storeData.contact.phoneNumber}
									</Typography>
									{hours}
								</div>
							</CardContent>
						) : null}

						{children ? (
							<CardContent
								className={classes.content}
								style={{
									flex: 1
								}}
							>
								{children}
							</CardContent>
						) : null}
					</div>
				</div>
			</Card>
		);
	}
}

StoreCard.propTypes = {
	classes: PropTypes.object.isRequired,
	onChange: PropTypes.func,
	storeId: PropTypes.string,
	distance: PropTypes.number
};

const mapStateToProps = (state, props) => {
	return {
		...props,
		storeData: state?.storesApi?.storeData?.byId?.[props.storeId],
		distance: state?.storesApi?.closestStores?.byId?.[props.storeId]
	};
};

export default connect(mapStateToProps)(withStyles(styles)(StoreCard));
