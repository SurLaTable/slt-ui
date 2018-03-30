import _Promise from 'babel-runtime/core-js/promise';
import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  resolve: () => new _Promise(resolve => {
    require.ensure([], require => {
      resolve(require(() => require('./Dialog')));
    });
  })
});

export const DialogActions = asyncComponent({
  resolve: () => new _Promise(resolve => {
    require.ensure([], require => {
      resolve(require(() => require('./DialogActions')));
    });
  })
});

export const DialogTitle = asyncComponent({
  resolve: () => new _Promise(resolve => {
    require.ensure([], require => {
      resolve(require(() => require('./DialogTitle')));
    });
  })
});

export const DialogContent = asyncComponent({
  resolve: () => new _Promise(resolve => {
    require.ensure([], require => {
      resolve(require(() => require('./DialogContent')));
    });
  })
});

export const DialogContentText = asyncComponent({
  resolve: () => new _Promise(resolve => {
    require.ensure([], require => {
      resolve(require(() => require('./DialogContentText')));
    });
  })
});

export { default as withMobileDialog } from './withMobileDialog';