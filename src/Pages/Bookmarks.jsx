import React from 'react';
import Navbar from '../components/Navbar';
import HomeRightSideBar from '../components/HomeRightSideBar';

const Bookmarks = () => {
	return (
		<div className='home-container'>
			<div className='row'>
				<div className='col-3'>
					<Navbar />
				</div>
				<div className='col-6 border'>
					<div className='border p-3'>
						<h4 className='font-weight-bolder'>Bookmarks</h4>
						<p className='text-secondary'>@_Manish_Rahul </p>
					</div>

					<div>
						<h4 className='font-weight-bolder p-3 text-center'>
							You haven't added any Tweets to your Bookmarks yet
						</h4>
						<p className='text-secondary text-center'>
							When you do, they'll show up here.
						</p>
					</div>
				</div>
				<div className='col-3'>
					<HomeRightSideBar />
				</div>
			</div>
		</div>
	);
};

export default Bookmarks;

