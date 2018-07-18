import React from 'react';
import { render } from 'react-dom';
import { ComparisonCheckbox, StoreProvider } from '../src/index.js';

render(
	<React.Fragment>
		<StoreProvider>
			<ComparisonCheckbox product="PRO-2403251" />
		</StoreProvider>
	</React.Fragment>,
	document.querySelector('#root'),
);
