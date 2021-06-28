import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navigation(props) {
  return (
   
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          
            <h1>Team August Driver's Licence App</h1>
          
          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/registration" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/registraion">
                  Registration
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/renewal" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/renewal">
                  Renewal
                </Link>
              </li>

               
              <li
                class={`nav-item  ${
                  props.location.pathname === "/gallery" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/gallery">
                  Gallery
                </Link>
              </li>
               
              <li
                class={`nav-item  ${
                  props.location.pathname === "/applicationstatus" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/applicationstatus">
                  ApplicationStatus
                </Link>
              </li>
              
              <li
                class={`nav-item  ${
                  props.location.pathname === "/complainsuggestion" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/complainsuggestion">
                  ComplainSuggestion
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Navigation;
