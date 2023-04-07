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

const Header = () => {
	const { isAuthenticated, user } = useSelector((state) => state.auth);
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

					<div className='hidden text-xs md:block'>
						{navItems.map((item) => (
							<NavLink
								to={item.path}
								key={item.id}
								className={({ isActive }) =>
									`px-2 py-2  font-semibold  uppercase rounded-md hover:text-[#f1a619]  ${
										isActive ? 'text-[#f1a619] ' : 'text-gray-700'
									}`
								}
							>
								{item.title}
							</NavLink>
						))}
					</div>
					{isAuthenticated && user?.email_verified ? (
						<div>
							<Link to='/dashboard'>
								<button className='px-4 py-2 text-sm font-semibold uppercase rounded-md md:bg-[#f1a619] hover:bg-[#f1a619] md:text-white'>
									Dashboard
								</button>
							</Link>
						</div>
					) : (
						<div className='mr-10 space-x-4 md:mr-0 '>
							<Link to='/login'>
								<button className='md:px-4 md:py-2 text-sm font-semibold uppercase rounded-md md:bg-[#f1a619] hover:bg-[#f1a619] md:text-white'>
									Login
								</button>
							</Link>

							<Link to='/signup'>
								<button className='md:px-4 md:py-2 text-sm font-semibold uppercase rounded-md md:bg-[#f1a619] hover:bg-[#f1a619] md:text-white'>
									Sign Up
								</button>
							</Link>
						</div>
					)}

					<div className='md:hidden'>
						<button
							type='button'
							className={`md:hidden  nav-icon  ${
								sidebarOpen ? 'open' : 'collapsed'
							}`}
							onClick={() => setSidebarOpen(!sidebarOpen)}
						>
							<span></span>
							<span></span>
							<span></span>
						</button>
					</div>
				</div>
			</header>
			{/* Mobile Menu */}
			<div
				className={` h-full fixed mobile_menu md:hidden transition duration-300 ease-in-out  top-0 w-9/12 ${
					sidebarOpen ? 'active-mobile-menu' : 'mobile-menu'
				} `}
			>
				<div className='flex flex-col px-4 pt-4 '>
					<Link to='/'>
						<p className='inline-flex items-center p-2 mr-4 '>
							<img src={LogoWhait} alt='logo' className='w-24' />
						</p>
					</Link>
					<div className='flex flex-col items-start justify-start gap-2 '>
						{navItems.map((item) => (
							<NavLink
								key={item.id}
								to={item.path}
								className={({ isActive }) =>
									`border-b pb-2 w-full  ${
										isActive ? 'text-[#9467FE]' : 'text-[#fff]'
									}`
								}
								onClick={() => setSidebarOpen(false)}
							>
								{item.title}
							</NavLink>
						))}
					</div>
					<div className='flex mt-10 '>
						<div className='flex gap-2 mx-auto'>
							<li className='flex items-center justify-center w-10 h-10 border rounded-md '>
								<a
									target='_blank'
									className='fab fa-facebook-f'
									rel='noreferrer'
									href='https://www.facebook.com/'
								></a>
							</li>{' '}
							<li className='flex items-center justify-center w-10 h-10 border rounded-md '>
								<a
									target='_blank'
									className='fab fa-twitter'
									rel='noreferrer'
									href='https://twitter.com/'
								></a>
							</li>{' '}
							<li className='flex items-center justify-center w-10 h-10 border rounded-md '>
								<a
									target='_blank'
									className='fab fa-linkedin-in'
									rel='noreferrer'
									href='https://www.linkedin.com/'
								></a>
							</li>{' '}
							<li className='flex items-center justify-center w-10 h-10 border rounded-md '>
								<a
									target='_blank'
									className='fab fa-instagram'
									rel='noreferrer'
									href='https://www.instagram.com/'
								></a>
							</li>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
