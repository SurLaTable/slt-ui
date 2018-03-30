import _Promise from 'babel-runtime/core-js/promise';
import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  resolve: () => new _Promise(resolve => {
    require.ensure([], require => {
      resolve(require(() => require('./List')));
    });
  })
});

export const ListItem = asyncComponent({
  resolve: () => new _Promise(resolve => {
    require.ensure([], require => {
      resolve(require(() => require('./ListItem')));
    });
  })
});

export const ListItemAvatar = asyncComponent({
  resolve: () => new _Promise(resolve => {
    require.ensure([], require => {
      resolve(require(() => require('./ListItemAvatar')));
    });
  })
});

export const ListItemText = asyncComponent({
  resolve: () => new _Promise(resolve => {
    require.ensure([], require => {
      resolve(require(() => require('./ListItemText')));
    });
  })
});

export const ListItemIcon = asyncComponent({
  resolve: () => new _Promise(resolve => {
    require.ensure([], require => {
      resolve(require(() => require('./ListItemIcon')));
    });
  })
});

export const ListItemSecondaryAction = asyncComponent({
  resolve: () => new _Promise(resolve => {
    require.ensure([], require => {
      resolve(require(() => require('./ListItemSecondaryAction')));
    });
  })
});

export const ListSubheader = asyncComponent({
  resolve: () => new _Promise(resolve => {
    require.ensure([], require => {
      resolve(require(() => require('./ListSubheader')));
    });
  })
});