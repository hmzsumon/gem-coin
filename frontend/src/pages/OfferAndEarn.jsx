import React from 'react';
import TemplateLayout from '../layouts/TemplateLayout';
import Carousel from '../components/User/Dashboard/Carousel';

const OfferAndEarn = () => {
	return (
		<TemplateLayout>
			<div className='px-6 min-h-[400px] flex items-center justify-center'>
				<div className='w-full '>
					<Carousel />
				</div>
			</div>
		</TemplateLayout>
	);
};

export default OfferAndEarn;
