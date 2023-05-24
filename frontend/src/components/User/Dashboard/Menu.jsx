import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';

const Menu = ({ isLoading }) => {
	const { user } = useSelector((state) => state.auth);
	const menuItems = [
		{
			id: 1,
			name: 'USDT',
			link: '/wallets',
			value: `$${
				user?.balance ? Number(user?.balance).toFixed(2) : Number(0).toFixed(2)
			}`,
		},
		{
			id: 3,
			name: 'Gemcoin',
			link: '/wallets',
			value: user?.gem_coin
				? Number(user?.gem_coin).toFixed(8)
				: Number(0).toFixed(8),
		},
		{
			id: 6,
			name: 'Withdraw',
			link: '/dashboard',
			value: `$${
				user?.withdrawal_balance
					? Number(user?.withdrawal_balance).toFixed(2)
					: Number(0).toFixed(2)
			}`,
		},
		{
			id: 2,
			name: 'Bonus',
			link: '/dashboard',
			value: `$${
				user?.bonus_balance
					? Number(user?.bonus_balance).toFixed(2)
					: Number(0).toFixed(2)
			}`,
		},
		{
			id: 2,
			name: 'Mining',
			link: '/dashboard',
			value: `$${
				user?.mining_balance
					? Number(user?.mining_balance).toFixed(8)
					: Number(0).toFixed(8)
			}`,
		},
		{ id: 2, name: 'Cash Back', link: '/dashboard', value: '0.00' },
		{ id: 2, name: 'Swap', link: '/dashboard' },
		{ id: 4, name: 'Send', link: '/send' },
		{ id: 5, name: 'Receive', link: '/receive' },
	];

	return (
		<>
			{isLoading ? (
				<div className='flex items-center justify-center w-full h-screen'>
					<FadeLoader color={'#fbbf24'} />
				</div>
			) : (
				<div className='rounded-md '>
					<div className='grid grid-cols-3 gap-6 p-2 '>
						{menuItems.map((item) => (
							<Link to={item.link} key={item.id}>
								<li className='flex flex-col items-center py-4 space-y-2 text-white uppercase rounded-md cursor-pointer bg-[#9BD36A] hover:bg-slate-700'>
									<span c className='text-sm font-bold text-slate-800 '>
										{item.name}
									</span>
									<span className='text-xs text-blue-700'>{item.value}</span>
								</li>
							</Link>
						))}
					</div>
				</div>
			)}
		</>
	);
};

export default Menu;
