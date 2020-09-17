import React from 'react';

import Navbar from '../components/Navbar'
import HomeRightSideBar from '../components/HomeRightSideBar';
import MainArea from '../components/MainArea'
import HomeFeed from '../components/HomeFeed'

const Home = () => {
  return (
		<div className='home-container'>
			<div className='row'>
				<div className='col-3'>
					<Navbar />
				</div>
				<div className='col-6'>
					<MainArea />
          <HomeFeed />
				</div>
				<div className='col-3'>
					<HomeRightSideBar />
				</div>
			</div>
		</div>
  );
}

export default Home;