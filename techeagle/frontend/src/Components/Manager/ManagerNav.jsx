import React from "react";
import "./css/managerNav.css";
import { Link } from "react-router-dom";

export default function ManagerNav() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <Link to={"/inventory"} className="nav-item">
         Inventory
        </Link>
        <Link to={"/addproduct"} className="nav-item">
          Add Product
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
