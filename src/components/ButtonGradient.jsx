import React from 'react';
import './ButtonGradient.css';

function ButtonGradient({data , funcionClick, children}) {
  return (
    <button className='buttonGradient' onClick={funcionClick}>
        {data}
        {children}
    </button>
  )
}

export default ButtonGradient