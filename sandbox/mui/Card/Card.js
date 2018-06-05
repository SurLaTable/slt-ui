// @inheritedComponent Paper

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Paper from '../Paper';
import withStyles from '../styles/withStyles';

export const styles = {
  root: {
    overflow: 'hidden',
  },
};

function Card(props) {
  const { classes, className, raised, ...other } = props;

  return (
    <Paper className={classNames(classes.root, className)} elevation={raised ? 8 : 2} {...other} />
  );
}

Card.propTypes = {
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true`, the card will use raised styling.
   */
  raised: PropTypes.bool,
};

Card.defaultProps = {
  raised: false,
};

export default withStyles(styles, { name: 'MuiCard' })(Card);
