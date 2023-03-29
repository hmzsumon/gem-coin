import React from 'react';

import { useGetUsdxDetailsQuery } from '../../../features/usdx/usdxApi';

const Withdraw = () => {
	const { data } = useGetUsdxDetailsQuery();
	const { usdx } = data || {};
	return (
		<div className='p-4 space-y-4 text-center rounded-md text-white bg-slate-800'>
			<p className='text-xs  font-semibold '>Withdraw</p>
			<h1 className='italic  text-white '>
				{usdx?.usdx_balance ? Number(0).toFixed(2) : Number(0).toFixed(2)}$
			</h1>
		</div>
	);
};

export default Withdraw;
