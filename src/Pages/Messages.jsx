import React from 'react';
import SearchBar from '../components/SearchBar';

import { BiEnvelope } from 'react-icons/bi';
import CreateLists from '../components/CreateLists';
import { MessageDetail } from '../static/FollowList';
import MessageArea from '../components/MessageArea';
const Messages = () => {
	return (
		<div className='d-flex'>
			<div style={{ height: '100vh' }}>
				<div className='d-flex justify-content-between p-3 border'>
					<h4 className='font-weight-bolder'>Messages</h4>
					<div>
						<BiEnvelope size='1.5rem' color='#1da1f2' />
					</div>
				</div>
				<div className='border p-2'>
					<SearchBar />
				</div>
				<div className='border'>
					<CreateLists data={MessageDetail} />
				</div>
			</div>
			<div>
				<MessageArea />
			</div>
		</div>
	);
};

export default Messages;
