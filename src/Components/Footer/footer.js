import React from 'react'
import './footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord, FaWhatsapp } from "react-icons/fa";
import { FaSquareInstagram } from 'react-icons/fa6'

const footer = () => {
  const date = new Date();
  return (
    <>
      <footer>
        <div className="icons">
          <a href="https://wa.me/919940447308" className="social-icons"><i className="bi bi-instagram"><FaWhatsapp /></i></a>
          <a href="https://www.instagram.com/saw_thish/?hl=en" className="social-icons"><i className="bi bi-instagram"><FaSquareInstagram /></i></a>
          <a href="https://x.com/sathishssd7" className="social-icons"><i className="bi bi-instagram"><FaTwitter /></i></a>
          <a href="https://discord.com/channels/1054426156146897056" className="social-icons"><i className="bi bi-instagram"><FaDiscord /></i></a>
          <a href="https://www.linkedin.com/in/sathish-surya-8715b01a3/" className="social-icons"><i className="bi bi-linkedin"><FaLinkedin /></i></a>
          <a href="https://github.com/sathishjarvis" className="social-icons"><i className="bi bi-github"><FaGithub /></i></a>
      <hr className='hr'></hr>
        </div>
        <p className='copyrights'>copyright {date.getFullYear()} &copy; all rights reserved by sathish</p>
      </footer>
    </>

  )
}

export default footer