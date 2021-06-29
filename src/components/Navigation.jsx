import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navigation(props) {
	return (

		<nav className="navbar">
			<h1>Team August Driver's Licence App</h1>
			<ul className="nav-list-container">
				<li>
					<Link class="nav-link" to="/registraion">
						DL Application
					</Link>
				</li>
				<li>
					<Link class="nav-link" to="/renewal">
						Renewal
					</Link>
				</li>

				<li>
					<Link class="nav-link" to="/gallery">
						Gallery
					</Link>
				</li>

				<li>
					<Link class="nav-link" to="/applicationstatus">
						ApplicationStatus
					</Link>
				</li>

				<li>
					<Link class="nav-link" to="/feedback">
						Complaints/Suggestions
					</Link>
				</li>
			</ul>

		</nav>
	);
}

export default Navigation;
