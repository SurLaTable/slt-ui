import _Promise from 'babel-runtime/core-js/promise';
import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  resolve: () => new _Promise(resolve => {
    require.ensure([], require => {
      resolve(require(() => require('./BottomNavigation')));
    });
  })
});

export const BottomNavigationAction = asyncComponent({
  resolve: () => new _Promise(resolve => {
    require.ensure([], require => {
      resolve(require(() => require('./BottomNavigationAction')));
    });
  })
});