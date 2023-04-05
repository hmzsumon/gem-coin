import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import PieChart from './PieChart';

const Token = () => {
	return (
		<div className=' bg-slate-800'>
			<div className='mx-4 py-10 my-16 md:mx-10'>
				<div className='space-y-3 '>
					<h1 className='text-3xl text-white tracking-wide text-center uppercase '>
						Distribution
					</h1>
					<p className='text-sm tracking-wide text-center text-gray-500'>
						Breakdown of our Distribution
					</p>
				</div>

				<div className=' space-y-6 text-white my-10 '>
					<div className=' grid  gap-6 md:grid-cols-3'>
						<div className=' md:col-span-1 space-y-4 order-2 md:-order-1'>
							<li className=' p-2 rounded border list-none'>
								<p>Firm Capital 65%</p>
							</li>
							<li className=' p-2 rounded border list-none'>
								<p>ICO Marketing 5%</p>
							</li>
							<li className=' p-2 rounded border list-none'>
								<p>Exchange Listing 7%</p>
							</li>
							<li className=' p-2 rounded border list-none'>
								<p>Team 4%</p>
							</li>
							<li className=' p-2 rounded border list-none'>
								<p>Bounty & Events 9%</p>
							</li>
							<li className=' p-2 rounded border list-none'>
								<p>Advisors & Partners 10%</p>
							</li>
						</div>
						<div className=' md:col-span-2 flex items-center justify-center '>
							<PieChart />
						</div>
					</div>
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
		</div>
	);
};

export default Token;
