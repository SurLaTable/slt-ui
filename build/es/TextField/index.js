import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  /* webpackChunkName: "TextField" */
  resolve: () => import('./TextField')
});