'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _activeElement = require('dom-helpers/activeElement');

var _activeElement2 = _interopRequireDefault(_activeElement);

var _contains = require('dom-helpers/query/contains');

var _contains2 = _interopRequireDefault(_contains);

var _inDOM = require('dom-helpers/util/inDOM');

var _inDOM2 = _interopRequireDefault(_inDOM);

var _ownerDocument = require('dom-helpers/ownerDocument');

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

var _RefHolder = require('../internal/RefHolder');

var _RefHolder2 = _interopRequireDefault(_RefHolder);

var _Portal = require('../Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _addEventListener = require('../utils/addEventListener');

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _helpers = require('../utils/helpers');

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _ModalManager = require('./ModalManager');

var _ModalManager2 = _interopRequireDefault(_ModalManager);

var _Backdrop = require('./Backdrop');

var _Backdrop2 = _interopRequireDefault(_Backdrop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getContainer(container, defaultContainer) {
  container = typeof container === 'function' ? container() : container;
  return _reactDom2.default.findDOMNode(container) || defaultContainer;
} // @inheritedComponent Portal

function getHasTransition(props) {
  return props.children ? props.children.props.hasOwnProperty('in') : false;
}

var styles = exports.styles = function styles(theme) {
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

var Modal = function (_React$Component) {
  (0, _inherits3.default)(Modal, _React$Component);

  function Modal(props, context) {
    (0, _classCallCheck3.default)(this, Modal);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).call(this, props, context));

    _this.dialog = null;
    _this.mounted = false;
    _this.mountNode = null;

    _this.handleRendered = function () {
      _this.autoFocus();

      if (_this.props.onRendered) {
        _this.props.onRendered();
      }
    };

    _this.handleOpen = function () {
      var doc = (0, _ownerDocument2.default)(_this.mountNode);
      var container = getContainer(_this.props.container, doc.body);

      _this.props.manager.add(_this, container);
      _this.onDocumentKeydownListener = (0, _addEventListener2.default)(doc, 'keydown', _this.handleDocumentKeyDown);
      _this.onFocusinListener = (0, _addEventListener2.default)(doc, 'focus', _this.enforceFocus, true);
    };

    _this.handleClose = function () {
      _this.props.manager.remove(_this);
      _this.onDocumentKeydownListener.remove();
      _this.onFocusinListener.remove();
      _this.restoreLastFocus();
    };

    _this.handleExited = function () {
      _this.setState({ exited: true });
      _this.handleClose();
    };

    _this.handleBackdropClick = function (event) {
      if (event.target !== event.currentTarget) {
        return;
      }

      if (_this.props.onBackdropClick) {
        _this.props.onBackdropClick(event);
      }

      if (!_this.props.disableBackdropClick && _this.props.onClose) {
        _this.props.onClose(event, 'backdropClick');
      }
    };

    _this.handleDocumentKeyDown = function (event) {
      if (!_this.isTopModal() || (0, _keycode2.default)(event) !== 'esc') {
        return;
      }

      if (_this.props.onEscapeKeyDown) {
        _this.props.onEscapeKeyDown(event);
      }

      if (!_this.props.disableEscapeKeyDown && _this.props.onClose) {
        _this.props.onClose(event, 'escapeKeyDown');
      }
    };

    _this.checkForFocus = function () {
      if (_inDOM2.default) {
        _this.lastFocus = (0, _activeElement2.default)();
      }
    };

    _this.enforceFocus = function () {
      if (_this.props.disableEnforceFocus || !_this.mounted || !_this.isTopModal()) {
        return;
      }

      var dialogElement = _this.getDialogElement();
      var currentActiveElement = (0, _activeElement2.default)((0, _ownerDocument2.default)(_this.mountNode));

      if (dialogElement && !(0, _contains2.default)(dialogElement, currentActiveElement)) {
        dialogElement.focus();
      }
    };

    _this.state = {
      exited: !_this.props.open
    };
    return _this;
  }

  (0, _createClass3.default)(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.mounted = true;
      if (this.props.open) {
        this.handleOpen();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.open) {
        this.setState({ exited: false });
      } else if (!getHasTransition(nextProps)) {
        // Otherwise let handleExited take care of marking exited.
        this.setState({ exited: true });
      }
    }
  }, {
    key: 'componentDidUpdate',
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
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.mounted = false;

      if (this.props.open || getHasTransition(this.props) && !this.state.exited) {
        this.handleClose();
      }
    }
  }, {
    key: 'getDialogElement',
    value: function getDialogElement() {
      return _reactDom2.default.findDOMNode(this.dialog);
    }
  }, {
    key: 'autoFocus',
    value: function autoFocus() {
      if (this.props.disableAutoFocus) {
        return;
      }

      var dialogElement = this.getDialogElement();
      var currentActiveElement = (0, _activeElement2.default)((0, _ownerDocument2.default)(this.mountNode));

      if (dialogElement && !(0, _contains2.default)(dialogElement, currentActiveElement)) {
        this.lastFocus = currentActiveElement;

        if (!dialogElement.hasAttribute('tabIndex')) {
          process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, ['Material-UI: the modal content node does not accept focus.', 'For the benefit of assistive technologies, ' + 'the tabIndex of the node is being set to "-1".'].join('\n')) : void 0;
          dialogElement.setAttribute('tabIndex', -1);
        }

        dialogElement.focus();
      }
    }
  }, {
    key: 'restoreLastFocus',
    value: function restoreLastFocus() {
      if (this.props.disableRestoreFocus) {
        return;
      }

      if (this.lastFocus) {
        this.lastFocus.focus();
        this.lastFocus = null;
      }
    }
  }, {
    key: 'isTopModal',
    value: function isTopModal() {
      return this.props.manager.isTopModal(this);
    }
  }, {
    key: 'render',
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
          other = (0, _objectWithoutProperties3.default)(_props, ['BackdropComponent', 'BackdropProps', 'children', 'classes', 'className', 'container', 'disableAutoFocus', 'disableBackdropClick', 'disableEnforceFocus', 'disableEscapeKeyDown', 'disableRestoreFocus', 'hideBackdrop', 'keepMounted', 'onBackdropClick', 'onClose', 'onEscapeKeyDown', 'onRendered', 'open', 'manager']);
      var exited = this.state.exited;

      var hasTransition = getHasTransition(this.props);
      var childProps = {};

      if (!keepMounted && !open && (!hasTransition || exited)) {
        return null;
      }

      // It's a Transition like component
      if (hasTransition) {
        childProps.onExited = (0, _helpers.createChainedFunction)(this.handleExited, children.props.onExited);
      }

      if (children.props.role === undefined) {
        childProps.role = children.props.role || 'document';
      }

      if (children.props.tabIndex === undefined) {
        childProps.tabIndex = children.props.tabIndex || '-1';
      }

      return _react2.default.createElement(
        _Portal2.default,
        {
          ref: function ref(node) {
            _this2.mountNode = node ? node.getMountNode() : node;
          },
          container: container,
          onRendered: this.handleRendered
        },
        _react2.default.createElement(
          'div',
          (0, _extends3.default)({
            className: (0, _classnames2.default)(classes.root, className, (0, _defineProperty3.default)({}, classes.hidden, exited))
          }, other),
          hideBackdrop ? null : _react2.default.createElement(BackdropComponent, (0, _extends3.default)({ open: open, onClick: this.handleBackdropClick }, BackdropProps)),
          _react2.default.createElement(
            _RefHolder2.default,
            {
              ref: function ref(node) {
                _this2.dialog = node;
              }
            },
            _react2.default.cloneElement(children, childProps)
          )
        )
      );
    }
  }]);
  return Modal;
}(_react2.default.Component);

Modal.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A backdrop component. Useful for custom backdrop rendering.
   */
  BackdropComponent: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * Properties applied to the `Backdrop` element.
   */
  BackdropProps: _propTypes2.default.object,
  /**
   * A single child content element.
   */
  children: _propTypes2.default.element,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * A node, component instance, or function that returns either.
   * The `container` will have the portal children appended to it.
   */
  container: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   */
  disableAutoFocus: _propTypes2.default.bool,
  /**
   * If `true`, clicking the backdrop will not fire any callback.
   */
  disableBackdropClick: _propTypes2.default.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   */
  disableEnforceFocus: _propTypes2.default.bool,
  /**
   * If `true`, hitting escape will not fire any callback.
   */
  disableEscapeKeyDown: _propTypes2.default.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden.
   */
  disableRestoreFocus: _propTypes2.default.bool,
  /**
   * If `true`, the backdrop is not rendered.
   */
  hideBackdrop: _propTypes2.default.bool,
  /**
   * Always keep the children in the DOM.
   * This property can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   */
  keepMounted: _propTypes2.default.bool,
  /**
   * A modal manager used to track and manage the state of open
   * Modals. Useful when customizing how modals interact within a container.
   */
  manager: _propTypes2.default.object,
  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: _propTypes2.default.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback
   * @param {string} reason Can be:`"escapeKeyDown"`, `"backdropClick"`
   */
  onClose: _propTypes2.default.func,
  /**
   * Callback fired when the escape key is pressed,
   * `disableEscapeKeyDown` is false and the modal is in focus.
   */
  onEscapeKeyDown: _propTypes2.default.func,
  /**
   * Callback fired once the children has been mounted into the `container`.
   * It signals that the `open={true}` property took effect.
   */
  onRendered: _propTypes2.default.func,
  /**
   * If `true`, the modal is open.
   */
  open: _propTypes2.default.bool.isRequired
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
  manager: new _ModalManager2.default(),
  BackdropComponent: _Backdrop2.default
};

exports.default = (0, _withStyles2.default)(styles, { flip: false, name: 'MuiModal' })(Modal);