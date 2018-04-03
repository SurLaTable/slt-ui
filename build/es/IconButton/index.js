import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  /* webpackChunkName: "IconButton" */
  resolve: () => import('./IconButton')
});