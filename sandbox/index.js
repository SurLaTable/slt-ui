import React from 'react';
import { render } from 'react-dom';
import { FormControl, InputLabel, Input } from '@sur-la-table/slt-ui';
const app = (
	<FormControl>
		<InputLabel htmlFor="floating-label">FLOATING LABEL</InputLabel>
		<Input id="floating-label" />
	</FormControl>
);
render(app, document.querySelector('body'));
