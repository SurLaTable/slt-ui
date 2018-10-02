import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const THEME = createMuiTheme({
	typography: {
		fontFamily: "mreavessans, 'Jaldi', Arial, Helvetica, sans-serif"
	}
});

const ThemeProvider = (props) => (
	<MuiThemeProvider theme={THEME}>
		<>{props.children}</>
	</MuiThemeProvider>
);

ThemeProvider.propTypes = {
	children: PropTypes.node
};

export default ThemeProvider;
