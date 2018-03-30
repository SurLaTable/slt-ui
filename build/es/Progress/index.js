import _Promise from 'babel-runtime/core-js/promise';
import { asyncComponent } from 'react-async-component';

export const CircularProgress = asyncComponent({
  resolve: () => new _Promise(resolve => {
    require.ensure([], require => {
      resolve(require(() => require('./CircularProgress')));
    });
  })
});

export const LinearProgress = asyncComponent({
  resolve: () => new _Promise(resolve => {
    require.ensure([], require => {
      resolve(require(() => require('./LinearProgress')));
    });
  })
});