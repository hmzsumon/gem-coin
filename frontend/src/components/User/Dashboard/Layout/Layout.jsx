import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Topbar from './Topbar';

const darkTheme = createTheme({
	// change the theme bg color to red
	palette: {
		mode: 'dark',
	},
});

const Layout = ({ children }) => {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<div className='pt-2 pb-20 bg-slate-900'>
				<Topbar />
				<div className='px-2 '>{children}</div>
				{/* <Navbar /> */}
			</div>
		</ThemeProvider>
	);
};

export default Layout;
