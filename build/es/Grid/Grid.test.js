import _Object$keys from "@babel/runtime/core-js/object/keys";
import React from 'react';
import { assert } from 'chai';
import { createShallow, getClasses } from '../test-utils';
import Hidden from '../Hidden';
import Grid from './Grid';

var _ref = React.createElement(Grid, null);

var _ref2 = React.createElement(Grid, {
  className: "woofGrid"
});

var _ref3 = React.createElement(Grid, {
  container: true
});

var _ref4 = React.createElement(Grid, {
  item: true
});

var _ref5 = React.createElement(Grid, {
  component: "span"
});

var _ref6 = React.createElement(Grid, {
  item: true,
  xs: true
});

var _ref7 = React.createElement(Grid, {
  item: true,
  xs: 3
});

var _ref8 = React.createElement(Grid, {
  container: true,
  spacing: 8
});

var _ref9 = React.createElement(Grid, {
  alignItems: "center",
  container: true
});

var _ref10 = React.createElement(Grid, {
  alignContent: "center",
  container: true
});

describe('<Grid />', () => {
  let shallow;
  let classes;
  before(() => {
    const shallowInner = createShallow({
      dive: true
    }); // Render deeper to bypass the GridWrapper.

    shallow = node => {
      return shallowInner(node).find('Grid').shallow({
        context: shallowInner.context
      });
    };

    classes = getClasses(_ref);
  });
  it('should render', () => {
    const wrapper = shallow(_ref2);
    assert.strictEqual(wrapper.name(), 'div');
    assert.strictEqual(wrapper.hasClass('woofGrid'), true, 'should have the user class');
  });
  describe('prop: container', () => {
    it('should apply the container class', () => {
      const wrapper = shallow(_ref3);
      assert.strictEqual(wrapper.hasClass(classes.container), true);
    });
  });
  describe('prop: item', () => {
    it('should apply the item class', () => {
      const wrapper = shallow(_ref4);
      assert.strictEqual(wrapper.hasClass(classes.item), true);
    });
  });
  describe('prop: component', () => {
    it('should change the component', () => {
      const wrapper = shallow(_ref5);
      assert.strictEqual(wrapper.name(), 'span');
    });
  });
  describe('prop: xs', () => {
    it('should apply the flex-grow class', () => {
      const wrapper = shallow(_ref6);
      assert.strictEqual(wrapper.hasClass(classes['grid-xs']), true);
    });
    it('should apply the flex size class', () => {
      const wrapper = shallow(_ref7);
      assert.strictEqual(wrapper.hasClass(classes['grid-xs-3']), true);
    });
  });
  describe('prop: spacing', () => {
    it('should have a spacing', () => {
      const wrapper = shallow(_ref8);
      assert.strictEqual(wrapper.hasClass(classes['spacing-xs-8']), true);
    });
  });
  describe('prop: alignItems', () => {
    it('should apply the align-item class', () => {
      const wrapper = shallow(_ref9);
      assert.strictEqual(wrapper.hasClass(classes['align-items-xs-center']), true);
    });
  });
  describe('prop: alignContent', () => {
    it('should apply the align-content class', () => {
      const wrapper = shallow(_ref10);
      assert.strictEqual(wrapper.hasClass(classes['align-content-xs-center']), true);
    });
  });
  describe('prop: other', () => {
    it('should spread the other properties to the root element', () => {
      const handleClick = () => {};

      const wrapper = shallow(React.createElement(Grid, {
        component: "span",
        onClick: handleClick
      }));
      assert.strictEqual(wrapper.props().onClick, handleClick);
    });
  });
  describe('hidden', () => {
    const hiddenProps = {
      onlyHidden: 'xs',
      xsUpHidden: true,
      smUpHidden: true,
      mdUpHidden: true,
      lgUpHidden: true,
      xlUpHidden: true,
      xsDownHidden: true,
      smDownHidden: true,
      mdDownHidden: true,
      lgDownHidden: true,
      xlDownHidden: true
    };

    _Object$keys(hiddenProps).forEach(key => {
      const value = hiddenProps[key];
      it(`should render ${key} with Hidden`, () => {
        const wrapper = shallow(React.createElement(Grid, {
          hidden: {
            [key]: value
          }
        }));
        assert.strictEqual(wrapper.type(), Hidden);
      });
    });
  });
});