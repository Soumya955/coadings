import React from "react";
import "./css/navbar.css";
import { FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-parent">
        <div>
          <div>Reeco</div>
          <div>Store</div>
          <div>Orders</div>
          <div>Analitics</div>
        </div>
        <div>
          <div><FaShoppingCart /></div>
          <div>Hello,James,</div>
        </div>
      </div>
    </div>
  );
}
