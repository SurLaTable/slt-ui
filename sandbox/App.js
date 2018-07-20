import React from 'react';
import { StoreProvider, ComparisonBar, ComparisonCheckbox } from '@sur-la-table/slt-ui';
//import "@sur-la-table/slt-ui-async";
import { hot } from 'react-hot-loader';

const App = () => (
	<StoreProvider>
		<ComparisonCheckbox product="PRO-13603" />
		<ComparisonCheckbox product="PRO-13604" />
		<ComparisonCheckbox product="PRO-13606" />

		<ComparisonBar />
	</StoreProvider>
);

export default hot(module)(App);
