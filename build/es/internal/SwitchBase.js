import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
// @inheritedComponent IconButton

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CheckBoxOutlineBlankIcon from '../internal/svg-icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '../internal/svg-icons/CheckBox';
import withStyles from '../styles/withStyles';
import IconButton from '../IconButton';

export const styles = {
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    transition: 'none'
  },
  input: {
    cursor: 'inherit',
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0
  },
  default: {},
  checked: {},
  disabled: {}
};

/**
 * @ignore - internal component.
 */
class SwitchBase extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
    this.input = null;
    this.isControlled = null;

    this.handleInputChange = event => {
      const checked = event.target.checked;

      if (!this.isControlled) {
        this.setState({ checked });
      }

      if (this.props.onChange) {
        this.props.onChange(event, checked);
      }
    };

    this.isControlled = props.checked != null;
    if (!this.isControlled) {
      // not controlled, use internal state
      this.state.checked = props.defaultChecked !== undefined ? props.defaultChecked : false;
    }
  }

  render() {
    const _props = this.props,
          {
      checked: checkedProp,
      checkedIcon,
      classes,
      className: classNameProp,
      disabled: disabledProp,
      icon: iconProp,
      id,
      inputProps,
      inputRef,
      name,
      onChange,
      tabIndex,
      type,
      value
    } = _props,
          other = _objectWithoutProperties(_props, ['checked', 'checkedIcon', 'classes', 'className', 'disabled', 'icon', 'id', 'inputProps', 'inputRef', 'name', 'onChange', 'tabIndex', 'type', 'value']);

    const { muiFormControl } = this.context;
    let disabled = disabledProp;

    if (muiFormControl) {
      if (typeof disabled === 'undefined') {
        disabled = muiFormControl.disabled;
      }
    }

    const checked = this.isControlled ? checkedProp : this.state.checked;
    const className = classNames(classes.root, classes.default, classNameProp, {
      [classes.checked]: checked,
      [classes.disabled]: disabled
    });

    const icon = checked ? checkedIcon : iconProp;

    const hasLabelFor = type === 'checkbox' || type === 'radio';

    return React.createElement(
      IconButton,
      _extends({
        component: 'span',
        className: className,
        disabled: disabled,
        tabIndex: null,
        role: undefined
      }, other),
      icon,
      React.createElement('input', _extends({
        id: hasLabelFor && id,
        type: type,
        name: name,
        checked: checked,
        onChange: this.handleInputChange,
        className: classes.input,
        disabled: disabled,
        tabIndex: tabIndex,
        value: value,
        ref: inputRef
      }, inputProps))
    );
  }
}

// NB: If changed, please update Checkbox, Switch and Radio
// so that the API documentation is updated.
SwitchBase.propTypes = process.env.NODE_ENV !== "production" ? {
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
   * @ignore
   */
  className: PropTypes.string,
  /**
   * @ignore
   */
  defaultChecked: PropTypes.bool,
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
  /*
   * @ignore
   */
  name: PropTypes.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback
   * @param {boolean} checked The `checked` value of the switch
   */
  onChange: PropTypes.func,
  /**
   * @ignore
   */
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * The input component property `type`.
   */
  type: PropTypes.string,
  /**
   * The value of the component.
   */
  value: PropTypes.string
} : {};

SwitchBase.defaultProps = {
  checkedIcon: React.createElement(CheckBoxIcon, null),
  icon: React.createElement(CheckBoxOutlineBlankIcon, null),
  type: 'checkbox'
};

SwitchBase.contextTypes = {
  muiFormControl: PropTypes.object
};

export default withStyles(styles, { name: 'MuiSwitchBase' })(SwitchBase);