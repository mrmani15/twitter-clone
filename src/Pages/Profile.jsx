import React from 'react';

import ProfileTop from '../components/ProfileTop';
import ProfileHeader from '../components/ProfileHeader';
import ProfileDetail from '../components/ProfileDetail';
import Navbar from '../components/Navbar';
import HomeRightSideBar from '../components/HomeRightSideBar';

const Profile = () => {
	return (
		<div className='home-container'>
			<div className='row'>
				<div className='col-3'>
					<Navbar />
				</div>
				<div className='col-6 border'>
					<div>
						<ProfileTop />
						<div className='border'>
							<ProfileHeader />
							<ProfileDetail />
						</div>
					</div>
				</div>
				<div className='col-3'>
					<HomeRightSideBar />
				</div>
			</div>
		</div>
	);
};

export default Profile;
