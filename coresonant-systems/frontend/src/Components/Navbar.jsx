import React from 'react'
import "./css/Navbar.css"
import { getCurrentDate } from '../Utils/getCurrentDate';
import userAvatar from "../Images/user-avatar.png"

export default function Navbar() {

  return (
    <nav className="navbar">
      <div className="navbar-user">
        <img className="navbar-avatar" src={userAvatar} alt="User Avatar" />
        <span className="navbar-username">Soumyaranjan Badajena</span>
      </div>
      <div className="navbar-date">{getCurrentDate()}</div>
    </nav>
  );
}
