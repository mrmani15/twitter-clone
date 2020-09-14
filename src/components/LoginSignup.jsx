import React from 'react';

const LoginSignup = () => {
	return (
		<div className='login-signup'>
			<img src='/images/image.png' alt='logo' width='50' />
			<h1 className='font-weight-bolder mt-4'>
				See what's happening in the world right now
			</h1>
			<p className='font-weight-bolder mt-5'>Join Twitter today</p>
			<button className='btn btn-bg rounded-pill mt-1 text-white font-weight-bolder'>
				Sign up
			</button>
			<button className='btn btn-border rounded-pill mt-4 font-weight-bolder'>
				Log in
			</button>
		</div>
	);
};

export default LoginSignup;
