import React from 'react';
import Layout from './Layout/Layout';
import WalletCard01 from '../Wallet01/WalletCard01';
import WalletCard02 from '../Wallet02/WalletCard02';
import WalletCard03 from '../Wallet03/WalletCard03';
import WalletCard04 from '../Wallet04/WalletCard04';
import { useLoadUserQuery } from '../../../features/auth/authApi';
import { FadeLoader } from 'react-spinners';
import Musd from '../Musd/Musd';
import Commission from '../Comission/Comission';
import Withdraw from '../Withdraw/Withdraw';
import Invest from '../Invest/Invest';

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
					<h1 className='my-4 text-xl font-semibold text-gray-100'>Wallets</h1>
					<div className='space-y-4 '>
						<WalletCard01 user={user} />
						<div className=' grid grid-cols-2 md:grid-cols-3 gap-4'>
							<WalletCard02 />
							{/* <WalletCard03 /> */}
							<Musd />
							<WalletCard04 />
							<Commission />
							<Withdraw />
							<Invest />
						</div>
					</div>
				</div>
			)}
		</Layout>
	);
};

export default Wallets;
