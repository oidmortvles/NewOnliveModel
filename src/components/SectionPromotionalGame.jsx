import React from 'react';
import './SectionPromotionalGame.css';
import ButtonAditional from './ButtonAditional';
import Slider from './Slider';

function SectionPromotionalGame({children}) {
  return (
    <section className='spgContainer'>

      <h3>Otros juegos para ti</h3>

        <Slider itemWidth={160}>
              {children}
        </Slider>
       
       <div className='spgButtonMoreGames'>
        <ButtonAditional data={"VER MÁS"} colorSet={"White"}/>
       </div>

    </section>
  )
}

export default SectionPromotionalGame