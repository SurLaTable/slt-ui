import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import StoreList from './StoreList';
import StoreProvider from '../StoreProvider';

test('Render', () => {
	const renderer = new ShallowRenderer();
	renderer.render(
		<StoreProvider>
			<StoreList />
		</StoreProvider>
	);
	const result = renderer.getRenderOutput();
	expect(result).toMatchSnapshot();
});
