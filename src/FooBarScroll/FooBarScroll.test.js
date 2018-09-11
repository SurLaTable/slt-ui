import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import FooBarScroll from './FooBarScroll';
import StoreProvider from '../StoreProvider';

test('Render', () => {
	const renderer = new ShallowRenderer();
	renderer.render(
		<StoreProvider>
			<FooBarScroll />
		</StoreProvider>
	);
	const result = renderer.getRenderOutput();
	expect(result).toMatchSnapshot();
});
