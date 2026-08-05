import React from 'react';
import footerLogo from '../../Assests/logo.png';
import { IoCall } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3 col-sm-6'>
                        <img src={footerLogo} alt="Footer Logo" />  {/* ← أضفت alt */}
                        <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
                        <div className='footer-contact'>
                            <div className='footer-icon'>
                                <IoCall className='call-icon' />
                            </div>
                            <div className='footer-text'>
                                <h6>Contact Us</h6>
                                <h4>+963 940 817 797</h4>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <h2>Quick Link</h2>
                        <ul>
                            <li><a href="#!">About Us</a></li>  {/* ← غيّرت # إلى #! */}
                            <li><a href="#!">Services</a></li>
                            <li><a href="#!">Booking</a></li>
                            <li><a href="#!">Faq's</a></li>
                            <li><a href="#!">Blogs</a></li>
                            <li><a href="#!">Our Team</a></li>
                        </ul>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <h2>Our Service</h2>
                        <ul>
                            <li><a href="#!">Dental Care</a></li>
                            <li><a href="#!">Cardiac Clinic</a></li>
                            <li><a href="#!">Massege Therapy</a></li>
                            <li><a href="#!">Cardiology</a></li>
                            <li><a href="#!">Precise Diagnosis</a></li>
                            <li><a href="#!">Abmbulance Services</a></li>
                        </ul>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <h2>Subscribe</h2>
                        <form>
                            <input type='email' placeholder='Email Address' />
                            <button type='submit'>subscribe now</button>
                            <ul className='social'>
                                <li>
                                    <a href="https://www.facebook.com/zaid.hatahet.5" target="_blank" rel="noopener noreferrer">
                                        <FaFacebook />
                                    </a>
                                    <a href="https://t.me/zaid_hatahet" target="_blank" rel="noopener noreferrer">
                                        <FaTelegram />
                                    </a>
                                    <a href="https://www.instagram.com/zaid_hatahet_/" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram />
                                    </a>
                                    <a href="https://www.linkedin.com/in/zaid-hatahet-370673418" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin />
                                    </a>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <div className='footer-buttom'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12'>
                            <span>Copyright © 2024 DesertByte IT Solutions</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;