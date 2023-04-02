import React from 'react';
import { NavLink } from 'react-router-dom';

const WalletCard01 = ({ user }) => {
	return (
		<div className='p-4 space-y-4 text-white rounded-md bg-slate-800'>
			<p className='text-xs font-semibold text-center '>Gemcoin (Gem)</p>
			<div className='flex items-center justify-center space-x-1 text-green-500'>
				<h1 className='italic '>
					{user?.gem_coin
						? Number(user?.gem_coin).toFixed(8)
						: Number(0).toFixed(8)}
				</h1>
				<p className='text-xs font-semibold '>
					=$
					{user?.balance
						? Number(user?.balance).toFixed(2)
						: Number(0).toFixed(2)}
				</p>
			</div>
			<div className='grid grid-cols-3 gap-4 text-white'>
				<NavLink
					to='/buy-gem'
					className='w-full px-3 py-2 italic font-bold text-center rounded-sm bg-amber-400 '
				>
					Buy Gem
				</NavLink>
				<NavLink
					to='/send'
					className='w-full px-3 py-2 italic font-bold text-center rounded-sm bg-slate-600'
				>
					Send
				</NavLink>
				<NavLink
					to='/receive'
					className='w-full px-3 py-2 italic font-bold text-center rounded-sm bg-slate-600'
				>
					Receive
				</NavLink>
			</div>
		</div>
	);
};

export default WalletCard01;
