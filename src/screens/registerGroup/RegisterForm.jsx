import React,{useRef} from 'react';
import  './RegisterForm.css';
import InputText from '../../components/InputText';
import ButtonAditional from '../../components/ButtonAditional';
import { useForm } from 'react-hook-form';
import useResponseStore from '../../store/response';

function RegisterForm() {

  const {register, handleSubmit, formState:{errors}, reset, trigger, watch} = useForm();

    {/* VALIDADORES POR CAMPO */}
    //view I
    const registerEmail= {
        required: {value:true, message:"El campo Email es requerido"},
        maxLength:{value:30, message:"El campo debe tener menos de 30 caracteres"}, 
        pattern:{value:/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/, message:"Ingrese un correo valido"},
    };

    const registerUsername= {
        required: {value:true, message:"El campo Username es requerido"},
        maxLength:{value:30, message:"El campo debe tener menos de 30 caracteres"}, 
        minLength:{value:6, message:"El campo debe tener al menos 6 caracteres"},
    };

    const registerPass1= {
        required: {value:true, message:"El campo Contraseña es requerido"},
        maxLength:{value:30, message:"El campo debe tener menos de 30 caracteres"}, 
        minLength:{value:8, message:"El campo debe tener al menos 8 caracteres"},
    };


    const equalsPasswords = () =>{
        let pass1 = watch("registerPass1");
        let pass2 = watch("registerPass2");
        if (pass1===pass2){
            return true
        }else{
            return "Las contraseñas no coinciden"
        }
    }

    const registerPass2= {
        required: {value:true, message:"Por favor, repita su Contraseña"},
        maxLength:{value:30, message:"El campo debe tener menos de 30 caracteres"}, 
        minLength:{value:8, message:"El campo debe tener al menos 8 caracteres"},
        validate:equalsPasswords
    }


    //view I

    //view II
    //view II

    //view III
    //view III

    //view IV
    //view IV

    


    /* CONTROLADOR DE PAGINAS 🡫*/
    const page0 = useRef();
    const page1 = useRef();
    const page2 = useRef();
    const page3 = useRef();

    // Array con las referencias a cada Page
    const pages=[page0,page1,page2,page3];
    
    const next = async (numberPage) =>{   
      //primero validamos los campos  
      const validarViewI = await trigger(["registerEmail","registerUsername","registerPass1","registerPass2"]);      
      
        if(validarViewI){
        //producimos los cambios  
        let nextPage = numberPage +1;
        let selectedPage =pages[nextPage];
        let prevSelectedPage = pages[nextPage-1];
        prevSelectedPage.current.classList.remove("registerSelectedPage");
        selectedPage.current.classList.add("registerSelectedPage");
        }
      
    }

    const prev = (numberPage) =>{      
        let prevPage = numberPage -1;
        let selectedPage =pages[prevPage];
        let nextSelectedPage = pages[numberPage];
        nextSelectedPage.current.classList.remove("registerSelectedPage");
        selectedPage.current.classList.add("registerSelectedPage");
    }
    /* CONTROLADOR DE PAGINAS 🡡 */



    //ENVIAR & GESTIONAR FORM
    const { addResponse } = useResponseStore();    
    const registerFormEnviar = (data) =>{
      console.log(data);
      addResponse(`Datos validados, Bienvenido ${data.usernameLogin}!`,"success");
      reset();
    }
  
  return (
    
        <form className='registerForm' onSubmit={handleSubmit(registerFormEnviar)}>

            <div className='registerFirstSection registerSelectedPage' ref={page0}>
                <section>
                    <InputText id={"registerMail"} name={"registerEmail"} title={"Ingrese su Email"} register={register} validator={registerEmail} warnings={errors.registerEmail}/>
                    <InputText id={"registerApodo"} name={"registerUsername"} title={"Cree un Nombre de Usuario"} register={register} validator={registerUsername} warnings={errors.registerUsername}/>
                    <InputText type={"password"} id={"registerContra1"} name={"registerPass1"} title={"Ingrese su Contraseña"} register={register} validator={registerPass1} warnings={errors.registerPass1}/>
                    <InputText type={"password"} id={"registerContra2"} name={"registerPass2"} title={"Repita su Contraseña"} register={register} validator={registerPass2} warnings={errors.registerPass2}/>
                
                    <aside className='registerFormContainerMarker'>
                        <div className='RegisterFormItemMarker registerItemSelected'></div>
                        <div className='RegisterFormItemMarker'></div>
                        <div className='RegisterFormItemMarker'></div>
                        <div className='RegisterFormItemMarker'></div>
                    </aside>
                    
                    <div className="registerSectionButtons">                        
                        <ButtonAditional data={"Siguiente"} fn={()=> next(0)} />
                    </div>
                
                </section>
                <p className="rTagTittle">Primeros Pasos</p>
            </div>



            <div className="registerSecondSection" ref={page1}>
                <section>
                    <InputText id={"registerNombre"} name={"registerName"} title={"Ingrese su Nombre"} register={register}/>
                    <InputText id={"registerApellido"} name={"registerSecondName"} title={"Ingrese su Apellido"} register={register}/>
                    <InputText type={"number"} id={"registerCelular"} name={"registerPhone"} title={"Ingrese su Celular"} register={register}/>
                    <InputText type={"number"} id={"registerNumDni"} name={"registerDni"} title={"Ingrese su Dni"} register={register}/>
                    
                    <div className='registerInputAlone'>
                        <div className='inputDateContainer'>
                            <label htmlFor="birthDate">Fecha de Nac.</label>
                            <input type="date" name='birthDate' className='registerInputDate'/>
                        </div>

                        <div className='inputDateContainer'>
                            <label htmlFor="sex">Sexo</label>
                            <select name="sex" id="optionSex" className='registerInputSelect'>
                                <option value="sexMale" >Masculino</option>
                                <option value="sexFemale" >Femenino</option>
                                <option value="sexOther" >Otro</option>
                            </select>
                        </div>

                    </div>

                    <aside className='registerFormContainerMarker'>
                        <div className='RegisterFormItemMarker registerItemSelected registerItemSelected'></div>
                        <div className='RegisterFormItemMarker registerItemSelected registerItemSelected'></div>
                        <div className='RegisterFormItemMarker'></div>
                        <div className='RegisterFormItemMarker'></div>
                    </aside>

                    <div className="registerSectionButtons">
                        <ButtonAditional data={"Anterior"} fn={()=> prev(1)} />
                        <ButtonAditional data={"Siguiente"} fn={()=> next(1)}/>
                    </div>

                </section>
                <p className="rTagTittle">Sobre Ti</p>
            </div>  



            <div className="registerThirdSection" ref={page2}>
                <section>
                    <div className='inputDateContainer'>
                        <label htmlFor="registerCity">Ciudad de Residencia</label>
                        <select name="registerCity" id="registerCity" className='registerInputSelect'></select>
                    </div>
                  
                    <InputText id={"registerDireccion"} name={"registerAdress"} title={"Ingrese su Dirección"} register={register}/>
                    <InputText type={"number"} id={"registerCodigoPostar"} name={"registerCp"} title={"Ingrese su Código Postal"} register={register}/>


                    <aside className='registerFormContainerMarker'>
                        <div className='RegisterFormItemMarker registerItemSelected'></div>
                        <div className='RegisterFormItemMarker registerItemSelected'></div>
                        <div className='RegisterFormItemMarker registerItemSelected'></div>
                        <div className='RegisterFormItemMarker'></div>
                    </aside>


                  <div className="registerSectionButtons">
                      <ButtonAditional data={"Anterior"} fn={()=> prev(2)} />
                      <ButtonAditional data={"Siguiente"} fn={()=> next(2)}/>
                  </div>
                
                </section>
                <p className="rTagTittle">Contacto</p>
            </div>



            <div className="registerFourthSection" ref={page3}>  
                <section>

                    <ButtonAditional data={"Registrarme en OnLive"} colorSet={"Primary"} type={"submit"}/>



                    <aside className='registerFormContainerMarker'>
                        <div className='RegisterFormItemMarker registerItemSelected'></div>
                        <div className='RegisterFormItemMarker registerItemSelected'></div>
                        <div className='RegisterFormItemMarker registerItemSelected'></div>
                        <div className='RegisterFormItemMarker registerItemSelected'></div>
                    </aside>

                    <div className="registerSectionButtons">
                      <ButtonAditional data={"Anterior"} fn={()=> prev(3)} />
                    </div>
                </section>  
               <p className="rTagTittle">Términos y condiciones</p>
            </div>

        </form>
  )
}

export default RegisterForm