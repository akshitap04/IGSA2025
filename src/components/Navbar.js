import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Optional: for styling

export default function Navbar() {
  return (
    <div className="header-navbar">
      <ul className="nav-links">
        <li>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">Upcoming News</NavLink>
        </li>
        <li>
          <NavLink to="/udnews" activeClassName="active">UD News</NavLink>
        </li>
        <li>
          <NavLink to="/newteam" activeClassName="active">About US</NavLink>
        </li>
      </ul>
    </div>
  );
}
