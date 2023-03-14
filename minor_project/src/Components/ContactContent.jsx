import React from 'react'
import contactBg from "../Images/contact-bg.jpeg"

function ContactContent() {
    return (
      <div className="contact-container">
        <img src={contactBg} alt="contact" className='contactBg'/>
        <div className="cntc-l">
          <h1>Contact Us</h1>
          <div class="app-contact">CONTACT INFO : +91 314 3140 314</div>
        </div>
        <div className="cntc-r">
          <form className="app-form-group">
            <input className="app-form-control" placeholder="Enter Your Name" />
            <div className="app-form-group">
              <input
                className="app-form-control"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="Enter Your Contact No." />
            </div>
            <div className="app-form-group message">
              <input
                className="app-form-control"
                placeholder="Enter Your Message"
              />
            </div>
            <div className="app-form-group">
              <button className="app-form-button">CANCEL</button>
              <button className="app-form-button">SEND</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  

export default ContactContent
