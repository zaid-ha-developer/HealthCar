import React, { useState } from 'react';
import Banner from '../Component/Banner/Banner';
import './ServiceDetails-nav.css';
import { FaCheck, FaDownload, FaPlus, FaMinus } from 'react-icons/fa';

const ServiceDetails = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            id: 1,
            question: 'How Doctor Can Ease Your Pain?',
            answer: 'Doctors can ease your pain through proper diagnosis, medication, physical therapy, and advanced treatment options. They work with you to create a personalized pain management plan.'
        },
        {
            id: 2,
            question: 'How do I withdraw from a subject?',
            answer: 'Withdrawal from a subject requires proper consultation with your healthcare provider. They will guide you through the process and ensure your safety during any treatment changes.'
        },
        {
            id: 3,
            question: 'Understand Doctor Before You Regret?',
            answer: 'Understanding your doctor\'s advice and treatment plan is crucial. Always ask questions, seek second opinions if needed, and make informed decisions about your healthcare.'
        },
        {
            id: 4,
            question: 'What types of symptoms do you suspect?',
            answer: 'Common symptoms to watch for include persistent pain, fatigue, fever, changes in appetite, difficulty breathing, and unusual bleeding. Consult a doctor for proper diagnosis.'
        },
        {
            id: 5,
            question: 'We Teach You How To Feel Better?',
            answer: 'Our healthcare team provides education on lifestyle changes, nutrition, exercise, and mental health to help you feel better and maintain a healthy life.'
        },
        {
            id: 6,
            question: 'How Can I Contact You?',
            answer: 'You can reach us through our contact page, by phone at +963 940 817 797, or by email at info@careplus.com. Our team is available 24/7.'
        }
    ];

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <Banner title='Service Details' smtitle='service-details' />
            
            <section className='service-details-section'>
                <div className='container'>
                    <div className='row'>
                        
                        {/* ===== LEFT SIDE ===== */}
                        <div className='col-lg-8 col-md-12'>
                            
                            {/* ===== WHY MEDICAL ===== */}
                            <div className='details-content'>
                                <h2>Why Medical Had Been So Popular Till</h2>
                                <p>
                                    Lorem ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                                
                                <ul className='details-list'>
                                    <li><FaCheck /> Then along come two they</li>
                                    <li><FaCheck /> That's just a little bit more than</li>
                                    <li><FaCheck /> Standard dummy text ever since</li>
                                    <li><FaCheck /> Simply dummy text of the printing</li>
                                    <li><FaCheck /> Make a type specimen book</li>
                                </ul>
                            </div>

                            {/* ===== ADVANCED TECHNOLOGY ===== */}
                            <div className='advanced-tech'>
                                <h3>Advanced Technology</h3>
                                <div className='tech-skills'>
                                    <div className='skill-item'>
                                        <div className='skill-header'>
                                            <span>Certified Engineers</span>
                                            <span>99%</span>
                                        </div>
                                        <div className='skill-bar'>
                                            <div className='skill-progress' style={{ width: '99%' }}></div>
                                        </div>
                                    </div>
                                    <div className='skill-item'>
                                        <div className='skill-header'>
                                            <span>6 years Experience</span>
                                            <span>99%</span>
                                        </div>
                                        <div className='skill-bar'>
                                            <div className='skill-progress' style={{ width: '99%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ===== POPULAR QUESTIONS ===== */}
                            <div className='popular-questions'>
                                <h3>Popular Questions</h3>
                                <p>
                                    Standard dummy text ever since the 1500s, when an unknown printer took a 
                                    galley of type and scrambled it to make a type specimen book.
                                </p>
                                
                                <div className='faq-list'>
                                    {faqs.map((faq, index) => (
                                        <div 
                                            className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
                                            key={faq.id}
                                        >
                                            <div className='faq-question' onClick={() => toggleFaq(index)}>
                                                <span>{faq.question}</span>
                                                <span className='faq-icon'>
                                                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                                                </span>
                                            </div>
                                            <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                                                <p>{faq.answer}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* ===== RIGHT SIDE ===== */}
                        <div className='col-lg-4 col-md-12'>
                            <div className='sidebar'>
                                
                                {/* ===== DOWNLOAD ===== */}
                                <div className='download-box'>
                                    <h3>Download</h3>
                                    <ul>
                                        <li>
                                            <FaCheck />
                                            <span>Download our brochure</span>
                                            <button className='download-btn'>Download</button>
                                        </li>
                                        <li>
                                            <FaCheck />
                                            <span>Our Company Details</span>
                                            <button className='download-btn'>Download</button>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceDetails;