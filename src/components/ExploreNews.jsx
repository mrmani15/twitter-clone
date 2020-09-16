import React from 'react';
import { explore } from '../static/Explore';
import { BsChevronDown } from 'react-icons/bs';

const ExploreNews = () => {
	return (
		<div>
			{explore.map((news, index) => {
				return (
					<div key={index} className='border p-2'>
						<div className='d-flex justify-content-between'>
							<div className='text-secondary'>{news.top}</div>
							<BsChevronDown />
						</div>

						<div className='font-weight-bolder display-5'>
							{news.main}
						</div>
						<div className='text-secondary'>{news.sub}</div>
						<div className='text-secondary'>{news.tweet}</div>
					</div>
				);
			})}
		</div>
	);
};

export default ExploreNews;
