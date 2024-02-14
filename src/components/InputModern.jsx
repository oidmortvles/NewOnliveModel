import React, { useState } from 'react';
import './InputModern.css';

function InputModern({type, name, id, title}) {

  const[show,setShow] = useState ('password');

  const mostrarPass=() =>{
    if(show==='password'){
      setShow('text');
    }else{
      setShow('password');
    }
  }
  

  return (
    <>
    {type==="password"?(

      <div className='inputModernBox'>
          <input type={show} name={name} id={id} className='imInput' placeholder='' />
          <label htmlFor={id} className='imLabel'>{title}</label>
      
          <button onClick={mostrarPass}  className={show==="text"?'imButtonView imButtonViewActive':'imButtonView'} >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A2 2 0 0 0 8 6c-.532 0-1.016.208-1.375.547M14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
                </svg>
          </button>
      </div>

    ):(

      <div className='inputModernBox'>
        <input type={type} name={name} id={id} className='imInput' placeholder='' />
        <label htmlFor={id} className='imLabel'>{title}</label>
      </div>

    )}
    </>
  )
}

export default InputModern