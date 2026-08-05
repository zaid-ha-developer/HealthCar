import React from 'react';
import Banner from '../Component/Banner/Banner';
import Services from './Services';  // ← استدعاء Services الموجود
import './ServicesPage-nav.css';
import doct1 from '../Assests/ourteam1.jpg';
import doct2 from '../Assests/ourteam2.jpg';
import doct3 from '../Assests/ourteam3.jpg';
import LatestNews from './LatestNews';

const ServicesPage = () => {
    const doctors = [
        {
            id: 1,
            name: 'Dr. Addison Smith',
            specialty: 'Dentist',
            image: doct1,
            beds: '120 beds'
        },
        {
            id: 2,
            name: 'Dr. Habib Riad',
            specialty: 'Chiropractor',
            image: doct2,
            beds: '400 beds'
        },
        {
            id: 3,
            name: 'Dr. David Benjamin',
            specialty: 'Cardiologist',
            image: doct3,
            beds: '250 beds'
        }
    ];

    return (
        <>
            <Banner title='Services' smtitle='services' />
            
            {/* ===== SERVICES SECTION (مستدعى) ===== */}
            <Services />  {/* ← استدعاء المكون الموجود */}

            {/* ===== DOCTORS SECTION ===== */}
            <section className='doctors-page-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <div className='section-header'>
                                <h5>Our Doctors</h5>
                                <h2>Meet Best Doctors</h2>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        {doctors.map((doctor) => (
                            <div className='col-lg-4 col-md-6 col-sm-12' key={doctor.id}>
                                <div className='doctor-page-card'>
                                    <div className='doctor-page-image'>
                                        <img src={doctor.image} alt={doctor.name} />
                                    </div>
                                    <div className='doctor-page-info'>
                                        <h3>{doctor.name}</h3>
                                        <span className='specialty'>{doctor.specialty}</span>
                                        <span className='doctor-beds'>{doctor.beds}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <LatestNews />
        </>
    );
};

export default ServicesPage;