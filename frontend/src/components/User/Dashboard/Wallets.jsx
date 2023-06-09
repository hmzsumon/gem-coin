import React from 'react';
import Layout from './Layout/Layout';
import WalletCard01 from '../Wallet01/WalletCard01';

import { useLoadUserQuery } from '../../../features/auth/authApi';
import { FadeLoader } from 'react-spinners';

import WalletUsdt from '../WalletUsdt/WallerUsdt';
import WalletMusd from '../WalletMusd/WallerMusd';
import WalletBusd from '../WalletBusd/WalletBusd';

const Wallets = () => {
	const { data, isLoading } = useLoadUserQuery();
	const { user } = data || {};

	return (
		<Layout>
			{isLoading ? (
				<div className='flex justify-center items-center mt-24 h-[80%]'>
					<FadeLoader color='#fff' />
				</div>
			) : (
				<div className='h-full pb-20'>
					<h1 className='my-4 text-xl font-semibold text-gray-100'>Wallet</h1>
					<div className='space-y-4 '>
						<WalletCard01 user={user} />
						<WalletMusd />
					</div>
				</div>
			)}
		</Layout>
	);
};

export default Wallets;
