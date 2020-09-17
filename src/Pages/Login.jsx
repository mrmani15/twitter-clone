import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div className='wide login-container pt-5'>
			<center>
				<img src='/images/image.png' alt='logo' width='50px' />
			</center>

			<h3 className='font-weight-bolder text-center mt-4'>
				Log in to Twitter
			</h3>
			<div className='input-field p-3 mt-5'>
				<label htmlFor='username'>Phone, email, or username</label>
				<input type='text' className='inp p-1 w-100' />
			</div>
			<div className='input-field mt-3 p-3'>
				<label htmlFor='username'>Password</label>
				<input type='text' className='inp p-1 w-100' />
			</div>
			<button className='btn btn-bg rounded-pill font-weight-bolder text-white mt-4 mb-3 p-2'>
				Log in
			</button>
			<center>
				<Link to='signup'>
					<span>Forget password?</span>
				</Link>
				<Link to='signup' className='ml-4'>
					<span>Sign up for twitter</span>
				</Link>
			</center>
		</div>
	);
};

export default Login;
