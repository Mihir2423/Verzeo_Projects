import React from "react";
import { Link } from "react-router-dom";
import Bg from "../Images/home-bg.jpeg";
import MenuItem from "../Components/MenuItem";


function HomePage() {
  return (
    <div className="homePage">
      <div className="home">
        <img className="homeBg" src={Bg} alt="homeBg" />
      </div>
      <div className="home-content">
        <h1> Ice Cream Shop </h1>
        <h2> Ice Cream Menu </h2>
        <MenuItem/>
        <Link to="/products">
          <button className="button">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
