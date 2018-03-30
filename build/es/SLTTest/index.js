import _Promise from 'babel-runtime/core-js/promise';
// Test
import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  resolve: () => new _Promise(resolve => {
    require.ensure([], require => {
      resolve(require(() => require('../AppBar')));
    });
  })
});