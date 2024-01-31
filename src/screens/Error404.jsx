import React from 'react';
import './Error404.css';
import ButtonAditional from '../components/ButtonAditional';

function Error404() {
  return ( 
   <section className='error404'>
        
        <img src="https://static.vecteezy.com/system/resources/previews/021/879/345/original/casino-poker-3d-illustration-png.png" alt="" />

        <aside className='error404Aside'>
            
            <div className='error404title'>
                <h2>Error</h2>
                <h2>404</h2>
            </div>
            
            <p>
                <span>La página a la que intentas acceder no existe. </span>
                 Verifica que has ingresado correctamente la URL o vuelve al Inicio para continuar con la navegación.
            </p>
        </aside>

        <ButtonAditional data={"Volver al Inicio"} colorSet={"Primary"} to={"/"}/>

   </section>
  );
}

export default Error404;
