import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar">
      <Link  to={"/"} className="logo links">
        Logo
      </Link>
      <div className="nav-links">
        <ul className="nav-menu">
          <li className="active">
            <Link className="links" to={"/"}>Home</Link>
          </li>
          <li>
            <Link className="links" to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link className="links" to={"/services"}>Services</Link>
          </li>
          <li>
            <Link className="links" to={"/products"}>Products</Link>
          </li>
          <li>
            <Link className="links" to={"/contact"}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
