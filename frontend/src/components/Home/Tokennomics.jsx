import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const tokenData = [
	{
		id: 1,
		title: 'Total Supply',
		value: '700,000,000 GEM',
	},
	{
		id: 2,
		title: 'Allocated for ICO',
		value: '700,000,000 GEM',
	},

	{
		id: 3,
		title: 'Hard Cap',
		value: '700,000,000 GEM',
	},
	{
		id: 4,
		title: 'Soft Cap',
		value: '700,000,000 GEM',
	},
	{
		id: 5,
		title: 'Coin Value',
		value: '700,000,000 GEM',
	},
	{
		id: 6,
		title: 'Accepted',
		value: '700,000,000 GEM',
	},
];
const Tokennomics = () => {
	return (
		<div className='mx-4 my-16 md:mx-10'>
			<div className='space-y-3 '>
				<h1 className='text-3xl tracking-wide text-center uppercase '>Token</h1>
				<p className='text-sm tracking-wide text-center text-gray-500'>
					Breakdown of our Token Distribution
				</p>
			</div>

			<div className='border '>
				<div className='grid grid-cols-2 py-2 text-xs text-white list-none md:text-sm bg-slate-800 '>
					<li className='ml-4 md:ml-20'>Description</li>
					<li className='md:ml-20 '>Value</li>
				</div>
				{tokenData.map((item) => (
					<div key={item.id}>
						<div className='grid grid-cols-2 py-2 text-xs list-none gap-y-10 md:text-sm text-slate-600 '>
							<li className='ml-4 font-bold md:ml-20 '>{item.title}</li>
							<li className='md:ml-20 '>{item.value}</li>
						</div>
					</div>
				))}
			</div>
			<div className='my-2'>
				<button className='text-xs text-gray-500 hover:text-[#f1a619]'>
					<a
						href='https://gem-coin.gitbook.io/tokennomics'
						target='_blank'
						rel='noreferrer'
						className='flex items-center justify-center '
					>
						Read More <BsArrowRight className='mt-1 ml-1' />
					</a>
				</button>
			</div>
		</div>
	);
};

export default Tokennomics;
