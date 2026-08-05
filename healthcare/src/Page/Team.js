import React from 'react';
import Banner from '../Component/Banner/Banner';
import './Team.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';
import doct1 from '../Assests/ourteam1.jpg';
import doct2 from '../Assests/ourteam2.jpg';
import doct3 from '../Assests/ourteam3.jpg';
import doct4 from '../Assests/ourteam4.jpg';
import doct5 from '../Assests/ourteam5.jpg';
import doct6 from '../Assests/ourteam6.jpg';

const Team = () => {
    const doctors = [
        {
            id: 1,
            name: 'Dr. Addition Smith',
            specialty: 'Dentist',
            image: doct1,
            phone: '+963 940 817 797',
            email: 'addition@careplus.com',
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
            image: doct2,
            phone: '+963 940 817 797',
            email: 'mahfuz@careplus.com',
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
            image: doct3,
            phone: '+963 940 817 797',
            email: 'david@careplus.com',
            social: {
                facebook: '#',
                twitter: '#',
                instagram: '#',
                linkedin: '#'
            }
        },
        {
            id: 4,
            name: 'Dr. Addition Smith',
            specialty: 'Dentist',
            image: doct4,
            phone: '+963 940 817 797',
            email: 'addition2@careplus.com',
            social: {
                facebook: '#',
                twitter: '#',
                instagram: '#',
                linkedin: '#'
            }
        },
        {
            id: 5,
            name: 'Dr. Mahfuz Riad',
            specialty: 'Chiropractor',
            image: doct5,
            phone: '+963 940 817 797',
            email: 'mahfuz2@careplus.com',
            social: {
                facebook: '#',
                twitter: '#',
                instagram: '#',
                linkedin: '#'
            }
        },
        {
            id: 6,
            name: 'Dr. David Benjamin',
            specialty: 'Cardiologist',
            image: doct6,
            phone: '+963 940 817 797',
            email: 'david2@careplus.com',
            social: {
                facebook: '#',
                twitter: '#',
                instagram: '#',
                linkedin: '#'
            }
        }
    ];

    return (
        <>
            <Banner title='Our Team' smtitle='our-team' />
            
            <section className='team-section'>
                <div className='container'>
                    {/* ===== SECTION HEADER ===== */}
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <div className='section-header'>
                                <h5>Our Team</h5>
                                <h2>Meet Best Doctors</h2>
                            </div>
                        </div>
                    </div>

                    {/* ===== DOCTORS GRID ===== */}
                    <div className='row'>
                        {doctors.map((doctor) => (
                            <div className='col-lg-4 col-md-6 col-sm-12' key={doctor.id}>
                                <div className='team-card'>
                                    {/* ===== IMAGE ===== */}
                                    <div className='team-image'>
                                        <img src={doctor.image} alt={doctor.name} />
                                        <div className='team-social'>
                                            <a href={doctor.social.facebook}><FaFacebook /></a>
                                            <a href={doctor.social.twitter}><FaTwitter /></a>
                                            <a href={doctor.social.instagram}><FaInstagram /></a>
                                            <a href={doctor.social.linkedin}><FaLinkedin /></a>
                                        </div>
                                    </div>

                                    {/* ===== INFO ===== */}
                                    <div className='team-info'>
                                        <h3>{doctor.name}</h3>
                                        <span className='specialty'>{doctor.specialty}</span>
                                        
                                        <div className='team-contact'>
                                            <p><FaPhone className='icon' /> {doctor.phone}</p>
                                            <p><FaEnvelope className='icon' /> {doctor.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Team;