import React from 'react';
import { render } from 'react-dom';
import CompareCheckbox from './CompareCheckbox';
import ComparisonTable from './ComparisonTable';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import { MuiThemeProvider, createMuiTheme } from '@sur-la-table/slt-ui';

// import { purple, green } from "@sur-la-table/slt-ui/material-ui/src/colors";
import reducers from './reducers';

const sltStore = createStore(
  reducers,
  // Enable DevTools:
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};
// const theme = createMuiTheme({
//     palette: {
//         primary: green,
//         secondary: purple
//     },
//     status: {
//         danger: "orange"
//     }
// });

const App = () => (
  <Provider store={sltStore}>
    <div style={styles}>
      <CompareCheckbox />
      <ComparisonTable />
    </div>
  </Provider>
);

render(<App />, document.querySelector('.app'));
