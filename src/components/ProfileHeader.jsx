import React from 'react';

const ProfileHeader = () => {
	return (
		<div>
			<div>
				<img
					src='https://pbs.twimg.com/profile_banners/1194515173010075649/1573630004/1500x500'
					alt='Profile_header_photo'
					height='250'
					width='100%'
				/>
			</div>
			<div className='d-flex justify-content-between'>
				<div>
					<img
						src='https://pbs.twimg.com/profile_images/1194515297840975872/lB7zqbAC_400x400.jpg'
						alt='profile_photo'
						className='rounded-pill img-up ml-4'
						width='200'
					/>
				</div>
				<div>
					<button
						className='btn btn-border rounded-pill mt-4 font-weight-bolder'
						style={{ width: 'auto' }}
					>
						Edit profile
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProfileHeader;
