import React from 'react';

import Navbar from '../components/Navbar'

const Home = () => {
  return (
		<div className='container'>
			<div className='row'>
				<div className='col-3'>
					<Navbar />
				</div>
        <div className="col-6"></div>
        <div className="col-3"></div>
			</div>
		</div>
  );
}

export default Home;