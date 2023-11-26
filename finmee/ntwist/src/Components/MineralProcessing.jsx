import React, { useEffect, useState } from "react";
import "./css/mineralprocessing.css";
import mineralProcessingImg from "../Images/asset 7.jpeg";


const MineralProcessing = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const slideUpElement = document.querySelector('.mineral-processing');
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
    <div className={`mineral-processing container grid ${animate ? 'slide-up' : ''}`}>
      <div>
        <h1>Mineral Processing</h1>

        <p>
          NTWIST offers a number of solutions for mills, concentrators, and
          leach plants. Our solutions help operations to reduce the effect of
          feed variability, avoid downtime and increase peak throughput while
          decreasing energy and reagent consumption.
        </p>

        <button className="secondary-btn">Read More</button>
      </div>
      <div>
        <img
          className="customImg"
          src={mineralProcessingImg}
          alt="Mineral Processing Machine Image"
        />
      </div>
    </div>
  );
};

export default MineralProcessing;
