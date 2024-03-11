import React from 'react'
import './About.css'
import About_Pic from '../../../src/img/about_pic.png'
import le_wagon from '../../../src/img/le_wagon.png'
import iOS from '../../../src/img/ios_2.png'

const About = () => {
  return (
    <section className='styles_container'>
      <h2 className='styles_title'>About <span>Me</span></h2>
      <div className='styles_content'>
      <div className="pic_container">
        <img src={About_Pic} alt="About_Pic" className='About-Pic' />
        <ul className='styles_itens'>
          <li className='education'>
            <div className='webdev'>
              <div className='description'>
                <h3>Web-Developer</h3>
                <p>Full Stack Web Developer graduated from Le Wagon Montreal. With a solid foundation in both front-end and back-end technologies, I am dedicated to crafting impactful and functional digital experiences.</p>
              </div>
            </div>
              <a href="https://www.lewagon.com">
                <img src={le_wagon} alt="Le Wagon" className='le_wagon' />
              </a>
          </li>
          <li className='education'>
            <div className="webdev">
              <div className="description">
                <h3>iOS Developer</h3>
                <p>Following my bootcamp graduation, I delved into iOS development, honing my skills and specializing in crafting seamless experiences for Apple's ecosystem.</p>
            </div>
              </div>
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:7143249482875396096/">
                <img src={iOS} alt="iOS" className='iOS' />
              </a>
          </li>
        </ul>
        </div>
      </div>
    </section>
  );
};


export default About
