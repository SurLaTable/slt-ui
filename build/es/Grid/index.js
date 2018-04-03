import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  /* webpackChunkName: "Grid" */
  resolve: () => import('./Grid')
});