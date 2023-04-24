import React from 'react';

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
				<Menu />
				{/* <Carousel /> */}
				<PriceList
					title={'Gemcoin'}
					chance={'99%'}
					bgColor='bg-green-500'
					lastPrice={currentPrice?.price}
				/>
				<div className='items-center grid-cols-5 gap-6 md:grid'>
					<a
						href='https://www.facebook.coğm/profile.php?id=100091058298913'
						target='_blank'
						rel='noreferrer'
						className='flex items-center justify-center w-full h-12 text-white bg-blue-600 rounded-md hover:bg-blue-700'
					>
						Facebook
					</a>

					<a
						href='https://instagram.com/gemcoin_gmc'
						target='_blank'
						rel='noreferrer'
						className='flex items-center justify-center w-full h-12 mt-2 text-white bg-pink-600 rounded-md hover:bg-pink-700'
					>
						Instagram
					</a>

					<a
						href='https://t.me/gemcoinoffical'
						target='_blank'
						rel='noreferrer'
						className='flex items-center justify-center w-full h-12 mt-2 text-white bg-blue-500 rounded-md hover:bg-blue-600'
					>
						Telegram
					</a>

					<a
						href='https://twitter.com/Gemcoinoffical'
						target='_blank'
						rel='noreferrer'
						className='flex items-center justify-center w-full h-12 mt-2 text-white bg-blue-400 rounded-md hover:bg-blue-500'
					>
						Twitter
					</a>

					<a
						href='https://youtube.com/@GEMCOINcoin'
						target='_blank'
						rel='noreferrer'
						className='flex items-center justify-center w-full h-12 mt-2 text-white bg-red-600 rounded-md hover:bg-red-700'
					>
						Youtube
					</a>
				</div>
			</div>
		</Layout>
	);
};

export default Dashboard;
