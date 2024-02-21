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

  const {register, handleSubmit, formState:{errors}, reset} = useForm();

    {/* VALIDADORES POR CAMPO */}
    const usernameValidator= {
      required:{value:true, message:"El campo Usuario es requerido"},
      minLength:{value:8, message:"El campo debe tener al menos 8 caracteres"},
      maxLength:{value:15, message:"El campo debe tener menos de 15 caracteres"}, 
      pattern:{value:/^[a-zA-Z0-9.\-_]+$/, message:"Revise los caracteres ingresados"},           
    };  
  
    const passwordValidator= {
      required:{value:true, message:"El campo Contraseña es requerido"},
      minLength:{value:8, message:"El campo debe tener al menos 8 caracteres"},
      maxLength:{value:15, message:"El campo debe tener menos de 15 caracteres"},
      pattern:{value:/^[a-zA-Z0-9.\-_]+$/, message:"Revise los caracteres ingresados"},             
    }


    const { addResponse } = useResponseStore();  


  const loginFormEnviar = (data) =>{
    console.log(data);
    addResponse(`Datos validados, Bienvenido ${data.usernameLogin}!`,"success");
    reset();
  }


  return (
    <>
    <main className='loginPage'>

          <div className='loginLayer'></div>

         <form className='loginForm' onSubmit={handleSubmit(loginFormEnviar)}>

            <div className='itemsForm'>   
                <h1>INICIAR SESIÓN</h1>             
                <InputText type={"text"}  name={"usernameLogin"} id={"usernameLogin"} title={"Ingrese su Usuario"} register={register} validator={usernameValidator} warnings={errors.usernameLogin}/>
                <InputText type={"password"} name={"passwordLogin"} id={"passwordLogin"} title={"Ingrese su Contraseña"} register={register} validator={passwordValidator} warnings={errors.passwordLogin}/>                                    
                <ButtonAditional data={"Iniciar Sesión"} colorSet={"Primary"} type={"submit"}/>            
            </div> 

            <div className='loginFormoptionsExtra'>
                <ButtonAditional data={"¿Olvidaste tu contraseña?"}/>
                <ButtonAditional data={"Registrarse"} colorSet={"White"} to={"/register"}/> 
            </div>  
            
        </form> 
    </main>

    

    <Footer/>

    </>
  )
}

export default Login