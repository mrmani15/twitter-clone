import React from 'react';

import { BiArrowBack, BiListPlus } from 'react-icons/bi';
import { RiMoreFill } from 'react-icons/ri';

const ListTop = () => {
	return (
		<div
			className='d-flex justify-content-between border'
			style={{ width: '100%' }}
		>
			<div className='d-flex'>
				<BiArrowBack size='1.8rem' color='#1da1f2' />
				<div className='ml-4'>
					<h4 className='font-weight-bolder'>Lists</h4>
					<p className='text-secondary'>@_Manish_Rahul </p>
				</div>
			</div>
			<div className='d-flex'>
				<BiListPlus color='#1da1f2' size='1.8rem' />
				<RiMoreFill color='#1da1f2' size='1.8rem' />
			</div>
		</div>
	);
};

export default ListTop;
