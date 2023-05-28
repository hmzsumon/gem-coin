import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import { formatDate } from '../../../utils/functions';
import { FadeLoader } from 'react-spinners';
import Layout from '../Dashboard/Layout/Layout';
import { Link, NavLink } from 'react-router-dom';
import { BsArrowLeftSquare } from 'react-icons/bs';
import { useGetMyWithdrawsQuery } from '../../../features/withdraw/withdrawApi';

const WithdrawList = () => {
	const { data, isLoading } = useGetMyWithdrawsQuery();
	const { withdraws } = data || [];
	console.log(withdraws);

	const columns = [
		{
			field: 'createdAt',
			headerName: 'Buy Date',
			minWidth: 200,
			flex: 0.2,
			renderCell: (params) => {
				return <div>{formatDate(params.row.createdAt)}</div>;
			},
		},
		{
			field: 'name',
			headerName: 'User Name',
			headerAlign: 'center',
			minWidth: 200,
			flex: 0.2,
			renderCell: (params) => {
				return <div className='mx-auto '>{params.row.name}</div>;
			},
		},
		{
			field: 'email',
			headerName: 'User Email',
			headerAlign: 'center',
			type: 'number',
			minWidth: 100,
			flex: 0.2,
			renderCell: (params) => {
				return <div className='mx-auto '>{params.row.email}</div>;
			},
		},
		{
			field: 'amount',
			headerName: 'Amount',
			headerAlign: 'center',
			minWidth: 100,
			flex: 0.2,
			renderCell: (params) => {
				return (
					<div className='mx-auto '>
						{params.row.amount.toLocaleString('en-US', {
							style: 'currency',
							currency: 'USD',
						})}
					</div>
				);
			},
		},
		{
			field: 'wallet',
			headerName: 'Wallet',
			headerAlign: 'center',
			minWidth: 100,
			flex: 0.2,
			renderCell: (params) => {
				return <div className='mx-auto '>{params.row.wallet}</div>;
			},
		},
		{
			field: 'status',
			headerName: 'Status',
			headerAlign: 'center',
			minWidth: 100,
			flex: 0.2,
			renderCell: (params) => {
				return <div className='mx-auto '>{params.row.status}</div>;
			},
		},
	];

	const rows = [];

	withdraws &&
		withdraws.forEach((withdraw) => {
			rows.unshift({
				id: withdraw._id,
				createdAt: formatDate(withdraw.createdAt),
				name: withdraw.name,
				email: withdraw.email,
				amount: withdraw.amount,
				wallet: withdraw.wallet,
				status: withdraw.status,
			});
		});

	return (
		<Layout>
			{isLoading ? (
				<div className='flex justify-center items-center mt-24 h-[80%]'>
					<FadeLoader color='#fff' />
				</div>
			) : (
				<div className='px-2 md:px-20'>
					<div className=' flex items-center justify-between'>
						<div className='flex space-x-4 items-center'>
							<Link to='/dashboard' className='flex space-x-2 text-green-500 '>
								<span>
									<BsArrowLeftSquare className='text-2xl text-green-500' />
								</span>
								<span>Go Back</span>
							</Link>
							<h1 className='my-4 text-lg font-medium '>
								My Withdraws: {withdraws && withdraws.length}
							</h1>
						</div>
						<div>
							<NavLink
								to='/create-withdraw'
								className='bg-green-500 text-white px-4 py-2 rounded-md'
							>
								Create Withdraw
							</NavLink>
						</div>
					</div>
					<div
						className='w-full shadow-lg bg-slate-800 rounded-xl'
						style={{ height: 470 }}
					>
						<DataGrid
							rows={rows}
							columns={columns}
							pageSize={100}
							disableSelectIconOnClick
							sx={{
								boxShadow: 0,
								border: 0,
							}}
						/>
					</div>
				</div>
			)}
		</Layout>
	);
};

export default WithdrawList;
