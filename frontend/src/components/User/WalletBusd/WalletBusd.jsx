import React from 'react';
import { useSelector } from 'react-redux';
import WalletButton from '../../../global/WalletButton';

const WalletBusd = () => {
	const { user } = useSelector((state) => state.auth);
	return (
		<div className='p-4 space-y-4 text-white rounded-md bg-slate-800'>
			<p className='text-xs font-semibold text-center uppercase '>
				BUSD <span className='capitalize '>(Binance USD)</span>
			</p>
			<div className='flex items-center justify-center space-x-1 text-green-500'>
				<p className='text-xs font-semibold '>
					${user?.balance ? Number(0).toFixed(2) : Number(0).toFixed(2)}
				</p>
			</div>
			<div className='grid grid-cols-3 gap-4 text-white'>
				<WalletButton text={'Buy BUSD'} bgColor={'bg-amber-400 '} />
				<WalletButton text={'Send'} />
				<WalletButton text={'Receive'} />
			</div>
		</div>
	);
};

export default WalletBusd;
