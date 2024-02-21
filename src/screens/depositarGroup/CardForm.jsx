import React from 'react';
import './CardForm.css';
import InputText from '../../components/InputText';
import ButtonAditional from '../../components/ButtonAditional';
import { useForm } from 'react-hook-form';
import useResponseStore from '../../store/response';


function CardForm() {

  const {register, handleSubmit, formState:{errors}, reset} = useForm();

  {/* VALIDADORES POR CAMPO */}
  const ccNameUser = {
    required:{value:true, message:"Nombre es requerido"},
    minLength:{value:8, message:"El campo debe tener al menos 8 caracteres"},
    pattern:{value:/^[a-zA-Z\s]+$/, message:"Verifique los caracteres ingresados"},
  };

  const ccDni = {
    required:{value:true, message:"Dni es requerido"},
    minLength:{value:8, message:"El campo debe tener al menos 8 caracteres"},
    pattern:{value:/^[0-9]+$/, message:"Ingrese solo números"}
  };

  const ccNumber = {
    required:{value:true, message:"Núm Cc es requerido"},
    maxLength:{value:20, message:"Máximo 20 caracteres"}, 
  };

  const ccExpirationMes = {
    required:{value:true, message:"Mes es requerido"},
    pattern: {value:/^(0?[1-9]|1[0-2])$/, message:"Ingrese valores entre 01 y 12"},
    maxLength:{value:2, message:"Máximo 2 caracteres"}, 
  };

  const ccExpirationAnio = {
    required:{value:true, message:"Año es requerido"},
    pattern: {value:/^(0?[0-9]|[1-9][0-9])$/, message:"Ingrese valores entre 00 y 99"},
    maxLength:{value:2, message:"Máximo 2 caracteres"}, 
  };

  const ccCcv = {
    required:{value:true, message:"Ccv es requerido"},
    pattern: {value:/^\d{3,4}$/, message:"Verifique el código ingresado"},
    maxLength:{value:4, message:"Máximo 4 caracteres"},
  };

  const montoCc = {
    required: {value:true, message:"Monto es requerido"},
    pattern:{value:/^[0-9]+$/, message:"Ingrese un Monto sin puntos ni comas"},
  };

  const bonusCc = {
    pattern:{value: /^[A-Z]+$/, message:"Ingrese su código en mayúsculas" },
  };

  const { addResponse } = useResponseStore();

  const creditCardFormEnviar = (data) =>{
    console.log(data);
    addResponse(`Carga Realizada por $ ${data.montoCc}!`,"success");
    reset();
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
                <InputText type={"text"} name={"ccNameUser"} id={"creditCardNameUser"} title={"Nombre del Titular"} register={register} validator={ccNameUser} warnings={errors.ccNameUser}/>
                <InputText type={"number"} name={"ccDni"} id={"creditCardDni"} title={"Dni del Titular"} register={register} validator={ccDni} warnings={errors.ccDni}/>
            </div>


            <h5>Datos de la tarjeta</h5>
            <div className='cfCardData'>
                <InputText type={"number"} name={"ccNumber"} id={"creditCardNumber"} title={"Número de tarjeta"} register={register} validator={ccNumber} warnings={errors.ccNumber}/>
                <section>
                    <InputText type={"number"} name={"ccExpirationMes"} id={"creditCardExpirationMes"} title={"Mes"} register={register} validator={ccExpirationMes} warnings={errors.ccExpirationMes}/>
                    <InputText type={"number"} name={"ccExpirationAnio"} id={"creditCardExpirationAnio"} title={"Año"} register={register} validator={ccExpirationAnio} warnings={errors.ccExpirationAnio}/>
                    <InputText type={"number"} name={"ccCcv"} id={"creditCardCcv"} title={"Ccv"} register={register} validator={ccCcv} warnings={errors.ccCcv}/>
                </section>

                <aside className='cfAsideInputs'>
                <InputText type={"number"} name={"montoCc"} id={"montoCreditCard"} title={"Monto a cargar"} register={register} validator={montoCc} warnings={errors.montoCc}/>
                    <div className='cfBonus'>
                        <InputText type={"password"} name={"bonusCc"} id={"bonusCc"} title={"Si tenes un Bono ingresalo aquí"} register={register} validator={bonusCc} warnings={errors.bonusCc}/>
                        <ButtonAditional data={"Verificar Bonus"}/>
                    </div>
                </aside>
                
            </div>

            

            <div className='mpFormButtonSection'>
                <ButtonAditional data={"Pagar"} colorSet={"Primary"} type={"submit"}/>
            </div>

        </form>
    </>
  )
}

export default CardForm