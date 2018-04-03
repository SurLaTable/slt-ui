import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  /* webpackChunkName: "GridList" */
  resolve: () => import('./GridList')
});

export const GridListTile = asyncComponent({
  /* webpackChunkName: "GridListTile" */
  resolve: () => import('./GridListTile')
});

export const GridListTileBar = asyncComponent({
  /* webpackChunkName: "GridListTileBar" */
  resolve: () => import('./GridListTileBar')
});