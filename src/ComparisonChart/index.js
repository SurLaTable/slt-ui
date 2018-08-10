/*
  This loads the reducers when they may not be needed, it might be a good idea
  to have this imported on each smaller component and only have it do something
  if it's not already registered.
*/

export { default as ComparisonCheckbox } from './ComparisonCheckbox/ComparisonCheckbox.js';
export { default as ComparisonTable } from './ComparisonTable/ComparisonTable.js';
export { default as ComparisonBar } from './ComparisonBar/ComparisonBar.js';
