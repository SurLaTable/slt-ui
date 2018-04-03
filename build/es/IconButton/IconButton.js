import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
// @inheritedComponent ButtonBase

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import ButtonBase from '../ButtonBase';
import { capitalize } from '../utils/helpers';

export const styles = theme => ({
  root: {
    textAlign: 'center',
    flex: '0 0 auto',
    fontSize: theme.typography.pxToRem(24),
    width: 48,
    height: 48,
    padding: 0,
    borderRadius: '50%',
    color: theme.palette.action.active,
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.shortest
    })
  },
  colorInherit: {
    color: 'inherit'
  },
  colorPrimary: {
    color: theme.palette.primary.main
  },
  colorSecondary: {
    color: theme.palette.secondary.main
  },
  disabled: {
    color: theme.palette.action.disabled
  },
  label: {
    width: '100%',
    display: 'flex',
    alignItems: 'inherit',
    justifyContent: 'inherit'
  }
});

/**
 * Refer to the [Icons](/style/icons) section of the documentation
 * regarding the available icon options.
 */
function IconButton(props) {
  const { children, classes, className, color, disabled } = props,
        other = _objectWithoutProperties(props, ['children', 'classes', 'className', 'color', 'disabled']);

  return React.createElement(
    ButtonBase,
    _extends({
      className: classNames(classes.root, {
        [classes[`color${capitalize(color)}`]]: color !== 'default',
        [classes.disabled]: disabled
      }, className),
      centerRipple: true,
      focusRipple: true,
      disabled: disabled
    }, other),
    React.createElement(
      'span',
      { className: classes.label },
      children
    )
  );
}

IconButton.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The icon element.
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
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the ripple will be disabled.
   */
  disableRipple: PropTypes.bool
} : {};

IconButton.defaultProps = {
  color: 'default',
  disabled: false
};

export default withStyles(styles, { name: 'MuiIconButton' })(IconButton);