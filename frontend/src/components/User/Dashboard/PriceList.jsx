import React from 'react';

const PriceList = ({ title, chance, lastPrice, bgColor }) => {
	return (
		<div className='rounded-md text-white bg-slate-800 '>
			<div className='p-3'>
				<h1 className='italic font-semibold '> Price History</h1>
				<div>
					<table className='space-y-2'>
						<thead className='grid grid-cols-2 text-xs italic '>
							<div className='col-span-1 '>
								<tr className=''>
									<th>Pair</th>
								</tr>
							</div>
							<div className='flex items-center justify-between w-full col-span-1 '>
								<tr>
									<th>Last Price</th>
								</tr>
								<tr className=''>
									<th>Change</th>
								</tr>
							</div>
						</thead>
						<tbody className='grid grid-cols-2 text-sm '>
							<div className='col-span-1 '>
								<tr className=''>
									<td>{title}</td>
								</tr>
							</div>
							<div className='grid items-center justify-between w-full grid-cols-2 col-span-1 space-x-5 '>
								<tr>
									<td className='text-yellow-400 '>{lastPrice}</td>
								</tr>
								<tr className={`px-4 w-20 py-1 rounded ${bgColor} `}>
									<td>{chance}</td>
								</tr>
							</div>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default PriceList;
