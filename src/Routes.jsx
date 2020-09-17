import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './Pages/Home';
import Lists from './Pages/Lists';
import Bookmarks from './Pages/Bookmarks';
import Profile from './Pages/Profile';
import Notifications from './Pages/Notifications';
import Messages from './Pages/Messages';
import Explore from './Pages/Explore';
import Login from './Pages/Login';
import Signup from './Pages/Signup'

const Routes = () => {
	return (
		<BrowserRouter>
			<Route exact path='/login' component={Login} />
			<Route exact path='/Home' component={Home} />
			<Route exact path='/Lists' component={Lists} />
			<Route exact path='/Bookmarks' component={Bookmarks} />
			<Route exact path='/Profile' component={Profile} />
			<Route exact path='/Messages' component={Messages} />
			<Route exact path='/Notifications' component={Notifications} />
			<Route exact path='/Explore' component={Explore} />
		</BrowserRouter>
	);
};

export default Routes;
