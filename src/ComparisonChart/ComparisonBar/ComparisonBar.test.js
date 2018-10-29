import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ComparisonBar from './ComparisonBar';
import StoreProvider from '../../StoreProvider';

test('Render', () => {
	const renderer = new ShallowRenderer();
	renderer.render(
		<StoreProvider>
			<ComparisonBar />
		</StoreProvider>
	);
	const result = renderer.getRenderOutput();
	expect(result).toMatchSnapshot();
});
