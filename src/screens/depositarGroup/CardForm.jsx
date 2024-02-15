import React from 'react';
import './CardForm.css';

function CardForm() {
  return (
    <>
        <div className='cfInfoDiv'>
            <h3 className='cfTittle'>Tarjetas</h3>
            <p className='cfParraph'>Recorda tener el <span>plástico</span> contigo para poder ingresar los datos del mismo.</p>            
        </div>


        <form action="POST" className='cfForm'>

        </form>
    </>
  )
}

export default CardForm