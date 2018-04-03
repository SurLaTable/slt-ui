import _Object$keys from 'babel-runtime/core-js/object/keys';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _extends from 'babel-runtime/helpers/extends';
// @inheritedComponent ButtonBase

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import ButtonBase from '../ButtonBase';
import { capitalize } from '../utils/helpers';

export const styles = theme => ({
  root: _extends({}, theme.typography.button, {
    maxWidth: 264,
    position: 'relative',
    minWidth: 72,
    padding: 0,
    height: 48,
    flex: 'none',
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {
      minWidth: 160
    }
  }),
  labelIcon: {
    height: 72
  },
  textColorInherit: {
    color: 'inherit',
    opacity: 0.7
  },
  textColorPrimary: {
    color: theme.palette.text.secondary
  },
  textColorPrimarySelected: {
    color: theme.palette.primary.main
  },
  textColorPrimaryDisabled: {
    color: theme.palette.text.disabled
  },
  textColorSecondary: {
    color: theme.palette.text.secondary
  },
  textColorSecondarySelected: {
    color: theme.palette.secondary.main
  },
  textColorSecondaryDisabled: {
    color: theme.palette.text.disabled
  },
  textColorInheritSelected: {
    opacity: 1
  },
  textColorInheritDisabled: {
    opacity: 0.4
  },
  fullWidth: {
    flexGrow: 1
  },
  wrapper: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'column'
  },
  labelContainer: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 12,
    paddingRight: 12,
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3
    }
  },
  label: {
    fontSize: theme.typography.pxToRem(14),
    whiteSpace: 'normal',
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.pxToRem(13)
    }
  },
  labelWrapped: {
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.pxToRem(12)
    }
  }
});

class Tab extends React.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      wrappedText: false
    }, this.handleChange = event => {
      const { onChange, value, onClick } = this.props;

      if (onChange) {
        onChange(event, value);
      }

      if (onClick) {
        onClick(event);
      }
    }, this.label = undefined, this.checkTextWrap = () => {
      if (this.label) {
        const wrappedText = this.label.getClientRects().length > 1;
        if (this.state.wrappedText !== wrappedText) {
          this.setState({ wrappedText });
        }
      }
    }, _temp;
  }

  componentDidMount() {
    this.checkTextWrap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.wrappedText === prevState.wrappedText) {
      /**
       * At certain text and tab lengths, a larger font size may wrap to two lines while the smaller
       * font size still only requires one line.  This check will prevent an infinite render loop
       * fron occurring in that scenario.
       */
      this.checkTextWrap();
    }
  }

  render() {
    const _props = this.props,
          {
      classes,
      className: classNameProp,
      disabled,
      fullWidth,
      icon,
      indicator,
      label: labelProp,
      onChange,
      selected,
      style: styleProp,
      textColor,
      value
    } = _props,
          other = _objectWithoutProperties(_props, ['classes', 'className', 'disabled', 'fullWidth', 'icon', 'indicator', 'label', 'onChange', 'selected', 'style', 'textColor', 'value']);

    let label;

    if (labelProp !== undefined) {
      label = React.createElement(
        'span',
        { className: classes.labelContainer },
        React.createElement(
          'span',
          {
            className: classNames(classes.label, {
              [classes.labelWrapped]: this.state.wrappedText
            }),
            ref: node => {
              this.label = node;
            }
          },
          labelProp
        )
      );
    }

    const className = classNames(classes.root, classes[`textColor${capitalize(textColor)}`], {
      [classes[`textColor${capitalize(textColor)}Disabled`]]: disabled,
      [classes[`textColor${capitalize(textColor)}Selected`]]: selected,
      [classes.labelIcon]: icon && label,
      [classes.fullWidth]: fullWidth
    }, classNameProp);

    let style = {};

    if (textColor !== 'secondary' && textColor !== 'inherit') {
      style.color = textColor;
    }

    style = _Object$keys(style).length > 0 ? _extends({}, style, styleProp) : styleProp;

    return React.createElement(
      ButtonBase,
      _extends({
        focusRipple: true,
        className: className,
        style: style,
        role: 'tab',
        'aria-selected': selected,
        disabled: disabled
      }, other, {
        onClick: this.handleChange
      }),
      React.createElement(
        'span',
        { className: classes.wrapper },
        icon,
        label
      ),
      indicator
    );
  }
}

Tab.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true`, the tab will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * @ignore
   */
  fullWidth: PropTypes.bool,
  /**
   * The icon element.
   */
  icon: PropTypes.node,
  /**
   * @ignore
   * For server side rendering consideration, we let the selected tab
   * render the indicator.
   */
  indicator: PropTypes.node,
  /**
   * The label element.
   */
  label: PropTypes.node,
  /**
   * @ignore
   */
  onChange: PropTypes.func,
  /**
   * @ignore
   */
  onClick: PropTypes.func,
  /**
   * @ignore
   */
  selected: PropTypes.bool,
  /**
   * @ignore
   */
  style: PropTypes.object,
  /**
   * @ignore
   */
  textColor: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf(['secondary', 'primary', 'inherit'])]),
  /**
   * You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value: PropTypes.any
} : {};

Tab.defaultProps = {
  disabled: false,
  textColor: 'inherit'
};

export default withStyles(styles, { name: 'MuiTab' })(Tab);