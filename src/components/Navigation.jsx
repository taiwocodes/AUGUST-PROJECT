import React from "react";
import { Link } from "react-router-dom";
import '../styles/navbar.css';

function Navigation() {
  return (

    <nav className="navbar">

      <ul className="nav-links">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>

        <li className="nav-item">
          <Link to="/registration" className="nav-link">Registration</Link>
        </li>

        <li className="nav-item">
          <Link to="/renewal" className="nav-link">Renewal</Link>
        </li>

        <li className="nav-item">
          <Link to="/feedback" className="nav-link">Feedback</Link>
        </li>
    
    
        <li className="nav-item">
          <Link to="/admin-login" className="nav-link">Admin Login</Link>
        </li>

        <li className="nav-item">
          <Link to="/admin-login" className="nav-link">Admin Login</Link>
        </li>

      </ul>
    </nav>
  );
}

export default Navigation;
