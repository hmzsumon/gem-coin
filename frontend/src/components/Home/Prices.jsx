import React from 'react';
import Image1 from '../../assets/images/page/cryptoprices.jpg';

const Prices = () => {
	const priceData = [
		{
			id: 1,
			symbol: 'GEM',
			name: 'GEMCoin',
			usd: '20',
			change24h: 8.63,
			change7d: 2.9,
		},
		{
			id: 2,
			symbol: 'BTC',
			name: 'Bitcoin',
			usd: '11,703',
			change24h: 8.63,
			change7d: 2.9,
		},
		{
			id: 3,
			symbol: 'ETH',
			name: 'Ethereum',
			usd: '1,000',
			change24h: 12.63,
			change7d: 8.19,
		},
		{
			id: 4,
			symbol: 'XRP',
			name: 'Ripple',
			usd: '1.375',
			change24h: -2.14,
			change7d: -0.63,
		},
		{
			id: 5,
			symbol: 'LTC',
			name: 'Litecoin',
			usd: '185.8',
			change24h: 4.89,
			change7d: -1.31,
		},
		{
			id: 6,
			symbol: 'XMR',
			name: 'Monero',
			usd: '328.8',
			change24h: -5.98,
			change7d: 1.15,
		},
	];
	return (
		<div className=' px-2 md:px-10 py-16  bg-[#f7f7f7] '>
			<div className='space-y-4 '>
				<h1 className='text-2xl font-medium tracking-wide text-center '>
					CRYPTOCURRENCY PRICES
				</h1>
				<p className='text-sm tracking-wider text-center text-gray-500 '>
					The GEMCoin ecosystem at a glance. Any of our service with free test
					credits or actual Bitcoins.
				</p>
			</div>

			<div className='my-14 '>
				<div className='border '>
					<div className='grid grid-cols-5 py-1 text-xs text-white list-none md:text-sm bg-slate-800 '>
						<li className='text-center '>Symbol</li>
						<li className='md:ml-20 '>Name</li>
						<li className='md:ml-20'>USD</li>
						<li className='md:ml-20'>Change 24h</li>
						<li className='md:ml-24'>Change 7d</li>
					</div>
					{priceData.map((item) => (
						<div key={item.id}>
							<div className='grid grid-cols-5 py-1 text-xs list-none md:text-sm text-slate-600 '>
								<li className='font-bold text-center '>{item.symbol}</li>
								<li className='md:ml-20 '>{item.name}</li>
								<li className='md:ml-20'>{item.usd}</li>
								<li
									className={`md:ml-20 ${
										item.change24h > 0 ? 'text-green-500' : 'text-red-500'
									}`}
								>
									{item.change24h}%
								</li>
								<li
									className={`md:ml-24 ${
										item.change7d > 0 ? 'text-green-500' : 'text-red-500'
									}`}
								>
									{item.change7d}%
								</li>
							</div>
						</div>
					))}
				</div>
				<div>
					<img src={Image1} alt='' style={{ width: '2.5rem' }} />
				</div>
			</div>
		</div>
	);
};
export default Prices;
