import React from 'react'
import './SoftToastRounded.css'


function SoftToastRounded({texto, icon, enlace}) {
  return (
    
      <article className='softToastRounded'>
          <div className='strTextInformation'>
              <div className='strIcon'>
                {icon}
              </div>
              <h4>{texto}</h4>
          </div>
      </article>
    
  )
}

export default SoftToastRounded