import React from 'react';

import ListTop from '../components/ListTop';
import ListMid from '../components/ListMid';
import CreateLists from '../components/CreateLists';
import { ListDetail } from '../static/FollowList';
import Navbar from '../components/Navbar';
import HomeRightSideBar from '../components/HomeRightSideBar';

const Lists = () => {
	return (
		<div className='home-container'>
			<div className='row'>
				<div className='col-3'>
					<Navbar />
				</div>
				<div className='col-6'>
					<ListTop />
					<ListMid />
					<CreateLists data={ListDetail} />
				</div>
				<div className='col-3'>
					<HomeRightSideBar />
				</div>
			</div>
		</div>
	);
};

export default Lists;