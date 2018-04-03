import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  /* webpackChunkName: "Radio" */
  resolve: () => import('./Radio')
});

export const RadioGroup = asyncComponent({
  /* webpackChunkName: "RadioGroup" */
  resolve: () => import('./RadioGroup')
});