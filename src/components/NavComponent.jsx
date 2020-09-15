import React from 'react';

function NavComponent({ arr }) {
	return (
		<div className='d-flex mt-2'>
			{arr.map((nav, index) => {
				return (
					<div
						className='d-flex justify-content-center align-items-center w-100'
						key={index}
					>
						<h4 className='font-size p-3 text-secondary '>{nav}</h4>
					</div>
				);
			})}
		</div>
	);
}

export default NavComponent;
