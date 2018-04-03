import { asyncComponent } from 'react-async-component';

export const CircularProgress = asyncComponent({
  /* webpackChunkName: "CircularProgress" */
  resolve: () => import('./CircularProgress')
});

export const LinearProgress = asyncComponent({
  /* webpackChunkName: "LinearProgress" */
  resolve: () => import('./LinearProgress')
});