import React from 'react';
import ProfileNav from './ProfileNav';

import { HiOutlineLocationMarker } from 'react-icons/hi';
import { VscCalendar } from 'react-icons/vsc';

const ProfileDetail = () => {
	return (
		<div>
			<div className='ml-4'>
				<h5 className='font-weight-bolder'>Manish Kumar</h5>
				<h6 className='text-secondary'>@_Manish_Rahul</h6>
				<HiOutlineLocationMarker size='1.4rem' color='#a8b2bb' />
				<span className='text-secondary ml-2'>Patna</span>
				<VscCalendar size='1.4rem' color='#a8b2bb' className='ml-4' />
				<span className='text-secondary ml-2'>
					Joined November 2019
				</span>
				<div className='mt-2'>
					<strong>14</strong>
					<span className='text-secondary ml-2'>Following</span>
					<strong className='ml-3'>2</strong>
					<span className='text-secondary ml-2'>Followers</span>
				</div>
			</div>
			<ProfileNav />
		</div>
	);
};
export default ProfileDetail;
