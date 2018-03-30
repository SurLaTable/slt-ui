import _Promise from 'babel-runtime/core-js/promise';
import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  resolve: () => new _Promise(resolve => {
    require.ensure([], require => {
      resolve(require(() => require('./ExpansionPanel')));
    });
  })
});

export const ExpansionPanelActions = asyncComponent({
  resolve: () => new _Promise(resolve => {
    require.ensure([], require => {
      resolve(require(() => require('./ExpansionPanelActions')));
    });
  })
});

export const ExpansionPanelDetails = asyncComponent({
  resolve: () => new _Promise(resolve => {
    require.ensure([], require => {
      resolve(require(() => require('./ExpansionPanelDetails')));
    });
  })
});

export const ExpansionPanelSummary = asyncComponent({
  resolve: () => new _Promise(resolve => {
    require.ensure([], require => {
      resolve(require(() => require('./ExpansionPanelSummary')));
    });
  })
});