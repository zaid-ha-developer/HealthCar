import React, { useState } from 'react';
import './Appointment.css';
import { FaArrowRight } from 'react-icons/fa';
import mobilePic from '../Assests/mobile-pic.png';  // ← استورد الصورة




const Appointment = () => {
    const [formData, setFormData] = useState({
        department: '',
        doctor: '',
        name: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('✅ Appointment Data:', formData);
        alert('✅ Appointment booked successfully!');
    };

    return (
        <section className='appointment-section'>
            <div className='container'>
                <div className='row align-items-center'>
                    
                    {/* ===== LEFT SIDE: FORM ===== */}
                    <div className='col-lg-6 col-md-6'>
                        <div className='appointment-content'>
                            <h5>Book Appointment</h5>
                            <h2>Book Your Appointment Now</h2>
                            
                            <form onSubmit={handleSubmit}>
                                <div className='form-group'>
                                    <select 
                                        name="department"
                                        className='form-control'
                                        value={formData.department}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Department</option>
                                        <option value="Cardiology">Cardiology</option>
                                        <option value="Neurology">Neurology</option>
                                        <option value="Orthopedics">Orthopedics</option>
                                        <option value="Pediatrics">Pediatrics</option>
                                        <option value="Dermatology">Dermatology</option>
                                    </select>
                                </div>

                                <div className='form-group'>
                                    <select 
                                        name="doctor"
                                        className='form-control'
                                        value={formData.doctor}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Doctor</option>
                                        <option value="Dr. Ahmed">Dr. Ahmed</option>
                                        <option value="Dr. Sara">Dr. Sara</option>
                                        <option value="Dr. Khaled">Dr. Khaled</option>
                                        <option value="Dr. Lina">Dr. Lina</option>
                                    </select>
                                </div>

                                <div className='form-group'>
                                    <input 
                                        type="text"
                                        name="name"
                                        className='form-control'
                                        placeholder='Your Name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className='form-group'>
                                    <input 
                                        type="tel"
                                        name="phone"
                                        className='form-control'
                                        placeholder='Phone Numbers'
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <button type="submit" className='btn-appointment'>
                                    Appointment Now <FaArrowRight />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* ===== RIGHT SIDE: CALENDAR ===== */}
                    <div className='col-lg-6 col-md-6'>
                        <div className='appointment-calendar'>
                            <div className='calendar-header'>
                                <h3>October</h3>
                                <div className='calendar-nav'>
                                    <button className='nav-btn'>‹</button>
                                    <button className='nav-btn'>›</button>
                                </div>
                            </div>

                            <div className='calendar-grid'>
                                <div className='calendar-weekday'>Sun</div>
                                <div className='calendar-weekday'>Mon</div>
                                <div className='calendar-weekday'>Tue</div>
                                <div className='calendar-weekday'>Wed</div>
                                <div className='calendar-weekday'>Thu</div>
                                <div className='calendar-weekday'>Fri</div>
                                <div className='calendar-weekday'>Sat</div>

                                <div className='calendar-day empty'>1</div>
                                <div className='calendar-day'>2</div>
                                <div className='calendar-day'>3</div>
                                <div className='calendar-day'>4</div>
                                <div className='calendar-day'>5</div>
                                <div className='calendar-day'>6</div>
                                <div className='calendar-day'>7</div>
                                <div className='calendar-day'>8</div>
                                <div className='calendar-day'>9</div>
                                <div className='calendar-day'>10</div>
                                <div className='calendar-day'>11</div>
                                <div className='calendar-day'>12</div>
                                <div className='calendar-day'>13</div>
                                <div className='calendar-day'>14</div>
                                <div className='calendar-day'>15</div>
                                <div className='calendar-day'>16</div>
                                <div className='calendar-day'>17</div>
                                <div className='calendar-day'>18</div>
                                <div className='calendar-day'>19</div>
                                <div className='calendar-day active'>20</div>
                                <div className='calendar-day'>21</div>
                                <div className='calendar-day'>22</div>
                                <div className='calendar-day'>23</div>
                                <div className='calendar-day'>24</div>
                                <div className='calendar-day'>25</div>
                                <div className='calendar-day'>26</div>
                                <div className='calendar-day'>27</div>
                                <div className='calendar-day'>28</div>
                                <div className='calendar-day'>29</div>
                                <div className='calendar-day'>30</div>
                                <div className='calendar-day'>31</div>
                            </div>

                            {/* ===== الصورة تحت التقويم ===== */}
                            <div className='calendar-image'>
                                <img src={mobilePic} alt="Mobile App" className='img-fluid' />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Appointment;