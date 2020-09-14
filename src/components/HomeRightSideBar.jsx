import React from 'react';
import Happening from './Happening';
import WhoToFollow from './WhoToFollow';

function HomeRightSideBar() {
	return (
		<div>
			<h3 className='font-weight-bolder'>What's happening</h3>
      <Happening />
      <WhoToFollow />
		</div>
	);
}

export default HomeRightSideBar;
