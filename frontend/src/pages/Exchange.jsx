import React from 'react';
import TemplateLayout from '../layouts/TemplateLayout';
import Img from '../assets/images/exchange/exchange_2.gif';
import GoBack from '../global/GoBack';

const Exchange = () => {
	return (
		<TemplateLayout>
			<div className='flex flex-col items-center justify-center h-screen space-y-4 bg-slate-900 '>
				<h1 className='text-2xl font-bold text-gray-100'>
					The exchange will be listed in June
				</h1>
				<div>
					<img src={Img} alt='work' className='w-96 ' />
				</div>
				<GoBack />
			</div>
		</TemplateLayout>
	);
};

export default Exchange;
