import React from 'react';
import headerImg from '../Assests/doctor.7c2bc96d.7c2bc96d67d3eba1d64a.png';
import './Home.css';
import { FaRegSquare } from "react-icons/fa";
import WorkingProcess from './WorkingProcess';
import AboutSection from './AboutSection';
import Appointment from './Appointment';
import Services from './Services';
import Testimonial from './Testimonial';
import LatestNews from './LatestNews';

const Home = () => {
    return (
        <>
            <header>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-lg-6'>
                            <h5>We Provide All Health Care Solution</h5>
                            <h2>Protect Your Health And Take Care Of Your Health</h2>
                            <button>
                                <a href="#!">Read More</a>  {/* ← غيّرت # إلى #! */}
                            </button>
                            <span>+</span>
                        </div>
                        <div className='col-lg-6 col-md-6'>
                            <div className='header-Box'>
                                <img src={headerImg} alt="Doctor" />  {/* ← أضفت alt */}
                                <FaRegSquare />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <AboutSection />
            <WorkingProcess />
            <Services />
            <Appointment />
            <Testimonial />
            <LatestNews />
        </>
    );
};

export default Home;