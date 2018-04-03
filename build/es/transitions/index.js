import { asyncComponent } from 'react-async-component';

export const Slide = asyncComponent({
  /* webpackChunkName: "Slide" */
  resolve: () => import('./Slide')
});

export const Grow = asyncComponent({
  /* webpackChunkName: "Grow" */
  resolve: () => import('./Grow')
});

export const Fade = asyncComponent({
  /* webpackChunkName: "Fade" */
  resolve: () => import('./Fade')
});

export const Collapse = asyncComponent({
  /* webpackChunkName: "Collapse" */
  resolve: () => import('./Collapse')
});

export const Zoom = asyncComponent({
  /* webpackChunkName: "Zoom" */
  resolve: () => import('./Zoom')
});