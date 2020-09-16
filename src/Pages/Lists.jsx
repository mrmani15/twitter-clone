import React from 'react'
import ListTop from "../components/ListTop";
import ListMid from '../components/ListMid'
import CreateLists from '../components/CreateLists';
import {ListDetail} from '../static/FollowList'


const Lists = () => {
  return(
    <div className='tempo'>
      <ListTop />
      <ListMid />
      <CreateLists data={ListDetail} />
    </div>
  )
}

export default Lists