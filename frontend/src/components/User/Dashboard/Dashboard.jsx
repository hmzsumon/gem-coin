import React from 'react';
import Layout from './Layout/Layout';
import Menu from './Menu';

import PriceList from './PriceList';
import { useGetPricesQuery } from '../../../features/prices/priceApi';
import { useLoadUserQuery } from '../../../features/auth/authApi';
import { FadeLoader } from 'react-spinners';
const Dashboard = () => {
	const { data, isLoading } = useLoadUserQuery();
	const { user } = data || {};
	const { data: priceData } = useGetPricesQuery();
	const { currentPrice } = priceData || {};

	return (
		<Layout>
			{isLoading && user?.balance !== 'undefine' ? (
				<div className='flex items-center justify-center w-full h-screen'>
					<FadeLoader color={'#fbbf24'} />
				</div>
			) : (
				<div className='h-full pb-20 space-y-2 '>
					<Menu user={user} isLoading={isLoading} />
					{/* <Carousel /> */}
					<PriceList
						title={'Gemcoin'}
						chance={'89%'}
						bgColor='bg-green-500'
						lastPrice={currentPrice?.price}
					/>
				</div>
			)}
		</Layout>
	);
};

export default Dashboard;
