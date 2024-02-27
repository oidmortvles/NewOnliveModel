import React,{useRef} from 'react';
import  './RegisterForm.css';
import InputText from '../../components/InputText';
import ButtonAditional from '../../components/ButtonAditional';
import { useForm } from 'react-hook-form';
import useResponseStore from '../../store/response';

function RegisterForm() {

  const {register, handleSubmit, formState:{errors}, reset} = useForm();

    {/* VALIDADORES POR CAMPO */}





    
    /* CONTROLADOR DE PAGINAS */
    const page1 = useRef();
    const page2 = useRef();
    const page3 = useRef();
    const page4 = useRef();

    // Array con las referencias a cada Page
    const pages=[page1,page2,page3,page4];
    let page =0;
    
    const next = () =>{      
      page<= (pages.length -1)? (page++):(page=0);
      let selectedPage =pages[page];
      let prevSelectedPage = pages[page-1];
      prevSelectedPage.current.classList.remove("registerSelectedPage");
      selectedPage.current.classList.add("registerSelectedPage");
    }
                                        
    const prev = () =>{      
      page<= (pages.length -1)? (page--):(page=0);
      let selectedPage =pages[page];
      let prevSelectedPage = pages[page+1];
      prevSelectedPage.current.classList.remove("registerSelectedPage");
      selectedPage.current.classList.add("registerSelectedPage");
    }
    /* CONTROLADOR DE PAGINAS */


    const { addResponse } = useResponseStore();    
    const registerFormEnviar = (data) =>{
      console.log(data);
      addResponse(`Datos validados, Bienvenido ${data.usernameLogin}!`,"success");
      reset();
    }
  
  return (
    
        <form className='registerForm' onSubmit={handleSubmit(registerFormEnviar)}>

            <div className='registerFirstSection registerSelectedPage' ref={page1}>
                <section>
                    <InputText id={"registerMail"} name={"registerEmail"} title={"Ingrese su Email"} register={register}/>
                    <InputText id={"registerApodo"} name={"registerUsername"} title={"Cree un Nombre de Usuario"} register={register}/>
                    <InputText type={"password"} id={"registerContra1"} name={"registerPass1"} title={"Ingrese su Contraseña"} register={register}/>
                    <InputText type={"password"} id={"registerContra2"} name={"registerPass2"} title={"Repita su Contraseña"} register={register}/>
                
                    <aside className='registerFormContainerMarker'>
                        <div className='RegisterFormItemMarker registerItemSelected'></div>
                        <div className='RegisterFormItemMarker'></div>
                        <div className='RegisterFormItemMarker'></div>
                        <div className='RegisterFormItemMarker'></div>
                    </aside>
                    
                    <div className="registerSectionButtons">                        
                        <ButtonAditional data={"Siguiente"} fn={()=> next()}/>
                    </div>
                
                </section>
                <p className="rTagTittle">Primeros Pasos</p>
            </div>



            <div className="registerSecondSection" ref={page2}>
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
                        <ButtonAditional data={"Anterior"} fn={()=> prev()} />
                        <ButtonAditional data={"Siguiente"} fn={()=> next()}/>
                    </div>

                </section>
                <p className="rTagTittle">Sobre Ti</p>
            </div>  



            <div className="registerThirdSection" ref={page3}>
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
                      <ButtonAditional data={"Anterior"} fn={()=> prev()} />
                      <ButtonAditional data={"Siguiente"} fn={()=> next()}/>
                  </div>
                
                </section>
                <p className="rTagTittle">Contacto</p>
            </div>



            <div className="registerFourthSection" ref={page4}>  
                <section>

                    <ButtonAditional data={"Registrarme en OnLive"} colorSet={"Primary"}/>



                    <aside className='registerFormContainerMarker'>
                        <div className='RegisterFormItemMarker registerItemSelected'></div>
                        <div className='RegisterFormItemMarker registerItemSelected'></div>
                        <div className='RegisterFormItemMarker registerItemSelected'></div>
                        <div className='RegisterFormItemMarker registerItemSelected'></div>
                    </aside>

                    <div className="registerSectionButtons">
                      <ButtonAditional data={"Anterior"} fn={()=> prev()} />
                    </div>
                </section>  
               <p className="rTagTittle">Términos y condiciones</p>
            </div>

        </form>
  )
}

export default RegisterForm