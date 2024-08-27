import React from 'react'
import html from '../../Image/html.png';
import css from '../../Image/css-3.png';
import figma from '../../Image/figma.png';
import js from '../../Image/js.png';
import react from '../../Image/react.png';
import mysql from '../../Image/mysql.jpg';
import nodejs from '../../Image/nodejs.png';
// import { Link } from 'react-router-dom';
import './about.css';

const about = () => {
  return (
    <>
      <article>
        <h1>Best Website Design Person In Villupuram</h1>
        <h3>Better design for your digital products.</h3>
        <p>At Tamilnadu Digital, we are passionate about harnessing the power of digital technologies to empower businesses and
          individuals alike. Based in the vibrant state of Tamil Nadu, we are at the forefront of the digital revolution, offering
          innovative solutions that propel our clients towards success in the ever-evolving digital landscape.</p>
      </article>


      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-content">
            <h2>2021</h2>
            <p>Has completed a bachelor's degree in <strong>computer science</strong> and has full knowledge of <strong>operating systems</strong> and green computing. </p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-content">
            <h2>2022</h2>
            <p>Completed the Full Stack Development program in the <strong>MERN stack at TimesPro Institute</strong>, gaining knowledge in that area.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-content">
            <h2>2023</h2>
            <p>Completed a three-month <strong>internship at Kosoft Company</strong>, focusing on <strong>React</strong> for frontend development and <strong>.NET and MySQL</strong> for backend development.</p>
          </div>
        </div>
      </div>





      <main>
        <div className='stack'>
          <h1 className='skilled'>Technology Skills & knowledge</h1>
          <div className='stack_coloum'>
            <img src={html} alt="HTML" />
            <p className="skill-progress" style={{ width: '98%', color: 'white' }}>HTML -98%</p>
          </div>
          <div className='stack_coloum'>
            <img src={css} alt="css" />
            <p className="skill-progress" style={{ width: '90%', color: 'white' }}>css -90%</p>
          </div>
          <div className='stack_coloum'>
            <img src={js} alt="js" />
            <p className="skill-progress" style={{ width: '95%', color: 'white' }}>javascript -95%</p>
          </div>
          <div className='stack_coloum'>
            <img src={figma} alt="figma" />
            <p className="skill-progress" style={{ width: '85%', color: 'white' }}>figma -85%</p>
          </div>
          <div className='stack_coloum'>
            <img src={react} alt="react" />
            <p className="skill-progress" style={{ width: '95%', color: 'white' }}>react -95%</p>
          </div>
          <div className='stack_coloum'>
            <img src={nodejs} alt="node" />
            <p className="skill-progress" style={{ width: '85%', color: 'white' }}>node Js -85%</p>
          </div>
          <div className='stack_coloum'>
            <img src={mysql} alt="mysql" />
            <p className="skill-progress" style={{ width: '90%', color: 'white' }}>mysql -90%</p>
          </div>
        </div>
      </main>
    </>

  )
}

export default about