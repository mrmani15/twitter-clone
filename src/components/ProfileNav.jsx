import React from 'react';
import NavComponent from './NavComponent';
import {ProNav } from '../static/NavList'


function ProfileNav() {
	return (
		<NavComponent arr={ProNav} />
	);
}

export default ProfileNav;
