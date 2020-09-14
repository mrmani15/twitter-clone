import React from 'react';

import { BsSearch } from 'react-icons/bs';

function SearchBar() {
	return (
		<div
			className=' p-2 mt-2 rounded-pill d-flex'
			style={{ backgroundColor: '#e6ecf0' }}
		>
			<BsSearch size='1.6rem' className='ml-2 mt-1' />
			<input
				type='text'
				className='search-input p-1 rounded-pill ml-2 w-100'
				placeholder='Search Twitter'
			/>
		</div>
	);
}

export default SearchBar;
