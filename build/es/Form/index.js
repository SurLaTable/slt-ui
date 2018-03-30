import _Promise from 'babel-runtime/core-js/promise';
import { asyncComponent } from 'react-async-component';

export const FormGroup = asyncComponent({
  resolve: () => new _Promise(resolve => {
    require.ensure([], require => {
      resolve(require(() => require('./FormGroup')));
    });
  })
});

export const FormLabel = asyncComponent({
  resolve: () => new _Promise(resolve => {
    require.ensure([], require => {
      resolve(require(() => require('./FormLabel')));
    });
  })
});

export const FormControl = asyncComponent({
  resolve: () => new _Promise(resolve => {
    require.ensure([], require => {
      resolve(require(() => require('./FormControl')));
    });
  })
});

export const FormHelperText = asyncComponent({
  resolve: () => new _Promise(resolve => {
    require.ensure([], require => {
      resolve(require(() => require('./FormHelperText')));
    });
  })
});

export const FormControlLabel = asyncComponent({
  resolve: () => new _Promise(resolve => {
    require.ensure([], require => {
      resolve(require(() => require('./FormControlLabel')));
    });
  })
});