import React from 'react';
import './OurDoctors.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import doctor1 from '../Assests/doctor1.jpg';
import doctor2 from '../Assests/doctor2.jpg';
import doctor3 from '../Assests/doctor3.jpg';

const OurDoctors = () => {
    const doctors = [
        {
            id: 1,
            name: 'Dr. Addition Smith',
            specialty: 'Dentist',
            image: doctor1,
            social: {
                facebook: '#',
                twitter: '#',
                instagram: '#',
                linkedin: '#'
            }
        },
        {
            id: 2,
            name: 'Dr. Mahfuz Riad',
            specialty: 'Chiropractor',
            image: doctor2,
            social: {
                facebook: '#',
                twitter: '#',
                instagram: '#',
                linkedin: '#'
            }
        },
        {
            id: 3,
            name: 'Dr. David Benjamin',
            specialty: 'Cardiologist',
            image: doctor3,
            social: {
                facebook: '#',
                twitter: '#',
                instagram: '#',
                linkedin: '#'
            }
        }
    ];

    return (
        <section className='doctors-section'>
            <div className='container'>
                {/* ===== SECTION HEADER ===== */}
                <div className='row'>
                    <div className='col-12 text-center'>
                        <div className='section-header'>
                            <h5>Our Doctor</h5>
                            <h2>Meet Best Doctors</h2>
                        </div>
                    </div>
                </div>

                {/* ===== DOCTORS CARDS ===== */}
                <div className='row'>
                    {doctors.map((doctor) => (
                        <div className='col-lg-4 col-md-6 col-sm-12' key={doctor.id}>
                            <div className='doctor-card'>
                                <div className='doctor-image'>
                                    <img src={doctor.image} alt={doctor.name} />
                                    <div className='doctor-social'>
                                        <a href={doctor.social.facebook}><FaFacebook /></a>
                                        <a href={doctor.social.twitter}><FaTwitter /></a>
                                        <a href={doctor.social.instagram}><FaInstagram /></a>
                                        <a href={doctor.social.linkedin}><FaLinkedin /></a>
                                    </div>
                                </div>
                                <div className='doctor-info'>
                                    <h3>{doctor.name}</h3>
                                    <span>{doctor.specialty}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurDoctors;