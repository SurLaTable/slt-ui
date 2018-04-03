import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  /* webpackChunkName: "Typography" */
  resolve: () => import('./Typography')
});