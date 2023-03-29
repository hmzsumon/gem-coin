import React from 'react';
import { NavLink } from 'react-router-dom';
import { useGetMiningQuery } from '../../../features/mining/miningApi';

const WalletCard03 = () => {
	const { data } = useGetMiningQuery();
	const { mining } = data || {};
	return (
		<div className='p-4 space-y-4 rounded-md bg-slate-800'>
			<span className='text-xs font-semibold text-slate-500'>
				Bitcoin Mining
			</span>
			<div className='flex items-center space-x-3'>
				<h1 className='italic '>
					{data && data.mining
						? Number(data.mining.mining_profit).toFixed(8)
						: Number(0).toFixed(8)}
					$
				</h1>
				{/* <span className='text-xs font-semibold text-slate-500'>
					=$
					{data && data.mining
						? Number(mining?.mining_investment).toFixed(2)
						: Number(0).toFixed(2)}
				</span> */}
			</div>
			<div className='grid grid-cols-2 gap-4'>
				<button className='px-3 py-2 italic font-bold text-gray-800 bg-yellow-400 rounded-sm'>
					Withdraw
				</button>
				<NavLink
					to='/convert'
					className='px-3 py-2 italic font-bold text-center text-gray-400 rounded-sm bg-slate-600'
				>
					Convert
				</NavLink>
			</div>
		</div>
	);
};

export default WalletCard03;
