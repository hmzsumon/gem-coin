import React from 'react';
import Image1 from '../../assets/images/hero/Logo_CoinGecko300.png';
import Image2 from '../../assets/images/hero/Logo_Coinmarketcap200.png';
import Image3 from '../../assets/images/hero/Logo_GEMRoadmap300.png';
import Image4 from '../../assets/images/hero/Logo_GEMWhitepaper300.png';
import Image5 from '../../assets/images/hero/Logo_MotherCryptoMarket300.png';

const images = [Image1, Image2, Image3, Image4, Image5];

const Hero = () => {
	return (
		<div className='hero-wrapper '>
			<div className='flex items-center justify-center px-2 py-10 md:w-[75%] mx-auto '>
				<div className='space-y-10 '>
					<h2 className='text-3xl md:text-5xl tracking-[.10em] font-bold text-center s text-white uppercase '>
						Investing in Cryptocurrency Seems Too Easy
					</h2>
					<p className='text-center tracking-[.09rem] text-white '>
						By enabling this easy and secure way to invest in GEMCoin and ether
						we hope to have eliminated the boundaries that earlier prevented
						individuals and companies.
					</p>

					<div className='flex items-center justify-center gap-4 text-xs md:gap-10 '>
						<button className='bg-[#F9A826] text-white px-6 md:px-10 py-3 rounded-sm font-bold tracking-[.09rem] hover:bg-slate-900 hover:shadow-lg hover:text-white transition duration-300 ease-in-out '>
							GET STARTED
						</button>
						<button className='bg-white text-slate-900 px-6 md:px-10 py-3 rounded-sm font-bold tracking-[.09rem] hover:bg-[#F9A826] hover:shadow-lg hover:text-white transition duration-300 ease-in-out '>
							CONTACT US
						</button>
					</div>
				</div>
			</div>

			<div className='grid gap-6 px-5 py-10 md:grid-cols-5'>
				{images.map((img, index) => (
					<img key={index} src={img} alt='img' className='w-full' />
				))}
			</div>
		</div>
	);
};

export default Hero;
