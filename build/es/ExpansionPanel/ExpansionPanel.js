import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
// @inheritedComponent Paper

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Collapse from '../transitions/Collapse';
import Paper from '../Paper';
import withStyles from '../styles/withStyles';
import { isMuiElement } from '../utils/reactHelpers';

export const styles = theme => {
  const transition = {
    duration: theme.transitions.duration.shortest
  };

  return {
    root: {
      position: 'relative',
      transition: theme.transitions.create(['margin'], transition),
      '&:before': {
        position: 'absolute',
        left: 0,
        top: -1,
        right: 0,
        height: 1,
        content: '""',
        opacity: 1,
        backgroundColor: theme.palette.divider,
        transition: theme.transitions.create(['opacity', 'background-color'], transition)
      },
      '&:first-child': {
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        '&:before': {
          display: 'none'
        }
      },
      '&:last-child': {
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2
      },
      '&$expanded + &': {
        '&:before': {
          display: 'none'
        }
      }
    },
    expanded: {
      margin: `${theme.spacing.unit * 2}px 0`,
      '&:first-child': {
        marginTop: 0
      },
      '&:last-child': {
        marginBottom: 0
      },
      '&:before': {
        opacity: 0
      }
    },
    disabled: {
      backgroundColor: theme.palette.action.disabledBackground
    }
  };
};

class ExpansionPanel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
    this.isControlled = null;

    this.handleChange = event => {
      const expanded = this.isControlled ? this.props.expanded : this.state.expanded;

      if (!this.isControlled) {
        this.setState({ expanded: !expanded });
      }

      if (this.props.onChange) {
        this.props.onChange(event, !expanded);
      }
    };

    this.isControlled = props.expanded != null;
    if (!this.isControlled) {
      // not controlled, use internal state
      this.state.expanded = props.defaultExpanded !== undefined ? props.defaultExpanded : false;
    }
  }

  render() {
    const _props = this.props,
          {
      children: childrenProp,
      classes,
      className: classNameProp,
      CollapseProps: CollapsePropsProp,
      defaultExpanded,
      disabled,
      expanded: expandedProp,
      onChange
    } = _props,
          other = _objectWithoutProperties(_props, ['children', 'classes', 'className', 'CollapseProps', 'defaultExpanded', 'disabled', 'expanded', 'onChange']);
    const expanded = this.isControlled ? expandedProp : this.state.expanded;

    const className = classNames(classes.root, {
      [classes.expanded]: expanded,
      [classes.disabled]: disabled
    }, classNameProp);

    let summary = null;

    const children = React.Children.map(childrenProp, child => {
      if (!React.isValidElement(child)) {
        return null;
      }

      if (isMuiElement(child, ['ExpansionPanelSummary'])) {
        summary = React.cloneElement(child, {
          disabled,
          expanded,
          onChange: this.handleChange
        });
        return null;
      }

      return child;
    });

    const CollapseProps = !expanded ? {
      'aria-hidden': 'true'
    } : null;

    return React.createElement(
      Paper,
      _extends({ className: className, elevation: 1, square: true }, other),
      summary,
      React.createElement(
        Collapse,
        _extends({ 'in': expanded, timeout: 'auto' }, CollapseProps, CollapsePropsProp),
        children
      )
    );
  }
}

ExpansionPanel.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The content of the expansion panel.
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
   * Properties applied to the `Collapse` element.
   */
  CollapseProps: PropTypes.object,
  /**
   * If `true`, expands the panel by default.
   */
  defaultExpanded: PropTypes.bool,
  /**
   * If `true`, the panel will be displayed in a disabled state.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, expands the panel, otherwise collapse it.
   * Setting this prop enables control over the panel.
   */
  expanded: PropTypes.bool,
  /**
   * Callback fired when the expand/collapse state is changed.
   *
   * @param {object} event The event source of the callback
   * @param {boolean} expanded The `expanded` state of the panel
   */
  onChange: PropTypes.func
} : {};

ExpansionPanel.defaultProps = {
  defaultExpanded: false,
  disabled: false
};

export default withStyles(styles, { name: 'MuiExpansionPanel' })(ExpansionPanel);