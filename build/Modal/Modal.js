"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _getPrototypeOf = _interopRequireDefault(require("@babel/runtime/core-js/object/get-prototype-of"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _warning = _interopRequireDefault(require("warning"));

var _keycode = _interopRequireDefault(require("keycode"));

var _activeElement = _interopRequireDefault(require("dom-helpers/activeElement"));

var _contains = _interopRequireDefault(require("dom-helpers/query/contains"));

var _inDOM = _interopRequireDefault(require("dom-helpers/util/inDOM"));

var _ownerDocument = _interopRequireDefault(require("dom-helpers/ownerDocument"));

var _RootRef = _interopRequireDefault(require("../internal/RootRef"));

var _Portal = _interopRequireDefault(require("../Portal"));

var _helpers = require("../utils/helpers");

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _ModalManager = _interopRequireDefault(require("./ModalManager"));

var _Backdrop = _interopRequireDefault(require("./Backdrop"));

// @inheritedComponent Portal
function getContainer(container, defaultContainer) {
  container = typeof container === 'function' ? container() : container;
  return _reactDom.default.findDOMNode(container) || defaultContainer;
}

function getHasTransition(props) {
  return props.children ? props.children.props.hasOwnProperty('in') : false;
}

var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      width: '100%',
      height: '100%',
      position: 'fixed',
      zIndex: theme.zIndex.modal,
      top: 0,
      left: 0
    },
    hidden: {
      visibility: 'hidden'
    }
  };
};

exports.styles = styles;

var Modal =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Modal, _React$Component);
  (0, _createClass2.default)(Modal, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if (nextProps.open) {
        return {
          exited: false
        };
      } else if (!getHasTransition(nextProps)) {
        // Otherwise let handleExited take care of marking exited.
        return {
          exited: true
        };
      }

      return null;
    }
  }]);

  function Modal(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, Modal);
    _this = (0, _possibleConstructorReturn2.default)(this, (Modal.__proto__ || (0, _getPrototypeOf.default)(Modal)).call(this, props, context));
    Object.defineProperty((0, _assertThisInitialized2.default)(_this), "dialogElement", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: null
    });
    Object.defineProperty((0, _assertThisInitialized2.default)(_this), "mounted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: false
    });
    Object.defineProperty((0, _assertThisInitialized2.default)(_this), "mountNode", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: null
    });
    Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleRendered", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.autoFocus();

        if (_this.props.onRendered) {
          _this.props.onRendered();
        }
      }
    });
    Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleOpen", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var doc = (0, _ownerDocument.default)(_this.mountNode);
        var container = getContainer(_this.props.container, doc.body);

        _this.props.manager.add((0, _assertThisInitialized2.default)(_this), container);

        doc.addEventListener('keydown', _this.handleDocumentKeyDown);
        doc.addEventListener('focus', _this.enforceFocus, true);
      }
    });
    Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.props.manager.remove((0, _assertThisInitialized2.default)(_this));

        var doc = (0, _ownerDocument.default)(_this.mountNode);
        doc.removeEventListener('keydown', _this.handleDocumentKeyDown);
        doc.removeEventListener('focus', _this.enforceFocus);

        _this.restoreLastFocus();
      }
    });
    Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleExited", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          exited: true
        });

        _this.handleClose();
      }
    });
    Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleBackdropClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        if (event.target !== event.currentTarget) {
          return;
        }

        if (_this.props.onBackdropClick) {
          _this.props.onBackdropClick(event);
        }

        if (!_this.props.disableBackdropClick && _this.props.onClose) {
          _this.props.onClose(event, 'backdropClick');
        }
      }
    });
    Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleDocumentKeyDown", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        if (!_this.isTopModal() || (0, _keycode.default)(event) !== 'esc') {
          return;
        }

        if (_this.props.onEscapeKeyDown) {
          _this.props.onEscapeKeyDown(event);
        }

        if (!_this.props.disableEscapeKeyDown && _this.props.onClose) {
          _this.props.onClose(event, 'escapeKeyDown');
        }
      }
    });
    Object.defineProperty((0, _assertThisInitialized2.default)(_this), "checkForFocus", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_inDOM.default) {
          _this.lastFocus = (0, _activeElement.default)();
        }
      }
    });
    Object.defineProperty((0, _assertThisInitialized2.default)(_this), "enforceFocus", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this.props.disableEnforceFocus || !_this.mounted || !_this.isTopModal()) {
          return;
        }

        var currentActiveElement = (0, _activeElement.default)((0, _ownerDocument.default)(_this.mountNode));

        if (_this.dialogElement && !(0, _contains.default)(_this.dialogElement, currentActiveElement)) {
          _this.dialogElement.focus();
        }
      }
    });
    _this.state = {
      exited: !_this.props.open
    };
    return _this;
  }

  (0, _createClass2.default)(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true;

      if (this.props.open) {
        this.handleOpen();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.open && this.props.open) {
        this.checkForFocus();
      }

      if (prevProps.open && !this.props.open && !getHasTransition(this.props)) {
        // Otherwise handleExited will call this.
        this.handleClose();
      } else if (!prevProps.open && this.props.open) {
        this.handleOpen();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;

      if (this.props.open || getHasTransition(this.props) && !this.state.exited) {
        this.handleClose();
      }
    }
  }, {
    key: "autoFocus",
    value: function autoFocus() {
      if (this.props.disableAutoFocus) {
        return;
      }

      var currentActiveElement = (0, _activeElement.default)((0, _ownerDocument.default)(this.mountNode));

      if (this.dialogElement && !(0, _contains.default)(this.dialogElement, currentActiveElement)) {
        this.lastFocus = currentActiveElement;

        if (!this.dialogElement.hasAttribute('tabIndex')) {
          process.env.NODE_ENV !== "production" ? (0, _warning.default)(false, ['Material-UI: the modal content node does not accept focus.', 'For the benefit of assistive technologies, ' + 'the tabIndex of the node is being set to "-1".'].join('\n')) : void 0;
          this.dialogElement.setAttribute('tabIndex', -1);
        }

        this.dialogElement.focus();
      }
    }
  }, {
    key: "restoreLastFocus",
    value: function restoreLastFocus() {
      if (this.props.disableRestoreFocus) {
        return;
      }

      if (this.lastFocus) {
        // Not all elements in IE11 have a focus method.
        // Because IE11 market share is low, we accept the restore focus being broken
        // and we silent the issue.
        if (this.lastFocus.focus) {
          this.lastFocus.focus();
        }

        this.lastFocus = null;
      }
    }
  }, {
    key: "isTopModal",
    value: function isTopModal() {
      return this.props.manager.isTopModal(this);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          BackdropComponent = _props.BackdropComponent,
          BackdropProps = _props.BackdropProps,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          container = _props.container,
          disableAutoFocus = _props.disableAutoFocus,
          disableBackdropClick = _props.disableBackdropClick,
          disableEnforceFocus = _props.disableEnforceFocus,
          disableEscapeKeyDown = _props.disableEscapeKeyDown,
          disableRestoreFocus = _props.disableRestoreFocus,
          hideBackdrop = _props.hideBackdrop,
          keepMounted = _props.keepMounted,
          onBackdropClick = _props.onBackdropClick,
          onClose = _props.onClose,
          onEscapeKeyDown = _props.onEscapeKeyDown,
          onRendered = _props.onRendered,
          open = _props.open,
          manager = _props.manager,
          other = (0, _objectWithoutProperties2.default)(_props, ["BackdropComponent", "BackdropProps", "children", "classes", "className", "container", "disableAutoFocus", "disableBackdropClick", "disableEnforceFocus", "disableEscapeKeyDown", "disableRestoreFocus", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onEscapeKeyDown", "onRendered", "open", "manager"]);
      var exited = this.state.exited;
      var hasTransition = getHasTransition(this.props);
      var childProps = {};

      if (!keepMounted && !open && (!hasTransition || exited)) {
        return null;
      } // It's a Transition like component


      if (hasTransition) {
        childProps.onExited = (0, _helpers.createChainedFunction)(this.handleExited, children.props.onExited);
      }

      if (children.props.role === undefined) {
        childProps.role = children.props.role || 'document';
      }

      if (children.props.tabIndex === undefined) {
        childProps.tabIndex = children.props.tabIndex || '-1';
      }

      return _react.default.createElement(_Portal.default, {
        ref: function ref(node) {
          _this2.mountNode = node ? node.getMountNode() : node;
        },
        container: container,
        onRendered: this.handleRendered
      }, _react.default.createElement("div", (0, _extends2.default)({
        className: (0, _classnames.default)(classes.root, className, (0, _defineProperty2.default)({}, classes.hidden, exited))
      }, other), hideBackdrop ? null : _react.default.createElement(BackdropComponent, (0, _extends2.default)({
        open: open,
        onClick: this.handleBackdropClick
      }, BackdropProps)), _react.default.createElement(_RootRef.default, {
        rootRef: function rootRef(node) {
          _this2.dialogElement = node;
        }
      }, _react.default.cloneElement(children, childProps))));
    }
  }]);
  return Modal;
}(_react.default.Component);

Modal.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A backdrop component. Useful for custom backdrop rendering.
   */
  BackdropComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),

  /**
   * Properties applied to the `Backdrop` element.
   */
  BackdropProps: _propTypes.default.object,

  /**
   * A single child content element.
   */
  children: _propTypes.default.element,

  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * A node, component instance, or function that returns either.
   * The `container` will have the portal children appended to it.
   */
  container: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]),

  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   */
  disableAutoFocus: _propTypes.default.bool,

  /**
   * If `true`, clicking the backdrop will not fire any callback.
   */
  disableBackdropClick: _propTypes.default.bool,

  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   */
  disableEnforceFocus: _propTypes.default.bool,

  /**
   * If `true`, hitting escape will not fire any callback.
   */
  disableEscapeKeyDown: _propTypes.default.bool,

  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden.
   */
  disableRestoreFocus: _propTypes.default.bool,

  /**
   * If `true`, the backdrop is not rendered.
   */
  hideBackdrop: _propTypes.default.bool,

  /**
   * Always keep the children in the DOM.
   * This property can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   */
  keepMounted: _propTypes.default.bool,

  /**
   * A modal manager used to track and manage the state of open
   * Modals. Useful when customizing how modals interact within a container.
   */
  manager: _propTypes.default.object,

  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: _propTypes.default.func,

  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback
   * @param {string} reason Can be:`"escapeKeyDown"`, `"backdropClick"`
   */
  onClose: _propTypes.default.func,

  /**
   * Callback fired when the escape key is pressed,
   * `disableEscapeKeyDown` is false and the modal is in focus.
   */
  onEscapeKeyDown: _propTypes.default.func,

  /**
   * Callback fired once the children has been mounted into the `container`.
   * It signals that the `open={true}` property took effect.
   */
  onRendered: _propTypes.default.func,

  /**
   * If `true`, the modal is open.
   */
  open: _propTypes.default.bool.isRequired
} : {};
Modal.defaultProps = {
  disableAutoFocus: false,
  disableBackdropClick: false,
  disableEnforceFocus: false,
  disableEscapeKeyDown: false,
  disableRestoreFocus: false,
  hideBackdrop: false,
  keepMounted: false,
  // Modals don't open on the server so this won't conflict with concurrent requests.
  manager: new _ModalManager.default(),
  BackdropComponent: _Backdrop.default
};

var _default = (0, _withStyles.default)(styles, {
  flip: false,
  name: 'MuiModal'
})((0, _reactLifecyclesCompat.polyfill)(Modal));

exports.default = _default;