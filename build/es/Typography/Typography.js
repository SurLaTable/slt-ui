import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import { capitalize } from '../utils/helpers';

export const styles = theme => ({
  root: {
    display: 'block',
    margin: 0
  },
  display4: theme.typography.display4,
  display3: theme.typography.display3,
  display2: theme.typography.display2,
  display1: theme.typography.display1,
  headline: theme.typography.headline,
  title: theme.typography.title,
  subheading: theme.typography.subheading,
  body2: theme.typography.body2,
  body1: theme.typography.body1,
  caption: theme.typography.caption,
  button: theme.typography.button,
  alignLeft: {
    textAlign: 'left'
  },
  alignCenter: {
    textAlign: 'center'
  },
  alignRight: {
    textAlign: 'right'
  },
  alignJustify: {
    textAlign: 'justify'
  },
  noWrap: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  gutterBottom: {
    marginBottom: '0.35em'
  },
  paragraph: {
    marginBottom: theme.spacing.unit * 2
  },
  colorInherit: {
    color: 'inherit'
  },
  colorPrimary: {
    color: theme.palette.primary.main
  },
  colorSecondary: {
    color: theme.palette.secondary.main
  },
  colorTextSecondary: {
    color: theme.palette.text.secondary
  },
  colorError: {
    color: theme.palette.error.main
  }
});

function Typography(props) {
  const {
    align,
    classes,
    className: classNameProp,
    component: componentProp,
    color,
    gutterBottom,
    headlineMapping,
    noWrap,
    paragraph,
    variant
  } = props,
        other = _objectWithoutProperties(props, ['align', 'classes', 'className', 'component', 'color', 'gutterBottom', 'headlineMapping', 'noWrap', 'paragraph', 'variant']);

  const className = classNames(classes.root, classes[variant], {
    [classes[`color${capitalize(color)}`]]: color !== 'default',
    [classes.noWrap]: noWrap,
    [classes.gutterBottom]: gutterBottom,
    [classes.paragraph]: paragraph,
    [classes[`align${capitalize(align)}`]]: align !== 'inherit'
  }, classNameProp);

  const Component = componentProp || (paragraph ? 'p' : headlineMapping[variant]) || 'span';

  return React.createElement(Component, _extends({ className: className }, other));
}

Typography.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Set the text-align on the component.
   */
  align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
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
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['inherit', 'primary', 'textSecondary', 'secondary', 'error', 'default']),
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * By default, it maps the variant to a good default headline component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /**
   * If `true`, the text will have a bottom margin.
   */
  gutterBottom: PropTypes.bool,
  /**
   * We are empirically mapping the variant property to a range of different DOM element types.
   * For instance, h1 to h6. If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` property.
   */
  headlineMapping: PropTypes.object,
  /**
   * If `true`, the text will not wrap, but instead will truncate with an ellipsis.
   */
  noWrap: PropTypes.bool,
  /**
   * If `true`, the text will have a bottom margin.
   */
  paragraph: PropTypes.bool,
  /**
   * Applies the theme typography styles.
   */
  variant: PropTypes.oneOf(['display4', 'display3', 'display2', 'display1', 'headline', 'title', 'subheading', 'body2', 'body1', 'caption', 'button'])
} : {};

Typography.defaultProps = {
  align: 'inherit',
  color: 'default',
  gutterBottom: false,
  headlineMapping: {
    display4: 'h1',
    display3: 'h1',
    display2: 'h1',
    display1: 'h1',
    headline: 'h1',
    title: 'h2',
    subheading: 'h3',
    body2: 'aside',
    body1: 'p'
  },
  noWrap: false,
  paragraph: false,
  variant: 'body1'
};

export default withStyles(styles, { name: 'MuiTypography' })(Typography);