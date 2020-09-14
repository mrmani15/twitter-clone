import React from 'react';
import { Footer } from '../static/FooterList';

const LoginFooter = () => {
	return (
		<div>
			{Footer.map((footer, index) => {
				return <span className='mr-4 text-secondary' key={index}>{footer}</span>;
			})}
		</div>
	);
};

export default LoginFooter;
