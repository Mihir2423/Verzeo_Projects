import React from "react";

import ice1 from "../Images/ice-1.jpeg";
import ice2 from "../Images/ice-2.jpeg";
import ice3 from "../Images/ice-3.jpeg";
import ice4 from "../Images/ice-4.jpeg";
import ice5 from "../Images/ice-5.jpeg";
import ice6 from "../Images/ice-6.jpeg";

function MenuItem() {
  return (
    <div className="menu-item">
      <div className="ice-container">
        <img className="ice-item" alt="ice" src={ice1} />
      </div>
      <div className="ice-container">
        <img className="ice-item" alt="ice" src={ice2} />
      </div>
      <div className="ice-container">
        <img className="ice-item" alt="ice" src={ice3} />
      </div>
      <div className="ice-container">
        <img className="ice-item" alt="ice" src={ice4} />
      </div>
      <div className="ice-container">
        <img className="ice-item" alt="ice" src={ice5} />
      </div>
      <div className="ice-container">
        <img className="ice-item" alt="ice" src={ice6} />
      </div>
    </div>
  );
}

export default MenuItem;
