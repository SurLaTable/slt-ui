import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  /* webpackChunkName: "Dialog" */
  resolve: () => import('./Dialog')
});

export const DialogActions = asyncComponent({
  /* webpackChunkName: "DialogActions" */
  resolve: () => import('./DialogActions')
});

export const DialogTitle = asyncComponent({
  /* webpackChunkName: "DialogTitle" */
  resolve: () => import('./DialogTitle')
});

export const DialogContent = asyncComponent({
  /* webpackChunkName: "DialogContent" */
  resolve: () => import('./DialogContent')
});

export const DialogContentText = asyncComponent({
  /* webpackChunkName: "DialogContentText" */
  resolve: () => import('./DialogContentText')
});

export { default as withMobileDialog } from './withMobileDialog';