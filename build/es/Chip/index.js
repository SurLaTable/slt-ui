import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  /* webpackChunkName: "Chip" */
  resolve: () => import('./Chip')
});