import React from "react";

import abtImg1 from "../Images/abt-ice1.jpeg";
import abtImg2 from "../Images/abt-ice2.jpeg";
import abtImg3 from "../Images/abt-ice3.jpeg";

function AboutContent() {
  return (
    <div className="about-content">
      <div className="abt-l">
        <h1>What We Do</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quo
          doloribus maxime impedit quidem sunt. Fuga quam iure dolor consequatur
          quisquam velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p>Quisquam velit esse cillum dolore eu.</p>
      </div>
      <div className="abt-r">
        <div className="about-img">
          <img src={abtImg1} alt="iceCream" />
          <h4>Classic</h4>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div className="about-img">
          <img src={abtImg2} alt="iceCream" />
          <h4>Cakes</h4>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div className="about-img">
          <img src={abtImg3} alt="iceCream" />
          <h4>Vegan</h4>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
