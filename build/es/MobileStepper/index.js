import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  /* webpackChunkName: "MobileStepper" */
  resolve: () => import('./MobileStepper')
});