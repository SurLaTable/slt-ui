import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

const FooBarScrollStyles = () => ({
	root: {
		'&::before': {}
	}
});

class FooBarScroll extends React.Component {
	state = {};

	render() {
		return (
			<React.Fragment>
				<Typography>{this.props.children}</Typography>
			</React.Fragment>
		);
	}
}

FooBarScroll.propTypes = {
	children: PropTypes.string
};

FooBarScroll.defaultProps = {};

export default withStyles(FooBarScrollStyles)(
	connect((state, props) => ({
		...props
	}))(FooBarScroll)
);
