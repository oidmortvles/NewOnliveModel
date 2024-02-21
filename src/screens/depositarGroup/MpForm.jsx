import React from 'react';
import './MpForm.css';
import InputText from '../../components/InputText';
import ButtonAditional from '../../components/ButtonAditional';
import { useForm } from 'react-hook-form';
import useResponseStore from '../../store/response';

function MpForm() {

  const {register, handleSubmit, formState:{errors}, reset} = useForm();

  {/* VALIDADORES POR CAMPO */}
  const dineroMp = {
    required: {value:true, message:"El campo Monto es requerido"},
    pattern:{value:/^[0-9]+$/, message:"Ingrese un Monto sin puntos ni comas"},
  };


  const bonusMp = {
    pattern:{value: /^[A-Z]+$/, message:"Ingrese su código en mayúsculas" },
  };




  const { addResponse } = useResponseStore();

  const mpFormEnviar = (data) =>{
    console.log(data);
    addResponse(`Carga Realizada por $ ${data.dineroMp}!`,"success");
    reset();
  }

  return (
    <>
        <div className='mpInfoDiv'>
            <h3 className='mpTittle'>Mercado Pago</h3>
            <p className='mpFormParraph'>Podrás pagar con el dinero de tu cuenta de manera <span>fácil, rápida y segura</span>.</p>            
        </div>

        <form className='mpForm' onSubmit={handleSubmit(mpFormEnviar)}>

            <InputText type={"text"} name={"dineroMp"} id={"montoMp"} title={"Ingresa el Monto a depositar"} register={register} validator={dineroMp} warnings={errors.dineroMp}/>
            
            <section className='mpFormBonusSection'>
              <InputText type={"password"} name={"bonusMp"} id={"bonusMp"} title={"Si tenés un Bono ingresalo aquí"} register={register} validator={bonusMp} warnings={errors.bonusMp}/>
              <ButtonAditional data={"Verificar Bonus"}/>
            </section>
            
            <div className='mpFormButtonSection'>
                <ButtonAditional data={"Pagar"} colorSet={"Primary"} type={"submit"}/>
            </div>

        </form>
    </>
  )
}

export default MpForm