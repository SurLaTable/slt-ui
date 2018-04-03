import React from 'react';
import { render } from 'react-dom';
import { Button } from '@sur-la-table/slt-ui';

const App = () => (
  <React.Fragment>
    <Button color="primary" variant="raised">
      Baz
    </Button>
  </React.Fragment>
);

render(<App />, document.querySelector('.app'));
