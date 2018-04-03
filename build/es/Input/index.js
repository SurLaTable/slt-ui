import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  /* webpackChunkName: "Input" */
  resolve: () => import('./Input')
});

export const InputAdornment = asyncComponent({
  /* webpackChunkName: "InputAdornment" */
  resolve: () => import('./InputAdornment')
});

export const InputLabel = asyncComponent({
  /* webpackChunkName: "InputLabel" */
  resolve: () => import('./InputLabel')
});