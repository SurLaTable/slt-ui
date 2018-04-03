import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  /* webpackChunkName: "Icon" */
  resolve: () => import('./Icon')
});