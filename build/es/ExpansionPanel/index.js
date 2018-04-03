import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  /* webpackChunkName: "ExpansionPanel" */
  resolve: () => import('./ExpansionPanel')
});

export const ExpansionPanelActions = asyncComponent({
  /* webpackChunkName: "ExpansionPanelActions" */
  resolve: () => import('./ExpansionPanelActions')
});

export const ExpansionPanelDetails = asyncComponent({
  /* webpackChunkName: "ExpansionPanelDetails" */
  resolve: () => import('./ExpansionPanelDetails')
});

export const ExpansionPanelSummary = asyncComponent({
  /* webpackChunkName: "ExpansionPanelSummary" */
  resolve: () => import('./ExpansionPanelSummary')
});