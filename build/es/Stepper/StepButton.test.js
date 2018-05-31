import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { assert } from 'chai';
import { spy } from 'sinon';
import { createShallow, createMount } from '../test-utils';
import StepButton from './StepButton';
import StepLabel from './StepLabel';
import ButtonBase from '../ButtonBase';

var _ref = React.createElement(StepLabel, null, "Step One");

describe('<StepButton />', () => {
  let shallow;
  let mount;
  const defaultProps = {
    orientation: 'horizontal'
  };
  before(() => {
    shallow = createShallow({
      dive: true
    });
    mount = createMount();
  });
  after(() => {
    mount.cleanUp();
  });
  it('merges user className into the root node', () => {
    const wrapper = shallow(React.createElement(StepButton, _extends({
      className: "foo"
    }, defaultProps), "Hello"));
    assert.include(wrapper.props().className, 'foo');
  });
  it('should render an ButtonBase with a StepLabel', () => {
    const wrapper = shallow(React.createElement(StepButton, defaultProps, "Step One"));
    assert.ok(wrapper.is(ButtonBase), 'should be an ButtonBase');
    const stepLabel = wrapper.find(StepLabel);
    assert.strictEqual(stepLabel.length, 1, 'should have a stepLabel');
    assert.strictEqual(stepLabel.props().children, 'Step One');
  });
  it('should pass props to StepLabel', () => {
    const wrapper = shallow(React.createElement(StepButton, _extends({
      active: true,
      completed: true,
      disabled: true,
      label: "Step One"
    }, defaultProps), "Step One"));
    const stepLabel = wrapper.find(StepLabel);
    assert.strictEqual(stepLabel.props().active, true, 'should be active');
    assert.strictEqual(stepLabel.props().completed, true, 'should be completed');
    assert.strictEqual(stepLabel.props().disabled, true, 'should be disabled');
  });
  it('should pass props to a provided StepLabel', () => {
    const wrapper = shallow(React.createElement(StepButton, _extends({
      active: true,
      completed: true,
      disabled: true,
      label: "Step One"
    }, defaultProps), _ref));
    const stepLabel = wrapper.find(StepLabel);
    assert.strictEqual(stepLabel.props().active, true, 'should be active');
    assert.strictEqual(stepLabel.props().completed, true, 'should be completed');
    assert.strictEqual(stepLabel.props().disabled, true, 'should be disabled');
  });
  it("should pass disabled prop to a StepLabel's Button", () => {
    const wrapper = shallow(React.createElement(StepButton, _extends({
      disabled: true
    }, defaultProps), "Step One"));
    const stepLabel = wrapper.find(ButtonBase);
    assert.strictEqual(stepLabel.props().disabled, true);
  });
  describe('event handlers', () => {
    describe('handleMouseEnter/Leave', () => {
      const handleMouseEnter = spy();
      const handleMouseLeave = spy();
      it('should fire event callbacks', () => {
        const wrapper = shallow(React.createElement(StepButton, _extends({
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave
        }, defaultProps), "Step One"));
        wrapper.simulate('mouseEnter');
        assert.strictEqual(handleMouseEnter.callCount, 1, 'should call handleMouseEnter once');
        wrapper.simulate('mouseLeave');
        assert.strictEqual(handleMouseEnter.callCount, 1, 'should call handleMouseEnter once');
        assert.strictEqual(handleMouseLeave.callCount, 1, 'should call handleMouseLeave once');
      });
    });
    it('should bubble callbacks used internally', () => {
      const handleMouseEnter = spy();
      const handleMouseLeave = spy();
      const handleTouchStart = spy();
      const wrapper = shallow(React.createElement(StepButton, _extends({
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onTouchStart: handleTouchStart
      }, defaultProps), "Step One"));
      wrapper.simulate('mouseEnter');
      assert.strictEqual(handleMouseEnter.callCount, 1, 'should call handleMouseEnter once');
      wrapper.simulate('mouseLeave');
      assert.strictEqual(handleMouseEnter.callCount, 1, 'should call handleMouseEnter once');
      assert.strictEqual(handleMouseLeave.callCount, 1, 'should call handleMouseLeave once');
      wrapper.simulate('touchStart');
      assert.strictEqual(handleMouseEnter.callCount, 1, 'should call handleMouseEnter once');
      assert.strictEqual(handleMouseLeave.callCount, 1, 'should call handleMouseLeave once');
      assert.strictEqual(handleTouchStart.callCount, 1, 'should call handleTouchStart once');
      wrapper.simulate('mouseEnter');
      wrapper.simulate('touchStart');
      assert.strictEqual(handleMouseEnter.callCount, 2, 'should call handleMouseEnter twice');
      assert.strictEqual(handleMouseLeave.callCount, 1, 'should call handleMouseLeave once');
      assert.strictEqual(handleTouchStart.callCount, 2, 'should call handleTouchStart twice');
    });
  });
});