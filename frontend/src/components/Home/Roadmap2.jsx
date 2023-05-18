import React from 'react';

const data = [
	{
		id: 1,
		title: 'August 2019 to 2023',
		description: [
			'Research & Policy-Making Launching Crypto Coin by forming a new team for People Oriented.  ',
		],
	},
	{
		id: 2,
		title: 'March 2023',
		description: [
			'GEMCOIN Media Chain formed a team, Generated Coin called GEMCOIN.',
			'Website, Account Opening presale, Investment, mining and other plans are done here.',
		],
	},
	{
		id: 3,
		title: 'April 2023',
		description: [
			'GEMCOIN Prices Upgraded, Direct Wallet Connect GEMCOIN Swap Opening & Others Way Swap Ready. Listing CoinMarketCap, CoinGecko, MotherCoinMarket & Others Platform.',
		],
	},
	{
		id: 4,
		title: 'May & June 2023 ',
		description: [
			'GEMCOIN Marketing. All social site & Google play store. Billboard, Banner, Video Clip etc.',
		],
	},
	{
		id: 5,
		title: 'July 2023',
		description: [
			'Support Mother Wallet & Mother Exchange Send Received coin & Mobile App. ',
		],
	},
	{
		id: 6,
		title: 'August 2023',
		description: [
			'GEMCOIN Wallet Marketing, Announcement Free Airdrop & Giveaways Distribution. ',
		],
	},
	{
		id: 7,
		title: 'September 2023',
		description: [
			' GEMCOIN Face to Face Buy Sell and Withdraw any Currency & Cryptocurrencys Exchange. ',
		],
	},
	{
		id: 8,
		title: 'October 2023',
		description: [
			'GEMCOIN All Process Modified. All Business & Investor, GEMCOIN Holder 5 Director Selected & Joining GEMCOIN Head Office in Dubai. ',
		],
	},
	{
		id: 9,
		title: 'November 2023',
		description: [
			'GEMCoin Partner, Merchant Buyer, Sole Agent, Distributor, Marketing, Meeting & Price Distribution in Dubai Invitation  ',
		],
	},
	{
		id: 10,
		title: 'December 2023',
		description: [
			'Exchange Listing Mother, Binance, KuCoin, MEXC and World top 10 Exchange. ',
			'Our Target is 1 million lakh users. GemCoin will be exclusively listed and prepared for buy-sale as soon as the target is fulfilled.',
		],
	},
];

const Roadmap2 = () => {
	return (
		<div className='px-4 py-10 text-white bg-gray-800 md:px-16'>
			<h1 className='my-4 tracking-wider md:text-xl'>GEMCOIN Roadmap</h1>
			<div className='grid md:grid-cols-5'>
				{data.map((item) => (
					<div key={item.id} className='p-4 border '>
						<h1 className='text-2xl font-bold'>{item.title}</h1>
						<ul className='p-2 '>
							{item.description.map((desc) => (
								<li key={desc} className='m-1 text-sm tracking-wide list-disc '>
									{desc}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
};

export default Roadmap2;
