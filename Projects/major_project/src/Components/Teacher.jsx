import React from "react";
import { Link } from "react-router-dom";
import Person1 from "../assets/images/person_1.jpg";
import Person2 from "../assets/images/person_2.jpg";
import Person3 from "../assets/images/person_3.jpg";
import Person4 from "../assets/images/person_4.jpg";
function Teacher() {
  return (
      <section className="probootstrap-section border" id="teacher">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center section-heading probootstrap-animate">
              <h2>Meet Our Qualified Teachers</h2>
              <p className="lead">
                Sed a repudiandae impedit voluptate nam Deleniti dignissimos
                perspiciatis nostrum porro nesciunt
              </p>
            </div>
          </div>
          <div className="teacher_row">
            <div className="teacher col-md-3 col-sm-6">
              <div className="probootstrap-teacher text-center probootstrap-animate">
                <figure className="media">
                  <img
                    src={Person1}
                    alt="Free Bootstrap Template by uicookies.com"
                    className="img-responsive"
                  />
                </figure>
                <div className="text">
                  <h3>Chris Worth</h3>
                  <p>Physical Education</p>
                  <ul className="probootstrap-footer-social">
                    <li className="twitter">
                      <Link className="text-decoration-none" to="/">
                        <i className="fa fa-twitter" />
                      </Link>
                    </li>
                    <li className="facebook">
                      <Link to="/">
                        <i className="fa fa-facebook" />
                      </Link>
                    </li>
                    <li className="instagram">
                      <Link to="/">
                        <i className="fa fa-instagram" />
                      </Link>
                    </li>
                    <li className="google-plus">
                      <Link to="/">
                        <i className="fa fa-google" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="teacher col-md-3 col-sm-6">
              <div className="probootstrap-teacher text-center probootstrap-animate">
                <figure className="media">
                  <img
                    src={Person2}
                    alt="Free Bootstrap Template by uicookies.com"
                    className="img-responsive"
                  />
                </figure>
                <div className="text">
                  <h3>Janet Morris</h3>
                  <p>English Teacher</p>
                  <ul className="probootstrap-footer-social">
                    <li className="twitter">
                      <Link to="/">
                        <i className="fa fa-twitter" />
                      </Link>
                    </li>
                    <li className="facebook">
                      <Link to="/">
                        <i className="fa fa-facebook" />
                      </Link>
                    </li>
                    <li className="instagram">
                      <Link to="/">
                        <i className="fa fa-instagram" />
                      </Link>
                    </li>
                    <li className="google-plus">
                      <Link to="/">
                        <i className="fa fa-google" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="clearfix visible-sm-block visible-xs-block" />
            <div className="teacher col-md-3 col-sm-6">
              <div className="probootstrap-teacher text-center probootstrap-animate">
                <figure className="media">
                  <img
                    src={Person3}
                    alt="Free Bootstrap Template by uicookies.com"
                    className="img-responsive"
                  />
                </figure>
                <div className="text">
                  <h3>Linda Reyez</h3>
                  <p>Math Teacher</p>
                  <ul className="probootstrap-footer-social">
                    <li className="twitter">
                      <Link to="/">
                        <i className="fa fa-twitter" />
                      </Link>
                    </li>
                    <li className="facebook">
                      <Link to="/">
                        <i className="fa fa-facebook" />
                      </Link>
                    </li>
                    <li className="instagram">
                      <Link to="/">
                        <i className="fa fa-instagram" />
                      </Link>
                    </li>
                    <li className="google-plus">
                      <Link to="/">
                        <i className="fa fa-google" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="teacher col-md-3 col-sm-6">
              <div className="probootstrap-teacher text-center probootstrap-animate">
                <figure className="media">
                  <img
                    src={Person4}
                    alt="Free Bootstrap Template by uicookies.com"
                    className="img-responsive"
                  />
                </figure>
                <div className="text">
                  <h3>Jessa Sy</h3>
                  <p>Physics Teacher</p>
                  <ul className="probootstrap-footer-social">
                    <li className="twitter">
                      <Link to="/">
                        <i className="fa fa-twitter" />
                      </Link>
                    </li>
                    <li className="facebook">
                      <Link to="/">
                        <i className="fa fa-facebook" />
                      </Link>
                    </li>
                    <li className="instagram">
                      <Link to="/">
                        <i className="fa fa-instagram" />
                      </Link>
                    </li>
                    <li className="google-plus">
                      <Link to="/">
                        <i className="fa fa-google" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Teacher;
