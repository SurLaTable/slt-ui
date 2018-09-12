import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import StoreProvider from './StoreProvider';

test('Render', () => {
	const renderer = new ShallowRenderer();
	renderer.render(<StoreProvider />);
	const result = renderer.getRenderOutput();
	expect(result).toMatchSnapshot();
});
