import React from 'react';
import { useGetPricesQuery } from '../../features/prices/priceApi';
import Layout from '../Dashboard/Layout/Layout';
import FadeLoader from 'react-spinners/FadeLoader';
import MyCart from './MyCart';
import BuySell from './BuySell';

const Trade = () => {
	const { data, isLoading } = useGetPricesQuery();
	const { prices } = data || [];
	const { currentPrice, lastPrice } = data || {};
	return (
		<Layout>
			<div className='h-screen'>
				<div className='w-11/12 mx-auto md:w-1/2 '>
					{isLoading ? (
						<div className='flex items-center justify-center mt-44 '>
							<FadeLoader color={'#fbbf24'} />
						</div>
					) : (
						<div className='p-2 bg-slate-800'>
							<MyCart
								prices={prices}
								currentPrice={currentPrice}
								lastPrice={lastPrice}
							/>
							<BuySell />
						</div>
					)}
				</div>
			</div>
		</Layout>
	);
};

export default Trade;
