import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  /* webpackChunkName: "Avatar" */
  resolve: () => import('./Avatar')
});