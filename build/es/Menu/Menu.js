import _extends from "@babel/runtime/helpers/extends";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
// @inheritedComponent Popover
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import getScrollbarSize from 'dom-helpers/util/scrollbarSize';
import withStyles from '../styles/withStyles';
import Popover from '../Popover';
import MenuList from './MenuList';
const RTL_ORIGIN = {
  vertical: 'top',
  horizontal: 'right'
};
const LTR_ORIGIN = {
  vertical: 'top',
  horizontal: 'left'
};
export const styles = {
  paper: {
    // specZ: The maximum height of a simple menu should be one or more rows less than the view
    // height. This ensures a tappable area outside of the simple menu with which to dismiss
    // the menu.
    maxHeight: 'calc(100vh - 96px)',
    // Add iOS momentum scrolling.
    WebkitOverflowScrolling: 'touch'
  }
};

class Menu extends React.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), Object.defineProperty(this, "getContentAnchorEl", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: () => {
        if (!this.menuList || !this.menuList.selectedItem) {
          return ReactDOM.findDOMNode(this.menuList).firstChild;
        }

        return ReactDOM.findDOMNode(this.menuList.selectedItem);
      }
    }), Object.defineProperty(this, "menuList", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: undefined
    }), Object.defineProperty(this, "focus", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: () => {
        if (this.menuList && this.menuList.selectedItem) {
          ReactDOM.findDOMNode(this.menuList.selectedItem).focus();
          return;
        }

        const menuList = ReactDOM.findDOMNode(this.menuList);

        if (menuList && menuList.firstChild) {
          menuList.firstChild.focus();
        }
      }
    }), Object.defineProperty(this, "handleEnter", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: element => {
        const {
          theme
        } = this.props;
        const menuList = ReactDOM.findDOMNode(this.menuList); // Focus so the scroll computation of the Popover works as expected.

        this.focus(); // Let's ignore that piece of logic if users are already overriding the width
        // of the menu.

        if (menuList && element.clientHeight < menuList.clientHeight && !menuList.style.width) {
          const size = `${getScrollbarSize()}px`;
          menuList.style[theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight'] = size;
          menuList.style.width = `calc(100% + ${size})`;
        }

        if (this.props.onEnter) {
          this.props.onEnter(element);
        }
      }
    }), Object.defineProperty(this, "handleListKeyDown", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: (event, key) => {
        if (key === 'tab') {
          event.preventDefault();

          if (this.props.onClose) {
            this.props.onClose(event);
          }
        }
      }
    }), _temp;
  }

  componentDidMount() {
    if (this.props.open) {
      this.focus();
    }
  }

  render() {
    const _props = this.props,
          {
      children,
      classes,
      MenuListProps,
      onEnter,
      PaperProps = {},
      PopoverClasses,
      theme
    } = _props,
          other = _objectWithoutProperties(_props, ["children", "classes", "MenuListProps", "onEnter", "PaperProps", "PopoverClasses", "theme"]);

    return React.createElement(Popover, _extends({
      getContentAnchorEl: this.getContentAnchorEl,
      classes: PopoverClasses,
      onEnter: this.handleEnter,
      anchorOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
      transformOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
      PaperProps: _objectSpread({}, PaperProps, {
        classes: _objectSpread({}, PaperProps.classes, {
          root: classes.paper
        })
      })
    }, other), React.createElement(MenuList, _extends({
      role: "menu",
      onKeyDown: this.handleListKeyDown
    }, MenuListProps, {
      ref: node => {
        this.menuList = node;
      }
    }), children));
  }

}

Menu.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The DOM element used to set the position of the menu.
   */
  anchorEl: PropTypes.object,

  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: PropTypes.node,

  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,

  /**
   * Properties applied to the `MenuList` element.
   */
  MenuListProps: PropTypes.object,

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback
   */
  onClose: PropTypes.func,

  /**
   * Callback fired before the Menu enters.
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired when the Menu has entered.
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired when the Menu is entering.
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired before the Menu exits.
   */
  onExit: PropTypes.func,

  /**
   * Callback fired when the Menu has exited.
   */
  onExited: PropTypes.func,

  /**
   * Callback fired when the Menu is exiting.
   */
  onExiting: PropTypes.func,

  /**
   * If `true`, the menu is visible.
   */
  open: PropTypes.bool.isRequired,

  /**
   * @ignore
   */
  PaperProps: PropTypes.object,

  /**
   * `classes` property applied to the `Popover` element.
   */
  PopoverClasses: PropTypes.object,

  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired,

  /**
   * The length of the transition in `ms`, or 'auto'
   */
  transitionDuration: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    enter: PropTypes.number,
    exit: PropTypes.number
  }), PropTypes.oneOf(['auto'])])
} : {};
Menu.defaultProps = {
  transitionDuration: 'auto'
};
export default withStyles(styles, {
  name: 'MuiMenu',
  withTheme: true
})(Menu);