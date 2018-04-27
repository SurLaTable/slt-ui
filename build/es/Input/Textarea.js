import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import debounce from 'lodash/debounce';
import EventListener from 'react-event-listener';
import withStyles from '../styles/withStyles';

const ROWS_HEIGHT = 19;

export const styles = {
  root: {
    position: 'relative', // because the shadow has position: 'absolute',
    width: '100%'
  },
  textarea: {
    width: '100%',
    height: '100%',
    resize: 'none',
    font: 'inherit',
    padding: 0,
    cursor: 'inherit',
    boxSizing: 'border-box',
    lineHeight: 'inherit',
    border: 'none',
    outline: 'none',
    background: 'transparent'
  },
  shadow: {
    resize: 'none',
    // Overflow also needed to here to remove the extra row
    // added to textareas in Firefox.
    overflow: 'hidden',
    // Visibility needed to hide the extra text area on ipads
    visibility: 'hidden',
    position: 'absolute',
    height: 'auto',
    whiteSpace: 'pre-wrap'
  }
};

/**
 * @ignore - internal component.
 */
class Textarea extends React.Component {
  constructor(props, context) {
    super(props, context);

    // <Input> expects the components it renders to respond to 'value'
    // so that it can check whether they are filled.
    this.state = {
      height: null
    };
    this.shadow = null;
    this.singlelineShadow = null;
    this.input = null;
    this.value = null;
    this.handleResize = debounce(() => {
      this.syncHeightWithShadow();
    }, 166);

    this.handleRefInput = node => {
      this.input = node;
      if (this.props.textareaRef) {
        this.props.textareaRef(node);
      }
    };

    this.handleRefSinglelineShadow = node => {
      this.singlelineShadow = node;
    };

    this.handleRefShadow = node => {
      this.shadow = node;
    };

    this.handleChange = event => {
      this.value = event.target.value;

      if (typeof this.props.value === 'undefined' && this.shadow) {
        // The component is not controlled, we need to update the shallow value.
        this.shadow.value = this.value;
        this.syncHeightWithShadow();
      }

      if (this.props.onChange) {
        this.props.onChange(event);
      }
    };

    this.value = props.value || props.defaultValue || '';
    this.state = {
      height: Number(props.rows) * ROWS_HEIGHT
    };
  }

  componentDidMount() {
    this.syncHeightWithShadow();
  }

  componentDidUpdate() {
    this.syncHeightWithShadow();
  }

  componentWillUnmount() {
    this.handleResize.cancel();
  }

  // Corresponds to 10 frames at 60 Hz.

  syncHeightWithShadow(props = this.props) {
    if (!this.shadow || !this.singlelineShadow) {
      return;
    }

    // The component is controlled, we need to update the shallow value.
    if (typeof this.props.value !== 'undefined') {
      this.shadow.value = props.value == null ? '' : String(props.value);
    }

    const lineHeight = this.singlelineShadow.scrollHeight;
    let newHeight = this.shadow.scrollHeight;

    // Guarding for jsdom, where scrollHeight isn't present.
    // See https://github.com/tmpvar/jsdom/issues/1013
    if (newHeight === undefined) {
      return;
    }

    if (Number(props.rowsMax) >= Number(props.rows)) {
      newHeight = Math.min(Number(props.rowsMax) * lineHeight, newHeight);
    }

    newHeight = Math.max(newHeight, lineHeight);

    if (this.state.height !== newHeight) {
      this.setState({
        height: newHeight
      });
    }
  }

  render() {
    const _props = this.props,
          {
      classes,
      className,
      defaultValue,
      onChange,
      rows,
      rowsMax,
      textareaRef,
      value
    } = _props,
          other = _objectWithoutProperties(_props, ['classes', 'className', 'defaultValue', 'onChange', 'rows', 'rowsMax', 'textareaRef', 'value']);

    return React.createElement(
      'div',
      { className: classes.root, style: { height: this.state.height } },
      React.createElement(EventListener, { target: 'window', onResize: this.handleResize }),
      React.createElement('textarea', {
        ref: this.handleRefSinglelineShadow,
        className: classnames(classes.shadow, classes.textarea),
        tabIndex: -1,
        rows: '1',
        readOnly: true,
        'aria-hidden': 'true',
        value: ''
      }),
      React.createElement('textarea', {
        ref: this.handleRefShadow,
        className: classnames(classes.shadow, classes.textarea),
        tabIndex: -1,
        rows: rows,
        'aria-hidden': 'true',
        readOnly: true,
        defaultValue: defaultValue,
        value: value
      }),
      React.createElement('textarea', _extends({
        rows: rows,
        className: classnames(classes.textarea, className),
        defaultValue: defaultValue,
        value: value,
        onChange: this.handleChange,
        ref: this.handleRefInput
      }, other))
    );
  }
}

Textarea.propTypes = process.env.NODE_ENV !== "production" ? {
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
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * @ignore
   */
  disabled: PropTypes.bool,
  /**
   * @ignore
   */
  onChange: PropTypes.func,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Use that property to pass a ref callback to the native textarea element.
   */
  textareaRef: PropTypes.func,
  /**
   * @ignore
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
} : {};

Textarea.defaultProps = {
  rows: 1
};

export default withStyles(styles)(Textarea);