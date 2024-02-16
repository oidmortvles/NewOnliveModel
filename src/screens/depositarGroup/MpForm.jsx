import React from 'react';
import './MpForm.css';
import InputText from '../../components/InputText';
import ButtonAditional from '../../components/ButtonAditional';
import { useForm } from 'react-hook-form';

function MpForm() {

  const {register, handleSubmit} = useForm();

  const mpFormEnviar = (data) =>{
    console.log(data);
  }

  return (
    <>
        <div className='mpInfoDiv'>
            <h3 className='mpTittle'>Mercado Pago</h3>
            <p className='mpFormParraph'>Podrás pagar con el dinero de tu cuenta de manera <span>fácil, rápida y segura</span>.</p>            
        </div>

        <form className='mpForm' onSubmit={handleSubmit(mpFormEnviar)}>

            <InputText type={"number"} name={"dineroMp"} id={"montoMp"} title={"Ingresa el monto sin puntos"} register={register}/>
            
            <section className='mpFormBonusSection'>
              <InputText type={"password"} name={"bonusMp"} id={"bonusMp"} title={"Si tenes un Bono ingresalo aquí"} register={register}/>
              <ButtonAditional data={"Verificar Bonus"} colorSet={"White"}/>
            </section>
            
            <div className='mpFormButtonSection'>
                <ButtonAditional data={"Pagar"} colorSet={"Primary"} type={"submit"}/>
            </div>

        </form>
    </>
  )
}

export default MpForm