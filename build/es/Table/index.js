import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  /* webpackChunkName: "Table" */
  resolve: () => import('./Table')
});

export const TableBody = asyncComponent({
  /* webpackChunkName: "TableBody" */
  resolve: () => import('./TableBody')
});

export const TableCell = asyncComponent({
  /* webpackChunkName: "TableCell" */
  resolve: () => import('./TableCell')
});

export const TableFooter = asyncComponent({
  /* webpackChunkName: "TableFooter" */
  resolve: () => import('./TableFooter')
});

export const TableHead = asyncComponent({
  /* webpackChunkName: "TableHead" */
  resolve: () => import('./TableHead')
});

export const TablePagination = asyncComponent({
  /* webpackChunkName: "TablePagination" */
  resolve: () => import('./TablePagination')
});

export const TableRow = asyncComponent({
  /* webpackChunkName: "TableRow" */
  resolve: () => import('./TableRow')
});

export const TableSortLabel = asyncComponent({
  /* webpackChunkName: "TableSortLabel" */
  resolve: () => import('./TableSortLabel')
});