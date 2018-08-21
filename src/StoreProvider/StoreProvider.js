import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import configureStore from '../utils/storeTools';

export const store = configureStore();

const StoreProvider = (props) => (
	<Provider store={store}>
		<React.Fragment>{props.children}</React.Fragment>
	</Provider>
);

StoreProvider.propTypes = {
	children: PropTypes.node
};

export default StoreProvider;
