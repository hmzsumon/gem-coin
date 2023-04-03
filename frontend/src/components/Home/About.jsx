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
						<div className='text-slate-400 tracking-[.06rem]'>
							<p className=' mb-4'>
								GEMCoin is a new Generation crypto coin generated under GEM
								Media Chain. Our main vision is to build a community through all
								the media in the world to grow this currency faster.Gem Coin was
								launched with the idea of providing real-world value. Many coins
								have been launched without real use cases and the ability to be
								used for real utility, but GEMCoin goes against this trend.
								GEMCoin can be used to buy unlimited GEMCoin and earn 100%
								profit with a great marketing plan. And services at launch from
								the GEMCoin network, verified by the GEMCoin team, and GEM aims
								to rapidly grow this network that will change the world. The
								static reward system is a concept pioneered by GEM Finance
							</p>
						</div>
						<Link to='/signup'>
							<button className='bg-[#F9A826]  text-white px-6 md:px-10 py-3 rounded-sm font-bold tracking-[.09rem] hover:bg-slate-900 hover:shadow-lg hover:text-white transition duration-300 ease-in-out '>
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
