import { DataGrid } from '@mui/x-data-grid';
import React from 'react';

import { formatDate } from '../../../utils/functions';
import { useGetAllTnxQuery } from '../../../features/tnx/tnxApi';
import { FadeLoader } from 'react-spinners';
import Layout from '../Dashboard/Layout/Layout';

import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import GoBack from '../../../global/GoBack';
const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

const AllHistory = () => {
	const { data, isLoading } = useGetAllTnxQuery();
	const { transactions } = data || [];

	const columns = [
		{
			field: 'createdAt',
			headerName: 'Date & Time',
			minWidth: 200,
			flex: 0.2,
			renderCell: (params) => {
				return (
					<div>
						<span className='text-gray-100 '>
							{formatDate(params.row.createdAt)}
						</span>
					</div>
				);
			},
		},
		{
			field: 'transactionType',
			headerName: 'Transaction Type',
			headerAlign: 'center',
			minWidth: 200,
			flex: 0.2,
			renderCell: (params) => {
				return (
					<div className='mx-auto'>
						<span className='text-green-500 '>
							{params.row.transactionType === 'cashIn' && 'Cash In'}
						</span>
						<span className='text-center text-red-500 '>
							{params.row.transactionType === 'cashOut' && 'Cash Out'}
						</span>
					</div>
				);
			},
		},
		{
			field: 'amount',
			headerName: 'Amount',
			headerAlign: 'center',
			type: 'number',
			minWidth: 100,
			flex: 0.2,
			renderCell: (params) => {
				return (
					<div className='mx-auto '>
						{params.row.transactionType === 'cashIn' && (
							<span className='flex items-center text-green-500 '>
								+ {params.row.amount.toLocaleString()}$
							</span>
						)}

						{params.row.transactionType === 'cashOut' && (
							<span className='flex items-center text-red-500 '>
								- {params.row.amount.toLocaleString()}$
							</span>
						)}
					</div>
				);
			},
		},
		{
			field: 'purpose',
			headerName: 'Purpose',
			headerAlign: 'center',
			minWidth: 100,
			flex: 0.2,
			renderCell: (params) => {
				return (
					<div className='mx-auto'>
						<span className='text-gray-100 capitalize '>
							{params.row.purpose}
						</span>
					</div>
				);
			},
		},
		{
			field: 'description',
			headerName: 'Description',
			headerAlign: 'center',
			minWidth: 200,
			flex: 1,
			renderCell: (params) => {
				return <span className='ml-5 '>{params.row.description}</span>;
			},
		},
	];

	const rows = [];

	transactions &&
		transactions.forEach((tnx) => {
			rows.unshift({
				id: tnx._id,
				amount: tnx.amount,
				transactionType: tnx.transactionType,
				createdAt: tnx.createdAt,
				description: tnx.description,
				purpose: tnx.purpose,
			});
		});

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Layout>
				{isLoading ? (
					<div className='flex justify-center items-center mt-24 h-[80%]'>
						<FadeLoader color='#fff' />
					</div>
				) : (
					<div className='px-2 md:px-20'>
						<GoBack />
						<h1 className='my-4 text-lg font-medium uppercase'>
							transactions: {transactions && transactions.length}
						</h1>
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
		</ThemeProvider>
	);
};

export default AllHistory;
