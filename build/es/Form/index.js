import { asyncComponent } from 'react-async-component';

export const FormGroup = asyncComponent({
  /* webpackChunkName: "FormGroup" */
  resolve: () => import('./FormGroup')
});

export const FormLabel = asyncComponent({
  /* webpackChunkName: "FormLabel" */
  resolve: () => import('./FormLabel')
});

export const FormControl = asyncComponent({
  /* webpackChunkName: "FormControl" */
  resolve: () => import('./FormControl')
});

export const FormHelperText = asyncComponent({
  /* webpackChunkName: "FormHelperText" */
  resolve: () => import('./FormHelperText')
});

export const FormControlLabel = asyncComponent({
  /* webpackChunkName: "FormControlLabel" */
  resolve: () => import('./FormControlLabel')
});