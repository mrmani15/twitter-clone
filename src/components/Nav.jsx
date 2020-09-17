import React from 'react';
import { NavList } from '../static/NavList';
import { Link } from 'react-router-dom';
import { CgMoreO } from 'react-icons/cg';

function Nav() {
	return (
		<div>
			{NavList.map((nav, index) => {
				return (
					<Link
						to={nav.nav}
						key={index}
						className='p-3 font-weight-bolder navigation-link h5'
					>
						<span className='rounded-pill p-3'>
							{nav.icon} {nav.nav}
						</span>
					</Link>
				);
			})}
			<div className='p-3 font-weight-bolder navigation-link h5'>
				<span className='rounded-pill p-3'>
					<CgMoreO size='1.7rem' className='mr-3' /> More
				</span>
			</div>
		</div>
	);
}

export default Nav;
