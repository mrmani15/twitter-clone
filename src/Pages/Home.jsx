import React from 'react';

import Navbar from '../components/Navbar'
import HomeRightSideBar from '../components/HomeRightSideBar';

const Home = () => {
  return (
		<div className='home-container'>
			<div className='row'>
				<div className='col-3 bg-info'>
					<Navbar />
				</div>
        <div className="col-5"></div>
        <div className="col-4">
          <HomeRightSideBar />
        </div>
			</div>
		</div>
  );
}

export default Home;