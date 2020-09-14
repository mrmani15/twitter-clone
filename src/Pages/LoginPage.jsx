import React from 'react';

import LoginPageImage from '../components/LoginPageImage';
import LoginSignup from '../components/LoginSignup';
import LoginFooter from '../components/LoginFooter';

function LoginPage() {
	return (
		<div className='container-fluid'>
			<div className='row'>
				<div className='col'>
					<LoginPageImage />
				</div>
				<div className='col'>
					<LoginSignup />
				</div>
			</div>
			<div className='container'>
				<div className='row mt-2'>
					<LoginFooter />
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
