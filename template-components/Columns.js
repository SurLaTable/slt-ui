import React from 'react';
import PropTypes from 'propt-types';
import { withStyles } from '@material-ui/core/styles';

const style = (theme) => {
	return {
		container: {
			display: 'flex'
		},
		child: {
			flex: '1 0 auto'
		}
	};
};

class Row extends React.Component {
	constructor() {
		super();
	}
	render() {
		const { classes, spacing, width, children } = this.props;
		const columns = this.props[width];
		const columnSize = 100 / columns;
		return (
			<div className={classes.container}>
				{React.Children.map(children, (child) => (
					<div
						key={this.key}
						className={classes.child}
						style={{
							width: columnSize,
							paddingLeft: spacing / 2,
							paddingRight: spacing / 2
						}}
					>
						{React.cloneElement(child)}
					</div>
				))}
			</div>
		);
	}
}

Row.propTypes = {
	spacing: PropTypes.number,
	width: PropTypes.string.isRequired,
	xs: PropTypes.number,
	sm: PropTypes.number,
	md: PropTypes.number,
	lg: PropTypes.number
};

Row.defaultProps = {
	spacing: 16,
	xs: Infinity,
	sm: Infinity,
	md: Infinity,
	lg: Infinity
};

export default withStyles(style)(Row);
