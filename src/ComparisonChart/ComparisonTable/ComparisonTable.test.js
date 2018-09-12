import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ComparisonTable from './ComparisonTable';
import StoreProvider from '../../StoreProvider';

test('Render', () => {
	const renderer = new ShallowRenderer();
	renderer.render(
		<StoreProvider>
			<ComparisonTable />
		</StoreProvider>
	);
	const result = renderer.getRenderOutput();
	expect(result).toMatchSnapshot();
});
