import React from 'react';

import SearchBar from '../components/SearchBar';
import NavComponent from '../components/NavComponent';
import { ExploreNav } from '../static/NavList';
import ExploreNews from '../components/ExploreNews';
const Explore = () => {
	return (
		<div className='tempo border'>
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
	);
};

export default Explore;
