import React from 'react';

const BuySell = () => {
	const [btn, setBtn] = React.useState('buy');
	return (
		<div>
			<div className='grid grid-cols-2 bg-slate-700'>
				<button
					className={`px-6 py-2 text-sm font-semibold text-white  ${
						btn === 'buy' ? 'bg-green-400' : 'bg-slate-700'
					}`}
					onClick={() => setBtn('buy')}
				>
					Buy
				</button>
				<button
					className={`px-6 py-2 text-sm font-semibold text-white  ${
						btn === 'sell' ? 'bg-orange-400' : 'bg-slate-700'
					}`}
					onClick={() => setBtn('sell')}
				>
					Sell
				</button>
			</div>
			<div className='my-4 '>
				<h2 className='text-center text-white'>
					Trading Start on 16 December 12:00 PM
				</h2>
			</div>
		</div>
	);
};

export default BuySell;
