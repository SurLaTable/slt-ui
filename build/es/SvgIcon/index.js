import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  /* webpackChunkName: "SvgIcon" */
  resolve: () => import('./SvgIcon')
});