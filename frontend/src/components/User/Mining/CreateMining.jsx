import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useCreateMiningMutation } from '../../../features/mining/miningApi';
import ButtonLoader from '../../../global/ButtonLoader';
import { useNavigate } from 'react-router-dom';

const CreateMining = () => {
	const navigate = useNavigate();
	const [createMining, { isLoading, isError, isSuccess, error }] =
		useCreateMiningMutation();
	const { user } = useSelector((state) => state.auth);

	const handleCreate = () => {
		if (user?.mining_id) {
			alert.show('You already have a mining');
			return;
		}
		createMining();
	};
	useEffect(() => {
		if (error) {
			toast.error(error.data.message);
			if (error.data.message === 'Insufficient balance') {
				navigate('/buy-gem');
			}
		}
		if (isSuccess) {
			toast.success('Mining created successfully');
		}
	}, [isSuccess, isError, error, navigate]);
	return (
		<div>
			<div className='px-4 py-2 mx-2 my-4 '>
				{!user?.mining_id && (
					<div className='mx-auto'>
						{isLoading ? (
							<ButtonLoader />
						) : (
							<div className='flex flex-col items-center justify-around text-xs md:flex-row '>
								<div className='text-white '>
									<h2 className='text-xl font-semibold '>
										Mining 120% Bonus How To USE
									</h2>
									<div className='my-4 space-y-2 '>
										<p>
											1. Start 10$ Mining Fee, Firstly Deposit 10$ Your Account
										</p>
										<p> 2. Click Request Active Mining ID</p>
										<p>
											3. Buy Mining Package Your Choice,
											50$,100$,500$,1000$,5000$,10000$
										</p>
										<p>4. 365 Day Mining benefit 180%</p>
										<p>
											5. Enjoy Daily Gemcoin dollar Mining Withdrawal Benefit
										</p>
									</div>
								</div>

								<div>
									<button
										className='relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-500 border border-transparent rounded-md group hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
										onClick={handleCreate}
									>
										Request Active Mining Id
									</button>
								</div>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default CreateMining;
