import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Dashboard/Layout/Layout';
import { MdEditLocationAlt } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { FadeLoader } from 'react-spinners';
import { useUpdateAddressMutation } from '../../../features/auth/authApi';

const Profile = () => {
	const navigate = useNavigate();
	const [updateAddress, { isLoading, isError, isSuccess, error }] =
		useUpdateAddressMutation();
	const { user } = useSelector((state) => state.auth);
	const [edit, setEdit] = useState(false);

	const [address, setAddress] = useState('');
	const [state, setState] = useState('');
	const [city, setCity] = useState('');
	const [zip, setZip] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!address || !state || !city || !zip) {
			return toast.error('Please fill all the fields');
		}
		updateAddress({ address, state, city, zip });
	};

	// check if edit
	useEffect(() => {
		if (edit) {
			setAddress(user?.address?.address_line1);
			setState(user?.address?.state);
			setCity(user?.address?.city);
			setZip(user?.address?.postcode);
		}
	}, [edit, user]);

	useEffect(() => {
		if (isError) {
			toast.error(error.data.message);
		}
		if (isSuccess) {
			toast.success('Address Updated Successfully');
			navigate('/dashboard');
		}
	}, [isSuccess, isError, error, navigate]);
	return (
		<Layout>
			{isLoading ? (
				<div className='flex items-center justify-center w-full h-[65vh]'>
					<FadeLoader color={'#fbbf24'} />
				</div>
			) : (
				<div className='text-white '>
					<div className='p-2 mx-auto mt-10 rounded bg-slate-800'>
						<div className=''>
							<h1 className='my-4 text-sm font-bold text-center text-gray-100'>
								Details
							</h1>

							<div className='p-3 border'>
								<div className='space-y-1 text-xs '>
									<h2 className='text-xs italic text-center text-indigo-600'>
										Personal Information:
									</h2>
									<div className='grid grid-cols-2 list-none '>
										<li className='grid grid-cols-2 '>
											<span>Full Name</span>
											<span>:</span>
										</li>
										<li>{user?.name}</li>
									</div>

									<div className='grid grid-cols-2 list-none '>
										<li className='grid grid-cols-2 '>
											<span>Phone</span>
											<span>:</span>
										</li>
										<li>
											{user?.phone ? user?.phone : 'Not Provided by User'}
										</li>
									</div>
									<div className='grid grid-cols-2 list-none '>
										<li className='grid grid-cols-2 '>
											<span>Email</span>
											<span>:</span>
										</li>
										<li>
											{user?.email ? user?.email : 'Not Provided by User'}
										</li>
									</div>
								</div>

								<hr className='my-2 border-slate-700' />

								<div className='space-y-3 text-xs'>
									<div className='flex items-center justify-center gap-3 '>
										<h2 className='text-xs italic text-center text-green-500'>
											Address:{' '}
										</h2>
										<MdEditLocationAlt
											onClick={() => setEdit(!edit)}
											className='text-sm text-orange-500 cursor-pointer '
										/>
									</div>
									<div className='grid grid-cols-2 list-none '>
										<li className='grid grid-cols-2 '>
											<span>Country</span>
											<span>:</span>
										</li>

										<li>
											{user?.country ? user?.country : 'Not Provided by User'}
										</li>
									</div>

									<div className='grid grid-cols-2 list-none '>
										<li className='grid grid-cols-2 '>
											<span>Address</span>
											<span>:</span>
										</li>

										<li className=' text-[.6rem]'>
											{user?.address?.address_line1 && !edit ? (
												user?.address?.address_line1
											) : (
												<>
													<div>
														<input
															type='text'
															className='w-full px-2 py-1 text-sm font-semibold text-gray-100 bg-transparent border rounded-md focus:outline-none'
															placeholder='Address'
															value={address}
															onChange={(e) => setAddress(e.target.value)}
														/>
													</div>
												</>
											)}
										</li>
									</div>

									<div className='grid grid-cols-2 list-none '>
										<li className='grid grid-cols-2 '>
											<span>State</span>
											<span>:</span>
										</li>

										<li>
											{user?.address?.state && !edit ? (
												user?.address?.state
											) : (
												<>
													<div>
														<input
															type='text'
															className='w-full px-2 py-1 text-sm font-semibold text-gray-100 bg-transparent border rounded-md focus:outline-none'
															placeholder='State'
															value={state}
															onChange={(e) => setState(e.target.value)}
														/>
													</div>
												</>
											)}
										</li>
									</div>
									<div className='grid grid-cols-2 list-none '>
										<li className='grid grid-cols-2 '>
											<span>City</span>
											<span>:</span>
										</li>

										<li>
											{user?.address?.city && !edit ? (
												user?.address?.city
											) : (
												<>
													<div>
														<input
															type='text'
															className='w-full px-2 py-1 text-sm font-semibold text-gray-100 bg-transparent border rounded-md focus:outline-none'
															placeholder='City'
															value={city}
															onChange={(e) => setCity(e.target.value)}
														/>
													</div>
												</>
											)}
										</li>
									</div>
									<div className='grid grid-cols-2 list-none '>
										<li className='grid grid-cols-2 '>
											<span>Zip</span>
											<span>:</span>
										</li>
										<li>
											{user?.address?.postcode && !edit ? (
												user?.address?.postcode
											) : (
												<>
													<div>
														<input
															type='text'
															className='w-full px-2 py-1 text-sm font-semibold text-gray-100 bg-transparent border rounded-md focus:outline-none'
															placeholder='Zip'
															value={zip}
															onChange={(e) => setZip(e.target.value)}
														/>
													</div>
												</>
											)}
										</li>
									</div>
								</div>

								<hr className='my-2 border-slate-700' />
							</div>
							{!user?.address?.is_full ||
								(edit && (
									<button
										className='w-full py-2 mt-4 text-sm font-bold text-white uppercase bg-blue-500 rounded focus:outline-none hover:bg-blue-600 hover:shadow-none'
										onClick={handleSubmit}
									>
										Submit
									</button>
								))}
						</div>
					</div>
				</div>
			)}
		</Layout>
	);
};

export default Profile;
