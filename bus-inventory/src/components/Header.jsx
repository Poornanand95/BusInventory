import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
    <Link to="/">
      <i className="fa-solid fa-house-chimney travel_icon"></i>
    </Link>
    <div className='branding_text'>
        <div className='first_text'>One App for</div>
        <div className='second_text'>all buses..</div>
    </div>
    </div>
  )
}

export default Header