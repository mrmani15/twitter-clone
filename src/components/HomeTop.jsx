import React from 'react'

import { GiDrippingStar } from 'react-icons/gi'

function HomeTop() {
  return (
		<div className='d-flex justify-content-between p-3 border' >
			<h5 className='font-weight-bolder'>Home</h5>
			<div>
				<GiDrippingStar size='1.8rem' color='#1da1f2' />
			</div>
		</div>
  );
}

export default HomeTop
