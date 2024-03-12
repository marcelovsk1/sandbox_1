import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
      <div className="name">
        <span className="first-name">Marcelo</span>
        <span className="last-name">Amaral</span>
    </div>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{listStyleType: 'none'}}>
          <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        {/* <button className="button">
          Contact Me
        </button> */}
      </div>
    </div>
  )
}

export default Navbar
