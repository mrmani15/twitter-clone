import React from 'react';

import Nav from './Nav';
import HomeUserDetail from './HomeUserDetail';

const Navbar = () => {
	return (
		<div className='fixed'>
			<div className='mt-1 mb-2 p-3 ml-3'>
				<img src='/images/image.png' alt='logo' width='35px' />
			</div>
			<Nav />
			<button className='btn btn-bg rounded-pill font-weight-bolder text-white p-3'>
				Tweet
			</button>
			<HomeUserDetail />
		</div>
	);
};

export default Navbar;
