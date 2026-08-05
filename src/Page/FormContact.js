import React, { useState } from 'react';

const FormContact = () => {

    // ===== STATES =====
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [department, setDepartment] = useState('Select Department');
    const [message, setMessage] = useState('');

    // ===== ERRORS =====
    const [errors, setErrors] = useState({});

    // ===== HANDLE CHANGE =====
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleDepartmentChange = (e) => {
        setDepartment(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    // ===== VALIDATION =====
    const validateForm = () => {
        let newErrors = {};

        if (!name.trim()) {
            newErrors.name = 'Name is required';
        } else if (name.length < 3) {
            newErrors.name = 'Name must be at least 3 characters';
        }

        if (!email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email address is invalid';
        }

        if (!phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^[0-9]{7,15}$/.test(phone.replace(/[^0-9]/g, ''))) {
            newErrors.phone = 'Phone number is invalid (7-15 digits)';
        }

        if (department === 'Select Department') {
            newErrors.department = 'Please select a department';
        }

        if (!message.trim()) {
            newErrors.message = 'Message is required';
        } else if (message.length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // ===== HANDLE SUBMIT =====
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // All data is valid
            console.log('✅ Name:', name);
            console.log('✅ Email:', email);
            console.log('✅ Phone:', phone);
            console.log('✅ Department:', department);
            console.log('✅ Message:', message);

            alert('✅ Message sent successfully!');

            // Reset form fields
            setName('');
            setEmail('');
            setPhone('');
            setDepartment('Select Department');
            setMessage('');
            setErrors({});
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* ===== NAME ===== */}
            <div className="mb-3">
                <input
                    type="text"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    placeholder='Your Name'
                    value={name}
                    onChange={handleNameChange}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            {/* ===== EMAIL ===== */}
            <div className="mb-3">
                <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    placeholder='Your Email'
                    value={email}
                    onChange={handleEmailChange}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            {/* ===== PHONE ===== */}
            <div className="mb-3">
                <input
                    type="tel"
                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                    placeholder='Your Number'
                    value={phone}
                    onChange={handlePhoneChange}
                />
                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
            </div>

            {/* ===== DEPARTMENT ===== */}
            <div className="mb-3">
                <select
                    className={`form-select ${errors.department ? 'is-invalid' : ''}`}
                    value={department}
                    onChange={handleDepartmentChange}
                >
                    <option>Select Department</option>
                    <option>Cardiology</option>
                    <option>Neurology</option>
                    <option>Orthopedics</option>
                    <option>Pediatrics</option>
                    <option>Dermatology</option>
                </select>
                {errors.department && <div className="invalid-feedback">{errors.department}</div>}
            </div>

            {/* ===== MESSAGE ===== */}
            <div className="mb-3">
                <textarea
                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                    rows="4"
                    placeholder='Message'
                    value={message}
                    onChange={handleMessageChange}
                ></textarea>
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>

            {/* ===== SUBMIT ===== */}
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default FormContact;