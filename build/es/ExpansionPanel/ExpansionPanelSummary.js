import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
// @inheritedComponent ButtonBase

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ButtonBase from '../ButtonBase';
import IconButton from '../IconButton';
import withStyles from '../styles/withStyles';

export const styles = theme => {
  const transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    root: {
      display: 'flex',
      minHeight: theme.spacing.unit * 6,
      transition: theme.transitions.create(['min-height', 'background-color'], transition),
      padding: `0 ${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 3}px`,
      '&:hover:not($disabled)': {
        cursor: 'pointer'
      }
    },
    expanded: {
      minHeight: 64
    },
    focused: {
      backgroundColor: theme.palette.grey[300]
    },
    disabled: {
      opacity: 0.38
    },
    content: {
      display: 'flex',
      flexGrow: 1,
      transition: theme.transitions.create(['margin'], transition),
      margin: '12px 0',
      '& > :last-child': {
        paddingRight: theme.spacing.unit * 4
      }
    },
    contentExpanded: {
      margin: '20px 0'
    },
    expandIcon: {
      position: 'absolute',
      top: '50%',
      right: theme.spacing.unit,
      transform: 'translateY(-50%) rotate(0deg)',
      transition: theme.transitions.create('transform', transition)
    },
    expandIconExpanded: {
      transform: 'translateY(-50%) rotate(180deg)'
    }
  };
};

class ExpansionPanelSummary extends React.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      focused: false
    }, this.handleFocus = () => {
      this.setState({
        focused: true
      });
    }, this.handleBlur = () => {
      this.setState({
        focused: false
      });
    }, this.handleChange = event => {
      const { onChange, onClick } = this.props;
      if (onChange) {
        onChange(event);
      }
      if (onClick) {
        onClick(event);
      }
    }, _temp;
  }

  render() {
    const _props = this.props,
          {
      children,
      classes,
      className,
      disabled,
      expanded,
      expandIcon,
      onChange
    } = _props,
          other = _objectWithoutProperties(_props, ['children', 'classes', 'className', 'disabled', 'expanded', 'expandIcon', 'onChange']);
    const { focused } = this.state;

    return React.createElement(
      ButtonBase,
      _extends({
        focusRipple: false,
        disableRipple: true,
        disabled: disabled,
        component: 'div',
        'aria-expanded': expanded,
        className: classNames(classes.root, {
          [classes.disabled]: disabled,
          [classes.expanded]: expanded,
          [classes.focused]: focused
        }, className)
      }, other, {
        onKeyboardFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onClick: this.handleChange
      }),
      React.createElement(
        'div',
        { className: classNames(classes.content, { [classes.contentExpanded]: expanded }) },
        children
      ),
      expandIcon && React.createElement(
        IconButton,
        {
          disabled: disabled,
          className: classNames(classes.expandIcon, {
            [classes.expandIconExpanded]: expanded
          }),
          component: 'div',
          tabIndex: -1,
          'aria-hidden': 'true'
        },
        expandIcon
      )
    );
  }
}

ExpansionPanelSummary.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The content of the expansion panel summary.
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
   * @ignore
   * If `true`, the summary will be displayed in a disabled state.
   */
  disabled: PropTypes.bool,
  /**
   * @ignore
   * If `true`, expands the summary, otherwise collapse it.
   */
  expanded: PropTypes.bool,
  /**
   * The icon to display as the expand indicator.
   */
  expandIcon: PropTypes.node,
  /**
   * @ignore
   */
  onChange: PropTypes.func,
  /**
   * @ignore
   */
  onClick: PropTypes.func
} : {};

ExpansionPanelSummary.defaultProps = {
  disabled: false
};

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

export default withStyles(styles, { name: 'MuiExpansionPanelSummary' })(ExpansionPanelSummary);