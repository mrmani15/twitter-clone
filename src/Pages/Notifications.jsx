import React from 'react'
import { FiSettings } from 'react-icons/fi'
import NavComponent from '../components/NavComponent'
import {NoticeNav} from '../static/NavList'
import Notice from '../components/Notice'

const Notifications = () => {
  return (
		<div className='tempo border'>
			<div className='d-flex justify-content-between p-3'>
				<h4 className='font-weight-bolder'>Notifications</h4>
				<div>
					<FiSettings size='1.4rem' color='#1da1f2' />
				</div>
			</div>
			<NavComponent arr={NoticeNav} />
      <Notice />
		</div>
  );
}

export default Notifications;