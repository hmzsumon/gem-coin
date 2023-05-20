import React from 'react';
import Layout from '../Dashboard/Layout/Layout';
import GoBack from '../../../global/GoBack';

const Nft = () => {
	return (
		<Layout>
			<GoBack />
			<div className='min-h-screen mx-4 md:mx-10 '>
				<h1 className='my-4 text-2xl font-medium text-center text-white'>
					GEMCOIN NFTs
				</h1>
				<div className='space-y-3 '>
					<p className='leading-7 tracking-wider text-justify text-white '>
						GMC's main objective is to change the financial status of people
						with one currency. A coin can be worth anywhere from $0.25 to
						$70000. There is also a currency where clients can use their own
						NFTs and real-world experience and create empowerment with
						monetization. GMC has several main purposes and uses. GEM is an
						entertainment-focused platform and NFT marketplace built around fans
						of cultural figures. On GEM, fans can interact with like-minded
						fans, attend virtual events, and add and collect utility-focused
						NFTs of their favorite celebrities, and create NFTs and experiences
						and platforms for profit. The white paper describes in detail.
					</p>
					<p className='leading-7 tracking-wider text-justify text-white '>
						Here we will collect NFT from external NFT developers and GEM active
						account holders.
					</p>
					<p className='tracking-wider text-white '>
						Contact NFT Direct Manager on WhatsApp +971561791590
					</p>
				</div>
			</div>
		</Layout>
	);
};

export default Nft;
