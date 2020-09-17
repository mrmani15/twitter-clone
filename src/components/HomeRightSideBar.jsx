import React from 'react';
import Happening from './Happening';
import WhoToFollow from './WhoToFollow';
import SearchBar from './SearchBar';

function HomeRightSideBar() {
	return (
		<div className=''>
			<SearchBar />
			<h3 className='mt-5 font-weight-bolder'>What's happening</h3>
			<Happening />
			<WhoToFollow />
		</div>
	);
}

export default HomeRightSideBar;
