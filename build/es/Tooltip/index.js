import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  /* webpackChunkName: "Tooltip" */
  resolve: () => import('./Tooltip')
});