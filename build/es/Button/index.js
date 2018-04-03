import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  /* webpackChunkName: "Button" */
  resolve: () => import('./Button')
});