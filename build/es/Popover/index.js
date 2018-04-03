import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  /* webpackChunkName: "Popover" */
  resolve: () => import('./Popover')
});