import React from 'react';

import { BiHomeCircle, BiEnvelope, BiBookmark } from 'react-icons/bi';
import { FiHash } from 'react-icons/fi'
import { GrNotification } from 'react-icons/gr'
import { IoMdListBox, IoIosStats } from 'react-icons/io'
import { HiOutlineUser } from "react-icons/hi";
import { CgMoreO } from 'react-icons/cg'
import { AiOutlineGif, AiOutlineCalendar } from "react-icons/ai";
import { BsImage } from 'react-icons/bs'
import { VscSmiley } from "react-icons/vsc";

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


export const TweetIcon = 
  [<BsImage color='#1da1f2' size='1.5rem' />, <AiOutlineGif color='#1da1f2' size='1.5rem' />, <IoIosStats color='#1da1f2' size='1.5rem' />, <VscSmiley color='#1da1f2' size='1.5rem' />, <AiOutlineCalendar color='#1da1f2' size='1.5rem' />];


export const NoticeNav = ['All', 'Mention']

export const ProNav = ['Tweets', 'Tweets & replies', 'Media', 'Likes'];
