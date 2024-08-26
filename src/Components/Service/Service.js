import React from 'react'
import statics from '../../Image/static.png'
import dynamics from '../../Image/dynamic.jpeg'
import mobiles from '../../Image/mobile_app.jpeg'
import logodesign from '../../Image/logodesign.jpg'
import digital from '../../Image/digital marketing.jpg'
import { Link } from 'react-router-dom'
import './service.css'

const Service = () => {

  const services = [
    {
      id: 1,
      title: 'Business Website Development',
      description: 'We build fast, secure, and responsive static websites tailored to your needs.',
      icon: statics
    },
    {
      id: 2,
      title: 'E-commerce Website Development',
      description: 'Our dynamic websites are built to handle all your business needs with advanced features.',
      icon: dynamics
    },
    {
      id: 3,
      title: 'Mobile App Development',
      description: 'We offer native and cross-platform mobile app development services for Android.',
      icon: mobiles
    },
    {
      id: 4,
      title: 'Logo Designs',
      description: 'We offer custom logos with unique design ideas.',
      icon: logodesign
    },
    {
      id: 5,
      title: 'Digital Marketing',
      description: 'digital Marketing was potential for digital growth of organisation.',
      icon: digital
    }
  ];
  return (
    <section className="services-section">
      <h2>Services</h2>
      <div className="services-container">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <img src={service.icon} alt={service.title} className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>


      <div class="pricing-container">
        <div class="pricing-header">
          <div class="plan-selector">
            <span class="active">Business Website Plan</span>
          </div>
        </div>
        <div class="pricing-content">
          <div class="plan-image">
            <img src={statics} alt={services.title} />
            <div class="price">
              <p>2999</p>
              <p>+12% GST</p>
            </div>
            <h2>STARTUP PLAN</h2>
          </div>
          <div class="plan-details">
            <ul>
              <li>Free Domain 1 Year</li>
              <li>Free Hosting 1 Year</li>
              <li>Upto 5 pages</li>
              <li>Social Media Integration</li>
              <li>Google Maps</li>
              <li>Contact Form</li>
              <li>Mobile Responsive</li>
              <li>Yearly Renewal Rs.500+Domain Charge</li>
            </ul>
            <Link to="/contact" className="get-quote-btn">GET QUOTE </Link>
          </div>
        </div>
      </div>
      <div class="pricing-container">
        <div class="pricing-header">
          <div class="plan-selector">
            <span class="active">E-Commerce Website Plan</span>
          </div>
        </div>
        <div class="pricing-content">
          <div class="plan-image">
            <img src={dynamics} alt={services.title} />
            <div class="price">
              <p>5999</p>
              <p>+12% GST</p>
            </div>
            <h2>STANDARD PLAN</h2>
          </div>
          <div class="plan-details">
            <ul>
              <li>Free Domain 1 Year</li>
              <li>Free Hosting 1 Year</li>
              <li>Upto 10 pages</li>
              <li>Whatsapp Intagration</li>
              <li>Social Media Integration</li>
              <li>Standard Design</li>
              <li>Gallery Section</li>
              <li>Business Mail-1</li>
              <li>Google Maps</li>
              <li>Contact Form</li>
              <li>Mobile Responsive</li>
              <li>Yearly Renewal Rs.1000+Domain Charge</li>
            </ul>
            <Link to="/contact" className="get-quote-btn">GET QUOTE </Link>
          </div>
        </div>
      </div>
      <div class="pricing-container">
        <div class="pricing-header">
          <div class="plan-selector">
            <span class="active">Logo Design Plan</span>
          </div>
        </div>
        <div class="pricing-content">
          <div class="plan-image">
            <img src={logodesign} alt={services.title} />
            <div class="price">
              <p>5999</p>
              <p>+12% GST</p>
            </div>
            <h2>STANDARD PLAN</h2>
          </div>
          <div class="plan-details">
            <ul>
              <li>Logo Design Format - JPG/PNG</li>
              <li>3D Logo</li>
              <li>text Logo</li>
              <li>Business Card</li>
              <li>Competitors Logo Analysis</li>
              <li>Extra Design</li>
              <li>Responsive Facebook Cover & Profile Pic</li>
              <li>Letterhead</li>
              <li>Logo within a day</li>
              <li>Custom graphics</li>
              <li>Mobile Responsive</li>
            </ul>
            <Link to="/contact" className="get-quote-btn">GET QUOTE </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service