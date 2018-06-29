import React from 'react';
import {render} from 'react-dom';
import {
	StoreProvider,
	ComparisonBar,
	ComparisonCheckbox
} from '@sur-la-table/slt-ui';
const app = (
	<StoreProvider>
		<ComparisonCheckbox product="PRO-13603"></ComparisonCheckbox>
		<ComparisonCheckbox product="PRO-13604"></ComparisonCheckbox>
		<ComparisonCheckbox product="PRO-13606"></ComparisonCheckbox>

		<ComparisonBar></ComparisonBar>
	</StoreProvider>
);
render(app, document.querySelector('body'));
