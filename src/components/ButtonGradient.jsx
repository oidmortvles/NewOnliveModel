import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonGradient.css';

function ButtonGradient({ data, funcionClick, to, children }) {

  if (to) {
    return (
      <Link to={to} className='buttonGradient'>
        {data}
        {children}
      </Link>
    );

  } else {    
    return (
      <button className='buttonGradient' onClick={funcionClick}>
        {data}
        {children}
      </button>
    );
  }
}

export default ButtonGradient;
