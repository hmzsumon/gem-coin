import React from 'react';
import SecurityIcon from '../../assets/images/icons/security.png';
import MobileIcon from '../../assets/images/icons/mobile-app.png';
import WalletIcon from '../../assets/images/icons/wallet.png';
import InsuranceIcon from '../../assets/images/icons/insurance.png';
import ExchangeIcon from '../../assets/images/icons/exchange.png';
import RecurringIcon from '../../assets/images/icons/recurring.png';
import ImageBank from '../../assets/images/page/gembank.png';
import Feature from './Feature';

const items = [
	{
		id: 1,
		title: 'Fast Transaction',
		description:
			"Buy GEMCoin to Stake or Store in Decentralize Apps and It's gives you Asset Security",
		icon: SecurityIcon,
	},
	{
		id: 2,
		title: 'Mobile App',
		description:
			'Easily and securely make payment for the packages you desire.',
		icon: MobileIcon,
	},
	{
		id: 3,
		title: 'SECURE WALLET',
		description: 'Store all your digital assets securely.',
		icon: WalletIcon,
	},
	{
		id: 4,
		title: 'Insurance',
		description:
			'We develop a Big Community to Increase Coin Price and you can gain quickly with this Coin.',
		icon: InsuranceIcon,
	},
	{
		id: 5,
		title: 'INSTANT EXCHANGE',
		description:
			"GEMCoin is a High-Frequency Trading Industry that's allow you buy-sell and Trade Instantly.",
		icon: ExchangeIcon,
	},
	{
		id: 6,
		title: 'RECURRING BUYING',
		description: 'Set-up how you want to purchase  cryptocurrency you like.',
		icon: RecurringIcon,
	},
];

const Features = () => {
	return (
		<div className='px-4 py-16 md:px-10 bg-slate-200'>
			<div>
				<h1 className='text-2xl font-semibold tracking-wide text-center '>
					WHY CHOOSE GEMCoin
				</h1>
				<p className='my-2 text-center text-gray-500 '>
					GEMCoin develop under Binance Smart Chain that a Strong Network in the
					Crypto World and makes it Easily usable P2P System
				</p>
			</div>

			<div className='my-10 '>
				<div className='grid gap-10 md:grid-cols-3 '>
					{items.map((item) => (
						<div key={item.id}>
							<Feature item={item} />
						</div>
					))}
				</div>
			</div>

			<div>
				<img src={ImageBank} alt='' />
			</div>
		</div>
	);
};

export default Features;
