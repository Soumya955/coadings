import React from "react";
import "./css/footer.css";
import ntwistLogo from "../Images/asset 1.png";
import { AiFillLinkedin } from 'react-icons/ai'
import { BiLogoTwitter } from 'react-icons/bi'

const Footer = () => {
  return (
    <footer>
      <img src={ntwistLogo} className="footer-Img" alt='Logo of NTwist organisation' />

      <div className="footer-link">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </div>

      <p className="footer-address">
        9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada
      </p>

      <div className="footer-social-icon">
         <div>
         <a href="#">
          <BiLogoTwitter/>
          </a>
          <a href="#">
          <AiFillLinkedin/>
          </a>
         
         </div>
      </div>

      <p className="footer-inc">© 2022. Ntwist Inc.</p>
    </footer>
  );
};

export default Footer;
