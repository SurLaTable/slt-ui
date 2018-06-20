import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Transition from 'react-transition-group/Transition';
/**
 * @ignore - internal component.
 */

class Ripple extends React.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), Object.defineProperty(this, "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        visible: false,
        leaving: false
      }
    }), Object.defineProperty(this, "handleEnter", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: () => {
        this.setState({
          visible: true
        });
      }
    }), Object.defineProperty(this, "handleExit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: () => {
        this.setState({
          leaving: true
        });
      }
    }), _temp;
  }

  render() {
    const _props = this.props,
          {
      classes,
      className: classNameProp,
      pulsate,
      rippleX,
      rippleY,
      rippleSize
    } = _props,
          other = _objectWithoutProperties(_props, ["classes", "className", "pulsate", "rippleX", "rippleY", "rippleSize"]);

    const {
      visible,
      leaving
    } = this.state;
    const rippleClassName = classNames(classes.ripple, {
      [classes.rippleVisible]: visible,
      [classes.ripplePulsate]: pulsate
    }, classNameProp);
    const rippleStyles = {
      width: rippleSize,
      height: rippleSize,
      top: -(rippleSize / 2) + rippleY,
      left: -(rippleSize / 2) + rippleX
    };
    const childClassName = classNames(classes.child, {
      [classes.childLeaving]: leaving,
      [classes.childPulsate]: pulsate
    });
    return React.createElement(Transition, _extends({
      onEnter: this.handleEnter,
      onExit: this.handleExit
    }, other), React.createElement("span", {
      className: rippleClassName,
      style: rippleStyles
    }, React.createElement("span", {
      className: childClassName
    })));
  }

}

Ripple.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: PropTypes.bool,

  /**
   * Diameter of the ripple.
   */
  rippleSize: PropTypes.number,

  /**
   * Horizontal position of the ripple center.
   */
  rippleX: PropTypes.number,

  /**
   * Vertical position of the ripple center.
   */
  rippleY: PropTypes.number
} : {};
Ripple.defaultProps = {
  pulsate: false
};
export default Ripple;