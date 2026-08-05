import React from 'react';
import './Contact.css';
import Banner from '../Component/Banner/Banner';
import { FaFacebook, FaInstagram, FaLinkedin, FaMapLocationDot, FaTelegram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import FormContact from './FormContact';

const Contact = () => {
  return (
    <>
      <Banner title='Contact' smtitle='contact' />
      <section className='contact-us'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6'>
              <FormContact />
            </div>
            <div className='col-lg-6 col-md-6'>
              <div className='side'>
                <div className='over-lay'>
                  <h3>Contact Us For Any Informations</h3>
                  <ul className="list-unstyled">   
                    <li><FaMapLocationDot className='icon'/> Location</li>
                  </ul>
                  <hr />
                  <p>Syria, Damascus</p>
                  <li><MdEmail className='icon'/>Email & Phone</li>
                  <hr />
                  <p>zaid.hatahet.2023@gmai.com</p>
                  <p>+963 940 817 797</p>
                  <li><CiGlobe className='icon'/>Follow Us</li>
                  <hr/>
                  <ul>
                    <li className='li-icon'>
                      <a href="#!" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className='icon d'/>
                      </a>
                    </li>
                    <li className='li-icon'>
                      <a href="#!" target="_blank" rel="noopener noreferrer">
                        <FaTelegram className='icon d'/>
                      </a>
                    </li>
                    <li className='li-icon'>
                      <a href="#!" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className='icon d'/>
                      </a>
                    </li>
                    <li className='li-icon'>
                      <a href="#!" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className='icon d'/>
                      </a>
                    </li> 
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;