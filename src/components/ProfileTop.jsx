import React from 'react';

import { BiArrowBack } from 'react-icons/bi';

function ProfileTop() {
	return (
		<div className='d-flex border' style={{ width: '100%' }}>
			<BiArrowBack size='1.8rem' color='#1da1f2' className='mt-3 ml-3' />
			<div className='ml-4 mt-2'>
				<h4 className='font-weight-bolder'>Manish Kumar</h4>
				<p className='text-secondary'>0 Tweets </p>
			</div>
		</div>
	);
}

export default ProfileTop;
