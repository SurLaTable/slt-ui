import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import Typography from '../Typography';
export const styles = theme => ({
  root: theme.mixins.gutters({
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }),
  avatar: {
    flex: '0 0 auto',
    marginRight: theme.spacing.unit * 2
  },
  action: {
    flex: '0 0 auto',
    alignSelf: 'flex-start',
    marginTop: theme.spacing.unit * -1,
    marginRight: theme.spacing.unit * -2
  },
  content: {
    flex: '1 1 auto'
  },
  title: {},
  subheader: {}
});

function CardHeader(props) {
  const {
    action,
    avatar,
    classes,
    className: classNameProp,
    component: Component,
    subheader,
    title
  } = props,
        other = _objectWithoutProperties(props, ["action", "avatar", "classes", "className", "component", "subheader", "title"]);

  return React.createElement(Component, _extends({
    className: classNames(classes.root, classNameProp)
  }, other), avatar && React.createElement("div", {
    className: classes.avatar
  }, avatar), React.createElement("div", {
    className: classes.content
  }, React.createElement(Typography, {
    variant: avatar ? 'body2' : 'headline',
    component: "span",
    className: classes.title
  }, title), subheader && React.createElement(Typography, {
    variant: avatar ? 'body2' : 'body1',
    component: "span",
    color: "textSecondary",
    className: classes.subheader
  }, subheader)), action && React.createElement("div", {
    className: classes.action
  }, action));
}

CardHeader.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The action to display in the card header.
   */
  action: PropTypes.node,

  /**
   * The Avatar for the Card Header.
   */
  avatar: PropTypes.node,

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
   * The content of the component.
   */
  subheader: PropTypes.node,

  /**
   * The content of the Card Title.
   */
  title: PropTypes.node
} : {};
CardHeader.defaultProps = {
  component: 'div'
};
export default withStyles(styles, {
  name: 'MuiCardHeader'
})(CardHeader);