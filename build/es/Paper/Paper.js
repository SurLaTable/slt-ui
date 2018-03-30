import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _extends from 'babel-runtime/helpers/extends';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import warning from 'warning';
import withStyles from '../styles/withStyles';

export const styles = theme => {
  const elevations = {};
  theme.shadows.forEach((shadow, index) => {
    elevations[`elevation${index}`] = {
      boxShadow: shadow
    };
  });

  return _extends({
    root: {
      backgroundColor: theme.palette.background.paper
    },
    rounded: {
      borderRadius: 2
    }
  }, elevations);
};

function Paper(props) {
  const {
    classes,
    className: classNameProp,
    component: Component,
    square,
    elevation
  } = props,
        other = _objectWithoutProperties(props, ['classes', 'className', 'component', 'square', 'elevation']);

  process.env.NODE_ENV !== "production" ? warning(elevation >= 0 && elevation < 25, `Material-UI: this elevation \`${elevation}\` is not implemented.`) : void 0;

  const className = classNames(classes.root, classes[`elevation${elevation}`], {
    [classes.rounded]: !square
  }, classNameProp);

  return React.createElement(Component, _extends({ className: className }, other));
}

Paper.propTypes = process.env.NODE_ENV !== "production" ? {
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
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It's accepting values between 0 and 24 inclusive.
   */
  elevation: PropTypes.number,
  /**
   * If `true`, rounded corners are disabled.
   */
  square: PropTypes.bool
} : {};

Paper.defaultProps = {
  component: 'div',
  elevation: 2,
  square: false
};

export default withStyles(styles, { name: 'MuiPaper' })(Paper);