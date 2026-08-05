import React from 'react';
import './Testimonial.css';
import { FaQuoteLeft, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import doctor1 from '../Assests/doctor1.jpg';
import doctor2 from '../Assests/doctor2.jpg';
import doctor3 from '../Assests/doc3.jpg';
 




const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            name: 'John Deo',
            role: 'PATIENT',
            image: doctor1,
            rating: 5,
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena suspendisse ultrices gravida.'
        },
        {
            id: 2,
            name: 'Sarah Smith',
            role: 'PATIENT',
            image: doctor2,
            rating: 5,
            quote: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.'
        },
        {
            id: 3,
            name: 'Michael Brown',
            role: 'PATIENT',
            image: doctor3,
            rating: 4,
            quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
        }
    ];

    // دالة لعرض النجوم
    const renderStars = (rating) => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<FaStar key={i} className='star filled' />);
            } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
                stars.push(<FaStarHalfAlt key={i} className='star half' />);
            } else {
                stars.push(<FaRegStar key={i} className='star empty' />);
            }
        }
        return stars;
    };

    return (
        <section className='testimonial-section'>
            <div className='container'>
                {/* ===== SECTION HEADER ===== */}
                <div className='row'>
                    <div className='col-12 text-center'>
                        <div className='section-header'>
                            <h5>Testimonial</h5>
                            <h2>See What Are The Patients Saying About us</h2>
                        </div>
                    </div>
                </div>

                {/* ===== TESTIMONIAL CARDS ===== */}
                <div className='row'>
                    {testimonials.map((testimonial) => (
                        <div className='col-lg-4 col-md-6 col-sm-12' key={testimonial.id}>
                            <div className='testimonial-card'>
                                {/* ===== QUOTE ICON ===== */}
                                <div className='quote-icon'>
                                    <FaQuoteLeft />
                                </div>

                                {/* ===== QUOTE TEXT ===== */}
                                <p className='testimonial-quote'>"{testimonial.quote}"</p>

                                {/* ===== RATING STARS ===== */}
                                <div className='testimonial-rating'>
                                    {renderStars(testimonial.rating)}
                                </div>

                                <hr />

                                {/* ===== USER INFO ===== */}
                                <div className='testimonial-user'>
                                    <div className='user-avatar'>
                                        <img src={testimonial.image} alt={testimonial.name} />
                                    </div>
                                    <div className='user-info'>
                                        <h4>{testimonial.name}</h4>
                                        <span>{testimonial.role}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;