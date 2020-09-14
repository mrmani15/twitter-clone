import React from 'react';
import { FaGlobeAmericas } from 'react-icons/fa';
import { TweetIcon } from '../static/NavList';

import { link } from '../static/FollowList';
function TweetInput() {
	return (
		<div className='d-flex p-3 border'>
			<div>
				<img src={link} alt='my-pic' className='logo-image' />
			</div>
			<div className='ml-2' style={{ width: '100%' }}>
				<div>
					<input
						type='text'
						placeholder="What's happening?"
						className='p-3 m-2 bg-white'
						style={{ border: '0', width: '100%' }}
					/>
				</div>
				<div>
					<FaGlobeAmericas size='1.3rem' color='#1da1f2' />
					<span className='prime-text ml-2 font-weight-bolder'>
						Everyone can reply
					</span>
				</div>
				<hr />
				<div className='d-flex justify-content-between width'>
					<div>
						{TweetIcon.map((icon, index) => {
							return (
								<span key={index} className='mr-3'>
									{icon}
								</span>
							);
						})}
					</div>

					<div>
						<button
							className='btn btn-bg rounded-pill font-weight-bolder text-white'
						>
							Tweet
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TweetInput;
