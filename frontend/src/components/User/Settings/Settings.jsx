import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../Dashboard/Layout/Layout';
import { BsArrowLeftSquare } from 'react-icons/bs';

const Settings = () => {
	return (
		<Layout>
			<div className='h-screen'>
				<div className='flex items-center justify-center w-11/12 h-[60%] mx-auto p-2 md:w-1/2 rounded bg-slate-800 mt-10'>
					<div className='grid gap-4 md:grid-cols-2'>
						<NavLink
							to='/profile'
							className='flex px-2 py-1 text-center text-white bg-green-500 '
						>
							Profile Settings
						</NavLink>

						<NavLink
							to='/security'
							className='flex px-2 py-1 text-center text-white bg-orange-500'
						>
							Security Settings
						</NavLink>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Settings;
