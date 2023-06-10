import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import Img5 from '../../../assets/banner/banner1.jpg';
import Img6 from '../../../assets/banner/banner2.jpg';
import Img7 from '../../../assets/banner/banner3.jpg';
import Img8 from '../../../assets/banner/banner4.jpg';

const images = [Img5, Img6, Img7, Img8];

const Carousel = () => {
	const items = images.map((img) => {
		return (
			<li className='flex flex-col items-center text-white list-none cursor-pointer'>
				<img src={img} alt='' className=' w-[24rem]' />
			</li>
		);
	});

	const responsive = {
		0: {
			items: 1,
		},
		512: {
			items: 3,
		},
	};

	return (
		<>
			<div className='my-2 '>
				<h2 className='text-center '>Earn and Offer</h2>
			</div>
			<div className='flex items-center px-1 py-4 rounded-md bg-slate-800'>
				<AliceCarousel
					mouseTracking
					infinite
					autoPlayInterval={1000}
					animationDuration={1500}
					disableDotsControls
					disableButtonsControls
					responsive={responsive}
					items={items}
					autoPlay
				/>
			</div>
		</>
	);
};

export default Carousel;
