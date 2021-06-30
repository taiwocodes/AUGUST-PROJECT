import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Registration from './pages/Registration';
import Home from './pages/Home';
import Feedback from './pages/Feedback';
import Renewal from './pages/Renewal';
import AdminLogin from './pages/AdminLogin';
import AdminPortal from './pages/AdminPortal';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/registration'>
					<Registration />
				</Route>
				<Route path='/home'>
					<Home />
				</Route>
				<Route path='/feedback'>
					<Feedback />
				</Route>
				<Route path='/renewal'>
					<Renewal />
				</Route>
				<Route exact path='/admin-login'>
					<AdminLogin />
				</Route>
				<Route exact path='/admin-portal'>
					<AdminPortal />
				</Route>
				<Route path='/'>
					<Home />
				</Route>
				
			</Switch>
		</BrowserRouter>
	);
}

export default App;
