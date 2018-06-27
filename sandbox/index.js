import React from 'react';
import { render } from 'react-dom';
import {
	ComparisonCheckbox,
	ComparisonBar,
	StoreProvider
} from '@sur-la-table/slt-ui';
const app = (
	<StoreProvider>
		<ComparisonCheckbox product="PRO-2403251" />
		<ComparisonCheckbox product="PRO-1251180" />
		<ComparisonCheckbox product="PRO-227496" />
		<ComparisonBar numberOfItems={3} />
	</StoreProvider>
);
render(app, document.querySelector('body'));
