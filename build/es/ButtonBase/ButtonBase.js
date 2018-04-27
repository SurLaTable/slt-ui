import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import keycode from 'keycode';
import { polyfill } from 'react-lifecycles-compat';
import ownerWindow from '../utils/ownerWindow';
import withStyles from '../styles/withStyles';
import { listenForFocusKeys, detectKeyboardFocus } from '../utils/keyboardFocus';
import TouchRipple from './TouchRipple';
import createRippleHandler from './createRippleHandler';

export const styles = {
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    // Remove grey highlight
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent', // Reset default value
    outline: 'none',
    border: 0,
    margin: 0, // Remove the margin in Safari
    borderRadius: 0,
    padding: 0, // Remove the padding in Firefox
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    '-moz-appearance': 'none', // Reset
    '-webkit-appearance': 'none', // Reset
    textDecoration: 'none',
    // So we take precedent over the style of a native <a /> element.
    color: 'inherit',
    '&::-moz-focus-inner': {
      borderStyle: 'none' // Remove Firefox dotted outline.
    },
    '&$disabled': {
      pointerEvents: 'none', // Disable link interactions
      cursor: 'default'
    }
  },
  disabled: {}
};

/**
 * `ButtonBase` contains as few styles as possible.
 * It aims to be a simple building block for creating a button.
 * It contains a load of style reset and some focus/ripple logic.
 */
class ButtonBase extends React.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {}, this.onKeyboardFocusHandler = event => {
      this.keyDown = false;
      this.setState({ focusVisible: true });

      if (this.props.onKeyboardFocus) {
        this.props.onKeyboardFocus(event);
      }
    }, this.onRippleRef = node => {
      this.ripple = node;
    }, this.ripple = null, this.keyDown = false, this.button = null, this.keyboardFocusTimeout = null, this.keyboardFocusCheckTime = 50, this.keyboardFocusMaxCheckTimes = 5, this.handleKeyDown = event => {
      const { component, focusRipple, onKeyDown, onClick } = this.props;
      const key = keycode(event);

      // Check if key is already down to avoid repeats being counted as multiple activations
      if (focusRipple && !this.keyDown && this.state.focusVisible && this.ripple && key === 'space') {
        this.keyDown = true;
        event.persist();
        this.ripple.stop(event, () => {
          this.ripple.start(event);
        });
      }

      if (onKeyDown) {
        onKeyDown(event);
      }

      // Keyboard accessibility for non interactive elements
      if (event.target === event.currentTarget && component && component !== 'button' && (key === 'space' || key === 'enter')) {
        event.preventDefault();
        if (onClick) {
          onClick(event);
        }
      }
    }, this.handleKeyUp = event => {
      if (this.props.focusRipple && keycode(event) === 'space' && this.ripple && this.state.focusVisible) {
        this.keyDown = false;
        event.persist();
        this.ripple.stop(event, () => this.ripple.pulsate(event));
      }
      if (this.props.onKeyUp) {
        this.props.onKeyUp(event);
      }
    }, this.handleMouseDown = createRippleHandler(this, 'MouseDown', 'start', () => {
      clearTimeout(this.keyboardFocusTimeout);
      if (this.state.focusVisible) {
        this.setState({ focusVisible: false });
      }
    }), this.handleMouseUp = createRippleHandler(this, 'MouseUp', 'stop'), this.handleMouseLeave = createRippleHandler(this, 'MouseLeave', 'stop', event => {
      if (this.state.focusVisible) {
        event.preventDefault();
      }
    }), this.handleTouchStart = createRippleHandler(this, 'TouchStart', 'start'), this.handleTouchEnd = createRippleHandler(this, 'TouchEnd', 'stop'), this.handleTouchMove = createRippleHandler(this, 'TouchMove', 'stop'), this.handleBlur = createRippleHandler(this, 'Blur', 'stop', () => {
      clearTimeout(this.keyboardFocusTimeout);
      if (this.state.focusVisible) {
        this.setState({ focusVisible: false });
      }
    }), this.handleFocus = event => {
      if (this.props.disabled) {
        return;
      }

      // Fix for https://github.com/facebook/react/issues/7769
      if (!this.button) {
        this.button = event.currentTarget;
      }

      event.persist();
      detectKeyboardFocus(this, this.button, () => {
        this.onKeyboardFocusHandler(event);
      });

      if (this.props.onFocus) {
        this.props.onFocus(event);
      }
    }, _temp;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (typeof prevState.focusVisible === 'undefined') {
      return {
        focusVisible: false,
        lastDisabled: nextProps.disabled
      };
    }

    // The blur won't fire when the disabled state is set on a focused input.
    // We need to book keep the focused state manually.
    if (!prevState.prevState && nextProps.disabled && prevState.focusVisible) {
      return {
        focusVisible: false,
        lastDisabled: nextProps.disabled
      };
    }

    return {
      lastDisabled: nextProps.disabled
    };
  }

  componentDidMount() {
    this.button = ReactDOM.findDOMNode(this);
    listenForFocusKeys(ownerWindow(this.button));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.focusRipple && !this.props.disableRipple && !prevState.focusVisible && this.state.focusVisible) {
      this.ripple.pulsate();
    }
  }

  componentWillUnmount() {
    this.button = null;
    clearTimeout(this.keyboardFocusTimeout);
  } // Used to help track keyboard activation keyDown


  render() {
    const _props = this.props,
          {
      buttonRef,
      centerRipple,
      children,
      classes,
      className: classNameProp,
      component,
      disabled,
      disableRipple,
      focusRipple,
      focusVisibleClassName,
      onBlur,
      onFocus,
      onKeyboardFocus,
      onKeyDown,
      onKeyUp,
      onMouseDown,
      onMouseLeave,
      onMouseUp,
      onTouchEnd,
      onTouchMove,
      onTouchStart,
      tabIndex,
      TouchRippleProps,
      type
    } = _props,
          other = _objectWithoutProperties(_props, ['buttonRef', 'centerRipple', 'children', 'classes', 'className', 'component', 'disabled', 'disableRipple', 'focusRipple', 'focusVisibleClassName', 'onBlur', 'onFocus', 'onKeyboardFocus', 'onKeyDown', 'onKeyUp', 'onMouseDown', 'onMouseLeave', 'onMouseUp', 'onTouchEnd', 'onTouchMove', 'onTouchStart', 'tabIndex', 'TouchRippleProps', 'type']);

    const className = classNames(classes.root, {
      [classes.disabled]: disabled,
      [focusVisibleClassName]: this.state.focusVisible
    }, classNameProp);

    const buttonProps = {};

    let ComponentProp = component;

    if (!ComponentProp) {
      if (other.href) {
        ComponentProp = 'a';
      } else {
        ComponentProp = 'button';
      }
    }

    if (ComponentProp === 'button') {
      buttonProps.type = type || 'button';
      buttonProps.disabled = disabled;
    } else {
      buttonProps.role = 'button';
    }

    return React.createElement(
      ComponentProp,
      _extends({
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        onKeyDown: this.handleKeyDown,
        onKeyUp: this.handleKeyUp,
        onMouseDown: this.handleMouseDown,
        onMouseLeave: this.handleMouseLeave,
        onMouseUp: this.handleMouseUp,
        onTouchEnd: this.handleTouchEnd,
        onTouchMove: this.handleTouchMove,
        onTouchStart: this.handleTouchStart,
        tabIndex: disabled ? '-1' : tabIndex,
        className: className,
        ref: buttonRef
      }, buttonProps, other),
      children,
      !disableRipple && !disabled ? React.createElement(TouchRipple, _extends({ innerRef: this.onRippleRef, center: centerRipple }, TouchRippleProps)) : null
    );
  }
}

ButtonBase.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Use that property to pass a ref callback to the native button component.
   */
  buttonRef: PropTypes.func,
  /**
   * If `true`, the ripples will be centered.
   * They won't start at the cursor interaction position.
   */
  centerRipple: PropTypes.bool,
  /**
   * The content of the component.
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
   * The default value is a `button`.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /**
   * If `true`, the base button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: PropTypes.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * `disableRipple` must also be `false`.
   */
  focusRipple: PropTypes.bool,
  /**
   * This property can help a person know which element has the keyboard focus.
   * The class name will be applied when the element gain the focus throught a keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible feature](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rational for using this feature [is explain here](https://github.com/WICG/focus-visible/blob/master/explainer.md).
   */
  focusVisibleClassName: PropTypes.string,
  /**
   * @ignore
   */
  onBlur: PropTypes.func,
  /**
   * @ignore
   */
  onClick: PropTypes.func,
  /**
   * @ignore
   */
  onFocus: PropTypes.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onKeyboardFocus: PropTypes.func,
  /**
   * @ignore
   */
  onKeyDown: PropTypes.func,
  /**
   * @ignore
   */
  onKeyUp: PropTypes.func,
  /**
   * @ignore
   */
  onMouseDown: PropTypes.func,
  /**
   * @ignore
   */
  onMouseLeave: PropTypes.func,
  /**
   * @ignore
   */
  onMouseUp: PropTypes.func,
  /**
   * @ignore
   */
  onTouchEnd: PropTypes.func,
  /**
   * @ignore
   */
  onTouchMove: PropTypes.func,
  /**
   * @ignore
   */
  onTouchStart: PropTypes.func,
  /**
   * @ignore
   */
  role: PropTypes.string,
  /**
   * @ignore
   */
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Properties applied to the `TouchRipple` element.
   */
  TouchRippleProps: PropTypes.object,
  /**
   * @ignore
   */
  type: PropTypes.string
} : {};

ButtonBase.defaultProps = {
  centerRipple: false,
  disableRipple: false,
  focusRipple: false,
  tabIndex: '0',
  type: 'button'
};

export default withStyles(styles, { name: 'MuiButtonBase' })(polyfill(ButtonBase));