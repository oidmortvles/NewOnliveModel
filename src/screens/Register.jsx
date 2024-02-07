import React from 'react';
import "./Register.css";
import { Navigate } from "react-router-dom";
import { getAutenticado } from '../services/AutenticationService';


function Register() {

  /* Si el usuario ya esta autenticado, se lo envia a la Página Principal */
  if(getAutenticado()){
    return <Navigate to='/'/>
  }
  
  return (
    <main className='registerPage'>
        <h3>REGISTER</h3>
    </main>
  )
}

export default Register