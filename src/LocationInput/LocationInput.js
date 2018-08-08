import React from 'react';
import TextField from '@material-ui/core/TextField';

export let LocationField = (props) => {
	return <TextField
		label="City, State or Zip Code"
		placeholder="Seattle, Wa"
		margin="normal"
	/>;
};
