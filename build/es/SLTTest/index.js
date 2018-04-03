// Test
import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  /* webpackChunkName: "AppBar" */
  resolve: () => import('../AppBar')
});