import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  /* webpackChunkName: "Tabs" */
  resolve: () => import('./Tabs')
});

export const Tab = asyncComponent({
  /* webpackChunkName: "Tab" */
  resolve: () => import('./Tab')
});