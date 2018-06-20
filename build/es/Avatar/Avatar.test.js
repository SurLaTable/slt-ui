import React from 'react';
import { assert } from 'chai';
import CancelIcon from '../internal/svg-icons/Cancel';
import { createShallow, getClasses } from '../test-utils';
import Avatar from './Avatar';

var _ref = React.createElement(Avatar, null);

var _ref2 = React.createElement(Avatar, {
  className: "my-avatar",
  src: "something.jpg",
  alt: "Hello World!",
  "data-my-prop": "woofAvatar"
});

var _ref3 = React.createElement(Avatar, {
  className: "my-avatar",
  "data-my-prop": "woofAvatar",
  childrenClassName: "my-children"
}, React.createElement("span", {
  className: "my-icon-font"
}, "icon"));

var _ref4 = React.createElement(Avatar, {
  className: "my-avatar",
  "data-my-prop": "woofAvatar",
  childrenClassName: "my-children"
}, React.createElement(CancelIcon, null));

var _ref5 = React.createElement(Avatar, {
  className: "my-avatar",
  "data-my-prop": "woofAvatar"
}, "OT");

describe('<Avatar />', () => {
  let shallow;
  let classes;
  before(() => {
    shallow = createShallow({
      dive: true
    });
    classes = getClasses(_ref);
  });
  describe('image avatar', () => {
    it('should render a div containing an img', () => {
      const wrapper = shallow(_ref2);
      assert.strictEqual(wrapper.name(), 'div');
      assert.strictEqual(wrapper.childAt(0).is('img'), true, 'should be an img');
      assert.strictEqual(wrapper.hasClass(classes.root), true);
      assert.strictEqual(wrapper.hasClass('my-avatar'), true);
      assert.strictEqual(wrapper.prop('data-my-prop'), 'woofAvatar');
      assert.strictEqual(wrapper.hasClass(classes.colorDefault), false, 'should not apply the colorDefault class for image avatars');
      const img = wrapper.childAt(0);
      assert.strictEqual(img.hasClass(classes.img), true, 'should add the img class to the img node');
      assert.strictEqual(img.props().alt, 'Hello World!', 'should apply img props to the img node');
      assert.strictEqual(img.props().src, 'something.jpg', 'should apply img props to the img node');
    });
    it('should be able to add more properties to the image', () => {
      const onError = () => {};

      const wrapper = shallow(React.createElement(Avatar, {
        src: "something.jpg",
        imgProps: {
          onError
        }
      }));
      assert.strictEqual(wrapper.childAt(0).props().onError, onError);
    });
  });
  describe('font icon avatar', () => {
    let wrapper;
    before(() => {
      wrapper = shallow(_ref3);
    });
    it('should render a div containing an font icon', () => {
      const icon = wrapper.childAt(0);
      assert.strictEqual(wrapper.name(), 'div');
      assert.strictEqual(icon.is('span'), true, 'should be a span');
      assert.strictEqual(icon.hasClass('my-icon-font'), true);
      assert.strictEqual(icon.text(), 'icon');
    });
    it('should merge user classes & spread custom props to the root node', () => {
      assert.strictEqual(wrapper.hasClass(classes.root), true);
      assert.strictEqual(wrapper.hasClass('my-avatar'), true);
      assert.strictEqual(wrapper.prop('data-my-prop'), 'woofAvatar');
    });
    it('should apply the colorDefault class', () => {
      assert.strictEqual(wrapper.hasClass(classes.colorDefault), true);
    });
    it('should apply the childrenClassName class', () => {
      assert.strictEqual(wrapper.childAt(0).hasClass('my-children'), true);
    });
  });
  describe('svg icon avatar', () => {
    let wrapper;
    before(() => {
      wrapper = shallow(_ref4);
    });
    it('should render a div containing an svg icon', () => {
      assert.strictEqual(wrapper.name(), 'div');
      assert.strictEqual(wrapper.childAt(0).is('pure(Cancel)'), true, 'should be an svg icon');
    });
    it('should merge user classes & spread custom props to the root node', () => {
      assert.strictEqual(wrapper.hasClass(classes.root), true);
      assert.strictEqual(wrapper.hasClass('my-avatar'), true);
      assert.strictEqual(wrapper.prop('data-my-prop'), 'woofAvatar');
    });
    it('should apply the colorDefault class', () => {
      assert.strictEqual(wrapper.hasClass(classes.colorDefault), true);
    });
    it('should apply the childrenClassName class', () => {
      assert.strictEqual(wrapper.childAt(0).hasClass('my-children'), true);
    });
  });
  describe('text avatar', () => {
    let wrapper;
    before(() => {
      wrapper = shallow(_ref5);
    });
    it('should render a div containing a string', () => {
      assert.strictEqual(wrapper.name(), 'div');
      assert.strictEqual(wrapper.childAt(0).text(), 'OT');
    });
    it('should merge user classes & spread custom props to the root node', () => {
      assert.strictEqual(wrapper.hasClass(classes.root), true);
      assert.strictEqual(wrapper.hasClass('my-avatar'), true);
      assert.strictEqual(wrapper.prop('data-my-prop'), 'woofAvatar');
    });
    it('should apply the colorDefault class', () => {
      assert.strictEqual(wrapper.hasClass(classes.colorDefault), true);
    });
  });
});