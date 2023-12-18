import React from 'react'
import "./css/customerNav.css"
import { Link } from 'react-router-dom';

export default function CustomerNav() {
  return (
    <nav className="navbar">
    <ul className="nav-list">
      <Link to={"/cinventory"} className="nav-item">
       Inventory
      </Link>
      <Link to={"/cart"} className="nav-item">
        Cart
      </Link>
      <Link className="nav-item">
        Services
      </Link>
      <Link to={"/home"} className="nav-item">
        Home
      </Link>
    </ul>
  </nav>
);
}
