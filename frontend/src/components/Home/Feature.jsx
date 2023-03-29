import React from 'react';

const Feature = ({ item }) => {
	return (
		<div>
			<div className='flex items-center space-x-4'>
				<div>
					<div className=' flex items-center rounded-full justify-center w-[70px] h-[70px] bg-[#f1a619]'>
						<img src={item.icon} alt='icon' className='' />
					</div>
				</div>
				<div className='space-y-2 '>
					<h1 className='font-semibold tracking-wide text-gray-700 uppercase '>
						{item.title}
					</h1>
					<p className='text-sm text-gray-500'>{item.description}</p>
				</div>
			</div>
		</div>
	);
};

export default Feature;
