import React from 'react';
import Image1 from '../../assets/images/page/aboutus_home.png';
import { Link } from 'react-router-dom';

const About = () => {
	return (
		<div>
			<div className=' md:h-[100vh] py-16 px-4 md:px-10'>
				<div className='grid gap-10 md:grid-cols-2'>
					<div className='space-y-4 '>
						<h2 className='text-xl font-semibold  uppercase tracking-[.10rem] '>
							About Us
						</h2>
						<div className='space-y-2 text-slate-400 tracking-[.06rem]'>
							<p>
								GMC is the new generation Crypto Coin under the Binance Smart
								Chain. Vision is to create a community through the whole world
								to grow the coin rapidly.
							</p>
							<p>
								The token was launched with the idea of offering real-world
								value. Too many tokens have been launched without the ability to
								be used for REAL use cases and for real utility, but GEM goes
								against this trend. GMC can be used to buy and earn unlimited
								GMC with a great marketing plan. And the services at launch from
								GEM Network, which has been vetted by the GEM team, and GEM aims
								to grow this network rapidly. The static rewards system is a
								concept that was pioneered by GEM finance
							</p>
						</div>
						<Link to='/signup'>
							<button className='bg-[#F9A826] text-white px-6 md:px-10 py-3 rounded-sm font-bold tracking-[.09rem] hover:bg-slate-900 hover:shadow-lg hover:text-white transition duration-300 ease-in-out '>
								GET STARTED
							</button>
						</Link>
					</div>

					<div>
						<img src={Image1} alt='img' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
