import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { assert } from 'chai';
import { createShallow, getClasses } from '../test-utils';
import Paper from '../Paper';
import Dialog from './Dialog';
import withMobileDialog from './withMobileDialog';
describe('withMobileDialog', () => {
  let shallow;
  let classes;
  const defaultProps = {
    open: false
  };
  before(() => {
    shallow = createShallow({
      untilSelector: 'Dialog'
    });
    classes = getClasses(React.createElement(Dialog, defaultProps, "foo"));
  });

  function isFullScreen(breakpoints, width) {
    breakpoints.forEach(breakpoint => {
      it(`is for width: ${width} <= ${breakpoint}`, () => {
        const ResponsiveDialog = withMobileDialog({
          breakpoint
        })(Dialog);
        const wrapper = shallow(React.createElement(ResponsiveDialog, _extends({}, defaultProps, {
          width: width
        }), "foo"));
        assert.strictEqual(wrapper.find(Paper).hasClass(classes.paperFullScreen), true);
      });
    });
  }

  function isNotFullScreen(breakpoints, width) {
    breakpoints.forEach(breakpoint => {
      it(`is not for width: ${width} > ${breakpoint}`, () => {
        const ResponsiveDialog = withMobileDialog({
          breakpoint
        })(Dialog);
        const wrapper = shallow(React.createElement(ResponsiveDialog, _extends({}, defaultProps, {
          width: width
        }), "foo"));
        assert.strictEqual(wrapper.find(Paper).hasClass(classes.paperFullScreen), false);
      });
    });
  }

  describe('screen width: xs', () => {
    isFullScreen(['xs', 'sm', 'md', 'lg', 'xl'], 'xs');
  });
  describe('screen width: sm (default)', () => {
    isFullScreen(['sm', 'md', 'lg', 'xl'], 'sm');
    isNotFullScreen(['xs'], 'sm');
  });
  describe('screen width: md', () => {
    isFullScreen(['md', 'lg', 'xl'], 'md');
    isNotFullScreen(['xs', 'sm'], 'md');
  });
  describe('screen width: lg', () => {
    isFullScreen(['lg', 'xl'], 'lg');
    isNotFullScreen(['xs', 'sm', 'md'], 'lg');
  });
  describe('screen width: xl', () => {
    isFullScreen(['xl'], 'xl');
    isNotFullScreen(['xs', 'sm', 'md', 'lg'], 'xl');
  });
});