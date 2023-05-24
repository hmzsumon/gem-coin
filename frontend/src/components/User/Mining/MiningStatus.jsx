import React from 'react';
import { useGetMiningQuery } from '../../../features/mining/miningApi';

const MiningStatus = () => {
	const { data } = useGetMiningQuery();
	const { mining } = data || {};

	return (
		<div className='rounded-md bg-slate-800'>
			<div className='flex items-center justify-between px-4 py-2 mx-2 my-4 shadow-md'>
				<div className='flex items-center space-x-2'>
					<div>
						<p className='m-0 text-xl font-semibold text-gray-100 '>
							GEMCOIN (GMC) <br />{' '}
							<span className='text-xs '>Daily Mining Reward</span>
						</p>
					</div>
				</div>
				<div className='text-white '>
					{mining?.mining_profit ? (
						<p>{Number(mining?.mining_profit).toFixed(8)}$</p>
					) : (
						<p>0.00$</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default MiningStatus;
