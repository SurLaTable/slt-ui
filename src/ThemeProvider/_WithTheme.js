//This is docs only
import React from 'react';
import { Button } from '@material-ui/core';

const WithTheme = (props) => (
	<div>
		<Button
			color="default"
			variant="text"
		>
			default text
		</Button>
		<Button
			color="primary"
			variant="text"
		>
			primary text
		</Button>
		<Button
			color="secondary"
			variant="text"
		>
			secondary text
		</Button>
		<br />

		<Button
			color="default"
			variant="flat"
		>
			default flat
		</Button>
		<Button
			color="primary"
			variant="flat"
		>
			primary flat
		</Button>
		<Button
			color="secondary"
			variant="flat"
		>
			secondary flat
		</Button>
		<br />
		<Button
			color="default"
			variant="outlined"
		>
			default outlined
		</Button>
		<Button
			color="primary"
			variant="outlined"
		>
			primary outlined
		</Button>
		<Button
			color="secondary"
			variant="outlined"
		>
			secondary outlined
		</Button>
		<br />
		<Button
			color="default"
			variant="contained"
		>
			default contained
		</Button>
		<Button
			color="primary"
			variant="contained"
		>
			primary contained
		</Button>
		<Button
			color="secondary"
			variant="contained"
		>
			secondary contained
		</Button>
		<br />
		<Button
			color="default"
			variant="raised"
		>
			default raised
		</Button>
		<Button
			color="primary"
			variant="raised"
		>
			primary raised
		</Button>
		<Button
			color="secondary"
			variant="raised"
		>
			secondary raised
		</Button>
	</div>
);

export default WithTheme;
