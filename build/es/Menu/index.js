import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  /* webpackChunkName: "Menu" */
  resolve: () => import('./Menu')
});

export const MenuList = asyncComponent({
  /* webpackChunkName: "MenuList" */
  resolve: () => import('./MenuList')
});

export const MenuItem = asyncComponent({
  /* webpackChunkName: "MenuItem" */
  resolve: () => import('./MenuItem')
});