import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  /* webpackChunkName: "Badge" */
  resolve: () => import('./Badge')
});