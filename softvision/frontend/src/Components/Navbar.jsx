import React from 'react';
import { Link } from 'react-router-dom';
import "./css/Navbar.css"

export default function Navbar(){
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/"  className="navbar-link">Create a User</Link>
        </li>
        <li className="navbar-item">
          <Link to="/users"  className="navbar-link">Users</Link>
        </li>
        <li className="navbar-item">
          <Link to="/update"  className="navbar-link">Update user</Link>
        </li>
        <li className="navbar-item">
          <Link to="/delete"  className="navbar-link">Delete User</Link>
        </li>
        <li className="navbar-item">
          <Link to="/validatemobileno"  className="navbar-link">ValidateMobileNo</Link>
        </li>
        <li className="navbar-item">
          <Link to="/login"  className="navbar-link">login</Link>
        </li>
      </ul>
    </nav>
  );
};

 
