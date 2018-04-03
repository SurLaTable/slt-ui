import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  /* webpackChunkName: "Checkbox" */
  resolve: () => import('./Checkbox')
});