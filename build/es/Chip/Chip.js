import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import keycode from 'keycode';
import CancelIcon from '../internal/svg-icons/Cancel';
import withStyles from '../styles/withStyles';
import { emphasize, fade } from '../styles/colorManipulator';
import '../Avatar/Avatar'; // So we don't have any override priority issue.

export const styles = theme => {
  const height = 32;
  const backgroundColor = theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700];
  const deleteIconColor = fade(theme.palette.text.primary, 0.26);
  return {
    root: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(13),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height,
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor,
      borderRadius: height / 2,
      whiteSpace: 'nowrap',
      transition: theme.transitions.create(['background-color', 'box-shadow']),
      // label will inherit this from root, then `clickable` class overrides this for both
      cursor: 'default',
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 'none',
      border: 'none',
      // Remove `button` border
      padding: 0 // Remove `button` padding

    },
    clickable: {
      // Remove grey highlight
      WebkitTapHighlightColor: 'transparent',
      cursor: 'pointer',
      '&:hover, &:focus': {
        backgroundColor: emphasize(backgroundColor, 0.08)
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12)
      }
    },
    deletable: {
      '&:focus': {
        backgroundColor: emphasize(backgroundColor, 0.08)
      }
    },
    avatar: {
      marginRight: -4,
      width: height,
      height,
      color: theme.palette.type === 'light' ? theme.palette.grey[700] : theme.palette.grey[300],
      fontSize: theme.typography.pxToRem(16)
    },
    avatarChildren: {
      width: 19,
      height: 19
    },
    label: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 12,
      paddingRight: 12,
      userSelect: 'none',
      whiteSpace: 'nowrap',
      cursor: 'inherit'
    },
    deleteIcon: {
      // Remove grey highlight
      WebkitTapHighlightColor: 'transparent',
      color: deleteIconColor,
      cursor: 'pointer',
      height: 'auto',
      margin: '0 4px 0 -8px',
      '&:hover': {
        color: fade(deleteIconColor, 0.4)
      }
    }
  };
};
/**
 * Chips represent complex entities in small blocks, such as a contact.
 */

class Chip extends React.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), Object.defineProperty(this, "chipRef", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: null
    }), Object.defineProperty(this, "handleDeleteIconClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: event => {
        // Stop the event from bubbling up to the `Chip`
        event.stopPropagation();
        const {
          onDelete
        } = this.props;

        if (onDelete) {
          onDelete(event);
        }
      }
    }), Object.defineProperty(this, "handleKeyDown", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: event => {
        // Ignore events from children of `Chip`.
        if (event.currentTarget !== event.target) {
          return;
        }

        const {
          onClick,
          onDelete,
          onKeyDown
        } = this.props;
        const key = keycode(event);

        if (onClick && (key === 'space' || key === 'enter')) {
          event.preventDefault();
          onClick(event);
        } else if (onDelete && key === 'backspace') {
          event.preventDefault();
          onDelete(event);
        } else if (key === 'esc') {
          event.preventDefault();

          if (this.chipRef) {
            this.chipRef.blur();
          }
        }

        if (onKeyDown) {
          onKeyDown(event);
        }
      }
    }), _temp;
  }

  render() {
    const _props = this.props,
          {
      avatar: avatarProp,
      classes,
      className: classNameProp,
      component: Component,
      deleteIcon: deleteIconProp,
      label,
      onClick,
      onDelete,
      onKeyDown,
      tabIndex: tabIndexProp
    } = _props,
          other = _objectWithoutProperties(_props, ["avatar", "classes", "className", "component", "deleteIcon", "label", "onClick", "onDelete", "onKeyDown", "tabIndex"]);

    const className = classNames(classes.root, {
      [classes.clickable]: onClick
    }, {
      [classes.deletable]: onDelete
    }, classNameProp);
    let deleteIcon = null;

    if (onDelete) {
      deleteIcon = deleteIconProp && React.isValidElement(deleteIconProp) ? React.cloneElement(deleteIconProp, {
        className: classNames(deleteIconProp.props.className, classes.deleteIcon),
        onClick: this.handleDeleteIconClick
      }) : React.createElement(CancelIcon, {
        className: classes.deleteIcon,
        onClick: this.handleDeleteIconClick
      });
    }

    let avatar = null;

    if (avatarProp && React.isValidElement(avatarProp)) {
      avatar = React.cloneElement(avatarProp, {
        className: classNames(classes.avatar, avatarProp.props.className),
        childrenClassName: classNames(classes.avatarChildren, avatarProp.props.childrenClassName)
      });
    }

    let tabIndex = tabIndexProp;

    if (!tabIndex) {
      tabIndex = onClick || onDelete ? 0 : -1;
    }

    return React.createElement(Component, _extends({
      role: "button",
      className: className,
      tabIndex: tabIndex,
      onClick: onClick,
      onKeyDown: this.handleKeyDown,
      ref: node => {
        this.chipRef = node;
      }
    }, other), avatar, React.createElement("span", {
      className: classes.label
    }, label), deleteIcon);
  }

}

Chip.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Avatar element.
   */
  avatar: PropTypes.element,

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
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: PropTypes.element,

  /**
   * The content of the label.
   */
  label: PropTypes.node,

  /**
   * @ignore
   */
  onClick: PropTypes.func,

  /**
   * Callback function fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: PropTypes.func,

  /**
   * @ignore
   */
  onKeyDown: PropTypes.func,

  /**
   * @ignore
   */
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
} : {};
Chip.defaultProps = {
  component: 'div'
};
export default withStyles(styles, {
  name: 'MuiChip'
})(Chip);