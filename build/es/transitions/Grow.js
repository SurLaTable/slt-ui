import _extends from "@babel/runtime/helpers/extends";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
// @inheritedComponent Transition
import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import withTheme from '../styles/withTheme';
import { reflow, getTransitionProps } from './utils';

function getScale(value) {
  return `scale(${value}, ${value ** 2})`;
}

const styles = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: getScale(1)
  }
};
/**
 * The Grow transition is used by the [Popover](/utils/popovers) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

class Grow extends React.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), Object.defineProperty(this, "autoTimeout", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: undefined
    }), Object.defineProperty(this, "timer", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: null
    }), Object.defineProperty(this, "handleEnter", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: node => {
        const {
          theme,
          timeout
        } = this.props;
        reflow(node); // So the animation always start from the start.

        const {
          duration: transitionDuration,
          delay
        } = getTransitionProps(this.props, {
          mode: 'enter'
        });
        let duration = 0;

        if (timeout === 'auto') {
          duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
          this.autoTimeout = duration;
        } else {
          duration = transitionDuration;
        }

        node.style.transition = [theme.transitions.create('opacity', {
          duration,
          delay
        }), theme.transitions.create('transform', {
          duration: duration * 0.666,
          delay
        })].join(',');

        if (this.props.onEnter) {
          this.props.onEnter(node);
        }
      }
    }), Object.defineProperty(this, "handleExit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: node => {
        const {
          theme,
          timeout
        } = this.props;
        let duration = 0;
        const {
          duration: transitionDuration,
          delay
        } = getTransitionProps(this.props, {
          mode: 'exit'
        });

        if (timeout === 'auto') {
          duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
          this.autoTimeout = duration;
        } else {
          duration = transitionDuration;
        }

        node.style.transition = [theme.transitions.create('opacity', {
          duration,
          delay
        }), theme.transitions.create('transform', {
          duration: duration * 0.666,
          delay: delay || duration * 0.333
        })].join(',');
        node.style.opacity = '0';
        node.style.transform = getScale(0.75);

        if (this.props.onExit) {
          this.props.onExit(node);
        }
      }
    }), Object.defineProperty(this, "addEndListener", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: (_, next) => {
        if (this.props.timeout === 'auto') {
          this.timer = setTimeout(next, this.autoTimeout || 0);
        }
      }
    }), _temp;
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const _props = this.props,
          {
      children,
      onEnter,
      onExit,
      style: styleProp,
      theme,
      timeout
    } = _props,
          other = _objectWithoutProperties(_props, ["children", "onEnter", "onExit", "style", "theme", "timeout"]);

    const style = _objectSpread({}, styleProp, React.isValidElement(children) ? children.props.style : {});

    return React.createElement(Transition, _extends({
      appear: true,
      onEnter: this.handleEnter,
      onExit: this.handleExit,
      addEndListener: this.addEndListener,
      timeout: timeout === 'auto' ? null : timeout
    }, other), (state, childProps) => {
      return React.cloneElement(children, _objectSpread({
        style: _objectSpread({
          opacity: 0,
          transform: getScale(0.75)
        }, styles[state], style)
      }, childProps));
    });
  }

}

Grow.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A single child content element.
   */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

  /**
   * If `true`, show the component; triggers the enter or exit animation.
   */
  in: PropTypes.bool,

  /**
   * @ignore
   */
  onEnter: PropTypes.func,

  /**
   * @ignore
   */
  onExit: PropTypes.func,

  /**
   * @ignore
   */
  style: PropTypes.object,

  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  timeout: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    enter: PropTypes.number,
    exit: PropTypes.number
  }), PropTypes.oneOf(['auto'])])
} : {};
Grow.defaultProps = {
  timeout: 'auto'
};
export default withTheme()(Grow);