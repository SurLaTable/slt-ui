import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  /* webpackChunkName: "BottomNavigation" */
  resolve: () => import('./BottomNavigation')
});

export const BottomNavigationAction = asyncComponent({
  /* webpackChunkName: "BottomNavigationAction" */
  resolve: () => import('./BottomNavigationAction')
});