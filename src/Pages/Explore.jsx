import React from 'react';

import SearchBar from '../components/SearchBar';
import NavComponent from '../components/NavComponent';
import { ExploreNav } from '../static/NavList';
import ExploreNews from '../components/ExploreNews';
import Navbar from '../components/Navbar';
import HomeRightSideBar from '../components/HomeRightSideBar';

const Explore = () => {
	return (
		<div className='home-container'>
			<div className='row'>
				<div className='col-3'>
					<Navbar />
				</div>
				<div className='col-6 border'>
					<SearchBar />
					<NavComponent arr={ExploreNav} />
					<img
						src='/images/mask.png'
						alt='mask'
						className='img-fluid'
						width='100%'
					/>
					<ExploreNews />
				</div>
				<div className='col-3'>
					<HomeRightSideBar />
				</div>
			</div>
		</div>
	);
};

export default Explore;
