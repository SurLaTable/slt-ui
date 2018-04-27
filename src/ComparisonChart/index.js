import React from 'react';
// import { render } from 'react-dom';
import CompareCheckbox from './CompareCheckbox/CompareCheckbox';
import CompareBar from './CompareBar/CompareBar';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import sltReducers from './reducers/sltReducers';

const sltStore = createStore(
    sltReducers,
    // Enable DevTools, switch to localStorage on Prod:
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center'
};

const App = () => (
    <Provider store={sltStore}>
        <div style={styles}>
            <CompareCheckbox sku="2403251" />
            <CompareCheckbox sku="1251230" />
            <CompareCheckbox sku="227496" />
            {
                // TODO: Take number of items that can be compared.
            }
            <CompareBar numberOfItems={3} />
        </div>
    </Provider>
);

export default App;

// render(<App />, document.querySelector('.app'));
