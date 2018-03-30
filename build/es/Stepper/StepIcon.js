import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CheckCircle from '../internal/svg-icons/CheckCircle';
import withStyles from '../styles/withStyles';
import StepPositionIcon from './StepPositionIcon';

export const styles = theme => ({
  root: {
    display: 'block',
    '&$active': {
      color: theme.palette.primary.main
    },
    '&$completed': {
      color: theme.palette.primary.main
    }
  },
  active: {},
  completed: {}
});

function StepIcon(props) {
  const { completed, icon, active, classes } = props;

  if (typeof icon === 'number' || typeof icon === 'string') {
    if (completed) {
      return React.createElement(CheckCircle, { className: classNames(classes.root, classes.completed) });
    }
    return React.createElement(StepPositionIcon, {
      className: classNames(classes.root, {
        [classes.active]: active
      }),
      position: icon
    });
  }

  return icon;
}

StepIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Classses for component style customizations.
   */
  classes: PropTypes.object.isRequired,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The icon displayed by the step label.
   */
  icon: PropTypes.node.isRequired
} : {};

StepIcon.defaultProps = {
  active: false,
  completed: false
};

export default withStyles(styles, { name: 'MuiStepIcon' })(StepIcon);