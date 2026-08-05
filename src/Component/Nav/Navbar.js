import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';
import logo from '../../Assests/logo.png';
import { IoIosSearch } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbars() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">   
          <img src={logo} title='logo' alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className='active'>Home</Nav.Link>  

            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/about">About Us</NavDropdown.Item>   
              <NavDropdown.Item as={Link} to="/team">Our Team</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/faq">FAQ'S</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/booking">Booking</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/login">Login / Register</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/services">Service</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/service-details">Service Details</NavDropdown.Item>
            </NavDropdown>

            {/* <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/blog">Blog</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blog-details">Blog Details</NavDropdown.Item>
            </NavDropdown> */}

            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>   
            <Nav.Link><IoIosSearch /></Nav.Link>
            <Nav.Link href="tel:+963940817797"><IoCall className='phone' /> +963 940 817 797</Nav.Link>
            <Nav.Link>
              <button>Contact Us <span><FaArrowLeft /></span></button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;