import React from 'react';
// import Navbar from './Navbar';
import Topbar from './Topbar';

const Layout = ({ children }) => {
	return (
		<div className='pt-2 pb-20 bg-slate-900'>
			<Topbar />
			<div className='px-2 '>{children}</div>
			{/* <Navbar /> */}
		</div>
	);
};

export default Layout;
