import React, { useEffect, useState } from "react";
import "./css/oilandgas.css";
import oilAndGasImg from "../Images/asset 8.png";


const OilAndGas = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const slideUpElement = document.querySelector('.oil-and-gas');
      if (slideUpElement) {
        const slideUpOffset = slideUpElement.offsetTop;

        const windowScroll = window.pageYOffset + window.innerHeight;
        if (windowScroll > slideUpOffset) {
          console.log('soumya')
          setAnimate(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`oil-and-gas container grid ${animate ? 'slide-up' : ''}`}>
      <div>
        <img className="customImg" src={oilAndGasImg} alt="Oil and Gas Machinery" />
      </div>
      <div>
        <h1>Oil & Gas</h1>

        <p>
          Oil and Gas plants require a high level of control and robustness in
          their operation due to the high risks to people and environment.
        </p>

        <p>
          NTWIST helps Oil & Gas customers to analyze historical data, identify
          opportunities for process control improvements, and reduce variability
          in any part of the process, thus providing enhanced reliability and
          safety.
        </p>

        <button className="secondary-btn">Read More</button>
      </div>
    </div>
  );
};

export default OilAndGas;
