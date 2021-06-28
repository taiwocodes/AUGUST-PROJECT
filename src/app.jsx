import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Registration from './pages/Registration';
import Home from './pages/Home';
import Feedback from './pages/Feedback';
import Renewal from './pages/Renewal';

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
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
