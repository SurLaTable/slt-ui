import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SwitchBase from '../internal/SwitchBase';
import IndeterminateCheckBoxIcon from '../internal/svg-icons/IndeterminateCheckBox';
import withStyles from '../styles/withStyles';

export const styles = theme => ({
  default: {
    color: theme.palette.text.secondary
  },
  checked: {},
  checkedPrimary: {
    color: theme.palette.primary.main
  },
  checkedSecondary: {
    color: theme.palette.secondary.main
  },
  disabled: {
    color: theme.palette.action.disabled
  }
});

function Checkbox(props) {
  const { checkedIcon, classes, color, icon, indeterminate, indeterminateIcon } = props,
        other = _objectWithoutProperties(props, ['checkedIcon', 'classes', 'color', 'icon', 'indeterminate', 'indeterminateIcon']);
  const checkedClass = classNames(classes.checked, {
    [classes.checkedPrimary]: color === 'primary',
    [classes.checkedSecondary]: color === 'secondary'
  });

  return React.createElement(SwitchBase, _extends({
    checkedIcon: indeterminate ? indeterminateIcon : checkedIcon,
    classes: {
      default: classes.default,
      checked: checkedClass,
      disabled: classes.disabled
    },
    icon: indeterminate ? indeterminateIcon : icon
  }, other));
}

Checkbox.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * If `true`, the component is checked.
   */
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: PropTypes.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * If `true`, the switch will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: PropTypes.bool,
  /**
   * The icon to display when the component is unchecked.
   */
  icon: PropTypes.node,
  /**
   * The id of the `input` element.
   */
  id: PropTypes.string,
  /**
   * If `true`, the component appears indeterminate.
   */
  indeterminate: PropTypes.bool,
  /**
   * The icon to display when the component is indeterminate.
   */
  indeterminateIcon: PropTypes.node,
  /**
   * Properties applied to the `input` element.
   */
  inputProps: PropTypes.object,
  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: PropTypes.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback
   * @param {boolean} checked The `checked` value of the switch
   */
  onChange: PropTypes.func,
  /**
   * The input component property `type`.
   */
  type: PropTypes.string,
  /**
   * The value of the component.
   */
  value: PropTypes.string
} : {};

Checkbox.defaultProps = {
  color: 'secondary',
  indeterminate: false,
  indeterminateIcon: React.createElement(IndeterminateCheckBoxIcon, null)
};

export default withStyles(styles, { name: 'MuiCheckbox' })(Checkbox);