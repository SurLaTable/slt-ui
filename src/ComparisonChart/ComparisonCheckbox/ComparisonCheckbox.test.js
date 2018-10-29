import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ComparisonCheckbox from './ComparisonCheckbox';
import StoreProvider from '../../StoreProvider';

test('Render', () => {
	const renderer = new ShallowRenderer();
	renderer.render(
		<StoreProvider>
			<ComparisonCheckbox />
		</StoreProvider>
	);
	const result = renderer.getRenderOutput();
	expect(result).toMatchSnapshot();
});
