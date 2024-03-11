import React from 'react'
import './Intro.css'
import github from '../../../img/github_icon.png'
import linkedin from '../../../img/linkedin _icon.png';
import avatar from '../../../img/avatar12.png'

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hello, I am</span>
          <span>Marcelo Amaral</span>
          <span className='role'>iOS Developer </span>
        </div>
        <div class="i-buttons-container">
          <button class="button i-button">Download CV</button>
          <button class="button-secondary i-button">Contact Info</button>
        </div>
        <div className="i-icons">
          <a href='https://github.com/marcelovsk1' className='i-icons'>
            <img src={github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/marceloamaralalves/" className='i-icons'>
            <img src={linkedin} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={avatar} />
      </div>
    </div>
  )
}

export default Intro
