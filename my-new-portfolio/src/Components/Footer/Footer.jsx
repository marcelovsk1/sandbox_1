import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
  <footer>
    <nav>
      <div className="nav-links-container">
      <div className="n-lista">
        <ul className="nav-link">
          <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
      </div>
      </div>
    </nav>
    <p>Copyright &#169; 2024 Marcelo Amaral</p>
  </footer>

  )
}

export default Footer
