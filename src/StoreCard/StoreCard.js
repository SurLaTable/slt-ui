import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
			storeId,
			name,
			location,
			contactInfo = null,
			hours = null,
			distance = null,
			children
		} = this.props;

		let hoursElements, distanceElement;

		if (hours) {
			hoursElements = [];
			for (let key in hours) {
				if (hours.hasOwnProperty(key)) {
					hoursElements.push(
						<Typography key={key}>
							<b>{key}:</b> {hours[key]}
						</Typography>
					);
				}
			}
		}

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
				onClick={this.props.onClick}
			>
				<div>
					<div className={classes.details}>
						<CardContent className={classes.content}>
							<div>
								<Typography
									variant="headline"
									component="h2"
								>
									{name}
									&nbsp;
									{distanceElement}
								</Typography>
								<Typography>
									{location.address1}
									<br />
									{location.city}
									{', '}
									{location.state} {location.zip}
								</Typography>
							</div>
						</CardContent>

						{hours || contactInfo ? (
							<CardContent className={classes.content}>
								<div>
									<Typography>
										<strong>Store:</strong> {contactInfo.phoneNumber}
									</Typography>
									{hoursElements}
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
	storeId: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	location: PropTypes.object.isRequired,
	contactInfo: PropTypes.object,
	hours: PropTypes.object,
	distance: PropTypes.number,
	children: PropTypes.node
};

export default withStyles(styles)(StoreCard);
