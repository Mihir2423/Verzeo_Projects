import React from 'react'
import { Link } from 'react-router-dom'
import sm_1 from "../assets/images/img_sm_1.jpg"
import sm_2 from "../assets/images/img_sm_2.jpg"
import sm_3 from "../assets/images/img_sm_3.jpg"
import sm_4 from "../assets/images/img_sm_4.jpg"

function Courses() {
  return (
    <section className="probootstrap-section probootstrap-bg-white probootstrap-border-top" id="courses">
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-md-offset-3 text-center section-heading probootstrap-animate">
        <h2>Our Featured Courses</h2>
        <p className="lead">
          Sed a repudiandae impedit voluptate nam Deleniti dignissimos
          perspiciatis nostrum porro nesciunt
        </p>
      </div>
    </div>
    {/* END row */}
    <div className="row">
      <div className="col-md-6">
        <div className="probootstrap-service-2 probootstrap-animate">
          <div className="image">
            <div className="image-bg">
              <img
                src={sm_1}
                alt="Free Bootstrap Template by uicookies.com"
              />
            </div>
          </div>
          <div className="text">
            <span className="probootstrap-meta">
            <i className="fa fa-calendar" /> July 10, 2017
            </span>
            <h3 className='courseName'>Application Design</h3>
            <p>
              Laboriosam pariatur modi praesentium deleniti molestiae officiis
              atque numquam quos quis nisi voluptatum architecto rerum error.
            </p>
            <p>
              <Link to="/" className="btn btn-primary">
                Enroll now
              </Link>
              <span className="enrolled-count">2,928 students enrolled</span>
            </p>
          </div>
        </div>
        <div className="probootstrap-service-2 probootstrap-animate">
          <div className="image">
            <div className="image-bg">
              <img
               src={sm_3}
                alt="Free Bootstrap Template by uicookies.com"
              />
            </div>
          </div>
          <div className="text">
            <span className="probootstrap-meta">
            <i className="fa fa-calendar" /> July 10, 2017
            </span>
            <h3 className='courseName'>Chemical Engineering</h3>
            <p>
              Laboriosam pariatur modi praesentium deleniti molestiae officiis
              atque numquam quos quis nisi voluptatum architecto rerum error.
            </p>
            <p>
              <Link to="/" className="btn btn-primary">
                Enroll now
              </Link>{" "}
              <span className="enrolled-count">7,202 students enrolled</span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="probootstrap-service-2 probootstrap-animate">
          <div className="image">
            <div className="image-bg">
              <img
                src={sm_2}
                alt="Free Bootstrap Template by uicookies.com"
              />
            </div>
          </div>
          <div className="text">
            <span className="probootstrap-meta">
              <i className="fa fa-calendar" /> July 10, 2017
            </span>
            <h3 className='courseName'>Math Major</h3>
            <p>
              Laboriosam pariatur modi praesentium deleniti molestiae officiis
              atque numquam quos quis nisi voluptatum architecto rerum error.
            </p>
            <p>
              <Link to="/" className="btn btn-primary">
                Enroll now
              </Link>
              <span className="enrolled-count">12,582 students enrolled</span>
            </p>
          </div>
        </div>
        <div className="probootstrap-service-2 probootstrap-animate">
          <div className="image">
            <div className="image-bg">
              <img
                src={sm_4}
                alt="Free Bootstrap Template by uicookies.com"
              />
            </div>
          </div>
          <div className="text">
            <span className="probootstrap-meta">
            <i className="fa fa-calendar" /> July 10, 2017
            </span>
            <h3 className='courseName'>English Major</h3>
            <p>
              Laboriosam pariatur modi praesentium deleniti molestiae officiis
              atque numquam quos quis nisi voluptatum architecto rerum error.
            </p>
            <p>
              <Link to="/" className="btn btn-primary">
                Enroll now
              </Link>
              <span className="enrolled-count">9,582 students enrolled</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Courses
