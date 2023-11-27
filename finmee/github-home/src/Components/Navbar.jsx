import React from "react";
import  "./css/navbar.css";
import navGitLogo from "../Images/nav-git-logo.webp";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-firstChild">
        <a >
          <img src={navGitLogo} />
        </a>
        <a>Product</a>
        <a>Solutions</a>
        <a>Open Source</a>
        <a>Pricing</a>
      </div>
      <div>
        <div className="navbar-search">
          <input type="text" placeholder="Search or jump to..." />
        </div>
        <div className="navbar-login">
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
