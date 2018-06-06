import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import { capitalize } from '../utils/helpers';
export const styles = theme => ({
  root: {
    userSelect: 'none',
    fontSize: 24,
    width: '1em',
    height: '1em',
    display: 'inline-block',
    fill: 'currentColor',
    flexShrink: 0,
    transition: theme.transitions.create('fill', {
      duration: theme.transitions.duration.shorter
    })
  },
  colorPrimary: {
    color: theme.palette.primary.main
  },
  colorSecondary: {
    color: theme.palette.secondary.main
  },
  colorAction: {
    color: theme.palette.action.active
  },
  colorError: {
    color: theme.palette.error.main
  },
  colorDisabled: {
    color: theme.palette.action.disabled
  }
});

function SvgIcon(props) {
  const {
    children,
    classes,
    className: classNameProp,
    color,
    nativeColor,
    titleAccess,
    viewBox
  } = props,
        other = _objectWithoutProperties(props, ["children", "classes", "className", "color", "nativeColor", "titleAccess", "viewBox"]);

  const className = classNames(classes.root, {
    [classes[`color${capitalize(color)}`]]: color !== 'inherit'
  }, classNameProp);
  return React.createElement("svg", _extends({
    className: className,
    focusable: "false",
    viewBox: viewBox,
    color: nativeColor,
    "aria-hidden": titleAccess ? 'false' : 'true'
  }, other), titleAccess ? React.createElement("title", null, titleAccess) : null, children);
}

SvgIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Node passed into the SVG element.
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
   * The color of the component. It supports those theme colors that make sense for this component.
   * You can use the `nativeColor` property to apply a color attribute to the SVG element.
   */
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'action', 'error', 'disabled']),

  /**
   * Applies a color attribute to the SVG element.
   */
  nativeColor: PropTypes.string,

  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: PropTypes.string,

  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   */
  viewBox: PropTypes.string
} : {};
SvgIcon.defaultProps = {
  color: 'inherit',
  viewBox: '0 0 24 24'
};
SvgIcon.muiName = 'SvgIcon';
export default withStyles(styles, {
  name: 'MuiSvgIcon'
})(SvgIcon);