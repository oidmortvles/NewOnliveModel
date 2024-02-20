import React from 'react';
import "./Login.css";
import { Navigate } from "react-router-dom";
import { getAutenticado } from '../services/AutenticationService';
import { useForm } from 'react-hook-form';
import InputText from '../components/InputText';
import ButtonAditional from '../components/ButtonAditional';
import Footer from '../components/Footer';

function Login() {
  
  /* Si el usuario ya esta autenticado, se lo envia a la Página Principal */
  if(getAutenticado()){
    return <Navigate to='/'/>
  }


  const {register, handleSubmit} = useForm();

  const loginFormEnviar = (data) =>{
    console.log(data);
  }

  return (

    <>
    <main className='loginPage'>

          <div className='loginLayer'></div>

         <form className='loginForm' onSubmit={handleSubmit(loginFormEnviar)}>
            <h1>INICIAR SESIÓN</h1>
            
            <div className='itemsForm'>
              <InputText type={"text"}  name={"usernameLogin"} id={"usernameLogin"} title={"Ingrese su Usuario"}  register={register}/>
              <InputText type={"password"} name={"passwordLogin"} id={"passwordLogin"} title={"Ingrese su contraseña"} register={register}/>
              <ButtonAditional data={"Iniciar Sesión"} colorSet={"White"} type={"submit"}/>            
            </div>


            <div className='itemsForm'>
                {/* <ButtonAditional data={"¿Olvidaste tu contraseña?"}/> */}
                <ButtonAditional data={"Registrarse"}/>
            </div>  
        </form>  

    </main>


    <Footer/>

    </>
  )
}

export default Login