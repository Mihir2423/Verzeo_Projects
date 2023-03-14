import { Link } from "react-router-dom";

import React from "react";

function Footer() {
  return (
    <>
      <section className="probootstrap-cta">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2
                className="probootstrap-animate"
                data-animate-effect="fadeInRight"
              >
                Get your admission now!
              </h2>
              <Link
                to="/contact"
                role="button"
                className="btn btn-primary btn-lg btn-ghost probootstrap-animate"
                data-animate-effect="fadeInLeft"
              >
                Enroll
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="probootstrap-footer probootstrap-bg" id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="probootstrap-footer-widget">
                <h3>About The School</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  provident suscipit natus a cupiditate ab minus illum quaerat
                  maxime inventore Ea consequatur consectetur hic provident
                  dolor ab aliquam eveniet alias
                </p>
                <h3>Social</h3>
                <ul className="probootstrap-footer-social">
                  <li>
                    <Link to="/">
                      <i className="fa fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-github" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-linkedin" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-md-push-1">
              <div className="probootstrap-footer-widget">
                <h3>Links</h3>
                <ul>
                  <li>
                    <Link className="text-decoration-none " to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="text-decoration-none " to="/">
                      Courses
                    </Link>
                  </li>
                  <li>
                    <Link className="text-decoration-none " to="/">
                      Teachers
                    </Link>
                  </li>
                  <li>
                    <Link className="text-decoration-none " to="/">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="probootstrap-footer-widget">
                <h3>Contact Info</h3>
                <ul className="probootstrap-contact-info">
                  <li>
                    <i className="fa fa-location-pin" />{" "}
                    <span>
                      198 Greater Noida , Galgotias University 10016
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-envelope" />
                    <span>info@domain.com</span>
                  </li>
                  <li>
                    <i className="fa fa-phone" />
                    <span>+123 456 7890</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* END row */}
        </div>
      </footer>
    </>
  );
}

export default Footer;
