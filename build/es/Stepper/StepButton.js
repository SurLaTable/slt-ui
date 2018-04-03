import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
// @inheritedComponent ButtonBase

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import ButtonBase from '../ButtonBase';
import StepLabel from './StepLabel';
import { isMuiElement } from '../utils/reactHelpers';

export const styles = theme => ({
  root: {
    width: '100%',
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`,
    margin: `${-theme.spacing.unit * 3}px ${-theme.spacing.unit * 2}px`,
    boxSizing: 'content-box'
  },
  vertical: {
    justifyContent: 'left'
  },
  touchRipple: {
    color: 'rgba(0, 0, 0, 0.3)'
  }
});

function StepButton(props) {
  const {
    active,
    alternativeLabel,
    children,
    classes,
    className: classNameProp,
    completed,
    disabled,
    icon,
    last,
    optional,
    orientation
  } = props,
        other = _objectWithoutProperties(props, ['active', 'alternativeLabel', 'children', 'classes', 'className', 'completed', 'disabled', 'icon', 'last', 'optional', 'orientation']);

  const childProps = {
    active,
    alternativeLabel,
    completed,
    disabled,
    icon,
    optional,
    orientation
  };
  const child = isMuiElement(children, ['StepLabel']) ? React.cloneElement(children, childProps) : React.createElement(
    StepLabel,
    childProps,
    children
  );

  return React.createElement(
    ButtonBase,
    _extends({
      disabled: disabled,
      TouchRippleProps: { className: classes.touchRipple },
      className: classNames(classes.root, {
        [classes.vertical]: orientation === 'vertical'
      }, classNameProp)
    }, other),
    child
  );
}

StepButton.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * @ignore
   * Passed in via `Step` - passed through to `StepLabel`.
   */
  active: PropTypes.bool,
  /**
   * @ignore
   * Set internally by Stepper when it's supplied with the alternativeLabel property.
   */
  alternativeLabel: PropTypes.bool,
  /**
   * Can be a `StepLabel` or a node to place inside `StepLabel` as children.
   */
  children: PropTypes.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * @ignore
   * Sets completed styling. Is passed to StepLabel.
   */
  completed: PropTypes.bool,
  /**
   * @ignore
   * Disables the button and sets disabled styling. Is passed to StepLabel.
   */
  disabled: PropTypes.bool,
  /**
   * The icon displayed by the step label.
   */
  icon: PropTypes.node,
  /**
   * @ignore
   */
  last: PropTypes.bool,
  /**
   * The optional node to display.
   */
  optional: PropTypes.node,
  /**
   * @ignore
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical'])
} : {};

export default withStyles(styles, { name: 'MuiStepButton' })(StepButton);