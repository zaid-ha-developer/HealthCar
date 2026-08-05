import React from 'react';
import './Services.css';
import { FaBriefcaseMedical, FaSyringe, FaAmbulance, FaHeartbeat, FaStethoscope, FaTooth } from 'react-icons/fa';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            icon: <FaBriefcaseMedical />,
            title: 'Surgery',
            description: 'Phasellus venenatis porta rhoncus. Integer et viverra felis.',
            link: '#'
        },
        {
            id: 2,
            icon: <FaSyringe />,
            title: 'Vaccine',
            description: 'Phasellus venenatis porta rhoncus. Integer et viverra felis.',
            link: '#'
        },
        {
            id: 3,
            icon: <FaAmbulance />,
            title: 'Emergency',
            description: 'Phasellus venenatis porta rhoncus. Integer et viverra felis.',
            link: '#'
        },
        {
            id: 4,
            icon: <FaHeartbeat />,
            title: 'Cardiology',
            description: 'Phasellus venenatis porta rhoncus. Integer et viverra felis.',
            link: '#'
        },
        {
            id: 5,
            icon: <FaStethoscope />,
            title: 'Diagnosis',
            description: 'Phasellus venenatis porta rhoncus. Integer et viverra felis.',
            link: '#'
        },
        {
            id: 6,
            icon: <FaTooth />,
            title: 'Dental Care',
            description: 'Phasellus venenatis porta rhoncus. Integer et viverra felis.',
            link: '#'
        }
    ];

    return (
        <section className='services-section'>
            <div className='container'>
                {/* ===== SECTION HEADER ===== */}
                <div className='row'>
                    <div className='col-12 text-center'>
                        <div className='section-header'>
                            <h5>Services</h5>
                            <h2>We Cover A Big Variety Of Medical Services</h2>
                            <p>
                                We provide the special tips and advice's of health care treatment 
                                and high level of best.
                            </p>
                            <button className='btn-all-services'>All Services →</button>
                        </div>
                    </div>
                </div>

                {/* ===== SERVICES GRID ===== */}
                <div className='row'>
                    {servicesData.map((service) => (
                        <div className='col-lg-4 col-md-6 col-sm-12' key={service.id}>
                            <div className='service-card'>
                                <div className='service-icon'>{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <a href={service.link} className='service-link'>View More →</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;