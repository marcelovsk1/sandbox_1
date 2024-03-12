import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
  <section className='contact-container' id='contact'>
   <div className="contact-form">
    <div className="w-left">
      <div className="awesome">
        <h2>Contact <span>me</span></h2>
        <div className="blur s-blurl"
        ></div>

        <div className="c-right">
          <form>
            <input type="text" name='user' className='user' placeholder='Name' />
            <input type="email" name='user_email' className='user' placeholder='Email' />
            <textarea name="message" className='user' placeholder='Message'></textarea>
            <input type="submit" value="Send" className="button i-button"/>
          </form>
        </div>
      </div>
    </div>
   </div>
  </section>
  )
}

export default Contact
