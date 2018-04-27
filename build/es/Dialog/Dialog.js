import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
// @inheritedComponent Modal

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import { capitalize } from '../utils/helpers';
import Modal from '../Modal';
import Fade from '../transitions/Fade';
import { duration } from '../styles/transitions';
import Paper from '../Paper';

export const styles = theme => ({
  root: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  paper: {
    display: 'flex',
    margin: theme.spacing.unit * 4,
    flexDirection: 'column',
    flex: '0 1 auto',
    position: 'relative',
    maxHeight: '90vh',
    overflowY: 'auto', // Fix IE11 issue, to remove at some point.
    '&:focus': {
      outline: 'none'
    }
  },
  paperWidthXs: {
    maxWidth: Math.max(theme.breakpoints.values.xs, 360)
  },
  paperWidthSm: {
    maxWidth: theme.breakpoints.values.sm
  },
  paperWidthMd: {
    maxWidth: theme.breakpoints.values.md
  },
  paperFullWidth: {
    width: '100%'
  },
  paperFullScreen: {
    margin: 0,
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    maxHeight: '100%',
    borderRadius: 0
  }
});

/**
 * Dialogs are overlaid modal paper based components with a backdrop.
 */
function Dialog(props) {
  const {
    BackdropProps,
    children,
    classes,
    className,
    disableBackdropClick,
    disableEscapeKeyDown,
    fullScreen,
    fullWidth,
    maxWidth,
    onBackdropClick,
    onClose,
    onEnter,
    onEntered,
    onEntering,
    onEscapeKeyDown,
    onExit,
    onExited,
    onExiting,
    open,
    PaperProps,
    transition: TransitionProp,
    transitionDuration
  } = props,
        other = _objectWithoutProperties(props, ['BackdropProps', 'children', 'classes', 'className', 'disableBackdropClick', 'disableEscapeKeyDown', 'fullScreen', 'fullWidth', 'maxWidth', 'onBackdropClick', 'onClose', 'onEnter', 'onEntered', 'onEntering', 'onEscapeKeyDown', 'onExit', 'onExited', 'onExiting', 'open', 'PaperProps', 'transition', 'transitionDuration']);

  return React.createElement(
    Modal,
    _extends({
      className: classNames(classes.root, className),
      BackdropProps: _extends({
        transitionDuration
      }, BackdropProps),
      disableBackdropClick: disableBackdropClick,
      disableEscapeKeyDown: disableEscapeKeyDown,
      onBackdropClick: onBackdropClick,
      onEscapeKeyDown: onEscapeKeyDown,
      onClose: onClose,
      open: open,
      role: 'dialog'
    }, other),
    React.createElement(
      TransitionProp,
      {
        appear: true,
        'in': open,
        timeout: transitionDuration,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered,
        onExit: onExit,
        onExiting: onExiting,
        onExited: onExited
      },
      React.createElement(
        Paper,
        _extends({
          elevation: 24,
          className: classNames(classes.paper, {
            [classes[`paperWidth${maxWidth ? capitalize(maxWidth) : ''}`]]: maxWidth,
            [classes.paperFullScreen]: fullScreen,
            [classes.paperFullWidth]: fullWidth
          })
        }, PaperProps),
        children
      )
    )
  );
}

Dialog.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * @ignore
   */
  BackdropProps: PropTypes.object,
  /**
   * Dialog children, usually the included sub-components.
   */
  children: PropTypes.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true`, clicking the backdrop will not fire the `onClose` callback.
   */
  disableBackdropClick: PropTypes.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   */
  disableEscapeKeyDown: PropTypes.bool,
  /**
   * If `true`, the dialog will be full-screen
   */
  fullScreen: PropTypes.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   */
  fullWidth: PropTypes.bool,
  /**
   * Determine the max width of the dialog.
   * The dialog width grows with the size of the screen, this property is useful
   * on the desktop where you might need some coherent different width size across your
   * application. Set to `false` to disable `maxWidth`.
   */
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', false]),
  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: PropTypes.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback
   */
  onClose: PropTypes.func,
  /**
   * Callback fired before the dialog enters.
   */
  onEnter: PropTypes.func,
  /**
   * Callback fired when the dialog has entered.
   */
  onEntered: PropTypes.func,
  /**
   * Callback fired when the dialog is entering.
   */
  onEntering: PropTypes.func,
  /**
   * Callback fired when the escape key is pressed,
   * `disableKeyboard` is false and the modal is in focus.
   */
  onEscapeKeyDown: PropTypes.func,
  /**
   * Callback fired before the dialog exits.
   */
  onExit: PropTypes.func,
  /**
   * Callback fired when the dialog has exited.
   */
  onExited: PropTypes.func,
  /**
   * Callback fired when the dialog is exiting.
   */
  onExiting: PropTypes.func,
  /**
   * If `true`, the Dialog is open.
   */
  open: PropTypes.bool.isRequired,
  /**
   * Properties applied to the `Paper` element.
   */
  PaperProps: PropTypes.object,
  /**
   * Transition component.
   */
  transition: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({ enter: PropTypes.number, exit: PropTypes.number })])
} : {};

Dialog.defaultProps = {
  disableBackdropClick: false,
  disableEscapeKeyDown: false,
  fullScreen: false,
  fullWidth: false,
  maxWidth: 'sm',
  transition: Fade,
  transitionDuration: { enter: duration.enteringScreen, exit: duration.leavingScreen }
};

export default withStyles(styles, { name: 'MuiDialog' })(Dialog);