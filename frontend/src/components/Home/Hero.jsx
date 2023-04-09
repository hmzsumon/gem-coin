import React from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../../assets/images/hero/Logo_CoinGecko300.png';
import Image2 from '../../assets/images/hero/Logo_Coinmarketcap200.png';
import Image3 from '../../assets/images/hero/Logo_GEMRoadmap300.png';
import Image4 from '../../assets/images/hero/Logo_GEMWhitepaper300.png';
import Image5 from '../../assets/images/hero/mother.jpg';

const images = [
	{
		id: 1,
		src: Image1,
		alt: 'Image1',
		link: 'https://www.coingecko.com/',
	},
	{
		id: 2,
		src: Image2,
		alt: 'Image2',
		link: 'https://coinmarketcap.com/',
	},
	{
		id: 3,
		src: Image3,
		alt: 'Image3',
		link: 'https://www.gemcoin.global/roadmap',
	},
	{
		id: 4,
		src: Image4,
		alt: 'Image4',
		link: 'https://www.gemcoin.global/coming',
	},
	{
		id: 5,
		src: Image5,
		alt: 'Image5',
		link: 'https://www.gemcoin.global/coming',
	},
];

const Hero = () => {
	return (
		<div className='hero-wrapper '>
			<div className='flex items-center justify-center px-2 py-10 md:w-[75%] mx-auto '>
				<div className='space-y-10 '>
					<h2 className='text-3xl md:text-5xl tracking-[.10em] font-bold text-center s text-white uppercase '>
						INVESTING IN CRYPTOCURRENCY SEEMS TOO BE VERY EASY AND
						VERY PROFITABLE.
					</h2>
					<p className='text-center tracking-[.09rem] text-white '>
						GEM MEDIA CHAIN Created GemCoin Easy and safe way every customer
						will be able to profit by investing. With a 100% profit guarantee,
						GemCoin Company hope to establish an unprecedented example and
						relationship with every customer in the Cryptocurrency Market.
					</p>

					<div className='flex items-center justify-center gap-4 text-xs md:gap-10 '>
						<Link to='/signup'>
							<button className='bg-[#F9A826] text-white px-6 md:px-10 py-3 rounded-sm font-bold tracking-[.09rem] hover:bg-slate-900 hover:shadow-lg hover:text-white transition duration-300 ease-in-out '>
								GET STARTED
							</button>
						</Link>
						<button className='bg-white text-slate-900 px-6 md:px-10 py-3 rounded-sm font-bold tracking-[.09rem] hover:bg-[#F9A826] hover:shadow-lg hover:text-white transition duration-300 ease-in-out '>
							CONTACT US
						</button>
					</div>
				</div>
			</div>

			<div className='grid items-center grid-cols-3 gap-2 px-5 py-5 md:gap-3 md:grid-cols-5'>
				{images.map((img, index) => (
					<a
						key={index}
						href={img.link}
						target='_blank'
						rel='noreferrer'
						className='flex items-center justify-center cursor-pointer'
					>
						<img src={img.src} alt={img.alt} className='w-24' />
					</a>
				))}
			</div>
		</div>
	);
};

export default Hero;
