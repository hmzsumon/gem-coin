import React from 'react';
import { NavLink } from 'react-router-dom';

const WalletCard01 = ({ user }) => {
	return (
		<div className='p-4 space-y-4 rounded-md text-white bg-slate-800'>
			<p className='text-xs text-center font-semibold uppercase '>Gem Coin</p>
			<div className='flex items-center justify-center text-white space-x-1'>
				<h1 className='italic '>
					{user?.pxc_balance ? Number(0).toFixed(8) : Number(0).toFixed(8)}
				</h1>
				<p className='text-xs font-semibold '>
					=$
					{user?.balance ? Number(0).toFixed(2) : Number(0).toFixed(2)}
				</p>
			</div>
			<div className='grid grid-cols-3 text-white gap-4'>
				<NavLink
					to='/buy-pxc'
					className='w-full px-3 py-2 italic font-bold text-center  rounded-sm bg-slate-600'
				>
					Buy Gem
				</NavLink>
				<NavLink
					to='/send'
					className='w-full px-3 py-2 italic font-bold text-center  rounded-sm bg-slate-600'
				>
					Send
				</NavLink>
				<NavLink
					to='/receive'
					className='w-full px-3 py-2 italic font-bold text-center  rounded-sm bg-slate-600'
				>
					Receive
				</NavLink>
			</div>
		</div>
	);
};

export default WalletCard01;
