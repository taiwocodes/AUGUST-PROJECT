import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/login'>
					<Login />
				</Route>
				<Route path='/register'>
					<Register />
				</Route>
				<Route path='/home'>
					<Home />
				</Route>
				<Route path='/'>
					<Register />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
