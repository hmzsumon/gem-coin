import React from 'react';
import TemplateLayout from '../layouts/TemplateLayout';
import Img from '../assets/images/work.gif';
import GoBack from '../global/GoBack';

const ComingPage = () => {
	return (
		<TemplateLayout>
			<div className='flex flex-col bg-slate-900 items-center justify-center h-screen space-y-4 '>
				<h1 className='text-2xl font-bold text-gray-100'>Coming Soon</h1>
				<div>
					<img src={Img} alt='work' className='w-96 ' />
				</div>
				<GoBack />
			</div>
		</TemplateLayout>
	);
};

export default ComingPage;
