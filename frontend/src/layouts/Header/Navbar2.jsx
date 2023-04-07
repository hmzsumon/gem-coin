/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from 'react';
import Logo from '../../assets/images/logo-blue.png';
import LogoWhait from '../../assets/images/logo-white.png';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const navItems = [
	{
		id: 1,
		title: 'Home',
		path: '/',
	},
	{
		id: 2,
		title: 'About',
		path: '/about',
	},

	{
		id: 3,
		title: 'Features',
		path: '/features',
	},
	{
		id: 4,
		title: 'Distribution',
		path: '/token',
	},
	{
		id: 6,
		title: 'Roadmap',
		path: '/roadmap',
	},
	{
		id: 5,
		title: 'Whitepaper',
		path: '/coming',
	},
	// {
	// 	id: 7,
	// 	title: 'Distribution',
	// 	path: '/coming',
	// },
	{
		id: 8,
		title: 'Wallet',
		path: '/wallets',
	},
	{
		id: 9,
		title: 'Exchange',
		path: '/coming',
	},
	{
		id: 10,
		title: 'Contact',
		path: '/coming',
	},
	{
		id: 11,
		title: 'Team',
		path: '/coming',
	},
];

const Navbar2 = () => {
	const { isAuthenticated } = useSelector((state) => state.auth);
	/* for sticky header */
	const [headerFix, setheaderFix] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			setheaderFix(window.scrollY > 50);
		});
	}, []);
	const [sidebarOpen, setSidebarOpen] = useState(false);
	return (
		<div>
			<header
				className={`px-6 py-2 shadow-lg ${
					headerFix ? 'sticky-bar  w-full' : 'bg-slate-100'
				} `}
			>
				<div className='flex items-center justify-between '>
					<div className='flex items-center flex-1'>
						<img src={Logo} alt='' className='w-10 ' />
						<h2 className='text-xl font-bold tracking-wide text-gray-700 '>
							GEMCOIN
						</h2>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Navbar2;
