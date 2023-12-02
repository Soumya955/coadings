import React from "react";
import "./css/bodySearchBar.css";
import { LuPrinter } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";

export default function BodySearchBar() {
  return (
    <div className="search-parent">
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="search-button">
        <CiSearch className="search-icon" />
        </button>
      </div>
      <div>
        <span>
          <LuPrinter className="printer" />
        </span>
        <button className="rounded-button1">Add Item</button>
      </div>
    </div>
  );
}
