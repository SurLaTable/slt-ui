import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';

export const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  row: {
    flexDirection: 'row'
  }
};

/**
 * `FormGroup` wraps controls such as `Checkbox` and `Switch`.
 * It provides compact row layout.
 * For the `Radio`, you should be using the `RadioGroup` component instead of this one.
 */
function FormGroup(props) {
  const { classes, className, children, row } = props,
        other = _objectWithoutProperties(props, ['classes', 'className', 'children', 'row']);

  return React.createElement(
    'div',
    _extends({
      className: classNames(classes.root, {
        [classes.row]: row
      }, className)
    }, other),
    children
  );
}

FormGroup.propTypes = process.env.NODE_ENV !== "production" ? {
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
   * Display group of elements in a compact row.
   */
  row: PropTypes.bool
} : {};

FormGroup.defaultProps = {
  row: false
};

export default withStyles(styles, { name: 'MuiFormGroup' })(FormGroup);