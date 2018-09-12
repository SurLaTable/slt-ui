import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ClassDateTimePicker from './ClassDateTimePicker';
import StoreProvider from '../StoreProvider';

test('Render', () => {
	const renderer = new ShallowRenderer();
	renderer.render(
		<StoreProvider>
			<ClassDateTimePicker />
		</StoreProvider>
	);
	const result = renderer.getRenderOutput();
	expect(result).toMatchSnapshot();
});
