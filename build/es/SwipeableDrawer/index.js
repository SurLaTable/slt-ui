import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  /* webpackChunkName: "SwipeableDrawer" */
  resolve: () => import('./SwipeableDrawer')
});