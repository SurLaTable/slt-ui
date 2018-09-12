import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import StoreProvider from '../StoreProvider';
import StoreSelector from './StoreSelector';

test('Render', () => {
	const renderer = new ShallowRenderer();
	renderer.render(
		<StoreProvider>
			<StoreSelector />
		</StoreProvider>
	);
	const result = renderer.getRenderOutput();
	expect(result).toMatchSnapshot();
});
