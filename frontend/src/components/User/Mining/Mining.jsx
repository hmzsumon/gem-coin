import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../Dashboard/Layout/Layout';
import CreateMining from './CreateMining';
import MiningLayout from './MiningLayout';
import MiningStatus from './MiningStatus';
import { useGetMiningQuery } from '../../../features/mining/miningApi';

const Mining = () => {
	const { data } = useGetMiningQuery();
	const { mining } = data || {};
	return (
		<Layout>
			<MiningLayout>
				<div className=''>
					{mining?.mining_id ? <MiningStatus /> : <CreateMining />}
				</div>
			</MiningLayout>
		</Layout>
	);
};

export default Mining;
