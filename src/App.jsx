import React from 'react';
import './App.css';

import Home from './Pages/Home'
import Lists from './Pages/Lists';
import Bookmarks from './Pages/Bookmarks';
import Profile from './Pages/Profile';
import Notifications from './Pages/Notifications';

function App() {
	return (
		<div className='App'>
      <Notifications />
		</div>
	);
}

export default App;
