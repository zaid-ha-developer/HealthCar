import React from 'react';
import './Numbers.css';
import { FaCalendarAlt, FaAward, FaUserMd, FaSmile } from 'react-icons/fa';

const Numbers = () => {
    const stats = [
        {
            id: 1,
            number: '120',
            title: 'Years With You',
            description: 'Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.',
            icon: <FaCalendarAlt />
        },
        {
            id: 2,
            number: '400',
            title: 'Awards',
            description: 'Etiam ante ante, molestie vitae cursus ac, pharetra euismmod libero.',
            icon: <FaAward />
        },
        {
            id: 3,
            number: '250',
            title: 'Doctors',
            description: 'Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.',
            icon: <FaUserMd />
        },
        {
            id: 4,
            number: '800',
            title: 'Satisfied Client',
            description: 'Etiam ante ante, molestie vitae cursus ac, pharetra euismmod libero.',
            icon: <FaSmile />
        }
    ];

    return (
        <section className='numbers-section'>
            <div className='container'>
                <div className='row'>
                    {stats.map((stat) => (
                        <div className='col-lg-3 col-md-6 col-sm-12' key={stat.id}>
                            <div className='stat-card'>
                                <div className='stat-icon'>{stat.icon}</div>
                                <h2>{stat.number}</h2>
                                <h4>{stat.title}</h4>
                                <p>{stat.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Numbers;