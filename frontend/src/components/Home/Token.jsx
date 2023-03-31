import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import TokenImg from '../../assets/images/circel.png';

const Token = () => {
	return (
		<div className='mx-4 my-16 md:mx-10'>
			<div className='space-y-3 '>
				<h1 className='text-3xl tracking-wide text-center uppercase '>Token</h1>
				<p className='text-sm tracking-wide text-center text-gray-500'>
					Breakdown of our Token Distribution
				</p>
			</div>

			<div className='grid gap-6 my-20 mg-red-500 md:grid-cols-2'>
				<div className='grid grid-cols-2 gap-4 list-none '>
					<div>
						<li className='flex space-x-2'>
							<div className='w-1 h-auto rounded-md bg-violet-600'></div>
							<div>
								<p className='text-xs tracking-widest uppercase text-violet-600'>
									Token Name
								</p>
								<p className='text-xs text-gray-500'>GEMCOIN</p>
							</div>
						</li>
					</div>
					<div>
						<li className='flex space-x-2'>
							<div className='w-1 h-auto rounded-md bg-violet-600'></div>
							<div>
								<p className='text-xs tracking-widest uppercase text-violet-600'>
									Symbol
								</p>
								<p className='text-xs text-gray-500'>GMC</p>
							</div>
						</li>
					</div>
					<div>
						<li className='flex space-x-2'>
							<div className='w-1 h-auto bg-orange-500 rounded-md'></div>
							<div>
								<p className='text-xs tracking-widest uppercase text-violet-600'>
									Total Supply
								</p>
								<p className='text-xs text-gray-500'>30000000000</p>
							</div>
						</li>
					</div>
					<div>
						<li className='flex space-x-2'>
							<div className='w-1 h-auto bg-orange-500 rounded-md'></div>
							<div>
								<p className='text-xs tracking-widest uppercase text-violet-600'>
									Decimals
								</p>
								<p className='text-xs text-gray-500'>5</p>
							</div>
						</li>
					</div>
					<div>
						<li className='flex space-x-2'>
							<div>
								<div className='w-1 h-8 bg-yellow-500 rounded-md'></div>
							</div>
							<div>
								<p className='text-xs tracking-widest uppercase text-violet-600'>
									Contract
								</p>
								<p className='text-xs text-gray-500'>
									0x81e13F87320C4bf94D5df209D8981058A6DE20F9
								</p>
							</div>
						</li>
					</div>
				</div>
				<div className='flex items-center justify-center '>
					<img src={TokenImg} alt='' />
				</div>
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

export default Token;
