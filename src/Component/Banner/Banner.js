import React from 'react'
import { IoHome } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import './Banner.css'

const Banner = (props) => {
  return (
    <section className='banner'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 col-md-12'>
            <h2>{props.title}</h2>
            <li>
              <Link to="/Home">  
                <IoHome className='icon' /> Home
              </Link>
              /   {props.smtitle}
              
            </li>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner