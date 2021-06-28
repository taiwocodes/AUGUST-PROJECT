import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
<<<<<<< HEAD
import AdminLogin from './pages/AdminLogin';
import AdminPortal from './pages/AdminPortal';
=======
import Feedback from './pages/Feedback';
import Renewal from './pages/Renewal';
>>>>>>> origin/master

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
<<<<<<< HEAD
				<Route exact path='/admin-login'>
					<AdminLogin />
				</Route>
				<Route exact path='/admin-portal'>
					<AdminPortal />
=======
				<Route path='/feedback'>
					<Feedback />
				</Route>
				<Route path='/renewal'>
					<Renewal />
				</Route>
				<Route path='/'>
					<Home />
>>>>>>> origin/master
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
