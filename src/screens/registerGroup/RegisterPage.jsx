import React from 'react';
import "./RegisterPage.css";
import RegisterForm from './RegisterForm';
import {getAutenticado} from '../../services/AutenticationService';
import { Navigate } from "react-router-dom";
import Footer from '../../components/Footer'

function RegisterPage() {

  /* Si el usuario ya esta autenticado, se lo envia a la Página Principal */
  if(getAutenticado()){
    return <Navigate to='/'/>
  }  
  
  return (
    <>
      <main className='registerPage'>
        <div className='registerPageBackground'>
          <img src="https://static.vecteezy.com/system/resources/previews/008/854/565/original/casino-3d-design-elements-free-png.png" alt="" />
          <img src="https://static.vecteezy.com/system/resources/previews/011/992/885/non_2x/casino-club-chip-with-crown-3d-design-elements-free-png.png" alt="" />
        </div>
        <h1>CREA TU CUENTA!</h1>
        <RegisterForm/>
      </main>
      <Footer/>
    </>
  )
}

export default RegisterPage