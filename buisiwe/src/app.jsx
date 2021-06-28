import React from 'react';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';
import Registration from './components/Registration'
import Renewal from './pages/Renewal'
import ApplicationStatus from './components/ApplicationStatus'
import Gallery from './components/Gallery'
import ComplainSuggestion from './components/ComplainSuggestion'
import Home from './pages/Home';
import footer from './components/Footer'
import Navigation from './components/Navigation';



function App() {
	return (
		<div className="App">
		<Router>
		   <Navigation />
			<Switch>
				<Route exact path="" component={Registration}></Route>
				<Route path='/renewal'>
					<Renewal />
				</Route>
				<Route path='/gallery'>
					<Gallery />
				</Route>
				<Route path='/applicationstatus'>
					<ApplicationStatus />
				</Route>
				<Route path='/complainsuggestion'>
					<ComplainSuggestion />
				</Route>
			</Switch>
		 </Router>
		</div>
	);
}

export default App;
