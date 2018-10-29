import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const THEME = createMuiTheme({
	typography: {
		fontFamily: "mreavessans, 'Jaldi', Arial, Helvetica, sans-serif"
	},
	overrides: {
		MuiButton: {
			root: {
				borderRadius: 0,
				marginLeft: '2px',
				marginRight: '2px'
			}
		},
		MuiPaper: {
			root: {
				borderRadius: 0
			},
			rounded: {
				borderRadius: 0
			}
		}
	},

	palette: {
		common: {
			black: '#444'
		},
		primary: {
			main: '#444'
		},
		secondary: {
			main: '#E57D24',
			contrastText: 'white'
		}
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
