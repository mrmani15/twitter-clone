import React from 'react';

import { Follow } from '../static/FollowList';

function WhoToFollow() {
	return (
		<div
			className='p-3'
			style={{ backgroundColor: '#f5f8fa', borderRadius: '5%' }}
		>
			<h4 className='font-weight-bolder p-3'>Who to follow</h4>
			{Follow.map((user, index) => {
				return (
					<div
						key={index}
						className='d-flex justify-content-between mb-3 p-3 b-top'
					>
						<div className='d-flex'>
							<div>
								<img
									src={user.img}
									alt='user'
									className='logo-image'
								/>
							</div>
							<div className='ml-2'>
								<h6 className='font-weight-bolder'>
									{user.name}
								</h6>
								<h6 className='text-secondary'>
									@{user.username}
								</h6>
							</div>
						</div>
						<div>
							<button className=' btn btn-follow rounded-pill font-weight-bolder'>
								Follow
							</button>
						</div>
					</div>
				);
			})}
			<hr />
			<div>
				<h6 className='prime-text'>Show more</h6>
			</div>
		</div>
	);
}

export default WhoToFollow;
