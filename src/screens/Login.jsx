import React from 'react';
import "./Login.css";
import { Navigate } from "react-router-dom";
import { getAutenticado } from '../services/AutenticationService';

function Login() {
  
  /* Si el usuario ya esta autenticado, se lo envia a la Página Principal */
  if(getAutenticado()){
    return <Navigate to='/'/>
  }

  return (
    <main className='loginPage'>
         <h3>LOGIN</h3>  
    </main>
  )
}

export default Login