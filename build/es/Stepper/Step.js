import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';

export const styles = theme => ({
  root: {},
  horizontal: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    '&:first-child': {
      paddingLeft: 0
    },
    '&:last-child': {
      paddingRight: 0
    }
  },
  vertical: {},
  alternativeLabel: {
    flex: 1,
    position: 'relative'
  }
});

function Step(props) {
  const {
    active,
    alternativeLabel,
    children,
    classes,
    className: classNameProp,
    completed,
    connector,
    disabled,
    index,
    last,
    orientation
  } = props,
        other = _objectWithoutProperties(props, ['active', 'alternativeLabel', 'children', 'classes', 'className', 'completed', 'connector', 'disabled', 'index', 'last', 'orientation']);

  const className = classNames(classes.root, classes[orientation], {
    [classes.alternativeLabel]: alternativeLabel
  }, classNameProp);

  return React.createElement(
    'div',
    _extends({ className: className }, other),
    React.Children.map(children, child => React.cloneElement(child, _extends({
      active,
      alternativeLabel,
      completed,
      disabled,
      icon: index + 1,
      last,
      orientation
    }, child.props))),
    connector && alternativeLabel && !last && React.cloneElement(connector, { orientation, alternativeLabel })
  );
}

Step.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Sets the step as active. Is passed to child components.
   */
  active: PropTypes.bool,
  /**
   * @ignore
   * Set internally by Stepper when it's supplied with the alternativeLabel property.
   */
  alternativeLabel: PropTypes.bool,
  /**
   * Should be `Step` sub-components such as `StepLabel`, `StepContent`.
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * @ignore
   * Passed down from Stepper if alternativeLabel is also set.
   */
  connector: PropTypes.element,
  /**
   * Mark the step as disabled, will also disable the button if
   * `StepButton` is a child of `Step`. Is passed to child components.
   */
  disabled: PropTypes.bool,
  /**
   * @ignore
   * Used internally for numbering.
   */
  index: PropTypes.number,
  /**
   * @ignore
   */
  last: PropTypes.bool,
  /**
   * @ignore
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical'])
} : {};

Step.defaultProps = {
  active: false,
  completed: false,
  disabled: false
};

export default withStyles(styles, { name: 'MuiStep' })(Step);