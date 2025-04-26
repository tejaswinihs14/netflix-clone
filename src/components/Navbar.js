import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
          className="nav-logo"
        />
      </Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/movies" className="nav-link">
          Movies
        </Link>
        <Link to="/tv-shows" className="nav-link">
          TV Shows
        </Link>
        <Link to="/my-list" className="nav-link">
          My List
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
