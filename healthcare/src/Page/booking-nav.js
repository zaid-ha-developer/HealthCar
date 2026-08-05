import React from 'react';
import Banner from '../Component/Banner/Banner';
import Appointment from './Appointment';
import './booking-nav.css';

const Booking = () => {
    return (
        <>
            <Banner title='Booking' smtitle='booking' />
            <Appointment />
        </>
    );
};

export default Booking;