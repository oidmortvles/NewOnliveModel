import React, { useState } from 'react';
import "./Depositar.css";
import MpForm from './MpForm';
import LoaderItem from '../../components/LoaderItem';
import CardForm from './CardForm';

function Depositar() {

    const [render,setRender] = useState("");

    const elegirOpcion = (event) => {
        setRender(event.target.value);
    };



  return (
    <section className='depositarContainer'>
        
        <article className='depositarView1'>
            <h3 className='depositarTittle'>Método de pago</h3>
            
            <div className="depositarOptionPay">
                <div className={render==="mercadoPago"? "selectedOptionPay":null}>
                    <label  htmlFor="mercadoPago">Mercado Pago</label>
                    <input type="radio" name='methodPayment' id="mercadoPago" value="mercadoPago" onChange={elegirOpcion}/>
                </div>

                <div className={render==="tarjeta"? "selectedOptionPay":null}>                    
                    <label  htmlFor="tarjeta">Tarjeta Crédito/Débito</label>
                    <input type="radio" name='methodPayment' id="tarjeta"  value="tarjeta" onChange={elegirOpcion}/>
                </div>
            </div>             

        </article>



        <article className='depositarView2'>
           {render==="mercadoPago"?(<MpForm/>):(null)}
           {render==="tarjeta"?(<CardForm/>):(null)}
           {render===""?(<LoaderItem msj={"Seleccione su opción de pago"}/>):(null)}           
        </article>



    </section>
  )
}

export default Depositar