import React from "react";
import "./css/Section3.css";
export default function Section3() {
  return (
    <>
      <div className="feature-card">
        <h2>Productivity</h2>
        <h3>
          <span className="green-text">Accelerate innovation</span>
          <br />
          Our AI-powered platform increases the pace of
          <br /> software development.
        </h3>
      </div>
      <div className="mid-img">
        <img style={{width:"100%"}} src="https://github.githubassets.com/assets/illu-copilot-editor-6474457a5b19.png" alt="" />
      </div>
      
      <div className="feature-card">
        <h3>
          <span className="green-text">22% increase</span>
          <br />
          in developer productivity after three years with GitHub
          <br />
          Read the report
        </h3>
      </div>

      <div className="mid-img">
        <img style={{width:"70%",height:"30rem"}} src="https://github.githubassets.com/assets/illu-actions-2-c5178134f381.png?width=783&format=webpll" alt="" />
      </div>

      <div className="feature-card">
        <h2>Collaboration</h2>
        <h3>
          <span className="blue-text">Empower developers.</span>
          <br /> With GitHub, you can secure code in minutes.
        </h3>
      </div>
      
      <div className="mid-img">
        <img
          src="https://github.githubassets.com/assets/illu-codespaces-1d2d17e8b2b7.png?width=725&format=webpll"
          alt=""
        />
        <img
          src="https://github.githubassets.com/assets/illu-mobile-4d51d19f769e.png?width=724&format=webpll"
          alt=""
        />
      </div>

      <div className="feature-card">
        <h3>
          <span className="blue-text">7x faster.</span>
          <br />
          vulnerability fixes with GitHub1
        </h3>
      </div>

      <div className="mid-img">
        <img style={{width:"70%",height:"30rem"}}src="https://github.githubassets.com/assets/illu-code-scanning-fc9dfb212aa3.png?width=772&format=webpll" alt="" />
      
      </div>
      <div className="mid-img">
        <img style={{width:"70%",height:"30rem"}}src="https://github.githubassets.com/assets/illu-secret-scanning-2-88fb429376d6.png?width=724&format=webpll" alt="" />
      </div>

    </>
  );
}
