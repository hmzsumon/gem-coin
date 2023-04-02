import React from 'react';
import { BsFillGiftFill } from 'react-icons/bs';
import { SiConvertio } from 'react-icons/si';
import { RiCoinsLine } from 'react-icons/ri';
import { FaQuestionCircle, FaCoins, FaHandHoldingUsd } from 'react-icons/fa';
import { FcOnlineSupport } from 'react-icons/fc';
import { HiAcademicCap } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useLoadUserQuery } from '../../../features/auth/authApi';

const Menu = () => {
	const { data, isLoading } = useLoadUserQuery();
	const { user } = data || {};

	const menuItems = [
		{ id: 1, name: 'USDT', link: '/wallets', value: `$${user?.balance}` },
		{
			id: 3,
			name: 'Gemcoin',
			link: '/wallets',
			value: Number(user?.gem_coin).toFixed(8),
		},
		{ id: 6, name: 'Withdraw', link: '/coming-sone', value: '0.00' },
		{ id: 2, name: 'Swap', link: '/coming-sone' },
		{ id: 4, name: 'Send', link: '/send' },
		{ id: 5, name: 'Receive', link: '/receive' },
	];
	return (
		<div className='rounded-md '>
			<div className='grid grid-cols-3 gap-6 p-2 '>
				{menuItems.map((item) => (
					<Link to={item.link} key={item.id}>
						<li className='flex flex-col items-center py-4 space-y-2 text-white uppercase rounded-md cursor-pointer bg-amber-700 hover:bg-slate-700'>
							<span c className='text-sm italic'>
								{item.name}
							</span>
							<span className='text-xs'>{item.value}</span>
						</li>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Menu;
