import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../utils/storeTools';

export const store = configureStore();
const StoreProvider = (props) => (
	<Provider store={store}>
		<React.Fragment>{props.children}</React.Fragment>
	</Provider>
);
export default StoreProvider;
