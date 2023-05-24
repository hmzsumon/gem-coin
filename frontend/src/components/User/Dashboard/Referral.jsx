import React from 'react';
import { useSelector } from 'react-redux';

import Layout from './Layout/Layout';
import CopyBtn from '../../../global/CopyBtn';

const Referral = () => {
	const { user } = useSelector((state) => state.auth);

	const host = window.location.host;
	const link = `${host}/signup?referral_id=${user?._id}`;
	return (
		<Layout>
			<div className='h-screen'>
				<div className='grid w-11/12 grid-cols-1 gap-6 px-2 py-10 mx-auto text-white rounded-md md:grid-cols-2 md:9/12 bg-slate-800'>
					<div>
						<div>
							<h className='text-xs italic font-semibold text-center md:text-sm'>
								<span>{link}</span>
							</h>
						</div>
						<div className='w-full'>
							<CopyBtn textData={link} btnText='Copy' />
						</div>
					</div>

					<div>
						<h2 className='text-xl font-semibold '>
							How To USE Are Your Referral Link In 3 Easy Stapes
						</h2>
						<p className='text-xs '>
							1. Copy Your Reffarel Link Invited Your Friends <br /> 2. Gemcoin
							For Each Friend <br /> 3. Get Reward 4 Gemcoin{' '}
						</p>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Referral;
