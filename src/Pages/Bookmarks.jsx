import React from 'react';

const Bookmarks = () => {
	return (
		<div>
			<div className='border p-3'>
				<h4 className='font-weight-bolder'>Bookmarks</h4>
				<p className='text-secondary'>@_Manish_Rahul </p>
			</div>

			<div>
				<h4 className='font-weight-bolder p-3 text-center'>
					You haven't added any Tweets to your Bookmarks yet
				</h4>
				<p className='text-secondary text-center'>
					When you do, they'll show up here.
				</p>
			</div>
		</div>
	);
};

export default Bookmarks;
