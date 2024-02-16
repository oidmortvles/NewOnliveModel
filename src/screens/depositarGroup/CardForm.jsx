import React from 'react';
import './CardForm.css';
import InputText from '../../components/InputText';
import ButtonAditional from '../../components/ButtonAditional';
import { useForm } from 'react-hook-form';


function CardForm() {

  const {register, handleSubmit} = useForm();

  const creditCardFormEnviar = (data) =>{
    console.log(data);
  }

  return (
    <>
        <div className='cfInfoDiv'>
            <h3 className='cfTittle'>Tarjetas</h3>
            <p className='cfParraph'>Recorda tener el <span>plástico</span> contigo para poder ingresar los datos del mismo.</p>            
        </div>


        <form action="POST" className='cfForm' onSubmit={handleSubmit(creditCardFormEnviar)}>
            
            <h5>Datos del Titular</h5>
            <div className='cfUserData'>
                <InputText type={"text"} name={"ccNameUser"} id={"creditCardNameUser"} title={"Nombre del Titular"} register={register}/>
                <InputText type={"number"} name={"ccDni"} id={"creditCardDni"} title={"Dni del Titular"} register={register}/>
            </div>


            <h5>Datos de la tarjeta</h5>
            <div className='cfCardData'>
                <InputText type={"number"} name={"ccNumber"} id={"creditCardNumber"} title={"Número de tarjeta"} register={register}/>
                <section>
                    <InputText type={"number"} name={"ccExpirationMes"} id={"creditCardExpirationMes"} title={"Mes"} register={register}/>
                    <InputText type={"number"} name={"ccExpirationAnio"} id={"creditCardExpirationAnio"} title={"Año"} register={register}/>
                    <InputText type={"number"} name={"ccCcv"} id={"creditCardCcv"} title={"Ccv"} register={register}/>
                </section>


                <div className='cfBonus'>
                    <InputText type={"password"} name={"bonusCc"} id={"bonusCc"} title={"Si tenes un Bono ingresalo aquí"} register={register}/>
                    <ButtonAditional data={"Verificar Bonus"} colorSet={"White"}/>
                </div>
            </div>

            

            <div className='mpFormButtonSection'>
                <ButtonAditional data={"Pagar"} colorSet={"Primary"} type={"submit"}/>
            </div>

        </form>
    </>
  )
}

export default CardForm