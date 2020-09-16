import React from 'react';

const CreateLists = ({data}) => {
	return (
		<div>
			<h4 className='font-weight-bolder p-3 text-center'>
				{data.main}
			</h4>
			<p className='text-secondary text-center'>
			{data.sub}
			</p>
			<center>
				<button
					className='btn rounded-pill font-weight-bolder text-white p-3'
					style={{ backgroundColor: '#1da1f2' }}
				>
					{data.button}
				</button>
			</center>
		</div>
	);
};

export default CreateLists;
