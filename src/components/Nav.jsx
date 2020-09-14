import React from 'react';
import { NavList } from '../static/NavList';

function Nav() {
	return (
		<>
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
		</>
	);
}

export default Nav;
