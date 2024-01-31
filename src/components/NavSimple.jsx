import React from 'react';
import './NavSimple.css';
import { Link } from 'react-router-dom';

function NavSimple() {
  return (
    <nav className='navSimple'>
        <Link to={"/"} className='nbLogo'>
            
        </Link>

    </nav>
  )
}

export default NavSimple