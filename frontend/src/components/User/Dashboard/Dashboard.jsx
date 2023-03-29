import React from 'react';
import Carousel from './Carousel';
import Layout from './Layout/Layout';
import Menu from './Menu';
import Notice from './Notice';
import PriceList from './PriceList';

import { useGetPricesQuery } from '../../../features/prices/priceApi';
const Dashboard = () => {
	const { data } = useGetPricesQuery();
	const { currentPrice } = data || {};

	return (
		<Layout>
			<div className='h-full pb-20 space-y-2 '>
				<Notice />
				<Menu />
				<Carousel />
				<PriceList
					title={'PXC/USDX'}
					chance={'-19%'}
					bgColor='bg-red-500'
					lastPrice={currentPrice?.price}
				/>
				<PriceList
					title={'BDC/USDX'}
					chance={'+00%'}
					bgColor='bg-green-500'
					lastPrice={'0.00000000'}
				/>
				<PriceList
					title={'USDT/USDX'}
					chance={'+02%'}
					bgColor='bg-green-500'
					lastPrice={'1.00000000'}
				/>
			</div>
		</Layout>
	);
};

export default Dashboard;
