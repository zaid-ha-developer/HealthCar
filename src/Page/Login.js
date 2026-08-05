import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // ← استورد
import Banner from '../Component/Banner/Banner';
import './Login.css';
import { FaUser, FaLock, FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';
import logo from '../Assests/logo.png';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();  // ← استخدم

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            console.log('✅ Login:', formData);
            alert('✅ Login successful!');
            navigate('/');  // ← يذهب إلى Home
        } else {
            console.log('✅ Register:', formData);
            alert('✅ Registration successful!');
            navigate('/');  // ← يذهب إلى Home
        }
    };

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setFormData({ name: '', email: '', password: '' });
    };

    return (
        <>
            <Banner title='Login / Register' smtitle='login-register' />
            
            <section className='login-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-8 col-sm-12 mx-auto'>
                            <div className='login-wrapper'>
                                
                                {/* ===== HEADER ===== */}
                                <div className='login-header'>
                                    <div className='login-logo'>
                                        <img src={logo} alt="Logo" />
                                        <h2>MediTro</h2>
                                    </div>
                                    <h3>Welcome Back!</h3>
                                    <p>Sign in to continue</p>
                                </div>

                                {/* ===== FORM ===== */}
                                <form onSubmit={handleSubmit}>
                                    {/* ===== EMAIL ===== */}
                                    <div className='form-group'>
                                        <div className='input-icon'>
                                            <FaEnvelope />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            className='form-control'
                                            placeholder='Email Address'
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* ===== PASSWORD ===== */}
                                    <div className='form-group'>
                                        <div className='input-icon'>
                                            <FaLock />
                                        </div>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            className='form-control'
                                            placeholder='Password'
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                        {/* <button 
                                            type="button" 
                                            className='password-toggle'
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </button> */}
                                    </div>

                                    {/* ===== FORGOT PASSWORD ===== */}
                                    <div className='forgot-password'>
                                        <a href="#">Forgot Password?</a>
                                    </div>

                                    {/* ===== SUBMIT ===== */}
                                    <button type="submit" className='btn-login'>
                                        Login
                                    </button>
                                </form>

                                {/* ===== FOOTER ===== */}
                                <div className='login-footer'>
                                    <p>
                                        Don't have any account?
                                        <button 
                                            type="button" 
                                            className='toggle-btn'
                                            onClick={toggleForm}
                                        >
                                            Register
                                        </button>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;