import React, { useEffect } from 'react';
import { useState } from 'react';
import { SiConvertio } from 'react-icons/si';
import { useGetPricesQuery } from '../../features/prices/priceApi';
import { FadeLoader } from 'react-spinners';
import { NavLink } from 'react-router-dom';

const Everything = () => {
	const { data, isLoading } = useGetPricesQuery();
	const { currentPrice } = data || {};
	const [coin, setCoin] = useState(1);
	const [usdt, setUsdt] = useState(0);

	const handleChange = (e) => {
		setCoin(e.target.value);
		setUsdt(e.target.value * currentPrice?.price);
	};

	useEffect(() => {
		if (!isLoading) {
			setUsdt(coin * currentPrice?.price);
		}
	}, [coin, currentPrice?.price, isLoading]);

	return (
		<>
			{isLoading ? (
				<div className='flex justify-center items-center mt-24 h-[80%]'>
					<FadeLoader color='#fff' />
				</div>
			) : (
				<div className='bg-[#4B4C55] text-white'>
					<div className='px-4 py-16 md:mx-10 '>
						<div className='grid grid-cols-12 '>
							<div className='col-span-12 gap-10 md:pr-14 md:col-span-8 '>
								<div className='space-y-4 '>
									<h1 className='text-4xl font-bold tracking-widest '>
										EVERYTHING <br /> YOU NEED TO KNOW
									</h1>
									<p className='text-sm tracking-wide'>
										GEMCoin and Cryptocurrency Calculator determines the
										exchange rates between major fiat currencies and
										cryptocurrencies – including BTC, BCH, ETH and XRP to USD,
										EUR, GBP, IDR and NGN – with up to six decimal places of
										accuracy.
									</p>
								</div>
								<div className='my-10 space-y-3 '>
									<div className='flex items-center'>
										<input
											defaultChecked
											id='disabled-radio-2'
											type='radio'
											defaultValue='Initial value'
											name='disabled-radio'
											className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
										/>
										<label
											htmlFor='disabled-radio-2'
											className='ml-2 text-sm font-medium '
										>
											Conversion rates are based on GEMCoin Price Index and the
											price indices of other digital assets.
										</label>
									</div>
									<div className='flex items-center'>
										<input
											id='disabled-radio-2'
											type='radio'
											defaultValue='Initial value'
											name='disabled-radio'
											className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
										/>
										<label
											htmlFor='disabled-radio-2'
											className='ml-2 text-sm font-medium '
										>
											Conversion rates are based on GEMCoin Price Index and the
											price indices of other digital assets.
										</label>
									</div>
								</div>
							</div>

							<div className='col-span-12 p-4 bg-white rounded-md md:p-8 md:col-span-4'>
								<div>
									<h1 className=' text-[#f1a619] text-3xl font-bold tracking-widest'>
										GEMCoin to
									</h1>
									<h2 className='text-2xl text-gray-700 '>
										CURRENCY CALCULATOR
									</h2>
								</div>
								<div className='my-4 space-y-3'>
									<div className='flex space-x-2'>
										<input
											type='text'
											id='default-input'
											value={coin}
											onChange={handleChange}
											className='block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-md dark:placeholder-gray-400'
										/>
										<select
											id='countries_disabled'
											className='block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-md '
										>
											<option selected>GEMCoin (GEM)</option>
										</select>
									</div>
									<div className='flex space-x-2'>
										<input
											type='text'
											id='default-input'
											value={usdt}
											className='block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-md dark:placeholder-gray-400'
										/>
										<select
											id='countries_disabled'
											className='block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-md '
										>
											<option selected>USDT</option>
										</select>
									</div>
								</div>

								<NavLink
									to='/buy-gem'
									className=' bg-[#f1a619] uppercase px-3 py-1 rounded-sm'
								>
									<SiConvertio className='inline-block mr-2' />
									Buy GEMC
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Everything;
