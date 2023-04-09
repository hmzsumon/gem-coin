import React from 'react';
import SideNave from '../SideNave';
import logo from '../../../../assets/images/logo-blue.png';
import { BsBellFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Topbar = () => {
	return (
		<div className='flex flex-col px-4 py-4 mb-4 space-y-6 border-b border-slate-700'>
			<div className='flex items-center justify-between'>
				<div className='flex '>
					<SideNave />
					<div className='flex items-center'>
						<Link to='/'>
							<img src={logo} alt='logo' className='w-8' />
						</Link>
						<h1 className='ml-2 text-sm font-bold text-gray-100 uppercase md:text-xl'>
							Gmc
						</h1>
					</div>
				</div>
				<div>
					<BsBellFill className='text-xl text-gray-100' />
				</div>
			</div>
		</div>
	);
};

export default Topbar;
