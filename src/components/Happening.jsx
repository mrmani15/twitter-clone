import React from 'react';

import { CgArrowTopRightR } from 'react-icons/cg';

function Happening() {
	return (
		<div
			className='p-3'
			style={{ backgroundColor: '#f5f8fa', borderRadius: '5%' }}
		>
			<hr />
			<div className='d-flex justify-content-between p-1'>
				<div>
					<div className='text-secondary'>COVID-19 . LIVE</div>
					<div className=' font-weight-bolder'>COVID-19 in India</div>
				</div>
				<div>
					<img
						src='https://pbs.twimg.com/semantic_core_img/1255575536824233984/CiLy4der?format=jpg&name=240x240'
						alt='covid'
						className='covid-logo'
						width='80px'
						height='70px'
					/>
				</div>
			</div>
			<hr />
			<div>
				<h5 className='font-weight-bolder'>#GalaxyZFold2</h5>
				<h6 className='text-secondary'>
					Farewell flat. Pre-order now. EMI starting 12499*
				</h6>
				<p>
					<CgArrowTopRightR /> Promoted by Samsung India
				</p>
			</div>
			<hr />
			<div className='d-flex justify-content-between'>
				<div>
					<p className='text-secondary'>
						Informativos y actualidad - 4 hours ago
					</p>
					<h6 className='font-weight-bolder'>
						Madras HC judge seeks contempt action against Tamil
						actor Suriya over remarks on judges allowing NEET
					</h6>
					<p className='text-secondary'>
						Trending with:{' '}
						<span className='prime-text'>#TNStandWithSuriya</span>{' '}
						and{' '}
						<span className='prime-text'>#SuriyaAgainstNEET</span>
					</p>
				</div>
				<div>
					<img
						src='https://pbs.twimg.com/semantic_core_img/1305411943423815680/Wrpav_Q0?format=jpg&name=120x120'
						alt='suriya'
						width='90px'
						height='90px'
						className='covid-logo'
					/>
				</div>
			</div>
			<hr />
			<div>
				<h6 className='text-secondary'>Trending in India</h6>
				<h6 className='font-weight-bolder'>
					#Justice4SSRIsGlobalDemand
				</h6>
				<h6 className='text-secondary'>260K Tweets</h6>
			</div>
			<hr />
			<div>
				<h6 className='prime-text'>Show more</h6>
			</div>
		</div>
	);
}

export default Happening;
