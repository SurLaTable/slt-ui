import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
/* eslint-disable react/no-multi-comp, no-underscore-dangle */

import React from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import EventListener from 'react-event-listener';
import debounce from 'lodash/debounce';
import warning from 'warning';
import classNames from 'classnames';
import { Manager, Target, Popper } from 'react-popper';
import { capitalize } from '../utils/helpers';
import RefHolder from '../internal/RefHolder';
import common from '../colors/common';
import withStyles from '../styles/withStyles';

export const styles = theme => ({
  root: {
    display: 'inline',
    flexDirection: 'inherit' // Makes the wrapper more transparent.
  },
  popper: {
    zIndex: theme.zIndex.tooltip
  },
  popperClose: {
    pointerEvents: 'none'
  },
  tooltip: {
    backgroundColor: theme.palette.grey[700],
    borderRadius: 2,
    color: common.white,
    fontFamily: theme.typography.fontFamily,
    opacity: 0,
    transform: 'scale(0)',
    transition: theme.transitions.create(['opacity', 'transform'], {
      duration: theme.transitions.duration.shortest
    }),
    minHeight: 0,
    padding: theme.spacing.unit,
    fontSize: theme.typography.pxToRem(14),
    lineHeight: `${theme.typography.round(16 / 14)}em`,
    [theme.breakpoints.up('sm')]: {
      padding: `${theme.spacing.unit / 2}px ${theme.spacing.unit}px`,
      fontSize: theme.typography.pxToRem(10),
      lineHeight: `${theme.typography.round(14 / 10)}em`
    }
  },
  tooltipPlacementLeft: {
    transformOrigin: 'right center',
    margin: `0 ${theme.spacing.unit * 3}px`,
    [theme.breakpoints.up('sm')]: {
      margin: '0 14px'
    }
  },
  tooltipPlacementRight: {
    transformOrigin: 'left center',
    margin: `0 ${theme.spacing.unit * 3}px`,
    [theme.breakpoints.up('sm')]: {
      margin: '0 14px'
    }
  },
  tooltipPlacementTop: {
    transformOrigin: 'center bottom',
    margin: `${theme.spacing.unit * 3}px 0`,
    [theme.breakpoints.up('sm')]: {
      margin: '14px 0'
    }
  },
  tooltipPlacementBottom: {
    transformOrigin: 'center top',
    margin: `${theme.spacing.unit * 3}px 0`,
    [theme.breakpoints.up('sm')]: {
      margin: '14px 0'
    }
  },
  tooltipOpen: {
    opacity: 0.9,
    transform: 'scale(1)'
  }
});

function flipPlacement(placement) {
  switch (placement) {
    case 'bottom-end':
      return 'bottom-start';
    case 'bottom-start':
      return 'bottom-end';
    case 'top-end':
      return 'top-start';
    case 'top-start':
      return 'top-end';
    default:
      return placement;
  }
}

class Tooltip extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
    this.enterTimer = null;
    this.leaveTimer = null;
    this.touchTimer = null;
    this.isControlled = null;
    this.popper = null;
    this.children = null;
    this.ignoreNonTouchEvents = false;
    this.handleResize = debounce(() => {
      if (this.popper) {
        this.popper._popper.scheduleUpdate();
      }
    }, 166);

    this.handleEnter = event => {
      const { children, enterDelay } = this.props;
      const childrenProps = children.props;

      if (event.type === 'focus' && childrenProps.onFocus) {
        childrenProps.onFocus(event);
      }

      if (event.type === 'mouseover' && childrenProps.onMouseOver) {
        childrenProps.onMouseOver(event);
      }

      if (this.ignoreNonTouchEvents && event.type !== 'touchstart') {
        return;
      }

      clearTimeout(this.enterTimer);
      clearTimeout(this.leaveTimer);
      if (enterDelay) {
        event.persist();
        this.enterTimer = setTimeout(() => {
          this.handleOpen(event);
        }, enterDelay);
      } else {
        this.handleOpen(event);
      }
    };

    this.handleOpen = event => {
      if (!this.isControlled) {
        this.setState({ open: true });
      }

      if (this.props.onOpen) {
        this.props.onOpen(event, true);
      }
    };

    this.handleLeave = event => {
      const { children, leaveDelay } = this.props;
      const childrenProps = children.props;

      if (event.type === 'blur' && childrenProps.onBlur) {
        childrenProps.onBlur(event);
      }

      if (event.type === 'mouseleave' && childrenProps.onMouseLeave) {
        childrenProps.onMouseLeave(event);
      }

      clearTimeout(this.enterTimer);
      clearTimeout(this.leaveTimer);
      if (leaveDelay) {
        event.persist();
        this.leaveTimer = setTimeout(() => {
          this.handleClose(event);
        }, leaveDelay);
      } else {
        this.handleClose(event);
      }
    };

    this.handleClose = event => {
      this.ignoreNonTouchEvents = false;

      if (!this.isControlled) {
        this.setState({ open: false });
      }

      if (this.props.onClose) {
        this.props.onClose(event, false);
      }
    };

    this.handleTouchStart = event => {
      this.ignoreNonTouchEvents = true;
      const { children, enterTouchDelay } = this.props;
      const childrenProps = children.props;

      if (childrenProps.onTouchStart) {
        childrenProps.onTouchStart(event);
      }

      clearTimeout(this.touchTimer);
      event.persist();
      this.touchTimer = setTimeout(() => {
        this.handleEnter(event);
      }, enterTouchDelay);
    };

    this.handleTouchEnd = event => {
      const { children, leaveTouchDelay } = this.props;
      const childrenProps = children.props;

      if (childrenProps.onTouchEnd) {
        childrenProps.onTouchEnd(event);
      }

      clearTimeout(this.touchTimer);
      clearTimeout(this.leaveTimer);
      event.persist();
      this.leaveTimer = setTimeout(() => {
        this.handleClose(event);
      }, leaveTouchDelay);
    };

    this.isControlled = props.open != null;
    if (!this.isControlled) {
      // not controlled, use internal state
      this.state.open = false;
    }
  }

  componentDidMount() {
    process.env.NODE_ENV !== "production" ? warning(!this.children || !this.children.disabled || !this.children.tagName.toLowerCase() === 'button', ['Material-UI: you are providing a disabled button children to the Tooltip component.', 'A disabled element do not fire events.', 'But the Tooltip needs to listen to the children element events to display the title.', '', 'Place a `div` over top of the element.'].join('\n')) : void 0;
  }

  componentWillUnmount() {
    clearTimeout(this.enterTimer);
    clearTimeout(this.leaveTimer);
    this.handleResize.cancel();
  } // Corresponds to 10 frames at 60 Hz.

  render() {
    const _props = this.props,
          {
      children,
      classes,
      className,
      disableTriggerFocus,
      disableTriggerHover,
      disableTriggerTouch,
      enterDelay,
      enterTouchDelay,
      id,
      leaveDelay,
      leaveTouchDelay,
      onClose,
      onOpen,
      open: openProp,
      placement: placementProp,
      PopperProps: { className: PopperClassName } = {},
      theme,
      title
    } = _props,
          PopperOther = _objectWithoutProperties(_props.PopperProps, ['className']),
          other = _objectWithoutProperties(_props, ['children', 'classes', 'className', 'disableTriggerFocus', 'disableTriggerHover', 'disableTriggerTouch', 'enterDelay', 'enterTouchDelay', 'id', 'leaveDelay', 'leaveTouchDelay', 'onClose', 'onOpen', 'open', 'placement', 'PopperProps', 'theme', 'title']);

    const placement = theme.direction === 'rtl' ? flipPlacement(placementProp) : placementProp;
    let open = this.isControlled ? openProp : this.state.open;
    const childrenProps = {
      'aria-describedby': id
    };

    if (title === '') {
      open = false;
    }

    if (!disableTriggerTouch) {
      childrenProps.onTouchStart = this.handleTouchStart;
      childrenProps.onTouchEnd = this.handleTouchEnd;
    }

    if (!disableTriggerHover) {
      childrenProps.onMouseOver = this.handleEnter;
      childrenProps.onMouseLeave = this.handleLeave;
    }

    if (!disableTriggerFocus) {
      childrenProps.onFocus = this.handleEnter;
      childrenProps.onBlur = this.handleLeave;
    }

    process.env.NODE_ENV !== "production" ? warning(!children.props.title, ['Material-UI: you have been providing a `title` property to the child of <Tooltip />.', `Remove this title property \`${children.props.title}\` or the Tooltip component.`].join('\n')) : void 0;

    return React.createElement(
      EventListener,
      { target: 'window', onResize: this.handleResize },
      React.createElement(
        Manager,
        _extends({ className: classNames(classes.root, className) }, other),
        React.createElement(
          Target,
          null,
          ({ targetProps }) => React.createElement(
            RefHolder,
            {
              ref: node => {
                this.children = findDOMNode(node);
                targetProps.ref(this.children);
              }
            },
            React.cloneElement(children, childrenProps)
          )
        ),
        React.createElement(
          Popper,
          _extends({
            placement: placement,
            eventsEnabled: open,
            className: classNames(classes.popper, { [classes.popperClose]: !open }, PopperClassName),
            ref: node => {
              this.popper = node;
            }
          }, PopperOther),
          ({ popperProps, restProps }) => {
            const actualPlacement = popperProps['data-placement'] || placement;
            return React.createElement(
              'div',
              _extends({}, popperProps, restProps, {
                style: _extends({}, popperProps.style, {
                  top: popperProps.style.top || 0,
                  left: popperProps.style.left || 0
                }, restProps.style)
              }),
              React.createElement(
                'div',
                {
                  id: id,
                  role: 'tooltip',
                  'aria-hidden': !open,
                  className: classNames(classes.tooltip, { [classes.tooltipOpen]: open }, classes[`tooltipPlacement${capitalize(actualPlacement.split('-')[0])}`])
                },
                title
              )
            );
          }
        )
      )
    );
  }
}

Tooltip.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Tooltip reference element.
   */
  children: PropTypes.element.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Do not respond to focus events.
   */
  disableTriggerFocus: PropTypes.bool,
  /**
   * Do not respond to hover events.
   */
  disableTriggerHover: PropTypes.bool,
  /**
   * Do not respond to long press touch events.
   */
  disableTriggerTouch: PropTypes.bool,
  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This property won't impact the enter touch delay (`enterTouchDelay`).
   */
  enterDelay: PropTypes.number,
  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   */
  enterTouchDelay: PropTypes.number,
  /**
   * The relationship between the tooltip and the wrapper component is not clear from the DOM.
   * By providing this property, we can use aria-describedby to solve the accessibility issue.
   */
  id: PropTypes.string,
  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This property won't impact the leave touch delay (`leaveTouchDelay`).
   */
  leaveDelay: PropTypes.number,
  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   */
  leaveTouchDelay: PropTypes.number,
  /**
   * Callback fired when the tooltip requests to be closed.
   *
   * @param {object} event The event source of the callback
   */
  onClose: PropTypes.func,
  /**
   * Callback fired when the tooltip requests to be open.
   *
   * @param {object} event The event source of the callback
   */
  onOpen: PropTypes.func,
  /**
   * If `true`, the tooltip is shown.
   */
  open: PropTypes.bool,
  /**
   * Tooltip placement
   */
  placement: PropTypes.oneOf(['bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),
  /**
   * Properties applied to the `Popper` element.
   */
  PopperProps: PropTypes.object,
  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired,
  /**
   * Tooltip title. Zero-length titles string are never displayed.
   */
  title: PropTypes.node.isRequired
} : {};

Tooltip.defaultProps = {
  disableTriggerFocus: false,
  disableTriggerHover: false,
  disableTriggerTouch: false,
  enterDelay: 0,
  enterTouchDelay: 1000,
  leaveDelay: 0,
  leaveTouchDelay: 1500,
  placement: 'bottom'
};

export default withStyles(styles, { name: 'MuiTooltip', withTheme: true })(Tooltip);