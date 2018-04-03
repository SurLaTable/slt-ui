import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  /* webpackChunkName: "Drawer" */
  resolve: () => import('./Drawer')
});