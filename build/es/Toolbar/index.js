import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  /* webpackChunkName: "Toolbar" */
  resolve: () => import('./Toolbar')
});