import React from 'react';
import './WorkingProcess.css';
import Banner from '../Component/Banner/Banner';
import { FaCalendarCheck, FaUserMd, FaClipboardList } from 'react-icons/fa';

const WorkingProcess = () => {
    const steps = [
        {
            id: '01',
            icon: <FaCalendarCheck />,
            title: 'Make Appointment',
            description: 'It is a long established fact that a reader will be distracted by the readable content of.',
            link: '#'
        },
        {
            id: '02',
            icon: <FaUserMd />,
            title: 'Take Treatment',
            description: 'It is a long established fact that a reader will be distracted by the readable content of.',
            link: '#'
        },
        {
            id: '03',
            icon: <FaClipboardList />,
            title: 'Registration',
            description: 'It is a long established fact that a reader will be distracted by the readable content of.',
            link: '#'
        }
    ];

    return (
        <>
            {/* <Banner title='Working Process' smtitle='Working Process' /> */}
            <section className='working-process'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <div className='section-header'>
                                <h5>Working Process</h5>
                                <h2>How we work?</h2>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        {steps.map((step, index) => (
                            <div className='col-lg-4 col-md-6 col-sm-12' key={index}>
                                <div className='process-card'>
                                    <div className='process-number'>{step.id}</div>
                                    <div className='process-icon'>{step.icon}</div>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                    <a href={step.link} className='process-link'>View More →</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default WorkingProcess;