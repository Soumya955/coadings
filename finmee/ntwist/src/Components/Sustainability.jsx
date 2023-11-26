import React, { useEffect, useState } from "react";
import "./css/sustainability.css";
import sustainabilityImg from "../Images/asset 6.jpeg";



const Sustainability = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const slideUpElement = document.querySelector('.sustainability');
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
    <div className={`sustainability container grid container ${animate ? 'slide-up' : ''}`}>
      <div>
        <img className="customImg" src={sustainabilityImg} alt="Environment Sustainability Image" />
      </div>
      <div>
        <h1>Sustainability</h1>

        <p>
          Environmental stewardship is a priority for NTWIST. We help our
          customers to minimize their sustainability impact on the planet.
          Emissions or environmental targets are used alongside productivity
          targets to define success for our customers.
        </p>
        <p>
          With the increasing relevance of carbon accounting and emissions
          tracking, NTWIST offers a suite of tools to increase visibility into
          environmental performance and help processing plants track, manage,
          optimize, and report key metrics.
        </p>

        <button className="secondary-btn">Read More</button>
      </div>
    </div>
  );
};

export default Sustainability;
