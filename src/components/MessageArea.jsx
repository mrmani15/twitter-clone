import React from 'react';
import CreateLists from './CreateLists';
import { message } from '../static/FollowList';

const MessageArea = () => {
	return (
		<div
			className='d-flex justify-content-center align-items-center'
			style={{ height: '100vh' }}
		>
			<CreateLists data={message} />
		</div>
	);
};

export default MessageArea;
