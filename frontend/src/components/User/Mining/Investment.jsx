import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { useStartMiningMutation } from '../../../features/mining/miningApi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Layout from '../Dashboard/Layout/Layout';
import MiningLayout from './MiningLayout';
import CircledSpinning from '../../../global/CircledSpinning';

const packages = [
	{
		id: 6,
		name: 'Basic',
		price: '50',
		spinning: <CircledSpinning />,
		color: '#C77B30',
	},
	{
		id: 1,
		name: 'Bronze',
		price: '100',
		spinning: <CircledSpinning />,
		color: '#C77B30',
	},
	{
		id: 2,
		name: 'Silver',
		price: '500',
		spinning: <CircledSpinning />,
		color: '#C7C7C7',
	},
	{
		id: 3,
		name: 'Gold',
		price: '1000',
		spinning: <CircledSpinning />,
		color: '#C7C7C7',
	},
	{
		id: 4,
		name: 'Diamond',
		price: '5000',
		spinning: <CircledSpinning />,
		color: '#C7C7C7',
	},
	{
		id: 5,
		name: 'Platinum',
		price: '10000',
		spinning: <CircledSpinning />,
		color: '#C7C7C7',
	},
];

const Investment = () => {
	const navigate = useNavigate();
	const [startMining, { isError, isLoading, isSuccess, error }] =
		useStartMiningMutation();
	const { user } = useSelector((state) => state.auth);
	const { mining } = useSelector((state) => state.mining);

	const [iPackage, setIPackage] = useState(null);
	const [wallet, setWallet] = useState(null);

	const handleSubmit = (e, invest) => {
		e.preventDefault();
		if (invest > user.balance) {
			alert.show('You need to have at least $' + invest + ' to invest');
			return;
		}
		const myForm = new FormData();
		myForm.append('package', iPackage?.price);
		myForm.append('wallet', wallet?.value);

		// for (let key of myForm.entries()) {
		// 	console.log(key[0] + ', ' + key[1]);
		// }
		startMining(myForm);
	};

	useEffect(() => {
		if (isError) {
			toast.error(error.data.message);
		}
		if (isSuccess) {
			toast.success('Mining started successfully');
			navigate('/mining');
		}
	}, [isError, isSuccess, error, navigate]);

	return (
		<Layout>
			<MiningLayout>
				<div className='md:mt-20 md:w-[50%] mx-auto '>
					<div className='my-4 text-center text-white'>
						<h2>Buy Pack</h2>
					</div>
				</div>
				<div className='mx-4 my-6 shadow-lg md:w-9/12 md:mx-auto'>
					<form className='p-6 border rounded-md' onSubmit={handleSubmit}>
						<div className='grid grid-cols-1 gap-4 md:grid-cols-5 '>
							{packages.map((item) => (
								<li
									key={item.id}
									className={`flex items-center justify-around flex-shrink-0 w-full px-2 py-4 space-x-4 text-lg text-white bg-green-500 border-4 border-transparent rounded md:w-auto hover:text-teal-800 disabled:bg-red-300 disabled:text-gray-700 disabled:cursor-not-allowed cursor-pointer ${
										iPackage?.id === item.id ? 'bg-teal-800' : ''
									}`}
									disabled={mining.mining_status === 'inactive'}
									onClick={() => setIPackage(item)}
								>
									<span>{item.name}</span>
									<span>{item.price}$</span>
								</li>
							))}
						</div>

						<div className='flex items-center justify-center my-4 '>
							<button
								className='px-4 py-2 ml-auto font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent disabled:cursor-not-allowed'
								disabled={!iPackage}
							>
								{isLoading ? <CircledSpinning /> : 'Start Mining'}
							</button>
						</div>
					</form>
				</div>
			</MiningLayout>
		</Layout>
	);
};

export default Investment;
