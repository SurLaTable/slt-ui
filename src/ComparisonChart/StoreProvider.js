import React from 'react';
// import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.js';

let sltStore = configureStore();

const StoreProvider = (props) => (
	<Provider store={sltStore}>
		<React.Fragment>{props.children}</React.Fragment>
	</Provider>
);
export default StoreProvider;
