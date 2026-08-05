import React from 'react';
import Banner from '../Component/Banner/Banner';
import AboutSection from './AboutSection';
import WorkingProcess from './WorkingProcess';
import Services from './Services';
import Appointment from './Appointment';
import Testimonial from './Testimonial';
import LatestNews from './LatestNews';
import Numbers from './Numbers';
import OurDoctors from './OurDoctors';
import './About-nav.css';

const About = () => {
    return (
        <>
            {/* ===== BANNER ===== */}
            <Banner title='About Us' smtitle='about-us' />

            {/* ===== ABOUT SECTION ===== */}
            <AboutSection />

            {/* ===== NUMBERS (إحصائيات) ===== */}
            <Numbers />

            {/* ===== OUR DOCTORS (الأطباء) ===== */}
            <OurDoctors />

            {/* ===== WORKING PROCESS ===== */}
            <WorkingProcess />

            {/* ===== SERVICES ===== */}
            <Services />

            {/* ===== APPOINTMENT ===== */}
            <Appointment />

            {/* ===== TESTIMONIAL ===== */}
            <Testimonial />

            {/* ===== LATEST NEWS ===== */}
            <LatestNews />
        </>
    );
};

export default About;