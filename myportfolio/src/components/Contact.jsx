import React from 'react'
import '../styles/contact.css'

const Contact = () => {
  return (
  <section id='contactPage'>
    <div id="contact">
        <h1 className="contactPagetitle">Contact Me</h1>
        <span className='contactDesc'>Please fill out form below to discuss any work oppertunities.</span>
        <form className="contactForm">
            <input type="text" className='name' placeholder='Your Name'/>
            <input type="email" className='email' placeholder='Your Email'/>
            <textarea className='msg' name="message" rows={5} placeholder='Your Message'></textarea>
            <button type='submit'  className="submitBtn">Submit</button>
            <div className="links">
                <img src="./src/assets/contacts/facebook.png" alt="facebook" className="link" />
                <img src="./src/assets/contacts/instagram.png" alt="instagram" className="link" />
                <img src="./src/assets/contacts/linkedin.png" alt="linkedin" className="link" />
                <img src="./src/assets/contacts/facebook.png" alt="facebook" className="link" />
            </div>
        </form>
        </div>
  </section>
  )
}

export default Contact
