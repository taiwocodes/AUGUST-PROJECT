import './styles/index.css'

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Registration from './pages/Registration';
import Home from './pages/Home';
import Feedback from './pages/Feedback';
import Renewal from './pages/Renewal';
import AdminLogin from './pages/AdminLogin';
import AdminPortal from './pages/AdminPortal';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import FeedbackAccepted from './pages/FeedbackAccepted';
import RegAccepted from './pages/RegAccepted';
import RenewalAccepted from './pages/RenewalAccepted';



function App() {
	return (
		<BrowserRouter>
			<Navigation/>
			<Switch>
				<Route exact path='/registration'>
					<Registration />
				</Route>
				<Route exact path='/home'>
					<Home />
				</Route>
				<Route exact path='/feedback'>
					<Feedback />
				</Route>
				<Route exact path='/renewal'>
					<Renewal />
				</Route>
				<Route exact path='/admin-login'>
					<AdminLogin />
				</Route>

				<Route path='/admin-portal'>
					<AdminPortal />
				</Route>
				<Route exact path='/feedback-accepted'>
					<FeedbackAccepted />
				</Route>
				<Route exact path='/reg-accepted'>
					<RegAccepted />
				</Route>
				<Route exact path='/renewal-accepted'>
					<RenewalAccepted />
				</Route>
    	<Route exact path='/'>
					<Home />
				</Route>
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
