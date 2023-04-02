import React from 'react';
import Layout from '../components/User/Dashboard/Layout/Layout';
import Img from '../assets/images/work.gif';
import GoBack from './GoBack';

const ComingSone = () => {
	return (
		<Layout>
			<div className='flex flex-col items-center justify-center h-screen space-y-4 '>
				<h1 className='text-2xl font-bold text-gray-100'>Coming Soon</h1>
				<div>
					<img src={Img} alt='work' className='w-96 ' />
				</div>
				<GoBack />
			</div>
		</Layout>
	);
};

export default ComingSone;
