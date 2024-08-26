import React from 'react';
import { Link } from 'react-router-dom';
import profileimg from '../../Image/sathishprofile.jpg';
import Profile from './Profile';
import './home.css';

const home = () => {
  return (
    <>
      <div className="profile-box">
        <div className="profile">
          <h1 className="heading-text"><span className="letter">S</span>athish</h1>
          <img src={profileimg} alt="Sathish" />
        </div>
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