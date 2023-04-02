import React from 'react';

const WalletButton = ({ text, bgColor }) => {
	return (
		<button
			className={`w-full px-3 py-2 italic font-bold text-center rounded-sm disabled:cursor-not-allowed ${
				bgColor ? bgColor : 'bg-slate-600'
			}`}
			disabled
		>
			{text}
		</button>
	);
};

export default WalletButton;
