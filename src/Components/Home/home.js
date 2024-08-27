import React from 'react';
import { Link } from 'react-router-dom';
import profileimg from '../../Image/sathishprofile.jpg';
import Profile from './Profile';
import resume from '../../Image/sathishResume.pdf';
import './home.css';

const home = () => {
  return (
    <>
      <div className="profile-box">
        <div className="profile">
          <h1 className="heading-text"><span className="letter">S</span>athish</h1>
          <img src={profileimg} alt="Sathish" />
        </div>
        <Link to={resume} target='blank'><button className='btn btn-info margin'>download CV</button></Link>
        <div className="talk">
          <Link to="/contact">
            <button className="contact-btn"><span>Let's Work Together..!</span></button>
          </Link>
        </div>
      </div>
      <Profile/>
    </>

  )
}

export default home;