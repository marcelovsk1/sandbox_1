import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

import { useRef } from "react";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c757fko', 'template_cbwyei9', form.current, 'L3QRb5BHA0HbpW_uc')
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <section className='contact-container' id='contact'>
      <div className="contact-form">
        <div className="w-left">
          <div className="awesome">
            <h2>Contact <span>me</span></h2>
            <div className="blur s-blurl"></div>
            <div className="c-right">
              <form ref={form} onSubmit={sendEmail}>
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
  );
}

export default Contact;
