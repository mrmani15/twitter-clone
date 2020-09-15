import React from 'react'

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {VscCalendar} from 'react-icons/vsc'

const ProfileDetail = () => {
  return (
		<div>
			<h5 className='font-weight-bolder'>Manish Kumar</h5>
			<h6 className='text-secondary'>@_Manish_Rahul</h6>
			<HiOutlineLocationMarker
				size='1.4rem'
				color='#a8b2bb'
			/>{' '}
			<span className='text-secondary'>Patna</span>
      
		</div>
  );
}
export default ProfileDetail;