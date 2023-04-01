import { Link } from 'react-router-dom';
import notFound from '../assets/images/404-not-found.svg';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
	const navigate = useNavigate();

	return (
		<div className='flex flex-col items-center justify-center h-full gap-4 py-16 bg-slate-900'>
			<div className='w-11/12'>
				<img
					draggable='false'
					className='h-full mx-auto sm:w-1/3'
					src={notFound}
					alt='Page Not Found'
				/>
			</div>
			<button
				className='px-4 py-2 text-white uppercase bg-blue-500 rounded-sm shadow hover:shadow-lg'
				onClick={() => navigate(-1)}
			>
				Back To Home
			</button>
		</div>
	);
};

export default NotFound;
