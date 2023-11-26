import React, { useEffect, useState } from "react";
import "./css/mineToMillToMineOptimization.css";
import millToMineImg from "../Images/asset 5.jpeg";


const MineToMillToMineOptimization = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const slideUpElement = document.querySelector('.Mine-To-Mill-To-Mine-Optimization');
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
    <div className={`Mine-To-Mill-To-Mine-Optimization container ${animate ? 'slide-up' : ''}`}>
      <div>
        <h1>Mine-To-Mill-To-Mine Optimization</h1>

        <p>
          NTWIST’s newest product unlocks up to $250/oz in previously
          inaccessible value in open pit gold mines by connecting siloed data
          sources like block models, fleet management systems, stockpile
          surveys, and plant instruments. This allows your company to better
          track material flow, and feed properties, identify plan/production
          discrepancies, and correct resource models and production plans.
        </p>

        <button className="secondary-btn">Read More</button>
      </div>
      <div>
        <img
          className="machineImg"
          src={millToMineImg}
          alt="NTwist Mining Machine Image"
        />
      </div>
    </div>
  );
};

export default MineToMillToMineOptimization;
