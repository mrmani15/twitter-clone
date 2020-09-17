import React from 'react';
import { feed } from '../static/Feed';
import { BsChevronDown, BsHeart, BsUpload } from 'react-icons/bs';
import { BiMessageRounded } from 'react-icons/bi';
import { FaRetweet } from 'react-icons/fa';
import WhoToFollow from './WhoToFollow';

const HomeFeed = () => {
	return (
		<div>
			{feed.map((news, index) => {
				return (
					<div className='border d-flex p-2' key={index}>
						<div>
							<img
								src={news.logo}
								alt='logo-user'
								className='logo-image'
							/>
						</div>
						<div className='w-100'>
							<div className='d-flex justify-content-between w-100 ml-2 p-2'>
								<div>
									<div>
										<span className='font-weight-bolder mr-2'>
											{news.name}
										</span>
										<span className='text-secondary'>
											{news.username} . {news.time}
										</span>
									</div>
									<p>{news.main}</p>
									{news.img ? (
										<img
											src={news.img}
											alt='img-source'
											className='img-fluid'
										/>
									) : null}
								</div>
								<div>
									<BsChevronDown />
								</div>
							</div>
							<div>
								<div className='d-flex justify-content-between w-100 mt-2 ml-3'>
									<div>
										<span>
											<BiMessageRounded
												size='1.4rem'
												color='#7c8b98'
												className='mr-2'
											/>
											{news.msg}
										</span>
									</div>
									<div>
										<span>
											<FaRetweet
												size='1.4rem'
												color='#7c8b98'
												className='mr-2'
											/>
											{news.retweet}
										</span>
									</div>
									<div>
										<span>
											<BsHeart
												size='1.4rem'
												color='#7c8b98'
												className='mr-2'
											/>
											{news.likes}
										</span>
									</div>
									<div>
										<span>
											<BsUpload
												size='1.4rem'
												color='#7c8b98'
												className=''
											/>
										</span>
									</div>
									<div></div>
								</div>
							</div>
						</div>
					</div>
				);
			})}
			<WhoToFollow />
		</div>
	);
};

export default HomeFeed;
