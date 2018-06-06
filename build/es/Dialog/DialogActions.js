import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import { cloneChildrenWithClassName } from '../utils/reactHelpers';
import '../Button'; // So we don't have any override priority issue.

export const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: '0 0 auto',
    margin: `${theme.spacing.unit}px ${theme.spacing.unit / 2}px`
  },
  action: {
    margin: `0 ${theme.spacing.unit / 2}px`,
    minWidth: 64
  }
});

function DialogActions(props) {
  const {
    disableActionSpacing,
    children,
    classes,
    className
  } = props,
        other = _objectWithoutProperties(props, ["disableActionSpacing", "children", "classes", "className"]);

  return React.createElement("div", _extends({
    className: classNames(classes.root, className)
  }, other), disableActionSpacing ? children : cloneChildrenWithClassName(children, classes.action));
}

DialogActions.propTypes = process.env.NODE_ENV !== "production" ? {
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
   * If `true`, the dialog actions do not have additional margin.
   */
  disableActionSpacing: PropTypes.bool
} : {};
DialogActions.defaultProps = {
  disableActionSpacing: false
};
export default withStyles(styles, {
  name: 'MuiDialogActions'
})(DialogActions);