import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
   <div className="contact-form">
    <div className="w-left">
      <div className="awesome">
        <span>Get in touch</span>
        <span>Contact me</span>
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
  )
}

export default Contact
