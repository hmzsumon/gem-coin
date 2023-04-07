import React, { useEffect, useState } from 'react';
import TemplateLayout from '../layouts/TemplateLayout';
import TextField from '@mui/material/TextField';
import {
	Button,
	Checkbox,
	FormControlLabel,
	Grid,
	IconButton,
	InputAdornment,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../features/auth/authApi';
import { toast } from 'react-toastify';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import ClipLoader from 'react-spinners/ClipLoader';

const Login = () => {
	const navigate = useNavigate();
	const [login, { data, isLoading, isSuccess, isError, error }] =
		useLoginMutation();
	const { user } = data || {};
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [passwordShown, setPasswordShown] = useState(false);

	// Password toggle handler
	const togglePassword = () => {
		// When the handler is invoked
		// inverse the boolean state of passwordShown
		setPasswordShown(!passwordShown);
	};

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
			if (user.role === 'admin') {
				navigate('/admin/dashboard');
			} else {
				navigate('/dashboard');
			}
		}
		if (isError) {
			toast.error(error.data.message);
		}
	}, [isSuccess, isError, error, navigate, user]);
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
							type={passwordShown ? 'text' : 'password'}
							id='password'
							autoComplete='current-password'
							size='small'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							InputProps={{
								endAdornment: (
									<InputAdornment position='end'>
										<IconButton
											aria-label='toggle password visibility'
											onClick={togglePassword}
											edge='end'
										>
											{passwordShown ? <Visibility /> : <VisibilityOff />}
										</IconButton>
									</InputAdornment>
								),
							}}
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
							{isLoading ? <ClipLoader color='#fff' size={20} /> : 'Login'}
						</Button>
						<Grid container>
							<Grid item xs>
								<Link to='/forgot-password'>Forgot password?</Link>
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
