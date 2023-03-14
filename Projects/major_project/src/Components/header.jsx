import React from "react";

import Logo from "../assets/images/lg.svg";
import {Link as Scroll} from 'react-scroll'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src={Logo}
              alt="logo"
              width={30}
              height={24}
              className="d-inline-block align-text-top"
            />
            Bootstrap
          </a>
          <ul className="nav_ul">
            <li className="nav_li">
              <Link
                to="/"
                className="text-decoration-none color-black cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li className="nav_li">
              <Scroll
                to="courses"
                spy={true}
                smooth={true}
                offset={50}
                duration={300}
                className="text-decoration-none point"
              >
                Courses
              </Scroll>
            </li>
            <li className="nav_li">
              <Scroll
                to="teacher"
                spy={true}
                smooth={true}
                offset={50}
                duration={300}
                className="text-decoration-none point"
              >
                Teacher
              </Scroll>
            </li>
            <li className="nav_li">
              <Scroll
                to="footer"
                spy={true}
                smooth={true}
                offset={50}
                duration={300}
                className="text-decoration-none point"
              >
                Contact Us
              </Scroll>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
