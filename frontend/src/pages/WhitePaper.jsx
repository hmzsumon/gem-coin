import React from 'react';
import TemplateLayout from '../layouts/TemplateLayout';

const WhitePaper = () => {
	return (
		<TemplateLayout>
			<div className='flex items-center justify-center min-h-[300px] w-full'>
				<button className='px-4 py-2 bg-yellow-500 rounded cursor-pointer '>
					<a
						href='https://pdfhost.io/v/qj3DYQ51h_GEMCOIN_Whtepaper'
						target='_blank'
						rel='noopener noreferrer'
					>
						White Paper
					</a>
				</button>
			</div>
		</TemplateLayout>
	);
};

export default WhitePaper;
