import React from "react";
import "./css/navbar.css";
import { IoMenuOutline } from "react-icons/io5";
import { LuWallet } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import logo from "../Images/logo1.jpg";

export default function NavBar() {
  return (
    <div className="nav">
      <div className="nav-parent">
        <div>
          <div>
            <IoMenuOutline className="outline" />
          </div>
          <div>
            <img
              style={{ width: "2.5rem", height: "1.4rem" }}
              src={logo}
              alt=""
            />
          </div>
          <div>Catalog</div>
          <div>Buydesk</div>
          <div>History</div>
          <div>DashBoard</div>
        </div>
        <div>
          <div>
            <button>po</button>
          </div>
          <div>
            <input type="text" placeholder="search" />
          </div>
          <div>
            <button>help</button>
          </div>
          <div>
            <LuWallet />
          </div>
          <div>
            <FaRegHeart />
          </div>
          <div>
            <IoCartOutline />
          </div>
          <div>
            <IoMdNotificationsOutline />
          </div>
          <div>
          <span style={{fontSize:"0.8rem"}}>Soumya</span>
          <CgProfile />
          </div>
        </div>
      </div>
    </div>
  );
}
