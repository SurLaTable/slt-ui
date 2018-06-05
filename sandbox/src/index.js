import React from 'react';
import { render } from 'react-dom';
import { StoreProvider, CompareCheckbox, CompareBar } from '@sur-la-table/slt-ui';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <StoreProvider>
    <div style={styles}>
      <CompareCheckbox />
      <CompareBar />
    </div>
  </StoreProvider>
);

render(<App />, document.querySelector('.app'));
