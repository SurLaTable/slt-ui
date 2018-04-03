import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  /* webpackChunkName: "Modal" */
  resolve: () => import('./Modal')
});

export const Backdrop = asyncComponent({
  /* webpackChunkName: "Backdrop" */
  resolve: () => import('./Backdrop')
});

export const ModalManager = asyncComponent({
  /* webpackChunkName: "ModalManager" */
  resolve: () => import('./ModalManager')
});