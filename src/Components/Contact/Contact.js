import React, { useRef } from 'react'
import houseIcon from '../../Image/house.jpeg'
import phone from '../../Image/phone.jpeg'
import Email from '../../Image/email.jpeg'
import './contact.css'
import emailjs from '@emailjs/browser';


const Contact = () => {

  const useform = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ob6qsw9', 'template_9acc3dr', useform.current, {
        publicKey: 'Vvxm4j7H6WwcBvOhY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };


  return (
    <>
      <section className="contact-section">
        <div className="contact-info">
          <div className="contact-box">
            <div className="icon">
              <img src={houseIcon} alt="Office Icon" />
            </div>
            <h3>Office</h3>
            <p>No.13, Bharathi Nagar,<br />Auroville Main Road, Villupuram-605104.</p>
          </div>
          <div className="contact-box">
            <div className="icon">
              <img src={phone} alt="Phone Icon" />
            </div>
            <h3>Mobile Number</h3>
            <a href="https://wa.me/919940447308">9940447308</a>
          </div>
          <div className="contact-box">
            <div className="icon">
              <img src={Email} alt="Email Icon" />
            </div>
            <h3>Email Address</h3>
            <p>sathishsurya462000@gmail.com</p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form ref={useform} onSubmit={sendEmail}>
            <div className="input-group">
              <input type="text" name="name" placeholder="Your Name" />
              <input type="email" name="email" placeholder="Your Email" />
            </div>
            <div className="input-group">
              <input type="text" name="mobile" placeholder="Your Mobile Number" />
              <input type="text" name="subject" placeholder="Your Subject" />
            </div>
            <textarea name="message" placeholder="Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
      <div className='article'>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d231.85688658955794!2d79.84018121380362!3d11.987065302374075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1724443603379!5m2!1sen!2sin"
          width={500}
          height={500}
          style={{ border: 2 }}
          allowfullscreen="true"
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </>

  )
}

export default Contact