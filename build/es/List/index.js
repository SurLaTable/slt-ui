import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  /* webpackChunkName: "List" */
  resolve: () => import('./List')
});

export const ListItem = asyncComponent({
  /* webpackChunkName: "ListItem" */
  resolve: () => import('./ListItem')
});

export const ListItemAvatar = asyncComponent({
  /* webpackChunkName: "ListItemAvatar" */
  resolve: () => import('./ListItemAvatar')
});

export const ListItemText = asyncComponent({
  /* webpackChunkName: "ListItemText" */
  resolve: () => import('./ListItemText')
});

export const ListItemIcon = asyncComponent({
  /* webpackChunkName: "ListItemIcon" */
  resolve: () => import('./ListItemIcon')
});

export const ListItemSecondaryAction = asyncComponent({
  /* webpackChunkName: "ListItemSecondaryAction" */
  resolve: () => import('./ListItemSecondaryAction')
});

export const ListSubheader = asyncComponent({
  /* webpackChunkName: "ListSubheader" */
  resolve: () => import('./ListSubheader')
});