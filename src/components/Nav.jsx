import React from 'react';
import { NavList } from '../static/NavList';
import {Link} from 'react-router-dom'

function Nav() {
	return (
		<div>
			{NavList.map((nav, index) => {
				return (
					<Link to={nav.nav}
						key={index}
						className='p-3 font-weight-bolder navigation-link h5'
					>
						<span className='rounded-pill p-3'>
							{nav.icon} {nav.nav}
						</span>
					</Link>
				);
			})}
		</div>
	);
}

export default Nav;
