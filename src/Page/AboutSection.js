import React from 'react';
import './AboutSection.css';
import { FaAmbulance, FaUserMd, FaStethoscope, FaHeartbeat } from 'react-icons/fa';
import aboutImg1 from '../Assests/about-doctor-1.jpg';
import aboutImg2 from '../Assests/about-dotor-2.jpg';
import aboutImg3 from '../Assests/about-doctor-3.jpg';

const AboutSection = () => {
    return (
        <section className='about-section'>
            <div className='container'>
                <div className='row align-items-center'>
                    
                    {/* ===== LEFT SIDE: 3 IMAGES GRID ===== */}
                    <div className='col-lg-6 col-md-6'>
                        <div className='about-images-grid'>
                            <div className='image-grid'>
                                <img src={aboutImg1} alt="Doctor 1" className='img-fluid grid-img-1' />
                                <img src={aboutImg2} alt="Doctor 2" className='img-fluid grid-img-2' />
                                <img src={aboutImg3} alt="Doctor 3" className='img-fluid grid-img-3' />
                            </div>
                            <div className='experience-box'>
                                <h2>20</h2>
                                <span>Year Experience</span>
                            </div>
                        </div>
                    </div>

                    {/* ===== RIGHT SIDE: CONTENT ===== */}
                    <div className='col-lg-6 col-md-6'>
                        <div className='about-content'>
                            <h5>About Us</h5>
                            <h2>The Great Place Of Medical Hospital Center</h2>
                            <p>
                                We provide the special tips and advice's of health care treatment 
                                and high level of best technology involve in the our hospital.
                            </p>

                            {/* ===== 4 FEATURES ===== */}
                            <div className='about-features'>
                                <div className='feature-item'>
                                    <div className='feature-icon'>
                                        <FaAmbulance />
                                    </div>
                                    <div>
                                        <h4>Emergency Help</h4>
                                        <span>24/7 Available</span>
                                    </div>
                                </div>
                                <div className='feature-item'>
                                    <div className='feature-icon'>
                                        <FaUserMd />
                                    </div>
                                    <div>
                                        <h4>Qualified Doctors</h4>
                                        <span>Expert Professionals</span>
                                    </div>
                                </div>
                                <div className='feature-item'>
                                    <div className='feature-icon'>
                                        <FaStethoscope />
                                    </div>
                                    <div>
                                        <h4>Best Professionals</h4>
                                        <span>Expert Doctors</span>
                                    </div>
                                </div>
                                <div className='feature-item'>
                                    <div className='feature-icon'>
                                        <FaHeartbeat />
                                    </div>
                                    <div>
                                        <h4>Medical Treatment</h4>
                                        <span>Advanced Technology</span>
                                    </div>
                                </div>
                            </div>

                            <button className='btn-about'>Read More →</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;