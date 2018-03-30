import _Promise from 'babel-runtime/core-js/promise';
import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  resolve: () => new _Promise(resolve => {
    require.ensure([], require => {
      resolve(require(() => require('./Card')));
    });
  })
});

export const CardContent = asyncComponent({
  resolve: () => new _Promise(resolve => {
    require.ensure([], require => {
      resolve(require(() => require('./CardContent')));
    });
  })
});

export const CardActions = asyncComponent({
  resolve: () => new _Promise(resolve => {
    require.ensure([], require => {
      resolve(require(() => require('./CardActions')));
    });
  })
});

export const CardMedia = asyncComponent({
  resolve: () => new _Promise(resolve => {
    require.ensure([], require => {
      resolve(require(() => require('./CardMedia')));
    });
  })
});

export const CardHeader = asyncComponent({
  resolve: () => new _Promise(resolve => {
    require.ensure([], require => {
      resolve(require(() => require('./CardHeader')));
    });
  })
});