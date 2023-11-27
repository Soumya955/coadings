import React from "react";
import "./css/Section1.css";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

const Section1 = () => {
  return (
    <div className="Section1-parent">
      <div className="Section1-parent1">
        <h1 className="lets-build">Let’s build from here</h1>
        <h6 className="the-world">The world’s leading AI-powered developer platform.</h6>
        <div className="container">
          <div className="container-left-div">
            <input placeholder="Email address" />
            <button>Sign Up for Github</button>
          </div>
          <div className="container-right-div">Start a free enterprise trial</div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
