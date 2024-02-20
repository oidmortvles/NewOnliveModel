import React from 'react';
import "./Login.css";
import { Navigate } from "react-router-dom";
import { getAutenticado } from '../services/AutenticationService';
import { useForm } from 'react-hook-form';
import InputText from '../components/InputText';
import ButtonAditional from '../components/ButtonAditional';
import Footer from '../components/Footer';
import useResponseStore from '../store/response';


function Login() {
  
  /* Si el usuario ya esta autenticado, se lo envia a la Página Principal */
  if(getAutenticado()){
    return <Navigate to='/'/>
  }

  const { addResponse } = useResponseStore();

  const {register, handleSubmit, formState:{errors}} = useForm();

  const loginFormEnviar = (data) =>{
    console.log(data);
    //addResponse(data.usernameLogin,"success");
  }
  

  {/* VALIDADORES POR CAMPO */}
  const usernameValidator= {
    required:{value:true, message:"El campo Usuario es requerido"},
    minLength:{value:2, message:"El campo debe tener al menos 2 caracteres"},
    maxLength:{value:15, message:"El campo debe tener menos de 15 caracteres"},            
  };


  const passwordValidator= {
    required:{value:true, message:"El campo Contraseña es requerido"},
    minLength:{value:2, message:"El campo debe tener al menos 2 caracteres"},
    maxLength:{value:15, message:"El campo debe tener menos de 15 caracteres"},            
  }


  return (

    <>
    <main className='loginPage'>

          <div className='loginLayer'></div>

         <form className='loginForm' onSubmit={handleSubmit(loginFormEnviar)}>
            <h1>INICIAR SESIÓN</h1>
            
            <div className='itemsForm'>                
                <InputText type={"text"}  name={"usernameLogin"} id={"usernameLogin"} title={"Ingrese su Usuario"} register={register} validator={usernameValidator} warnings={errors.usernameLogin}/>
                <InputText type={"password"} name={"passwordLogin"} id={"passwordLogin"} title={"Ingrese su Contraseña"} register={register} validator={passwordValidator} warnings={errors.passwordLogin}/>                                    
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