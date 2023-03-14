import React from 'react'

import boxBike from "../Images/boxbike.webp";
import boxice from "../Images/bulkIce.jpeg";
import boxcater from "../Images/bulkcater.jpeg";

function ServicesContent() {
  return (
    <div id="services">
      <div className="box">
        <img src={boxcater} alt="" />
        <h2 className="h-secondary">Food Catering</h2>
        <p className="center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem,
          culpa suscipit error Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Et qui, repudiandae similique nam, recusandae quidem
          ab asperiores ex, aut fugit labore veritatis facere?
        </p>
      </div>
      <div className="box">
        <img src={boxice} alt="" />
        <h2 className="h-secondary">Bulk Ordering</h2>
        <p className="center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem,
          culpa suscipit error Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Unde laudantium a incidunt animi ad, ab dignissimos
          vero? Unde numquam odit repudiandae perferendis nisi.
        </p>
      </div>
      <div className="box">
        <img src={boxBike} alt="" />
        <h2 className="h-secondary">Food Ordering</h2>
        <p className="center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem,
          culpa suscipit error Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Necessitatibus provident fugiat aliquam minima at
          explicabo. Earum eveniet quaerat, sunt molestias nesciunt quas! Quis.
        </p>
      </div>
    </div>
  );
}

export default ServicesContent
