import React from 'react';
import ButtonAditional from './ButtonAditional';
import './SectionPromotionalGame.css'

function SectionPromotionalGame({children}) {
  return (
    <section className='spgContainer'>

      <h3>Otros juegos para ti</h3>
        <div className='sectionPromotionalGame'>
              {children}
        </div>
       
       <div className='spgButtonMoreGames'>
        <ButtonAditional data={"VER MÁS"} colorSet={"White"}/>
       </div>

    </section>
  )
}

export default SectionPromotionalGame