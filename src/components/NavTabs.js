import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/nav.css";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={
            location.pathname === "/contact" ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/resume"
          className={
            location.pathname === "/resume" ? "nav-link active" : "nav-link"
          }
        >
          Resume
        </Link>
      </li>
      <a
        className="navFloat"
        href="https://github.com/dawsontc003"
        target="_blank"
      >
        <img
          src="https://dawsontc003.github.io/responsive-portfolio/Assets/github-icon.gif"
          class="card-img-to"
          alt="..."
          width="40"
          height="40"
        ></img>
      </a>
      <a href="https://www.linkedin.com/in/dawsontc/" target="_blank">
        <img
          src="https://dawsontc003.github.io/responsive-portfolio/Assets/linkedin%20icon.jpg"
          class="card-img-to"
          alt="..."
          width="40"
          height="40"
        ></img>
      </a>
    </ul>
  );
}

export default NavTabs;
