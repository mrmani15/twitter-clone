import React from 'react';

import { BiHomeCircle, BiEnvelope, BiBookmark } from 'react-icons/bi';
import { FiHash } from 'react-icons/fi'
import { GrNotification } from 'react-icons/gr'
import { IoMdListBox } from 'react-icons/io'
import { HiOutlineUser } from "react-icons/hi";
import { CgMoreO } from 'react-icons/cg'

export const NavList = [
  { icon: <BiHomeCircle size='1.7rem' className='mr-3' />, nav: 'Home' },
  { icon: <FiHash size='1.7rem' className='mr-3' />, nav: 'Explore' },
  { icon: <GrNotification size='1.7rem' className='mr-3' />, nav: 'Notifications' },
  { icon: <BiEnvelope size='1.7rem' className='mr-3' />, nav: 'Messages' },
  { icon: <BiBookmark size='1.7rem' className='mr-3' />, nav: 'Bookmarks' },
  { icon: <IoMdListBox size='1.7rem' className='mr-3' />, nav: 'Lists' },
  { icon: <HiOutlineUser size='1.7rem' className='mr-3' />, nav: 'Profile' },
  { icon: <CgMoreO size='1.7rem' className='mr-3' />, nav: 'More' }
]