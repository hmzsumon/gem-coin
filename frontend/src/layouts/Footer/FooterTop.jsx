import React from 'react';
import Logo from '../../assets/images/logo-blue.png';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { RiSendPlaneFill } from 'react-icons/ri';

const links = [
	{
		id: 1,
		title: 'Forums',
		link: '#',
	},
	{
		id: 2,
		title: 'News',
		link: '#',
	},
	{
		id: 3,
		title: 'Advertise',
		link: '#',
	},
	{
		id: 4,
		title: 'Jobs',
		link: '#',
	},
	{
		id: 5,
		title: 'Wallets',
		link: '#',
	},
	{
		id: 6,
		title: 'Guides',
		link: '#',
	},
	{
		id: 7,
		title: 'FAQ',
		link: '#',
	},
	{
		id: 8,
		title: 'Chart',
		link: '#',
	},
	{
		id: 9,
		title: 'Terms of Service',
		link: '#',
	},
	{
		id: 10,
		title: 'Privacy Policy',
		link: '#',
	},
	{
		id: 11,
		title: 'Legal',
		link: '#',
	},
	{
		id: 12,
		title: 'Partners',
		link: '#',
	},
];

const FooterTop = () => {
	return (
		<div className='py-6 my-6 text-gray-300'>
			<div className='grid justify-between md:grid-cols-3 gap-14'>
				<div className='space-y-4 '>
					<div className='flex-1 flex items-center'>
						<img src={Logo} alt='' className='w-10 ' />
						<h2 className=' font-bold tracking-wide text-white text-xl '>
							GEMCOIN
						</h2>
					</div>
					<div>
						<p className='text-gray-300 '>
							Sign up to our newsletter, so you can be the first to find out the
							latest news and tips about exclusive offers and packages
						</p>
					</div>
					<div className='flex flex-col gap-2 '>
						<label htmlFor='' className=' text-[#F1A619]'>
							NEWSLETTER
						</label>
						<div>
							<input
								type='text'
								placeholder='Enter your email address'
								className='px-3 py-2 '
							/>
							<button className='px-4 py-2 text-white bg-[#F1A619]'>
								<RiSendPlaneFill className='inline-block text-sm' />
							</button>
						</div>
					</div>
				</div>

				<div className='px-4 '>
					<h2 className='text-[#F1A619]'>QUICK LINK</h2>

					<div className='grid grid-cols-2 gap-2 mt-2'>
						{links.map((link) => (
							<div key={link.id}>
								<a href={link.link} className='text-gray-300'>
									<AiOutlineDoubleRight className='inline-block mr-2 text-xs' />
									{link.title}
								</a>
							</div>
						))}
					</div>
				</div>

				<div className='px-4 '>
					<h2 className='text-[#F1A619]'>CONTACT</h2>
					<p>
						<span className='text-gray-500 '>Address: </span> GEMCoin Building
						No-2, Dubai Digital Park, Dubai, UAE <br />
						<span className='text-gray-500 '>Phone: </span> +971 56 179 1590{' '}
						<br />
						<span className='text-gray-500 '>Email: </span> gemcoinuae@gmail.com
					</p>
				</div>
			</div>
		</div>
	);
};

export default FooterTop;
