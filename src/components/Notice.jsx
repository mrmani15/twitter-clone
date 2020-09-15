import React from 'react';
import { link } from '../static/FollowList';

function Notice() {
	return (
		<div className='border p-3'>
			<div className='d-flex'>
				<img
					src={link}
					alt='photo'
					height='40'
					className='rounded-pill mr-2 ml-3'
				/>
				<img
					src={link}
					alt='photo'
					height='40'
					className='rounded-pill ml-2'
				/>
			</div>
			<div className='ml-4 mt-2'>
				<span className='font-weight-bolder'>thereal_uttu </span>
				<span>and </span>
				<span className='font-weight-bolder'>ADITYA SINHA </span>
				<span>followed you</span>
			</div>
		</div>
	);
}

export default Notice;
