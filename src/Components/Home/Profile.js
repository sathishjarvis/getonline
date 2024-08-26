import React from 'react'
import './home.css'
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord, FaWhatsapp } from "react-icons/fa";
import { FaSquareInstagram } from 'react-icons/fa6'

const Profile = () => {
    return (
        <div className="intro" data-aos="fade-up" data-aos-duration="2000">
            <h1>I'm Sathish, <br /><span className="ui">Full Stack Developer</span></h1>
            <p className='special'>JavaScript Programming with React, Node & MongoDB Specialization</p>
            <p className="specialization"><i>Specialization</i><br /><span className="spec">Web Engineer | Mern Stack </span></p>
            <p className="address"><i>Address</i><br /><span className="spec">Tamil Nadu, Auroville</span></p>
            {/* <div className="download" data-aos="fade-up" data-aos-duration="2000">
            </div> */}
            <div className="iconed">
                <a href="https://wa.me/919940447308" className="social-icon"><i className="bi bi-instagram"><FaWhatsapp /></i></a>
                <a href="https://www.instagram.com/saw_thish/?hl=en" className="social-icon"><i className="bi bi-instagram"><FaSquareInstagram /></i></a>
                <a href="https://x.com/sathishssd7" className="social-icon"><i className="bi bi-instagram"><FaTwitter /></i></a>
                <a href="https://discord.com/channels/1054426156146897056" className="social-icon"><i className="bi bi-instagram"><FaDiscord /></i></a>
                <a href="https://www.linkedin.com/in/sathish-surya-8715b01a3/" className="social-icon"><i className="bi bi-linkedin"><FaLinkedin /></i></a>
                <a href="https://github.com/sathishjarvis" className="social-icon"><i className="bi bi-github"><FaGithub /></i></a>
            </div>
        </div>
    )
}

export default Profile