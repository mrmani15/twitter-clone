import React from 'react';

import ProfileTop from '../components/ProfileTop'
import ProfileHeader from '../components/ProfileHeader';
import ProfileDetail from '../components/ProfileDetail'

const Profile = () => {
  return(
    <div className='tempo'>
      <ProfileTop />
      <ProfileHeader />
      <ProfileDetail />
    </div>
  )
}

export default Profile