import React, { useEffect, useState } from 'react';
import TemplateLayout from '../layouts/TemplateLayout';
import TextField from '@mui/material/TextField';
import { Button, Checkbox, FormControlLabel, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../features/auth/authApi';
import { toast } from 'react-toastify';

const Login = () => {
	const navigate = useNavigate();
	const [login, { isLoading, isSuccess, isError, error }] = useLoginMutation();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const myForm = new FormData();
		myForm.append('email', email);
		myForm.append('password', password);
		login(myForm);
	};

	useEffect(() => {
		if (isSuccess) {
			toast.success('Login successful');
			navigate('/dashboard');
		}
		if (isError) {
			toast.error(error.data.message);
		}
	}, [isSuccess, isError, error, navigate]);
	return (
		<TemplateLayout>
			<div className='px-4 py-16 md:p-10 bg-slate-800'>
				<div className='p-4 mx-auto bg-white rounded-md md:w-7/12'>
					<h1 className=' text-[#F1A619] text-center tracking-wider font-semibold'>
						Login Your Account
					</h1>
					<form onSubmit={handleSubmit}>
						<TextField
							margin='normal'
							required
							fullWidth
							id='email'
							label='Email Address'
							name='email'
							autoComplete='email'
							autoFocus
							size='small'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<TextField
							margin='normal'
							required
							fullWidth
							name='password'
							label='Password'
							type='password'
							id='password'
							autoComplete='current-password'
							size='small'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<FormControlLabel
							control={<Checkbox value='remember' color='primary' />}
							label='Remember me'
						/>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}
						>
							Sign In
						</Button>
						<Grid container>
							<Grid item xs>
								<Link to='/'>Forgot password?</Link>
							</Grid>
							<Grid item>
								<Link to='/signup' variant='body2'>
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
			</div>
		</TemplateLayout>
	);
};

export default Login;
