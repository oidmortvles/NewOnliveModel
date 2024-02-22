import React from 'react';
import "./RegisterPage.css";
import InputText from '../../components/InputText';
import ButtonAditional from '../../components/ButtonAditional';
import { Navigate } from "react-router-dom";
import { getAutenticado } from '../../services/AutenticationService';
import { useForm } from 'react-hook-form';
import useResponseStore from '../../store/response';


function RegisterPage() {

  /* Si el usuario ya esta autenticado, se lo envia a la Página Principal */
  if(getAutenticado()){
    return <Navigate to='/'/>
  }


  const {register, handleSubmit, formState:{errors}, reset} = useForm();

    {/* VALIDADORES POR CAMPO */}





    
    /* CONTROLADOR DE PAGINAS */
    const pages=[1,2,3,4];
    const next = (number) =>{      
      number<= (pages.length -1) &&console.log(number);
    }

    const prev = (number) =>{      
      number<= (pages.length -1) &&console.log(number);
    }

    /* CONTROLADOR DE PAGINAS */

    const { addResponse } = useResponseStore();

    const registerFormEnviar = (data) =>{
      console.log(data);
      addResponse(`Datos validados, Bienvenido ${data.usernameLogin}!`,"success");
      reset();
    }
  
  return (
    <main className='registerPage'>
        <h3>CREA TU CUENTA! </h3>

        {/* FORM */}
        <form className='registerForm' onSubmit={handleSubmit(registerFormEnviar)}>

            <div className='registerFirstSection'>
                <section>
                    <InputText id={"registerMail"} name={"registerEmail"} title={"Ingrese su Email"} register={register}/>
                    <InputText id={"registerApodo"} name={"registerUsername"} title={"Cree un Nombre de Usuario"} register={register}/>
                    <InputText type={"password"} id={"registerContra1"} name={"registerPass1"} title={"Ingrese su Contraseña"} register={register}/>
                    <InputText type={"password"} id={"registerContra2"} name={"registerPass2"} title={"Repita su Contraseña"} register={register}/>
                </section>
                <p className="rTagTittle">Primeros Pasos</p>
            </div>


            <div className="registerSecondSection">
                <section>
                    <InputText id={"registerNombre"} name={"registerName"} title={"Ingrese su Nombre"} register={register}/>
                    <InputText id={"registerApellido"} name={"registerSecondName"} title={"Ingrese su Apellido"} register={register}/>
                    <InputText type={"number"} id={"registerCelular"} name={"registerPhone"} title={"Ingrese su Celular"} register={register}/>
                    <InputText type={"number"} id={"registerNumDni"} name={"registerDni"} title={"Ingrese su Dni"} register={register}/>
                    <input type="date" />
                    <select name="sex" id="optionSex">
                      <option value="sexMale" >Masculino</option>
                      <option value="sexFemale" >Femenino</option>
                      <option value="sexOther" >Otro</option>
                    </select>

                    <div className="registerSectionButtons">
                        <ButtonAditional data={"Siguiente"} fn={()=> next(pages[1])}/>
                        <ButtonAditional data={"Anterior"} fn={()=> prev(pages[0])} />
                    </div>

                </section>
                <p className="rTagTittle">Sobre Ti</p>
            </div>            


            <div className="registerThirdSection">
                <section>
                  <select name="registerCity" id="registerCity"></select>
                  <InputText id={"registerDireccion"} name={"registerAdress"} title={"Ingrese su Dirección"} register={register}/>
                  <InputText type={"number"} id={"registerCodigoPostar"} name={"registerCp"} title={"Ingrese su Código Postal"} register={register}/>
                </section>
                <p className="rTagTittle">Datos de Contacto</p>
            </div>            


            <div className="registerFourthSection">    
               <p className="rTagTittle">Términos y condiciones</p>
            </div>

        </form>

    </main>
  )
}

export default RegisterPage