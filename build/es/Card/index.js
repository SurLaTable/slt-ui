import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  /* webpackChunkName: "Card" */
  resolve: () => import('./Card')
});

export const CardContent = asyncComponent({
  /* webpackChunkName: "CardContent" */
  resolve: () => import('./CardContent')
});

export const CardActions = asyncComponent({
  /* webpackChunkName: "CardActions" */
  resolve: () => import('./CardActions')
});

export const CardMedia = asyncComponent({
  /* webpackChunkName: "CardMedia" */
  resolve: () => import('./CardMedia')
});

export const CardHeader = asyncComponent({
  /* webpackChunkName: "CardHeader" */
  resolve: () => import('./CardHeader')
});