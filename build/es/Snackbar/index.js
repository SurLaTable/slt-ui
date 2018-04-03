import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  /* webpackChunkName: "Snackbar" */
  resolve: () => import('./Snackbar')
});

export const SnackbarContent = asyncComponent({
  /* webpackChunkName: "SnackbarContent" */
  resolve: () => import('./SnackbarContent')
});