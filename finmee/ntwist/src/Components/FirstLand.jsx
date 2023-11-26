import React, { useState } from "react";
import "./css/firstLand.css";
import Navbar from "./Navbar";
import nTwistImg from "../Images/asset 4.png";
import { AiOutlineArrowUp } from "react-icons/ai";
import flagImg from "../Images/asset 12.svg";

const FirstLand = () => {
  const [show, setShow] = useState(false);

  const scrollToTop = () => {
    window.scrollY >= 250 ? setShow(true) : setShow(false);
  };
  window.addEventListener("scroll", scrollToTop);
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-main-container">
          <div className="home-container-left">
            <h1>Data-powered solutions</h1>
            <h1>for Industrial Excellence</h1>

            <button className="primary-btn">Read More</button>
          </div>
          <div className="home-container-right">
            <img src={nTwistImg} alt="Home Image" />
          </div>
        </div>

        <div
          onClick={() => window.scroll(0, 0)}
          className={show ? "btm-to-top" : "btm-to-top hide"}
        >
          <AiOutlineArrowUp />
        </div>

        <div className="flag-lang ">
          <img src={flagImg} alt="flag Image" />
          <h2>EN</h2>
        </div>
      </div>
    </>
  );
};

export default FirstLand;
