import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import DateTimePicker from './DateTimePicker';
import StoreProvider from '../StoreProvider';

test('Render', () => {
	const renderer = new ShallowRenderer();
	renderer.render(
		<StoreProvider>
			<DateTimePicker />
		</StoreProvider>
	);
	const result = renderer.getRenderOutput();
	expect(result).toMatchSnapshot();
});
