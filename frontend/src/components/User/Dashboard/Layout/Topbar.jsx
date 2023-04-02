import React from 'react';
import SideNave from '../SideNave';
import logo from '../../../../assets/images/logo-white.png';
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
							<img src={logo} alt='logo' className='w-14' />
						</Link>
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
