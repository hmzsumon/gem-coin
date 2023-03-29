import React from 'react';
import { useSelector } from 'react-redux';

const WalletCard04 = () => {
	const { user } = useSelector((state) => state.auth);
	return (
		<div className='p-4 space-y-4 text-center text-white rounded-md bg-slate-800'>
			<p className='text-xs font-semibold '>GEM Token</p>
			<h1 className='italic text-white '>
				{user?.bonus_balance
					? Number(user?.bonus_balance).toFixed(2)
					: Number(0).toFixed(2)}
				$
			</h1>
		</div>
	);
};

export default WalletCard04;
