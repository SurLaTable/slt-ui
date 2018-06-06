import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import { isFilled, isAdornedStart } from '../Input/Input';
import { capitalize } from '../utils/helpers';
import { isMuiElement } from '../utils/reactHelpers';
export const styles = theme => ({
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    position: 'relative',
    // Reset fieldset default style
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0
  },
  marginNormal: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit
  },
  marginDense: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit / 2
  },
  fullWidth: {
    width: '100%'
  }
});
/**
 * Provides context such as filled/focused/error/required for form inputs.
 * Relying on the context provides high flexibilty and ensures that the state always stay
 * consitent across the children of the `FormControl`.
 * This context is used by the following components:
 *  - FormLabel
 *  - FormHelperText
 *  - Input
 *  - InputLabel
 */

class FormControl extends React.Component {
  constructor(props, context) {
    super(props, context); // We need to iterate through the children and find the Input in order
    // to fully support server side rendering.

    Object.defineProperty(this, "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        adornedStart: false,
        filled: false,
        focused: false
      }
    });
    Object.defineProperty(this, "handleFocus", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: event => {
        if (this.props.onFocus) {
          this.props.onFocus(event);
        }

        this.setState(state => !state.focused ? {
          focused: true
        } : null);
      }
    });
    Object.defineProperty(this, "handleBlur", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: event => {
        // The event might be undefined.
        // For instance, a child component might call this hook
        // when an input is disabled but still having the focus.
        if (this.props.onBlur && event) {
          this.props.onBlur(event);
        }

        this.setState(state => state.focused ? {
          focused: false
        } : null);
      }
    });
    Object.defineProperty(this, "handleDirty", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: () => {
        if (!this.state.filled) {
          this.setState({
            filled: true
          });
        }
      }
    });
    Object.defineProperty(this, "handleClean", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: () => {
        if (this.state.filled) {
          this.setState({
            filled: false
          });
        }
      }
    });
    const {
      children
    } = this.props;

    if (children) {
      React.Children.forEach(children, child => {
        if (!isMuiElement(child, ['Input', 'Select'])) {
          return;
        }

        if (isFilled(child.props, true)) {
          this.state.filled = true;
        }

        const input = isMuiElement(child, ['Select']) ? child.props.input : child;

        if (input && isAdornedStart(input.props)) {
          this.state.adornedStart = true;
        }
      });
    }
  }

  getChildContext() {
    const {
      disabled,
      error,
      required,
      margin
    } = this.props;
    const {
      adornedStart,
      filled,
      focused
    } = this.state;
    return {
      muiFormControl: {
        adornedStart,
        disabled,
        error,
        filled,
        focused,
        margin,
        onBlur: this.handleBlur,
        onEmpty: this.handleClean,
        onFilled: this.handleDirty,
        onFocus: this.handleFocus,
        required
      }
    };
  }

  render() {
    const _props = this.props,
          {
      classes,
      className,
      component: Component,
      disabled,
      error,
      fullWidth,
      margin,
      required
    } = _props,
          other = _objectWithoutProperties(_props, ["classes", "className", "component", "disabled", "error", "fullWidth", "margin", "required"]);

    return React.createElement(Component, _extends({
      className: classNames(classes.root, {
        [classes[`margin${capitalize(margin)}`]]: margin !== 'none',
        [classes.fullWidth]: fullWidth
      }, className)
    }, other, {
      onFocus: this.handleFocus,
      onBlur: this.handleBlur
    }));
  }

}

FormControl.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The contents of the form control.
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
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, the label should be displayed in an error state.
   */
  error: PropTypes.bool,

  /**
   * If `true`, the component will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,

  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   */
  margin: PropTypes.oneOf(['none', 'dense', 'normal']),

  /**
   * @ignore
   */
  onBlur: PropTypes.func,

  /**
   * @ignore
   */
  onFocus: PropTypes.func,

  /**
   * If `true`, the label will indicate that the input is required.
   */
  required: PropTypes.bool
} : {};
FormControl.defaultProps = {
  component: 'div',
  disabled: false,
  error: false,
  fullWidth: false,
  margin: 'none',
  required: false
};
FormControl.childContextTypes = {
  muiFormControl: PropTypes.object
};
export default withStyles(styles, {
  name: 'MuiFormControl'
})(FormControl);