import React from 'react';
import { render } from 'react-dom';
import ComparisonCheckbox from './ComparisonCheckbox/ComparisonCheckbox';
import ComparisonBar from './ComparisonBar/ComparisonBar';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import sltReducers from './reducers/sltReducers';

const sltStore = createStore(
	sltReducers,
	// Enable DevTools, switch to localStorage on Prod:
	global.__REDUX_DEVTOOLS_EXTENSION__ && global.__REDUX_DEVTOOLS_EXTENSION__(),
);

const styles = {
	fontFamily: 'sans-serif',
	textAlign: 'center',
};

const App = () => (
	<Provider store={sltStore}>
		<div style={styles}>
			<ComparisonCheckbox product="PRO-2403251" />
			<ComparisonCheckbox product="PRO-1251180" />
			<ComparisonCheckbox product="PRO-227496" />
			<ComparisonBar numberOfItems={3} />
		</div>
	</Provider>
);

// export default App;

render(<App />, document.querySelector('.app'));
