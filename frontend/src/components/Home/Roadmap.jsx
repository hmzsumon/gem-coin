import React from 'react';

const data = [
	{
		id: 1,
		title: 'August 2019 to Jan 2023',
		description: [
			'Research & Policy-Making Launching Crypto Coin by forming a new team for People Oriented. ',
			'GEMCOIN Team readyto Action GEMCOIN Generated.',
		],
	},
	{
		id: 2,
		title: 'March 2023',
		description: [
			'GEMCOIN MEDIA CHAIN formed a team, Generated Coin called GEMCOIN (GMC).',
			'Website, Account Opening presale, Investment, mining and other plans are done here.',
		],
	},
	{
		id: 3,
		title: 'April 2023',
		description: [
			'GEMCOIN (GMC) Prices Upgraded, Smart Contact program create. GMC BNB Smart Chain token &amp; Polygon token Generated. Direct Wallet Connect. Pancakaswap listing, GMC Swap Opening &amp; Others Way Swap Ready.',
		],
	},
	{
		id: 4,
		title: 'May & June 2023 ',
		description: [
			'GEMCOIN (GMC) Wallet Launching. GMC Marketing. All social site &amp; Google play store. Billboard, Banner, Video Clip etc.',
			'Listing CoinMarketCap, CoinGecko, MotherCoinMarket &amp; Others listing Platform.',
		],
	},
	{
		id: 5,
		title: 'July 2023',
		description: [
			'GEMCOIN (GMC) Support Mother Wallet &amp; Mother Exchange &amp; MotherCoinMarket Send Received Coin &amp; Mobile App. ',
			'GEMCOIN (GMC) Support MotherNFT Marketplace. MEDIA NFTs Launching.',
		],
	},
	{
		id: 6,
		title: 'August 2023',
		description: [
			'GEMCOIN (GMC) Wallet Marketing, Announcement Free Airdrop &amp; Giveaways Distribution.',
		],
	},
	{
		id: 7,
		title: 'September 2023',
		description: [
			' GMC Face to Face Buy Sell and Withdraw any Currency &amp; Cryptocurrencys Exchange. C2C Platform. Direct Clint to Counter Base.',
		],
	},
	{
		id: 8,
		title: 'October 2023',
		description: [
			'GEMCOIN (GMC) All Process Modified. All Business &amp; Investor, Cashback, FDR GMC Holder 5 Director Selected &amp;Joining Head Office in Dubai. ',
		],
	},
	{
		id: 9,
		title: 'November 2023',
		description: [
			'GMC Partner, Merchant Buyer, Sole Agent, Distributor, Marketing, Meeting &amp; Price Distribution in Dubai Invitation.',
			'GMC Others Platform getup Ready in License &amp; Others.',
		],
	},
	{
		id: 10,
		title: 'December 2023',
		description: [
			'GEMCOIN (GMC) Exchange Listing Mother, Binance, KuCoin, MEXC &amp; World top 10 Exchange. ',
			'Our Target is 3 Million Mining Users. GMC Will be exclusively listed and prepared for buy-sale as soon as the target is fulfilled.',
		],
	},
];

const Roadmap = () => {
	return (
		<div className='px-4 py-16 bg-white md:px-10 '>
			<div>
				<h1 className='text-2xl tracking-wide text-center text-gray-800 uppercase'>
					Roadmap
				</h1>
				<h2 className='my-1 text-center text-gray-800 '>
					GEMCOIN MEDIA CHAIN (GMC) ROADMAP
				</h2>
				{/* <p className='my-4 text-center text-gray-800 '>
					Cryptominded is a curated directory of the best cryptocurrency
					resources. We're slowly transforming the website into the best place
					for befinners to learn about cryptocurrencies
				</p> */}
			</div>

			<div className='grid gap-10 md:grid-cols-5 '>
				{data.map((item) => (
					<div key={item.id}>
						<div className='my-4 '>
							<div className='flex items-center justify-center my-4'>
								<div className='flex items-center justify-center w-20 h-20 duration-300 border rounded-full cursor-pointer hover:bg-yellow-400'>
									<span className='text-4xl font-semibold text-gray-500 cursor-pointer '>
										{item.id}
									</span>
								</div>
							</div>
							<div className='ml-4'>
								<h3 className='text-lg font-semibold text-gray-800'>
									{item.title}
								</h3>
								<div className='mt-1 text-sm text-gray-800'>
									{item.description.map((item) => (
										<li>{item}</li>
									))}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Roadmap;
