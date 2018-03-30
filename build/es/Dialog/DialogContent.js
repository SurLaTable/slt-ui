import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';

export const styles = theme => {
  const spacing = theme.spacing.unit * 3;
  return {
    root: {
      flex: '1 1 auto',
      overflowY: 'auto',
      padding: `0 ${spacing}px ${spacing}px ${spacing}px`,
      '&:first-child': {
        paddingTop: spacing
      }
    }
  };
};

function DialogContent(props) {
  const { classes, children, className } = props,
        other = _objectWithoutProperties(props, ['classes', 'children', 'className']);

  return React.createElement(
    'div',
    _extends({ className: classNames(classes.root, className) }, other),
    children
  );
}

DialogContent.propTypes = process.env.NODE_ENV !== "production" ? {
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
  className: PropTypes.string
} : {};

export default withStyles(styles, { name: 'MuiDialogContent' })(DialogContent);