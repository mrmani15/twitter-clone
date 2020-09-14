import React from 'react';
import { BsChevronDown } from 'react-icons/bs';

function HomeUserDetail() {
	return (
		<div className='d-flex rounded-pill mt-5 p-2'>
			<img
				src='https://pbs.twimg.com/profile_images/1194515297840975872/lB7zqbAC_400x400.jpg'
				alt='Manish'
				className='img-fluid logo-image'
			/>

			<div>
				<div className='font-weight-bolder ml-3'>Manish Rahul</div>
				<div className='ml-3 text-secondary'>@_Manish_Rahul</div>
			</div>

			<div className=' '>
				<BsChevronDown
					color='black'
					size='1.5rem'
					className='mt-2 ml-5'
				/>
			</div>
		</div>
	);
}

export default HomeUserDetail;
