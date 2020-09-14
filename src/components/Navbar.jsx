import React from 'react';

import { NavList } from '../static/NavList';

const Navbar = () => {
	return (
		<div>
			<div className='mt-1 mb-2 p-3 ml-3'>
				<img src='/images/image.png' alt='logo' width='35px' />
			</div>
			{NavList.map((nav, index) => {
				return (
					<div
						key={index}
						className='p-3 font-weight-bolder navigation-link h5 '
					>
						<span className='rounded-pill p-3'>
							{nav.icon} {nav.nav}
						</span>
					</div>
				);
			})}
			<button className='btn btn-bg rounded-pill font-weight-bolder text-white p-3'>Tweet</button>
		</div>
	);
};

export default Navbar;
