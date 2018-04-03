import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  /* webpackChunkName: "Divider" */
  resolve: () => import('./Divider')
});