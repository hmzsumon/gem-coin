import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import PieChart from './PieChart';

const Token = () => {
	return (
		<div className=' bg-slate-800'>
			<div className='py-10 mx-4 my-16 md:mx-10'>
				<div className='space-y-3 '>
					<h1 className='text-3xl tracking-wide text-center text-white uppercase '>
						Distribution
					</h1>
					<p className='text-sm tracking-wide text-center text-gray-500'>
						Breakdown of our Distribution
					</p>
				</div>

				<div className='my-10 space-y-6 text-white '>
					<div className='grid gap-6 md:grid-cols-3'>
						<div className='order-2 space-y-4 md:col-span-1 md:-order-1'>
							<li className='p-2 list-none border rounded '>
								<p>Mining & Airdrop 5%</p>
							</li>
							<li className='p-2 list-none border rounded '>
								<p>Private Sale & Pre-Sale 20%</p>
							</li>
							<li className='p-2 list-none border rounded '>
								<p>Farm, Staking, Pools 25%</p>
							</li>
							<li className='p-2 list-none border rounded '>
								<p>GEM Burn 15%</p>
							</li>
							<li className='p-2 list-none border rounded '>
								<p>Development 2%</p>
							</li>
							<li className='p-2 list-none border rounded '>
								<p>Free Gaming 10%</p>
							</li>
							<li className='p-2 list-none border rounded '>
								<p>Exchange Listing 20%</p>
							</li>
							<li className='p-2 list-none border rounded '>
								<p>Worldwide Donation 3%</p>
							</li>
						</div>
						<div className='flex items-center justify-center md:col-span-2'>
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
									<p className='text-xs text-gray-500'>30000000000 GEMCOIN</p>
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
									<p className='text-xs text-gray-500'>
										30000000000 GMC (3 Billion)
									</p>
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
									<p className='text-xs text-gray-500'>18</p>
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
										0x431Dcf5105DED927ee4fEC4EE3181c4D3D08EBe9
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
