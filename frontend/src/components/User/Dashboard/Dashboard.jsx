import React from 'react';

import Layout from './Layout/Layout';
import Menu from './Menu';

import PriceList from './PriceList';

import { useGetPricesQuery } from '../../../features/prices/priceApi';
const Dashboard = () => {
	const { data } = useGetPricesQuery();
	const { currentPrice } = data || {};

	return (
		<Layout>
			<div className='h-full pb-20 space-y-2 '>
				<Menu />
				{/* <Carousel /> */}
				<PriceList
					title={'Gemcoin'}
					chance={'89%'}
					bgColor='bg-green-500'
					lastPrice={currentPrice?.price}
				/>
			</div>
		</Layout>
	);
};

export default Dashboard;
