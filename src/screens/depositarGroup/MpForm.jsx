import React from 'react';
import './MpForm.css';
import InputText from '../../components/InputText';
import ButtonAditional from '../../components/ButtonAditional';

function MpForm() {
  return (
    <>
        <div className='mpInfoDiv'>
            <h3 className='mpTittle'>Mercado Pago</h3>
            <p className='mpFormParraph'>Podrás pagar con el dinero de tu cuenta de manera <span>fácil, rápida y segura</span>.</p>            
        </div>

        <form action="POST" className='mpForm'>
            <InputText type={"text"} name={"dinero Mp"} id={"montoMp"} title={"Ingresa el monto sin puntos"}/>
            <section className='mpFormBonusSection'>
              <InputText type={"password"} name={"bonus Mp"} id={"bonusMp"} title={"Si tenes un Bono ingresalo aquí"}/>
              <ButtonAditional data={"Verificar Bonus"} colorSet={"Action"}/>
            </section>
            
            <div className='mpFormButtonSection'>
                <ButtonAditional data={"Pagar desde MP"} colorSet={"Primary"}/>
            </div>
        </form>
    </>
  )
}

export default MpForm