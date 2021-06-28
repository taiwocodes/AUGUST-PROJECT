import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import AdminPortal from './pages/AdminPortal';
import Feedback from './pages/Feedback';
import Renewal from './pages/Renewal';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/login'>
					<Login />
				</Route>
				<Route exact path='/register'>
					<Register />
				</Route>
				<Route exact path='/home'>
					<Home />
				</Route>
				<Route exact path='/admin-login'>
					<AdminLogin />
				</Route>
				<Route exact path='/admin-portal'>
					<AdminPortal />
				</Route>
				<Route exact path='/feedback'>
					<Feedback />
				</Route>
				<Route exact path='/renewal'>
					<Renewal />
				</Route>
				<Route exact path='/'>
					<Home />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
