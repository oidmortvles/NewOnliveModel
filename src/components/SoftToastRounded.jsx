import React from 'react'
import './SoftToastRounded.css'
import {NavLink } from 'react-router-dom';

function SoftToastRounded({texto, icon, enlace}) {
  return (
    <NavLink to={enlace} className={({ isActive }) => (isActive ? 'softToastRoundedActive' : 'softToastRounded')}>
      <article className='softToastRounded'>
          <div className='strTextInformation'>
              <div className='strIcon'>
                {icon}
              </div>
              <h4>{texto}</h4>
          </div>
      </article>
    </NavLink> 
  )
}

export default SoftToastRounded