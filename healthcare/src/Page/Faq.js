import React, { useState } from 'react';
import Banner from '../Component/Banner/Banner';
import './Faq.css';
import { FaPlus, FaMinus } from 'react-icons/fa';
import LatestNews from './LatestNews';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            id: 1,
            question: 'How Doctor Can Save Your Life?',
            answer: 'Doctors can save your life through early diagnosis, proper treatment, emergency care, and preventive medicine. They use their expertise to identify health issues before they become serious and provide life-saving interventions when needed.'
        },
        {
            id: 2,
            question: 'How to - Infusion from a subject?',
            answer: 'Infusion therapy involves administering medication directly into the bloodstream through an IV. This method is used when patients cannot take oral medications or when rapid delivery of treatment is necessary for conditions like dehydration, infections, or chronic diseases.'
        },
        {
            id: 3,
            question: 'Understand Doctor Before You Forget?',
            answer: 'Understanding your doctor involves clear communication about your symptoms, medical history, and concerns. Prepare questions before your visit, take notes during appointments, and don\'t hesitate to ask for clarification about diagnoses or treatment plans.'
        },
        {
            id: 4,
            question: 'What types of symptoms do you suspect?',
            answer: 'Common symptoms to watch for include persistent pain, unexplained weight loss, chronic fatigue, fever, changes in appetite, difficulty breathing, unusual bleeding, or changes in bowel habits. Always consult a healthcare professional for proper diagnosis.'
        },
        {
            id: 5,
            question: 'The touch you have? The real threat?',
            answer: 'Regular health check-ups and screenings are essential for early detection of potential threats. Many serious conditions show no early symptoms, making routine examinations crucial for maintaining good health and preventing complications.'
        },
        {
            id: 6,
            question: 'How Can I Contact You?',
            answer: 'You can reach us through our contact page, by phone at +963 940 817 797, or by email at info@careplus.com. Our team is available 24/7 to assist you with any questions or concerns.'
        }
    ];

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <Banner title="FAQ's" smtitle="faq" />
            
            <section className='faq-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8 col-md-12 mx-auto'>
                            <div className='faq-wrapper'>
                                <h2>Frequently Asked Questions</h2>
                                <p>Find answers to the most common questions about our services and healthcare.</p>

                                <div className='faq-list'>
                                    {faqs.map((faq, index) => (
                                        <div 
                                            className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
                                            key={faq.id}
                                        >
                                            <div className='faq-question' onClick={() => toggleFaq(index)}>
                                                <h3>{faq.question}</h3>
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
                    </div>
                </div>
            </section>
            <LatestNews />
        </>
    );
};

export default Faq;