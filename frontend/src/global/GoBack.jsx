import React from 'react';
import { useNavigate } from 'react-router-dom';

import { BsArrowLeft } from 'react-icons/bs';

const GoBack = () => {
	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	};
	return (
		<div>
			<button
				className='text-sm font-semibold text-gray-100 list-none rounded-md cursor-pointer hover:text-blue-700 hover:underline '
				onClick={goBack}
			>
				<BsArrowLeft className='inline-block mr-2' />
				Go Back
			</button>
		</div>
	);
};

export default GoBack;
