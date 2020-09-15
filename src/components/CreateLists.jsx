import React from 'react';

const CreateLists = () => {
	return (
		<div>
			<h4 className='font-weight-bolder border p-3 text-center'>
				You haven't created any Lists yet
			</h4>
			<p className='text-secondary text-center'>
				When you do, it'll show up here.
			</p>
			<center>
				<button
					className='btn rounded-pill font-weight-bolder text-white p-3'
					style={{ backgroundColor: '#1da1f2' }}
				>
					Create a List
				</button>
			</center>
		</div>
	);
};

export default CreateLists;
