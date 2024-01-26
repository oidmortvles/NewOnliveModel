import React from 'react'
import './SoftToastRounded.css'
import { Link } from 'react-router-dom';

function SoftToastRounded({texto, icon, enlace}) {
  return (
    <Link to={enlace}>
      <article className='softToastRounded'>
          <div className='strTextInformation'>
              <div className='strIcon'>
                {icon}
              </div>
              <h4>{texto}</h4>
          </div>
      </article>
    </Link> 
  )
}

export default SoftToastRounded