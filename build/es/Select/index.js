import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  /* webpackChunkName: "Select" */
  resolve: () => import('./Select')
});