import _Promise from 'babel-runtime/core-js/promise';
import { asyncComponent } from 'react-async-component';

export const Slide = asyncComponent({
  resolve: () => new _Promise(resolve => {
    require.ensure([], require => {
      resolve(require(() => require('./Slide')));
    });
  })
});

export const Grow = asyncComponent({
  resolve: () => new _Promise(resolve => {
    require.ensure([], require => {
      resolve(require(() => require('./Grow')));
    });
  })
});

export const Fade = asyncComponent({
  resolve: () => new _Promise(resolve => {
    require.ensure([], require => {
      resolve(require(() => require('./Fade')));
    });
  })
});

export const Collapse = asyncComponent({
  resolve: () => new _Promise(resolve => {
    require.ensure([], require => {
      resolve(require(() => require('./Collapse')));
    });
  })
});

export const Zoom = asyncComponent({
  resolve: () => new _Promise(resolve => {
    require.ensure([], require => {
      resolve(require(() => require('./Zoom')));
    });
  })
});