import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  /* webpackChunkName: "Stepper" */
  resolve: () => import('./Stepper')
});

export const Step = asyncComponent({
  /* webpackChunkName: "Step" */
  resolve: () => import('./Step')
});

export const StepButton = asyncComponent({
  /* webpackChunkName: "StepButton" */
  resolve: () => import('./StepButton')
});

export const StepContent = asyncComponent({
  /* webpackChunkName: "StepContent" */
  resolve: () => import('./StepContent')
});

export const StepIcon = asyncComponent({
  /* webpackChunkName: "StepIcon" */
  resolve: () => import('./StepIcon')
});

export const StepLabel = asyncComponent({
  /* webpackChunkName: "StepLabel" */
  resolve: () => import('./StepLabel')
});