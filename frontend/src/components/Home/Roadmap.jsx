import React from 'react';

const mapData = [
	{
		id: 1,
		title: 'August 2019 to 2023',
		description:
			'Research & Policy-Making Launching Crypto Coin by forming a new team for People Oriented.',
	},
	{
		id: 2,
		title: 'April 2023',
		description: 'GEMCoin Website presale and app launch',
	},
	{
		id: 3,
		title: 'May 2023',
		description: 'Listing PancakeSwap and other swaping.',
	},
	{
		id: 4,
		title: 'June 2023',
		description: 'Listing CoinMarketCap, CoinGecko and Other.',
	},
	{
		id: 5,
		title: 'July 2023',
		description:
			'Support Mother Wallet and Exchange send, received coin and Mobile app.',
	},
	{
		id: 6,
		title: 'August 2023',
		description:
			'GEMCoin marketing announcement Free Airdrop and Giveaways distribution.',
	},
	{
		id: 7,
		title: 'September 2023',
		description:
			'GEMCoin exchange BTC & USDT Mode of payment in Mother International Money Exchange in Dubai any place. Face to face buy sell and withdraw any currency and Cryptocurrency.',
	},

	{
		id: 8,
		title: 'October 2023',
		description:
			'GEMCoin past all process modified. All Business holder 5 director joning GEM Head office. Polygoan Chain GEMCoin generated.',
	},
	{
		id: 9,
		title: 'November 2023',
		description:
			'GEMCoin partner, marchant, buyer, sole agent, distributor, marketing, meeting and price distribution in Dubai invitation.',
	},
	{
		id: 10,
		title: 'December 2023',
		description: 'Exchange listing Binance, Kucoin, MEXC, & Others.',
	},
];

const Roadmap = () => {
	return (
		<div className='px-4 py-16 md:px-10 '>
			<div>
				<h1 className='text-2xl tracking-wide text-center uppercase'>
					Roadmap
				</h1>
				<h2 className='my-1 text-center '>Cryptoking Timeline</h2>
				<p className='my-4 text-center text-gray-500 '>
					Cryptominded is a curated directory of the best cryptocurrency
					resources. We're slowly transforming the website into the best place
					for befinners to learn about cryptocurrencies
				</p>
			</div>

			<div className='grid gap-10 md:grid-cols-5 '>
				{mapData.map((item) => (
					<div key={item.id}>
						<div className='my-4 '>
							<div className='flex items-center justify-center my-4 '>
								<div className='flex items-center justify-center w-20 h-20 rounded-full border'>
									<span className='text-2xl font-semibold text-slate-500'>
										{item.id}
									</span>
								</div>
							</div>
							<div className='ml-4'>
								<h3 className='text-lg font-semibold text-slate-500'>
									{item.title}
								</h3>
								<p className='mt-1 text-sm text-gray-500'>{item.description}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Roadmap;
