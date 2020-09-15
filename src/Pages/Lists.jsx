import React from 'react'
import ListTop from "../components/ListTop";
import ListMid from '../components/ListMid'
import CreateLists from '../components/CreateLists';

const Lists = () => {
  return(
    <div>
      <ListTop />
      <ListMid />
      <CreateLists />
    </div>
  )
}

export default Lists