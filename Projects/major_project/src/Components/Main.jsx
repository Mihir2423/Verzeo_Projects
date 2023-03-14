import React from 'react'
import { Link } from 'react-router-dom'
import bg from "../assets/images/hero_bg.webp"

function Main() {
  return (
    <div className='main'>
        <div className='about'>
            <h4>
                Popular Courses
            </h4>
            <h1>The New Way to learn with us!</h1>
            <Link to='/contact' className="getStarted">Get Started</Link>
        </div>
      <img className='mainBg' src={bg} alt="bg"/>
    </div>
  )
}

export default Main
