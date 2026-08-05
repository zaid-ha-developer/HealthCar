import React from 'react';
import './LatestNews.css';
import { FaUser, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import news1 from '../Assests/news-1.jpg';
import news2 from '../Assests/news-2.jpg';
import news3 from '../Assests/news3.jpg';

const LatestNews = () => {
    const newsData = [
        {
            id: 1,
            image: news1,
            author: 'John deo',
            date: '21 July 2021',
            title: 'In this hospital there are special surgeon',
            link: '#'
        },
        {
            id: 2,
            image: news2,
            author: 'Peter Packer',
            date: '22 July 2021',
            title: 'Can you get a diflucan prescription online?',
            link: '#'
        },
        {
            id: 3,
            image: news3,
            author: 'Sonar Moyna',
            date: '23 July 2021',
            title: 'Why Is Skin Surgeon Considered Underrated',
            link: '#'
        }
    ];

    return (
        <section className='latest-news-section'>
            <div className='container'>
                {/* ===== SECTION HEADER ===== */}
                <div className='row'>
                    <div className='col-12 text-center'>
                        <div className='section-header'>
                            <h5>Latest News</h5>
                            <h2>Our Latest News</h2>
                        </div>
                    </div>
                </div>

                {/* ===== NEWS CARDS ===== */}
                <div className='row'>
                    {newsData.map((news) => (
                        <div className='col-lg-4 col-md-6 col-sm-12' key={news.id}>
                            <div className='news-card'>
                                {/* ===== IMAGE ===== */}
                                <div className='news-image'>
                                    <img src={news.image} alt={news.title} />
                                </div>

                                {/* ===== CONTENT ===== */}
                                <div className='news-content'>
                                    {/* ===== AUTHOR & DATE ===== */}
                                    <div className='news-meta'>
                                        <span>
                                            <FaUser className='meta-icon' /> {news.author}
                                        </span>
                                        <span>
                                            <FaCalendarAlt className='meta-icon' /> {news.date}
                                        </span>
                                    </div>

                                    {/* ===== TITLE ===== */}
                                    <h3>{news.title}</h3>

                                    {/* ===== READ MORE ===== */}
                                    <a href={news.link} className='news-link'>
                                        Read More <FaArrowRight />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestNews;